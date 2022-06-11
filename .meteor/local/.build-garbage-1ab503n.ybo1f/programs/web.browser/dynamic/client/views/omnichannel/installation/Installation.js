function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/installation/Installation.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let Page;
module.link("../../../components/Page", {
  default(v) {
    Page = v;
  }

}, 2);
let RawText;
module.link("../../../components/RawText", {
  default(v) {
    RawText = v;
  }

}, 3);
let TextCopy;
module.link("../../../components/TextCopy", {
  default(v) {
    TextCopy = v;
  }

}, 4);
let useSetting;
module.link("../../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 5);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 6);
let Wrapper;
module.link("./Wrapper", {
  default(v) {
    Wrapper = v;
  }

}, 7);

const Installation = () => {
  var _useSetting;

  const t = useTranslation();
  const siteUrl = (_useSetting = useSetting('Site_Url')) === null || _useSetting === void 0 ? void 0 : _useSetting.replace(/\/$/, '');
  const installString = "<!-- Start of Rocket.Chat Livechat Script -->\n\t<script type=\"text/javascript\">\n\t(function(w, d, s, u) {\n\t\tw.RocketChat = function(c) { w.RocketChat._.push(c) }; w.RocketChat._ = []; w.RocketChat.url = u;\n\t\tvar h = d.getElementsByTagName(s)[0], j = d.createElement(s);\n\t\tj.async = true; j.src = '".concat(siteUrl, "/livechat/rocketchat-livechat.min.js?_=201903270000';\n\t\th.parentNode.insertBefore(j, h);\n\t})(window, document, 'script', '").concat(siteUrl, "/livechat');\n\t</script>");
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Installation')
  }), /*#__PURE__*/React.createElement(Page.ScrollableContentWithShadow, null, /*#__PURE__*/React.createElement(Box, {
    maxWidth: "x600",
    alignSelf: "center"
  }, /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(RawText, null, t('To_install_RocketChat_Livechat_in_your_website_copy_paste_this_code_above_the_last_body_tag_on_your_site'))), /*#__PURE__*/React.createElement(TextCopy, {
    pi: "none",
    text: installString,
    wrapper: Wrapper
  }))));
};

module.exportDefault(Installation);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/installation/3159a938d5522319e98e8e6f760e2f3f0856b0fe.map
