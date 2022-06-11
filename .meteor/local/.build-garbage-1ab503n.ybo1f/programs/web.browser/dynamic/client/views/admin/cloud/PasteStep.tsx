function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/cloud/PasteStep.tsx                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Button, ButtonGroup, Scrollable, Throbber, Modal;
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

  Scrollable(v) {
    Scrollable = v;
  },

  Throbber(v) {
    Throbber = v;
  },

  Modal(v) {
    Modal = v;
  }

}, 0);
let React, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  }

}, 1);
let useEndpoint;
module.link("../../../contexts/ServerContext", {
  useEndpoint(v) {
    useEndpoint = v;
  }

}, 2);
let useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 3);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 4);

const PasteStep = _ref => {
  let {
    onBackButtonClick,
    onFinish
  } = _ref;
  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  const [isLoading, setLoading] = useState(false);
  const [cloudKey, setCloudKey] = useState('');

  const handleCloudKeyChange = e => {
    setCloudKey(e.currentTarget.value);
  };

  const registerManually = useEndpoint('POST', 'cloud.manualRegister');

  const handleFinishButtonClick = async () => {
    setLoading(true);

    try {
      await registerManually({
        cloudBlob: cloudKey
      });
      dispatchToastMessage({
        type: 'success',
        message: t('Cloud_register_success')
      });
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: t('Cloud_register_error')
      });
    } finally {
      setLoading(false);
      onFinish === null || onFinish === void 0 ? void 0 : onFinish();
    }
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Modal.Content, null, /*#__PURE__*/React.createElement(Box, {
    withRichContent: true
  }, /*#__PURE__*/React.createElement("p", null, t('Cloud_register_offline_finish_helper'))), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    padding: "x16",
    flexGrow: 1,
    backgroundColor: "neutral-800"
  }, /*#__PURE__*/React.createElement(Scrollable, {
    vertical: true
  }, /*#__PURE__*/React.createElement(Box, {
    is: "textarea",
    height: "x108",
    fontFamily: "mono",
    fontScale: "p2",
    color: "alternative",
    style: {
      wordBreak: 'break-all',
      resize: 'none'
    },
    placeholder: t('Paste_here'),
    disabled: isLoading,
    value: cloudKey,
    autoComplete: "off",
    autoCorrect: "off",
    autoCapitalize: "off",
    spellCheck: "false",
    onChange: handleCloudKeyChange
  })))), /*#__PURE__*/React.createElement(Modal.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
    disabled: isLoading,
    onClick: onBackButtonClick
  }, t('Back')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    disabled: isLoading || !cloudKey.trim(),
    marginInlineStart: "auto",
    onClick: handleFinishButtonClick
  }, isLoading ? /*#__PURE__*/React.createElement(Throbber, {
    inheritColor: true
  }) : t('Finish_Registration')))));
};

module.exportDefault(PasteStep);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/cloud/44b163556c094886b6ee24ce92cbf54b03ae41db.map
