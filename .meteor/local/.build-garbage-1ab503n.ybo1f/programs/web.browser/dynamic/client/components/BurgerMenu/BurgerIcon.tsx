function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/BurgerMenu/BurgerIcon.tsx                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let usePrefersReducedMotion;
module.link("@rocket.chat/fuselage-hooks", {
  usePrefersReducedMotion(v) {
    usePrefersReducedMotion = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let Line;
module.link("./Line", {
  default(v) {
    Line = v;
  }

}, 2);
let Wrapper;
module.link("./Wrapper", {
  default(v) {
    Wrapper = v;
  }

}, 3);

const BurgerIcon = _ref => {
  let {
    children,
    open
  } = _ref;
  const isReducedMotionPreferred = usePrefersReducedMotion();
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
//# sourceMappingURL=/dynamic/client/components/BurgerMenu/c5b362a5c49920e68c3b52ed2e05939d7e7b990a.map
