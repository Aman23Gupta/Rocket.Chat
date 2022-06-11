function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/directory/chats/contextualBar/ChatsContextualBar.js                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let VerticalBar;
module.link("../../../../../components/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 1);
let useRoute, useRouteParameter;
module.link("../../../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  },

  useRouteParameter(v) {
    useRouteParameter = v;
  }

}, 2);
let useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let useTabBarClose;
module.link("../../../../room/providers/ToolboxProvider", {
  useTabBarClose(v) {
    useTabBarClose = v;
  }

}, 4);
let ChatInfo;
module.link("./ChatInfo", {
  default(v) {
    ChatInfo = v;
  }

}, 5);
let RoomEditWithData;
module.link("./RoomEditWithData", {
  default(v) {
    RoomEditWithData = v;
  }

}, 6);
const PATH = 'live';

const ChatsContextualBar = _ref => {
  let {
    rid
  } = _ref;
  const t = useTranslation();
  const context = useRouteParameter('context');
  const directoryRoute = useRoute(PATH);
  const closeContextualBar = useTabBarClose();

  const handleRoomEditBarCloseButtonClick = () => {
    directoryRoute.push({
      id: rid,
      tab: 'room-info'
    });
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VerticalBar.Header, null, (context === 'info' || !context) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VerticalBar.Icon, {
    name: "info-circled"
  }), /*#__PURE__*/React.createElement(VerticalBar.Text, null, t('Room_Info'))), context === 'edit' && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VerticalBar.Icon, {
    name: "pencil"
  }), /*#__PURE__*/React.createElement(VerticalBar.Text, null, t('edit-room'))), /*#__PURE__*/React.createElement(VerticalBar.Close, {
    onClick: closeContextualBar
  })), context === 'edit' ? /*#__PURE__*/React.createElement(RoomEditWithData, {
    id: rid,
    close: handleRoomEditBarCloseButtonClick
  }) : /*#__PURE__*/React.createElement(ChatInfo, {
    route: PATH,
    id: rid
  }));
};

module.exportDefault(ChatsContextualBar);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/directory/chats/contextualBar/3f3b6b08a6ba47c566f40e10b223e57c1765df42.map
