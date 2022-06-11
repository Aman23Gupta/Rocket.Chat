function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/data/CounterSet.js                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Grid;
module.link("@rocket.chat/fuselage", {
  Grid(v) {
    Grid = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let Counter;
module.link("./Counter", {
  default(v) {
    Counter = v;
  }

}, 2);

function CounterSet(_ref) {
  let {
    counters = []
  } = _ref;
  return /*#__PURE__*/React.createElement(Grid, null, counters.map((_ref2, i) => {
    let {
      count,
      variation,
      description
    } = _ref2;
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
//# sourceMappingURL=/dynamic/client/components/data/fa89e47d821bcebf55cb0fb6c385779b89079489.map
