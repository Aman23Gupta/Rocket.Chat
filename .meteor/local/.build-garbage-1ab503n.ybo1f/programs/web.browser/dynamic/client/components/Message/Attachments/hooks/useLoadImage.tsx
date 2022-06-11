function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/hooks/useLoadImage.tsx                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useLoadImage: () => useLoadImage
});
let useCallback, useState;
module.link("react", {
  useCallback(v) {
    useCallback = v;
  },

  useState(v) {
    useState = v;
  }

}, 0);
let useAttachmentAutoLoadEmbedMedia;
module.link("../context/AttachmentContext", {
  useAttachmentAutoLoadEmbedMedia(v) {
    useAttachmentAutoLoadEmbedMedia = v;
  }

}, 1);

const useLoadImage = () => {
  const [loadImage, setLoadImage] = useState(useAttachmentAutoLoadEmbedMedia());
  return [loadImage, useCallback(() => setLoadImage(true), [])];
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/hooks/498f8f0112f15b23d6d92de9402eec2b43e22903.map
