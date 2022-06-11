function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/providers/createReactiveSubscriptionFactory.ts                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  createReactiveSubscriptionFactory: function () {
    return createReactiveSubscriptionFactory;
  }
});
var Tracker;
module.link("meteor/tracker", {
  Tracker: function (v) {
    Tracker = v;
  }
}, 0);

var createReactiveSubscriptionFactory = function (computeCurrentValueWith) {
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var computeCurrentValue = function () {
      return computeCurrentValueWith.apply(void 0, args);
    };

    var callbacks = new Set();
    var currentValue = computeCurrentValue();
    var computation;
    var timeout = setTimeout(function () {
      computation = Tracker.autorun(function () {
        currentValue = computeCurrentValue();
        callbacks.forEach(function (callback) {
          callback();
        });
      });
    }, 0);
    return {
      getCurrentValue: function () {
        return currentValue;
      },
      subscribe: function (callback) {
        callbacks.add(callback);
        return function () {
          clearTimeout(timeout);
          callbacks.delete(callback);

          if (callbacks.size === 0) {
            var _computation;

            (_computation = computation) === null || _computation === void 0 ? void 0 : _computation.stop();
          }
        };
      }
    };
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/providers/db256d511a30b185347de1dedba3a476f7063e70.map
