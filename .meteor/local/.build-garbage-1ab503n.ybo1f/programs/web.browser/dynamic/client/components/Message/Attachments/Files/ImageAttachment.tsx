function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/Files/ImageAttachment.tsx                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
module.export({
  ImageAttachment: () => ImageAttachment
});
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let MarkdownText;
module.link("../../../MarkdownText", {
  default(v) {
    MarkdownText = v;
  }

}, 1);
let Attachment;
module.link("../Attachment", {
  default(v) {
    Attachment = v;
  }

}, 2);
let Image;
module.link("../components/Image", {
  default(v) {
    Image = v;
  }

}, 3);
let useMediaUrl;
module.link("../context/AttachmentContext", {
  useMediaUrl(v) {
    useMediaUrl = v;
  }

}, 4);
let useCollapse;
module.link("../hooks/useCollapse", {
  useCollapse(v) {
    useCollapse = v;
  }

}, 5);
let useLoadImage;
module.link("../hooks/useLoadImage", {
  useLoadImage(v) {
    useLoadImage = v;
  }

}, 6);

const ImageAttachment = _ref => {
  let {
    title,
    image_url: url,
    image_preview: imagePreview,
    collapsed: collapsedDefault = false,
    image_size: size,
    image_dimensions: imageDimensions = {
      height: 360,
      width: 480
    },
    description,
    title_link: link,
    title_link_download: hasDownload
  } = _ref;
  const [loadImage, setLoadImage] = useLoadImage();
  const [collapsed, collapse] = useCollapse(collapsedDefault);
  const getURL = useMediaUrl();
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
    previewUrl: "data:image/png;base64,".concat(imagePreview)
  }))));
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/Files/02731e4eca1f083d2649835aa8a495e4db2a8bc0.map
