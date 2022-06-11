function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/rooms/EditRoomContextBar.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let NotAuthorizedPage;
module.link("../../../components/NotAuthorizedPage", {
  default(v) {
    NotAuthorizedPage = v;
  }

}, 1);
let usePermission;
module.link("../../../contexts/AuthorizationContext", {
  usePermission(v) {
    usePermission = v;
  }

}, 2);
let EditRoomWithData;
module.link("./EditRoomWithData", {
  default(v) {
    EditRoomWithData = v;
  }

}, 3);

function EditRoomContextBar(_ref) {
  let {
    rid
  } = _ref;
  const canViewRoomAdministration = usePermission('view-room-administration');
  return canViewRoomAdministration ? /*#__PURE__*/React.createElement(EditRoomWithData, {
    rid: rid
  }) : /*#__PURE__*/React.createElement(NotAuthorizedPage, null);
}

module.exportDefault(EditRoomContextBar);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/rooms/7d68cbb9a0c61d5f107fef3b33c8ff1a9dd7df56.map
