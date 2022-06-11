function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/header/hooks/useDropdownVisibility.ts                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useDropdownVisibility: () => useDropdownVisibility
});
let useToggle, useOutsideClick;
module.link("@rocket.chat/fuselage-hooks", {
  useToggle(v) {
    useToggle = v;
  },

  useOutsideClick(v) {
    useOutsideClick = v;
  }

}, 0);
let useCallback;
module.link("react", {
  useCallback(v) {
    useCallback = v;
  }

}, 1);

const useDropdownVisibility = _ref => {
  let {
    reference,
    target
  } = _ref;
  const [isVisible, toggle] = useToggle(false);
  useOutsideClick([target, reference], useCallback(() => toggle(false), [toggle]));
  return {
    isVisible,
    toggle
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/header/hooks/661bbeec25bb21da6994891c3655c40306a04678.map
