function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/triggers/NewTriggerPage.js                                                                 //
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
var Button, FieldGroup, Box, Margins;
module.link("@rocket.chat/fuselage", {
  Button: function (v) {
    Button = v;
  },
  FieldGroup: function (v) {
    FieldGroup = v;
  },
  Box: function (v) {
    Box = v;
  },
  Margins: function (v) {
    Margins = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
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

var NewTriggerPage = function (_ref) {
  var onSave = _ref.onSave;
  var dispatchToastMessage = useToastMessageDispatch();
  var t = useTranslation();
  var router = useRoute('omnichannel-triggers');
  var save = useMethod('livechat:saveTrigger');

  var _useForm = useForm({
    name: '',
    description: '',
    enabled: true,
    runOnce: false,
    conditions: {
      name: 'page-url',
      value: ''
    },
    actions: {
      name: '',
      params: {
        sender: 'queue',
        msg: '',
        name: ''
      }
    }
  }),
      values = _useForm.values,
      handlers = _useForm.handlers;

  var handleSave = useMutableCallback(function () {
    function _callee() {
      var _values$actions$param, sender, _msg, _name, restValues;

      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _values$actions$param = values.actions.params, sender = _values$actions$param.sender, _msg = _values$actions$param.msg, _name = _values$actions$param.name, restValues = _objectWithoutProperties(values, _excluded);
                _context.next = 4;
                return _regeneratorRuntime.awrap(save(_objectSpread(_objectSpread({}, restValues), {}, {
                  conditions: [values.conditions],
                  actions: [{
                    name: 'send-message',
                    params: _objectSpread({
                      sender: sender,
                      msg: _msg
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
  var name = values.name,
      msg = values.actions.params.msg;
  var canSave = useMemo(function () {
    return name && msg;
  }, [name, msg]);
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

module.exportDefault(NewTriggerPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/triggers/216e5d0ec01b5bb283e0ee505de25ff1403c3450.map
