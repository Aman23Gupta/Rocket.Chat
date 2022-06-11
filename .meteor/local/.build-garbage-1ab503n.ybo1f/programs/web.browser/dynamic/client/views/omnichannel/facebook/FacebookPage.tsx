function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/facebook/FacebookPage.tsx                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Button, ButtonGroup, FieldGroup, Divider;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Button(v) {
    Button = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  FieldGroup(v) {
    FieldGroup = v;
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
let Page;
module.link("../../../components/Page", {
  default(v) {
    Page = v;
  }

}, 2);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let PageToggleAssembler;
module.link("./PageToggleAssembler", {
  default(v) {
    PageToggleAssembler = v;
  }

}, 4);

const FacebookPage = _ref => {
  let {
    pages,
    enabled,
    hasToken,
    onToggle,
    onRefresh,
    onEnable,
    onDisable
  } = _ref;
  const t = useTranslation();
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
//# sourceMappingURL=/dynamic/client/views/omnichannel/facebook/5e42ac21dc0011dee1680d4cf3d0ef5435c7a96f.map
