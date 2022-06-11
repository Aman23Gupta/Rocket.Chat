function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/NotificationStatus/Me.js                                                                  //
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

function Me(props) {
  return /*#__PURE__*/React.createElement(NotificationStatus, _extends({
    label: "Me",
    bg: "danger-500"
  }, props));
}

module.exportDefault(Me);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/NotificationStatus/a4a979761676586b3f6ee01992c2b146e72dcfc0.map
