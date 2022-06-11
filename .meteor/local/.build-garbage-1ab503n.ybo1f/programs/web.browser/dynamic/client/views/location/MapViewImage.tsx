function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/location/MapViewImage.tsx                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let ExternalLink;
module.link("../../components/ExternalLink", {
  default(v) {
    ExternalLink = v;
  }

}, 1);
let useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);

const MapViewImage = _ref => {
  let {
    linkUrl,
    imageUrl
  } = _ref;
  const t = useTranslation();
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
//# sourceMappingURL=/dynamic/client/views/location/36cfb7e1ea1481b5a82a311ceada4be760806f82.map
