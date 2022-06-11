function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Call/Jitsi/components/CallModal.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  CallModal: function () {
    return CallModal;
  }
});
var Box, Button, ButtonGroup, Icon, Modal;
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
  Icon: function (v) {
    Icon = v;
  },
  Modal: function (v) {
    Modal = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var useTranslation;
module.link("../../../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);

var CallModal = function (_ref) {
  var handleYes = _ref.handleYes,
      handleCancel = _ref.handleCancel;
  var t = useTranslation();
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
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Call/Jitsi/components/908980aa42ef0b1501c2987825e1cad8a34e55fa.map
