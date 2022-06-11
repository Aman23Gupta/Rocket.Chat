function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/Files/VideoAttachment.tsx                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
module.export({
  VideoAttachment: function () {
    return VideoAttachment;
  }
});
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
var MarkdownText;
module.link("../../../MarkdownText", {
  "default": function (v) {
    MarkdownText = v;
  }
}, 2);
var Attachment;
module.link("../Attachment", {
  "default": function (v) {
    Attachment = v;
  }
}, 3);
var useMediaUrl;
module.link("../context/AttachmentContext", {
  useMediaUrl: function (v) {
    useMediaUrl = v;
  }
}, 4);
var useCollapse;
module.link("../hooks/useCollapse", {
  useCollapse: function (v) {
    useCollapse = v;
  }
}, 5);

var VideoAttachment = function (_ref) {
  var title = _ref.title,
      url = _ref.video_url,
      type = _ref.video_type,
      _ref$collapsed = _ref.collapsed,
      collapsedDefault = _ref$collapsed === void 0 ? false : _ref$collapsed,
      size = _ref.video_size,
      description = _ref.description,
      link = _ref.title_link,
      hasDownload = _ref.title_link_download;

  var _useCollapse = useCollapse(collapsedDefault),
      _useCollapse2 = _slicedToArray(_useCollapse, 2),
      collapsed = _useCollapse2[0],
      collapse = _useCollapse2[1]; // useTranslation();


  var getURL = useMediaUrl();
  return /*#__PURE__*/React.createElement(Attachment, null, /*#__PURE__*/React.createElement(Attachment.Row, null, /*#__PURE__*/React.createElement(Attachment.Title, null, title), size && /*#__PURE__*/React.createElement(Attachment.Size, {
    size: size
  }), collapse, hasDownload && link && /*#__PURE__*/React.createElement(Attachment.Download, {
    title: title,
    href: getURL(link)
  })), !collapsed && /*#__PURE__*/React.createElement(Attachment.Content, {
    width: "full"
  }, /*#__PURE__*/React.createElement(Box, {
    is: "video",
    width: "full",
    controls: true
  }, /*#__PURE__*/React.createElement("source", {
    src: getURL(url),
    type: type
  })), description && /*#__PURE__*/React.createElement(Attachment.Details, {
    is: "figcaption"
  }, /*#__PURE__*/React.createElement(MarkdownText, {
    parseEmoji: true,
    variant: "inline",
    content: description
  }))));
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/Files/27631c0e99fba73f18248caffce1f6653d03a649.map
