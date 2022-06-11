function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/Call/Jitsi/CallJitsi.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
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

var CallJitsi = function (_ref) {
  var handleClose = _ref.handleClose,
      openNewWindow = _ref.openNewWindow,
      refContent = _ref.refContent,
      children = _ref.children;
  var t = useTranslation();
  var content = openNewWindow ? /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
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
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/Call/Jitsi/b3111c36a6b9f5d0eef3797fef82c7644a830bb6.map
