function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/providers/createReactiveSubscriptionFactory.ts                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  createReactiveSubscriptionFactory: () => createReactiveSubscriptionFactory
});
let Tracker;
module.link("meteor/tracker", {
  Tracker(v) {
    Tracker = v;
  }

}, 0);

const createReactiveSubscriptionFactory = computeCurrentValueWith => function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  const computeCurrentValue = () => computeCurrentValueWith(...args);

  const callbacks = new Set();
  let currentValue = computeCurrentValue();
  let computation;
  const timeout = setTimeout(() => {
    computation = Tracker.autorun(() => {
      currentValue = computeCurrentValue();
      callbacks.forEach(callback => {
        callback();
      });
    });
  }, 0);
  return {
    getCurrentValue: () => currentValue,
    subscribe: callback => {
      callbacks.add(callback);
      return () => {
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
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/providers/083846fc5e55e350528a1975467788925b0420bf.map
