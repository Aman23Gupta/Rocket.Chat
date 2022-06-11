function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/root/MainLayout/useCustomScript.ts                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useCustomScript: () => useCustomScript
});
let useEffect;
module.link("react", {
  useEffect(v) {
    useEffect = v;
  }

}, 0);
let fireGlobalEvent;
module.link("../../../lib/utils/fireGlobalEvent", {
  fireGlobalEvent(v) {
    fireGlobalEvent = v;
  }

}, 1);

const useCustomScript = () => {
  useEffect(() => {
    fireGlobalEvent('Custom_Script_Logged_In');
    return () => {
      fireGlobalEvent('Custom_Script_Logged_Out');
    };
  }, []);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/root/MainLayout/f6895a4f02921caff78a7f2aba1b75dc232596ce.map
