function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/import/ImportRoute.js                                                                            //
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
let ImportHistoryPage;
module.link("./ImportHistoryPage", {
  default(v) {
    ImportHistoryPage = v;
  }

}, 3);
let ImportProgressPage;
module.link("./ImportProgressPage", {
  default(v) {
    ImportProgressPage = v;
  }

}, 4);
let NewImportPage;
module.link("./NewImportPage", {
  default(v) {
    NewImportPage = v;
  }

}, 5);
let PrepareImportPage;
module.link("./PrepareImportPage", {
  default(v) {
    PrepareImportPage = v;
  }

}, 6);

function ImportHistoryRoute(_ref) {
  let {
    page
  } = _ref;
  const canRunImport = usePermission('run-import');

  if (!canRunImport) {
    return /*#__PURE__*/React.createElement(NotAuthorizedPage, null);
  }

  if (page === 'history') {
    return /*#__PURE__*/React.createElement(ImportHistoryPage, null);
  }

  if (page === 'new') {
    return /*#__PURE__*/React.createElement(NewImportPage, null);
  }

  if (page === 'prepare') {
    return /*#__PURE__*/React.createElement(PrepareImportPage, null);
  }

  if (page === 'progress') {
    return /*#__PURE__*/React.createElement(ImportProgressPage, null);
  }

  return null;
}

module.exportDefault(ImportHistoryRoute);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/import/b648c3904a5756fb2163d9278527d0e30f67cc29.map
