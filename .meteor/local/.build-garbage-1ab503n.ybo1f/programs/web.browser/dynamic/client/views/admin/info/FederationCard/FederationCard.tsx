function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/info/FederationCard/FederationCard.tsx                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Button, ButtonGroup, ToggleSwitch;
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

  ToggleSwitch(v) {
    ToggleSwitch = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 2);
let Card;
module.link("../../../../components/Card", {
  default(v) {
    Card = v;
  }

}, 3);
let useSetModal;
module.link("../../../../contexts/ModalContext", {
  useSetModal(v) {
    useSetModal = v;
  }

}, 4);
let useSetting, useSettingSetValue;
module.link("../../../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  },

  useSettingSetValue(v) {
    useSettingSetValue = v;
  }

}, 5);
let useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 6);
let SettingsProvider;
module.link("../../../../providers/SettingsProvider", {
  default(v) {
    SettingsProvider = v;
  }

}, 7);
let CardHeader, Section;
module.link("./components", {
  CardHeader(v) {
    CardHeader = v;
  },

  Section(v) {
    Section = v;
  }

}, 8);
let FederationModal;
module.link("./components/FederationModal", {
  FederationModal(v) {
    FederationModal = v;
  }

}, 9);
let SectionStatus;
module.link("./components/Section", {
  SectionStatus(v) {
    SectionStatus = v;
  }

}, 10);

const FederationCard = () => {
  const t = useTranslation();
  const setModal = useSetModal();
  const federationEnabled = useSetting('FEDERATION_Enabled');
  const setFederationEnabled = useSettingSetValue('FEDERATION_Enabled');
  const federationHealthy = useSetting('FEDERATION_Healthy');
  const federationPopulated = useSetting('FEDERATION_Populated'); // Set status of each section
  // - Enabled

  let federationEnabledStatus = federationEnabled ? SectionStatus.SUCCESS : SectionStatus.UNKNOWN; // - Setup

  let federationSetupStatus = federationHealthy ? SectionStatus.SUCCESS : SectionStatus.FAILED; // - Adding users

  let federationAddingUsersStatus;

  if (federationPopulated) {
    federationAddingUsersStatus = SectionStatus.SUCCESS;
  } else if (federationHealthy) {
    federationAddingUsersStatus = SectionStatus.FAILED;
  } else {
    federationAddingUsersStatus = SectionStatus.UNKNOWN;
  }

  if (!federationEnabled) {
    federationEnabledStatus = SectionStatus.UNKNOWN;
    federationSetupStatus = SectionStatus.UNKNOWN;
    federationAddingUsersStatus = SectionStatus.UNKNOWN;
  } // Handle modal


  const handleModal = useMutableCallback(() => setModal( /*#__PURE__*/React.createElement(SettingsProvider, {
    privileged: true
  }, /*#__PURE__*/React.createElement(FederationModal, {
    onClose: () => {
      setModal();
    }
  }))));
  return /*#__PURE__*/React.createElement(Card, null, /*#__PURE__*/React.createElement(CardHeader, null, /*#__PURE__*/React.createElement(Card.Title, null, t('Federation')), /*#__PURE__*/React.createElement(Box, {
    display: "flex"
  }, /*#__PURE__*/React.createElement(Box, {
    mb: "x8",
    fontScale: "c1",
    display: "flex"
  }, t('Enabled')), /*#__PURE__*/React.createElement(ToggleSwitch, {
    mb: "x6",
    mis: "x6",
    checked: federationEnabled,
    onChange: () => setFederationEnabled(!federationEnabled)
  }))), /*#__PURE__*/React.createElement(Card.Body, null, /*#__PURE__*/React.createElement(Card.Col, {
    span: 2
  }, /*#__PURE__*/React.createElement(Section, {
    status: federationEnabledStatus,
    title: t('Federation_Enable'),
    subtitle: t('Federation_Is_working_correctly')
  }), /*#__PURE__*/React.createElement(Section, {
    status: federationSetupStatus,
    title: t('Federation_Adding_to_your_server'),
    subtitle: t('Federation_Changes_needed')
  }, !federationHealthy && /*#__PURE__*/React.createElement("a", {
    onClick: handleModal
  }, t('Federation_Fix_now'))), /*#__PURE__*/React.createElement(Section, {
    status: federationAddingUsersStatus,
    title: t('Federation_Adding_Federated_Users'),
    subtitle: t('Federation_Guide_adding_users')
  }))), /*#__PURE__*/React.createElement(Card.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    align: "end"
  }, /*#__PURE__*/React.createElement(Button, {
    small: true,
    onClick: handleModal
  }, t('Settings')))));
};

module.exportDefault(FederationCard);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/info/FederationCard/8c14caf642c94cb60c561d2558cf5f27c6a381b6.map
