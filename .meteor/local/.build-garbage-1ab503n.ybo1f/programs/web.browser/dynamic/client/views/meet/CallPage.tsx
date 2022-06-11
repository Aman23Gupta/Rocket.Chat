function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/meet/CallPage.tsx                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let Box, Flex, ButtonGroup, Button, Icon;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Flex(v) {
    Flex = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Button(v) {
    Button = v;
  },

  Icon(v) {
    Icon = v;
  }

}, 0);
let moment;
module.link("moment", {
  default(v) {
    moment = v;
  }

}, 1);
let React, useEffect, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useState(v) {
    useState = v;
  }

}, 2);
let Notifications;
module.link("../../../app/notifications/client", {
  Notifications(v) {
    Notifications = v;
  }

}, 3);
let WebRTC;
module.link("../../../app/webrtc/client", {
  WebRTC(v) {
    WebRTC = v;
  }

}, 4);
let WEB_RTC_EVENTS;
module.link("../../../app/webrtc/index", {
  WEB_RTC_EVENTS(v) {
    WEB_RTC_EVENTS = v;
  }

}, 5);
let UserAvatar;
module.link("../../components/avatar/UserAvatar", {
  default(v) {
    UserAvatar = v;
  }

}, 6);
let useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 7);
let OngoingCallDuration;
module.link("./OngoingCallDuration", {
  default(v) {
    OngoingCallDuration = v;
  }

}, 8);
module.link("./styles.css");

