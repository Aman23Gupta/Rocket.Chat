function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/Files/VideoAttachment.tsx                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  VideoAttachment: () => VideoAttachment
});
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
let MarkdownText;
module.link("../../../MarkdownText", {
  default(v) {
    MarkdownText = v;
  }

}, 2);
let Attachment;
module.link("../Attachment", {
  default(v) {
    Attachment = v;
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

const VideoAttachment = _ref => {
  let {
    title,
    video_url: url,
    video_type: type,
    collapsed: collapsedDefault = false,
    video_size: size,
    description,
    title_link: link,
    title_link_download: hasDownload
  } = _ref;
  const [collapsed, collapse] = useCollapse(collapsedDefault); // useTranslation();

  const getURL = useMediaUrl();
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
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/Files/0cd48752d1d28c7104988d3899b9336b0ee992aa.map
