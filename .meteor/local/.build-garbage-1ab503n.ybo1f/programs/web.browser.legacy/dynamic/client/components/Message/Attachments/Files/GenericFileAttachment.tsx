function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/Files/GenericFileAttachment.tsx                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  GenericFileAttachment: function () {
    return GenericFileAttachment;
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
var useMediaUrl;
module.link("../context/AttachmentContext", {
  useMediaUrl: function (v) {
    useMediaUrl = v;
  }
}, 3);

var GenericFileAttachment = function (_ref) {
  var title = _ref.title,
      description = _ref.description,
      link = _ref.title_link,
      hasDownload = _ref.title_link_download,
      _ref$file = _ref.file;
  _ref$file = _ref$file === void 0 ? {} : _ref$file;
  var size = _ref$file.size;
  // const [collapsed, collapse] = useCollapse(collapsedDefault);
  var getURL = useMediaUrl();
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
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/Files/ee680bd7a3eb54b61cc5bd7630cde40c7b03a53c.map
