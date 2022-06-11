function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/meet/OngoingCallDuration.tsx                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
var Box;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  }
}, 0);
var React, useEffect, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 1);

var OngoingCallDuration = function (_ref) {
  var _ref$counter = _ref.counter,
      defaultCounter = _ref$counter === void 0 ? 0 : _ref$counter;

  var _useState = useState(defaultCounter),
      _useState2 = _slicedToArray(_useState, 2),
      counter = _useState2[0],
      setCounter = _useState2[1];

  useEffect(function () {
    setTimeout(function () {
      return setCounter(counter + 1);
    }, 1000);
  }, [counter]);
  return /*#__PURE__*/React.createElement(Box, {
    color: "#E4E7EA",
    textAlign: "center"
  }, new Date(counter * 1000).toISOString().substr(11, 8));
};

module.exportDefault(OngoingCallDuration);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/meet/95931b853ef4d5fe68bf59ca9f8b7b5b576da6b0.map
