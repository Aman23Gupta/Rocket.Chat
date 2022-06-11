function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Call/BBB/CallBBB.tsx                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["handleClose", "canManageCall", "live", "startCall", "endCall", "openNewWindow"];

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 0);
var Box, Button, ButtonGroup;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Button: function (v) {
    Button = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var VerticalBar;
module.link("../../../../../components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 2);
var useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);

var CallBBB = function (_ref) {
  var handleClose = _ref.handleClose,
      canManageCall = _ref.canManageCall,
      live = _ref.live,
      startCall = _ref.startCall,
      endCall = _ref.endCall,
      openNewWindow = _ref.openNewWindow,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VerticalBar.Header, null, /*#__PURE__*/React.createElement(VerticalBar.Icon, {
    name: "phone"
  }), /*#__PURE__*/React.createElement(VerticalBar.Text, null, t('Call')), handleClose && /*#__PURE__*/React.createElement(VerticalBar.Close, {
    onClick: handleClose
  })), /*#__PURE__*/React.createElement(VerticalBar.ScrollableContent, props, openNewWindow ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
    fontScale: "p2m"
  }, t('Video_Conference')), /*#__PURE__*/React.createElement(Box, {
    fontScale: "p2",
    color: "neutral-700"
  }, t('Opened_in_a_new_window'))) : null, /*#__PURE__*/React.createElement(ButtonGroup, {
    stretch: true
  }, live && /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: startCall
  }, t('BBB_Join_Meeting')), live && canManageCall && /*#__PURE__*/React.createElement(Button, {
    danger: true,
    onClick: endCall
  }, t('BBB_End_Meeting')), !live && canManageCall && /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: startCall
  }, t('BBB_Start_Meeting')), !live && !canManageCall && /*#__PURE__*/React.createElement(Button, {
    primary: true
  }, t('BBB_You_have_no_permission_to_start_a_call')))));
};

module.exportDefault(CallBBB);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Call/BBB/31fab4d9edf768e40e0130508237855f51ae60cb.map
