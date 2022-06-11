function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/UserStatus/Away.tsx                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var UserStatus;
module.link("./UserStatus", {
  "default": function (v) {
    UserStatus = v;
  }
}, 1);

var Away = function (props) {
  return /*#__PURE__*/React.createElement(UserStatus, _extends({
    status: "away"
  }, props));
};

module.exportDefault(Away);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/UserStatus/6981448fc47924cbf375a3a9c891eaaf2c080061.map
