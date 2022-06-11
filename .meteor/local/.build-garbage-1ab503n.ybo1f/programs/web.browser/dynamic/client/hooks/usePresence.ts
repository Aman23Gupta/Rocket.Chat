function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/usePresence.ts                                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  usePresence: () => usePresence
});
let useMemo;
module.link("react", {
  useMemo(v) {
    useMemo = v;
  }

}, 0);
let useSubscription;
module.link("use-subscription", {
  useSubscription(v) {
    useSubscription = v;
  }

}, 1);
let Presence;
module.link("../lib/presence", {
  Presence(v) {
    Presence = v;
  }

}, 2);

const usePresence = uid => {
  const subscription = useMemo(() => ({
    getCurrentValue: () => uid ? Presence.store.get(uid) : undefined,
    subscribe: callback => {
      uid && Presence.listen(uid, callback);
      return () => {
        uid && Presence.stop(uid, callback);
      };
    }
  }), [uid]);
  return useSubscription(subscription);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/8c3cefefe477811f3fe8541c4a191abe028283f9.map
