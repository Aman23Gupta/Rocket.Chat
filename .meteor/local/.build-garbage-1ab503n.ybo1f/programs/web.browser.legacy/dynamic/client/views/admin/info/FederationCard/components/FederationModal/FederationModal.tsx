function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/info/FederationCard/components/FederationModal/FederationModal.tsx                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["onClose"];

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 1);
module.export({
  FederationModal: function () {
    return FederationModal;
  }
});
var Box, Button, ButtonGroup, Field, FieldGroup, Modal, Select, Tabs, TextInput;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Button: function (v) {
    Button = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Field: function (v) {
    Field = v;
  },
  FieldGroup: function (v) {
    FieldGroup = v;
  },
  Modal: function (v) {
    Modal = v;
  },
  Select: function (v) {
    Select = v;
  },
  Tabs: function (v) {
    Tabs = v;
  },
  TextInput: function (v) {
    TextInput = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var parseDomain;
module.link("psl", {
  parse: function (v) {
    parseDomain = v;
  }
}, 2);
var React, useCallback, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 3);
var useSetting, useSettingSetValue;
module.link("../../../../../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  },
  useSettingSetValue: function (v) {
    useSettingSetValue = v;
  }
}, 4);
var useTranslation;
module.link("../../../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 5);
var useForm;
module.link("../../../../../../hooks/useForm", {
  useForm: function (v) {
    useForm = v;
  }
}, 6);
var DNSRecords;
module.link("./DNSRecords", {
  DNSRecords: function (v) {
    DNSRecords = v;
  }
}, 7);
var InviteUsers;
module.link("./InviteUsers", {
  "default": function (v) {
    InviteUsers = v;
  }
}, 8);
var TXTRecordValue;
module.link("./Types", {
  TXTRecordValue: function (v) {
    TXTRecordValue = v;
  }
}, 9);

var FederationModal = function (_ref) {
  var _txt;

  var onClose = _ref.onClose,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation(); // State

  var _useState = useState(1),
      _useState2 = _slicedToArray(_useState, 2),
      currentStep = _useState2[0],
      setCurrentStep = _useState2[1];

  var _useState3 = useState(1),
      _useState4 = _slicedToArray(_useState3, 2),
      currentTab = _useState4[0],
      setCurrentTab = _useState4[1]; // Settings


  var siteUrl = useSetting('Site_Url');

  var _URL = new URL(siteUrl),
      protocol = _URL.protocol,
      rocketChatDomain = _URL.hostname,
      rocketChatPort = _URL.port;

  var rocketChatProtocol = protocol.slice(0, -1);
  var federationDomain = useSetting('FEDERATION_Domain');
  var setFederationDomain = useSettingSetValue('FEDERATION_Domain');
  var federationSubdomain = '';
  var parsedDomain = parseDomain(federationDomain);

  if (parsedDomain !== null && parsedDomain !== void 0 && parsedDomain.subdomain) {
    federationSubdomain = parsedDomain.subdomain || '';
  }

  var federationDiscoveryMethod = useSetting('FEDERATION_Discovery_Method');
  var setFederationDiscoveryMethod = useSettingSetValue('FEDERATION_Discovery_Method');
  var federationPublicKey = useSetting('FEDERATION_Public_Key'); // Form

  var discoveryOptions = [['dns', 'DNS (recommended)'], ['hub', 'HUB']];
  var initialValues = {
    domain: federationDomain,
    discoveryMethod: federationDiscoveryMethod
  };

  var _useForm = useForm(initialValues),
      values = _useForm.values,
      handlers = _useForm.handlers,
      hasUnsavedChanges = _useForm.hasUnsavedChanges,
      commit = _useForm.commit;

  var domain = values.domain,
      discoveryMethod = values.discoveryMethod;
  var handleDomain = handlers.handleDomain,
      handleDiscoveryMethod = handlers.handleDiscoveryMethod;
  var onChangeDomain = useMutableCallback(function (value) {
    handleDomain(value);
  });
  var onChangeDiscoveryMethod = useMutableCallback(function (value) {
    handleDiscoveryMethod(value);
  }); // Wizard

  var nextStep = useCallback(function () {
    if (currentStep === 1 && hasUnsavedChanges) {
      setFederationDomain(domain);
      setFederationDiscoveryMethod(discoveryMethod);
      commit();
    }

    if (currentStep === 3) {
      onClose();
    } else {
      setCurrentStep(currentStep + 1);
    }
  }, [currentStep, hasUnsavedChanges, domain, discoveryMethod, commit, onClose, setFederationDomain, setFederationDiscoveryMethod]);
  var previousStep = useCallback(function () {
    if (currentStep === 1) {
      onClose();
    } else {
      setCurrentStep(currentStep - 1);
    }
  }, [currentStep, onClose]); // Resolve DNS

  var resolvedSRVString = useSetting('FEDERATION_ResolvedSRV');
  var resolvedSRV = JSON.parse(resolvedSRVString || '{}');
  var resolvedPublicKeyTXT = useSetting('FEDERATION_ResolvedPublicKeyTXT');
  var resolvedProtocolTXT = useSetting('FEDERATION_ResolvedProtocolTXT');
  var resolvedDNS = {
    srv: resolvedSRV,
    txt: (_txt = {}, _txt[TXTRecordValue.PUBLIC_KEY] = resolvedPublicKeyTXT, _txt[TXTRecordValue.PROTOCOL] = resolvedProtocolTXT, _txt)
  };
  return /*#__PURE__*/React.createElement(Modal, props, currentStep === 1 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Modal.Header, null, /*#__PURE__*/React.createElement(Modal.Title, null, t('Federation')), /*#__PURE__*/React.createElement(Modal.Close, {
    onClick: onClose
  })), /*#__PURE__*/React.createElement(Modal.Content, null, /*#__PURE__*/React.createElement(FieldGroup, null, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Federation_Domain')), /*#__PURE__*/React.createElement(Field.Description, null, t('Federation_Domain_details')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    placeholder: "rocket.chat",
    value: domain,
    onChange: onChangeDomain
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Federation_Discovery_method')), /*#__PURE__*/React.createElement(Field.Description, null, t('Federation_Discovery_method_details')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Select, {
    width: "250px",
    value: discoveryMethod || 'dns',
    options: discoveryOptions,
    onChange: onChangeDiscoveryMethod
  })))))), currentStep === 2 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Modal.Header, null, /*#__PURE__*/React.createElement(Modal.Title, null, t('Federation_Adding_to_your_server')), /*#__PURE__*/React.createElement(Modal.Close, {
    onClick: onClose
  })), /*#__PURE__*/React.createElement(Modal.Content, null, /*#__PURE__*/React.createElement(Tabs, {
    mi: "neg-x24"
  }, /*#__PURE__*/React.createElement(Tabs.Item, {
    selected: currentTab === 1,
    onClick: function () {
      return setCurrentTab(1);
    }
  }, t('Federation_Configure_DNS')), /*#__PURE__*/React.createElement(Tabs.Item, {
    selected: currentTab === 2,
    onClick: function () {
      return setCurrentTab(2);
    }
  }, t('Federation_Legacy_support'))), /*#__PURE__*/React.createElement(Box, {
    mbs: "x24"
  }, currentTab === 1 && /*#__PURE__*/React.createElement(DNSRecords, {
    federationSubdomain: federationSubdomain,
    federationPublicKey: federationPublicKey,
    rocketChatProtocol: rocketChatProtocol,
    rocketChatDomain: rocketChatDomain,
    rocketChatPort: rocketChatPort,
    resolvedEntries: resolvedDNS
  }), currentTab === 2 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
    mbe: "x16"
  }, /*#__PURE__*/React.createElement(Box, {
    is: "p",
    fontWeight: "c2",
    fontSize: "p2"
  }, t('Federation_SRV_no_support')), /*#__PURE__*/React.createElement(Box, {
    is: "p",
    mbs: "x8",
    fontSize: "x12"
  }, t('Federation_SRV_no_support_details'))), /*#__PURE__*/React.createElement(DNSRecords, {
    federationSubdomain: federationSubdomain,
    federationPublicKey: federationPublicKey,
    rocketChatProtocol: rocketChatProtocol,
    rocketChatDomain: rocketChatDomain,
    rocketChatPort: rocketChatPort,
    resolvedEntries: resolvedDNS,
    legacy: true
  }))))), currentStep === 3 && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Modal.Header, null, /*#__PURE__*/React.createElement(Modal.Title, null, t('Federation_Adding_users_from_another_server')), /*#__PURE__*/React.createElement(Modal.Close, {
    onClick: onClose
  })), /*#__PURE__*/React.createElement(Modal.Content, null, /*#__PURE__*/React.createElement(InviteUsers, {
    onClose: onClose
  }))), /*#__PURE__*/React.createElement(Modal.Footer, null, currentStep === 2 && /*#__PURE__*/React.createElement(Box, {
    mbs: "x8",
    color: "hint",
    fontSize: "x12",
    position: "absolute"
  }, t('Federation_DNS_info_update')), /*#__PURE__*/React.createElement(ButtonGroup, {
    align: "end"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: previousStep
  }, currentStep === 1 ? t('Cancel') : t('Back')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: nextStep
  }, currentStep === 3 ? t('Finish') : t('Next')))));
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/info/FederationCard/components/FederationModal/f8ea14ebe451dc2d30b3e2f261a10b101a69994a.map
