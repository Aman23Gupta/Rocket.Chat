function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/banners/UiKitBanner.tsx                                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);
var Banner, Icon;
module.link("@rocket.chat/fuselage", {
  Banner: function (v) {
    Banner = v;
  },
  Icon: function (v) {
    Icon = v;
  }
}, 0);
var kitContext, bannerParser, renderUiKitBannerBlocks;
module.link("@rocket.chat/fuselage-ui-kit", {
  kitContext: function (v) {
    kitContext = v;
  },
  bannerParser: function (v) {
    bannerParser = v;
  },
  UiKitBanner: function (v) {
    renderUiKitBannerBlocks = v;
  }
}, 1);
var React, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 2);
var useUIKitHandleAction;
module.link("../../UIKit/hooks/useUIKitHandleAction", {
  useUIKitHandleAction: function (v) {
    useUIKitHandleAction = v;
  }
}, 3);
var useUIKitHandleClose;
module.link("../../UIKit/hooks/useUIKitHandleClose", {
  useUIKitHandleClose: function (v) {
    useUIKitHandleClose = v;
  }
}, 4);
var useUIKitStateManager;
module.link("../../UIKit/hooks/useUIKitStateManager", {
  useUIKitStateManager: function (v) {
    useUIKitStateManager = v;
  }
}, 5);
var MarkdownText;
module.link("../../components/MarkdownText", {
  "default": function (v) {
    MarkdownText = v;
  }
}, 6);
var banners;
module.link("../../lib/banners", {
  "*": function (v) {
    banners = v;
  }
}, 7);

// TODO: move this to fuselage-ui-kit itself
var mrkdwn = function () {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    text: ''
  },
      text = _ref.text;

  return /*#__PURE__*/React.createElement(MarkdownText, {
    variant: "inline",
    content: text
  });
};

bannerParser.mrkdwn = mrkdwn;

var UiKitBanner = function (_ref2) {
  var payload = _ref2.payload;
  var state = useUIKitStateManager(payload);
  var icon = useMemo(function () {
    if (state.icon) {
      return /*#__PURE__*/React.createElement(Icon, {
        name: state.icon,
        size: 20
      });
    }

    return null;
  }, [state.icon]);
  var handleClose = useUIKitHandleClose(state, function () {
    return banners.close();
  });
  var action = useUIKitHandleAction(state);
  var contextValue = useMemo(function () {
    return {
      action: function () {
        function _callee() {
          var _args = arguments;
          return _regeneratorRuntime.async(function () {
            function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return _regeneratorRuntime.awrap(action.apply(void 0, _args));

                  case 2:
                    banners.closeById(state.viewId);

                  case 3:
                  case "end":
                    return _context.stop();
                }
              }
            }

            return _callee$;
          }(), null, null, null, Promise);
        }

        return _callee;
      }(),
      state: function () {
        return undefined;
      },
      appId: state.appId
    };
  }, [action, state.appId, state.viewId]);
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
//# sourceMappingURL=/dynamic/client/views/banners/07d0fc7ed16928c948e93557f7ddbcb9328c9ab7.map
