function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/NotificationStatus/Unread.js                                                              //
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
let NotificationStatus;
module.link("./NotificationStatus", {
  default(v) {
    NotificationStatus = v;
  }

}, 1);

function Unread(props) {
  return /*#__PURE__*/React.createElement(NotificationStatus, _extends({
    label: "Unread",
    bg: "primary-500"
  }, props));
}

module.exportDefault(Unread);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/NotificationStatus/b4039189db9d9724fb1fa8324428be91476a3206.map
