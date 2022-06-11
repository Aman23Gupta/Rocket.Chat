function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/hooks/useLoadImage.tsx                                                        //
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
  useLoadImage: function () {
    return useLoadImage;
  }
});
var useCallback, useState;
module.link("react", {
  useCallback: function (v) {
    useCallback = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 0);
var useAttachmentAutoLoadEmbedMedia;
module.link("../context/AttachmentContext", {
  useAttachmentAutoLoadEmbedMedia: function (v) {
    useAttachmentAutoLoadEmbedMedia = v;
  }
}, 1);

var useLoadImage = function () {
  var _useState = useState(useAttachmentAutoLoadEmbedMedia()),
      _useState2 = _slicedToArray(_useState, 2),
      loadImage = _useState2[0],
      setLoadImage = _useState2[1];

  return [loadImage, useCallback(function () {
    return setLoadImage(true);
  }, [])];
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/hooks/1a18782b39704f337b237db4dfbd3962e5ec45c1.map
