function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/analytics/AnalyticsPage.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
var Box, Select, Margins, Field, Label;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Select: function (v) {
    Select = v;
  },
  Margins: function (v) {
    Margins = v;
  },
  Field: function (v) {
    Field = v;
  },
  Label: function (v) {
    Label = v;
  }
}, 0);
var React, useMemo, useState, useEffect;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useState: function (v) {
    useState = v;
  },
  useEffect: function (v) {
    useEffect = v;
  }
}, 1);
var AutoCompleteDepartment;
module.link("../../../components/AutoCompleteDepartment", {
  "default": function (v) {
    AutoCompleteDepartment = v;
  }
}, 2);
var Page;
module.link("../../../components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 3);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 4);
var AgentOverview;
module.link("./AgentOverview", {
  "default": function (v) {
    AgentOverview = v;
  }
}, 5);
var DateRangePicker;
module.link("./DateRangePicker", {
  "default": function (v) {
    DateRangePicker = v;
  }
}, 6);
var InterchangeableChart;
module.link("./InterchangeableChart", {
  "default": function (v) {
    InterchangeableChart = v;
  }
}, 7);
var Overview;
module.link("./Overview", {
  "default": function (v) {
    Overview = v;
  }
}, 8);

var useOptions = function (type) {
  var t = useTranslation();
  return useMemo(function () {
    if (type === 'Conversations') {
      return [['Total_conversations', t('Total_conversations')], ['Avg_chat_duration', t('Avg_chat_duration')], ['Total_messages', t('Total_messages')]];
    }

    return [['Avg_first_response_time', t('Avg_first_response_time')], ['Best_first_response_time', t('Best_first_response_time')], ['Avg_response_time', t('Avg_response_time')], ['Avg_reaction_time', t('Avg_reaction_time')]];
  }, [t, type]);
};

var AnalyticsPage = function () {
  var t = useTranslation();

  var _useState = useState('Conversations'),
      _useState2 = _slicedToArray(_useState, 2),
      type = _useState2[0],
      setType = _useState2[1];

  var _useState3 = useState(null),
      _useState4 = _slicedToArray(_useState3, 2),
      department = _useState4[0],
      setDepartment = _useState4[1];

  var _useState5 = useState({
    start: null,
    end: null
  }),
      _useState6 = _slicedToArray(_useState5, 2),
      dateRange = _useState6[0],
      setDateRange = _useState6[1];

  var _useState7 = useState(),
      _useState8 = _slicedToArray(_useState7, 2),
      chartName = _useState8[0],
      setChartName = _useState8[1];

  var typeOptions = useMemo(function () {
    return [['Conversations', t('Conversations')], ['Productivity', t('Productivity')]];
  }, [t]);
  var graphOptions = useOptions(type);
  useEffect(function () {
    setChartName(graphOptions[0][0]);
  }, [graphOptions]);
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Analytics')
  }), /*#__PURE__*/React.createElement(Page.ScrollableContentWithShadow, {
    display: "flex",
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Margins, {
    block: "x4"
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    mi: "neg-x4",
    flexDirection: "row",
    flexWrap: "wrap"
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    mi: "x4",
    flexGrow: 1,
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Label, {
    mb: "x4"
  }, t('Type')), /*#__PURE__*/React.createElement(Select, {
    flexShrink: 0,
    options: typeOptions,
    value: type,
    onChange: setType
  })), /*#__PURE__*/React.createElement(Box, {
    maxWidth: "40%",
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
  })), /*#__PURE__*/React.createElement(DateRangePicker, {
    mi: "x4",
    flexGrow: 1,
    onChange: setDateRange
  })), /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Overview, {
    type: type,
    dateRange: dateRange,
    departmentId: department === null || department === void 0 ? void 0 : department.value
  })), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Margins, {
    inline: "x2"
  }, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Chart')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Select, {
    options: graphOptions,
    value: chartName,
    onChange: setChartName
  }))))), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    flexGrow: 1,
    flexShrink: 1
  }, /*#__PURE__*/React.createElement(InterchangeableChart, {
    flexShrink: 1,
    w: "66%",
    h: "100%",
    chartName: chartName,
    departmentId: department === null || department === void 0 ? void 0 : department.value,
    dateRange: dateRange,
    alignSelf: "stretch"
  }), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    w: "33%",
    flexDirection: "row",
    justifyContent: "stretch",
    p: "x10",
    mis: "x4"
  }, /*#__PURE__*/React.createElement(AgentOverview, {
    type: chartName,
    dateRange: dateRange,
    departmentId: department
  }))))));
};

module.exportDefault(AnalyticsPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/analytics/2f9cb4f01572cd41cf0a99df1c4b7e534ed434cd.map
