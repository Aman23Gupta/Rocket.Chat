function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/UserStatus/Busy.tsx                                                                               //
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

const Busy = props => /*#__PURE__*/React.createElement(UserStatus, _extends({
  status: "busy"
}, props));

module.exportDefault(Busy);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/UserStatus/6122f876f47d3e35981023d153e7502b6f2427c9.map
