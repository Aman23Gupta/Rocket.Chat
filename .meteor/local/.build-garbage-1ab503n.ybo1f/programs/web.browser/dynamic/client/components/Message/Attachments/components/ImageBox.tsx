function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/components/ImageBox.tsx                                                       //
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

const ImageBox = props => /*#__PURE__*/React.createElement(Box, _extends({
  display: "flex",
  maxWidth: "full",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  alignContent: "center",
  borderRadius: "x2",
  borderWidth: "x2",
  borderStyle: "solid",
  borderColor: "neutral-200"
}, props));

module.exportDefault(ImageBox);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/components/839075665e4830704bf0706df614432f2b8020f4.map
