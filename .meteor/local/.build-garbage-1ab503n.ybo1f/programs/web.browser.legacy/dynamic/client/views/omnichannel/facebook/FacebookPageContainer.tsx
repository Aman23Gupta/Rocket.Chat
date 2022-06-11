function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/facebook/FacebookPageContainer.tsx                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);
var Callout;
module.link("@rocket.chat/fuselage", {
  Callout: function (v) {
    Callout = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 2);
var Page;
module.link("../../../components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 3);
var PageSkeleton;
module.link("../../../components/PageSkeleton", {
  "default": function (v) {
    PageSkeleton = v;
  }
}, 4);
var useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 5);
var useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 6);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 7);
var AsyncStatePhase;
module.link("../../../hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 8);
var useMethodData;
module.link("../../../hooks/useMethodData", {
  useMethodData: function (v) {
    useMethodData = v;
  }
}, 9);
var FacebookPage;
module.link("./FacebookPage", {
  "default": function (v) {
    FacebookPage = v;
  }
}, 10);
var initialStateArgs = [{
  action: 'initialState'
}];
var listPageArgs = [{
  action: 'list-pages'
}];

var FacebookPageContainer = function () {
  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();

  var _useMethodData = useMethodData('livechat:facebook', initialStateArgs),
      initialStateData = _useMethodData.value,
      state = _useMethodData.phase,
      reloadInitial = _useMethodData.reload;

  var _useMethodData2 = useMethodData('livechat:facebook', listPageArgs),
      pagesData = _useMethodData2.value,
      listState = _useMethodData2.phase,
      reloadData = _useMethodData2.reload;

  var _ref = initialStateData || {
    enabled: false,
    hasToken: false
  },
      enabled = _ref.enabled,
      hasToken = _ref.hasToken;

  var _ref2 = pagesData || {
    pages: []
  },
      pages = _ref2.pages;

  var livechatFacebook = useMethod('livechat:facebook');
  var onToggle = useMutableCallback(function () {
    function _callee(id, isSubscribed, setSubscribed) {
      var action;
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setSubscribed(!isSubscribed);
                _context.prev = 1;
                action = isSubscribed ? 'unsubscribe' : 'subscribe';
                _context.next = 5;
                return _regeneratorRuntime.awrap(livechatFacebook({
                  action: action,
                  page: id
                }));

              case 5:
                _context.next = 11;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](1);
                dispatchToastMessage({
                  type: 'error',
                  message: _context.t0
                });
                setSubscribed(isSubscribed);

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[1, 7]], Promise);
    }

    return _callee;
  }());
  var onDisable = useMutableCallback(function () {
    function _callee2() {
      return _regeneratorRuntime.async(function () {
        function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _regeneratorRuntime.awrap(livechatFacebook({
                  action: 'disable'
                }));

              case 3:
                dispatchToastMessage({
                  type: 'success',
                  message: t('Integration_disabled')
                });
                reloadInitial();
                reloadData();
                _context2.next = 11;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                dispatchToastMessage({
                  type: 'error',
                  message: _context2.t0
                });

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }

        return _callee2$;
      }(), null, null, [[0, 8]], Promise);
    }

    return _callee2;
  }());

  var openOauthWindow = function (url, callback) {
    var oauthWindow = window.open(url, 'facebook-integration-oauth', 'width=600,height=400');
    var checkInterval = setInterval(function () {
      if (oauthWindow !== null && oauthWindow !== void 0 && oauthWindow.closed) {
        clearInterval(checkInterval);
        callback();
      }
    }, 300);
  };

  var onEnable = useMutableCallback(function () {
    function _callee3() {
      var result;
      return _regeneratorRuntime.async(function () {
        function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _regeneratorRuntime.awrap(livechatFacebook({
                  action: 'enable'
                }));

              case 3:
                result = _context3.sent;

                if (result !== null && result !== void 0 && result.url) {
                  openOauthWindow(result === null || result === void 0 ? void 0 : result.url, function () {
                    onEnable();
                  });
                } else {
                  reloadInitial();
                  reloadData();
                }

                _context3.next = 10;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                dispatchToastMessage({
                  type: 'error',
                  message: _context3.t0
                });

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }

        return _callee3$;
      }(), null, null, [[0, 7]], Promise);
    }

    return _callee3;
  }());

  if (state === AsyncStatePhase.LOADING || listState === AsyncStatePhase.LOADING) {
    return /*#__PURE__*/React.createElement(PageSkeleton, null);
  }

  if (state === AsyncStatePhase.REJECTED) {
    return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
      title: t('Edit_Custom_Field')
    }), /*#__PURE__*/React.createElement(Page.ScrollableContentWithShadow, null, /*#__PURE__*/React.createElement(Callout, {
      type: "danger"
    }, t('Error'))));
  }

  if (enabled && hasToken && listState === AsyncStatePhase.REJECTED) {
    onEnable();
  }

  return /*#__PURE__*/React.createElement(FacebookPage, {
    pages: pages,
    enabled: enabled,
    hasToken: hasToken,
    onToggle: onToggle,
    onRefresh: reloadData,
    onDisable: onDisable,
    onEnable: onEnable
  });
};

module.exportDefault(FacebookPageContainer);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/facebook/c53e43580f472b5e67395494db7f0a918c46ad90.map
