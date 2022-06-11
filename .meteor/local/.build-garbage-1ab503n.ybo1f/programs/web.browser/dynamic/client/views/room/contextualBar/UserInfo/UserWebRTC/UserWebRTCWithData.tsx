function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/UserInfo/UserWebRTC/UserWebRTCWithData.tsx                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _templateObject;

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _taggedTemplateLiteral;

module.link("@babel/runtime/helpers/taggedTemplateLiteral", {
  default(v) {
    _taggedTemplateLiteral = v;
  }

}, 1);
let css;
module.link("@rocket.chat/css-in-js", {
  css(v) {
    css = v;
  }

}, 0);
let Box;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  }

}, 1);
let colors;
module.link("@rocket.chat/fuselage-tokens/colors.json", {
  default(v) {
    colors = v;
  }

}, 2);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 3);
let createPortal;
module.link("react-dom", {
  createPortal(v) {
    createPortal = v;
  }

}, 4);
let VerticalBar;
module.link("../../../../../components/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 5);
let createAnchor;
module.link("../../../../../lib/utils/createAnchor", {
  createAnchor(v) {
    createAnchor = v;
  }

}, 6);
let useWebRTC;
module.link("../../../hooks/useWebRTC", {
  useWebRTC(v) {
    useWebRTC = v;
  }

}, 7);
let UserWebRTC;
module.link("./UserWebRTC", {
  default(v) {
    UserWebRTC = v;
  }

}, 8);
let UserWebRTCButtons;
module.link("./UserWebRTCButtons", {
  default(v) {
    UserWebRTCButtons = v;
  }

}, 9);

const UserWebRTCWithData = props => {
  const webRTCData = useWebRTC(props.rid);
  const {
    overlayEnabled
  } = webRTCData;
  const videoOverlay = css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t\tposition: fixed;\n\t\tz-index: 1000;\n\t\ttop: 0;\n\t\tright: 0;\n\t\tbottom: 0;\n\t\tleft: 0;\n\n\t\tdisplay: flex;\n\t\toverflow-y: auto;\n\t\tflex-direction: column;\n\n\t\tpadding: var(--default-small-padding);\n\n\t\tbackground-color: ", ";\n\t"])), colors.white);

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
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/UserInfo/UserWebRTC/7484bc8c1ea5ec90ba1da909847e9a4bc8977a4c.map
