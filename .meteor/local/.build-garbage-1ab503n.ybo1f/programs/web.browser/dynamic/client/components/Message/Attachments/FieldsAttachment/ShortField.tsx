function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/FieldsAttachment/ShortField.tsx                                               //
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
let Field;
module.link("./Field", {
  default(v) {
    Field = v;
  }

}, 1);

const ShortField = props => /*#__PURE__*/React.createElement(Field, _extends({}, props, {
  flexGrow: 1,
  width: "50%",
  flexBasis: 1
}));

module.exportDefault(ShortField);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/FieldsAttachment/f1f19e7bb543d66b658b471120e04efcaca08c67.map
