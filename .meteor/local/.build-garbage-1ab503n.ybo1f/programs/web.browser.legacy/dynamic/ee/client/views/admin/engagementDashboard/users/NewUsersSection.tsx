function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/engagementDashboard/users/NewUsersSection.tsx                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _createForOfIteratorHelperLoose;

module.link("@babel/runtime/helpers/createForOfIteratorHelperLoose", {
  default: function (v) {
    _createForOfIteratorHelperLoose = v;
  }
}, 0);

var _toConsumableArray;

module.link("@babel/runtime/helpers/toConsumableArray", {
  default: function (v) {
    _toConsumableArray = v;
  }
}, 1);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 2);
var ResponsiveBar;
module.link("@nivo/bar", {
  ResponsiveBar: function (v) {
    ResponsiveBar = v;
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
var useResizeObserver;
module.link("@rocket.chat/fuselage-hooks", {
  useResizeObserver: function (v) {
    useResizeObserver = v;
  }
}, 2);
var colors;
module.link("@rocket.chat/fuselage-tokens/colors.json", {
  "default": function (v) {
    colors = v;
  }
}, 3);
var moment;
module.link("moment", {
  "default": function (v) {
    moment = v;
  }
}, 4);
var React, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 5);
var CounterSet;
module.link("../../../../../../client/components/data/CounterSet", {
  "default": function (v) {
    CounterSet = v;
  }
}, 6);
var useTranslation;
module.link("../../../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 7);
var useFormatDate;
module.link("../../../../../../client/hooks/useFormatDate", {
  useFormatDate: function (v) {
    useFormatDate = v;
  }
}, 8);
var Section;
module.link("../Section", {
  "default": function (v) {
    Section = v;
  }
}, 9);
var DownloadDataButton;
module.link("../data/DownloadDataButton", {
  "default": function (v) {
    DownloadDataButton = v;
  }
}, 10);
var PeriodSelector;
module.link("../data/PeriodSelector", {
  "default": function (v) {
    PeriodSelector = v;
  }
}, 11);
var usePeriodLabel;
module.link("../data/usePeriodLabel", {
  usePeriodLabel: function (v) {
    usePeriodLabel = v;
  }
}, 12);
var usePeriodSelectorState;
module.link("../data/usePeriodSelectorState", {
  usePeriodSelectorState: function (v) {
    usePeriodSelectorState = v;
  }
}, 13);
var useNewUsers;
module.link("./useNewUsers", {
  useNewUsers: function (v) {
    useNewUsers = v;
  }
}, 14);
var TICK_WIDTH = 45;

var NewUsersSection = function (_ref) {
  var timezone = _ref.timezone;

  var _usePeriodSelectorSta = usePeriodSelectorState('last 7 days', 'last 30 days', 'last 90 days'),
      _usePeriodSelectorSta2 = _slicedToArray(_usePeriodSelectorSta, 2),
      period = _usePeriodSelectorSta2[0],
      periodSelectorProps = _usePeriodSelectorSta2[1];

  var periodLabel = usePeriodLabel(period);
  var utc = timezone === 'utc';

  var _useNewUsers = useNewUsers({
    period: period,
    utc: utc
  }),
      data = _useNewUsers.data;

  var t = useTranslation();
  var formatDate = useFormatDate();

  var _useResizeObserver = useResizeObserver(),
      sizeRef = _useResizeObserver.ref,
      _useResizeObserver$co = _useResizeObserver.contentBoxSize;

  _useResizeObserver$co = _useResizeObserver$co === void 0 ? {} : _useResizeObserver$co;
  var _useResizeObserver$co2 = _useResizeObserver$co.inlineSize,
      inlineSize = _useResizeObserver$co2 === void 0 ? 600 : _useResizeObserver$co2;
  var maxTicks = Math.ceil(inlineSize / TICK_WIDTH);
  var tickValues = useMemo(function () {
    if (!data) {
      return undefined;
    }

    var arrayLength = moment(data.end).diff(data.start, 'days') + 1;

    if (arrayLength <= maxTicks || !maxTicks) {
      return undefined;
    }

    var values = Array.from({
      length: arrayLength
    }, function (_, i) {
      return moment(data.start).add(i, 'days').format('YYYY-MM-DD');
    });
    var relation = Math.ceil(values.length / maxTicks);
    return values.reduce(function (acc, cur, i) {
      if ((i + 1) % relation === 0) {
        acc = [].concat(_toConsumableArray(acc), [cur]);
      }

      return acc;
    }, []);
  }, [data, maxTicks]);

  var _useMemo = useMemo(function () {
    if (!data) {
      return [];
    }

    var values = Array.from({
      length: moment(data.end).diff(data.start, 'days') + 1
    }, function (_, i) {
      return {
        date: moment(data.start).add(i, 'days').format('YYYY-MM-DD'),
        newUsers: 0
      };
    });

    for (var _iterator = _createForOfIteratorHelperLoose(data.days), _step; !(_step = _iterator()).done;) {
      var _ref2 = _step.value;
      var day = _ref2.day;
      var users = _ref2.users;
      var i = utc ? moment(day).utc().diff(data.start, 'days') : moment(day).diff(data.start, 'days');

      if (i >= 0) {
        values[i].newUsers += users;
      }
    }

    return [data.period.count, data.period.variation, data.yesterday.count, data.yesterday.variation, values];
  }, [data, utc]),
      _useMemo2 = _slicedToArray(_useMemo, 5),
      countFromPeriod = _useMemo2[0],
      variatonFromPeriod = _useMemo2[1],
      countFromYesterday = _useMemo2[2],
      variationFromYesterday = _useMemo2[3],
      values = _useMemo2[4];

  return /*#__PURE__*/React.createElement(Section, {
    title: t('New_users'),
    filter: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PeriodSelector, periodSelectorProps), /*#__PURE__*/React.createElement(DownloadDataButton, {
      attachmentName: "NewUsersSection_start_" + (data === null || data === void 0 ? void 0 : data.start) + "_end_" + (data === null || data === void 0 ? void 0 : data.end),
      headers: ['Date', 'New Users'],
      dataAvailable: !!data,
      dataExtractor: function () {
        return values === null || values === void 0 ? void 0 : values.map(function (_ref3) {
          var date = _ref3.date,
              newUsers = _ref3.newUsers;
          return [date, newUsers];
        });
      }
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
      tickValues: tickValues,
      format: function (date) {
        return moment(date).format((values === null || values === void 0 ? void 0 : values.length) === 7 ? 'dddd' : 'DD/MM');
      }
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
    tooltip: function (_ref4) {
      var value = _ref4.value,
          indexValue = _ref4.indexValue;
      return /*#__PURE__*/React.createElement(Box, {
        fontScale: "p1m",
        color: "alternative"
      }, t('Value_users', {
        value: value
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
//# sourceMappingURL=/dynamic/ee/client/views/admin/engagementDashboard/users/ae5f4e51a8c78d6d67265c003eb5a0f03f5db7e9.map
