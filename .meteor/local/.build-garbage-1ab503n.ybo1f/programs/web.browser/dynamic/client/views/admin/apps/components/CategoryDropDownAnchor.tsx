function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/components/CategoryDropDownAnchor.tsx                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
let ActionButton;
module.link("@rocket.chat/fuselage", {
  ActionButton(v) {
    ActionButton = v;
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
const CategoryDropDownAnchor = /*#__PURE__*/forwardRef(function CategoryDropDownAnchor(props, ref) {
  return /*#__PURE__*/React.createElement(ActionButton, _extends({
    ref: ref,
    icon: "doner"
  }, props));
});
module.exportDefault(CategoryDropDownAnchor);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/components/1e3364f8bcc3f9a6ea7f0fbb3096ba2c33490816.map
