function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/preferences/MyDataModal.tsx                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["onCancel", "title", "text"];

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 0);
let ButtonGroup, Button, Icon, Box, Modal;
module.link("@rocket.chat/fuselage", {
  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Button(v) {
    Button = v;
  },

  Icon(v) {
    Icon = v;
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
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);

const MyDataModal = _ref => {
  let {
    onCancel,
    title,
    text
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  return /*#__PURE__*/React.createElement(Modal, props, /*#__PURE__*/React.createElement(Modal.Header, null, /*#__PURE__*/React.createElement(Icon, {
    color: "success",
    name: "circle-check",
    size: 20
  }), /*#__PURE__*/React.createElement(Modal.Title, null, title), /*#__PURE__*/React.createElement(Modal.Close, {
    onClick: onCancel
  })), /*#__PURE__*/React.createElement(Modal.Content, {
    fontScale: "p2"
  }, /*#__PURE__*/React.createElement(Box, {
    mb: "x8"
  }, text)), /*#__PURE__*/React.createElement(Modal.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    align: "end"
  }, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: onCancel
  }, t('Ok')))));
};

module.exportDefault(MyDataModal);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/account/preferences/5d0f147b9e205fec80e6a2432fafc651592b99c7.map
