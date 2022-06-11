function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/info/FederationCard/components/FederationModal/FederationModal.tsx                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["onClose"];

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 0);
module.export({
  FederationModal: () => FederationModal
});
let Box, Button, ButtonGroup, Field, FieldGroup, Modal, Select, Tabs, TextInput;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Button(v) {
    Button = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Field(v) {
    Field = v;
  },

  FieldGroup(v) {
    FieldGroup = v;
  },

  Modal(v) {
    Modal = v;
  },

  Select(v) {
    Select = v;
  },

  Tabs(v) {
    Tabs = v;
  },

  TextInput(v) {
    TextInput = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let parseDomain;
module.link("psl", {
  parse(v) {
    parseDomain = v;
  }

}, 2);
let React, useCallback, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useState(v) {
    useState = v;
  }

}, 3);
let useSetting, useSettingSetValue;
module.link("../../../../../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  },

  useSettingSetValue(v) {
    useSettingSetValue = v;
  }

}, 4);
let useTranslation;
module.link("../../../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 5);
let useForm;
module.link("../../../../../../hooks/useForm", {
  useForm(v) {
    useForm = v;
  }

}, 6);
let DNSRecords;
module.link("./DNSRecords", {
  DNSRecords(v) {
    DNSRecords = v;
  }

}, 7);
let InviteUsers;
module.link("./InviteUsers", {
  default(v) {
    InviteUsers = v;
  }

}, 8);
let TXTRecordValue;
module.link("./Types", {
  TXTRecordValue(v) {
    TXTRecordValue = v;
  }

}, 9);

const FederationModal = _ref => {
  let {
    onClose
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation(); // State

  const [currentStep, setCurrentStep] = useState(1);
  const [currentTab, setCurrentTab] = useState(1); // Settings

  const siteUrl = useSetting('Site_Url');
  const {
    protocol,
    hostname: rocketChatDomain,
    port: rocketChatPort
  } = new URL(siteUrl);
  const rocketChatProtocol = protocol.slice(0, -1);
  const federationDomain = useSetting('FEDERATION_Domain');
  const setFederationDomain = useSettingSetValue('FEDERATION_Domain');
  let federationSubdomain = '';
  const parsedDomain = parseDomain(federationDomain);

  if (parsedDomain !== null && parsedDomain !== void 0 && parsedDomain.subdomain) {
    federationSubdomain = parsedDomain.subdomain || '';
  }

  const federationDiscoveryMethod = useSetting('FEDERATION_Discovery_Method');
  const setFederationDiscoveryMethod = useSettingSetValue('FEDERATION_Discovery_Method');
  const federationPublicKey = useSetting('FEDERATION_Public_Key'); // Form

  const discoveryOptions = [['dns', 'DNS (recommended)'], ['hub', 'HUB']];
  const initialValues = {
    domain: federationDomain,
    discoveryMethod: federationDiscoveryMethod
  };
  const {
    values,
    handlers,
    hasUnsavedChanges,
    commit
  } = useForm(initialValues);
  const {
    domain,
    discoveryMethod
  } = values;
  const {
    handleDomain,
    handleDiscoveryMethod
  } = handlers;
  const onChangeDomain = useMutableCallback(value => {
    handleDomain(value);
  });
  const onChangeDiscoveryMethod = useMutableCallback(value => {
    handleDiscoveryMethod(value);
  }); // Wizard

  const nextStep = useCallback(() => {
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
  const previousStep = useCallback(() => {
    if (currentStep === 1) {
      onClose();
    } else {
      setCurrentStep(currentStep - 1);
    }
  }, [currentStep, onClose]); // Resolve DNS

  const resolvedSRVString = useSetting('FEDERATION_ResolvedSRV');
  const resolvedSRV = JSON.parse(resolvedSRVString || '{}');
  const resolvedPublicKeyTXT = useSetting('FEDERATION_ResolvedPublicKeyTXT');
  const resolvedProtocolTXT = useSetting('FEDERATION_ResolvedProtocolTXT');
  const resolvedDNS = {
    srv: resolvedSRV,
    txt: {
      [TXTRecordValue.PUBLIC_KEY]: resolvedPublicKeyTXT,
      [TXTRecordValue.PROTOCOL]: resolvedProtocolTXT
    }
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
    onClick: () => setCurrentTab(1)
  }, t('Federation_Configure_DNS')), /*#__PURE__*/React.createElement(Tabs.Item, {
    selected: currentTab === 2,
    onClick: () => setCurrentTab(2)
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
//# sourceMappingURL=/dynamic/client/views/admin/info/FederationCard/components/FederationModal/7888d44befe4f66a9f3db7d5486b4f55d22f5078.map
