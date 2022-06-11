function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/app/livechat-enterprise/client/components/modals/PlaceChatOnHoldModal.tsx                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["onCancel", "onOnHoldChat", "confirm"];

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 0);
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
module.link("../../../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);

var PlaceChatOnHoldModal = function (_ref) {
  var onCancel = _ref.onCancel,
      onOnHoldChat = _ref.onOnHoldChat,
      _ref$confirm = _ref.confirm,
      confirm = _ref$confirm === void 0 ? onOnHoldChat : _ref$confirm,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  return /*#__PURE__*/React.createElement(Modal, props, /*#__PURE__*/React.createElement(Modal.Header, null, /*#__PURE__*/React.createElement(Icon, {
    name: "pause-unfilled",
    size: 20
  }), /*#__PURE__*/React.createElement(Modal.Title, null, t('Omnichannel_onHold_Chat')), /*#__PURE__*/React.createElement(Modal.Close, {
    onClick: onCancel
  })), /*#__PURE__*/React.createElement(Modal.Content, {
    fontScale: "p2"
  }, t('Would_you_like_to_place_chat_on_hold')), /*#__PURE__*/React.createElement(Modal.Footer, null, /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    align: "end"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onCancel
  }, t('Cancel')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: confirm
  }, t('Omnichannel_onHold_Chat'))))));
};

module.exportDefault(PlaceChatOnHoldModal);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/app/livechat-enterprise/client/components/modals/92e3f69e97d4b256674975678866a34fa235f209.map
