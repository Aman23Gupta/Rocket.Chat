function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/UserStatus/Online.tsx                                                                             //
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

var Online = function (props) {
  return /*#__PURE__*/React.createElement(UserStatus, _extends({
    status: "online"
  }, props));
};

module.exportDefault(Online);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/UserStatus/06534d8ab8b362220cd2139aefd305b37630f8e5.map
