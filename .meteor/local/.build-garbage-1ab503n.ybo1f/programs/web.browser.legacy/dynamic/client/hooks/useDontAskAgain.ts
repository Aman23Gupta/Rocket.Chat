function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/useDontAskAgain.ts                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useDontAskAgain: function () {
    return useDontAskAgain;
  }
});
var useUserPreference;
module.link("../contexts/UserContext", {
  useUserPreference: function (v) {
    useUserPreference = v;
  }
}, 0);

var useDontAskAgain = function (action) {
  var dontAskAgainList = useUserPreference('dontAskAgainList');
  var shouldNotAskAgain = !!(dontAskAgainList !== null && dontAskAgainList !== void 0 && dontAskAgainList.filter(function (_ref) {
    var currentAction = _ref.action;
    return action === currentAction;
  }).length);
  return shouldNotAskAgain;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/8ff26cab2522f0771c126c92683b96b05e11218a.map
