function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/useDontAskAgain.ts                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useDontAskAgain: () => useDontAskAgain
});
let useUserPreference;
module.link("../contexts/UserContext", {
  useUserPreference(v) {
    useUserPreference = v;
  }

}, 0);

const useDontAskAgain = action => {
  const dontAskAgainList = useUserPreference('dontAskAgainList');
  const shouldNotAskAgain = !!(dontAskAgainList !== null && dontAskAgainList !== void 0 && dontAskAgainList.filter(_ref => {
    let {
      action: currentAction
    } = _ref;
    return action === currentAction;
  }).length);
  return shouldNotAskAgain;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/7172ba762eaa53efaa281a5e83d30ce514b3b2bf.map
