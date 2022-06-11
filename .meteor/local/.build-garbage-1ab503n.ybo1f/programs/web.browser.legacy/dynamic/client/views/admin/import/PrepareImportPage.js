function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/import/PrepareImportPage.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 1);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 2);
var Badge, Box, Button, ButtonGroup, Icon, Margins, Throbber, Tabs;
module.link("@rocket.chat/fuselage", {
  Badge: function (v) {
    Badge = v;
  },
  Box: function (v) {
    Box = v;
  },
  Button: function (v) {
    Button = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  Margins: function (v) {
    Margins = v;
  },
  Throbber: function (v) {
    Throbber = v;
  },
  Tabs: function (v) {
    Tabs = v;
  }
}, 0);
var useDebouncedValue, useSafely;
module.link("@rocket.chat/fuselage-hooks", {
  useDebouncedValue: function (v) {
    useDebouncedValue = v;
  },
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
var ProgressStep, ImportWaitingStates, ImportFileReadyStates, ImportPreparingStartedStates, ImportingStartedStates, ImportingErrorStates;
module.link("../../../../app/importer/lib/ImporterProgressStep", {
  ProgressStep: function (v) {
    ProgressStep = v;
  },
  ImportWaitingStates: function (v) {
    ImportWaitingStates = v;
  },
  ImportFileReadyStates: function (v) {
    ImportFileReadyStates = v;
  },
  ImportPreparingStartedStates: function (v) {
    ImportPreparingStartedStates = v;
  },
  ImportingStartedStates: function (v) {
    ImportingStartedStates = v;
  },
  ImportingErrorStates: function (v) {
    ImportingErrorStates = v;
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
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 9);
var PrepareChannels;
module.link("./PrepareChannels", {
  "default": function (v) {
    PrepareChannels = v;
  }
}, 10);
var PrepareUsers;
module.link("./PrepareUsers", {
  "default": function (v) {
    PrepareUsers = v;
  }
}, 11);
var useErrorHandler;
module.link("./useErrorHandler", {
  useErrorHandler: function (v) {
    useErrorHandler = v;
  }
}, 12);

var waitFor = function (fn, predicate) {
  return new Promise(function (resolve, reject) {
    var callPromise = function () {
      fn().then(function (result) {
        if (predicate(result)) {
          resolve(result);
          return;
        }

        setTimeout(callPromise, 1000);
      }, reject);
    };

    callPromise();
  });
};

function PrepareImportPage() {
  var t = useTranslation();
  var handleError = useErrorHandler();

  var _useSafely = useSafely(useState(true)),
      _useSafely2 = _slicedToArray(_useSafely, 2),
      isPreparing = _useSafely2[0],
      setPreparing = _useSafely2[1];

  var _useSafely3 = useSafely(useState(null)),
      _useSafely4 = _slicedToArray(_useSafely3, 2),
      progressRate = _useSafely4[0],
      setProgressRate = _useSafely4[1];

  var _useSafely5 = useSafely(useState(null)),
      _useSafely6 = _slicedToArray(_useSafely5, 2),
      status = _useSafely6[0],
      setStatus = _useSafely6[1];

  var _useSafely7 = useSafely(useState(0)),
      _useSafely8 = _slicedToArray(_useSafely7, 2),
      messageCount = _useSafely8[0],
      setMessageCount = _useSafely8[1];

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      users = _useState2[0],
      setUsers = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      channels = _useState4[0],
      setChannels = _useState4[1];

  var _useSafely9 = useSafely(useState(false)),
      _useSafely10 = _slicedToArray(_useSafely9, 2),
      isImporting = _useSafely10[0],
      setImporting = _useSafely10[1];

  var usersCount = useMemo(function () {
    return users.filter(function (_ref) {
      var do_import = _ref.do_import;
      return do_import;
    }).length;
  }, [users]);
  var channelsCount = useMemo(function () {
    return channels.filter(function (_ref2) {
      var do_import = _ref2.do_import;
      return do_import;
    }).length;
  }, [channels]);
  var importHistoryRoute = useRoute('admin-import');
  var newImportRoute = useRoute('admin-import-new');
  var importProgressRoute = useRoute('admin-import-progress');
  var getImportFileData = useEndpoint('GET', 'getImportFileData');
  var getCurrentImportOperation = useEndpoint('GET', 'getCurrentImportOperation');
  var startImport = useEndpoint('POST', 'startImport');
  useEffect(function () {
    var streamer = new Meteor.Streamer('importers');

    var handleProgressUpdated = function (_ref3) {
      var rate = _ref3.rate;
      setProgressRate(rate);
    };

    streamer.on('progress', handleProgressUpdated);
    return function () {
      streamer.removeListener('progress', handleProgressUpdated);
    };
  }, [setProgressRate]);
  useEffect(function () {
    var loadImportFileData = function () {
      function _callee() {
        var data;
        return _regeneratorRuntime.async(function () {
          function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return _regeneratorRuntime.awrap(waitFor(getImportFileData, function (data) {
                    return data && !data.waiting;
                  }));

                case 3:
                  data = _context.sent;

                  if (data) {
                    _context.next = 8;
                    break;
                  }

                  handleError(t('Importer_not_setup'));
                  importHistoryRoute.push();
                  return _context.abrupt("return");

                case 8:
                  if (!data.step) {
                    _context.next = 12;
                    break;
                  }

                  handleError(t('Failed_To_Load_Import_Data'));
                  importHistoryRoute.push();
                  return _context.abrupt("return");

                case 12:
                  setMessageCount(data.message_count);
                  setUsers(data.users.map(function (user) {
                    return _objectSpread(_objectSpread({}, user), {}, {
                      do_import: true
                    });
                  }));
                  setChannels(data.channels.map(function (channel) {
                    return _objectSpread(_objectSpread({}, channel), {}, {
                      do_import: true
                    });
                  }));
                  setPreparing(false);
                  setProgressRate(null);
                  _context.next = 23;
                  break;

                case 19:
                  _context.prev = 19;
                  _context.t0 = _context["catch"](0);
                  handleError(_context.t0, t('Failed_To_Load_Import_Data'));
                  importHistoryRoute.push();

                case 23:
                case "end":
                  return _context.stop();
              }
            }
          }

          return _callee$;
        }(), null, null, [[0, 19]], Promise);
      }

      return _callee;
    }();

    var loadCurrentOperation = function () {
      function _callee2() {
        var _await$waitFor, operation;

        return _regeneratorRuntime.async(function () {
          function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return _regeneratorRuntime.awrap(waitFor(getCurrentImportOperation, function (_ref4) {
                    var operation = _ref4.operation;
                    return operation.valid && !ImportWaitingStates.includes(operation.status);
                  }));

                case 3:
                  _await$waitFor = _context2.sent;
                  operation = _await$waitFor.operation;

                  if (operation.valid) {
                    _context2.next = 8;
                    break;
                  }

                  newImportRoute.push();
                  return _context2.abrupt("return");

                case 8:
                  if (!ImportingStartedStates.includes(operation.status)) {
                    _context2.next = 11;
                    break;
                  }

                  importProgressRoute.push();
                  return _context2.abrupt("return");

                case 11:
                  if (!(operation.status === ProgressStep.USER_SELECTION || ImportPreparingStartedStates.includes(operation.status) || ImportFileReadyStates.includes(operation.status))) {
                    _context2.next = 15;
                    break;
                  }

                  setStatus(operation.status);
                  loadImportFileData();
                  return _context2.abrupt("return");

                case 15:
                  if (!ImportingErrorStates.includes(operation.status)) {
                    _context2.next = 19;
                    break;
                  }

                  handleError(t('Import_Operation_Failed'));
                  importHistoryRoute.push();
                  return _context2.abrupt("return");

                case 19:
                  if (!(operation.status === ProgressStep.DONE)) {
                    _context2.next = 22;
                    break;
                  }

                  importHistoryRoute.push();
                  return _context2.abrupt("return");

                case 22:
                  handleError(t('Unknown_Import_State'));
                  importHistoryRoute.push();
                  _context2.next = 30;
                  break;

                case 26:
                  _context2.prev = 26;
                  _context2.t0 = _context2["catch"](0);
                  handleError(t('Failed_To_Load_Import_Data'));
                  importHistoryRoute.push();

                case 30:
                case "end":
                  return _context2.stop();
              }
            }
          }

          return _callee2$;
        }(), null, null, [[0, 26]], Promise);
      }

      return _callee2;
    }();

    loadCurrentOperation();
  }, [getCurrentImportOperation, getImportFileData, handleError, importHistoryRoute, importProgressRoute, newImportRoute, setMessageCount, setPreparing, setProgressRate, setStatus, t]);

  var handleBackToImportsButtonClick = function () {
    importHistoryRoute.push();
  };

  var handleStartButtonClick = function () {
    function _callee3() {
      return _regeneratorRuntime.async(function () {
        function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                setImporting(true);
                _context3.prev = 1;
                _context3.next = 4;
                return _regeneratorRuntime.awrap(startImport({
                  input: {
                    users: users,
                    channels: channels
                  }
                }));

              case 4:
                importProgressRoute.push();
                _context3.next = 11;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](1);
                handleError(_context3.t0, t('Failed_To_Start_Import'));
                importHistoryRoute.push();

              case 11:
              case "end":
                return _context3.stop();
            }
          }
        }

        return _callee3$;
      }(), null, null, [[1, 7]], Promise);
    }

    return _callee3;
  }();

  var _useState5 = useState('users'),
      _useState6 = _slicedToArray(_useState5, 2),
      tab = _useState6[0],
      setTab = _useState6[1];

  var handleTabClick = useMemo(function () {
    return function (tab) {
      return function () {
        return setTab(tab);
      };
    };
  }, []);
  var statusDebounced = useDebouncedValue(status, 100);
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Importing_Data')
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
    ghost: true,
    onClick: handleBackToImportsButtonClick
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "back"
  }), " ", t('Back_to_imports')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    disabled: isImporting,
    onClick: handleStartButtonClick
  }, t('Importer_Prepare_Start_Import')))), /*#__PURE__*/React.createElement(Page.ScrollableContentWithShadow, null, /*#__PURE__*/React.createElement(Box, {
    marginInline: "auto",
    marginBlock: "x24",
    width: "full",
    maxWidth: "590px"
  }, /*#__PURE__*/React.createElement(Box, {
    is: "h2",
    fontScale: "p2m"
  }, statusDebounced && t(statusDebounced.replace('importer_', 'importer_status_'))), !isPreparing && /*#__PURE__*/React.createElement(Tabs, {
    flexShrink: 0
  }, /*#__PURE__*/React.createElement(Tabs.Item, {
    disabled: usersCount === 0,
    selected: tab === 'users',
    onClick: handleTabClick('users')
  }, t('Users'), " ", /*#__PURE__*/React.createElement(Badge, null, usersCount)), /*#__PURE__*/React.createElement(Tabs.Item, {
    selected: tab === 'channels',
    onClick: handleTabClick('channels')
  }, t('Channels'), " ", /*#__PURE__*/React.createElement(Badge, null, channelsCount)), /*#__PURE__*/React.createElement(Tabs.Item, {
    disabled: true
  }, t('Messages'), /*#__PURE__*/React.createElement(Badge, null, messageCount))), /*#__PURE__*/React.createElement(Margins, {
    block: "x24"
  }, isPreparing && /*#__PURE__*/React.createElement(React.Fragment, null, progressRate ? /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    justifyContent: "center",
    fontScale: "p2"
  }, /*#__PURE__*/React.createElement(Box, {
    is: "progress",
    value: (progressRate * 10).toFixed(0),
    max: "1000",
    marginInlineEnd: "x24"
  }), /*#__PURE__*/React.createElement(Box, {
    is: "span"
  }, s.numberFormat(progressRate, 0), "%")) : /*#__PURE__*/React.createElement(Throbber, {
    justifyContent: "center"
  })), !isPreparing && tab === 'users' && /*#__PURE__*/React.createElement(PrepareUsers, {
    usersCount: usersCount,
    users: users,
    setUsers: setUsers
  }), !isPreparing && tab === 'channels' && /*#__PURE__*/React.createElement(PrepareChannels, {
    channels: channels,
    channelsCount: channelsCount,
    setChannels: setChannels
  })))));
}

module.exportDefault(PrepareImportPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/import/cd99a458ba18d5193b61f717a3d0247022d61d1b.map
