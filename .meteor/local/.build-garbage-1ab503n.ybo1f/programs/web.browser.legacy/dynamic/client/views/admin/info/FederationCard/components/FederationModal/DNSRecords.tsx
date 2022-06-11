function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/info/FederationCard/components/FederationModal/DNSRecords.tsx                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  DNSRecords: function () {
    return DNSRecords;
  }
});
var Box;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  }
}, 0);

var _;

module.link("lodash", {
  "default": function (v) {
    _ = v;
  }
}, 1);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 2);
var useTranslation;
module.link("../../../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var SectionStatus;
module.link("../Section", {
  SectionStatus: function (v) {
    SectionStatus = v;
  }
}, 4);
var DNSRecordItem;
module.link("./DNSRecordItem", {
  DNSRecordItem: function (v) {
    DNSRecordItem = v;
  }
}, 5);
var DNSText;
module.link("./DNSText", {
  DNSText: function (v) {
    DNSText = v;
  }
}, 6);
var DNSRecordName, DNSRecordType, TXTRecordValue;
module.link("./Types", {
  DNSRecordName: function (v) {
    DNSRecordName = v;
  },
  DNSRecordType: function (v) {
    DNSRecordType = v;
  },
  TXTRecordValue: function (v) {
    TXTRecordValue = v;
  }
}, 7);

var DNSRecords = function (_ref) {
  var federationSubdomain = _ref.federationSubdomain,
      rocketChatProtocol = _ref.rocketChatProtocol,
      federationPublicKey = _ref.federationPublicKey,
      rocketChatDomain = _ref.rocketChatDomain,
      rocketChatPort = _ref.rocketChatPort,
      resolvedEntries = _ref.resolvedEntries,
      legacy = _ref.legacy;
  var t = useTranslation();

  function buildDNSRecord(type, name, expectedValue) {
    var options = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {
      rootLevelEntry: false
    };

    var _ref2 = options || {},
        rootLevelEntry = _ref2.rootLevelEntry,
        longValueTitle = _ref2.longValueTitle;

    var _ref3 = options || {},
        title = _ref3.title;

    if (type === DNSRecordType.TXT && !rootLevelEntry && !title) {
      title = 'Value';
    }

    var dnsRecord = {
      status: SectionStatus.UNKNOWN,
      title: title || _.capitalize(name.toString()),
      expectedValue: expectedValue
    };

    if (rootLevelEntry) {
      dnsRecord.value = dnsRecord.expectedValue;
    }

    switch (type) {
      case DNSRecordType.SRV:
        {
          var value = resolvedEntries[type][name];

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
      dnsRecord.value = ((_dnsRecord$value = dnsRecord.value) === null || _dnsRecord$value === void 0 ? void 0 : _dnsRecord$value.substr(0, 40)) + "...";
    } // If this is a root level entry, we hide the error string


    dnsRecord.hideErrorString = rootLevelEntry;
    return dnsRecord;
  }

  var srvDNSRecords = [buildDNSRecord(DNSRecordType.SRV, DNSRecordName.SERVICE, '_rocketchat', {
    rootLevelEntry: true
  }), buildDNSRecord(DNSRecordType.SRV, DNSRecordName.PROTOCOL, legacy ? '_tcp' : "_" + rocketChatProtocol, {
    rootLevelEntry: true
  }), buildDNSRecord(DNSRecordType.SRV, DNSRecordName.NAME, federationSubdomain, {
    rootLevelEntry: true
  }), buildDNSRecord(DNSRecordType.SRV, DNSRecordName.TARGET, rocketChatDomain), buildDNSRecord(DNSRecordType.SRV, DNSRecordName.PORT, rocketChatPort), buildDNSRecord(DNSRecordType.SRV, DNSRecordName.WEIGHT, '1'), buildDNSRecord(DNSRecordType.SRV, DNSRecordName.PRIORITY, '1'), buildDNSRecord(DNSRecordType.SRV, DNSRecordName.TTL, '1', {
    rootLevelEntry: true,
    title: 'TTL'
  })];
  var txtDNSRecords = [buildDNSRecord(DNSRecordType.TXT, DNSRecordName.HOST, "rocketchat-public-key" + (federationSubdomain ? "." + federationSubdomain : ''), {
    rootLevelEntry: true
  }), buildDNSRecord(DNSRecordType.TXT, TXTRecordValue.PUBLIC_KEY, federationPublicKey, {
    rootLevelEntry: false,
    longValueTitle: '<my-public-key>'
  })];
  var legacyTxtDNSRecords = [];

  if (legacy) {
    legacyTxtDNSRecords = [buildDNSRecord(DNSRecordType.TXT, DNSRecordName.PROTOCOL, "rocketchat-tcp-protocol" + (federationSubdomain ? "." + federationSubdomain : ''), {
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
  }, srvDNSRecords.map(function (record) {
    return /*#__PURE__*/React.createElement(DNSRecordItem, {
      key: record.title,
      record: record
    });
  }))), /*#__PURE__*/React.createElement(Box, {
    mbs: "x16"
  }, /*#__PURE__*/React.createElement(DNSText, {
    text: t('Federation_Public_key_TXT_record')
  }), /*#__PURE__*/React.createElement(Box, {
    mbs: "x8"
  }, txtDNSRecords.map(function (record) {
    return /*#__PURE__*/React.createElement(DNSRecordItem, {
      key: record.title,
      record: record
    });
  }))), !legacy && /*#__PURE__*/React.createElement(Box, {
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
  }, legacyTxtDNSRecords.map(function (record) {
    return /*#__PURE__*/React.createElement(DNSRecordItem, {
      key: record.title,
      record: record
    });
  }))));
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/info/FederationCard/components/FederationModal/8dce73796ac71fa00d53a34d198e3a25e972667f.map
