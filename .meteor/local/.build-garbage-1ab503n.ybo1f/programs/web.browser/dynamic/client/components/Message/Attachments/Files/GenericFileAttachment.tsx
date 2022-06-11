function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/Files/GenericFileAttachment.tsx                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  GenericFileAttachment: () => GenericFileAttachment
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

const GenericFileAttachment = _ref => {
  let {
    title,
    // collapsed: collapsedDefault = false,
    description,
    title_link: link,
    title_link_download: hasDownload,
    file: {
      size // format,
      // name,

    } = {}
  } = _ref;
  // const [collapsed, collapse] = useCollapse(collapsedDefault);
  const getURL = useMediaUrl();
  return /*#__PURE__*/React.createElement(Attachment, null, description && /*#__PURE__*/React.createElement(MarkdownText, {
    parseEmoji: true,
    content: description
  }), /*#__PURE__*/React.createElement(Attachment.Row, null, hasDownload && link ? /*#__PURE__*/React.createElement(Attachment.TitleLink, {
    link: getURL(link),
    title: title
  }) : /*#__PURE__*/React.createElement(Attachment.Title, null, title), size && /*#__PURE__*/React.createElement(Attachment.Size, {
    size: size
  }), hasDownload && link && /*#__PURE__*/React.createElement(Attachment.Download, {
    title: title,
    href: getURL(link)
  })));
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/Files/6b183f8381a71653af88d23158bedff9ef7bc9ca.map
