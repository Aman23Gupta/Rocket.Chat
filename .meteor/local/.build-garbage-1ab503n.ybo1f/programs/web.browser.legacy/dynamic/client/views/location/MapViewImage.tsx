function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/location/MapViewImage.tsx                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var ExternalLink;
module.link("../../components/ExternalLink", {
  "default": function (v) {
    ExternalLink = v;
  }
}, 1);
var useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);

var MapViewImage = function (_ref) {
  var linkUrl = _ref.linkUrl,
      imageUrl = _ref.imageUrl;
  var t = useTranslation();
  return /*#__PURE__*/React.createElement(ExternalLink, {
    to: linkUrl
  }, /*#__PURE__*/React.createElement("img", {
    src: imageUrl,
    alt: t('Shared_Location')
  }));
};

module.exportDefault(MapViewImage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/location/d9913decf2fb96ac7689a16d9b44d7c42f3f16c4.map
