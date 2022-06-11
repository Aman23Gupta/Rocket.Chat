function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/avatar/AppAvatar.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["iconFileContent", "size", "iconFileData"];

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 0);
module.export({
  "default": function () {
    return AppAvatar;
  }
});
var Box;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var BaseAvatar;
module.link("./BaseAvatar", {
  "default": function (v) {
    BaseAvatar = v;
  }
}, 2);

function AppAvatar(_ref) {
  var iconFileContent = _ref.iconFileContent,
      size = _ref.size,
      iconFileData = _ref.iconFileData,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Box, props, /*#__PURE__*/React.createElement(BaseAvatar, {
    size: size,
    objectFit: true,
    url: iconFileContent || "data:image/png;base64," + iconFileData
  }));
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/avatar/4f7be43892f996be3e7130751d0c06451231f9c1.map
