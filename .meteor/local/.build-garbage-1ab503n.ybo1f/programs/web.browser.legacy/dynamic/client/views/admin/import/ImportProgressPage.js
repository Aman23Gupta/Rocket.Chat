function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/import/ImportProgressPage.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);
var Box, Margins, Throbber;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Margins: function (v) {
    Margins = v;
  },
  Throbber: function (v) {
    Throbber = v;
  }
}, 0);
var useSafely;
module.link("@rocket.chat/fuselage-hooks", {
  useSafely: function (v) {
    useSafely = v;
  }
}, 1);
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 2);
var React, useEffect, useState, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useState: function (v) {
    useState = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 3);
var s;
module.link("underscore.string", {
  "default": function (v) {
    s = v;
  }
}, 4);
var ProgressStep, ImportingStartedStates;
module.link("../../../../app/importer/lib/ImporterProgressStep", {
  ProgressStep: function (v) {
    ProgressStep = v;
  },
  ImportingStartedStates: function (v) {
    ImportingStartedStates = v;
  }
}, 5);
var Page;
module.link("../../../components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 6);
var useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 7);
var useEndpoint;
module.link("../../../contexts/ServerContext", {
  useEndpoint: function (v) {
    useEndpoint = v;
  }
}, 8);
var useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 9);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 10);
var useErrorHandler;
module.link("./useErrorHandler", {
  useErrorHandler: function (v) {
    useErrorHandler = v;
  }
}, 11);

