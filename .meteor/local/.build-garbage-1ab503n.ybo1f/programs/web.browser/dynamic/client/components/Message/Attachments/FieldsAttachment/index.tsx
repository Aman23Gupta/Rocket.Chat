function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/FieldsAttachment/index.tsx                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
let Box;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let Field;
module.link("./Field", {
  default(v) {
    Field = v;
  }

}, 2);
let ShortField;
module.link("./ShortField", {
  default(v) {
    ShortField = v;
  }

}, 3);

const FieldsAttachment = _ref => {
  let {
    fields
  } = _ref;
  return /*#__PURE__*/React.createElement(Box, {
    flexWrap: "wrap",
    display: "flex",
    mb: "x4",
    mi: "neg-x4"
  }, fields.map((field, index) => field.short ? /*#__PURE__*/React.createElement(ShortField, _extends({}, field, {
    key: index
  })) : /*#__PURE__*/React.createElement(Field, _extends({}, field, {
    key: index
  }))));
};

module.exportDefault(FieldsAttachment);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/FieldsAttachment/9fe277c966fd7531cf70d504c3e2ad866edca906.map
