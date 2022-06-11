function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/realTimeMonitoring/RealTimeMonitoringPage.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let Box, Select, Margins;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Select(v) {
    Select = v;
  },

  Margins(v) {
    Margins = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React, useRef, useState, useMemo, useEffect;
module.link("react", {
  default(v) {
    React = v;
  },

  useRef(v) {
    useRef = v;
  },

  useState(v) {
    useState = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useEffect(v) {
    useEffect = v;
  }

}, 2);
let AutoCompleteDepartment;
module.link("../../../components/AutoCompleteDepartment", {
  default(v) {
    AutoCompleteDepartment = v;
  }

}, 3);
let Page;
module.link("../../../components/Page", {
  default(v) {
    Page = v;
  }

}, 4);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 5);
let getDateRange;
module.link("../../../lib/utils/getDateRange", {
  getDateRange(v) {
    getDateRange = v;
  }

}, 6);
let Label;
module.link("../components/Label", {
  default(v) {
    Label = v;
  }

}, 7);
let AgentStatusChart;
module.link("./charts/AgentStatusChart", {
  default(v) {
    AgentStatusChart = v;
  }

}, 8);
let ChatDurationChart;
module.link("./charts/ChatDurationChart", {
  default(v) {
    ChatDurationChart = v;
  }

}, 9);
let ChatsChart;
module.link("./charts/ChatsChart", {
  default(v) {
    ChatsChart = v;
  }

}, 10);
let ChatsPerAgentChart;
module.link("./charts/ChatsPerAgentChart", {
  default(v) {
    ChatsPerAgentChart = v;
  }

}, 11);
let ChatsPerDepartmentChart;
module.link("./charts/ChatsPerDepartmentChart", {
  default(v) {
    ChatsPerDepartmentChart = v;
  }

}, 12);
let ResponseTimesChart;
module.link("./charts/ResponseTimesChart", {
  default(v) {
    ResponseTimesChart = v;
  }

}, 13);
let AgentsOverview;
module.link("./overviews/AgentsOverview", {
  default(v) {
    AgentsOverview = v;
  }

}, 14);
let ChatsOverview;
module.link("./overviews/ChatsOverview", {
  default(v) {
    ChatsOverview = v;
  }

}, 15);
let ConversationOverview;
module.link("./overviews/ConversationOverview", {
  default(v) {
    ConversationOverview = v;
  }

}, 16);
let ProductivityOverview;
module.link("./overviews/ProductivityOverview", {
  default(v) {
    ProductivityOverview = v;
  }

}, 17);
const dateRange = getDateRange();

const RealTimeMonitoringPage = () => {
  const t = useTranslation();
  const [reloadFrequency, setReloadFrequency] = useState(5);
  const [department, setDepartment] = useState('');
  const reloadRef = useRef({});
  const departmentParams = useMemo(() => _objectSpread({}, (department === null || department === void 0 ? void 0 : department.value) && {
    departmentId: department === null || department === void 0 ? void 0 : department.value
  }), [department]);
  const allParams = useMemo(() => _objectSpread(_objectSpread({}, departmentParams), dateRange), [departmentParams]);
  const reloadCharts = useMutableCallback(() => {
    Object.values(reloadRef.current).forEach(reload => {
      reload();
    });
  });
  useEffect(() => {
    const interval = setInterval(reloadCharts, reloadFrequency * 1000);
    return () => {
      clearInterval(interval);
    };
  }, [reloadCharts, reloadFrequency]);
  const reloadOptions = useMemo(() => [[5, /*#__PURE__*/React.createElement(React.Fragment, null, "5 ", t('seconds'))], [10, /*#__PURE__*/React.createElement(React.Fragment, null, "10 ", t('seconds'))], [30, /*#__PURE__*/React.createElement(React.Fragment, null, "30 ", t('seconds'))], [60, /*#__PURE__*/React.createElement(React.Fragment, null, "1 ", t('minute'))]], [t]);
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
    onChange: useMutableCallback(val => setReloadFrequency(val)),
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
//# sourceMappingURL=/dynamic/client/views/omnichannel/realTimeMonitoring/580267b4602a362689f3dcace10c65bd33bee7af.map
