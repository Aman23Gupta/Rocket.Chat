function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/FieldsAttachment/ShortField.tsx                                               //
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
var Field;
module.link("./Field", {
  "default": function (v) {
    Field = v;
  }
}, 1);

var ShortField = function (props) {
  return /*#__PURE__*/React.createElement(Field, _extends({}, props, {
    flexGrow: 1,
    width: "50%",
    flexBasis: 1
  }));
};

module.exportDefault(ShortField);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/FieldsAttachment/5c0bb740a20af1fdeabdeb376c4021e6322961a0.map
