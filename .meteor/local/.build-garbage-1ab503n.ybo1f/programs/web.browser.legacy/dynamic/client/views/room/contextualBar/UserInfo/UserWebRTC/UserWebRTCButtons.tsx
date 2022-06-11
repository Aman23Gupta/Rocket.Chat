function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/UserInfo/UserWebRTC/UserWebRTCButtons.tsx                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Button, ButtonGroup, Icon;
module.link("@rocket.chat/fuselage", {
  Button: function (v) {
    Button = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Icon: function (v) {
    Icon = v;
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

var UserWebRTCButtons = function (_ref) {
  var webRTCData = _ref.webRTCData;
  var t = useTranslation();
  var handleStopCall = webRTCData.handleStopCall,
      screenShareAvailable = webRTCData.screenShareAvailable,
      toggleScreenShare = webRTCData.toggleScreenShare,
      toggleOverlay = webRTCData.toggleOverlay,
      toggleVideo = webRTCData.toggleVideo,
      toggleAudio = webRTCData.toggleAudio,
      audioEnabled = webRTCData.audioEnabled,
      videoEnabled = webRTCData.videoEnabled,
      overlayEnabled = webRTCData.overlayEnabled;
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
    name: "" + (audioEnabled ? 'mic' : 'mic-off')
  })), /*#__PURE__*/React.createElement(Button, {
    onClick: toggleVideo,
    title: videoEnabled ? t('Hide_video') : t('Show_video')
  }, /*#__PURE__*/React.createElement(Icon, {
    size: "x20",
    name: "" + (videoEnabled ? 'eye' : 'eye-off')
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
    name: "" + (overlayEnabled ? 'arrow-collapse' : 'arrow-expand')
  })));
};

module.exportDefault(UserWebRTCButtons);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/UserInfo/UserWebRTC/7fe106c3ed953c0086bb2bb0421d15372d399ec2.map
