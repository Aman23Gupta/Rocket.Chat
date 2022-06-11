function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/directory/ChatsContextualBar.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
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
let VerticalBar;
module.link("../../../components/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 2);
let useRoute, useRouteParameter;
module.link("../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  },

  useRouteParameter(v) {
    useRouteParameter = v;
  }

}, 3);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 4);
let AsyncStatePhase;
module.link("../../../hooks/useAsyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 5);
let useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 6);
let FormSkeleton;
module.link("./Skeleton", {
  FormSkeleton(v) {
    FormSkeleton = v;
  }

}, 7);
let Chat;
module.link("./chats/Chat", {
  default(v) {
    Chat = v;
  }

}, 8);
let ChatInfoDirectory;
module.link("./chats/contextualBar/ChatInfoDirectory", {
  default(v) {
    ChatInfoDirectory = v;
  }

}, 9);
let RoomEditWithData;
module.link("./chats/contextualBar/RoomEditWithData", {
  default(v) {
    RoomEditWithData = v;
  }

}, 10);

const ChatsContextualBar = _ref => {
  let {
    chatReload
  } = _ref;
  const directoryRoute = useRoute('omnichannel-directory');
  const bar = useRouteParameter('bar') || 'info';
  const id = useRouteParameter('id');
  const t = useTranslation();

  const openInRoom = () => {
    directoryRoute.push({
      page: 'chats',
      id,
      bar: 'view'
    });
  };

  const handleChatsVerticalBarCloseButtonClick = () => {
    directoryRoute.push({
      page: 'chats'
    });
  };

  const handleChatsVerticalBarBackButtonClick = () => {
    directoryRoute.push({
      page: 'chats',
      id,
      bar: 'info'
    });
  };

  const {
    value: data,
    phase: state,
    error,
    reload: reloadInfo
  } = useEndpointData("rooms.info?roomId=".concat(id));

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
//# sourceMappingURL=/dynamic/client/views/omnichannel/directory/c363d820f3369d285baa2f09766a7ef34f92b059.map