const CallPage = _ref => {
  let {
    roomId,
    visitorToken,
    visitorId,
    status,
    setStatus,
    layout,
    visitorName,
    agentName,
    callStartTime
  } = _ref;
  const [isAgentActive, setIsAgentActive] = useState(false);
  const [isMicOn, setIsMicOn] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [isRemoteMobileDevice, setIsRemoteMobileDevice] = useState(false);
  const [callInIframe, setCallInIframe] = useState(false);
  const [isRemoteCameraOn, setIsRemoteCameraOn] = useState(false);
  const [isLocalMobileDevice, setIsLocalMobileDevice] = useState(false);
  let iconSize = 'x21';
  let buttonSize = 'x40';
  const avatarSize = 'x48';

  if (layout === 'embedded') {
    iconSize = 'x19';
    buttonSize = 'x35';
  }

  const t = useTranslation();
  useEffect(() => {
    if (visitorToken) {
      const webrtcInstance = WebRTC.getInstanceByRoomId(roomId, visitorId);

      const isMobileDevice = () => {
        if (layout === 'embedded') {
          setCallInIframe(true);
        }

        if (window.innerWidth <= 450 && window.innerHeight >= 629 && window.innerHeight <= 900) {
          setIsLocalMobileDevice(true);
          webrtcInstance.media = {
            audio: true,
            video: {
              width: {
                ideal: 440
              },
              height: {
                ideal: 580
              }
            }
          };
          return true;
        }

        return false;
      };

      Notifications.onUser(WEB_RTC_EVENTS.WEB_RTC, (type, data) => {
        if (data.room == null) {
          return;
        }

        webrtcInstance.onUserStream(type, data);
      }, visitorId);
      Notifications.onRoom(roomId, 'webrtc', (type, data) => {
        if (type === 'callStatus' && data.callStatus === 'ended') {
          webrtcInstance.stop();
          setStatus(data.callStatus);
        } else if (type === 'getDeviceType') {
          Notifications.notifyRoom(roomId, 'webrtc', 'deviceType', {
            isMobileDevice: isMobileDevice()
          });
        } else if (type === 'cameraStatus') {
          setIsRemoteCameraOn(data.isCameraOn);
        }
      });
      Notifications.notifyRoom(roomId, 'webrtc', 'deviceType', {
        isMobileDevice: isMobileDevice()
      });
      Notifications.notifyRoom(roomId, 'webrtc', 'callStatus', {
        callStatus: 'inProgress'
      });
    } else if (!isAgentActive) {
      const webrtcInstance = WebRTC.getInstanceByRoomId(roomId);

      if (status === 'inProgress') {
        Notifications.notifyRoom(roomId, 'webrtc', 'getDeviceType');
        webrtcInstance.startCall({
          audio: true,
          video: {
            width: {
              ideal: 1920
            },
            height: {
              ideal: 1080
            }
          }
        });
      }

      Notifications.onRoom(roomId, 'webrtc', (type, data) => {
        if (type === 'callStatus') {
          switch (data.callStatus) {
            case 'ended':
              webrtcInstance.stop();
              break;

            case 'inProgress':
              webrtcInstance.startCall({
                audio: true,
                video: {
                  width: {
                    ideal: 1920
                  },
                  height: {
                    ideal: 1080
                  }
                }
              });
          }

          setStatus(data.callStatus);
        } else if (type === 'deviceType' && data.isMobileDevice) {
          setIsRemoteMobileDevice(true);
        } else if (type === 'cameraStatus') {
          setIsRemoteCameraOn(data.isCameraOn);
        }
      });
      setIsAgentActive(true);
    }
  }, [isAgentActive, status, setStatus, visitorId, roomId, visitorToken, layout]);

  const toggleButton = control => {
    if (control === 'mic') {
      WebRTC.getInstanceByRoomId(roomId, visitorToken).toggleAudio();
      return setIsMicOn(!isMicOn);
    }

    WebRTC.getInstanceByRoomId(roomId, visitorToken).toggleVideo();
    setIsCameraOn(!isCameraOn);
    Notifications.notifyRoom(roomId, 'webrtc', 'cameraStatus', {
      isCameraOn: !isCameraOn
    });
  };

  const closeWindow = () => {
    if (layout === 'embedded') {
      var _parent;

      return (_parent = parent) === null || _parent === void 0 ? void 0 : _parent.handleIframeClose();
    }

    return window.close();
  };

  const getCallDuration = callStartTime => moment.duration(moment(new Date()).diff(moment(callStartTime))).asSeconds();

  const showCallPage = (localAvatar, remoteAvatar) => /*#__PURE__*/React.createElement(Flex.Container, {
    direction: "column",
    justifyContent: "center"
  }, /*#__PURE__*/React.createElement(Box, {
    width: "full",
    minHeight: "sh",
    alignItems: "center",
    backgroundColor: "neutral-900",
    overflow: "hidden",
    position: "relative"
  }, /*#__PURE__*/React.createElement(Box, {
    position: "absolute",
    zIndex: 1,
    style: {
      top: '5%',
      right: '2%'
    },
    className: "Self_Video",
    alignItems: "center",
    backgroundColor: "#2F343D"
  }, /*#__PURE__*/React.createElement("video", {
    id: "localVideo",
    autoPlay: true,
    playsInline: true,
    muted: true,
    style: {
      width: '100%',
      transform: 'scaleX(-1)',
      display: isCameraOn ? 'block' : 'none'
    }
  }), /*#__PURE__*/React.createElement(UserAvatar, {
    style: {
      display: isCameraOn ? 'none' : 'block',
      margin: 'auto'
    },
    username: localAvatar,
    className: "rcx-message__avatar",
    size: isLocalMobileDevice || callInIframe ? 'x32' : 'x48'
  })), /*#__PURE__*/React.createElement(ButtonGroup, {
    position: "absolute",
    zIndex: 1,
    style: {
      bottom: '5%'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    id: "mic",
    square: true,
    "data-title": isMicOn ? t('Mute_microphone') : t('Unmute_microphone'),
    onClick: () => toggleButton('mic'),
    className: isMicOn ? 'On' : 'Off',
    size: Number(buttonSize)
  }, isMicOn ? /*#__PURE__*/React.createElement(Icon, {
    name: "mic",
    size: iconSize
  }) : /*#__PURE__*/React.createElement(Icon, {
    name: "mic-off",
    size: iconSize
  })), /*#__PURE__*/React.createElement(Button, {
    id: "camera",
    square: true,
    "data-title": isCameraOn ? t('Turn_off_video') : t('Turn_on_video'),
    onClick: () => toggleButton('camera'),
    className: isCameraOn ? 'On' : 'Off',
    size: parseInt(buttonSize)
  }, isCameraOn ? /*#__PURE__*/React.createElement(Icon, {
    name: "video",
    size: iconSize
  }) : /*#__PURE__*/React.createElement(Icon, {
    name: "video-off",
    size: iconSize
  })), layout === 'embedded' && /*#__PURE__*/React.createElement(Button, {
    square: true,
    backgroundColor: "#2F343D",
    borderColor: "#2F343D",
    "data-title": t('Expand_view'),
    onClick: () => {
      var _parent2;

      return (_parent2 = parent) === null || _parent2 === void 0 ? void 0 : _parent2.expandCall();
    },
    size: parseInt(buttonSize)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-expand",
    size: iconSize,
    color: "white"
  })), /*#__PURE__*/React.createElement(Button, {
    square: true,
    primary: true,
    danger: true,
    "data-title": t('End_call'),
    onClick: closeWindow,
    size: parseInt(buttonSize)
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "phone-off",
    size: iconSize,
    color: "white"
  }))), /*#__PURE__*/React.createElement("video", {
    id: "remoteVideo",
    autoPlay: true,
    playsInline: true,
    style: {
      width: isRemoteMobileDevice ? '45%' : '100%',
      transform: 'scaleX(-1)',
      display: isRemoteCameraOn ? 'block' : 'none'
    }
  }), /*#__PURE__*/React.createElement(Box, {
    position: "absolute",
    zIndex: 1,
    display: isRemoteCameraOn ? 'none' : 'flex',
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    style: {
      top: isRemoteMobileDevice || isLocalMobileDevice ? '10%' : '30%'
    }
  }, /*#__PURE__*/React.createElement(UserAvatar, {
    style: {
      display: 'block',
      margin: 'auto'
    },
    username: remoteAvatar,
    className: "rcx-message__avatar",
    size: !callInIframe ? 'x124' : avatarSize
  }), /*#__PURE__*/React.createElement(Box, {
    color: "white",
    fontSize: callInIframe ? 12 : 18,
    textAlign: "center",
    margin: 3
  }, /*#__PURE__*/React.createElement(OngoingCallDuration, {
    counter: getCallDuration(callStartTime)
  })), /*#__PURE__*/React.createElement(Box, {
    style: _objectSpread({
      color: 'white',
      fontSize: callInIframe ? 12 : 22,
      margin: callInIframe ? 5 : 9
    }, callInIframe && {
      marginTop: 0
    })
  }, remoteAvatar))));

  return /*#__PURE__*/React.createElement(React.Fragment, null, status === 'ringing' && /*#__PURE__*/React.createElement(Flex.Container, {
    direction: "column",
    justifyContent: "center"
  }, /*#__PURE__*/React.createElement(Box, {
    width: "full",
    minHeight: "sh",
    alignItems: "center",
    backgroundColor: "neutral-900",
    overflow: "hidden",
    position: "relative"
  }, /*#__PURE__*/React.createElement(Box, {
    position: "absolute",
    zIndex: 1,
    style: {
      top: '5%',
      right: '2%'
    },
    className: "Self_Video",
    backgroundColor: "#2F343D",
    alignItems: "center"
  }, /*#__PURE__*/React.createElement(UserAvatar, {
    style: {
      display: 'block',
      margin: 'auto'
    },
    username: agentName,
    className: "rcx-message__avatar",
    size: isLocalMobileDevice ? 'x32' : 'x48'
  })), /*#__PURE__*/React.createElement(Box, {
    position: "absolute",
    zIndex: 1,
    style: {
      top: '20%',
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column'
    },
    alignItems: "center"
  }, /*#__PURE__*/React.createElement(UserAvatar, {
    style: {
      display: 'block',
      margin: 'auto'
    },
    username: visitorName,
    className: "rcx-message__avatar",
    size: "x124"
  }), /*#__PURE__*/React.createElement(Box, {
    color: "white",
    fontSize: 16,
    margin: 15
  }, 'Calling...'), /*#__PURE__*/React.createElement(Box, {
    style: {
      color: 'white',
      fontSize: isLocalMobileDevice ? 15 : 22
    }
  }, visitorName)))), status === 'declined' && /*#__PURE__*/React.createElement(Box, {
    minHeight: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
    fontSize: "s1"
  }, t('Call_declined')), status === 'inProgress' && /*#__PURE__*/React.createElement(Flex.Container, {
    direction: "column",
    justifyContent: "center"
  }, visitorToken ? showCallPage(visitorName, agentName) : showCallPage(agentName, visitorName)));
};

module.exportDefault(CallPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/meet/53bfc1675e89d34e5407a28eacac7a28e478ddb7.map
