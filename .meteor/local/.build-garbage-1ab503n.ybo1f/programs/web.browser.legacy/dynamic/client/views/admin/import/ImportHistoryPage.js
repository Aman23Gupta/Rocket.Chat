function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/import/ImportHistoryPage.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 1);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 2);
var Button, ButtonGroup, Table;
module.link("@rocket.chat/fuselage", {
  Button: function (v) {
    Button = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Table: function (v) {
    Table = v;
  }
}, 0);
var useMediaQuery, useSafely;
module.link("@rocket.chat/fuselage-hooks", {
  useMediaQuery: function (v) {
    useMediaQuery = v;
  },
  useSafely: function (v) {
    useSafely = v;
  }
}, 1);
var React, useState, useEffect, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 2);
var ProgressStep;
module.link("../../../../app/importer/lib/ImporterProgressStep", {
  ProgressStep: function (v) {
    ProgressStep = v;
  }
}, 3);
var Page;
module.link("../../../components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 4);
var useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 5);
var useEndpoint;
module.link("../../../contexts/ServerContext", {
  useEndpoint: function (v) {
    useEndpoint = v;
  }
}, 6);
var useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 7);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 8);
var ImportOperationSummary;
module.link("./ImportOperationSummary", {
  "default": function (v) {
    ImportOperationSummary = v;
  }
}, 9);

