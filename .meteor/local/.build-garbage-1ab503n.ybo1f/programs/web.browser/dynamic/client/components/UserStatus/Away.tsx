function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/UserStatus/Away.tsx                                                                               //
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

const Away = props => /*#__PURE__*/React.createElement(UserStatus, _extends({
  status: "away"
}, props));

module.exportDefault(Away);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/UserStatus/4643156847ebfd5f476db251e5e7b21f86353303.map
