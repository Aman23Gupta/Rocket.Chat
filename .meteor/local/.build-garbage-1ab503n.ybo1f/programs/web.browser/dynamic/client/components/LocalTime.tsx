function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/LocalTime.tsx                                                                                     //
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
let useTranslation;
module.link("../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 1);
let useUTCClock;
module.link("../hooks/useUTCClock", {
  useUTCClock(v) {
    useUTCClock = v;
  }

}, 2);

const LocalTime = _ref => {
  let {
    utcOffset
  } = _ref;
  const time = useUTCClock(utcOffset);
  const t = useTranslation();
  return /*#__PURE__*/React.createElement(React.Fragment, null, t('Local_Time_time', {
    time
  }));
};

module.exportDefault( /*#__PURE__*/memo(LocalTime));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/667a85d4193f8d914b8c7c91e98f7f09bf0f3a9b.map
