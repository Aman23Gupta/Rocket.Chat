function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/useTimeAgo.js                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useTimeAgo: () => useTimeAgo,
  useShortTimeAgo: () => useShortTimeAgo
});
let moment;
module.link("moment", {
  default(v) {
    moment = v;
  }

}, 0);
let useCallback;
module.link("react", {
  useCallback(v) {
    useCallback = v;
  }

}, 1);

const useTimeAgo = () => useCallback(time => moment(time).calendar(null, {
  sameDay: 'LT',
  lastWeek: 'dddd LT',
  sameElse: 'LL'
}), []);

const useShortTimeAgo = () => useCallback(time => moment(time).calendar(null, {
  sameDay: 'LT',
  lastDay: '[Yesterday]',
  lastWeek: 'dddd',

  sameElse(now) {
    if (this.isBefore(now, 'year')) {
      return 'LL';
    }

    return 'MMM Do';
  }

}), []);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/7582ad4a2e1aca110377a2dd3a0aa4c5dee37d11.map
