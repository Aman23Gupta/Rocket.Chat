function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/Attachment/Attachment.tsx                                                     //
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
var useAttachmentDimensions;
module.link("../context/AttachmentContext", {
  useAttachmentDimensions: function (v) {
    useAttachmentDimensions = v;
  }
}, 2);

var Attachment = function (props) {
  var _useAttachmentDimensi = useAttachmentDimensions(),
      width = _useAttachmentDimensi.width;

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
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/Attachment/0d56a53f996cde49ee3bf0c52b2469b2178ec99b.map
