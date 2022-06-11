function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/UserInfo/UserWebRTC/UserWebRTCButtons.tsx                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Button, ButtonGroup, Icon;
module.link("@rocket.chat/fuselage", {
  Button(v) {
    Button = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Icon(v) {
    Icon = v;
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

const UserWebRTCButtons = _ref => {
  let {
    webRTCData
  } = _ref;
  const t = useTranslation();
  const {
    handleStopCall,
    screenShareAvailable,
    toggleScreenShare,
    toggleOverlay,
    toggleVideo,
    toggleAudio,
    audioEnabled,
    videoEnabled,
    overlayEnabled
  } = webRTCData;
  return /*#__PURE__*/React.createElement(ButtonGroup, {
    align: "center"
  }, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    danger: true,
    onClick: handleStopCall,
    title: t('Stop_call')
  }, /*#__PURE__*/React.createElement(Icon, {
    size: "x20",
    name: "phone-off"
  })), /*#__PURE__*/React.createElement(Button, {
    onClick: toggleAudio,
    title: audioEnabled ? t('Mute') : t('Unmute')
  }, /*#__PURE__*/React.createElement(Icon, {
    size: "x20",
    name: "".concat(audioEnabled ? 'mic' : 'mic-off')
  })), /*#__PURE__*/React.createElement(Button, {
    onClick: toggleVideo,
    title: videoEnabled ? t('Hide_video') : t('Show_video')
  }, /*#__PURE__*/React.createElement(Icon, {
    size: "x20",
    name: "".concat(videoEnabled ? 'eye' : 'eye-off')
  })), screenShareAvailable && /*#__PURE__*/React.createElement(Button, {
    onClick: toggleScreenShare,
    title: t('Share_screen')
  }, /*#__PURE__*/React.createElement(Icon, {
    size: "x20",
    name: "desktop"
  })), /*#__PURE__*/React.createElement(Button, {
    onClick: toggleOverlay,
    title: overlayEnabled ? t('Collapse') : t('Expand')
  }, /*#__PURE__*/React.createElement(Icon, {
    size: "x20",
    name: "".concat(overlayEnabled ? 'arrow-collapse' : 'arrow-expand')
  })));
};

module.exportDefault(UserWebRTCButtons);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/UserInfo/UserWebRTC/c1644ec96257fa07b75cd0f76e7acad6927b422d.map
