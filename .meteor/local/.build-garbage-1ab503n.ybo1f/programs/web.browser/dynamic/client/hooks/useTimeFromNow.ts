function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/useTimeFromNow.ts                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useTimeFromNow: () => useTimeFromNow
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

const useTimeFromNow = withSuffix => useCallback(date => moment(date).fromNow(!withSuffix), [withSuffix]);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/9f8aa5e5f24b09426dfda5f0e0064a54cbad59e1.map
