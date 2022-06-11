function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/context/AttachmentContext.tsx                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  AttachmentContext: function () {
    return AttachmentContext;
  },
  useMediaUrl: function () {
    return useMediaUrl;
  },
  useAttachmentDimensions: function () {
    return useAttachmentDimensions;
  },
  useAttachmentIsCollapsedByDefault: function () {
    return useAttachmentIsCollapsedByDefault;
  },
  useAttachmentAutoLoadEmbedMedia: function () {
    return useAttachmentAutoLoadEmbedMedia;
  }
});
var createContext, useContext;
module.link("react", {
  createContext: function (v) {
    createContext = v;
  },
  useContext: function (v) {
    useContext = v;
  }
}, 0);
var AttachmentContext = /*#__PURE__*/createContext({
  getURL: function (url) {
    return url;
  },
  dimensions: {
    width: 480,
    height: 360
  },
  collapsedByDefault: false,
  autoLoadEmbedMedias: true
});

var useMediaUrl = function () {
  var _useContext = useContext(AttachmentContext),
      getURL = _useContext.getURL;

  return getURL;
};

var useAttachmentDimensions = function () {
  return useContext(AttachmentContext).dimensions;
};

var useAttachmentIsCollapsedByDefault = function () {
  return useContext(AttachmentContext).collapsedByDefault;
};

var useAttachmentAutoLoadEmbedMedia = function () {
  return useContext(AttachmentContext).autoLoadEmbedMedias;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/context/dbf4771c77603fed9286269f6f95257ddbb45d3c.map
