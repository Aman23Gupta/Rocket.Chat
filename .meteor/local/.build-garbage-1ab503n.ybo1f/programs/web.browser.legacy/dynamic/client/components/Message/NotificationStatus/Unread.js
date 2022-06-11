function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/NotificationStatus/Unread.js                                                              //
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

function Unread(props) {
  return /*#__PURE__*/React.createElement(NotificationStatus, _extends({
    label: "Unread",
    bg: "primary-500"
  }, props));
}

module.exportDefault(Unread);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/NotificationStatus/63efb92c2abc492642deb0a68e07a7ce602aaf49.map
