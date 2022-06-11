function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/engagementDashboard/messages/MessagesSentSection.tsx                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let ResponsiveBar;
module.link("@nivo/bar", {
  ResponsiveBar(v) {
    ResponsiveBar = v;
  }

}, 0);
let Box, Flex, Skeleton;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Flex(v) {
    Flex = v;
  },

  Skeleton(v) {
    Skeleton = v;
  }

}, 1);
let colors;
module.link("@rocket.chat/fuselage-tokens/colors.json", {
  default(v) {
    colors = v;
  }

}, 2);
let moment;
module.link("moment", {
  default(v) {
    moment = v;
  }

}, 3);
let React, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 4);
let CounterSet;
module.link("../../../../../../client/components/data/CounterSet", {
  default(v) {
    CounterSet = v;
  }

}, 5);
let useTranslation;
module.link("../../../../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 6);
let Section;
module.link("../Section", {
  default(v) {
    Section = v;
  }

}, 7);
let DownloadDataButton;
module.link("../data/DownloadDataButton", {
  default(v) {
    DownloadDataButton = v;
  }

}, 8);
let PeriodSelector;
module.link("../data/PeriodSelector", {
  default(v) {
    PeriodSelector = v;
  }

}, 9);
let usePeriodLabel;
module.link("../data/usePeriodLabel", {
  usePeriodLabel(v) {
    usePeriodLabel = v;
  }

}, 10);
let usePeriodSelectorState;
module.link("../data/usePeriodSelectorState", {
  usePeriodSelectorState(v) {
    usePeriodSelectorState = v;
  }

}, 11);
let useMessagesSent;
module.link("./useMessagesSent", {
  useMessagesSent(v) {
    useMessagesSent = v;
  }

}, 12);

const MessagesSentSection = () => {
  const [period, periodSelectorProps] = usePeriodSelectorState('last 7 days', 'last 30 days', 'last 90 days');
  const periodLabel = usePeriodLabel(period);
  const t = useTranslation();
  const {
    data
  } = useMessagesSent({
    period
  });
  const [countFromPeriod, variatonFromPeriod, countFromYesterday, variationFromYesterday, values] = useMemo(() => {
    var _data$period, _data$period2, _data$yesterday, _data$yesterday2;

    if (!data) {
      return [];
    }

    const values = Array.from({
      length: moment(data.end).diff(data.start, 'days') + 1
    }, (_, i) => ({
      date: moment(data.start).add(i, 'days').toISOString(),
      newMessages: 0
    }));

    for (const {
      day,
      messages
    } of (_data$days = data.days) !== null && _data$days !== void 0 ? _data$days : []) {
      var _data$days;

      const i = moment(day).diff(data.start, 'days');

      if (i >= 0) {
        values[i].newMessages += messages;
      }
    }

    return [(_data$period = data.period) === null || _data$period === void 0 ? void 0 : _data$period.count, (_data$period2 = data.period) === null || _data$period2 === void 0 ? void 0 : _data$period2.variation, (_data$yesterday = data.yesterday) === null || _data$yesterday === void 0 ? void 0 : _data$yesterday.count, (_data$yesterday2 = data.yesterday) === null || _data$yesterday2 === void 0 ? void 0 : _data$yesterday2.variation, values];
  }, [data]);
  return /*#__PURE__*/React.createElement(Section, {
    title: t('Messages_sent'),
    filter: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PeriodSelector, periodSelectorProps), /*#__PURE__*/React.createElement(DownloadDataButton, {
      attachmentName: "MessagesSentSection_start_".concat(data === null || data === void 0 ? void 0 : data.start, "_end_").concat(data === null || data === void 0 ? void 0 : data.end),
      headers: ['Date', 'Messages'],
      dataAvailable: !!data,
      dataExtractor: () => values === null || values === void 0 ? void 0 : values.map(_ref => {
        let {
          date,
          newMessages
        } = _ref;
        return [date, newMessages];
      })
    }))
  }, /*#__PURE__*/React.createElement(CounterSet, {
    counters: [{
      count: countFromPeriod !== null && countFromPeriod !== void 0 ? countFromPeriod : /*#__PURE__*/React.createElement(Skeleton, {
        variant: "rect",
        width: "3ex",
        height: "1em"
      }),
      variation: variatonFromPeriod !== null && variatonFromPeriod !== void 0 ? variatonFromPeriod : 0,
      description: periodLabel
    }, {
      count: countFromYesterday !== null && countFromYesterday !== void 0 ? countFromYesterday : /*#__PURE__*/React.createElement(Skeleton, {
        variant: "rect",
        width: "3ex",
        height: "1em"
      }),
      variation: variationFromYesterday !== null && variationFromYesterday !== void 0 ? variationFromYesterday : 0,
      description: t('Yesterday')
    }]
  }), /*#__PURE__*/React.createElement(Flex.Container, null, values ? /*#__PURE__*/React.createElement(Box, {
    style: {
      height: 240
    }
  }, /*#__PURE__*/React.createElement(Flex.Item, {
    align: "stretch",
    grow: 1,
    shrink: 0
  }, /*#__PURE__*/React.createElement(Box, {
    style: {
      position: 'relative'
    }
  }, /*#__PURE__*/React.createElement(Box, {
    style: {
      position: 'absolute',
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement(ResponsiveBar, {
    data: values,
    indexBy: "date",
    keys: ['newMessages'],
    groupMode: "grouped",
    padding: 0.25,
    margin: {
      // TODO: Get it from theme
      bottom: 20
    },
    colors: [// TODO: Get it from theme
    colors.b500],
    enableLabel: false,
    enableGridY: false,
    axisTop: null,
    axisRight: null,
    axisBottom: values.length === 7 && {
      tickSize: 0,
      // TODO: Get it from theme
      tickPadding: 4,
      tickRotation: 0,
      format: date => moment(date).format('dddd')
    } || null,
    axisLeft: null,
    animate: true // @ts-ignore
    ,
    motionStiffness: 90,
    motionDamping: 15,
    theme: {
      // TODO: Get it from theme
      axis: {
        ticks: {
          text: {
            fill: colors.n600,
            fontFamily: 'Inter, -apple-system, system-ui, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Meiryo UI", Arial, sans-serif',
            fontSize: '10px',
            fontStyle: 'normal',
            fontWeight: 600,
            letterSpacing: '0.2px',
            lineHeight: '12px'
          }
        }
      },
      tooltip: {
        container: {
          backgroundColor: colors.n900,
          boxShadow: '0px 0px 12px rgba(47, 52, 61, 0.12), 0px 0px 2px rgba(47, 52, 61, 0.08)',
          borderRadius: 2
        }
      }
    },
    tooltip: _ref2 => {
      let {
        value
      } = _ref2;
      return /*#__PURE__*/React.createElement(Box, {
        fontScale: "p1m",
        color: "alternative"
      }, t('Value_messages', {
        value
      }));
    }
  }))))) : /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rect",
    height: 240
  })));
};

module.exportDefault(MessagesSentSection);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/views/admin/engagementDashboard/messages/17b1ae659ea0058341834f656903230b1912fd2f.map
