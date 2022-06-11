function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/meet/MeetPage.tsx                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);
var Button, Box, Icon, Flex;
module.link("@rocket.chat/fuselage", {
  Button: function (v) {
    Button = v;
  },
  Box: function (v) {
    Box = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  Flex: function (v) {
    Flex = v;
  }
}, 0);
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 1);
var React, useEffect, useState, useCallback;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useState: function (v) {
    useState = v;
  },
  useCallback: function (v) {
    useCallback = v;
  }
}, 2);
var APIClient;
module.link("../../../app/utils/client", {
  APIClient: function (v) {
    APIClient = v;
  }
}, 3);
var UserAvatar;
module.link("../../components/avatar/UserAvatar", {
  "default": function (v) {
    UserAvatar = v;
  }
}, 4);
var useRouteParameter, useQueryStringParameter;
module.link("../../contexts/RouterContext", {
  useRouteParameter: function (v) {
    useRouteParameter = v;
  },
  useQueryStringParameter: function (v) {
    useQueryStringParameter = v;
  }
}, 5);
var NotFoundPage;
module.link("../notFound/NotFoundPage", {
  "default": function (v) {
    NotFoundPage = v;
  }
}, 6);
var PageLoading;
module.link("../root/PageLoading", {
  "default": function (v) {
    PageLoading = v;
  }
}, 7);
var CallPage;
module.link("./CallPage", {
  "default": function (v) {
    CallPage = v;
  }
}, 8);
module.link("./styles.css");

