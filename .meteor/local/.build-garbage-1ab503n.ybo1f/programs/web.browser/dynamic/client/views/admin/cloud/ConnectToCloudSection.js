function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/cloud/ConnectToCloudSection.js                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["onRegisterStatusChange"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
let Box, Button, ButtonGroup, Throbber, Callout;
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

  Throbber(v) {
    Throbber = v;
  },

  Callout(v) {
    Callout = v;
  }

}, 0);
let useSafely;
module.link("@rocket.chat/fuselage-hooks", {
  useSafely(v) {
    useSafely = v;
  }

}, 1);
let React, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  }

}, 2);
let Subtitle;
module.link("../../../components/Subtitle", {
  default(v) {
    Subtitle = v;
  }

}, 3);
let useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 4);
let useSetting;
module.link("../../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 5);
let useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 6);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 7);

function ConnectToCloudSection(_ref) {
  let {
    onRegisterStatusChange
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  const [isConnecting, setConnecting] = useSafely(useState(false));
  const registerWorkspace = useMethod('cloud:registerWorkspace');
  const syncWorkspace = useMethod('cloud:syncWorkspace');
  const hasAcceptedTerms = useSetting('Cloud_Service_Agree_PrivacyTerms');

  const handleRegisterButtonClick = async () => {
    setConnecting(true);

    try {
      const isRegistered = await registerWorkspace();

      if (!isRegistered) {
        throw Error(t('An error occured'));
      }

      const isSynced = await syncWorkspace();

      if (!isSynced) {
        throw Error(t('An error occured syncing'));
      }

      dispatchToastMessage({
        type: 'success',
        message: t('Sync Complete')
      });
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    } finally {
      await (onRegisterStatusChange && onRegisterStatusChange());
      setConnecting(false);
    }
  };

  return /*#__PURE__*/React.createElement(Box, _extends({
    is: "section"
  }, props), /*#__PURE__*/React.createElement(Subtitle, null, t('Cloud_registration_required')), /*#__PURE__*/React.createElement(Box, {
    withRichContent: true,
    color: "neutral-800"
  }, /*#__PURE__*/React.createElement("p", null, t('Cloud_registration_required_description'))), /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    disabled: isConnecting || !hasAcceptedTerms,
    minHeight: "x40",
    onClick: handleRegisterButtonClick
  }, isConnecting ? /*#__PURE__*/React.createElement(Throbber, {
    is: "span",
    inheritColor: true
  }) : t('Cloud_registration_required_link_text'))), !hasAcceptedTerms && /*#__PURE__*/React.createElement(Box, {
    mb: "x12"
  }, /*#__PURE__*/React.createElement(Callout, {
    type: "warning"
  }, t('Cloud_Service_Agree_PrivacyTerms_Login_Disabled_Warning'))));
}

module.exportDefault(ConnectToCloudSection);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/cloud/b3445c911be1e5d517d31d9df5edb9bff8c9217a.map
