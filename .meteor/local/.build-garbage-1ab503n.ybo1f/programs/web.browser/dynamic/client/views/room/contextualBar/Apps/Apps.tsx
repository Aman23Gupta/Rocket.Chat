function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Apps/Apps.tsx                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let ButtonGroup, Button, Box, Avatar;
module.link("@rocket.chat/fuselage", {
  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Button(v) {
    Button = v;
  },

  Box(v) {
    Box = v;
  },

  Avatar(v) {
    Avatar = v;
  }

}, 0);
let UiKitComponent, UiKitModal;
module.link("@rocket.chat/fuselage-ui-kit", {
  UiKitComponent(v) {
    UiKitComponent = v;
  },

  UiKitModal(v) {
    UiKitModal = v;
  }

}, 1);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 2);
let getURL;
module.link("../../../../../app/utils/lib/getURL", {
  getURL(v) {
    getURL = v;
  }

}, 3);
let VerticalBar;
module.link("../../../../components/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 4);
let modalParser;
module.link("../../../blocks/ModalBlock", {
  modalParser(v) {
    modalParser = v;
  }

}, 5);

const Apps = _ref => {
  let {
    view,
    onSubmit,
    onClose,
    onCancel,
    appInfo
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VerticalBar.Header, null, /*#__PURE__*/React.createElement(Avatar, {
    url: getURL("/api/apps/".concat(appInfo.id, "/icon"))
  }), /*#__PURE__*/React.createElement(VerticalBar.Text, null, modalParser.text(view.title)), onClose && /*#__PURE__*/React.createElement(VerticalBar.Close, {
    onClick: onClose
  })), /*#__PURE__*/React.createElement(VerticalBar.ScrollableContent, null, /*#__PURE__*/React.createElement(Box, {
    is: "form",
    method: "post",
    action: "#",
    onSubmit: onSubmit
  }, /*#__PURE__*/React.createElement(UiKitComponent, {
    render: UiKitModal,
    blocks: view.blocks
  }))), /*#__PURE__*/React.createElement(VerticalBar.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    align: "end"
  }, view.close && /*#__PURE__*/React.createElement(Button, {
    onClick: onCancel
  }, modalParser.text(view.close.text)), view.submit && /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: onSubmit
  }, modalParser.text(view.submit.text)))));
};

module.exportDefault(Apps);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Apps/a212f983a995d506b255cd2f398103c556303ffc.map
