function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Backdrop.tsx                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
module.export({
  Backdrop: () => Backdrop
});
let Modal;
module.link("@rocket.chat/fuselage", {
  Modal(v) {
    Modal = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);

const Backdrop = props => /*#__PURE__*/React.createElement(Modal.Backdrop, _extends({
  bg: "transparent"
}, props));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/7dd9e7da3345d1440251a2464a4952a3fda35614.map
