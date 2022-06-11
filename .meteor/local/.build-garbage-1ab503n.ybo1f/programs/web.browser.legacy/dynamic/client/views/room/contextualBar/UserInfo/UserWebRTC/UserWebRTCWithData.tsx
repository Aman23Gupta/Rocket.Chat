function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/UserInfo/UserWebRTC/UserWebRTCWithData.tsx                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _templateObject;

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _taggedTemplateLiteralLoose;

module.link("@babel/runtime/helpers/taggedTemplateLiteralLoose", {
  default: function (v) {
    _taggedTemplateLiteralLoose = v;
  }
}, 1);
var css;
module.link("@rocket.chat/css-in-js", {
  css: function (v) {
    css = v;
  }
}, 0);
var Box;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  }
}, 1);
var colors;
module.link("@rocket.chat/fuselage-tokens/colors.json", {
  "default": function (v) {
    colors = v;
  }
}, 2);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 3);
var createPortal;
module.link("react-dom", {
  createPortal: function (v) {
    createPortal = v;
  }
}, 4);
var VerticalBar;
module.link("../../../../../components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 5);
var createAnchor;
module.link("../../../../../lib/utils/createAnchor", {
  createAnchor: function (v) {
    createAnchor = v;
  }
}, 6);
var useWebRTC;
module.link("../../../hooks/useWebRTC", {
  useWebRTC: function (v) {
    useWebRTC = v;
  }
}, 7);
var UserWebRTC;
module.link("./UserWebRTC", {
  "default": function (v) {
    UserWebRTC = v;
  }
}, 8);
var UserWebRTCButtons;
module.link("./UserWebRTCButtons", {
  "default": function (v) {
    UserWebRTCButtons = v;
  }
}, 9);

var UserWebRTCWithData = function (props) {
  var webRTCData = useWebRTC(props.rid);
  var overlayEnabled = webRTCData.overlayEnabled;
  var videoOverlay = css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n\t\tposition: fixed;\n\t\tz-index: 1000;\n\t\ttop: 0;\n\t\tright: 0;\n\t\tbottom: 0;\n\t\tleft: 0;\n\n\t\tdisplay: flex;\n\t\toverflow-y: auto;\n\t\tflex-direction: column;\n\n\t\tpadding: var(--default-small-padding);\n\n\t\tbackground-color: ", ";\n\t"])), colors.white);

  if (overlayEnabled) {
    return /*#__PURE__*/createPortal( /*#__PURE__*/React.createElement(Box, {
      className: videoOverlay
    }, /*#__PURE__*/React.createElement(UserWebRTC, _extends({}, props, {
      webRTCData: webRTCData
    })), webRTCData.isVideoActive() && /*#__PURE__*/React.createElement(UserWebRTCButtons, {
      webRTCData: webRTCData
    })), createAnchor('react-webrtc'));
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VerticalBar.ScrollableContent, null, /*#__PURE__*/React.createElement(UserWebRTC, _extends({}, props, {
    webRTCData: webRTCData
  }))), webRTCData.isVideoActive() && /*#__PURE__*/React.createElement(VerticalBar.Footer, null, /*#__PURE__*/React.createElement(UserWebRTCButtons, {
    webRTCData: webRTCData
  })));
};

module.exportDefault(UserWebRTCWithData);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/UserInfo/UserWebRTC/98c47f89dce7c8cff655ff57970bc16433381f5d.map
