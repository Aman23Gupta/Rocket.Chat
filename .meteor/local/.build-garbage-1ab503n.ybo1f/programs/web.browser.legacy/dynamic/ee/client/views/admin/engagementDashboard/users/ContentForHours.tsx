function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/engagementDashboard/users/ContentForHours.tsx                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _createForOfIteratorHelperLoose;

module.link("@babel/runtime/helpers/createForOfIteratorHelperLoose", {
  default: function (v) {
    _createForOfIteratorHelperLoose = v;
  }
}, 0);
var ResponsiveBar;
module.link("@nivo/bar", {
  ResponsiveBar: function (v) {
    ResponsiveBar = v;
  }
}, 0);
var Box, Button, Chevron, Skeleton;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Button: function (v) {
    Button = v;
  },
  Chevron: function (v) {
    Chevron = v;
  },
  Skeleton: function (v) {
    Skeleton = v;
  }
}, 1);
var useBreakpoints;
module.link("@rocket.chat/fuselage-hooks", {
  useBreakpoints: function (v) {
    useBreakpoints = v;
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
var useTranslation;
module.link("../../../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 6);
var useHourlyChatActivity;
module.link("./useHourlyChatActivity", {
  useHourlyChatActivity: function (v) {
    useHourlyChatActivity = v;
  }
}, 7);

var ContentForHours = function (_ref) {
  var displacement = _ref.displacement,
      onPreviousDateClick = _ref.onPreviousDateClick,
      onNextDateClick = _ref.onNextDateClick,
      timezone = _ref.timezone;
  var utc = timezone === 'utc';

  var _useHourlyChatActivit = useHourlyChatActivity({
    displacement: displacement,
    utc: utc
  }),
      data = _useHourlyChatActivit.data;

  var t = useTranslation();
  var isLgScreen = useBreakpoints().includes('lg');
  var values = useMemo(function () {
    if (!data) {
      return [];
    }

    var divider = 2;
    var values = Array.from({
      length: 24 / divider
    }, function (_, i) {
      return {
        hour: String(divider * i),
        users: 0
      };
    });

    for (var _iterator = _createForOfIteratorHelperLoose((_data$hours = data === null || data === void 0 ? void 0 : data.hours) !== null && _data$hours !== void 0 ? _data$hours : []), _step; !(_step = _iterator()).done;) {
      var _data$hours;

      var _ref2 = _step.value;
      var hour = _ref2.hour;
      var users = _ref2.users;
      var i = Math.floor(hour / divider);
      values[i] = values[i] || {
        hour: String(divider * i),
        users: 0
      };
      values[i].users += users;
    }

    return values;
  }, [data]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }, /*#__PURE__*/React.createElement(Button, {
    ghost: true,
    square: true,
    small: true,
    onClick: onPreviousDateClick
  }, /*#__PURE__*/React.createElement(Chevron, {
    left: true,
    size: "x20",
    style: {
      verticalAlign: 'middle'
    }
  })), /*#__PURE__*/React.createElement(Box, {
    mi: "x8",
    flexBasis: "25%",
    is: "span",
    style: {
      textAlign: 'center'
    }
  }, data ? moment(data.day).format(displacement < 7 ? 'dddd' : 'L') : null), /*#__PURE__*/React.createElement(Button, {
    ghost: true,
    square: true,
    small: true,
    disabled: displacement === 0,
    onClick: onNextDateClick
  }, /*#__PURE__*/React.createElement(Chevron, {
    right: true,
    size: "x20",
    style: {
      verticalAlign: 'middle'
    }
  }))), data ? /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    height: "196px"
  }, /*#__PURE__*/React.createElement(Box, {
    alignSelf: "stretch",
    flexGrow: 1,
    flexShrink: 0,
    position: "relative"
  }, /*#__PURE__*/React.createElement(Box, {
    position: "absolute",
    width: "100%",
    height: "100%"
  }, /*#__PURE__*/React.createElement(ResponsiveBar, {
    data: values,
    indexBy: "hour",
    keys: ['users'],
    groupMode: "grouped",
    padding: 0.25,
    margin: {
      // TODO: Get it from theme
      bottom: 30,
      right: 5
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
      tickRotation: isLgScreen ? 0 : 25,
      tickValues: 'every 2 hours',
      format: function (hour) {
        return moment().set({
          hour: hour,
          minute: 0,
          second: 0
        }).format('LT');
      }
    },
    axisLeft: null,
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
    tooltip: function (_ref3) {
      var value = _ref3.value;
      return /*#__PURE__*/React.createElement(Box, {
        fontScale: "p1m",
        color: "alternative"
      }, t('Value_users', {
        value: value
      }));
    }
  })))) : /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rect",
    height: 196
  }));
};

module.exportDefault(ContentForHours);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/views/admin/engagementDashboard/users/c4e392eda4f646d34f8ad0f9d990596873bb38ae.map
