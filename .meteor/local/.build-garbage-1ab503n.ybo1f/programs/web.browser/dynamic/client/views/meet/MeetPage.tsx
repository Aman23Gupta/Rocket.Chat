function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/meet/MeetPage.tsx                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Button, Box, Icon, Flex;
module.link("@rocket.chat/fuselage", {
  Button(v) {
    Button = v;
  },

  Box(v) {
    Box = v;
  },

  Icon(v) {
    Icon = v;
  },

  Flex(v) {
    Flex = v;
  }

}, 0);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
let React, useEffect, useState, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useState(v) {
    useState = v;
  },

  useCallback(v) {
    useCallback = v;
  }

}, 2);
let APIClient;
module.link("../../../app/utils/client", {
  APIClient(v) {
    APIClient = v;
  }

}, 3);
let UserAvatar;
module.link("../../components/avatar/UserAvatar", {
  default(v) {
    UserAvatar = v;
  }

}, 4);
let useRouteParameter, useQueryStringParameter;
module.link("../../contexts/RouterContext", {
  useRouteParameter(v) {
    useRouteParameter = v;
  },

  useQueryStringParameter(v) {
    useQueryStringParameter = v;
  }

}, 5);
let NotFoundPage;
module.link("../notFound/NotFoundPage", {
  default(v) {
    NotFoundPage = v;
  }

}, 6);
let PageLoading;
module.link("../root/PageLoading", {
  default(v) {
    PageLoading = v;
  }

}, 7);
let CallPage;
module.link("./CallPage", {
  default(v) {
    CallPage = v;
  }

}, 8);
module.link("./styles.css");

const MeetPage = () => {
  const [isRoomMember, setIsRoomMember] = useState(false);
  const [status, setStatus] = useState(null);
  const [visitorId, setVisitorId] = useState(null);
  const roomId = useRouteParameter('rid');
  const visitorToken = useQueryStringParameter('token');
  const layout = useQueryStringParameter('layout');
  const [visitorName, setVisitorName] = useState('');
  const [agentName, setAgentName] = useState('');
  const [callStartTime, setCallStartTime] = useState(undefined);

  const isMobileDevice = () => window.innerWidth <= 450;

  const closeCallTab = () => window.close();

  const setupCallForVisitor = useCallback(async () => {
    var _room$room, _room$room$v;

    const room = await APIClient.v1.get("livechat/room?token=".concat(visitorToken, "&rid=").concat(roomId));

    if ((room === null || room === void 0 ? void 0 : (_room$room = room.room) === null || _room$room === void 0 ? void 0 : (_room$room$v = _room$room.v) === null || _room$room$v === void 0 ? void 0 : _room$room$v.token) === visitorToken) {
      var _room$room2, _room$room2$responseB, _room$room3;

      setVisitorId(room.room.v._id);
      setVisitorName(room.room.fname);
      room !== null && room !== void 0 && (_room$room2 = room.room) !== null && _room$room2 !== void 0 && (_room$room2$responseB = _room$room2.responseBy) !== null && _room$room2$responseB !== void 0 && _room$room2$responseB.username ? setAgentName(room.room.responseBy.username) : setAgentName(room.room.servedBy.username);
      setStatus((room === null || room === void 0 ? void 0 : (_room$room3 = room.room) === null || _room$room3 === void 0 ? void 0 : _room$room3.callStatus) || 'ended');
      setCallStartTime(room.room.webRtcCallStartTime);
      return setIsRoomMember(true);
    }
  }, [visitorToken, roomId]);
  const setupCallForAgent = useCallback(async () => {
    var _room$room4, _room$room4$servedBy;

    const room = await APIClient.v1.get("rooms.info?roomId=".concat(roomId));

    if ((room === null || room === void 0 ? void 0 : (_room$room4 = room.room) === null || _room$room4 === void 0 ? void 0 : (_room$room4$servedBy = _room$room4.servedBy) === null || _room$room4$servedBy === void 0 ? void 0 : _room$room4$servedBy._id) === Meteor.userId()) {
      var _room$room5, _room$room5$responseB, _room$room6;

      setVisitorName(room.room.fname);
      room !== null && room !== void 0 && (_room$room5 = room.room) !== null && _room$room5 !== void 0 && (_room$room5$responseB = _room$room5.responseBy) !== null && _room$room5$responseB !== void 0 && _room$room5$responseB.username ? setAgentName(room.room.responseBy.username) : setAgentName(room.room.servedBy.username);
      setStatus((room === null || room === void 0 ? void 0 : (_room$room6 = room.room) === null || _room$room6 === void 0 ? void 0 : _room$room6.callStatus) || 'ended');
      setCallStartTime(room.room.webRtcCallStartTime);
      return setIsRoomMember(true);
    }
  }, [roomId]);
  useEffect(() => {
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
//# sourceMappingURL=/dynamic/client/views/meet/9faf720deacabc07b3084fd21167ac338d378a41.map
