function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/banners/UiKitBanner.tsx                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Banner, Icon;
module.link("@rocket.chat/fuselage", {
  Banner(v) {
    Banner = v;
  },

  Icon(v) {
    Icon = v;
  }

}, 0);
let kitContext, bannerParser, renderUiKitBannerBlocks;
module.link("@rocket.chat/fuselage-ui-kit", {
  kitContext(v) {
    kitContext = v;
  },

  bannerParser(v) {
    bannerParser = v;
  },

  UiKitBanner(v) {
    renderUiKitBannerBlocks = v;
  }

}, 1);
let React, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 2);
let useUIKitHandleAction;
module.link("../../UIKit/hooks/useUIKitHandleAction", {
  useUIKitHandleAction(v) {
    useUIKitHandleAction = v;
  }

}, 3);
let useUIKitHandleClose;
module.link("../../UIKit/hooks/useUIKitHandleClose", {
  useUIKitHandleClose(v) {
    useUIKitHandleClose = v;
  }

}, 4);
let useUIKitStateManager;
module.link("../../UIKit/hooks/useUIKitStateManager", {
  useUIKitStateManager(v) {
    useUIKitStateManager = v;
  }

}, 5);
let MarkdownText;
module.link("../../components/MarkdownText", {
  default(v) {
    MarkdownText = v;
  }

}, 6);
let banners;
module.link("../../lib/banners", {
  "*"(v) {
    banners = v;
  }

}, 7);

// TODO: move this to fuselage-ui-kit itself
const mrkdwn = function () {
  let {
    text
  } = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    text: ''
  };
  return /*#__PURE__*/React.createElement(MarkdownText, {
    variant: "inline",
    content: text
  });
};

bannerParser.mrkdwn = mrkdwn;

const UiKitBanner = _ref => {
  let {
    payload
  } = _ref;
  const state = useUIKitStateManager(payload);
  const icon = useMemo(() => {
    if (state.icon) {
      return /*#__PURE__*/React.createElement(Icon, {
        name: state.icon,
        size: 20
      });
    }

    return null;
  }, [state.icon]);
  const handleClose = useUIKitHandleClose(state, () => banners.close());
  const action = useUIKitHandleAction(state);
  const contextValue = useMemo(() => ({
    action: async function () {
      await action(...arguments);
      banners.closeById(state.viewId);
    },
    state: () => undefined,
    appId: state.appId
  }), [action, state.appId, state.viewId]);
  return /*#__PURE__*/React.createElement(Banner, {
    closeable: true,
    icon: icon,
    inline: state.inline,
    title: state.title,
    variant: state.variant,
    onClose: handleClose
  }, /*#__PURE__*/React.createElement(kitContext.Provider, {
    value: contextValue
  }, renderUiKitBannerBlocks(state.blocks, {
    engine: 'rocket.chat'
  })));
};

module.exportDefault(UiKitBanner);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/banners/be6b2dab3d4bc4d58e0a32adffb5040bf2739c82.map
