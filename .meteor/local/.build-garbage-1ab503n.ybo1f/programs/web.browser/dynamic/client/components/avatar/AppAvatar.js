function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/avatar/AppAvatar.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["iconFileContent", "size", "iconFileData"];

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 0);
module.export({
  default: () => AppAvatar
});
let Box;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let BaseAvatar;
module.link("./BaseAvatar", {
  default(v) {
    BaseAvatar = v;
  }

}, 2);

function AppAvatar(_ref) {
  let {
    iconFileContent,
    size,
    iconFileData
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Box, props, /*#__PURE__*/React.createElement(BaseAvatar, {
    size: size,
    objectFit: true,
    url: iconFileContent || "data:image/png;base64,".concat(iconFileData)
  }));
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/avatar/819c68ee53c7763ac2ad5fefc7ab9343606bfbec.map
