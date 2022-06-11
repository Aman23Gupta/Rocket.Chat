function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/usePresence.ts                                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  usePresence: function () {
    return usePresence;
  }
});
var useMemo;
module.link("react", {
  useMemo: function (v) {
    useMemo = v;
  }
}, 0);
var useSubscription;
module.link("use-subscription", {
  useSubscription: function (v) {
    useSubscription = v;
  }
}, 1);
var Presence;
module.link("../lib/presence", {
  Presence: function (v) {
    Presence = v;
  }
}, 2);

var usePresence = function (uid) {
  var subscription = useMemo(function () {
    return {
      getCurrentValue: function () {
        return uid ? Presence.store.get(uid) : undefined;
      },
      subscribe: function (callback) {
        uid && Presence.listen(uid, callback);
        return function () {
          uid && Presence.stop(uid, callback);
        };
      }
    };
  }, [uid]);
  return useSubscription(subscription);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/7e9d6b379171321825838d534023c8df054bc4bc.map
