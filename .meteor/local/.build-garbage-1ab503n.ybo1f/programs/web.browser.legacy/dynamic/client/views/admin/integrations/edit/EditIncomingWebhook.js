function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/integrations/edit/EditIncomingWebhook.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["data", "onChange"];

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
var IncomingWebhookForm;
module.link("../IncomingWebhookForm", {
  "default": function (v) {
    IncomingWebhookForm = v;
  }
}, 10);

var getInitialValue = function (data) {
  var _data$channel$join, _data$username, _data$name, _data$alias, _data$avatarUrl, _data$emoji;

  var initialValue = {
    enabled: data.enabled,
    channel: (_data$channel$join = data.channel.join(', ')) !== null && _data$channel$join !== void 0 ? _data$channel$join : '',
    username: (_data$username = data.username) !== null && _data$username !== void 0 ? _data$username : '',
    name: (_data$name = data.name) !== null && _data$name !== void 0 ? _data$name : '',
    alias: (_data$alias = data.alias) !== null && _data$alias !== void 0 ? _data$alias : '',
    avatarUrl: (_data$avatarUrl = data.avatarUrl) !== null && _data$avatarUrl !== void 0 ? _data$avatarUrl : '',
    emoji: (_data$emoji = data.emoji) !== null && _data$emoji !== void 0 ? _data$emoji : '',
    scriptEnabled: data.scriptEnabled,
    script: data.script
  };
  return initialValue;
};

function EditIncomingWebhook(_ref) {
  var data = _ref.data,
      onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();

  var _useForm = useForm(getInitialValue(data)),
      formValues = _useForm.values,
      formHandlers = _useForm.handlers,
      reset = _useForm.reset;

  var setModal = useSetModal();
  var deleteQuery = useMemo(function () {
    return {
      type: 'webhook-incoming',
      integrationId: data._id
    };
  }, [data._id]);
  var deleteIntegration = useEndpointAction('POST', 'integrations.remove', deleteQuery);
  var saveIntegration = useMethod('updateIncomingIntegration');
  var router = useRoute('admin-integrations');
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
  var handleSave = useCallback(function () {
    function _callee2() {
      return _regeneratorRuntime.async(function () {
        function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _context2.next = 3;
                return _regeneratorRuntime.awrap(saveIntegration(data._id, _objectSpread({}, formValues)));

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
  }(), [data._id, dispatchToastMessage, formValues, onChange, saveIntegration, t]);
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
  return /*#__PURE__*/React.createElement(IncomingWebhookForm, _extends({
    formHandlers: formHandlers,
    formValues: formValues,
    extraData: {
      _id: data._id,
      token: data.token
    },
    append: actionButtons
  }, props));
}

module.exportDefault(EditIncomingWebhook);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/integrations/edit/53b3ba01e49ae7177cb729845fd002083ca494f9.map
