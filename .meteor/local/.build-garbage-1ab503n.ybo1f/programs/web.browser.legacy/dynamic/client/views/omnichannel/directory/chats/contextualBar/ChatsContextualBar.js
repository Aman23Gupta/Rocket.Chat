function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/directory/chats/contextualBar/ChatsContextualBar.js                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var VerticalBar;
module.link("../../../../../components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 1);
var useRoute, useRouteParameter;
module.link("../../../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  },
  useRouteParameter: function (v) {
    useRouteParameter = v;
  }
}, 2);
var useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var useTabBarClose;
module.link("../../../../room/providers/ToolboxProvider", {
  useTabBarClose: function (v) {
    useTabBarClose = v;
  }
}, 4);
var ChatInfo;
module.link("./ChatInfo", {
  "default": function (v) {
    ChatInfo = v;
  }
}, 5);
var RoomEditWithData;
module.link("./RoomEditWithData", {
  "default": function (v) {
    RoomEditWithData = v;
  }
}, 6);
var PATH = 'live';

var ChatsContextualBar = function (_ref) {
  var rid = _ref.rid;
  var t = useTranslation();
  var context = useRouteParameter('context');
  var directoryRoute = useRoute(PATH);
  var closeContextualBar = useTabBarClose();

  var handleRoomEditBarCloseButtonClick = function () {
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
//# sourceMappingURL=/dynamic/client/views/omnichannel/directory/chats/contextualBar/045aae9c3388aa06c5127d8bdc3a89300e699ca5.map