function ImportHistoryPage() {
  var _latestOperations$fil;

  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();

  var _useSafely = useSafely(useState(true)),
      _useSafely2 = _slicedToArray(_useSafely, 2),
      isLoading = _useSafely2[0],
      setLoading = _useSafely2[1];

  var _useSafely3 = useSafely(useState()),
      _useSafely4 = _slicedToArray(_useSafely3, 2),
      currentOperation = _useSafely4[0],
      setCurrentOperation = _useSafely4[1];

  var _useSafely5 = useSafely(useState([])),
      _useSafely6 = _slicedToArray(_useSafely5, 2),
      latestOperations = _useSafely6[0],
      setLatestOperations = _useSafely6[1];

  var getCurrentImportOperation = useEndpoint('GET', 'getCurrentImportOperation');
  var getLatestImportOperations = useEndpoint('GET', 'getLatestImportOperations');
  var downloadPendingFiles = useEndpoint('POST', 'downloadPendingFiles');
  var downloadPendingAvatars = useEndpoint('POST', 'downloadPendingAvatars');
  var newImportRoute = useRoute('admin-import-new');
  var importProgressRoute = useRoute('admin-import-progress');
  useEffect(function () {
    var loadData = function () {
      function _callee() {
        var _await$getCurrentImpo, operation, operations;

        return _regeneratorRuntime.async(function () {
          function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  setLoading(true);
                  _context.prev = 1;
                  _context.next = 4;
                  return _regeneratorRuntime.awrap(getCurrentImportOperation());

                case 4:
                  _await$getCurrentImpo = _context.sent;
                  operation = _await$getCurrentImpo.operation;
                  setCurrentOperation(operation);
                  _context.next = 12;
                  break;

                case 9:
                  _context.prev = 9;
                  _context.t0 = _context["catch"](1);
                  dispatchToastMessage({
                    type: 'error',
                    message: t('Failed_To_Load_Import_Operation')
                  });

                case 12:
                  _context.prev = 12;
                  _context.next = 15;
                  return _regeneratorRuntime.awrap(getLatestImportOperations());

                case 15:
                  operations = _context.sent;
                  setLatestOperations(operations);
                  _context.next = 22;
                  break;

                case 19:
                  _context.prev = 19;
                  _context.t1 = _context["catch"](12);
                  dispatchToastMessage({
                    type: 'error',
                    message: t('Failed_To_Load_Import_History')
                  });

                case 22:
                  setLoading(false);

                case 23:
                case "end":
                  return _context.stop();
              }
            }
          }

          return _callee$;
        }(), null, null, [[1, 9], [12, 19]], Promise);
      }

      return _callee;
    }();

    loadData();
  }, [dispatchToastMessage, getCurrentImportOperation, getLatestImportOperations, setCurrentOperation, setLatestOperations, setLoading, t]);
  var hasAnySuccessfulImport = useMemo(function () {
    return latestOperations === null || latestOperations === void 0 ? void 0 : latestOperations.some(function (_ref) {
      var status = _ref.status;
      return status === ProgressStep.DONE;
    });
  }, [latestOperations]);

  var handleNewImportClick = function () {
    newImportRoute.push();
  };

  var handleDownloadPendingFilesClick = function () {
    function _callee2() {
      var _await$downloadPendin, count;

      return _regeneratorRuntime.async(function () {
        function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                setLoading(true);
                _context2.next = 4;
                return _regeneratorRuntime.awrap(downloadPendingFiles());

              case 4:
                _await$downloadPendin = _context2.sent;
                count = _await$downloadPendin.count;

                if (count) {
                  _context2.next = 10;
                  break;
                }

                dispatchToastMessage({
                  type: 'info',
                  message: t('No_files_left_to_download')
                });
                setLoading(false);
                return _context2.abrupt("return");

              case 10:
                dispatchToastMessage({
                  type: 'info',
                  message: t('File_Downloads_Started')
                });
                importProgressRoute.push();
                _context2.next = 19;
                break;

              case 14:
                _context2.prev = 14;
                _context2.t0 = _context2["catch"](0);
                console.error(_context2.t0);
                dispatchToastMessage({
                  type: 'error',
                  message: t('Failed_To_Download_Files')
                });
                setLoading(false);

              case 19:
              case "end":
                return _context2.stop();
            }
          }
        }

        return _callee2$;
      }(), null, null, [[0, 14]], Promise);
    }

    return _callee2;
  }();

  var handleDownloadPendingAvatarsClick = function () {
    function _callee3() {
      var _await$downloadPendin2, count;

      return _regeneratorRuntime.async(function () {
        function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                setLoading(true);
                _context3.next = 4;
                return _regeneratorRuntime.awrap(downloadPendingAvatars());

              case 4:
                _await$downloadPendin2 = _context3.sent;
                count = _await$downloadPendin2.count;

                if (count) {
                  _context3.next = 10;
                  break;
                }

                dispatchToastMessage({
                  type: 'info',
                  message: t('No_files_left_to_download')
                });
                setLoading(false);
                return _context3.abrupt("return");

              case 10:
                dispatchToastMessage({
                  type: 'info',
                  message: t('File_Downloads_Started')
                });
                importProgressRoute.push();
                _context3.next = 19;
                break;

              case 14:
                _context3.prev = 14;
                _context3.t0 = _context3["catch"](0);
                console.error(_context3.t0);
                dispatchToastMessage({
                  type: 'error',
                  message: t('Failed_To_Download_Files')
                });
                setLoading(false);

              case 19:
              case "end":
                return _context3.stop();
            }
          }
        }

        return _callee3$;
      }(), null, null, [[0, 14]], Promise);
    }

    return _callee3;
  }();

  var small = useMediaQuery('(max-width: 768px)');
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Import')
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    disabled: isLoading,
    onClick: handleNewImportClick
  }, t('Import_New_File')), hasAnySuccessfulImport && /*#__PURE__*/React.createElement(Button, {
    disabled: isLoading,
    onClick: handleDownloadPendingFilesClick
  }, t('Download_Pending_Files')), hasAnySuccessfulImport && /*#__PURE__*/React.createElement(Button, {
    disabled: isLoading,
    onClick: handleDownloadPendingAvatarsClick
  }, t('Download_Pending_Avatars')))), /*#__PURE__*/React.createElement(Page.ScrollableContentWithShadow, null, /*#__PURE__*/React.createElement(Table, {
    fixed: true
  }, /*#__PURE__*/React.createElement(Table.Head, null, /*#__PURE__*/React.createElement(Table.Row, null, /*#__PURE__*/React.createElement(Table.Cell, {
    is: "th",
    rowSpan: 2,
    width: "x140"
  }, t('Import_Type')), /*#__PURE__*/React.createElement(Table.Cell, {
    is: "th",
    rowSpan: 2
  }, t('Last_Updated')), !small && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Table.Cell, {
    is: "th",
    rowSpan: 2
  }, t('Last_Status')), /*#__PURE__*/React.createElement(Table.Cell, {
    is: "th",
    rowSpan: 2
  }, t('File')), /*#__PURE__*/React.createElement(Table.Cell, {
    is: "th",
    align: "center",
    colSpan: 4,
    width: "x320"
  }, t('Counters')))), !small && /*#__PURE__*/React.createElement(Table.Row, null, /*#__PURE__*/React.createElement(Table.Cell, {
    is: "th",
    align: "center"
  }, t('Users')), /*#__PURE__*/React.createElement(Table.Cell, {
    is: "th",
    align: "center"
  }, t('Channels')), /*#__PURE__*/React.createElement(Table.Cell, {
    is: "th",
    align: "center"
  }, t('Messages')), /*#__PURE__*/React.createElement(Table.Cell, {
    is: "th",
    align: "center"
  }, t('Total')))), /*#__PURE__*/React.createElement(Table.Body, null, isLoading ? Array.from({
    length: 20
  }, function (_, i) {
    return /*#__PURE__*/React.createElement(ImportOperationSummary.Skeleton, {
      small: small,
      key: i
    });
  }) : /*#__PURE__*/React.createElement(React.Fragment, null, (currentOperation === null || currentOperation === void 0 ? void 0 : currentOperation.valid) && /*#__PURE__*/React.createElement(ImportOperationSummary, _extends({}, currentOperation, {
    small: small
  })), latestOperations === null || latestOperations === void 0 ? void 0 : (_latestOperations$fil = latestOperations.filter(function (_ref2) {
    var _id = _ref2._id;
    return (currentOperation === null || currentOperation === void 0 ? void 0 : currentOperation._id) !== _id || !(currentOperation !== null && currentOperation !== void 0 && currentOperation.valid);
  }) // Forcing valid=false as the current API only accept preparation/progress over currentOperation
  ) === null || _latestOperations$fil === void 0 ? void 0 : _latestOperations$fil.map(function (operation) {
    return /*#__PURE__*/React.createElement(ImportOperationSummary, _extends({
      key: operation._id
    }, operation, {
      valid: false,
      small: small
    }));
  }))))));
}

module.exportDefault(ImportHistoryPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/import/261cb56714f23b08bdd8bd57d6d2f5bb48aad0c4.map
