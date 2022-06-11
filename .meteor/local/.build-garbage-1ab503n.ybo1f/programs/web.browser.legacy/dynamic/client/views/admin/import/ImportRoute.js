function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/import/ImportRoute.js                                                                            //
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
var ImportHistoryPage;
module.link("./ImportHistoryPage", {
  "default": function (v) {
    ImportHistoryPage = v;
  }
}, 3);
var ImportProgressPage;
module.link("./ImportProgressPage", {
  "default": function (v) {
    ImportProgressPage = v;
  }
}, 4);
var NewImportPage;
module.link("./NewImportPage", {
  "default": function (v) {
    NewImportPage = v;
  }
}, 5);
var PrepareImportPage;
module.link("./PrepareImportPage", {
  "default": function (v) {
    PrepareImportPage = v;
  }
}, 6);

function ImportHistoryRoute(_ref) {
  var page = _ref.page;
  var canRunImport = usePermission('run-import');

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
//# sourceMappingURL=/dynamic/client/views/admin/import/11f3209bb35abab5accc9462fd46cbbfe5871e0b.map
