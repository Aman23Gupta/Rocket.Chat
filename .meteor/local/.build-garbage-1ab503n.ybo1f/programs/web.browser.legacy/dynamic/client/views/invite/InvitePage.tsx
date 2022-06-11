function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/invite/InvitePage.tsx                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var useQuery;
module.link("react-query", {
  useQuery: function (v) {
    useQuery = v;
  }
}, 1);
var APIClient;
module.link("../../../app/utils/client", {
  APIClient: function (v) {
    APIClient = v;
  }
}, 2);
var useRoute, useRouteParameter;
module.link("../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  },
  useRouteParameter: function (v) {
    useRouteParameter = v;
  }
}, 3);
var useSessionDispatch;
module.link("../../contexts/SessionContext", {
  useSessionDispatch: function (v) {
    useSessionDispatch = v;
  }
}, 4);
var useSetting;
module.link("../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 5);
var useToastMessageDispatch;
module.link("../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 6);
var useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 7);
var useUserId;
module.link("../../contexts/UserContext", {
  useUserId: function (v) {
    useUserId = v;
  }
}, 8);
var PageLoading;
module.link("../root/PageLoading", {
  "default": function (v) {
    PageLoading = v;
  }
}, 9);

var InvitePage = function () {
  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();
  var token = useRouteParameter('hash');
  var registrationForm = useSetting('Accounts_RegistrationForm');
  var setLoginDefaultState = useSessionDispatch('loginDefaultState');
  var userId = useUserId();
  var homeRoute = useRoute('/');
  var groupRoute = useRoute('/group/:name/:tab?/:context?');
  var channelRoute = useRoute('/channel/:name/:tab?/:context?');

  var _useQuery = useQuery(['invite', token], function () {
    function _callee() {
      var _await$APIClient$v1$p, valid;

      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (token) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", false);

              case 2:
                _context.prev = 2;
                _context.next = 5;
                return _regeneratorRuntime.awrap(APIClient.v1.post('validateInviteToken', {
                  token: token
                }));

              case 5:
                _await$APIClient$v1$p = _context.sent;
                valid = _await$APIClient$v1$p.valid;
                return _context.abrupt("return", valid);

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](2);
                dispatchToastMessage({
                  type: 'error',
                  message: t('Failed_to_validate_invite_token')
                });
                return _context.abrupt("return", false);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[2, 10]], Promise);
    }

    return _callee;
  }(), {
    onSuccess: function () {
      function _callee2(valid) {
        var result;
        return _regeneratorRuntime.async(function () {
          function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (token) {
                    _context2.next = 2;
                    break;
                  }

                  return _context2.abrupt("return");

                case 2:
                  if (registrationForm !== 'Disabled') {
                    setLoginDefaultState('register');
                  } else {
                    setLoginDefaultState('login');
                  }

                  if (!(!valid || !userId)) {
                    _context2.next = 5;
                    break;
                  }

                  return _context2.abrupt("return");

                case 5:
                  _context2.prev = 5;
                  _context2.next = 8;
                  return _regeneratorRuntime.awrap(APIClient.v1.post('useInviteToken', {
                    token: token
                  }));

                case 8:
                  result = _context2.sent;

                  if (result !== null && result !== void 0 && result.room.name) {
                    _context2.next = 13;
                    break;
                  }

                  dispatchToastMessage({
                    type: 'error',
                    message: t('Failed_to_activate_invite_token')
                  });
                  homeRoute.push();
                  return _context2.abrupt("return");

                case 13:
                  if (!(result.room.t === 'p')) {
                    _context2.next = 16;
                    break;
                  }

                  groupRoute.push({
                    name: result.room.name
                  });
                  return _context2.abrupt("return");

                case 16:
                  channelRoute.push({
                    name: result.room.name
                  });
                  _context2.next = 23;
                  break;

                case 19:
                  _context2.prev = 19;
                  _context2.t0 = _context2["catch"](5);
                  dispatchToastMessage({
                    type: 'error',
                    message: t('Failed_to_activate_invite_token')
                  });
                  homeRoute.push();

                case 23:
                case "end":
                  return _context2.stop();
              }
            }
          }

          return _callee2$;
        }(), null, null, [[5, 19]], Promise);
      }

      return _callee2;
    }()
  }),
      isLoading = _useQuery.isLoading;

  if (isLoading) {
    return /*#__PURE__*/React.createElement(PageLoading, null);
  }

  return /*#__PURE__*/React.createElement("section", {
    className: "rc-old full-page color-tertiary-font-color"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("a", {
    className: "logo",
    href: "/"
  }, /*#__PURE__*/React.createElement("img", {
    src: "images/logo/logo.svg?v=3"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "content"
  }, /*#__PURE__*/React.createElement("div", {
    className: "attention-message"
  }, /*#__PURE__*/React.createElement("i", {
    className: "icon-attention"
  }), t('Invalid_or_expired_invite_token')))));
};

module.exportDefault(InvitePage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/invite/bac779b3d9cdcc5062c8e171ba801379727b637b.map
