function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/mailer/MailerUnsubscriptionPage.tsx                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["resolve", "reject"];

var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 1);
var Box, Callout, Throbber;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Callout: function (v) {
    Callout = v;
  },
  Throbber: function (v) {
    Throbber = v;
  }
}, 0);
var React, useEffect;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useEffect: function (v) {
    useEffect = v;
  }
}, 1);
var useRouteParameter;
module.link("../../contexts/RouterContext", {
  useRouteParameter: function (v) {
    useRouteParameter = v;
  }
}, 2);
var useAbsoluteUrl, useMethod;
module.link("../../contexts/ServerContext", {
  useAbsoluteUrl: function (v) {
    useAbsoluteUrl = v;
  },
  useMethod: function (v) {
    useMethod = v;
  }
}, 3);
var useToastMessageDispatch;
module.link("../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 4);
var useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 5);
var AsyncStatePhase, useAsyncState;
module.link("../../hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  },
  useAsyncState: function (v) {
    useAsyncState = v;
  }
}, 6);

var useMailerUnsubscriptionState = function () {
  var _useAsyncState = useAsyncState(),
      resolve = _useAsyncState.resolve,
      reject = _useAsyncState.reject,
      unsubscribedState = _objectWithoutProperties(_useAsyncState, _excluded);

  var unsubscribe = useMethod('Mailer:unsubscribe');

  var _id = useRouteParameter('_id');

  var createdAt = useRouteParameter('createdAt');
  var dispatchToastMessage = useToastMessageDispatch();
  useEffect(function () {
    var doUnsubscribe = function () {
      function _callee(_id, createdAt) {
        return _regeneratorRuntime.async(function () {
          function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return _regeneratorRuntime.awrap(unsubscribe(_id, createdAt));

                case 3:
                  resolve(true);
                  _context.next = 10;
                  break;

                case 6:
                  _context.prev = 6;
                  _context.t0 = _context["catch"](0);
                  dispatchToastMessage({
                    type: 'error',
                    message: _context.t0
                  });
                  reject(_context.t0);

                case 10:
                case "end":
                  return _context.stop();
              }
            }
          }

          return _callee$;
        }(), null, null, [[0, 6]], Promise);
      }

      return _callee;
    }();

    if (!_id || !createdAt) {
      return;
    }

    doUnsubscribe(_id, createdAt);
  }, [resolve, reject, unsubscribe, _id, createdAt, dispatchToastMessage]);
  return unsubscribedState;
};

var MailerUnsubscriptionPage = function () {
  var _useMailerUnsubscript = useMailerUnsubscriptionState(),
      phase = _useMailerUnsubscript.phase,
      error = _useMailerUnsubscript.error;

  var t = useTranslation();
  var absoluteUrl = useAbsoluteUrl();
  return /*#__PURE__*/React.createElement("section", {
    className: "rc-old full-page color-tertiary-font-color"
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrapper"
  }, /*#__PURE__*/React.createElement("header", null, /*#__PURE__*/React.createElement("a", {
    className: "logo",
    href: absoluteUrl('/')
  }, /*#__PURE__*/React.createElement("img", {
    src: absoluteUrl('/images/logo/logo.svg')
  }))), /*#__PURE__*/React.createElement(Box, {
    color: "default",
    marginInline: "auto",
    marginBlock: 16,
    maxWidth: 800
  }, phase === AsyncStatePhase.LOADING && /*#__PURE__*/React.createElement(Throbber, {
    disabled: true
  }) || phase === AsyncStatePhase.REJECTED && /*#__PURE__*/React.createElement(Callout, {
    type: "danger",
    title: error === null || error === void 0 ? void 0 : error.message
  }) || phase === AsyncStatePhase.RESOLVED && /*#__PURE__*/React.createElement(Callout, {
    type: "success",
    title: t('You_have_successfully_unsubscribed')
  }))));
};

module.exportDefault(MailerUnsubscriptionPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/mailer/d549033601efd9e5f99271faca7b0a4e0f86695c.map
