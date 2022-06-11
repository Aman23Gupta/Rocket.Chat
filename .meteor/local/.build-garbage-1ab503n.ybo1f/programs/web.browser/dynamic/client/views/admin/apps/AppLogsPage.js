function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/AppLogsPage.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["id"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);

let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 2);
let Box, Button, ButtonGroup, Icon, Accordion, Pagination;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Button(v) {
    Button = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Icon(v) {
    Icon = v;
  },

  Accordion(v) {
    Accordion = v;
  },

  Pagination(v) {
    Pagination = v;
  }

}, 0);
let useSafely;
module.link("@rocket.chat/fuselage-hooks", {
  useSafely(v) {
    useSafely = v;
  }

}, 1);
let React, useCallback, useState, useEffect;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useState(v) {
    useState = v;
  },

  useEffect(v) {
    useEffect = v;
  }

}, 2);
let Page;
module.link("../../../components/Page", {
  default(v) {
    Page = v;
  }

}, 3);
let useCurrentRoute, useRoute;
module.link("../../../contexts/RouterContext", {
  useCurrentRoute(v) {
    useCurrentRoute = v;
  },

  useRoute(v) {
    useRoute = v;
  }

}, 4);
let useEndpoint;
module.link("../../../contexts/ServerContext", {
  useEndpoint(v) {
    useEndpoint = v;
  }

}, 5);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 6);
let useFormatDateAndTime;
module.link("../../../hooks/useFormatDateAndTime", {
  useFormatDateAndTime(v) {
    useFormatDateAndTime = v;
  }

}, 7);
let LogItem;
module.link("./LogItem", {
  default(v) {
    LogItem = v;
  }

}, 8);
let LogsLoading;
module.link("./LogsLoading", {
  default(v) {
    LogsLoading = v;
  }

}, 9);

const useAppWithLogs = _ref => {
  let {
    id,
    current,
    itemsPerPage
  } = _ref;
  const [data, setData] = useSafely(useState({}));
  const getAppData = useEndpoint('GET', "/apps/".concat(id));
  const getAppLogs = useEndpoint('GET', "/apps/".concat(id, "/logs"));
  const fetchData = useCallback(async () => {
    try {
      const [{
        app
      }, {
        logs
      }] = await Promise.all([getAppData(), getAppLogs()]);
      setData(_objectSpread(_objectSpread({}, app), {}, {
        logs
      }));
    } catch (error) {
      setData({
        error
      });
    }
  }, [getAppData, getAppLogs, setData]);
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  const sliceStart = data.logs && current > data.logs.length ? 0 : current;
  const total = data.logs ? data.logs.length : 0;
  const filteredData = data.logs ? _objectSpread(_objectSpread({}, data), {}, {
    logs: data.logs.slice(sliceStart, itemsPerPage + current)
  }) : data;
  return [filteredData, total, fetchData];
};

function AppLogsPage(_ref2) {
  let {
    id
  } = _ref2,
      props = _objectWithoutProperties(_ref2, _excluded);

  const t = useTranslation();
  const formatDateAndTime = useFormatDateAndTime();
  const [itemsPerPage, setItemsPerPage] = useState(25);
  const [current, setCurrent] = useState(0);
  const [app, logEntriesCount, fetchData] = useAppWithLogs({
    id,
    itemsPerPage,
    current
  });
  const [currentRouteName] = useCurrentRoute();
  const appLogsRoute = useRoute(currentRouteName);

  const handleResetButtonClick = () => {
    fetchData();
  };

  const handleBackButtonClick = () => {
    appLogsRoute.push();
  };

  const loading = !Object.values(app).length;
  const showData = !loading && !app.error;
  const showingResultsLabel = useCallback(_ref3 => {
    let {
      count,
      current,
      itemsPerPage
    } = _ref3;
    return t('Showing_results_of', current + 1, Math.min(current + itemsPerPage, count), count);
  }, [t]);
  const itemsPerPageLabel = useCallback(() => t('Items_per_page:'), [t]);
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
  }, app.logs && app.logs.map(log => /*#__PURE__*/React.createElement(LogItem, {
    key: log._createdAt,
    title: "".concat(formatDateAndTime(log._createdAt), ": \"").concat(log.method, "\" (").concat(log.totalTime, "ms)"),
    instanceId: log.instanceId,
    entries: log.entries
  }))))), /*#__PURE__*/React.createElement(Pagination, {
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
//# sourceMappingURL=/dynamic/client/views/admin/apps/30bf0c72f45f6ec04b64b6eb3f42794a1a648bb0.map
