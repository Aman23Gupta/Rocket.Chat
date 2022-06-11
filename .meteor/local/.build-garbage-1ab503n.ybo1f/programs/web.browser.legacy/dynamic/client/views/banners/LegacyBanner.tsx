function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/banners/LegacyBanner.tsx                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Banner, Icon;
module.link("@rocket.chat/fuselage", {
  Banner: function (v) {
    Banner = v;
  },
  Icon: function (v) {
    Icon = v;
  }
}, 0);
var React, useCallback, useEffect;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useEffect: function (v) {
    useEffect = v;
  }
}, 1);
var banners;
module.link("../../lib/banners", {
  "*": function (v) {
    banners = v;
  }
}, 2);

var LegacyBanner = function (_ref) {
  var config = _ref.config;
  var _config$closable = config.closable,
      closable = _config$closable === void 0 ? true : _config$closable,
      title = config.title,
      text = config.text,
      html = config.html,
      icon = config.icon,
      modifiers = config.modifiers;
  var inline = !(modifiers !== null && modifiers !== void 0 && modifiers.includes('large'));
  var variant = modifiers !== null && modifiers !== void 0 && modifiers.includes('danger') ? 'danger' : 'info';
  useEffect(function () {
    if (!config.timer) {
      return;
    }

    var timer = setTimeout(function () {
      var _config$onClose;

      (_config$onClose = config.onClose) === null || _config$onClose === void 0 ? void 0 : _config$onClose.call(undefined);
      banners.close();
    }, config.timer);
    return function () {
      clearTimeout(timer);
    };
  }, [config.onClose, config.timer]);
  var handleAction = useCallback(function () {
    var _config$action;

    (_config$action = config.action) === null || _config$action === void 0 ? void 0 : _config$action.call(undefined);
  }, [config.action]);
  var handleClose = useCallback(function () {
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
//# sourceMappingURL=/dynamic/client/views/banners/816e9f56cb9bb72f1cd7d0024e424385b5a1d736.map
