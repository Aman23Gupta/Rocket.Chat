function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/triggers/EditTriggerPage.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["actions"];

var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 1);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 2);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 3);
var Margins, FieldGroup, Box, Button;
module.link("@rocket.chat/fuselage", {
  Margins: function (v) {
    Margins = v;
  },
  FieldGroup: function (v) {
    FieldGroup = v;
  },
  Box: function (v) {
    Box = v;
  },
  Button: function (v) {
    Button = v;
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
var useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 3);
var useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 4);
var useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 5);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 6);
var useForm;
module.link("../../../hooks/useForm", {
  useForm: function (v) {
    useForm = v;
  }
}, 7);
var TriggersForm;
module.link("./TriggersForm", {
  "default": function (v) {
    TriggersForm = v;
  }
}, 8);

var getInitialValues = function (_ref) {
  var name = _ref.name,
      description = _ref.description,
      enabled = _ref.enabled,
      runOnce = _ref.runOnce,
      _ref$conditions = _slicedToArray(_ref.conditions, 1),
      _ref$conditions$ = _ref$conditions[0],
      condName = _ref$conditions$.name,
      condValue = _ref$conditions$.value,
      _ref$actions = _slicedToArray(_ref.actions, 1),
      _ref$actions$ = _ref$actions[0],
      actName = _ref$actions$.action,
      _ref$actions$$params = _ref$actions$.params,
      actSender = _ref$actions$$params.sender,
      actMsg = _ref$actions$$params.msg,
      actSenderName = _ref$actions$$params.name;

  return {
    name: name !== null && name !== void 0 ? name : '',
    description: description !== null && description !== void 0 ? description : '',
    enabled: !!enabled,
    runOnce: !!runOnce,
    conditions: {
      name: condName !== null && condName !== void 0 ? condName : 'page-url',
      value: condValue !== null && condValue !== void 0 ? condValue : ''
    },
    actions: {
      name: actName !== null && actName !== void 0 ? actName : '',
      params: {
        sender: actSender !== null && actSender !== void 0 ? actSender : 'queue',
        msg: actMsg !== null && actMsg !== void 0 ? actMsg : '',
        name: actSenderName !== null && actSenderName !== void 0 ? actSenderName : ''
      }
    }
  };
};

var EditTriggerPage = function (_ref2) {
  var data = _ref2.data,
      onSave = _ref2.onSave;
  var dispatchToastMessage = useToastMessageDispatch();
  var t = useTranslation();
  var router = useRoute('omnichannel-triggers');
  var save = useMethod('livechat:saveTrigger');

  var _useForm = useForm(getInitialValues(data)),
      values = _useForm.values,
      handlers = _useForm.handlers,
      hasUnsavedChanges = _useForm.hasUnsavedChanges;

  var handleSave = useMutableCallback(function () {
    function _callee() {
      var _values$actions$param, sender, msg, _name, restValues;

      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _values$actions$param = values.actions.params, sender = _values$actions$param.sender, msg = _values$actions$param.msg, _name = _values$actions$param.name, restValues = _objectWithoutProperties(values, _excluded);
                _context.next = 4;
                return _regeneratorRuntime.awrap(save(_objectSpread(_objectSpread({
                  _id: data._id
                }, restValues), {}, {
                  conditions: [values.conditions],
                  actions: [{
                    name: 'send-message',
                    params: _objectSpread({
                      sender: sender,
                      msg: msg
                    }, sender === 'custom' && {
                      name: _name
                    })
                  }]
                })));

              case 4:
                dispatchToastMessage({
                  type: 'success',
                  message: t('Saved')
                });
                onSave();
                router.push({});
                _context.next = 12;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](0);
                dispatchToastMessage({
                  type: 'error',
                  message: _context.t0
                });

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[0, 9]], Promise);
    }

    return _callee;
  }());
  var name = values.name;
  var canSave = name && hasUnsavedChanges;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(FieldGroup, null, /*#__PURE__*/React.createElement(TriggersForm, {
    values: values,
    handlers: handlers
  })), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    w: "full"
  }, /*#__PURE__*/React.createElement(Margins, {
    inlineEnd: "x4"
  }, /*#__PURE__*/React.createElement(Button, {
    flexGrow: 1,
    primary: true,
    onClick: handleSave,
    disabled: !canSave
  }, t('Save')))));
};

module.exportDefault(EditTriggerPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/triggers/d20039f2a421c568e09eccf7196a0145742a8cfa.map
