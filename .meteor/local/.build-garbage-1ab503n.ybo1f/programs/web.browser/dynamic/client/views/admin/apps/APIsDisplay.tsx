function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/APIsDisplay.tsx                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Divider;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Divider(v) {
    Divider = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let useAbsoluteUrl;
module.link("../../../contexts/ServerContext", {
  useAbsoluteUrl(v) {
    useAbsoluteUrl = v;
  }

}, 2);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let apiCurlGetter;
module.link("./helpers", {
  apiCurlGetter(v) {
    apiCurlGetter = v;
  }

}, 4);

const APIsDisplay = _ref => {
  let {
    apis
  } = _ref;
  const t = useTranslation();
  const absoluteUrl = useAbsoluteUrl();
  const getApiCurl = apiCurlGetter(absoluteUrl);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Box, {
    fontScale: "h4",
    mb: "x12"
  }, t('APIs')), apis.map(api => /*#__PURE__*/React.createElement(Box, {
    key: api.path,
    mb: "x8"
  }, /*#__PURE__*/React.createElement(Box, {
    fontScale: "p2m"
  }, api.methods.join(' | ').toUpperCase(), " ", api.path), api.methods.map(method => /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Box, {
    withRichContent: true
  }, /*#__PURE__*/React.createElement("pre", null, /*#__PURE__*/React.createElement("code", null, getApiCurl(method, api).map(curlAddress => /*#__PURE__*/React.createElement(React.Fragment, null, curlAddress, /*#__PURE__*/React.createElement("br", null))))))))))));
};

module.exportDefault(APIsDisplay);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/1343b986b38d02305a1001ca3e178e87970b97ea.map
