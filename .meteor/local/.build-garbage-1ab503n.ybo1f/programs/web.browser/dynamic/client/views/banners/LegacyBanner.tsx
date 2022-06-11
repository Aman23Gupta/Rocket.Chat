function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/banners/LegacyBanner.tsx                                                                               //
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
let React, useCallback, useEffect;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useEffect(v) {
    useEffect = v;
  }

}, 1);
let banners;
module.link("../../lib/banners", {
  "*"(v) {
    banners = v;
  }

}, 2);

const LegacyBanner = _ref => {
  let {
    config
  } = _ref;
  const {
    closable = true,
    title,
    text,
    html,
    icon,
    modifiers
  } = config;
  const inline = !(modifiers !== null && modifiers !== void 0 && modifiers.includes('large'));
  const variant = modifiers !== null && modifiers !== void 0 && modifiers.includes('danger') ? 'danger' : 'info';
  useEffect(() => {
    if (!config.timer) {
      return;
    }

    const timer = setTimeout(() => {
      var _config$onClose;

      (_config$onClose = config.onClose) === null || _config$onClose === void 0 ? void 0 : _config$onClose.call(undefined);
      banners.close();
    }, config.timer);
    return () => {
      clearTimeout(timer);
    };
  }, [config.onClose, config.timer]);
  const handleAction = useCallback(() => {
    var _config$action;

    (_config$action = config.action) === null || _config$action === void 0 ? void 0 : _config$action.call(undefined);
  }, [config.action]);
  const handleClose = useCallback(() => {
    var _config$onClose2;

    (_config$onClose2 = config.onClose) === null || _config$onClose2 === void 0 ? void 0 : _config$onClose2.call(undefined);
    banners.close();
  }, [config.onClose]);
  return /*#__PURE__*/React.createElement(Banner, {
    inline: inline,
    actionable: !!config.action,
    closeable: closable,
    icon: icon ? /*#__PURE__*/React.createElement(Icon, {
      name: icon,
      size: 20
    }) : undefined,
    title: title,
    variant: variant,
    onAction: handleAction,
    onClose: handleClose
  }, text, html && /*#__PURE__*/React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: html
    }
  }));
};

module.exportDefault(LegacyBanner);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/banners/b373879c759ac5f698caabb2e18f1db5d2a9796f.map
