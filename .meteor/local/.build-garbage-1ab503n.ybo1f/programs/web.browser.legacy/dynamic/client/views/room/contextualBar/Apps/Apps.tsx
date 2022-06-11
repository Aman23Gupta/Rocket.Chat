function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Apps/Apps.tsx                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var ButtonGroup, Button, Box, Avatar;
module.link("@rocket.chat/fuselage", {
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Button: function (v) {
    Button = v;
  },
  Box: function (v) {
    Box = v;
  },
  Avatar: function (v) {
    Avatar = v;
  }
}, 0);
var UiKitComponent, UiKitModal;
module.link("@rocket.chat/fuselage-ui-kit", {
  UiKitComponent: function (v) {
    UiKitComponent = v;
  },
  UiKitModal: function (v) {
    UiKitModal = v;
  }
}, 1);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 2);
var getURL;
module.link("../../../../../app/utils/lib/getURL", {
  getURL: function (v) {
    getURL = v;
  }
}, 3);
var VerticalBar;
module.link("../../../../components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 4);
var modalParser;
module.link("../../../blocks/ModalBlock", {
  modalParser: function (v) {
    modalParser = v;
  }
}, 5);

var Apps = function (_ref) {
  var view = _ref.view,
      onSubmit = _ref.onSubmit,
      onClose = _ref.onClose,
      onCancel = _ref.onCancel,
      appInfo = _ref.appInfo;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VerticalBar.Header, null, /*#__PURE__*/React.createElement(Avatar, {
    url: getURL("/api/apps/" + appInfo.id + "/icon")
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
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Apps/4cde8fe58b3a358bda4a9aa28f9e53d31c971ba5.map
