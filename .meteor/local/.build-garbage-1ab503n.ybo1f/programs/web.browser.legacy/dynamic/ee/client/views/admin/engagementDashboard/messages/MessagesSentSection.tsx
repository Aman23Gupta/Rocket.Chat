function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/engagementDashboard/messages/MessagesSentSection.tsx                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _createForOfIteratorHelperLoose;

module.link("@babel/runtime/helpers/createForOfIteratorHelperLoose", {
  default: function (v) {
    _createForOfIteratorHelperLoose = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);
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
var CounterSet;
module.link("../../../../../../client/components/data/CounterSet", {
  "default": function (v) {
    CounterSet = v;
  }
}, 5);
var useTranslation;
module.link("../../../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 6);
var Section;
module.link("../Section", {
  "default": function (v) {
    Section = v;
  }
}, 7);
var DownloadDataButton;
module.link("../data/DownloadDataButton", {
  "default": function (v) {
    DownloadDataButton = v;
  }
}, 8);
var PeriodSelector;
module.link("../data/PeriodSelector", {
  "default": function (v) {
    PeriodSelector = v;
  }
}, 9);
var usePeriodLabel;
module.link("../data/usePeriodLabel", {
  usePeriodLabel: function (v) {
    usePeriodLabel = v;
  }
}, 10);
var usePeriodSelectorState;
module.link("../data/usePeriodSelectorState", {
  usePeriodSelectorState: function (v) {
    usePeriodSelectorState = v;
  }
}, 11);
var useMessagesSent;
module.link("./useMessagesSent", {
  useMessagesSent: function (v) {
    useMessagesSent = v;
  }
}, 12);

var MessagesSentSection = function () {
  var _usePeriodSelectorSta = usePeriodSelectorState('last 7 days', 'last 30 days', 'last 90 days'),
      _usePeriodSelectorSta2 = _slicedToArray(_usePeriodSelectorSta, 2),
      period = _usePeriodSelectorSta2[0],
      periodSelectorProps = _usePeriodSelectorSta2[1];

  var periodLabel = usePeriodLabel(period);
  var t = useTranslation();

  var _useMessagesSent = useMessagesSent({
    period: period
  }),
      data = _useMessagesSent.data;

  var _useMemo = useMemo(function () {
    var _data$period, _data$period2, _data$yesterday, _data$yesterday2;

    if (!data) {
      return [];
    }

    var values = Array.from({
      length: moment(data.end).diff(data.start, 'days') + 1
    }, function (_, i) {
      return {
        date: moment(data.start).add(i, 'days').toISOString(),
        newMessages: 0
      };
    });

    for (var _iterator = _createForOfIteratorHelperLoose((_data$days = data.days) !== null && _data$days !== void 0 ? _data$days : []), _step; !(_step = _iterator()).done;) {
      var _data$days;

      var _ref = _step.value;
      var day = _ref.day;
      var messages = _ref.messages;
      var i = moment(day).diff(data.start, 'days');

      if (i >= 0) {
        values[i].newMessages += messages;
      }
    }

    return [(_data$period = data.period) === null || _data$period === void 0 ? void 0 : _data$period.count, (_data$period2 = data.period) === null || _data$period2 === void 0 ? void 0 : _data$period2.variation, (_data$yesterday = data.yesterday) === null || _data$yesterday === void 0 ? void 0 : _data$yesterday.count, (_data$yesterday2 = data.yesterday) === null || _data$yesterday2 === void 0 ? void 0 : _data$yesterday2.variation, values];
  }, [data]),
      _useMemo2 = _slicedToArray(_useMemo, 5),
      countFromPeriod = _useMemo2[0],
      variatonFromPeriod = _useMemo2[1],
      countFromYesterday = _useMemo2[2],
      variationFromYesterday = _useMemo2[3],
      values = _useMemo2[4];

  return /*#__PURE__*/React.createElement(Section, {
    title: t('Messages_sent'),
    filter: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PeriodSelector, periodSelectorProps), /*#__PURE__*/React.createElement(DownloadDataButton, {
      attachmentName: "MessagesSentSection_start_" + (data === null || data === void 0 ? void 0 : data.start) + "_end_" + (data === null || data === void 0 ? void 0 : data.end),
      headers: ['Date', 'Messages'],
      dataAvailable: !!data,
      dataExtractor: function () {
        return values === null || values === void 0 ? void 0 : values.map(function (_ref2) {
          var date = _ref2.date,
              newMessages = _ref2.newMessages;
          return [date, newMessages];
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
      format: function (date) {
        return moment(date).format('dddd');
      }
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
    tooltip: function (_ref3) {
      var value = _ref3.value;
      return /*#__PURE__*/React.createElement(Box, {
        fontScale: "p1m",
        color: "alternative"
      }, t('Value_messages', {
        value: value
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
//# sourceMappingURL=/dynamic/ee/client/views/admin/engagementDashboard/messages/6ae30aa1ca07f958e95af3b7c157385597e9e0bb.map
