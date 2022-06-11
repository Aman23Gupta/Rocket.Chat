function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/location/MapViewFallback.tsx                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, Icon;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Icon: function (v) {
    Icon = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var ExternalLink;
module.link("../../components/ExternalLink", {
  "default": function (v) {
    ExternalLink = v;
  }
}, 2);
var useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);

var MapViewFallback = function (_ref) {
  var linkUrl = _ref.linkUrl;
  var t = useTranslation();
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
//# sourceMappingURL=/dynamic/client/views/location/133acf63a03e50858d934c6c501b94d04a9163e8.map
