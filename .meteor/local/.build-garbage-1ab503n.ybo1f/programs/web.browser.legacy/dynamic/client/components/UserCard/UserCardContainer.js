function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/UserCard/UserCardContainer.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);
var Box;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
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
var UserCardContainer = /*#__PURE__*/forwardRef(function () {
  function UserCardContainer(props, ref) {
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
  }

  return UserCardContainer;
}());
module.exportDefault(UserCardContainer);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/UserCard/ec1932fb96515a8cb09868b5dd849c134a482abe.map
