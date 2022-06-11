function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/analytics/AgentOverview.js                                                                 //
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
var Table;
module.link("@rocket.chat/fuselage", {
  Table: function (v) {
    Table = v;
  }
}, 0);
var React, useMemo, useEffect, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useState: function (v) {
    useState = v;
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
var style = {
  width: '100%'
};

var AgentOverview = function (_ref) {
  var _displayData$head, _displayData$data;

  var type = _ref.type,
      dateRange = _ref.dateRange,
      departmentId = _ref.departmentId;
  var t = useTranslation();
  var start = dateRange.start,
      end = dateRange.end;
  var params = useMemo(function () {
    return _objectSpread({
      chartOptions: {
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

  var _useState = useState({
    head: [],
    data: []
  }),
      _useState2 = _slicedToArray(_useState, 2),
      displayData = _useState2[0],
      setDisplayData = _useState2[1];

  var loadData = useMethod('livechat:getAgentOverviewData');
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
                setDisplayData(value);

              case 6:
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
  return /*#__PURE__*/React.createElement(Table, {
    style: style,
    fixed: true
  }, /*#__PURE__*/React.createElement(Table.Head, null, /*#__PURE__*/React.createElement(Table.Row, null, (_displayData$head = displayData.head) === null || _displayData$head === void 0 ? void 0 : _displayData$head.map(function (_ref2, i) {
    var name = _ref2.name;
    return /*#__PURE__*/React.createElement(Table.Cell, {
      key: i
    }, t(name));
  }))), /*#__PURE__*/React.createElement(Table.Body, null, (_displayData$data = displayData.data) === null || _displayData$data === void 0 ? void 0 : _displayData$data.map(function (_ref3, i) {
    var name = _ref3.name,
        value = _ref3.value;
    return /*#__PURE__*/React.createElement(Table.Row, {
      key: i
    }, /*#__PURE__*/React.createElement(Table.Cell, null, name), /*#__PURE__*/React.createElement(Table.Cell, null, value));
  })));
};

module.exportDefault(AgentOverview);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/analytics/59240688b60a586ca08d3bcb95f17ff22d9f0b02.map
