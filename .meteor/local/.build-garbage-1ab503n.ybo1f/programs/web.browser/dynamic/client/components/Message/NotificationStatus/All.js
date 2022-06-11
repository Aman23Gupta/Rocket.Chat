function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/NotificationStatus/All.js                                                                 //
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

function All(props) {
  return /*#__PURE__*/React.createElement(NotificationStatus, _extends({
    label: "mention-all",
    bg: "#F38C39"
  }, props));
}

module.exportDefault(All);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/NotificationStatus/b3e7da99f8db68caae858762d9fb65e24285f047.map
