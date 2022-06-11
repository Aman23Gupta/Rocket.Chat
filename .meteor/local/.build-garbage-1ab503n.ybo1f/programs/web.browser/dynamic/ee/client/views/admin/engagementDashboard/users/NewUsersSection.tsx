function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/engagementDashboard/users/NewUsersSection.tsx                                                 //
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
let useResizeObserver;
module.link("@rocket.chat/fuselage-hooks", {
  useResizeObserver(v) {
    useResizeObserver = v;
  }

}, 2);
let colors;
module.link("@rocket.chat/fuselage-tokens/colors.json", {
  default(v) {
    colors = v;
  }

}, 3);
let moment;
module.link("moment", {
  default(v) {
    moment = v;
  }

}, 4);
let React, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 5);
let CounterSet;
module.link("../../../../../../client/components/data/CounterSet", {
  default(v) {
    CounterSet = v;
  }

}, 6);
let useTranslation;
module.link("../../../../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 7);
let useFormatDate;
module.link("../../../../../../client/hooks/useFormatDate", {
  useFormatDate(v) {
    useFormatDate = v;
  }

}, 8);
let Section;
module.link("../Section", {
  default(v) {
    Section = v;
  }

}, 9);
let DownloadDataButton;
module.link("../data/DownloadDataButton", {
  default(v) {
    DownloadDataButton = v;
  }

}, 10);
let PeriodSelector;
module.link("../data/PeriodSelector", {
  default(v) {
    PeriodSelector = v;
  }

}, 11);
let usePeriodLabel;
module.link("../data/usePeriodLabel", {
  usePeriodLabel(v) {
    usePeriodLabel = v;
  }

}, 12);
let usePeriodSelectorState;
module.link("../data/usePeriodSelectorState", {
  usePeriodSelectorState(v) {
    usePeriodSelectorState = v;
  }

}, 13);
let useNewUsers;
module.link("./useNewUsers", {
  useNewUsers(v) {
    useNewUsers = v;
  }

}, 14);
const TICK_WIDTH = 45;

const NewUsersSection = _ref => {
  let {
    timezone
  } = _ref;
  const [period, periodSelectorProps] = usePeriodSelectorState('last 7 days', 'last 30 days', 'last 90 days');
  const periodLabel = usePeriodLabel(period);
  const utc = timezone === 'utc';
  const {
    data
  } = useNewUsers({
    period,
    utc
  });
  const t = useTranslation();
  const formatDate = useFormatDate();
  const {
    ref: sizeRef,
    contentBoxSize: {
      inlineSize = 600
    } = {}
  } = useResizeObserver();
  const maxTicks = Math.ceil(inlineSize / TICK_WIDTH);
  const tickValues = useMemo(() => {
    if (!data) {
      return undefined;
    }

    const arrayLength = moment(data.end).diff(data.start, 'days') + 1;

    if (arrayLength <= maxTicks || !maxTicks) {
      return undefined;
    }

    const values = Array.from({
      length: arrayLength
    }, (_, i) => moment(data.start).add(i, 'days').format('YYYY-MM-DD'));
    const relation = Math.ceil(values.length / maxTicks);
    return values.reduce((acc, cur, i) => {
      if ((i + 1) % relation === 0) {
        acc = [...acc, cur];
      }

      return acc;
    }, []);
  }, [data, maxTicks]);
  const [countFromPeriod, variatonFromPeriod, countFromYesterday, variationFromYesterday, values] = useMemo(() => {
    if (!data) {
      return [];
    }

    const values = Array.from({
      length: moment(data.end).diff(data.start, 'days') + 1
    }, (_, i) => ({
      date: moment(data.start).add(i, 'days').format('YYYY-MM-DD'),
      newUsers: 0
    }));

    for (const {
      day,
      users
    } of data.days) {
      const i = utc ? moment(day).utc().diff(data.start, 'days') : moment(day).diff(data.start, 'days');

      if (i >= 0) {
        values[i].newUsers += users;
      }
    }

    return [data.period.count, data.period.variation, data.yesterday.count, data.yesterday.variation, values];
  }, [data, utc]);
  return /*#__PURE__*/React.createElement(Section, {
    title: t('New_users'),
    filter: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PeriodSelector, periodSelectorProps), /*#__PURE__*/React.createElement(DownloadDataButton, {
      attachmentName: "NewUsersSection_start_".concat(data === null || data === void 0 ? void 0 : data.start, "_end_").concat(data === null || data === void 0 ? void 0 : data.end),
      headers: ['Date', 'New Users'],
      dataAvailable: !!data,
      dataExtractor: () => values === null || values === void 0 ? void 0 : values.map(_ref2 => {
        let {
          date,
          newUsers
        } = _ref2;
        return [date, newUsers];
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
    },
    ref: sizeRef
  }, /*#__PURE__*/React.createElement(Box, {
    style: {
      position: 'absolute',
      width: '100%',
      height: '100%'
    }
  }, /*#__PURE__*/React.createElement(ResponsiveBar, {
    data: values,
    indexBy: "date",
    keys: ['newUsers'],
    groupMode: "grouped",
    padding: 0.25,
    margin: {
      // TODO: Get it from theme
      bottom: 20,
      left: 20,
      top: 20
    },
    colors: [// TODO: Get it from theme
    colors.b500],
    enableLabel: false,
    enableGridY: false,
    axisTop: null,
    axisRight: null,
    axisBottom: {
      tickSize: 0,
      // TODO: Get it from theme
      tickPadding: 4,
      tickRotation: 0,
      tickValues,
      format: date => moment(date).format((values === null || values === void 0 ? void 0 : values.length) === 7 ? 'dddd' : 'DD/MM')
    },
    axisLeft: {
      tickSize: 0,
      // TODO: Get it from theme
      tickPadding: 4,
      tickRotation: 0
    },
    animate: true,
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
        // @ts-ignore
        backgroundColor: colors.n900,
        boxShadow: '0px 0px 12px rgba(47, 52, 61, 0.12), 0px 0px 2px rgba(47, 52, 61, 0.08)',
        borderRadius: 2,
        padding: 4
      }
    },
    tooltip: _ref3 => {
      let {
        value,
        indexValue
      } = _ref3;
      return /*#__PURE__*/React.createElement(Box, {
        fontScale: "p1m",
        color: "alternative"
      }, t('Value_users', {
        value
      }), ", ", formatDate(indexValue));
    }
  }))))) : /*#__PURE__*/React.createElement(Box, {
    ref: sizeRef
  }, /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rect",
    height: 240
  }))));
};

module.exportDefault(NewUsersSection);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/views/admin/engagementDashboard/users/6a845acdbdf6da7e643991d195231314903e7a69.map
