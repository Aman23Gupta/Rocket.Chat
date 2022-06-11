function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/rooms/RoomsPage.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  RoomsPage: function () {
    return RoomsPage;
  }
});
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var Page;
module.link("../../../components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 1);
var VerticalBar;
module.link("../../../components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 2);
var useRouteParameter, useRoute;
module.link("../../../contexts/RouterContext", {
  useRouteParameter: function (v) {
    useRouteParameter = v;
  },
  useRoute: function (v) {
    useRoute = v;
  }
}, 3);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 4);
var EditRoomContextBar;
module.link("./EditRoomContextBar", {
  "default": function (v) {
    EditRoomContextBar = v;
  }
}, 5);
var RoomsTable;
module.link("./RoomsTable", {
  "default": function (v) {
    RoomsTable = v;
  }
}, 6);

function RoomsPage() {
  var t = useTranslation();
  var context = useRouteParameter('context');
  var id = useRouteParameter('id');
  var roomsRoute = useRoute('admin-rooms');

  var handleVerticalBarCloseButtonClick = function () {
    roomsRoute.push({});
  };

  return /*#__PURE__*/React.createElement(Page, {
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Rooms')
  }), /*#__PURE__*/React.createElement(Page.Content, null, /*#__PURE__*/React.createElement(RoomsTable, null))), context && /*#__PURE__*/React.createElement(VerticalBar, null, /*#__PURE__*/React.createElement(VerticalBar.Header, null, t('Room_Info'), /*#__PURE__*/React.createElement(VerticalBar.Close, {
    onClick: handleVerticalBarCloseButtonClick
  })), /*#__PURE__*/React.createElement(EditRoomContextBar, {
    rid: id
  })));
}

module.exportDefault(RoomsPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/rooms/d4bee9bd2356fdf505dd0383378a06b3d8777dc3.map
