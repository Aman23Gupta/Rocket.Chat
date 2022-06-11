function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/realTimeMonitoring/RealTimeMonitoringPage.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);
var Box, Select, Margins;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Select: function (v) {
    Select = v;
  },
  Margins: function (v) {
    Margins = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React, useRef, useState, useMemo, useEffect;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useRef: function (v) {
    useRef = v;
  },
  useState: function (v) {
    useState = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useEffect: function (v) {
    useEffect = v;
  }
}, 2);
var AutoCompleteDepartment;
module.link("../../../components/AutoCompleteDepartment", {
  "default": function (v) {
    AutoCompleteDepartment = v;
  }
}, 3);
var Page;
module.link("../../../components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 4);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 5);
var getDateRange;
module.link("../../../lib/utils/getDateRange", {
  getDateRange: function (v) {
    getDateRange = v;
  }
}, 6);
var Label;
module.link("../components/Label", {
  "default": function (v) {
    Label = v;
  }
}, 7);
var AgentStatusChart;
module.link("./charts/AgentStatusChart", {
  "default": function (v) {
    AgentStatusChart = v;
  }
}, 8);
var ChatDurationChart;
module.link("./charts/ChatDurationChart", {
  "default": function (v) {
    ChatDurationChart = v;
  }
}, 9);
var ChatsChart;
module.link("./charts/ChatsChart", {
  "default": function (v) {
    ChatsChart = v;
  }
}, 10);
var ChatsPerAgentChart;
module.link("./charts/ChatsPerAgentChart", {
  "default": function (v) {
    ChatsPerAgentChart = v;
  }
}, 11);
var ChatsPerDepartmentChart;
module.link("./charts/ChatsPerDepartmentChart", {
  "default": function (v) {
    ChatsPerDepartmentChart = v;
  }
}, 12);
var ResponseTimesChart;
module.link("./charts/ResponseTimesChart", {
  "default": function (v) {
    ResponseTimesChart = v;
  }
}, 13);
var AgentsOverview;
module.link("./overviews/AgentsOverview", {
  "default": function (v) {
    AgentsOverview = v;
  }
}, 14);
var ChatsOverview;
module.link("./overviews/ChatsOverview", {
  "default": function (v) {
    ChatsOverview = v;
  }
}, 15);
var ConversationOverview;
module.link("./overviews/ConversationOverview", {
  "default": function (v) {
    ConversationOverview = v;
  }
}, 16);
var ProductivityOverview;
module.link("./overviews/ProductivityOverview", {
  "default": function (v) {
    ProductivityOverview = v;
  }
}, 17);
var dateRange = getDateRange();

var RealTimeMonitoringPage = function () {
  var t = useTranslation();

  var _useState = useState(5),
      _useState2 = _slicedToArray(_useState, 2),
      reloadFrequency = _useState2[0],
      setReloadFrequency = _useState2[1];

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      department = _useState4[0],
      setDepartment = _useState4[1];

  var reloadRef = useRef({});
  var departmentParams = useMemo(function () {
    return _objectSpread({}, (department === null || department === void 0 ? void 0 : department.value) && {
      departmentId: department === null || department === void 0 ? void 0 : department.value
    });
  }, [department]);
  var allParams = useMemo(function () {
    return _objectSpread(_objectSpread({}, departmentParams), dateRange);
  }, [departmentParams]);
  var reloadCharts = useMutableCallback(function () {
    Object.values(reloadRef.current).forEach(function (reload) {
      reload();
    });
  });
  useEffect(function () {
    var interval = setInterval(reloadCharts, reloadFrequency * 1000);
    return function () {
      clearInterval(interval);
    };
  }, [reloadCharts, reloadFrequency]);
  var reloadOptions = useMemo(function () {
    return [[5, /*#__PURE__*/React.createElement(React.Fragment, null, "5 ", t('seconds'))], [10, /*#__PURE__*/React.createElement(React.Fragment, null, "10 ", t('seconds'))], [30, /*#__PURE__*/React.createElement(React.Fragment, null, "30 ", t('seconds'))], [60, /*#__PURE__*/React.createElement(React.Fragment, null, "1 ", t('minute'))]];
  }, [t]);
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Real_Time_Monitoring')
  }), /*#__PURE__*/React.createElement(Page.ScrollableContentWithShadow, null, /*#__PURE__*/React.createElement(Margins, {
    block: "x4"
  }, /*#__PURE__*/React.createElement(Box, {
    flexDirection: "row",
    display: "flex",
    justifyContent: "space-between",
    alignSelf: "center",
    w: "full"
  }, /*#__PURE__*/React.createElement(Box, {
    maxWidth: "50%",
    display: "flex",
    mi: "x4",
    flexGrow: 1,
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Label, {
    mb: "x4"
  }, t('Departments')), /*#__PURE__*/React.createElement(AutoCompleteDepartment, {
    value: department,
    onChange: setDepartment,
    placeholder: t('All'),
    label: t('All'),
    onlyMyDepartments: true
  })), /*#__PURE__*/React.createElement(Box, {
    maxWidth: "50%",
    display: "flex",
    mi: "x4",
    flexGrow: 1,
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Label, {
    mb: "x4"
  }, t('Update_every')), /*#__PURE__*/React.createElement(Select, {
    options: reloadOptions,
    onChange: useMutableCallback(function (val) {
      return setReloadFrequency(val);
    }),
    value: reloadFrequency
  }))), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    w: "full",
    alignItems: "stretch",
    flexShrink: 1
  }, /*#__PURE__*/React.createElement(ConversationOverview, {
    flexGrow: 1,
    flexShrink: 1,
    width: "50%",
    reloadRef: reloadRef,
    params: allParams
  })), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    w: "full",
    alignItems: "stretch",
    flexShrink: 1
  }, /*#__PURE__*/React.createElement(ChatsChart, {
    flexGrow: 1,
    flexShrink: 1,
    width: "50%",
    mie: "x2",
    reloadRef: reloadRef,
    params: allParams
  }), /*#__PURE__*/React.createElement(ChatsPerAgentChart, {
    flexGrow: 1,
    flexShrink: 1,
    width: "50%",
    mis: "x2",
    reloadRef: reloadRef,
    params: allParams
  })), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    w: "full",
    alignItems: "stretch",
    flexShrink: 1
  }, /*#__PURE__*/React.createElement(ChatsOverview, {
    flexGrow: 1,
    flexShrink: 1,
    width: "50%",
    reloadRef: reloadRef,
    params: allParams
  })), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    w: "full",
    alignItems: "stretch",
    flexShrink: 1
  }, /*#__PURE__*/React.createElement(AgentStatusChart, {
    flexGrow: 1,
    flexShrink: 1,
    width: "50%",
    mie: "x2",
    reloadRef: reloadRef,
    params: allParams
  }), /*#__PURE__*/React.createElement(ChatsPerDepartmentChart, {
    flexGrow: 1,
    flexShrink: 1,
    width: "50%",
    mis: "x2",
    reloadRef: reloadRef,
    params: allParams
  })), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    w: "full",
    alignItems: "stretch",
    flexShrink: 1
  }, /*#__PURE__*/React.createElement(AgentsOverview, {
    flexGrow: 1,
    flexShrink: 1,
    reloadRef: reloadRef,
    params: allParams
  })), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    w: "full",
    flexShrink: 1
  }, /*#__PURE__*/React.createElement(ChatDurationChart, {
    flexGrow: 1,
    flexShrink: 1,
    w: "100%",
    reloadRef: reloadRef,
    params: allParams
  })), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    w: "full",
    alignItems: "stretch",
    flexShrink: 1
  }, /*#__PURE__*/React.createElement(ProductivityOverview, {
    flexGrow: 1,
    flexShrink: 1,
    reloadRef: reloadRef,
    params: allParams
  })), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    w: "full",
    flexShrink: 1
  }, /*#__PURE__*/React.createElement(ResponseTimesChart, {
    flexGrow: 1,
    flexShrink: 1,
    w: "100%",
    reloadRef: reloadRef,
    params: allParams
  })))));
};

module.exportDefault(RealTimeMonitoringPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/realTimeMonitoring/1b0526dde22e185395102dec13fefdafaad42553.map
