function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/context/AttachmentContext.tsx                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  AttachmentContext: () => AttachmentContext,
  useMediaUrl: () => useMediaUrl,
  useAttachmentDimensions: () => useAttachmentDimensions,
  useAttachmentIsCollapsedByDefault: () => useAttachmentIsCollapsedByDefault,
  useAttachmentAutoLoadEmbedMedia: () => useAttachmentAutoLoadEmbedMedia
});
let createContext, useContext;
module.link("react", {
  createContext(v) {
    createContext = v;
  },

  useContext(v) {
    useContext = v;
  }

}, 0);
const AttachmentContext = /*#__PURE__*/createContext({
  getURL: url => url,
  dimensions: {
    width: 480,
    height: 360
  },
  collapsedByDefault: false,
  autoLoadEmbedMedias: true
});

const useMediaUrl = () => {
  const {
    getURL
  } = useContext(AttachmentContext);
  return getURL;
};

const useAttachmentDimensions = () => useContext(AttachmentContext).dimensions;

const useAttachmentIsCollapsedByDefault = () => useContext(AttachmentContext).collapsedByDefault;

const useAttachmentAutoLoadEmbedMedia = () => useContext(AttachmentContext).autoLoadEmbedMedias;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/context/7ed88731afaaf1f37a199d825eb02199032f29ba.map
