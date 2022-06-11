function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/rooms/RoomsPage.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  RoomsPage: () => RoomsPage
});
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Page;
module.link("../../../components/Page", {
  default(v) {
    Page = v;
  }

}, 1);
let VerticalBar;
module.link("../../../components/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 2);
let useRouteParameter, useRoute;
module.link("../../../contexts/RouterContext", {
  useRouteParameter(v) {
    useRouteParameter = v;
  },

  useRoute(v) {
    useRoute = v;
  }

}, 3);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 4);
let EditRoomContextBar;
module.link("./EditRoomContextBar", {
  default(v) {
    EditRoomContextBar = v;
  }

}, 5);
let RoomsTable;
module.link("./RoomsTable", {
  default(v) {
    RoomsTable = v;
  }

}, 6);

function RoomsPage() {
  const t = useTranslation();
  const context = useRouteParameter('context');
  const id = useRouteParameter('id');
  const roomsRoute = useRoute('admin-rooms');

  const handleVerticalBarCloseButtonClick = () => {
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
//# sourceMappingURL=/dynamic/client/views/admin/rooms/f0ccd0085d2dbdf816f8e80f9cbcb1bc60679818.map
