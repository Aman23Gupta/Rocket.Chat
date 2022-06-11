function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/useReactiveVar.ts                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useReactiveVar: () => useReactiveVar
});
let Tracker;
module.link("meteor/tracker", {
  Tracker(v) {
    Tracker = v;
  }

}, 0);
let useEffect, useState;
module.link("react", {
  useEffect(v) {
    useEffect = v;
  },

  useState(v) {
    useState = v;
  }

}, 1);

const useReactiveVar = variable => {
  const [value, setValue] = useState(() => Tracker.nonreactive(() => variable.get()));
  useEffect(() => {
    const computation = Tracker.autorun(() => {
      const value = variable.get();
      setValue(() => value);
    });
    return () => {
      computation.stop();
    };
  }, [variable]);
  return value;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/9f4d8580f3b0f2e887412235a4e11756fd1492ff.map
