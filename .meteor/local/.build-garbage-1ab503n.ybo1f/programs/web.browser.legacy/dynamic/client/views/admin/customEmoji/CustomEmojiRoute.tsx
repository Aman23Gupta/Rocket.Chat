function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/customEmoji/CustomEmojiRoute.tsx                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Button, Icon;
module.link("@rocket.chat/fuselage", {
  Button: function (v) {
    Button = v;
  },
  Icon: function (v) {
    Icon = v;
  }
}, 0);
var React, useCallback, useRef;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useRef: function (v) {
    useRef = v;
  }
}, 1);
var NotAuthorizedPage;
module.link("../../../components/NotAuthorizedPage", {
  "default": function (v) {
    NotAuthorizedPage = v;
  }
}, 2);
var Page;
module.link("../../../components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 3);
var VerticalBar;
module.link("../../../components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 4);
var usePermission;
module.link("../../../contexts/AuthorizationContext", {
  usePermission: function (v) {
    usePermission = v;
  }
}, 5);
var useRoute, useRouteParameter;
module.link("../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  },
  useRouteParameter: function (v) {
    useRouteParameter = v;
  }
}, 6);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 7);
var AddCustomEmoji;
module.link("./AddCustomEmoji", {
  "default": function (v) {
    AddCustomEmoji = v;
  }
}, 8);
var CustomEmoji;
module.link("./CustomEmoji", {
  "default": function (v) {
    CustomEmoji = v;
  }
}, 9);
var EditCustomEmojiWithData;
module.link("./EditCustomEmojiWithData", {
  "default": function (v) {
    EditCustomEmojiWithData = v;
  }
}, 10);

var CustomEmojiRoute = function () {
  var t = useTranslation();
  var route = useRoute('emoji-custom');
  var context = useRouteParameter('context');
  var id = useRouteParameter('id');
  var canManageEmoji = usePermission('manage-emoji');

  var handleItemClick = function (_id) {
    return function () {
      route.push({
        context: 'edit',
        id: _id
      });
    };
  };

  var handleAddEmoji = useCallback(function () {
    route.push({
      context: 'new'
    });
  }, [route]);

  var handleClose = function () {
    route.push({});
  };

  var reload = useRef(function () {
    return null;
  });
  var handleChange = useCallback(function () {
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
//# sourceMappingURL=/dynamic/client/views/admin/customEmoji/e8c02559661bcf7c379fdffa70df622153b24511.map
