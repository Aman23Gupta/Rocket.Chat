function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/security/BackupCodesModal.tsx                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["codes", "onClose"];

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 0);
var Box, Button, Icon, ButtonGroup, Modal;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Button: function (v) {
    Button = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Modal: function (v) {
    Modal = v;
  }
}, 0);
var React, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 1);
var TextCopy;
module.link("../../../components/TextCopy", {
  "default": function (v) {
    TextCopy = v;
  }
}, 2);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);

var BackupCodesModal = function (_ref) {
  var codes = _ref.codes,
      onClose = _ref.onClose,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var codesText = useMemo(function () {
    return codes.join(' ');
  }, [codes]);
  return /*#__PURE__*/React.createElement(Modal, props, /*#__PURE__*/React.createElement(Modal.Header, null, /*#__PURE__*/React.createElement(Icon, {
    name: "info",
    size: 20
  }), /*#__PURE__*/React.createElement(Modal.Title, null, t('Backup_codes')), /*#__PURE__*/React.createElement(Modal.Close, {
    onClick: onClose
  })), /*#__PURE__*/React.createElement(Modal.Content, {
    fontScale: "p2"
  }, /*#__PURE__*/React.createElement(Box, {
    mb: "x8",
    withRichContent: true
  }, t('Make_sure_you_have_a_copy_of_your_codes_1')), /*#__PURE__*/React.createElement(TextCopy, {
    text: codesText,
    wordBreak: "break-word",
    mb: "x8"
  }), /*#__PURE__*/React.createElement(Box, {
    mb: "x8",
    withRichContent: true
  }, t('Make_sure_you_have_a_copy_of_your_codes_2'))), /*#__PURE__*/React.createElement(Modal.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    align: "end"
  }, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: onClose
  }, t('Ok')))));
};

module.exportDefault(BackupCodesModal);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/account/security/3f8387c6e5f96c19dcc1c5e874da6f655046cae1.map
