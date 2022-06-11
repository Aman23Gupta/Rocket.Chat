function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/UserStatus/Offline.tsx                                                                            //
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

var Offline = function (props) {
  return /*#__PURE__*/React.createElement(UserStatus, _extends({
    status: "offline"
  }, props));
};

module.exportDefault(Offline);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/UserStatus/9387261293e69213ab12fcf991cdadf93d049e97.map
