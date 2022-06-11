function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/directory/ChatsContextualBar.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
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
var VerticalBar;
module.link("../../../components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 2);
var useRoute, useRouteParameter;
module.link("../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  },
  useRouteParameter: function (v) {
    useRouteParameter = v;
  }
}, 3);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 4);
var AsyncStatePhase;
module.link("../../../hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 5);
var useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 6);
var FormSkeleton;
module.link("./Skeleton", {
  FormSkeleton: function (v) {
    FormSkeleton = v;
  }
}, 7);
var Chat;
module.link("./chats/Chat", {
  "default": function (v) {
    Chat = v;
  }
}, 8);
var ChatInfoDirectory;
module.link("./chats/contextualBar/ChatInfoDirectory", {
  "default": function (v) {
    ChatInfoDirectory = v;
  }
}, 9);
var RoomEditWithData;
module.link("./chats/contextualBar/RoomEditWithData", {
  "default": function (v) {
    RoomEditWithData = v;
  }
}, 10);

var ChatsContextualBar = function (_ref) {
  var chatReload = _ref.chatReload;
  var directoryRoute = useRoute('omnichannel-directory');
  var bar = useRouteParameter('bar') || 'info';
  var id = useRouteParameter('id');
  var t = useTranslation();

  var openInRoom = function () {
    directoryRoute.push({
      page: 'chats',
      id: id,
      bar: 'view'
    });
  };

  var handleChatsVerticalBarCloseButtonClick = function () {
    directoryRoute.push({
      page: 'chats'
    });
  };

  var handleChatsVerticalBarBackButtonClick = function () {
    directoryRoute.push({
      page: 'chats',
      id: id,
      bar: 'info'
    });
  };

  var _useEndpointData = useEndpointData("rooms.info?roomId=" + id),
      data = _useEndpointData.value,
      state = _useEndpointData.phase,
      error = _useEndpointData.error,
      reloadInfo = _useEndpointData.reload;

  if (bar === 'view') {
    return /*#__PURE__*/React.createElement(Chat, {
      rid: id
    });
  }

  if (state === AsyncStatePhase.LOADING) {
    return /*#__PURE__*/React.createElement(Box, {
      pi: "x24"
    }, /*#__PURE__*/React.createElement(FormSkeleton, null));
  }

  if (error || !data || !data.room) {
    return /*#__PURE__*/React.createElement(Box, {
      mbs: "x16"
    }, t('Room_not_found'));
  }

  return /*#__PURE__*/React.createElement(VerticalBar, {
    className: 'contextual-bar'
  }, /*#__PURE__*/React.createElement(VerticalBar.Header, null, bar === 'info' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VerticalBar.Icon, {
    name: "info-circled"
  }), /*#__PURE__*/React.createElement(VerticalBar.Text, null, t('Room_Info')), /*#__PURE__*/React.createElement(VerticalBar.Action, {
    title: t('View_full_conversation'),
    name: 'new-window',
    onClick: openInRoom
  })), bar === 'edit' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VerticalBar.Icon, {
    name: "pencil"
  }), /*#__PURE__*/React.createElement(VerticalBar.Text, null, t('edit-room'))), /*#__PURE__*/React.createElement(VerticalBar.Close, {
    onClick: handleChatsVerticalBarCloseButtonClick
  })), bar === 'info' && /*#__PURE__*/React.createElement(ChatInfoDirectory, {
    id: id,
    room: data.room
  }), bar === 'edit' && /*#__PURE__*/React.createElement(RoomEditWithData, {
    id: id,
    close: handleChatsVerticalBarBackButtonClick,
    reload: chatReload,
    reloadInfo: reloadInfo
  }));
};

module.exportDefault(ChatsContextualBar);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/directory/9f66494f57853caefda8c5fe39445d25ce298fff.map
