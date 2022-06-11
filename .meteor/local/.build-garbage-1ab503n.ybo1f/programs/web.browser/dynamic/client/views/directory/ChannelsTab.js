function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/directory/ChannelsTab.js                                                                               //
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
module.link("../../components/NotAuthorizedPage", {
  default(v) {
    NotAuthorizedPage = v;
  }

}, 1);
let usePermission;
module.link("../../contexts/AuthorizationContext", {
  usePermission(v) {
    usePermission = v;
  }

}, 2);
let ChannelsTable;
module.link("./ChannelsTable", {
  default(v) {
    ChannelsTable = v;
  }

}, 3);

function ChannelsTab(props) {
  const canViewPublicRooms = usePermission('view-c-room');

  if (canViewPublicRooms) {
    return /*#__PURE__*/React.createElement(ChannelsTable, props);
  }

  return /*#__PURE__*/React.createElement(NotAuthorizedPage, null);
}

module.exportDefault(ChannelsTab);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/directory/3faa54c42ba333ebdcae822a89a5d2c925bd83d2.map
