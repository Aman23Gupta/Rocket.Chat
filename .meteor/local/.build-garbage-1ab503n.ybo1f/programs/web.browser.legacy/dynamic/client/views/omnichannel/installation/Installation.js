function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/installation/Installation.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var Page;
module.link("../../../components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 2);
var RawText;
module.link("../../../components/RawText", {
  "default": function (v) {
    RawText = v;
  }
}, 3);
var TextCopy;
module.link("../../../components/TextCopy", {
  "default": function (v) {
    TextCopy = v;
  }
}, 4);
var useSetting;
module.link("../../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 5);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 6);
var Wrapper;
module.link("./Wrapper", {
  "default": function (v) {
    Wrapper = v;
  }
}, 7);

var Installation = function () {
  var _useSetting;

  var t = useTranslation();
  var siteUrl = (_useSetting = useSetting('Site_Url')) === null || _useSetting === void 0 ? void 0 : _useSetting.replace(/\/$/, '');
  var installString = "<!-- Start of Rocket.Chat Livechat Script -->\n\t<script type=\"text/javascript\">\n\t(function(w, d, s, u) {\n\t\tw.RocketChat = function(c) { w.RocketChat._.push(c) }; w.RocketChat._ = []; w.RocketChat.url = u;\n\t\tvar h = d.getElementsByTagName(s)[0], j = d.createElement(s);\n\t\tj.async = true; j.src = '" + siteUrl + "/livechat/rocketchat-livechat.min.js?_=201903270000';\n\t\th.parentNode.insertBefore(j, h);\n\t})(window, document, 'script', '" + siteUrl + "/livechat');\n\t</script>";
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
//# sourceMappingURL=/dynamic/client/views/omnichannel/installation/42bc582168204dc51d5036030ff163ff15b53267.map
