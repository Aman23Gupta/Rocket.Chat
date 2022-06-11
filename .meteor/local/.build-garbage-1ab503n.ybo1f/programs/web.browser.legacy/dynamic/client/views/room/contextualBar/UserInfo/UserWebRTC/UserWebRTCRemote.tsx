function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/UserInfo/UserWebRTC/UserWebRTCRemote.tsx                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _templateObject;

var _taggedTemplateLiteralLoose;

module.link("@babel/runtime/helpers/taggedTemplateLiteralLoose", {
  default: function (v) {
    _taggedTemplateLiteralLoose = v;
  }
}, 0);
var css;
module.link("@rocket.chat/css-in-js", {
  css: function (v) {
    css = v;
  }
}, 0);
var Box, Icon;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Icon: function (v) {
    Icon = v;
  }
}, 1);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 2);
var useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var UserWebRTCVideo;
module.link("./UserWebRTCVideo", {
  "default": function (v) {
    UserWebRTCVideo = v;
  }
}, 4);

var UserWebRTCRemote = function (props) {
  var t = useTranslation();
  var url = props.url,
      id = props.id,
      stateText = props.stateText,
      muted = props.muted,
      ownUser = props.ownUser,
      screen = props.screen,
      audioAndVideoEnabled = props.audioAndVideoEnabled,
      audioEnabled = props.audioEnabled,
      videoEnabled = props.videoEnabled,
      setMainVideo = props.setMainVideo,
      _props$peerName = props.peerName,
      peerName = _props$peerName === void 0 ? '' : _props$peerName,
      overlayEnabled = props.overlayEnabled;
  var userName = ownUser ? '$self' : peerName;
  var cursorPointer = css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n\t\tcursor: pointer;\n\t"])));

  var handleSetMainVideo = function () {
    return setMainVideo(userName);
  };

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
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/UserInfo/UserWebRTC/0d00a94d84e8219759866fd62922f4aff84c1f62.map
