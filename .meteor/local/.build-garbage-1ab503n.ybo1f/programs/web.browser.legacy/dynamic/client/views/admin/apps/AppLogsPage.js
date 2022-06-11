function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/AppLogsPage.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["id"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 1);

var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 2);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 3);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 4);
var Box, Button, ButtonGroup, Icon, Accordion, Pagination;
module.link("@rocket.chat/fuselage", {
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
  Accordion: function (v) {
    Accordion = v;
  },
  Pagination: function (v) {
    Pagination = v;
  }
}, 0);
var useSafely;
module.link("@rocket.chat/fuselage-hooks", {
  useSafely: function (v) {
    useSafely = v;
  }
}, 1);
var React, useCallback, useState, useEffect;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useState: function (v) {
    useState = v;
  },
  useEffect: function (v) {
    useEffect = v;
  }
}, 2);
var Page;
module.link("../../../components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 3);
var useCurrentRoute, useRoute;
module.link("../../../contexts/RouterContext", {
  useCurrentRoute: function (v) {
    useCurrentRoute = v;
  },
  useRoute: function (v) {
    useRoute = v;
  }
}, 4);
var useEndpoint;
module.link("../../../contexts/ServerContext", {
  useEndpoint: function (v) {
    useEndpoint = v;
  }
}, 5);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 6);
var useFormatDateAndTime;
module.link("../../../hooks/useFormatDateAndTime", {
  useFormatDateAndTime: function (v) {
    useFormatDateAndTime = v;
  }
}, 7);
var LogItem;
module.link("./LogItem", {
  "default": function (v) {
    LogItem = v;
  }
}, 8);
var LogsLoading;
module.link("./LogsLoading", {
  "default": function (v) {
    LogsLoading = v;
  }
}, 9);

var useAppWithLogs = function (_ref) {
  var id = _ref.id,
      current = _ref.current,
      itemsPerPage = _ref.itemsPerPage;

  var _useSafely = useSafely(useState({})),
      _useSafely2 = _slicedToArray(_useSafely, 2),
      data = _useSafely2[0],
      setData = _useSafely2[1];

  var getAppData = useEndpoint('GET', "/apps/" + id);
  var getAppLogs = useEndpoint('GET', "/apps/" + id + "/logs");
  var fetchData = useCallback(function () {
    function _callee() {
      var _await$Promise$all, _await$Promise$all2, app, logs;

      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _regeneratorRuntime.awrap(Promise.all([getAppData(), getAppLogs()]));

              case 3:
                _await$Promise$all = _context.sent;
                _await$Promise$all2 = _slicedToArray(_await$Promise$all, 2);
                app = _await$Promise$all2[0].app;
                logs = _await$Promise$all2[1].logs;
                setData(_objectSpread(_objectSpread({}, app), {}, {
                  logs: logs
                }));
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                setData({
                  error: _context.t0
                });

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[0, 10]], Promise);
    }

    return _callee;
  }(), [getAppData, getAppLogs, setData]);
  useEffect(function () {
    fetchData();
  }, [fetchData]);
  var sliceStart = data.logs && current > data.logs.length ? 0 : current;
  var total = data.logs ? data.logs.length : 0;
  var filteredData = data.logs ? _objectSpread(_objectSpread({}, data), {}, {
    logs: data.logs.slice(sliceStart, itemsPerPage + current)
  }) : data;
  return [filteredData, total, fetchData];
};

function AppLogsPage(_ref2) {
  var id = _ref2.id,
      props = _objectWithoutProperties(_ref2, _excluded);

  var t = useTranslation();
  var formatDateAndTime = useFormatDateAndTime();

  var _useState = useState(25),
      _useState2 = _slicedToArray(_useState, 2),
      itemsPerPage = _useState2[0],
      setItemsPerPage = _useState2[1];

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      current = _useState4[0],
      setCurrent = _useState4[1];

  var _useAppWithLogs = useAppWithLogs({
    id: id,
    itemsPerPage: itemsPerPage,
    current: current
  }),
      _useAppWithLogs2 = _slicedToArray(_useAppWithLogs, 3),
      app = _useAppWithLogs2[0],
      logEntriesCount = _useAppWithLogs2[1],
      fetchData = _useAppWithLogs2[2];

  var _useCurrentRoute = useCurrentRoute(),
      _useCurrentRoute2 = _slicedToArray(_useCurrentRoute, 1),
      currentRouteName = _useCurrentRoute2[0];

  var appLogsRoute = useRoute(currentRouteName);

  var handleResetButtonClick = function () {
    fetchData();
  };

  var handleBackButtonClick = function () {
    appLogsRoute.push();
  };

  var loading = !Object.values(app).length;
  var showData = !loading && !app.error;
  var showingResultsLabel = useCallback(function (_ref3) {
    var count = _ref3.count,
        current = _ref3.current,
        itemsPerPage = _ref3.itemsPerPage;
    return t('Showing_results_of', current + 1, Math.min(current + itemsPerPage, count), count);
  }, [t]);
  var itemsPerPageLabel = useCallback(function () {
    return t('Items_per_page:');
  }, [t]);
  return /*#__PURE__*/React.createElement(Page, _extends({
    flexDirection: "column"
  }, props), /*#__PURE__*/React.createElement(Page.Header, {
    title: t('View_the_Logs_for', {
      name: app.name || ''
    })
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: handleResetButtonClick
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "undo"
  }), " ", t('Refresh')), /*#__PURE__*/React.createElement(Button, {
    onClick: handleBackButtonClick
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "back"
  }), " ", t('Back')))), /*#__PURE__*/React.createElement(Page.ScrollableContent, null, loading && /*#__PURE__*/React.createElement(LogsLoading, null), app.error && /*#__PURE__*/React.createElement(Box, {
    maxWidth: "x600",
    alignSelf: "center",
    fontScale: "hh21"
  }, app.error.message), showData && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Accordion, {
    maxWidth: "x600",
    alignSelf: "center"
  }, app.logs && app.logs.map(function (log) {
    return /*#__PURE__*/React.createElement(LogItem, {
      key: log._createdAt,
      title: formatDateAndTime(log._createdAt) + ": \"" + log.method + "\" (" + log.totalTime + "ms)",
      instanceId: log.instanceId,
      entries: log.entries
    });
  })))), /*#__PURE__*/React.createElement(Pagination, {
    mi: "x24",
    divider: true,
    current: current,
    itemsPerPage: itemsPerPage,
    itemsPerPageLabel: itemsPerPageLabel,
    showingResultsLabel: showingResultsLabel,
    count: logEntriesCount,
    onSetItemsPerPage: setItemsPerPage,
    onSetCurrent: setCurrent
  }));
}

module.exportDefault(AppLogsPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/ea9b28e5fc42338392e94ef9b2f81d76769646e6.map
