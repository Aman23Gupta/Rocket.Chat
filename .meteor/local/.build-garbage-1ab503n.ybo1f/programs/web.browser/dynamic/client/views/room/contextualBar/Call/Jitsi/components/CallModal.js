function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Call/Jitsi/components/CallModal.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  CallModal: () => CallModal
});
let Box, Button, ButtonGroup, Icon, Modal;
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

  Icon(v) {
    Icon = v;
  },

  Modal(v) {
    Modal = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let useTranslation;
module.link("../../../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);

const CallModal = _ref => {
  let {
    handleYes,
    handleCancel
  } = _ref;
  const t = useTranslation();
  return /*#__PURE__*/React.createElement(Modal, null, /*#__PURE__*/React.createElement(Modal.Header, null, /*#__PURE__*/React.createElement(Modal.Title, null, t('Video_Conference')), /*#__PURE__*/React.createElement(Modal.Close, {
    onClick: handleCancel
  })), /*#__PURE__*/React.createElement(Modal.Content, {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "modal-warning",
    size: "x128",
    color: "warning-500"
  }), /*#__PURE__*/React.createElement(Box, {
    fontScale: "h4"
  }, t('Start_video_call'))), /*#__PURE__*/React.createElement(Modal.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    align: "end"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: handleCancel
  }, t('Cancel')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: handleYes
  }, t('Yes')))));
};

module.exportDefault(CallModal);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Call/Jitsi/components/24c18b13d9e84f5421a266e672fb20b95b0cdf97.map
