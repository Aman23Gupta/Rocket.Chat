function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/UTCClock.tsx                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  }

}, 0);
let useUTCClock;
module.link("../hooks/useUTCClock", {
  useUTCClock(v) {
    useUTCClock = v;
  }

}, 1);

const UTCClock = _ref => {
  let {
    utcOffset
  } = _ref;
  const time = useUTCClock(utcOffset);
  return /*#__PURE__*/React.createElement(React.Fragment, null, time);
};

module.exportDefault( /*#__PURE__*/memo(UTCClock));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/7971ed2875d58f8060a8b391caa3dd0b962360fe.map
