function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/UserCard/Username.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["name", "status", "title"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
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
let UserStatus;
module.link("../UserStatus", {
  "*"(v) {
    UserStatus = v;
  }

}, 2);

const Username = _ref => {
  let {
    name,
    status = /*#__PURE__*/React.createElement(UserStatus.Offline, null),
    title
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Box, _extends({}, props, {
    display: "flex",
    title: title,
    flexShrink: 0,
    alignItems: "center",
    fontScale: "h4",
    color: "default",
    withTruncatedText: true
  }), status, ' ', /*#__PURE__*/React.createElement(Box, {
    mis: "x8",
    flexGrow: 1,
    withTruncatedText: true
  }, name));
};

module.exportDefault(Username);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/UserCard/fd80dc9ac5f025948bc600580e0725b9e44bcfd2.map
