function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/engagementDashboard/users/ActiveUsersSection.tsx                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let ResponsiveLine;
module.link("@nivo/line", {
  ResponsiveLine(v) {
    ResponsiveLine = v;
  }

}, 0);
let Box, Flex, Skeleton, Tile;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Flex(v) {
    Flex = v;
  },

  Skeleton(v) {
    Skeleton = v;
  },

  Tile(v) {
    Tile = v;
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
let useFormatDate;
module.link("../../../../../../client/hooks/useFormatDate", {
  useFormatDate(v) {
    useFormatDate = v;
  }

}, 7);
let Section;
module.link("../Section", {
  default(v) {
    Section = v;
  }

}, 8);
let DownloadDataButton;
module.link("../data/DownloadDataButton", {
  default(v) {
    DownloadDataButton = v;
  }

}, 9);
let LegendSymbol;
module.link("../data/LegendSymbol", {
  default(v) {
    LegendSymbol = v;
  }

}, 10);
let useActiveUsers;
module.link("./useActiveUsers", {
  useActiveUsers(v) {
    useActiveUsers = v;
  }

}, 11);

const ActiveUsersSection = _ref => {
  let {
    timezone
  } = _ref;
  const utc = timezone === 'utc';
  const {
    data
  } = useActiveUsers({
    utc
  });
  const [countDailyActiveUsers, diffDailyActiveUsers, countWeeklyActiveUsers, diffWeeklyActiveUsers, countMonthlyActiveUsers, diffMonthlyActiveUsers, dauValues = [], wauValues = [], mauValues = []] = useMemo(() => {
    if (!data) {
      return [];
    }

    const createPoint = i => ({
      x: moment(data.start).add(i, 'days').toDate(),
      y: 0
    });

    const createPoints = () => Array.from({
      length: moment(data.end).diff(data.start, 'days') + 1
    }, (_, i) => createPoint(i));

    const dauValues = createPoints();
    const prevDauValue = createPoint(-1);
    const wauValues = createPoints();
    const prevWauValue = createPoint(-1);
    const mauValues = createPoints();
    const prevMauValue = createPoint(-1);
    const usersListsMap = data.month.reduce((map, dayData) => {
      const date = utc ? moment.utc({
        year: dayData.year,
        month: dayData.month - 1,
        day: dayData.day
      }).endOf('day') : moment({
        year: dayData.year,
        month: dayData.month - 1,
        day: dayData.day
      }).endOf('day');
      const dateOffset = date.diff(data.start, 'days');

      if (dateOffset >= 0) {
        map[dateOffset] = dayData.usersList;
        dauValues[dateOffset].y = dayData.users;
      }

      return map;
    }, {});

    const distributeValueOverPoints = (usersListsMap, dateOffset, T, array) => {
      const usersSet = new Set();

      for (let k = dateOffset; T > 0; k--, T--) {
        if (usersListsMap[k]) {
          usersListsMap[k].forEach(userId => usersSet.add(userId));
        }
      }

      array[dateOffset].y = usersSet.size;
    };

    for (let i = 0; i < 30; i++) {
      distributeValueOverPoints(usersListsMap, i, 7, wauValues);
      distributeValueOverPoints(usersListsMap, i, 30, mauValues);
    }

    prevWauValue.y = wauValues[28].y;
    prevMauValue.y = mauValues[28].y;
    prevDauValue.y = dauValues[28].y;
    return [dauValues[dauValues.length - 1].y, dauValues[dauValues.length - 1].y - prevDauValue.y, wauValues[wauValues.length - 1].y, wauValues[wauValues.length - 1].y - prevWauValue.y, mauValues[mauValues.length - 1].y, mauValues[mauValues.length - 1].y - prevMauValue.y, dauValues, wauValues, mauValues];
  }, [data, utc]);
  const formatDate = useFormatDate();
  const t = useTranslation();
  return /*#__PURE__*/React.createElement(Section, {
    title: t('Active_users'),
    filter: /*#__PURE__*/React.createElement(DownloadDataButton, {
      attachmentName: "ActiveUsersSection_start_".concat(data === null || data === void 0 ? void 0 : data.start, "_end_").concat(data === null || data === void 0 ? void 0 : data.end),
      headers: ['Date', 'DAU', 'WAU', 'MAU'],
      dataAvailable: !!data,
      dataExtractor: () => {
        const values = [];

        for (let i = 0; i < 30; i++) {
          values.push([dauValues[i].x.toISOString(), dauValues[i].y, wauValues[i].y, mauValues[i].y]);
        }

        return values;
      }
    })
  }, /*#__PURE__*/React.createElement(CounterSet, {
    counters: [{
      count: countDailyActiveUsers !== null && countDailyActiveUsers !== void 0 ? countDailyActiveUsers : /*#__PURE__*/React.createElement(Skeleton, {
        variant: "rect",
        width: "3ex",
        height: "1em"
      }),
      variation: diffDailyActiveUsers !== null && diffDailyActiveUsers !== void 0 ? diffDailyActiveUsers : 0,
      description: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(LegendSymbol, {
        color: colors.b200
      }), " ", t('Daily_Active_Users'))
    }, {
      count: countWeeklyActiveUsers !== null && countWeeklyActiveUsers !== void 0 ? countWeeklyActiveUsers : /*#__PURE__*/React.createElement(Skeleton, {
        variant: "rect",
        width: "3ex",
        height: "1em"
      }),
      variation: diffWeeklyActiveUsers !== null && diffWeeklyActiveUsers !== void 0 ? diffWeeklyActiveUsers : 0,
      description: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(LegendSymbol, {
        color: colors.b300
      }), " ", t('Weekly_Active_Users'))
    }, {
      count: countMonthlyActiveUsers !== null && countMonthlyActiveUsers !== void 0 ? countMonthlyActiveUsers : /*#__PURE__*/React.createElement(Skeleton, {
        variant: "rect",
        width: "3ex",
        height: "1em"
      }),
      variation: diffMonthlyActiveUsers !== null && diffMonthlyActiveUsers !== void 0 ? diffMonthlyActiveUsers : 0,
      description: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(LegendSymbol, {
        color: colors.b500
      }), " ", t('Monthly_Active_Users'))
    }]
  }), /*#__PURE__*/React.createElement(Flex.Container, null, data ? /*#__PURE__*/React.createElement(Box, {
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
  }, /*#__PURE__*/React.createElement(ResponsiveLine, {
    data: [{
      id: 'dau',
      data: dauValues
    }, {
      id: 'wau',
      data: wauValues
    }, {
      id: 'mau',
      data: mauValues
    }],
    xScale: {
      type: 'time',
      format: 'native',
      precision: 'day'
    },
    xFormat: "time:%Y-%m-%d",
    yScale: {
      type: 'linear',
      stacked: true
    },
    enableGridX: false,
    enableGridY: false,
    enablePoints: false,
    useMesh: true,
    enableArea: true,
    areaOpacity: 1,
    enableCrosshair: true,
    crosshairType: "bottom",
    margin: {
      // TODO: Get it from theme
      top: 0,
      bottom: 20,
      right: 0,
      left: 40
    },
    colors: [colors.b200, colors.b300, colors.b500],
    axisLeft: {
      // TODO: Get it from theme
      tickSize: 0,
      tickPadding: 4,
      tickRotation: 0,
      tickValues: 3
    },
    axisBottom: {
      // TODO: Get it from theme
      tickSize: 0,
      tickPadding: 4,
      tickRotation: 0,
      tickValues: 'every 3 days',
      format: date => moment(date).format(dauValues.length === 7 ? 'dddd' : 'L')
    },
    animate: true,
    motionStiffness: 90,
    motionDamping: 15,
    theme: {
      // TODO: Get it from theme
      axis: {
        ticks: {
          text: {
            fill: '#9EA2A8',
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
          backgroundColor: '#1F2329',
          boxShadow: '0px 0px 12px rgba(47, 52, 61, 0.12), 0px 0px 2px rgba(47, 52, 61, 0.08)',
          borderRadius: 2
        }
      }
    },
    enableSlices: "x",
    sliceTooltip: _ref2 => {
      let {
        slice: {
          points
        }
      } = _ref2;
      return /*#__PURE__*/React.createElement(Tile, {
        elevation: "2"
      }, /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Box, null, formatDate(points[0].data.x)), points.map(_ref3 => {
        let {
          serieId,
          data: {
            y: activeUsers
          }
        } = _ref3;
        return /*#__PURE__*/React.createElement(Box, {
          key: serieId,
          fontScale: "p1m"
        }, /*#__PURE__*/React.createElement(Box, null, serieId === 'dau' && t('DAU_value', {
          value: activeUsers
        }) || serieId === 'wau' && t('WAU_value', {
          value: activeUsers
        }) || serieId === 'mau' && t('MAU_value', {
          value: activeUsers
        })));
      })));
    }
  }))))) : /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rect",
    height: 240
  })));
};

module.exportDefault(ActiveUsersSection);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/views/admin/engagementDashboard/users/56508bc574f96a6adfed632a8fb8827fe6eaf58c.map
