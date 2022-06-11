function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/directory/ChannelsTab.js                                                                               //
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
var ChannelsTable;
module.link("./ChannelsTable", {
  "default": function (v) {
    ChannelsTable = v;
  }
}, 3);

function ChannelsTab(props) {
  var canViewPublicRooms = usePermission('view-c-room');

  if (canViewPublicRooms) {
    return /*#__PURE__*/React.createElement(ChannelsTable, props);
  }

  return /*#__PURE__*/React.createElement(NotAuthorizedPage, null);
}

module.exportDefault(ChannelsTab);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/directory/bedd36fee8451d815f905e2d9216626384e21c2c.map
