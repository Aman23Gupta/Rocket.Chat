function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/UTCClock.tsx                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 0);
var useUTCClock;
module.link("../hooks/useUTCClock", {
  useUTCClock: function (v) {
    useUTCClock = v;
  }
}, 1);

var UTCClock = function (_ref) {
  var utcOffset = _ref.utcOffset;
  var time = useUTCClock(utcOffset);
  return /*#__PURE__*/React.createElement(React.Fragment, null, time);
};

module.exportDefault( /*#__PURE__*/memo(UTCClock));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/01b697755bfdbf6794a3e9a7a6fafdafb6ccfcf6.map
