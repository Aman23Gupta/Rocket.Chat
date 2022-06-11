function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/info/FederationCard/FederationCard.tsx                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, Button, ButtonGroup, ToggleSwitch;
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
  ToggleSwitch: function (v) {
    ToggleSwitch = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 2);
var Card;
module.link("../../../../components/Card", {
  "default": function (v) {
    Card = v;
  }
}, 3);
var useSetModal;
module.link("../../../../contexts/ModalContext", {
  useSetModal: function (v) {
    useSetModal = v;
  }
}, 4);
var useSetting, useSettingSetValue;
module.link("../../../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  },
  useSettingSetValue: function (v) {
    useSettingSetValue = v;
  }
}, 5);
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 6);
var SettingsProvider;
module.link("../../../../providers/SettingsProvider", {
  "default": function (v) {
    SettingsProvider = v;
  }
}, 7);
var CardHeader, Section;
module.link("./components", {
  CardHeader: function (v) {
    CardHeader = v;
  },
  Section: function (v) {
    Section = v;
  }
}, 8);
var FederationModal;
module.link("./components/FederationModal", {
  FederationModal: function (v) {
    FederationModal = v;
  }
}, 9);
var SectionStatus;
module.link("./components/Section", {
  SectionStatus: function (v) {
    SectionStatus = v;
  }
}, 10);

var FederationCard = function () {
  var t = useTranslation();
  var setModal = useSetModal();
  var federationEnabled = useSetting('FEDERATION_Enabled');
  var setFederationEnabled = useSettingSetValue('FEDERATION_Enabled');
  var federationHealthy = useSetting('FEDERATION_Healthy');
  var federationPopulated = useSetting('FEDERATION_Populated'); // Set status of each section
  // - Enabled

  var federationEnabledStatus = federationEnabled ? SectionStatus.SUCCESS : SectionStatus.UNKNOWN; // - Setup

  var federationSetupStatus = federationHealthy ? SectionStatus.SUCCESS : SectionStatus.FAILED; // - Adding users

  var federationAddingUsersStatus;

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


  var handleModal = useMutableCallback(function () {
    return setModal( /*#__PURE__*/React.createElement(SettingsProvider, {
      privileged: true
    }, /*#__PURE__*/React.createElement(FederationModal, {
      onClose: function () {
        setModal();
      }
    })));
  });
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
    onChange: function () {
      return setFederationEnabled(!federationEnabled);
    }
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
//# sourceMappingURL=/dynamic/client/views/admin/info/FederationCard/b0247d0244c3fa16bd590f49504ebf9e62027b0c.map
