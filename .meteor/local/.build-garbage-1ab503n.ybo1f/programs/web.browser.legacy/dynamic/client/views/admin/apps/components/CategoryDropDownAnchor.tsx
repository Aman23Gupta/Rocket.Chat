function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/components/CategoryDropDownAnchor.tsx                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);
var ActionButton;
module.link("@rocket.chat/fuselage", {
  ActionButton: function (v) {
    ActionButton = v;
  }
}, 0);
var React, forwardRef;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  forwardRef: function (v) {
    forwardRef = v;
  }
}, 1);
var CategoryDropDownAnchor = /*#__PURE__*/forwardRef(function () {
  function CategoryDropDownAnchor(props, ref) {
    return /*#__PURE__*/React.createElement(ActionButton, _extends({
      ref: ref,
      icon: "doner"
    }, props));
  }

  return CategoryDropDownAnchor;
}());
module.exportDefault(CategoryDropDownAnchor);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/components/0119567c69ff4416615b8d25e967f2693d590d6f.map
