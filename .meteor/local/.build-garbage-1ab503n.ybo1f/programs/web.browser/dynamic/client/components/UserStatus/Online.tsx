function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/UserStatus/Online.tsx                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let UserStatus;
module.link("./UserStatus", {
  default(v) {
    UserStatus = v;
  }

}, 1);

const Online = props => /*#__PURE__*/React.createElement(UserStatus, _extends({
  status: "online"
}, props));

module.exportDefault(Online);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/UserStatus/50d58b76b5b267b59ed37a2c381410e9bb4b1e1e.map
