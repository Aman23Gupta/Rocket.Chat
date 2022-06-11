function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/integrations/new/NewIncomingWebhook.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
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
module.export({
  "default": function () {
    return NewIncomingWebhook;
  }
});
var Field, Box, Margins, Button;
module.link("@rocket.chat/fuselage", {
  Field: function (v) {
    Field = v;
  },
  Box: function (v) {
    Box = v;
  },
  Margins: function (v) {
    Margins = v;
  },
  Button: function (v) {
    Button = v;
  }
}, 0);
var React, useCallback, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 1);
var useRoute;
module.link("../../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 2);
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var useEndpointAction;
module.link("../../../../hooks/useEndpointAction", {
  useEndpointAction: function (v) {
    useEndpointAction = v;
  }
}, 4);
var useForm;
module.link("../../../../hooks/useForm", {
  useForm: function (v) {
    useForm = v;
  }
}, 5);
var IncomingWebhookForm;
module.link("../IncomingWebhookForm", {
  "default": function (v) {
    IncomingWebhookForm = v;
  }
}, 6);
var initialState = {
  enabled: false,
  channel: '',
  username: '',
  name: '',
  alias: '',
  avatarUrl: '',
  emoji: '',
  scriptEnabled: false,
  script: ''
};

function NewIncomingWebhook(props) {
  var t = useTranslation();
  var router = useRoute('admin-integrations');

  var _useForm = useForm(initialState),
      formValues = _useForm.values,
      formHandlers = _useForm.handlers,
      reset = _useForm.reset;

  var params = useMemo(function () {
    return _objectSpread(_objectSpread({}, formValues), {}, {
      type: 'webhook-incoming'
    });
  }, [formValues]);
  var saveAction = useEndpointAction('POST', 'integrations.create', params, t('Integration_added'));
  var handleSave = useCallback(function () {
    function _callee() {
      var result;
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _regeneratorRuntime.awrap(saveAction());

              case 2:
                result = _context.sent;

                if (result.success) {
                  router.push({
                    context: 'edit',
                    type: 'incoming',
                    id: result.integration._id
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
  }(), [router, saveAction]);
  var actionButtons = useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Box, {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      w: "full"
    }, /*#__PURE__*/React.createElement(Margins, {
      inlineEnd: "x4"
    }, /*#__PURE__*/React.createElement(Button, {
      flexGrow: 1,
      type: "reset",
      onClick: reset
    }, t('Reset')), /*#__PURE__*/React.createElement(Button, {
      mie: "none",
      flexGrow: 1,
      onClick: handleSave
    }, t('Save'))))));
  }, [handleSave, reset, t]);
  return /*#__PURE__*/React.createElement(IncomingWebhookForm, _extends({
    formValues: formValues,
    formHandlers: formHandlers,
    append: actionButtons
  }, props));
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/integrations/new/9e71b4fccc6e92c9684d61f8b0b866024515b4d3.map
