function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/UserStatus/ReactiveUserStatus.tsx                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["uid"];

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
var React, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 0);
var usePresence;
module.link("../../hooks/usePresence", {
  usePresence: function (v) {
    usePresence = v;
  }
}, 1);
var UserStatus;
module.link("./UserStatus", {
  "default": function (v) {
    UserStatus = v;
  }
}, 2);

var ReactiveUserStatus = function (_ref) {
  var _usePresence;

  var uid = _ref.uid,
      props = _objectWithoutProperties(_ref, _excluded);

  var status = (_usePresence = usePresence(uid)) === null || _usePresence === void 0 ? void 0 : _usePresence.status;
  return /*#__PURE__*/React.createElement(UserStatus, _extends({
    status: status
  }, props));
};

module.exportDefault( /*#__PURE__*/memo(ReactiveUserStatus));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/UserStatus/20e40bde9d43dc39e51c6a928cbb5c18774b7d9e.map
