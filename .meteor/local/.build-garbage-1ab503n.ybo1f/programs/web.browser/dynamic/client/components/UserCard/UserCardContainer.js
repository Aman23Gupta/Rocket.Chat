function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/UserCard/UserCardContainer.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
let Box;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  }

}, 0);
let React, forwardRef;
module.link("react", {
  default(v) {
    React = v;
  },

  forwardRef(v) {
    forwardRef = v;
  }

}, 1);
const UserCardContainer = /*#__PURE__*/forwardRef(function UserCardContainer(props, ref) {
  return /*#__PURE__*/React.createElement(Box, _extends({
    "rcx-user-card": true,
    bg: "surface",
    elevation: "2",
    p: "x24",
    display: "flex",
    borderRadius: "x2",
    width: "439px"
  }, props, {
    ref: ref
  }));
});
module.exportDefault(UserCardContainer);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/UserCard/c27fd8930025aba8bc41bea2df3d779486b72e3c.map
