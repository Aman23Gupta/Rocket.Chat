function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/hooks/useShortcutOpenMenu.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useShortcutOpenMenu: function () {
    return useShortcutOpenMenu;
  }
});
var useEffect;
module.link("react", {
  useEffect: function (v) {
    useEffect = v;
  }
}, 0);
var tinykeys;
module.link("tinykeys", {
  "default": function (v) {
    tinykeys = v;
  }
}, 1);

var useShortcutOpenMenu = function (ref) {
  useEffect(function () {
    var unsubscribe = tinykeys(ref.current, {
      Alt: function (event) {
        var _event$target$querySe;

        if (!event.target.className.includes('rcx-sidebar-item')) {
          return;
        }

        event.preventDefault();
        (_event$target$querySe = event.target.querySelector('button')) === null || _event$target$querySe === void 0 ? void 0 : _event$target$querySe.click();
      }
    });
    return function () {
      unsubscribe();
    };
  }, [ref]);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/hooks/a186d0248272d1bcec459a058dfba650288899a2.map
