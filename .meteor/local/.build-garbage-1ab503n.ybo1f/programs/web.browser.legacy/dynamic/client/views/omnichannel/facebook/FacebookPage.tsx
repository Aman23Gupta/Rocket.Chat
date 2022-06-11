function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/facebook/FacebookPage.tsx                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, Button, ButtonGroup, FieldGroup, Divider;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Button: function (v) {
    Button = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  FieldGroup: function (v) {
    FieldGroup = v;
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
var Page;
module.link("../../../components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 2);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var PageToggleAssembler;
module.link("./PageToggleAssembler", {
  "default": function (v) {
    PageToggleAssembler = v;
  }
}, 4);

var FacebookPage = function (_ref) {
  var pages = _ref.pages,
      enabled = _ref.enabled,
      hasToken = _ref.hasToken,
      onToggle = _ref.onToggle,
      onRefresh = _ref.onRefresh,
      onEnable = _ref.onEnable,
      onDisable = _ref.onDisable;
  var t = useTranslation();
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Facebook')
  }), /*#__PURE__*/React.createElement(Page.ScrollableContentWithShadow, null, /*#__PURE__*/React.createElement(Box, {
    maxWidth: "x600",
    w: "full",
    alignSelf: "center"
  }, !enabled && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    stretch: true,
    mb: "x8"
  }, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: onEnable,
    disabled: !hasToken
  }, t('Enable'))), !hasToken && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("p", null, t('You_have_to_set_an_API_token_first_in_order_to_use_the_integration')), /*#__PURE__*/React.createElement("p", null, t('Please_go_to_the_Administration_page_then_Livechat_Facebook')))), enabled && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
    fontScale: "h2",
    mbe: "x8"
  }, t('Pages')), pages !== null && pages !== void 0 && pages.length ? /*#__PURE__*/React.createElement(FieldGroup, null, /*#__PURE__*/React.createElement(PageToggleAssembler, {
    pages: pages,
    onToggle: onToggle
  })) : t('No_pages_yet_Try_hitting_Reload_Pages_button'), /*#__PURE__*/React.createElement(Box, {
    w: "full",
    mb: "x16"
  }, /*#__PURE__*/React.createElement(Divider, null)), /*#__PURE__*/React.createElement(ButtonGroup, {
    stretch: true,
    vertical: true
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onRefresh
  }, t('Reload_Pages')), /*#__PURE__*/React.createElement(Button, {
    danger: true,
    onClick: onDisable
  }, t('Disable')))))));
};

module.exportDefault(FacebookPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/facebook/fed6c44f4fc4dee0d7c3cb0654f1e8aaa365c2ae.map
