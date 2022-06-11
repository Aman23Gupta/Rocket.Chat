function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Call/Jitsi/CallJitsi.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
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

const CallJitsi = _ref => {
  let {
    handleClose,
    openNewWindow,
    refContent,
    children
  } = _ref;
  const t = useTranslation();
  const content = openNewWindow ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
    fontScale: "p2m"
  }, t('Video_Conference')), /*#__PURE__*/React.createElement(Box, {
    fontScale: "p2",
    color: "neutral-700"
  }, t('Opened_in_a_new_window'))) : /*#__PURE__*/React.createElement("div", {
    ref: refContent
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VerticalBar.Header, null, /*#__PURE__*/React.createElement(VerticalBar.Icon, {
    name: "phone"
  }), /*#__PURE__*/React.createElement(VerticalBar.Text, null, t('Call')), handleClose && /*#__PURE__*/React.createElement(VerticalBar.Close, {
    onClick: handleClose
  })), /*#__PURE__*/React.createElement(VerticalBar.ScrollableContent, null, content, children));
};

module.exportDefault(CallJitsi);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Call/Jitsi/3a388adac3aeeb8d877f1e4e5f0e1144aca373b5.map
