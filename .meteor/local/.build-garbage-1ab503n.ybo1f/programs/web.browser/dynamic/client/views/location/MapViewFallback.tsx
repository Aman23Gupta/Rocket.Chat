function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/location/MapViewFallback.tsx                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Icon;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Icon(v) {
    Icon = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let ExternalLink;
module.link("../../components/ExternalLink", {
  default(v) {
    ExternalLink = v;
  }

}, 2);
let useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);

const MapViewFallback = _ref => {
  let {
    linkUrl
  } = _ref;
  const t = useTranslation();
  return /*#__PURE__*/React.createElement(Box, {
    is: "span",
    fontScale: "p2",
    display: "inline-flex",
    alignItems: "center",
    paddingBlock: 4
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin",
    size: 20,
    color: "hint"
  }), /*#__PURE__*/React.createElement(ExternalLink, {
    to: linkUrl
  }, t('Shared_Location')));
};

module.exportDefault(MapViewFallback);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/location/1bd73e0c60142ad64af8f03492ab40586831989c.map
