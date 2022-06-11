function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/analytics/Overview.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 2);
var Box, Skeleton;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Skeleton: function (v) {
    Skeleton = v;
  }
}, 0);
var React, useEffect, useState, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useState: function (v) {
    useState = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 1);
var useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 2);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var CounterItem;
module.link("../realTimeMonitoring/counter/CounterItem", {
  "default": function (v) {
    CounterItem = v;
  }
}, 4);
var CounterRow;
module.link("../realTimeMonitoring/counter/CounterRow", {
  "default": function (v) {
    CounterRow = v;
  }
}, 5);
var initialData = Array.from({
  length: 3
}).map(function () {
  return {
    title: '',
    value: ''
  };
});
var conversationsInitialData = [initialData, initialData];
var productivityInitialData = [initialData];

var Overview = function (_ref) {
  var type = _ref.type,
      dateRange = _ref.dateRange,
      departmentId = _ref.departmentId;
  var t = useTranslation();
  var start = dateRange.start,
      end = dateRange.end;
  var params = useMemo(function () {
    return _objectSpread({
      analyticsOptions: {
        name: type
      },
      daterange: {
        from: start,
        to: end
      }
    }, departmentId && {
      departmentId: departmentId
    });
  }, [departmentId, end, start, type]);
  var loadData = useMethod('livechat:getAnalyticsOverviewData');

  var _useState = useState(conversationsInitialData),
      _useState2 = _slicedToArray(_useState, 2),
      displayData = _useState2[0],
      setDisplayData = _useState2[1];

  useEffect(function () {
    setDisplayData(type === 'Conversations' ? conversationsInitialData : productivityInitialData);
  }, [type]);
  useEffect(function () {
    function fetchData() {
      var value;
      return _regeneratorRuntime.async(function () {
        function fetchData$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(!start || !end)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                _context.next = 4;
                return _regeneratorRuntime.awrap(loadData(params));

              case 4:
                value = _context.sent;

                if (value) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return");

              case 7:
                if (!(value.length > 3)) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt("return", setDisplayData([value.slice(0, 3), value.slice(3)]));

              case 9:
                setDisplayData([value]);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }

        return fetchData$;
      }(), null, null, null, Promise);
    }

    fetchData();
  }, [start, end, loadData, params]);
  return /*#__PURE__*/React.createElement(Box, {
    pb: "x28",
    flexDirection: "column"
  }, displayData.map(function () {
    var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var i = arguments.length > 1 ? arguments[1] : undefined;
    return /*#__PURE__*/React.createElement(CounterRow, {
      key: i,
      border: "0",
      pb: "none"
    }, items.map(function (_ref2, i) {
      var title = _ref2.title,
          value = _ref2.value;
      return /*#__PURE__*/React.createElement(CounterItem, {
        flexShrink: 1,
        pb: "x8",
        flexBasis: "100%",
        key: i,
        title: title ? t(title) : /*#__PURE__*/React.createElement(Skeleton, {
          width: "x60"
        }),
        count: value
      });
    }));
  }));
};

module.exportDefault(Overview);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/analytics/93d8f1e95a3296023188f4b6a8876697954440ae.map
