function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/Files/ImageAttachment.tsx                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);
module.export({
  ImageAttachment: function () {
    return ImageAttachment;
  }
});
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var MarkdownText;
module.link("../../../MarkdownText", {
  "default": function (v) {
    MarkdownText = v;
  }
}, 1);
var Attachment;
module.link("../Attachment", {
  "default": function (v) {
    Attachment = v;
  }
}, 2);
var Image;
module.link("../components/Image", {
  "default": function (v) {
    Image = v;
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
var useLoadImage;
module.link("../hooks/useLoadImage", {
  useLoadImage: function (v) {
    useLoadImage = v;
  }
}, 6);

var ImageAttachment = function (_ref) {
  var title = _ref.title,
      url = _ref.image_url,
      imagePreview = _ref.image_preview,
      _ref$collapsed = _ref.collapsed,
      collapsedDefault = _ref$collapsed === void 0 ? false : _ref$collapsed,
      size = _ref.image_size,
      _ref$image_dimensions = _ref.image_dimensions,
      imageDimensions = _ref$image_dimensions === void 0 ? {
    height: 360,
    width: 480
  } : _ref$image_dimensions,
      description = _ref.description,
      link = _ref.title_link,
      hasDownload = _ref.title_link_download;

  var _useLoadImage = useLoadImage(),
      _useLoadImage2 = _slicedToArray(_useLoadImage, 2),
      loadImage = _useLoadImage2[0],
      setLoadImage = _useLoadImage2[1];

  var _useCollapse = useCollapse(collapsedDefault),
      _useCollapse2 = _slicedToArray(_useCollapse, 2),
      collapsed = _useCollapse2[0],
      collapse = _useCollapse2[1];

  var getURL = useMediaUrl();
  return /*#__PURE__*/React.createElement(Attachment, null, description && /*#__PURE__*/React.createElement(MarkdownText, {
    parseEmoji: true,
    variant: "inline",
    content: description
  }), /*#__PURE__*/React.createElement(Attachment.Row, null, /*#__PURE__*/React.createElement(Attachment.Title, null, title), size && /*#__PURE__*/React.createElement(Attachment.Size, {
    size: size
  }), collapse, hasDownload && link && /*#__PURE__*/React.createElement(Attachment.Download, {
    title: title,
    href: getURL(link)
  })), !collapsed && /*#__PURE__*/React.createElement(Attachment.Content, null, /*#__PURE__*/React.createElement(Image, _extends({}, imageDimensions, {
    loadImage: loadImage,
    setLoadImage: setLoadImage,
    dataSrc: getURL(link || url),
    src: getURL(url),
    previewUrl: "data:image/png;base64," + imagePreview
  }))));
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/Files/4c5db1772170c71f0fb20df92c04a02a02e78488.map
