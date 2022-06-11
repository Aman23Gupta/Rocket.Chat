function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/Announcement/AnnouncementModal.tsx                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["onClose", "confirmLabel", "children"];

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 0);
let Button, ButtonGroup, Box, Modal;
module.link("@rocket.chat/fuselage", {
  Button(v) {
    Button = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Box(v) {
    Box = v;
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
let MarkdownText;
module.link("../../../components/MarkdownText", {
  default(v) {
    MarkdownText = v;
  }

}, 2);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);

const AnnouncementModal = _ref => {
  let {
    onClose,
    confirmLabel = 'Close',
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  return /*#__PURE__*/React.createElement(Modal, props, /*#__PURE__*/React.createElement(Modal.Header, null, /*#__PURE__*/React.createElement(Modal.Title, null, t('Announcement')), /*#__PURE__*/React.createElement(Modal.Close, {
    onClick: onClose
  })), /*#__PURE__*/React.createElement(Modal.Content, null, /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(MarkdownText, {
    content: children
  }))), /*#__PURE__*/React.createElement(Modal.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    align: "end"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onClose
  }, confirmLabel))));
};

module.exportDefault(AnnouncementModal);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/Announcement/355eefa81e4ec08d66af25f4950bd914e97defc1.map
