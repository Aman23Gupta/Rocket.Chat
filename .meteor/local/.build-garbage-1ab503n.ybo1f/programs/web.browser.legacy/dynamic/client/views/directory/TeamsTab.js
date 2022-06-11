function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/directory/TeamsTab.js                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var NotAuthorizedPage;
module.link("../../components/NotAuthorizedPage", {
  "default": function (v) {
    NotAuthorizedPage = v;
  }
}, 1);
var usePermission;
module.link("../../contexts/AuthorizationContext", {
  usePermission: function (v) {
    usePermission = v;
  }
}, 2);
var TeamsTable;
module.link("./TeamsTable", {
  "default": function (v) {
    TeamsTable = v;
  }
}, 3);

function TeamsTab(props) {
  var canViewPublicRooms = usePermission('view-c-room');

  if (canViewPublicRooms) {
    return /*#__PURE__*/React.createElement(TeamsTable, props);
  }

  return /*#__PURE__*/React.createElement(NotAuthorizedPage, null);
}

module.exportDefault(TeamsTab);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/directory/2f24809e8ebeb486f4857d743cea2f4bac506d9c.map
