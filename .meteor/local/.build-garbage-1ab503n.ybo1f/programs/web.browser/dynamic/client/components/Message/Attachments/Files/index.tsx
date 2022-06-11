function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/Files/index.tsx                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  FileAttachment: () => FileAttachment,
  GenericFileAttachment: () => GenericFileAttachment,
  ImageAttachment: () => ImageAttachment,
  VideoAttachment: () => VideoAttachment
});
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let isFileAudioAttachment;
module.link("../../../../../definition/IMessage/MessageAttachment/Files/AudioAttachmentProps", {
  isFileAudioAttachment(v) {
    isFileAudioAttachment = v;
  }

}, 1);
let isFileImageAttachment;
module.link("../../../../../definition/IMessage/MessageAttachment/Files/ImageAttachmentProps", {
  isFileImageAttachment(v) {
    isFileImageAttachment = v;
  }

}, 2);
let isFileVideoAttachment;
module.link("../../../../../definition/IMessage/MessageAttachment/Files/VideoAttachmentProps", {
  isFileVideoAttachment(v) {
    isFileVideoAttachment = v;
  }

}, 3);
let AudioAttachment;
module.link("./AudioAttachment", {
  AudioAttachment(v) {
    AudioAttachment = v;
  }

}, 4);
let GenericFileAttachment;
module.link("./GenericFileAttachment", {
  GenericFileAttachment(v) {
    GenericFileAttachment = v;
  }

}, 5);
let ImageAttachment;
module.link("./ImageAttachment", {
  ImageAttachment(v) {
    ImageAttachment = v;
  }

}, 6);
let VideoAttachment;
module.link("./VideoAttachment", {
  VideoAttachment(v) {
    VideoAttachment = v;
  }

}, 7);

const FileAttachment = attachment => {
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
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/Files/a3fa774b417a8d32b8fd0c5568ddf322aa170282.map
