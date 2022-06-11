function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/Attachment/Attachment.tsx                                                     //
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
let useAttachmentDimensions;
module.link("../context/AttachmentContext", {
  useAttachmentDimensions(v) {
    useAttachmentDimensions = v;
  }

}, 2);

const Attachment = props => {
  const {
    width
  } = useAttachmentDimensions();
  return /*#__PURE__*/React.createElement(Box, _extends({
    "rcx-message-attachment": true,
    mb: "x4",
    maxWidth: width,
    width: "full",
    display: "flex",
    overflow: "hidden",
    flexDirection: "column"
  }, props));
};

module.exportDefault(Attachment);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/Attachment/effb928b00e6b63576a9cd4db27c21e90763a646.map
