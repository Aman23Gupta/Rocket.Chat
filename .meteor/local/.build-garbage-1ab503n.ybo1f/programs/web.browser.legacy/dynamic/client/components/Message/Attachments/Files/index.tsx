function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/Files/index.tsx                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  FileAttachment: function () {
    return FileAttachment;
  },
  GenericFileAttachment: function () {
    return GenericFileAttachment;
  },
  ImageAttachment: function () {
    return ImageAttachment;
  },
  VideoAttachment: function () {
    return VideoAttachment;
  }
});
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var isFileAudioAttachment;
module.link("../../../../../definition/IMessage/MessageAttachment/Files/AudioAttachmentProps", {
  isFileAudioAttachment: function (v) {
    isFileAudioAttachment = v;
  }
}, 1);
var isFileImageAttachment;
module.link("../../../../../definition/IMessage/MessageAttachment/Files/ImageAttachmentProps", {
  isFileImageAttachment: function (v) {
    isFileImageAttachment = v;
  }
}, 2);
var isFileVideoAttachment;
module.link("../../../../../definition/IMessage/MessageAttachment/Files/VideoAttachmentProps", {
  isFileVideoAttachment: function (v) {
    isFileVideoAttachment = v;
  }
}, 3);
var AudioAttachment;
module.link("./AudioAttachment", {
  AudioAttachment: function (v) {
    AudioAttachment = v;
  }
}, 4);
var GenericFileAttachment;
module.link("./GenericFileAttachment", {
  GenericFileAttachment: function (v) {
    GenericFileAttachment = v;
  }
}, 5);
var ImageAttachment;
module.link("./ImageAttachment", {
  ImageAttachment: function (v) {
    ImageAttachment = v;
  }
}, 6);
var VideoAttachment;
module.link("./VideoAttachment", {
  VideoAttachment: function (v) {
    VideoAttachment = v;
  }
}, 7);

var FileAttachment = function (attachment) {
  if (isFileImageAttachment(attachment)) {
    return /*#__PURE__*/React.createElement(ImageAttachment, attachment);
  }

  if (isFileAudioAttachment(attachment)) {
    return /*#__PURE__*/React.createElement(AudioAttachment, attachment);
  }

  if (isFileVideoAttachment(attachment)) {
    return /*#__PURE__*/React.createElement(VideoAttachment, attachment);
  } // if (isFilePDFAttachment(attachment)) { return <PDFAttachment {...attachment} />; }


  return /*#__PURE__*/React.createElement(GenericFileAttachment, attachment);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/Files/af47125c92af428dc7c9727c23a8b1cfd28fb31c.map
