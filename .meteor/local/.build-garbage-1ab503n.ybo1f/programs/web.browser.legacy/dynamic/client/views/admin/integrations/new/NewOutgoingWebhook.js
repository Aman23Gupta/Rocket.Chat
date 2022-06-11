function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/integrations/new/NewOutgoingWebhook.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["data", "onChange", "setSaveAction"];

var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 1);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 2);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 3);
module.export({
  "default": function () {
    return NewOutgoingWebhook;
  }
});
var Field, Button;
module.link("@rocket.chat/fuselage", {
  Field: function (v) {
    Field = v;
  },
  Button: function (v) {
    Button = v;
  }
}, 0);
var useUniqueId;
module.link("@rocket.chat/fuselage-hooks", {
  useUniqueId: function (v) {
    useUniqueId = v;
  }
}, 1);
var React, useMemo, useCallback;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useCallback: function (v) {
    useCallback = v;
  }
}, 2);
var useRoute;
module.link("../../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 3);
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 4);
var useEndpointAction;
module.link("../../../../hooks/useEndpointAction", {
  useEndpointAction: function (v) {
    useEndpointAction = v;
  }
}, 5);
var useForm;
module.link("../../../../hooks/useForm", {
  useForm: function (v) {
    useForm = v;
  }
}, 6);
var OutgoingWebhookForm;
module.link("../OutgoiongWebhookForm", {
  "default": function (v) {
    OutgoingWebhookForm = v;
  }
}, 7);
var triggerWordsToArray;
module.link("../helpers/triggerWords", {
  triggerWordsToArray: function (v) {
    triggerWordsToArray = v;
  }
}, 8);
var defaultData = {
  type: 'webhook-outgoing',
  enabled: true,
  impersonateUser: false,
  event: 'sendMessage',
  urls: '',
  triggerWords: '',
  targetRoom: '',
  channel: '',
  username: '',
  name: '',
  alias: '',
  avatar: '',
  emoji: '',
  scriptEnabled: false,
  script: '',
  retryFailedCalls: true,
  retryCount: 6,
  retryDelay: 'powers-of-ten',
  triggerWordAnywhere: false,
  runOnEdits: true
};

function NewOutgoingWebhook(_ref) {
  var _ref$data = _ref.data,
      data = _ref$data === void 0 ? defaultData : _ref$data,
      onChange = _ref.onChange,
      setSaveAction = _ref.setSaveAction,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var router = useRoute('admin-integrations');

  var _useForm = useForm(_objectSpread(_objectSpread({}, data), {}, {
    token: useUniqueId()
  })),
      formValues = _useForm.values,
      formHandlers = _useForm.handlers;

  var urls = formValues.urls,
      triggerWords = formValues.triggerWords;
  var params = useMemo(function () {
    return _objectSpread(_objectSpread({}, formValues), {}, {
      urls: urls.split('\n'),
      triggerWords: triggerWordsToArray(triggerWords)
    });
  }, [formValues, triggerWords, urls]);
  var saveIntegration = useEndpointAction('POST', 'integrations.create', params, t('Integration_added'));
  var handleSave = useCallback(function () {
    function _callee() {
      var result;
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _regeneratorRuntime.awrap(saveIntegration());

              case 2:
                result = _context.sent;

                if (result.success) {
                  router.push({
                    id: result.integration._id,
                    context: 'edit',
                    type: 'outgoing'
                  });
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, null, Promise);
    }

    return _callee;
  }(), [saveIntegration, router]);
  var saveButton = useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Button, {
      w: "full",
      mie: "none",
      flexGrow: 1,
      onClick: handleSave
    }, t('Save'))));
  }, [handleSave, t]);
  return /*#__PURE__*/React.createElement(OutgoingWebhookForm, _extends({
    formValues: formValues,
    formHandlers: formHandlers,
    append: saveButton
  }, props));
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/integrations/new/8973ce89e24a50fcda4cf4f4f54ba570dfff62af.map
