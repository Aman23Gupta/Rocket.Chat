function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/UserInfo/UserWebRTC/UserWebRTC.tsx                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
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
let useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);
let UserWebRTCRemote;
module.link("./UserWebRTCRemote", {
  default(v) {
    UserWebRTCRemote = v;
  }

}, 3);
let UserWebRTCVideo;
module.link("./UserWebRTCVideo", {
  default(v) {
    UserWebRTCVideo = v;
  }

}, 4);

const UserWebRTC = _ref => {
  let {
    peerName,
    webRTCData
  } = _ref;
  const t = useTranslation();
  const {
    mainVideoUrl,
    screenShareEnabled,
    selfVideoUrl,
    audioAndVideoEnabled,
    audioEnabled,
    videoEnabled,
    remoteVideoItems,
    setMainVideo,
    overlayEnabled
  } = webRTCData;
  const isOwnUser = mainVideoUrl() === selfVideoUrl;
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
  }), remoteVideoItems.map((remoteItem, index) => /*#__PURE__*/React.createElement(UserWebRTCRemote, _extends({}, remoteItem, {
    key: index,
    peerName: peerName,
    setMainVideo: setMainVideo,
    overlayEnabled: overlayEnabled,
    audioAndVideoEnabled: audioAndVideoEnabled,
    audioEnabled: audioEnabled,
    videoEnabled: videoEnabled
  })))));
};

module.exportDefault(UserWebRTC);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/UserInfo/UserWebRTC/24274ec7e2a98dc5811708d8208c32722d5ad25e.map
