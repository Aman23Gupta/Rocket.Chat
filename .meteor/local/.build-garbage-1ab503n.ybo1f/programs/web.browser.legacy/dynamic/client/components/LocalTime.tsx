function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/LocalTime.tsx                                                                                     //
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
var useTranslation;
module.link("../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 1);
var useUTCClock;
module.link("../hooks/useUTCClock", {
  useUTCClock: function (v) {
    useUTCClock = v;
  }
}, 2);

var LocalTime = function (_ref) {
  var utcOffset = _ref.utcOffset;
  var time = useUTCClock(utcOffset);
  var t = useTranslation();
  return /*#__PURE__*/React.createElement(React.Fragment, null, t('Local_Time_time', {
    time: time
  }));
};

module.exportDefault( /*#__PURE__*/memo(LocalTime));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/d1a298c69080a0ac52b94ba3aac8ec738e688cad.map
