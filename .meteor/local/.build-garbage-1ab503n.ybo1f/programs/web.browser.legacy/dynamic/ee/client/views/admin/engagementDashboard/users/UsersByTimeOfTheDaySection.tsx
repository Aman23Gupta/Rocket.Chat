function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/engagementDashboard/users/UsersByTimeOfTheDaySection.tsx                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _createForOfIteratorHelperLoose;

module.link("@babel/runtime/helpers/createForOfIteratorHelperLoose", {
  default: function (v) {
    _createForOfIteratorHelperLoose = v;
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
var ResponsiveHeatMap;
module.link("@nivo/heatmap", {
  ResponsiveHeatMap: function (v) {
    ResponsiveHeatMap = v;
  }
}, 0);
var Box, Flex, Skeleton;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Flex: function (v) {
    Flex = v;
  },
  Skeleton: function (v) {
    Skeleton = v;
  }
}, 1);
var colors;
module.link("@rocket.chat/fuselage-tokens/colors.json", {
  "default": function (v) {
    colors = v;
  }
}, 2);
var moment;
module.link("moment", {
  "default": function (v) {
    moment = v;
  }
}, 3);
var React, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 4);
var useTranslation;
module.link("../../../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 5);
var Section;
module.link("../Section", {
  "default": function (v) {
    Section = v;
  }
}, 6);
var DownloadDataButton;
module.link("../data/DownloadDataButton", {
  "default": function (v) {
    DownloadDataButton = v;
  }
}, 7);
var PeriodSelector;
module.link("../data/PeriodSelector", {
  "default": function (v) {
    PeriodSelector = v;
  }
}, 8);
var usePeriodSelectorState;
module.link("../data/usePeriodSelectorState", {
  usePeriodSelectorState: function (v) {
    usePeriodSelectorState = v;
  }
}, 9);
var useUsersByTimeOfTheDay;
module.link("./useUsersByTimeOfTheDay", {
  useUsersByTimeOfTheDay: function (v) {
    useUsersByTimeOfTheDay = v;
  }
}, 10);

var UsersByTimeOfTheDaySection = function (_ref) {
  var timezone = _ref.timezone;

  var _usePeriodSelectorSta = usePeriodSelectorState('last 7 days', 'last 30 days', 'last 90 days'),
      _usePeriodSelectorSta2 = _slicedToArray(_usePeriodSelectorSta, 2),
      period = _usePeriodSelectorSta2[0],
      periodSelectorProps = _usePeriodSelectorSta2[1];

  var utc = timezone === 'utc';

  var _useUsersByTimeOfTheD = useUsersByTimeOfTheDay({
    period: period,
    utc: utc
  }),
      data = _useUsersByTimeOfTheD.data;

  var t = useTranslation();

  var _useMemo = useMemo(function () {
    if (!data) {
      return [];
    }

    var dates = Array.from({
      length: utc ? moment(data.end).diff(data.start, 'days') + 1 : moment(data.end).diff(data.start, 'days') - 1
    }, function (_, i) {
      return utc ? moment.utc(data.start).endOf('day').add(i, 'days') : moment(data.start).endOf('day').add(i + 1, 'days');
    });
    var values = Array.from({
      length: 24
    }, function (_, hour) {
      return _objectSpread({
        hour: String(hour)
      }, dates.map(function (date) {
        var _ref2;

        return _ref2 = {}, _ref2[date.toISOString()] = 0, _ref2;
      }).reduce(function (obj, elem) {
        return _objectSpread(_objectSpread({}, obj), elem);
      }, {}));
    });
    var timezoneOffset = moment().utcOffset() / 60;

    for (var _iterator = _createForOfIteratorHelperLoose(data.week), _step; !(_step = _iterator()).done;) {
      var _ref3 = _step.value;
      var users = _ref3.users;
      var hour = _ref3.hour;
      var day = _ref3.day;
      var month = _ref3.month;
      var year = _ref3.year;
      var date = utc ? moment.utc([year, month - 1, day, hour]) : moment([year, month - 1, day, hour]).add(timezoneOffset, 'hours');

      if (utc || !date.isSame(data.end) && !date.clone().startOf('day').isSame(data.start)) {
        values[date.hour()][date.endOf('day').toISOString()] += users;
      }
    }

    return [dates.map(function (date) {
      return date.toISOString();
    }), values];
  }, [data, utc]),
      _useMemo2 = _slicedToArray(_useMemo, 2),
      dates = _useMemo2[0],
      values = _useMemo2[1];

  return /*#__PURE__*/React.createElement(Section, {
    title: t('Users_by_time_of_day'),
    filter: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PeriodSelector, periodSelectorProps), /*#__PURE__*/React.createElement(DownloadDataButton, {
      attachmentName: "UsersByTimeOfTheDaySection_start_" + (data === null || data === void 0 ? void 0 : data.start) + "_end_" + (data === null || data === void 0 ? void 0 : data.end),
      headers: ['Date', 'Users'],
      dataAvailable: !!data,
      dataExtractor: function () {
        var _data$week, _data$week$map, _data$week$map$sort;

        return data === null || data === void 0 ? void 0 : (_data$week = data.week) === null || _data$week === void 0 ? void 0 : (_data$week$map = _data$week.map(function (_ref4) {
          var users = _ref4.users,
              hour = _ref4.hour,
              day = _ref4.day,
              month = _ref4.month,
              year = _ref4.year;
          return {
            date: moment([year, month - 1, day, hour, 0, 0, 0]),
            users: users
          };
        })) === null || _data$week$map === void 0 ? void 0 : (_data$week$map$sort = _data$week$map.sort(function (a, b) {
          return a.date.diff(b.date);
        })) === null || _data$week$map$sort === void 0 ? void 0 : _data$week$map$sort.map(function (_ref5) {
          var date = _ref5.date,
              users = _ref5.users;
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
      format: function (isoString) {
        return (dates === null || dates === void 0 ? void 0 : dates.length) === 7 ? moment(isoString).format('dddd') : '';
      }
    },
    axisLeft: {
      // TODO: Get it from theme
      tickSize: 0,
      tickPadding: 4,
      tickRotation: 0,
      format: function (hour) {
        return moment().set({
          hour: parseInt(hour, 10),
          minute: 0,
          second: 0
        }).format('LT');
      }
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
    tooltip: function (_ref6) {
      var value = _ref6.value;
      return /*#__PURE__*/React.createElement(Box, {
        fontScale: "p1m",
        color: "alternative"
      }, t('Value_users', {
        value: value
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
//# sourceMappingURL=/dynamic/ee/client/views/admin/engagementDashboard/users/4a172bee0c754835883492a0b009b76c53b70597.map
