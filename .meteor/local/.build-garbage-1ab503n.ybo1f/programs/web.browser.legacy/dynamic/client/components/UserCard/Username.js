function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/UserCard/Username.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["name", "status", "title"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 1);
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
var UserStatus;
module.link("../UserStatus", {
  "*": function (v) {
    UserStatus = v;
  }
}, 2);

var Username = function (_ref) {
  var name = _ref.name,
      _ref$status = _ref.status,
      status = _ref$status === void 0 ? /*#__PURE__*/React.createElement(UserStatus.Offline, null) : _ref$status,
      title = _ref.title,
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
//# sourceMappingURL=/dynamic/client/components/UserCard/a1aaa49127ab41def854b901ea13dd4e4312d9e5.map
