function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Call/BBB/CallBBB.tsx                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["handleClose", "canManageCall", "live", "startCall", "endCall", "openNewWindow"];

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 0);
let Box, Button, ButtonGroup;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Button(v) {
    Button = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let VerticalBar;
module.link("../../../../../components/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 2);
let useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);

const CallBBB = _ref => {
  let {
    handleClose,
    canManageCall,
    live,
    startCall,
    endCall,
    openNewWindow
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
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
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Call/BBB/22fcc003763c18b390942428fb23f98898e4f6bb.map
