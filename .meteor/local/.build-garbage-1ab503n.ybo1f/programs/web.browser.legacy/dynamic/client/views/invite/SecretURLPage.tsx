function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/invite/SecretURLPage.tsx                                                                               //
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
var KonchatNotification;
module.link("../../../app/ui", {
  KonchatNotification: function (v) {
    KonchatNotification = v;
  }
}, 2);
var useRouteParameter;
module.link("../../contexts/RouterContext", {
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
var useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 6);
var call;
module.link("../../lib/utils/call", {
  call: function (v) {
    call = v;
  }
}, 7);
var PageLoading;
module.link("../root/PageLoading", {
  "default": function (v) {
    PageLoading = v;
  }
}, 8);

var SecretURLPage = function () {
  var t = useTranslation();
  var hash = useRouteParameter('hash');
  var registrationForm = useSetting('Accounts_RegistrationForm');
  var setLoginDefaultState = useSessionDispatch('loginDefaultState');

  var _useQuery = useQuery(['secretURL', hash], function () {
    function _callee() {
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(registrationForm !== 'Secret URL' || !hash)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", false);

              case 2:
                return _context.abrupt("return", call('checkRegistrationSecretURL', hash));

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
  }(), {
    onSuccess: function (valid) {
      if (!valid) {
        return;
      }

      setLoginDefaultState('register');
      KonchatNotification.getDesktopPermission();
    }
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
  }), t('Invalid_secret_URL_message')))));
};

module.exportDefault(SecretURLPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/invite/d98de5c6e30379211aa436e82c001857d6b1d23f.map
