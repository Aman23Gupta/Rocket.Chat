function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/rooms/EditRoomContextBar.js                                                                      //
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
module.link("../../../components/NotAuthorizedPage", {
  "default": function (v) {
    NotAuthorizedPage = v;
  }
}, 1);
var usePermission;
module.link("../../../contexts/AuthorizationContext", {
  usePermission: function (v) {
    usePermission = v;
  }
}, 2);
var EditRoomWithData;
module.link("./EditRoomWithData", {
  "default": function (v) {
    EditRoomWithData = v;
  }
}, 3);

function EditRoomContextBar(_ref) {
  var rid = _ref.rid;
  var canViewRoomAdministration = usePermission('view-room-administration');
  return canViewRoomAdministration ? /*#__PURE__*/React.createElement(EditRoomWithData, {
    rid: rid
  }) : /*#__PURE__*/React.createElement(NotAuthorizedPage, null);
}

module.exportDefault(EditRoomContextBar);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/rooms/e5cbad4f5fad850c5def6d0ef38b4243b71ac3bb.map
