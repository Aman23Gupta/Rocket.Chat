function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/Announcement/AnnouncementModal.tsx                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["onClose", "confirmLabel", "children"];

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 0);
var Button, ButtonGroup, Box, Modal;
module.link("@rocket.chat/fuselage", {
  Button: function (v) {
    Button = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Box: function (v) {
    Box = v;
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
var MarkdownText;
module.link("../../../components/MarkdownText", {
  "default": function (v) {
    MarkdownText = v;
  }
}, 2);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);

var AnnouncementModal = function (_ref) {
  var onClose = _ref.onClose,
      _ref$confirmLabel = _ref.confirmLabel,
      confirmLabel = _ref$confirmLabel === void 0 ? 'Close' : _ref$confirmLabel,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
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
//# sourceMappingURL=/dynamic/client/views/room/Announcement/23f78f57d6471a603b8e113dd88ade4badddfa96.map
