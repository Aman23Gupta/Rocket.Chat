function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/root/MainLayout/useCustomScript.ts                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useCustomScript: function () {
    return useCustomScript;
  }
});
var useEffect;
module.link("react", {
  useEffect: function (v) {
    useEffect = v;
  }
}, 0);
var fireGlobalEvent;
module.link("../../../lib/utils/fireGlobalEvent", {
  fireGlobalEvent: function (v) {
    fireGlobalEvent = v;
  }
}, 1);

var useCustomScript = function () {
  useEffect(function () {
    fireGlobalEvent('Custom_Script_Logged_In');
    return function () {
      fireGlobalEvent('Custom_Script_Logged_Out');
    };
  }, []);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/root/MainLayout/00ff4250158de9ef95f09230cefeba5e53aaa12f.map
