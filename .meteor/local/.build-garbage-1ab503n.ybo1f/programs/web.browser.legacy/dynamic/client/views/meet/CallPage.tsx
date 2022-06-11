function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/meet/CallPage.tsx                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);
var Box, Flex, ButtonGroup, Button, Icon;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Flex: function (v) {
    Flex = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Button: function (v) {
    Button = v;
  },
  Icon: function (v) {
    Icon = v;
  }
}, 0);
var moment;
module.link("moment", {
  "default": function (v) {
    moment = v;
  }
}, 1);
var React, useEffect, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 2);
var Notifications;
module.link("../../../app/notifications/client", {
  Notifications: function (v) {
    Notifications = v;
  }
}, 3);
var WebRTC;
module.link("../../../app/webrtc/client", {
  WebRTC: function (v) {
    WebRTC = v;
  }
}, 4);
var WEB_RTC_EVENTS;
module.link("../../../app/webrtc/index", {
  WEB_RTC_EVENTS: function (v) {
    WEB_RTC_EVENTS = v;
  }
}, 5);
var UserAvatar;
module.link("../../components/avatar/UserAvatar", {
  "default": function (v) {
    UserAvatar = v;
  }
}, 6);
var useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 7);
var OngoingCallDuration;
module.link("./OngoingCallDuration", {
  "default": function (v) {
    OngoingCallDuration = v;
  }
}, 8);
module.link("./styles.css");

var CallPage = function (_ref) {
  var roomId = _ref.roomId,
      visitorToken = _ref.visitorToken,
      visitorId = _ref.visitorId,
      status = _ref.status,
      setStatus = _ref.setStatus,
      layout = _ref.layout,
      visitorName = _ref.visitorName,
      agentName = _ref.agentName,
      callStartTime = _ref.callStartTime;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isAgentActive = _useState2[0],
      setIsAgentActive = _useState2[1];

  var _useState3 = useState(false),
      _useState4 = _slicedToArray(_useState3, 2),
      isMicOn = _useState4[0],
      setIsMicOn = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      isCameraOn = _useState6[0],
      setIsCameraOn = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      isRemoteMobileDevice = _useState8[0],
      setIsRemoteMobileDevice = _useState8[1];

  var _useState9 = useState(false),
      _useState10 = _slicedToArray(_useState9, 2),
      callInIframe = _useState10[0],
      setCallInIframe = _useState10[1];

  var _useState11 = useState(false),
      _useState12 = _slicedToArray(_useState11, 2),
      isRemoteCameraOn = _useState12[0],
      setIsRemoteCameraOn = _useState12[1];

  var _useState13 = useState(false),
      _useState14 = _slicedToArray(_useState13, 2),
      isLocalMobileDevice = _useState14[0],
      setIsLocalMobileDevice = _useState14[1];

  var iconSize = 'x21';
  var buttonSize = 'x40';
  var avatarSize = 'x48';

  if (layout === 'embedded') {
    iconSize = 'x19';
    buttonSize = 'x35';
  }

  var t = useTranslation();
  useEffect(function () {
    if (visitorToken) {
      var webrtcInstance = WebRTC.getInstanceByRoomId(roomId, visitorId);

      var isMobileDevice = function () {
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

      Notifications.onUser(WEB_RTC_EVENTS.WEB_RTC, function (type, data) {
        if (data.room == null) {
          return;
        }

        webrtcInstance.onUserStream(type, data);
      }, visitorId);
      Notifications.onRoom(roomId, 'webrtc', function (type, data) {
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
      var _webrtcInstance = WebRTC.getInstanceByRoomId(roomId);

      if (status === 'inProgress') {
        Notifications.notifyRoom(roomId, 'webrtc', 'getDeviceType');

        _webrtcInstance.startCall({
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

      Notifications.onRoom(roomId, 'webrtc', function (type, data) {
        if (type === 'callStatus') {
          switch (data.callStatus) {
            case 'ended':
              _webrtcInstance.stop();

              break;

            case 'inProgress':
              _webrtcInstance.startCall({
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

  var toggleButton = function (control) {
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

  var closeWindow = function () {
    if (layout === 'embedded') {
      var _parent;

      return (_parent = parent) === null || _parent === void 0 ? void 0 : _parent.handleIframeClose();
    }

    return window.close();
  };

  var getCallDuration = function (callStartTime) {
    return moment.duration(moment(new Date()).diff(moment(callStartTime))).asSeconds();
  };

  var showCallPage = function (localAvatar, remoteAvatar) {
    return /*#__PURE__*/React.createElement(Flex.Container, {
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
      onClick: function () {
        return toggleButton('mic');
      },
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
      onClick: function () {
        return toggleButton('camera');
      },
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
      onClick: function () {
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
  };

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
//# sourceMappingURL=/dynamic/client/views/meet/c02b8c93acd4103249ecc3bda687725fac808658.map
