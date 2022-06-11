function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/header/hooks/useDropdownVisibility.ts                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
module.export({
  useDropdownVisibility: function () {
    return useDropdownVisibility;
  }
});
var useToggle, useOutsideClick;
module.link("@rocket.chat/fuselage-hooks", {
  useToggle: function (v) {
    useToggle = v;
  },
  useOutsideClick: function (v) {
    useOutsideClick = v;
  }
}, 0);
var useCallback;
module.link("react", {
  useCallback: function (v) {
    useCallback = v;
  }
}, 1);

var useDropdownVisibility = function (_ref) {
  var reference = _ref.reference,
      target = _ref.target;

  var _useToggle = useToggle(false),
      _useToggle2 = _slicedToArray(_useToggle, 2),
      isVisible = _useToggle2[0],
      toggle = _useToggle2[1];

  useOutsideClick([target, reference], useCallback(function () {
    return toggle(false);
  }, [toggle]));
  return {
    isVisible: isVisible,
    toggle: toggle
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/header/hooks/b0bfe7411a55abb1c496eb4268a312f967f04f0d.map
