function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/info/FederationCard/components/FederationModal/DNSRecords.tsx                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  DNSRecords: () => DNSRecords
});
let Box;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  }

}, 0);

let _;

module.link("lodash", {
  default(v) {
    _ = v;
  }

}, 1);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 2);
let useTranslation;
module.link("../../../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let SectionStatus;
module.link("../Section", {
  SectionStatus(v) {
    SectionStatus = v;
  }

}, 4);
let DNSRecordItem;
module.link("./DNSRecordItem", {
  DNSRecordItem(v) {
    DNSRecordItem = v;
  }

}, 5);
let DNSText;
module.link("./DNSText", {
  DNSText(v) {
    DNSText = v;
  }

}, 6);
let DNSRecordName, DNSRecordType, TXTRecordValue;
module.link("./Types", {
  DNSRecordName(v) {
    DNSRecordName = v;
  },

  DNSRecordType(v) {
    DNSRecordType = v;
  },

  TXTRecordValue(v) {
    TXTRecordValue = v;
  }

}, 7);

const DNSRecords = _ref => {
  let {
    federationSubdomain,
    rocketChatProtocol,
    federationPublicKey,
    rocketChatDomain,
    rocketChatPort,
    resolvedEntries,
    legacy
  } = _ref;
  const t = useTranslation();

  function buildDNSRecord(type, name, expectedValue) {
    let options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
      rootLevelEntry: false
    };
    const {
      rootLevelEntry,
      longValueTitle
    } = options || {};
    let {
      title
    } = options || {};

    if (type === DNSRecordType.TXT && !rootLevelEntry && !title) {
      title = 'Value';
    }

    const dnsRecord = {
      status: SectionStatus.UNKNOWN,
      title: title || _.capitalize(name.toString()),
      expectedValue
    };

    if (rootLevelEntry) {
      dnsRecord.value = dnsRecord.expectedValue;
    }

    switch (type) {
      case DNSRecordType.SRV:
        {
          const value = resolvedEntries[type][name];

          if (value) {
            dnsRecord.value = value.toString();
          }

          break;
        }

      case DNSRecordType.TXT:
        {
          if (!rootLevelEntry) {
            dnsRecord.value = resolvedEntries[type][name];
          }

          break;
        }
    } // Check the status
    // If this is a root level entry, it will always fail if we can't find a resolved entry


    if (rootLevelEntry) {
      switch (type) {
        case DNSRecordType.SRV:
          {
            dnsRecord.status = Object.keys(resolvedEntries[type]).length > 0 ? SectionStatus.SUCCESS : SectionStatus.FAILED;
            break;
          }

        case DNSRecordType.TXT:
          {
            dnsRecord.status = resolvedEntries[type][name] ? SectionStatus.SUCCESS : SectionStatus.UNKNOWN;
            break;
          }
      }
    } // If the entry is not failed, check the value


    if (dnsRecord.status !== SectionStatus.FAILED) {
      dnsRecord.status = dnsRecord.value === expectedValue ? SectionStatus.SUCCESS : SectionStatus.FAILED;
    } // If the entry has a long value, hide it


    if (longValueTitle) {
      var _dnsRecord$value;

      dnsRecord.expectedValue = longValueTitle;
      dnsRecord.value = "".concat((_dnsRecord$value = dnsRecord.value) === null || _dnsRecord$value === void 0 ? void 0 : _dnsRecord$value.substr(0, 40), "...");
    } // If this is a root level entry, we hide the error string


    dnsRecord.hideErrorString = rootLevelEntry;
    return dnsRecord;
  }

  const srvDNSRecords = [buildDNSRecord(DNSRecordType.SRV, DNSRecordName.SERVICE, '_rocketchat', {
    rootLevelEntry: true
  }), buildDNSRecord(DNSRecordType.SRV, DNSRecordName.PROTOCOL, legacy ? '_tcp' : "_".concat(rocketChatProtocol), {
    rootLevelEntry: true
  }), buildDNSRecord(DNSRecordType.SRV, DNSRecordName.NAME, federationSubdomain, {
    rootLevelEntry: true
  }), buildDNSRecord(DNSRecordType.SRV, DNSRecordName.TARGET, rocketChatDomain), buildDNSRecord(DNSRecordType.SRV, DNSRecordName.PORT, rocketChatPort), buildDNSRecord(DNSRecordType.SRV, DNSRecordName.WEIGHT, '1'), buildDNSRecord(DNSRecordType.SRV, DNSRecordName.PRIORITY, '1'), buildDNSRecord(DNSRecordType.SRV, DNSRecordName.TTL, '1', {
    rootLevelEntry: true,
    title: 'TTL'
  })];
  const txtDNSRecords = [buildDNSRecord(DNSRecordType.TXT, DNSRecordName.HOST, "rocketchat-public-key".concat(federationSubdomain ? ".".concat(federationSubdomain) : ''), {
    rootLevelEntry: true
  }), buildDNSRecord(DNSRecordType.TXT, TXTRecordValue.PUBLIC_KEY, federationPublicKey, {
    rootLevelEntry: false,
    longValueTitle: '<my-public-key>'
  })];
  let legacyTxtDNSRecords = [];

  if (legacy) {
    legacyTxtDNSRecords = [buildDNSRecord(DNSRecordType.TXT, DNSRecordName.PROTOCOL, "rocketchat-tcp-protocol".concat(federationSubdomain ? ".".concat(federationSubdomain) : ''), {
      rootLevelEntry: true
    }), buildDNSRecord(DNSRecordType.TXT, TXTRecordValue.PROTOCOL, rocketChatProtocol)];
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(DNSText, {
    text: t('Federation_Must_add_records')
  }), /*#__PURE__*/React.createElement(Box, {
    mbs: "x16"
  }, /*#__PURE__*/React.createElement(DNSText, {
    text: t('Federation_SRV_records_200')
  }), /*#__PURE__*/React.createElement(Box, {
    mbs: "x8"
  }, srvDNSRecords.map(record => /*#__PURE__*/React.createElement(DNSRecordItem, {
    key: record.title,
    record: record
  })))), /*#__PURE__*/React.createElement(Box, {
    mbs: "x16"
  }, /*#__PURE__*/React.createElement(DNSText, {
    text: t('Federation_Public_key_TXT_record')
  }), /*#__PURE__*/React.createElement(Box, {
    mbs: "x8"
  }, txtDNSRecords.map(record => /*#__PURE__*/React.createElement(DNSRecordItem, {
    key: record.title,
    record: record
  })))), !legacy && /*#__PURE__*/React.createElement(Box, {
    mbs: "x16",
    p: "x16",
    bg: "disabled",
    fontSize: "x12"
  }, /*#__PURE__*/React.createElement(Box, {
    fontWeight: "c2"
  }, t('Federation_HTTP_instead_HTTPS')), t('Federation_HTTP_instead_HTTPS_details')), legacy && /*#__PURE__*/React.createElement(Box, {
    mbs: "x16"
  }, /*#__PURE__*/React.createElement(DNSText, {
    text: t('Federation_Protocol_TXT_record')
  }), /*#__PURE__*/React.createElement(Box, {
    mbs: "x8"
  }, legacyTxtDNSRecords.map(record => /*#__PURE__*/React.createElement(DNSRecordItem, {
    key: record.title,
    record: record
  })))));
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/info/FederationCard/components/FederationModal/ebe06bb164ef6144f5b8bf3e4fd90e28ceefa65c.map
