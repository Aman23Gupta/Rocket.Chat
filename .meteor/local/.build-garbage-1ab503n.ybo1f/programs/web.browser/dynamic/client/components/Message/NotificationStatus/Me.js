function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/NotificationStatus/Me.js                                                                  //
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

function Me(props) {
  return /*#__PURE__*/React.createElement(NotificationStatus, _extends({
    label: "Me",
    bg: "danger-500"
  }, props));
}

module.exportDefault(Me);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/NotificationStatus/bdb91b0a53fefc191cb573425096a735e6ae216f.map
