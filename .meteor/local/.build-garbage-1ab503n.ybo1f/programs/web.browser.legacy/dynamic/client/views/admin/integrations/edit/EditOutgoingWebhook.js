function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/integrations/edit/EditOutgoingWebhook.js                                                         //
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
}, 1);
var GenericModal;
module.link("../../../../components/GenericModal", {
  "default": function (v) {
    GenericModal = v;
  }
}, 2);
var useSetModal;
module.link("../../../../contexts/ModalContext", {
  useSetModal: function (v) {
    useSetModal = v;
  }
}, 3);
var useRoute;
module.link("../../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 4);
var useMethod;
module.link("../../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 5);
var useToastMessageDispatch;
module.link("../../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 6);
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 7);
var useEndpointAction;
module.link("../../../../hooks/useEndpointAction", {
  useEndpointAction: function (v) {
    useEndpointAction = v;
  }
}, 8);
var useForm;
module.link("../../../../hooks/useForm", {
  useForm: function (v) {
    useForm = v;
  }
}, 9);
var OutgoingWebhookForm;
module.link("../OutgoiongWebhookForm", {
  "default": function (v) {
    OutgoingWebhookForm = v;
  }
}, 10);
var triggerWordsToArray, triggerWordsToString;
module.link("../helpers/triggerWords", {
  triggerWordsToArray: function (v) {
    triggerWordsToArray = v;
  },
  triggerWordsToString: function (v) {
    triggerWordsToString = v;
  }
}, 11);

var getInitialValue = function (data) {
  var _data$enabled, _data$urls$join, _data$targetRoom, _data$channel$join, _data$username, _data$name, _data$alias, _data$avatarUrl, _data$emoji, _data$scriptEnabled, _data$script, _data$retryFailedCall, _data$retryCount, _data$retryDelay, _data$triggerWordAnyw, _data$runOnEdits;

  var initialValue = {
    enabled: (_data$enabled = data.enabled) !== null && _data$enabled !== void 0 ? _data$enabled : true,
    impersonateUser: data.impersonateUser,
    event: data.event,
    token: data.token,
    urls: (_data$urls$join = data.urls.join('\n')) !== null && _data$urls$join !== void 0 ? _data$urls$join : '',
    triggerWords: triggerWordsToString(data.triggerWords),
    targetRoom: (_data$targetRoom = data.targetRoom) !== null && _data$targetRoom !== void 0 ? _data$targetRoom : '',
    channel: (_data$channel$join = data.channel.join(', ')) !== null && _data$channel$join !== void 0 ? _data$channel$join : '',
    username: (_data$username = data.username) !== null && _data$username !== void 0 ? _data$username : '',
    name: (_data$name = data.name) !== null && _data$name !== void 0 ? _data$name : '',
    alias: (_data$alias = data.alias) !== null && _data$alias !== void 0 ? _data$alias : '',
    avatarUrl: (_data$avatarUrl = data.avatarUrl) !== null && _data$avatarUrl !== void 0 ? _data$avatarUrl : '',
    emoji: (_data$emoji = data.emoji) !== null && _data$emoji !== void 0 ? _data$emoji : '',
    scriptEnabled: (_data$scriptEnabled = data.scriptEnabled) !== null && _data$scriptEnabled !== void 0 ? _data$scriptEnabled : false,
    script: (_data$script = data.script) !== null && _data$script !== void 0 ? _data$script : '',
    retryFailedCalls: (_data$retryFailedCall = data.retryFailedCalls) !== null && _data$retryFailedCall !== void 0 ? _data$retryFailedCall : true,
    retryCount: (_data$retryCount = data.retryCount) !== null && _data$retryCount !== void 0 ? _data$retryCount : 5,
    retryDelay: (_data$retryDelay = data.retryDelay) !== null && _data$retryDelay !== void 0 ? _data$retryDelay : 'power-of-ten',
    triggerWordAnywhere: (_data$triggerWordAnyw = data.triggerWordAnywhere) !== null && _data$triggerWordAnyw !== void 0 ? _data$triggerWordAnyw : false,
    runOnEdits: (_data$runOnEdits = data.runOnEdits) !== null && _data$runOnEdits !== void 0 ? _data$runOnEdits : true
  };
  return initialValue;
};

function EditOutgoingWebhook(_ref) {
  var data = _ref.data,
      onChange = _ref.onChange,
      setSaveAction = _ref.setSaveAction,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();

  var _useForm = useForm(getInitialValue(data)),
      formHandlers = _useForm.handlers,
      formValues = _useForm.values,
      reset = _useForm.reset;

  var setModal = useSetModal();
  var saveIntegration = useMethod('updateOutgoingIntegration');
  var router = useRoute('admin-integrations');
  var deleteQuery = useMemo(function () {
    return {
      type: 'webhook-outgoing',
      integrationId: data._id
    };
  }, [data._id]);
  var deleteIntegration = useEndpointAction('POST', 'integrations.remove', deleteQuery);
  var handleDeleteIntegration = useCallback(function () {
    var closeModal = function () {
      return setModal();
    };

    var handleClose = function () {
      closeModal();
      router.push({});
    };

    var onDelete = function () {
      function _callee() {
        var result;
        return _regeneratorRuntime.async(function () {
          function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _regeneratorRuntime.awrap(deleteIntegration());

                case 2:
                  result = _context.sent;

                  if (result.success) {
                    setModal( /*#__PURE__*/React.createElement(GenericModal, {
                      variant: "success",
                      onClose: handleClose,
                      onConfirm: handleClose
                    }, t('Your_entry_has_been_deleted')));
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
    }();

    setModal( /*#__PURE__*/React.createElement(GenericModal, {
      variant: "danger",
      onConfirm: onDelete,
      onCancel: closeModal,
      confirmText: t('Delete')
    }, t('Integration_Delete_Warning')));
  }, [deleteIntegration, router, setModal, t]);
  var urls = formValues.urls,
      triggerWords = formValues.triggerWords;
  var handleSave = useCallback(function () {
    function _callee2() {
      return _regeneratorRuntime.async(function () {
        function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _regeneratorRuntime.awrap(saveIntegration(data._id, _objectSpread(_objectSpread({}, formValues), {}, {
                  triggerWords: triggerWordsToArray(triggerWords),
                  urls: urls.split('\n')
                })));

              case 3:
                dispatchToastMessage({
                  type: 'success',
                  message: t('Integration_updated')
                });
                onChange();
                _context2.next = 10;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](0);
                dispatchToastMessage({
                  type: 'error',
                  message: _context2.t0
                });

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }

        return _callee2$;
      }(), null, null, [[0, 7]], Promise);
    }

    return _callee2;
  }(), [data._id, dispatchToastMessage, formValues, onChange, saveIntegration, t, triggerWords, urls]);
  var actionButtons = useMemo(function () {
    return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Row, {
      display: "flex",
      flexDirection: "column"
    }, /*#__PURE__*/React.createElement(Box, {
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
    }, t('Save')))), /*#__PURE__*/React.createElement(Button, {
      mbs: "x4",
      primary: true,
      danger: true,
      w: "full",
      onClick: handleDeleteIntegration
    }, t('Delete'))));
  }, [handleDeleteIntegration, handleSave, reset, t]);
  return /*#__PURE__*/React.createElement(OutgoingWebhookForm, _extends({
    formValues: formValues,
    formHandlers: formHandlers,
    append: actionButtons
  }, props));
}

module.exportDefault(EditOutgoingWebhook);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/integrations/edit/b1d345c93ce059ab6f409719c6273ff4da688d6c.map
