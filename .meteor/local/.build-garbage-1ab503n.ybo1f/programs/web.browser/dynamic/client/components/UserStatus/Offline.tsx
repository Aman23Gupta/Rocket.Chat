function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/UserStatus/Offline.tsx                                                                            //
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

const Offline = props => /*#__PURE__*/React.createElement(UserStatus, _extends({
  status: "offline"
}, props));

module.exportDefault(Offline);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/UserStatus/65d4088be621e0518ba06ece8773df663601a6a1.map
