function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/useTimeAgo.js                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useTimeAgo: function () {
    return useTimeAgo;
  },
  useShortTimeAgo: function () {
    return useShortTimeAgo;
  }
});
var moment;
module.link("moment", {
  "default": function (v) {
    moment = v;
  }
}, 0);
var useCallback;
module.link("react", {
  useCallback: function (v) {
    useCallback = v;
  }
}, 1);

var useTimeAgo = function () {
  return useCallback(function (time) {
    return moment(time).calendar(null, {
      sameDay: 'LT',
      lastWeek: 'dddd LT',
      sameElse: 'LL'
    });
  }, []);
};

var useShortTimeAgo = function () {
  return useCallback(function (time) {
    return moment(time).calendar(null, {
      sameDay: 'LT',
      lastDay: '[Yesterday]',
      lastWeek: 'dddd',
      sameElse: function (now) {
        if (this.isBefore(now, 'year')) {
          return 'LL';
        }

        return 'MMM Do';
      }
    });
  }, []);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/aef1f3ff78857fae4d150584bee14e5dfbf48d8b.map
