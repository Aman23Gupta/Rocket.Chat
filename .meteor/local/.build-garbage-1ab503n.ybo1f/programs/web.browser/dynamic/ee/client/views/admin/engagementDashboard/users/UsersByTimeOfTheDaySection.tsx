function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/engagementDashboard/users/UsersByTimeOfTheDaySection.tsx                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let ResponsiveHeatMap;
module.link("@nivo/heatmap", {
  ResponsiveHeatMap(v) {
    ResponsiveHeatMap = v;
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
let useTranslation;
module.link("../../../../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 5);
let Section;
module.link("../Section", {
  default(v) {
    Section = v;
  }

}, 6);
let DownloadDataButton;
module.link("../data/DownloadDataButton", {
  default(v) {
    DownloadDataButton = v;
  }

}, 7);
let PeriodSelector;
module.link("../data/PeriodSelector", {
  default(v) {
    PeriodSelector = v;
  }

}, 8);
let usePeriodSelectorState;
module.link("../data/usePeriodSelectorState", {
  usePeriodSelectorState(v) {
    usePeriodSelectorState = v;
  }

}, 9);
let useUsersByTimeOfTheDay;
module.link("./useUsersByTimeOfTheDay", {
  useUsersByTimeOfTheDay(v) {
    useUsersByTimeOfTheDay = v;
  }

}, 10);

const UsersByTimeOfTheDaySection = _ref => {
  let {
    timezone
  } = _ref;
  const [period, periodSelectorProps] = usePeriodSelectorState('last 7 days', 'last 30 days', 'last 90 days');
  const utc = timezone === 'utc';
  const {
    data
  } = useUsersByTimeOfTheDay({
    period,
    utc
  });
  const t = useTranslation();
  const [dates, values] = useMemo(() => {
    if (!data) {
      return [];
    }

    const dates = Array.from({
      length: utc ? moment(data.end).diff(data.start, 'days') + 1 : moment(data.end).diff(data.start, 'days') - 1
    }, (_, i) => utc ? moment.utc(data.start).endOf('day').add(i, 'days') : moment(data.start).endOf('day').add(i + 1, 'days'));
    const values = Array.from({
      length: 24
    }, (_, hour) => _objectSpread({
      hour: String(hour)
    }, dates.map(date => ({
      [date.toISOString()]: 0
    })).reduce((obj, elem) => _objectSpread(_objectSpread({}, obj), elem), {})));
    const timezoneOffset = moment().utcOffset() / 60;

    for (const {
      users,
      hour,
      day,
      month,
      year
    } of data.week) {
      const date = utc ? moment.utc([year, month - 1, day, hour]) : moment([year, month - 1, day, hour]).add(timezoneOffset, 'hours');

      if (utc || !date.isSame(data.end) && !date.clone().startOf('day').isSame(data.start)) {
        values[date.hour()][date.endOf('day').toISOString()] += users;
      }
    }

    return [dates.map(date => date.toISOString()), values];
  }, [data, utc]);
  return /*#__PURE__*/React.createElement(Section, {
    title: t('Users_by_time_of_day'),
    filter: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PeriodSelector, periodSelectorProps), /*#__PURE__*/React.createElement(DownloadDataButton, {
      attachmentName: "UsersByTimeOfTheDaySection_start_".concat(data === null || data === void 0 ? void 0 : data.start, "_end_").concat(data === null || data === void 0 ? void 0 : data.end),
      headers: ['Date', 'Users'],
      dataAvailable: !!data,
      dataExtractor: () => {
        var _data$week, _data$week$map, _data$week$map$sort;

        return data === null || data === void 0 ? void 0 : (_data$week = data.week) === null || _data$week === void 0 ? void 0 : (_data$week$map = _data$week.map(_ref2 => {
          let {
            users,
            hour,
            day,
            month,
            year
          } = _ref2;
          return {
            date: moment([year, month - 1, day, hour, 0, 0, 0]),
            users
          };
        })) === null || _data$week$map === void 0 ? void 0 : (_data$week$map$sort = _data$week$map.sort((a, b) => a.date.diff(b.date))) === null || _data$week$map$sort === void 0 ? void 0 : _data$week$map$sort.map(_ref3 => {
          let {
            date,
            users
          } = _ref3;
          return [date.toISOString(), users];
        });
      }
    }))
  }, values ? /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    style: {
      height: 696
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
  }, /*#__PURE__*/React.createElement(ResponsiveHeatMap, {
    data: values,
    indexBy: "hour",
    keys: dates,
    padding: 4,
    margin: {
      // TODO: Get it from theme
      left: 60,
      bottom: 20
    },
    colors: [// TODO: Get it from theme
    colors.b100, colors.b200, colors.b300, colors.b400, colors.b500, colors.b600, colors.b700],
    cellOpacity: 1,
    enableLabels: false,
    axisTop: null,
    axisRight: null,
    axisBottom: {
      // TODO: Get it from theme
      tickSize: 0,
      tickPadding: 4,
      tickRotation: 0,
      format: isoString => (dates === null || dates === void 0 ? void 0 : dates.length) === 7 ? moment(isoString).format('dddd') : ''
    },
    axisLeft: {
      // TODO: Get it from theme
      tickSize: 0,
      tickPadding: 4,
      tickRotation: 0,
      format: hour => moment().set({
        hour: parseInt(hour, 10),
        minute: 0,
        second: 0
      }).format('LT')
    },
    hoverTarget: "cell",
    animate: dates && dates.length <= 7,
    motionStiffness: 90,
    motionDamping: 15,
    theme: {
      // TODO: Get it from theme
      axis: {
        ticks: {
          text: {
            fill: colors.n600,
            fontFamily: 'Inter, -apple-system, system-ui, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Helvetica Neue", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Meiryo UI", Arial, sans-serif',
            fontSize: 10,
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
    tooltip: _ref4 => {
      let {
        value
      } = _ref4;
      return /*#__PURE__*/React.createElement(Box, {
        fontScale: "p1m",
        color: "alternative"
      }, t('Value_users', {
        value
      }));
    }
  }))))) : /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rect",
    height: 696
  }));
};

module.exportDefault(UsersByTimeOfTheDaySection);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/views/admin/engagementDashboard/users/575aa6e357b8ab52b5f43cdfe0f39351b0fda816.map
