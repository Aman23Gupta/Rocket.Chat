function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/directory/contacts/ContactTab.js                                                           //
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
module.link("../../../../components/NotAuthorizedPage", {
  default(v) {
    NotAuthorizedPage = v;
  }

}, 1);
let usePermission;
module.link("../../../../contexts/AuthorizationContext", {
  usePermission(v) {
    usePermission = v;
  }

}, 2);
let ContactTable;
module.link("./ContactTable", {
  default(v) {
    ContactTable = v;
  }

}, 3);

function ContactTab(props) {
  const hasAccess = usePermission('view-l-room');

  if (hasAccess) {
    return /*#__PURE__*/React.createElement(ContactTable, props);
  }

  return /*#__PURE__*/React.createElement(NotAuthorizedPage, null);
}

module.exportDefault(ContactTab);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/directory/contacts/7c251f51cd2d209171353ac4d7e9931874122ca4.map
