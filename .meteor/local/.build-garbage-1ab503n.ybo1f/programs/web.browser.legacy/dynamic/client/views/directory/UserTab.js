function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/directory/UserTab.js                                                                                   //
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
var UserTable;
module.link("./UserTable", {
  "default": function (v) {
    UserTable = v;
  }
}, 3);

function UserTab(props) {
  var canViewOutsideRoom = usePermission('view-outside-room');
  var canViewDM = usePermission('view-d-room');

  if (canViewOutsideRoom && canViewDM) {
    return /*#__PURE__*/React.createElement(UserTable, props);
  }

  return /*#__PURE__*/React.createElement(NotAuthorizedPage, null);
}

module.exportDefault(UserTab);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/directory/684d08396ab108f839d87c4e225e0ea99cc1060f.map
