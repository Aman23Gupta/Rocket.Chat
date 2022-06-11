function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/Files/AudioAttachment.tsx                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  AudioAttachment: () => AudioAttachment
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
let useMediaUrl;
module.link("../context/AttachmentContext", {
  useMediaUrl(v) {
    useMediaUrl = v;
  }

}, 3);
let useCollapse;
module.link("../hooks/useCollapse", {
  useCollapse(v) {
    useCollapse = v;
  }

}, 4);

const AudioAttachment = _ref => {
  let {
    title,
    audio_url: url,
    audio_type: type,
    collapsed: collapsedDefault = false,
    audio_size: size,
    description,
    title_link: link,
    title_link_download: hasDownload
  } = _ref;
  const [collapsed, collapse] = useCollapse(collapsedDefault);
  const getURL = useMediaUrl();
  return /*#__PURE__*/React.createElement(Attachment, null, /*#__PURE__*/React.createElement(MarkdownText, {
    parseEmoji: true,
    variant: "inline",
    content: description
  }), /*#__PURE__*/React.createElement(Attachment.Row, null, /*#__PURE__*/React.createElement(Attachment.Title, null, title), size && /*#__PURE__*/React.createElement(Attachment.Size, {
    size: size
  }), collapse, hasDownload && link && /*#__PURE__*/React.createElement(Attachment.Download, {
    title: title,
    href: getURL(link)
  })), !collapsed && /*#__PURE__*/React.createElement(Attachment.Content, {
    border: "none"
  }, /*#__PURE__*/React.createElement("audio", {
    controls: true
  }, /*#__PURE__*/React.createElement("source", {
    src: getURL(url),
    type: type
  }))));
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/Files/419b42ad4a0e53ada6619de418af080212e4984d.map