function ImportProgressPage() {
  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();
  var handleError = useErrorHandler();

  var _useSafely = useSafely(useState(null)),
      _useSafely2 = _slicedToArray(_useSafely, 2),
      importerKey = _useSafely2[0],
      setImporterKey = _useSafely2[1];

  var _useSafely3 = useSafely(useState('Loading...')),
      _useSafely4 = _slicedToArray(_useSafely3, 2),
      step = _useSafely4[0],
      setStep = _useSafely4[1];

  var _useSafely5 = useSafely(useState(0)),
      _useSafely6 = _slicedToArray(_useSafely5, 2),
      completed = _useSafely6[0],
      setCompleted = _useSafely6[1];

  var _useSafely7 = useSafely(useState(0)),
      _useSafely8 = _slicedToArray(_useSafely7, 2),
      total = _useSafely8[0],
      setTotal = _useSafely8[1];

  var getCurrentImportOperation = useEndpoint('GET', 'getCurrentImportOperation');
  var getImportProgress = useEndpoint('GET', 'getImportProgress');
  var importHistoryRoute = useRoute('admin-import');
  var prepareImportRoute = useRoute('admin-import-prepare');
  useEffect(function () {
    var loadCurrentOperation = function () {
      function _callee() {
        var _await$getCurrentImpo, operation;

        return _regeneratorRuntime.async(function () {
          function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return _regeneratorRuntime.awrap(getCurrentImportOperation());

                case 3:
                  _await$getCurrentImpo = _context.sent;
                  operation = _await$getCurrentImpo.operation;

                  if (operation.valid) {
                    _context.next = 8;
                    break;
                  }

                  importHistoryRoute.push();
                  return _context.abrupt("return");

                case 8:
                  if (ImportingStartedStates.includes(operation.status)) {
                    _context.next = 11;
                    break;
                  }

                  prepareImportRoute.push();
                  return _context.abrupt("return");

                case 11:
                  setImporterKey(operation.importerKey);
                  setCompleted(operation.count.completed);
                  setTotal(operation.count.total);
                  _context.next = 20;
                  break;

                case 16:
                  _context.prev = 16;
                  _context.t0 = _context["catch"](0);
                  handleError(_context.t0, t('Failed_To_Load_Import_Data'));
                  importHistoryRoute.push();

                case 20:
                case "end":
                  return _context.stop();
              }
            }
          }

          return _callee$;
        }(), null, null, [[0, 16]], Promise);
      }

      return _callee;
    }();

    loadCurrentOperation();
  }, [getCurrentImportOperation, handleError, importHistoryRoute, prepareImportRoute, setCompleted, setImporterKey, setTotal, t]);
  useEffect(function () {
    if (!importerKey) {
      return;
    }

    var handleProgressUpdated = function (_ref) {
      var key = _ref.key,
          step = _ref.step,
          _ref$count = _ref.count;
      _ref$count = _ref$count === void 0 ? {} : _ref$count;
      var _ref$count$completed = _ref$count.completed,
          completed = _ref$count$completed === void 0 ? 0 : _ref$count$completed,
          _ref$count$total = _ref$count.total,
          total = _ref$count$total === void 0 ? 0 : _ref$count$total;

      if (key.toLowerCase() !== importerKey) {
        return;
      }

      switch (step) {
        case ProgressStep.DONE:
          dispatchToastMessage({
            type: 'success',
            message: t(step[0].toUpperCase() + step.slice(1))
          });
          importHistoryRoute.push();
          return;

        case ProgressStep.ERROR:
        case ProgressStep.CANCELLED:
          handleError(t(step[0].toUpperCase() + step.slice(1)));
          importHistoryRoute.push();
          return;

        default:
          setStep(step);
          setCompleted(completed);
          setTotal(total);
          break;
      }
    };

    var streamer = new Meteor.Streamer('importers');

    var loadImportProgress = function () {
      function _callee2() {
        var progress;
        return _regeneratorRuntime.async(function () {
          function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return _regeneratorRuntime.awrap(getImportProgress());

                case 3:
                  progress = _context2.sent;

                  if (progress) {
                    _context2.next = 8;
                    break;
                  }

                  dispatchToastMessage({
                    type: 'warning',
                    message: t('Importer_not_in_progress')
                  });
                  prepareImportRoute.push();
                  return _context2.abrupt("return");

                case 8:
                  streamer.on('progress', handleProgressUpdated);
                  handleProgressUpdated(progress);
                  _context2.next = 16;
                  break;

                case 12:
                  _context2.prev = 12;
                  _context2.t0 = _context2["catch"](0);
                  handleError(_context2.t0, t('Failed_To_Load_Import_Data'));
                  importHistoryRoute.push();

                case 16:
                case "end":
                  return _context2.stop();
              }
            }
          }

          return _callee2$;
        }(), null, null, [[0, 12]], Promise);
      }

      return _callee2;
    }();

    loadImportProgress();
    return function () {
      streamer.removeListener('progress', handleProgressUpdated);
    };
  }, [dispatchToastMessage, getImportProgress, handleError, importHistoryRoute, importerKey, prepareImportRoute, setCompleted, setStep, setTotal, t]);
  var progressRate = useMemo(function () {
    if (total === 0) {
      return null;
    }

    return completed / total * 100;
  }, [completed, total]);
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Importing_Data')
  }), /*#__PURE__*/React.createElement(Page.ScrollableContentWithShadow, null, /*#__PURE__*/React.createElement(Box, {
    marginInline: "auto",
    marginBlock: "neg-x24",
    width: "full",
    maxWidth: "x580"
  }, /*#__PURE__*/React.createElement(Margins, {
    block: "x24"
  }, /*#__PURE__*/React.createElement(Box, {
    is: "p",
    fontScale: "p2"
  }, t(step[0].toUpperCase() + step.slice(1))), progressRate ? /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    justifyContent: "center"
  }, /*#__PURE__*/React.createElement(Box, {
    is: "progress",
    value: completed,
    max: total,
    marginInlineEnd: "x24"
  }), /*#__PURE__*/React.createElement(Box, {
    is: "span",
    fontScale: "p2"
  }, completed, "/", total, " (", s.numberFormat(progressRate, 0), "%)")) : /*#__PURE__*/React.createElement(Throbber, {
    justifyContent: "center"
  })))));
}

module.exportDefault(ImportProgressPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/import/f7a7e0c71b924a3de91b348a234a50ba1a02eb50.map
