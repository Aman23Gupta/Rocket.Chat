function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/NotificationStatus/All.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var NotificationStatus;
module.link("./NotificationStatus", {
  "default": function (v) {
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
//# sourceMappingURL=/dynamic/client/components/Message/NotificationStatus/42c89846ad329befd5c3d804f5913c012eae4749.map
