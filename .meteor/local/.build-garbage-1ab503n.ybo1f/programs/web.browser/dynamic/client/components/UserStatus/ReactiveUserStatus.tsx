function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/UserStatus/ReactiveUserStatus.tsx                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["uid"];

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
let React, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  }

}, 0);
let usePresence;
module.link("../../hooks/usePresence", {
  usePresence(v) {
    usePresence = v;
  }

}, 1);
let UserStatus;
module.link("./UserStatus", {
  default(v) {
    UserStatus = v;
  }

}, 2);

const ReactiveUserStatus = _ref => {
  var _usePresence;

  let {
    uid
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const status = (_usePresence = usePresence(uid)) === null || _usePresence === void 0 ? void 0 : _usePresence.status;
  return /*#__PURE__*/React.createElement(UserStatus, _extends({
    status: status
  }, props));
};

module.exportDefault( /*#__PURE__*/memo(ReactiveUserStatus));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/UserStatus/c0c3c8cb6c6a3d3d83f9b3b59131e3f2430864df.map
