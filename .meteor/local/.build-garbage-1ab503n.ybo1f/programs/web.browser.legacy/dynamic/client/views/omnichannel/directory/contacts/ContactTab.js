function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/directory/contacts/ContactTab.js                                                           //
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
module.link("../../../../components/NotAuthorizedPage", {
  "default": function (v) {
    NotAuthorizedPage = v;
  }
}, 1);
var usePermission;
module.link("../../../../contexts/AuthorizationContext", {
  usePermission: function (v) {
    usePermission = v;
  }
}, 2);
var ContactTable;
module.link("./ContactTable", {
  "default": function (v) {
    ContactTable = v;
  }
}, 3);

function ContactTab(props) {
  var hasAccess = usePermission('view-l-room');

  if (hasAccess) {
    return /*#__PURE__*/React.createElement(ContactTable, props);
  }

  return /*#__PURE__*/React.createElement(NotAuthorizedPage, null);
}

module.exportDefault(ContactTab);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/directory/contacts/27209aa0652ab3397c3916330747b00d640dfa05.map
