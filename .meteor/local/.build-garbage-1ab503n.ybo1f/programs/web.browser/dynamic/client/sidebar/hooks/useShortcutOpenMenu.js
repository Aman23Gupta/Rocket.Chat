function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/hooks/useShortcutOpenMenu.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useShortcutOpenMenu: () => useShortcutOpenMenu
});
let useEffect;
module.link("react", {
  useEffect(v) {
    useEffect = v;
  }

}, 0);
let tinykeys;
module.link("tinykeys", {
  default(v) {
    tinykeys = v;
  }

}, 1);

const useShortcutOpenMenu = ref => {
  useEffect(() => {
    const unsubscribe = tinykeys(ref.current, {
      Alt: event => {
        var _event$target$querySe;

        if (!event.target.className.includes('rcx-sidebar-item')) {
          return;
        }

        event.preventDefault();
        (_event$target$querySe = event.target.querySelector('button')) === null || _event$target$querySe === void 0 ? void 0 : _event$target$querySe.click();
      }
    });
    return () => {
      unsubscribe();
    };
  }, [ref]);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/hooks/06183a660bc0f4320066e8d2935c7b168c04c658.map
