function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/APIsDisplay.tsx                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, Divider;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Divider: function (v) {
    Divider = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var useAbsoluteUrl;
module.link("../../../contexts/ServerContext", {
  useAbsoluteUrl: function (v) {
    useAbsoluteUrl = v;
  }
}, 2);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var apiCurlGetter;
module.link("./helpers", {
  apiCurlGetter: function (v) {
    apiCurlGetter = v;
  }
}, 4);

var APIsDisplay = function (_ref) {
  var apis = _ref.apis;
  var t = useTranslation();
  var absoluteUrl = useAbsoluteUrl();
  var getApiCurl = apiCurlGetter(absoluteUrl);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Box, {
    fontScale: "h4",
    mb: "x12"
  }, t('APIs')), apis.map(function (api) {
    return /*#__PURE__*/React.createElement(Box, {
      key: api.path,
      mb: "x8"
    }, /*#__PURE__*/React.createElement(Box, {
      fontScale: "p2m"
    }, api.methods.join(' | ').toUpperCase(), " ", api.path), api.methods.map(function (method) {
      return /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Box, {
        withRichContent: true
      }, /*#__PURE__*/React.createElement("pre", null, /*#__PURE__*/React.createElement("code", null, getApiCurl(method, api).map(function (curlAddress) {
        return /*#__PURE__*/React.createElement(React.Fragment, null, curlAddress, /*#__PURE__*/React.createElement("br", null));
      })))));
    }));
  })));
};

module.exportDefault(APIsDisplay);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/8e1f7c67a4cee894308469f1886fda5760a7547f.map
