function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/customEmoji/CustomEmojiRoute.tsx                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Button, Icon;
module.link("@rocket.chat/fuselage", {
  Button(v) {
    Button = v;
  },

  Icon(v) {
    Icon = v;
  }

}, 0);
let React, useCallback, useRef;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useRef(v) {
    useRef = v;
  }

}, 1);
let NotAuthorizedPage;
module.link("../../../components/NotAuthorizedPage", {
  default(v) {
    NotAuthorizedPage = v;
  }

}, 2);
let Page;
module.link("../../../components/Page", {
  default(v) {
    Page = v;
  }

}, 3);
let VerticalBar;
module.link("../../../components/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 4);
let usePermission;
module.link("../../../contexts/AuthorizationContext", {
  usePermission(v) {
    usePermission = v;
  }

}, 5);
let useRoute, useRouteParameter;
module.link("../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  },

  useRouteParameter(v) {
    useRouteParameter = v;
  }

}, 6);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 7);
let AddCustomEmoji;
module.link("./AddCustomEmoji", {
  default(v) {
    AddCustomEmoji = v;
  }

}, 8);
let CustomEmoji;
module.link("./CustomEmoji", {
  default(v) {
    CustomEmoji = v;
  }

}, 9);
let EditCustomEmojiWithData;
module.link("./EditCustomEmojiWithData", {
  default(v) {
    EditCustomEmojiWithData = v;
  }

}, 10);

const CustomEmojiRoute = () => {
  const t = useTranslation();
  const route = useRoute('emoji-custom');
  const context = useRouteParameter('context');
  const id = useRouteParameter('id');
  const canManageEmoji = usePermission('manage-emoji');

  const handleItemClick = _id => () => {
    route.push({
      context: 'edit',
      id: _id
    });
  };

  const handleAddEmoji = useCallback(() => {
    route.push({
      context: 'new'
    });
  }, [route]);

  const handleClose = () => {
    route.push({});
  };

  const reload = useRef(() => null);
  const handleChange = useCallback(() => {
    reload.current();
  }, [reload]);

  if (!canManageEmoji) {
    return /*#__PURE__*/React.createElement(NotAuthorizedPage, null);
  }

  return /*#__PURE__*/React.createElement(Page, {
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Page, {
    name: "admin-emoji-custom"
  }, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Custom_Emoji')
  }, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: handleAddEmoji,
    "aria-label": t('New')
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus"
  }), " ", t('New'))), /*#__PURE__*/React.createElement(Page.Content, null, /*#__PURE__*/React.createElement(CustomEmoji, {
    reload: reload,
    onClick: handleItemClick
  }))), context && /*#__PURE__*/React.createElement(VerticalBar, {
    flexShrink: 0
  }, /*#__PURE__*/React.createElement(VerticalBar.Header, null, context === 'edit' && t('Custom_Emoji_Info'), context === 'new' && t('Custom_Emoji_Add'), /*#__PURE__*/React.createElement(VerticalBar.Close, {
    onClick: handleClose
  })), context === 'edit' && id && /*#__PURE__*/React.createElement(EditCustomEmojiWithData, {
    _id: id,
    close: handleClose,
    onChange: handleChange
  }), context === 'new' && /*#__PURE__*/React.createElement(AddCustomEmoji, {
    close: handleClose,
    onChange: handleChange
  })));
};

module.exportDefault(CustomEmojiRoute);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/customEmoji/c159d7250c02c46fd9c035d0db228cf542e908e1.map
