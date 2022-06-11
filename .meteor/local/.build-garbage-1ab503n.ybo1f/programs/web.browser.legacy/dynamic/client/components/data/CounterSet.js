function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/data/CounterSet.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Grid;
module.link("@rocket.chat/fuselage", {
  Grid: function (v) {
    Grid = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var Counter;
module.link("./Counter", {
  "default": function (v) {
    Counter = v;
  }
}, 2);

function CounterSet(_ref) {
  var _ref$counters = _ref.counters,
      counters = _ref$counters === void 0 ? [] : _ref$counters;
  return /*#__PURE__*/React.createElement(Grid, null, counters.map(function (_ref2, i) {
    var count = _ref2.count,
        variation = _ref2.variation,
        description = _ref2.description;
    return /*#__PURE__*/React.createElement(Grid.Item, {
      key: i
    }, /*#__PURE__*/React.createElement(Counter, {
      count: count,
      variation: variation,
      description: description
    }));
  }));
}

module.exportDefault(CounterSet);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/data/775e7ffe485ff4a0f27ad2ab881d8e2accb4800c.map
