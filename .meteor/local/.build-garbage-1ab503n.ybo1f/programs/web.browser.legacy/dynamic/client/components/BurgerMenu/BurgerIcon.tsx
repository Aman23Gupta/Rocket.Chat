function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/BurgerMenu/BurgerIcon.tsx                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var usePrefersReducedMotion;
module.link("@rocket.chat/fuselage-hooks", {
  usePrefersReducedMotion: function (v) {
    usePrefersReducedMotion = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var Line;
module.link("./Line", {
  "default": function (v) {
    Line = v;
  }
}, 2);
var Wrapper;
module.link("./Wrapper", {
  "default": function (v) {
    Wrapper = v;
  }
}, 3);

var BurgerIcon = function (_ref) {
  var children = _ref.children,
      open = _ref.open;
  var isReducedMotionPreferred = usePrefersReducedMotion();
  return /*#__PURE__*/React.createElement(Wrapper, null, /*#__PURE__*/React.createElement(Line, {
    animated: !isReducedMotionPreferred,
    moved: open
  }), /*#__PURE__*/React.createElement(Line, {
    animated: !isReducedMotionPreferred,
    moved: open
  }), /*#__PURE__*/React.createElement(Line, {
    animated: !isReducedMotionPreferred,
    moved: open
  }), children);
};

module.exportDefault(BurgerIcon);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/BurgerMenu/d70ae746ff6e306734561aa1326c223fe7eb9e9f.map
