function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/engagementDashboard/users/ActiveUsersSection.tsx                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
var ResponsiveLine;
module.link("@nivo/line", {
  ResponsiveLine: function (v) {
    ResponsiveLine = v;
  }
}, 0);
var Box, Flex, Skeleton, Tile;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Flex: function (v) {
    Flex = v;
  },
  Skeleton: function (v) {
    Skeleton = v;
  },
  Tile: function (v) {
    Tile = v;
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
var useFormatDate;
module.link("../../../../../../client/hooks/useFormatDate", {
  useFormatDate: function (v) {
    useFormatDate = v;
  }
}, 7);
var Section;
module.link("../Section", {
  "default": function (v) {
    Section = v;
  }
}, 8);
var DownloadDataButton;
module.link("../data/DownloadDataButton", {
  "default": function (v) {
    DownloadDataButton = v;
  }
}, 9);
var LegendSymbol;
module.link("../data/LegendSymbol", {
  "default": function (v) {
    LegendSymbol = v;
  }
}, 10);
var useActiveUsers;
module.link("./useActiveUsers", {
  useActiveUsers: function (v) {
    useActiveUsers = v;
  }
}, 11);

var ActiveUsersSection = function (_ref) {
  var timezone = _ref.timezone;
  var utc = timezone === 'utc';

  var _useActiveUsers = useActiveUsers({
    utc: utc
  }),
      data = _useActiveUsers.data;

  var _useMemo = useMemo(function () {
    if (!data) {
      return [];
    }

    var createPoint = function (i) {
      return {
        x: moment(data.start).add(i, 'days').toDate(),
        y: 0
      };
    };

    var createPoints = function () {
      return Array.from({
        length: moment(data.end).diff(data.start, 'days') + 1
      }, function (_, i) {
        return createPoint(i);
      });
    };

    var dauValues = createPoints();
    var prevDauValue = createPoint(-1);
    var wauValues = createPoints();
    var prevWauValue = createPoint(-1);
    var mauValues = createPoints();
    var prevMauValue = createPoint(-1);
    var usersListsMap = data.month.reduce(function (map, dayData) {
      var date = utc ? moment.utc({
        year: dayData.year,
        month: dayData.month - 1,
        day: dayData.day
      }).endOf('day') : moment({
        year: dayData.year,
        month: dayData.month - 1,
        day: dayData.day
      }).endOf('day');
      var dateOffset = date.diff(data.start, 'days');

      if (dateOffset >= 0) {
        map[dateOffset] = dayData.usersList;
        dauValues[dateOffset].y = dayData.users;
      }

      return map;
    }, {});

    var distributeValueOverPoints = function (usersListsMap, dateOffset, T, array) {
      var usersSet = new Set();

      for (var k = dateOffset; T > 0; k--, T--) {
        if (usersListsMap[k]) {
          usersListsMap[k].forEach(function (userId) {
            return usersSet.add(userId);
          });
        }
      }

      array[dateOffset].y = usersSet.size;
    };

    for (var i = 0; i < 30; i++) {
      distributeValueOverPoints(usersListsMap, i, 7, wauValues);
      distributeValueOverPoints(usersListsMap, i, 30, mauValues);
    }

    prevWauValue.y = wauValues[28].y;
    prevMauValue.y = mauValues[28].y;
    prevDauValue.y = dauValues[28].y;
    return [dauValues[dauValues.length - 1].y, dauValues[dauValues.length - 1].y - prevDauValue.y, wauValues[wauValues.length - 1].y, wauValues[wauValues.length - 1].y - prevWauValue.y, mauValues[mauValues.length - 1].y, mauValues[mauValues.length - 1].y - prevMauValue.y, dauValues, wauValues, mauValues];
  }, [data, utc]),
      _useMemo2 = _slicedToArray(_useMemo, 9),
      countDailyActiveUsers = _useMemo2[0],
      diffDailyActiveUsers = _useMemo2[1],
      countWeeklyActiveUsers = _useMemo2[2],
      diffWeeklyActiveUsers = _useMemo2[3],
      countMonthlyActiveUsers = _useMemo2[4],
      diffMonthlyActiveUsers = _useMemo2[5],
      _useMemo2$ = _useMemo2[6],
      dauValues = _useMemo2$ === void 0 ? [] : _useMemo2$,
      _useMemo2$2 = _useMemo2[7],
      wauValues = _useMemo2$2 === void 0 ? [] : _useMemo2$2,
      _useMemo2$3 = _useMemo2[8],
      mauValues = _useMemo2$3 === void 0 ? [] : _useMemo2$3;

  var formatDate = useFormatDate();
  var t = useTranslation();
  return /*#__PURE__*/React.createElement(Section, {
    title: t('Active_users'),
    filter: /*#__PURE__*/React.createElement(DownloadDataButton, {
      attachmentName: "ActiveUsersSection_start_" + (data === null || data === void 0 ? void 0 : data.start) + "_end_" + (data === null || data === void 0 ? void 0 : data.end),
      headers: ['Date', 'DAU', 'WAU', 'MAU'],
      dataAvailable: !!data,
      dataExtractor: function () {
        var values = [];

        for (var i = 0; i < 30; i++) {
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
      format: function (date) {
        return moment(date).format(dauValues.length === 7 ? 'dddd' : 'L');
      }
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
    sliceTooltip: function (_ref2) {
      var points = _ref2.slice.points;
      return /*#__PURE__*/React.createElement(Tile, {
        elevation: "2"
      }, /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Box, null, formatDate(points[0].data.x)), points.map(function (_ref3) {
        var serieId = _ref3.serieId,
            activeUsers = _ref3.data.y;
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
//# sourceMappingURL=/dynamic/ee/client/views/admin/engagementDashboard/users/294d35a5efa46d9cb7c85202fd828b4231041f0c.map
