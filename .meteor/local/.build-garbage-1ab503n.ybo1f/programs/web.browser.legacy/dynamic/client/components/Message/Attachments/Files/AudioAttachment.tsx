function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/Files/AudioAttachment.tsx                                                     //
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
  AudioAttachment: function () {
    return AudioAttachment;
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
var useCollapse;
module.link("../hooks/useCollapse", {
  useCollapse: function (v) {
    useCollapse = v;
  }
}, 4);

var AudioAttachment = function (_ref) {
  var title = _ref.title,
      url = _ref.audio_url,
      type = _ref.audio_type,
      _ref$collapsed = _ref.collapsed,
      collapsedDefault = _ref$collapsed === void 0 ? false : _ref$collapsed,
      size = _ref.audio_size,
      description = _ref.description,
      link = _ref.title_link,
      hasDownload = _ref.title_link_download;

  var _useCollapse = useCollapse(collapsedDefault),
      _useCollapse2 = _slicedToArray(_useCollapse, 2),
      collapsed = _useCollapse2[0],
      collapse = _useCollapse2[1];

  var getURL = useMediaUrl();
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
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/Files/d62832292bcf470cb4ba82a3361f4844dbd2c88e.map
