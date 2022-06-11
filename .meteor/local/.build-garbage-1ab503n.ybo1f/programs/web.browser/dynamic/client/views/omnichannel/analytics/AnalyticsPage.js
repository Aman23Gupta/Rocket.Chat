function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/analytics/AnalyticsPage.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Select, Margins, Field, Label;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Select(v) {
    Select = v;
  },

  Margins(v) {
    Margins = v;
  },

  Field(v) {
    Field = v;
  },

  Label(v) {
    Label = v;
  }

}, 0);
let React, useMemo, useState, useEffect;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useState(v) {
    useState = v;
  },

  useEffect(v) {
    useEffect = v;
  }

}, 1);
let AutoCompleteDepartment;
module.link("../../../components/AutoCompleteDepartment", {
  default(v) {
    AutoCompleteDepartment = v;
  }

}, 2);
let Page;
module.link("../../../components/Page", {
  default(v) {
    Page = v;
  }

}, 3);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 4);
let AgentOverview;
module.link("./AgentOverview", {
  default(v) {
    AgentOverview = v;
  }

}, 5);
let DateRangePicker;
module.link("./DateRangePicker", {
  default(v) {
    DateRangePicker = v;
  }

}, 6);
let InterchangeableChart;
module.link("./InterchangeableChart", {
  default(v) {
    InterchangeableChart = v;
  }

}, 7);
let Overview;
module.link("./Overview", {
  default(v) {
    Overview = v;
  }

}, 8);

const useOptions = type => {
  const t = useTranslation();
  return useMemo(() => {
    if (type === 'Conversations') {
      return [['Total_conversations', t('Total_conversations')], ['Avg_chat_duration', t('Avg_chat_duration')], ['Total_messages', t('Total_messages')]];
    }

    return [['Avg_first_response_time', t('Avg_first_response_time')], ['Best_first_response_time', t('Best_first_response_time')], ['Avg_response_time', t('Avg_response_time')], ['Avg_reaction_time', t('Avg_reaction_time')]];
  }, [t, type]);
};

const AnalyticsPage = () => {
  const t = useTranslation();
  const [type, setType] = useState('Conversations');
  const [department, setDepartment] = useState(null);
  const [dateRange, setDateRange] = useState({
    start: null,
    end: null
  });
  const [chartName, setChartName] = useState();
  const typeOptions = useMemo(() => [['Conversations', t('Conversations')], ['Productivity', t('Productivity')]], [t]);
  const graphOptions = useOptions(type);
  useEffect(() => {
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
//# sourceMappingURL=/dynamic/client/views/omnichannel/analytics/c6a788a4a4669d1c9ea3904b9d756ebe03b5161f.map
