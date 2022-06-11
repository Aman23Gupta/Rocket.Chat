function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/FieldsAttachment/index.tsx                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);
var Box;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var Field;
module.link("./Field", {
  "default": function (v) {
    Field = v;
  }
}, 2);
var ShortField;
module.link("./ShortField", {
  "default": function (v) {
    ShortField = v;
  }
}, 3);

var FieldsAttachment = function (_ref) {
  var fields = _ref.fields;
  return /*#__PURE__*/React.createElement(Box, {
    flexWrap: "wrap",
    display: "flex",
    mb: "x4",
    mi: "neg-x4"
  }, fields.map(function (field, index) {
    return field.short ? /*#__PURE__*/React.createElement(ShortField, _extends({}, field, {
      key: index
    })) : /*#__PURE__*/React.createElement(Field, _extends({}, field, {
      key: index
    }));
  }));
};

module.exportDefault(FieldsAttachment);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/FieldsAttachment/ffe791c4a2bb509c5bfd550b2f849bd7c9608728.map
