function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/engagementDashboard/users/ContentForDays.tsx                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let ResponsiveBar;
module.link("@nivo/bar", {
  ResponsiveBar(v) {
    ResponsiveBar = v;
  }

}, 0);
let Box, Button, Chevron, Flex, Margins, Skeleton;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Button(v) {
    Button = v;
  },

  Chevron(v) {
    Chevron = v;
  },

  Flex(v) {
    Flex = v;
  },

  Margins(v) {
    Margins = v;
  },

  Skeleton(v) {
    Skeleton = v;
  }

}, 1);
let colors;
module.link("@rocket.chat/fuselage-tokens/colors", {
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
let useWeeklyChatActivity;
module.link("./useWeeklyChatActivity", {
  useWeeklyChatActivity(v) {
    useWeeklyChatActivity = v;
  }

}, 5);

const ContentForDays = _ref => {
  let {
    displacement,
    onPreviousDateClick,
    onNextDateClick,
    timezone
  } = _ref;
  const utc = timezone === 'utc';
  const {
    data
  } = useWeeklyChatActivity({
    displacement,
    utc
  });
  const formattedCurrentDate = useMemo(() => {
    if (!data) {
      return null;
    }

    const endOfWeek = moment(data.day);
    const startOfWeek = moment(data.day).subtract(6, 'days');
    return "".concat(startOfWeek.format('L'), " - ").concat(endOfWeek.format('L'));
  }, [data]);
  const values = useMemo(() => {
    var _data$month$map$sort$, _data$month, _data$month$map, _data$month$map$sort;

    return (_data$month$map$sort$ = data === null || data === void 0 ? void 0 : (_data$month = data.month) === null || _data$month === void 0 ? void 0 : (_data$month$map = _data$month.map(_ref2 => {
      let {
        users,
        day,
        month,
        year
      } = _ref2;
      return {
        users,
        day: moment({
          year,
          month: month - 1,
          day
        })
      };
    })) === null || _data$month$map === void 0 ? void 0 : (_data$month$map$sort = _data$month$map.sort((_ref3, _ref4) => {
      let {
        day: a
      } = _ref3;
      let {
        day: b
      } = _ref4;
      return a.diff(b);
    })) === null || _data$month$map$sort === void 0 ? void 0 : _data$month$map$sort.map(_ref5 => {
      let {
        users,
        day
      } = _ref5;
      return {
        users,
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
      format: timestamp => moment(parseInt(timestamp, 10)).format('L')
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
//# sourceMappingURL=/dynamic/ee/client/views/admin/engagementDashboard/users/ad2da6b3cc6d63081f5bf853281f625af2d4b48b.map
