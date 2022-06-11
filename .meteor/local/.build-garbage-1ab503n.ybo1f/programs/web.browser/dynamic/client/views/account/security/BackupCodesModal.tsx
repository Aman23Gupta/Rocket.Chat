function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/security/BackupCodesModal.tsx                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["codes", "onClose"];

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 0);
let Box, Button, Icon, ButtonGroup, Modal;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Button(v) {
    Button = v;
  },

  Icon(v) {
    Icon = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Modal(v) {
    Modal = v;
  }

}, 0);
let React, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 1);
let TextCopy;
module.link("../../../components/TextCopy", {
  default(v) {
    TextCopy = v;
  }

}, 2);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);

const BackupCodesModal = _ref => {
  let {
    codes,
    onClose
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const codesText = useMemo(() => codes.join(' '), [codes]);
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
//# sourceMappingURL=/dynamic/client/views/account/security/273e66db170339d039f2edf9adb0405b9654daea.map