var MeetPage = function () {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      isRoomMember = _useState2[0],
      setIsRoomMember = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      status = _useState4[0],
      setStatus = _useState4[1];

  var _useState5 = useState(null),
      _useState6 = _slicedToArray(_useState5, 2),
      visitorId = _useState6[0],
      setVisitorId = _useState6[1];

  var roomId = useRouteParameter('rid');
  var visitorToken = useQueryStringParameter('token');
  var layout = useQueryStringParameter('layout');

  var _useState7 = useState(''),
      _useState8 = _slicedToArray(_useState7, 2),
      visitorName = _useState8[0],
      setVisitorName = _useState8[1];

  var _useState9 = useState(''),
      _useState10 = _slicedToArray(_useState9, 2),
      agentName = _useState10[0],
      setAgentName = _useState10[1];

  var _useState11 = useState(undefined),
      _useState12 = _slicedToArray(_useState11, 2),
      callStartTime = _useState12[0],
      setCallStartTime = _useState12[1];

  var isMobileDevice = function () {
    return window.innerWidth <= 450;
  };

  var closeCallTab = function () {
    return window.close();
  };

  var setupCallForVisitor = useCallback(function () {
    function _callee() {
      var _room$room, _room$room$v;

      var room, _room$room2, _room$room2$responseB, _room$room3;

      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _regeneratorRuntime.awrap(APIClient.v1.get("livechat/room?token=" + visitorToken + "&rid=" + roomId));

              case 2:
                room = _context.sent;

                if (!((room === null || room === void 0 ? void 0 : (_room$room = room.room) === null || _room$room === void 0 ? void 0 : (_room$room$v = _room$room.v) === null || _room$room$v === void 0 ? void 0 : _room$room$v.token) === visitorToken)) {
                  _context.next = 10;
                  break;
                }

                setVisitorId(room.room.v._id);
                setVisitorName(room.room.fname);
                room !== null && room !== void 0 && (_room$room2 = room.room) !== null && _room$room2 !== void 0 && (_room$room2$responseB = _room$room2.responseBy) !== null && _room$room2$responseB !== void 0 && _room$room2$responseB.username ? setAgentName(room.room.responseBy.username) : setAgentName(room.room.servedBy.username);
                setStatus((room === null || room === void 0 ? void 0 : (_room$room3 = room.room) === null || _room$room3 === void 0 ? void 0 : _room$room3.callStatus) || 'ended');
                setCallStartTime(room.room.webRtcCallStartTime);
                return _context.abrupt("return", setIsRoomMember(true));

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, null, Promise);
    }

    return _callee;
  }(), [visitorToken, roomId]);
  var setupCallForAgent = useCallback(function () {
    function _callee2() {
      var _room$room4, _room$room4$servedBy;

      var room, _room$room5, _room$room5$responseB, _room$room6;

      return _regeneratorRuntime.async(function () {
        function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _regeneratorRuntime.awrap(APIClient.v1.get("rooms.info?roomId=" + roomId));

              case 2:
                room = _context2.sent;

                if (!((room === null || room === void 0 ? void 0 : (_room$room4 = room.room) === null || _room$room4 === void 0 ? void 0 : (_room$room4$servedBy = _room$room4.servedBy) === null || _room$room4$servedBy === void 0 ? void 0 : _room$room4$servedBy._id) === Meteor.userId())) {
                  _context2.next = 9;
                  break;
                }

                setVisitorName(room.room.fname);
                room !== null && room !== void 0 && (_room$room5 = room.room) !== null && _room$room5 !== void 0 && (_room$room5$responseB = _room$room5.responseBy) !== null && _room$room5$responseB !== void 0 && _room$room5$responseB.username ? setAgentName(room.room.responseBy.username) : setAgentName(room.room.servedBy.username);
                setStatus((room === null || room === void 0 ? void 0 : (_room$room6 = room.room) === null || _room$room6 === void 0 ? void 0 : _room$room6.callStatus) || 'ended');
                setCallStartTime(room.room.webRtcCallStartTime);
                return _context2.abrupt("return", setIsRoomMember(true));

              case 9:
              case "end":
                return _context2.stop();
            }
          }
        }

        return _callee2$;
      }(), null, null, null, Promise);
    }

    return _callee2;
  }(), [roomId]);
  useEffect(function () {
    if (visitorToken) {
      setupCallForVisitor();
      return;
    }

    setupCallForAgent();
  }, [setupCallForAgent, setupCallForVisitor, visitorToken]);

  if (status === null) {
    return /*#__PURE__*/React.createElement(PageLoading, null);
  }

  if (!isRoomMember) {
    return /*#__PURE__*/React.createElement(NotFoundPage, null);
  }

  if (status === 'ended') {
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
      username: visitorToken ? visitorName : agentName,
      className: "rcx-message__avatar",
      size: isMobileDevice() ? 'x32' : 'x48'
    })), /*#__PURE__*/React.createElement(Box, {
      position: "absolute",
      zIndex: 1,
      style: {
        top: isMobileDevice() ? '30%' : '20%',
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
      username: visitorToken ? agentName : visitorName,
      className: "rcx-message__avatar",
      size: "x124"
    }), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'white',
        fontSize: 16,
        margin: 15
      }
    }, 'Call Ended!'), /*#__PURE__*/React.createElement("p", {
      style: {
        color: 'white',
        fontSize: isMobileDevice() ? 15 : 22
      }
    }, visitorToken ? agentName : visitorName)), /*#__PURE__*/React.createElement(Box, {
      position: "absolute",
      alignItems: "center",
      style: {
        bottom: '20%'
      }
    }, /*#__PURE__*/React.createElement(Button, {
      square: true,
      title: "Close Window",
      onClick: closeCallTab,
      backgroundColor: "#2F343D",
      borderColor: "#2F343D"
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "cross",
      size: "x16",
      color: "white"
    })))));
  }

  return /*#__PURE__*/React.createElement(CallPage, {
    roomId: roomId,
    status: status,
    visitorToken: visitorToken,
    visitorId: visitorId,
    setStatus: setStatus,
    visitorName: visitorName,
    agentName: agentName,
    layout: layout,
    callStartTime: callStartTime
  });
};

module.exportDefault(MeetPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/meet/971a7f08eb3d61f26349426fa21673c7e3657174.map
