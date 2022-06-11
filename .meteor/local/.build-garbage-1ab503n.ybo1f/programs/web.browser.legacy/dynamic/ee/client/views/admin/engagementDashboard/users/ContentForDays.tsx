function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/engagementDashboard/users/ContentForDays.tsx                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var ResponsiveBar;
module.link("@nivo/bar", {
  ResponsiveBar: function (v) {
    ResponsiveBar = v;
  }
}, 0);
var Box, Button, Chevron, Flex, Margins, Skeleton;
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
  Flex: function (v) {
    Flex = v;
  },
  Margins: function (v) {
    Margins = v;
  },
  Skeleton: function (v) {
    Skeleton = v;
  }
}, 1);
var colors;
module.link("@rocket.chat/fuselage-tokens/colors", {
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
var useWeeklyChatActivity;
module.link("./useWeeklyChatActivity", {
  useWeeklyChatActivity: function (v) {
    useWeeklyChatActivity = v;
  }
}, 5);

var ContentForDays = function (_ref) {
  var displacement = _ref.displacement,
      onPreviousDateClick = _ref.onPreviousDateClick,
      onNextDateClick = _ref.onNextDateClick,
      timezone = _ref.timezone;
  var utc = timezone === 'utc';

  var _useWeeklyChatActivit = useWeeklyChatActivity({
    displacement: displacement,
    utc: utc
  }),
      data = _useWeeklyChatActivit.data;

  var formattedCurrentDate = useMemo(function () {
    if (!data) {
      return null;
    }

    var endOfWeek = moment(data.day);
    var startOfWeek = moment(data.day).subtract(6, 'days');
    return startOfWeek.format('L') + " - " + endOfWeek.format('L');
  }, [data]);
  var values = useMemo(function () {
    var _data$month$map$sort$, _data$month, _data$month$map, _data$month$map$sort;

    return (_data$month$map$sort$ = data === null || data === void 0 ? void 0 : (_data$month = data.month) === null || _data$month === void 0 ? void 0 : (_data$month$map = _data$month.map(function (_ref2) {
      var users = _ref2.users,
          day = _ref2.day,
          month = _ref2.month,
          year = _ref2.year;
      return {
        users: users,
        day: moment({
          year: year,
          month: month - 1,
          day: day
        })
      };
    })) === null || _data$month$map === void 0 ? void 0 : (_data$month$map$sort = _data$month$map.sort(function (_ref3, _ref4) {
      var a = _ref3.day;
      var b = _ref4.day;
      return a.diff(b);
    })) === null || _data$month$map$sort === void 0 ? void 0 : _data$month$map$sort.map(function (_ref5) {
      var users = _ref5.users,
          day = _ref5.day;
      return {
        users: users,
        day: String(day.valueOf())
      };
    })) !== null && _data$month$map$sort$ !== void 0 ? _data$month$map$sort$ : [];
  }, [data]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Flex.Container, {
    alignItems: "center",
    justifyContent: "center"
  }, /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Button, {
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
  })), /*#__PURE__*/React.createElement(Flex.Item, {
    basis: "50%"
  }, /*#__PURE__*/React.createElement(Margins, {
    inline: "x8"
  }, /*#__PURE__*/React.createElement(Box, {
    is: "span",
    style: {
      textAlign: 'center'
    }
  }, formattedCurrentDate))), /*#__PURE__*/React.createElement(Button, {
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
  })))), /*#__PURE__*/React.createElement(Flex.Container, null, data ? /*#__PURE__*/React.createElement(Box, {
    style: {
      height: 196
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
    indexBy: "day",
    keys: ['users'],
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
    axisBottom: {
      tickSize: 0,
      // TODO: Get it from theme
      tickPadding: 4,
      tickRotation: 0,
      tickValues: 'every 3 days',
      format: function (timestamp) {
        return moment(parseInt(timestamp, 10)).format('L');
      }
    },
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
      }
    }
  }))))) : /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rect",
    height: 196
  })));
};

module.exportDefault(ContentForDays);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/views/admin/engagementDashboard/users/27a4cf7d47a9361e5098655854028f19e21ba821.map
