function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/UserInfo/UserWebRTC/UserWebRTCRemote.tsx                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _templateObject;

let _taggedTemplateLiteral;

module.link("@babel/runtime/helpers/taggedTemplateLiteral", {
  default(v) {
    _taggedTemplateLiteral = v;
  }

}, 0);
let css;
module.link("@rocket.chat/css-in-js", {
  css(v) {
    css = v;
  }

}, 0);
let Box, Icon;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Icon(v) {
    Icon = v;
  }

}, 1);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 2);
let useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let UserWebRTCVideo;
module.link("./UserWebRTCVideo", {
  default(v) {
    UserWebRTCVideo = v;
  }

}, 4);

const UserWebRTCRemote = props => {
  const t = useTranslation();
  const {
    url,
    id,
    stateText,
    muted,
    ownUser,
    screen,
    audioAndVideoEnabled,
    audioEnabled,
    videoEnabled,
    setMainVideo,
    peerName = '',
    overlayEnabled
  } = props;
  const userName = ownUser ? '$self' : peerName;
  const cursorPointer = css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t\tcursor: pointer;\n\t"])));

  const handleSetMainVideo = () => setMainVideo(userName);

  return /*#__PURE__*/React.createElement(Box, {
    width: overlayEnabled ? '15%' : '48%',
    margin: overlayEnabled ? 'x8' : '',
    className: cursorPointer,
    "data-state-text": stateText,
    "data-username": ownUser ? '$self' : id,
    key: id,
    onClick: handleSetMainVideo
  }, /*#__PURE__*/React.createElement(UserWebRTCVideo, {
    videoEnabled: videoEnabled,
    ownUser: ownUser,
    muted: muted,
    url: url,
    screen: screen
  }), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    width: "full",
    alignItems: "center",
    justifyContent: "center"
  }, /*#__PURE__*/React.createElement(Box, {
    margin: "x4"
  }, ownUser ? t('You') : peerName), /*#__PURE__*/React.createElement(Box, null, ownUser && !audioAndVideoEnabled && /*#__PURE__*/React.createElement(React.Fragment, null, !audioEnabled && /*#__PURE__*/React.createElement(Icon, {
    size: "x20",
    name: "mic-off"
  }), !videoEnabled && /*#__PURE__*/React.createElement(Icon, {
    size: "x20",
    name: "eye-off"
  })))));
};

module.exportDefault(UserWebRTCRemote);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/UserInfo/UserWebRTC/df14fc7ad6b7e07eedc75ed3d7daed004e97939e.map
