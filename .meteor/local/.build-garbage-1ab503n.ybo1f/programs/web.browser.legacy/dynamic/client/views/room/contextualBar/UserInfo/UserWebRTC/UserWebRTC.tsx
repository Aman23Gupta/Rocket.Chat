function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/UserInfo/UserWebRTC/UserWebRTC.tsx                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);
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
var useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);
var UserWebRTCRemote;
module.link("./UserWebRTCRemote", {
  "default": function (v) {
    UserWebRTCRemote = v;
  }
}, 3);
var UserWebRTCVideo;
module.link("./UserWebRTCVideo", {
  "default": function (v) {
    UserWebRTCVideo = v;
  }
}, 4);

var UserWebRTC = function (_ref) {
  var peerName = _ref.peerName,
      webRTCData = _ref.webRTCData;
  var t = useTranslation();
  var mainVideoUrl = webRTCData.mainVideoUrl,
      screenShareEnabled = webRTCData.screenShareEnabled,
      selfVideoUrl = webRTCData.selfVideoUrl,
      audioAndVideoEnabled = webRTCData.audioAndVideoEnabled,
      audioEnabled = webRTCData.audioEnabled,
      videoEnabled = webRTCData.videoEnabled,
      remoteVideoItems = webRTCData.remoteVideoItems,
      setMainVideo = webRTCData.setMainVideo,
      overlayEnabled = webRTCData.overlayEnabled;
  var isOwnUser = mainVideoUrl() === selfVideoUrl;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexWrap: "wrap",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: overlayEnabled ? '30%' : 'unset',
    margin: overlayEnabled ? '0 auto' : 'unset'
  }, /*#__PURE__*/React.createElement(UserWebRTCVideo, {
    url: mainVideoUrl(),
    ownUser: isOwnUser,
    muted: true,
    screen: screenShareEnabled,
    isMainVideo: true,
    videoEnabled: videoEnabled
  }), /*#__PURE__*/React.createElement(Box, {
    margin: "x4"
  }, isOwnUser ? t('You') : peerName)), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    justifyContent: overlayEnabled ? 'center' : 'space-between'
  }, selfVideoUrl && /*#__PURE__*/React.createElement(UserWebRTCRemote, {
    url: selfVideoUrl,
    muted: true,
    ownUser: true,
    screen: screenShareEnabled,
    audioAndVideoEnabled: audioAndVideoEnabled,
    audioEnabled: audioEnabled,
    videoEnabled: videoEnabled,
    setMainVideo: setMainVideo,
    overlayEnabled: overlayEnabled
  }), remoteVideoItems.map(function (remoteItem, index) {
    return /*#__PURE__*/React.createElement(UserWebRTCRemote, _extends({}, remoteItem, {
      key: index,
      peerName: peerName,
      setMainVideo: setMainVideo,
      overlayEnabled: overlayEnabled,
      audioAndVideoEnabled: audioAndVideoEnabled,
      audioEnabled: audioEnabled,
      videoEnabled: videoEnabled
    }));
  })));
};

module.exportDefault(UserWebRTC);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/UserInfo/UserWebRTC/b6988a5861965d0259a57c7f25a5344ba3ec99f4.map
