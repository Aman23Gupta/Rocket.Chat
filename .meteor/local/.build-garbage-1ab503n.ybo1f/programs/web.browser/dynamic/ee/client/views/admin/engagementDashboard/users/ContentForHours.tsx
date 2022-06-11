function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/engagementDashboard/users/ContentForHours.tsx                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let ResponsiveBar;
module.link("@nivo/bar", {
  ResponsiveBar(v) {
    ResponsiveBar = v;
  }

}, 0);
let Box, Button, Chevron, Skeleton;
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

  Skeleton(v) {
    Skeleton = v;
  }

}, 1);
let useBreakpoints;
module.link("@rocket.chat/fuselage-hooks", {
  useBreakpoints(v) {
    useBreakpoints = v;
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
let useTranslation;
module.link("../../../../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 6);
let useHourlyChatActivity;
module.link("./useHourlyChatActivity", {
  useHourlyChatActivity(v) {
    useHourlyChatActivity = v;
  }

}, 7);

const ContentForHours = _ref => {
  let {
    displacement,
    onPreviousDateClick,
    onNextDateClick,
    timezone
  } = _ref;
  const utc = timezone === 'utc';
  const {
    data
  } = useHourlyChatActivity({
    displacement,
    utc
  });
  const t = useTranslation();
  const isLgScreen = useBreakpoints().includes('lg');
  const values = useMemo(() => {
    if (!data) {
      return [];
    }

    const divider = 2;
    const values = Array.from({
      length: 24 / divider
    }, (_, i) => ({
      hour: String(divider * i),
      users: 0
    }));

    for (const {
      hour,
      users
    } of (_data$hours = data === null || data === void 0 ? void 0 : data.hours) !== null && _data$hours !== void 0 ? _data$hours : []) {
      var _data$hours;

      const i = Math.floor(hour / divider);
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
      format: hour => moment().set({
        hour,
        minute: 0,
        second: 0
      }).format('LT')
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
    tooltip: _ref2 => {
      let {
        value
      } = _ref2;
      return /*#__PURE__*/React.createElement(Box, {
        fontScale: "p1m",
        color: "alternative"
      }, t('Value_users', {
        value
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
//# sourceMappingURL=/dynamic/ee/client/views/admin/engagementDashboard/users/f674c3d353e2e1e2585bbd719615b67b82222599.map
