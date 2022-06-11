function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/priorities/PriorityEdit.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["data", "isNew", "priorityId", "reload"];

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

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 2);
var Field, TextInput, Button, Margins, Box, NumberInput;
module.link("@rocket.chat/fuselage", {
  Field: function (v) {
    Field = v;
  },
  TextInput: function (v) {
    TextInput = v;
  },
  Button: function (v) {
    Button = v;
  },
  Margins: function (v) {
    Margins = v;
  },
  Box: function (v) {
    Box = v;
  },
  NumberInput: function (v) {
    NumberInput = v;
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
var VerticalBar;
module.link("../../../../client/components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 3);
var useRoute;
module.link("../../../../client/contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 4);
var useMethod;
module.link("../../../../client/contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 5);
var useToastMessageDispatch;
module.link("../../../../client/contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 6);
var useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 7);
var useForm;
module.link("../../../../client/hooks/useForm", {
  useForm: function (v) {
    useForm = v;
  }
}, 8);

function PriorityEdit(_ref) {
  var data = _ref.data,
      isNew = _ref.isNew,
      priorityId = _ref.priorityId,
      reload = _ref.reload,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var prioritiesRoute = useRoute('omnichannel-priorities');
  var priority = data || {};

  var _useForm = useForm({
    name: priority.name,
    description: priority.description,
    dueTimeInMinutes: priority.dueTimeInMinutes
  }),
      values = _useForm.values,
      handlers = _useForm.handlers,
      hasUnsavedChanges = _useForm.hasUnsavedChanges;

  var handleName = handlers.handleName,
      handleDescription = handlers.handleDescription,
      handleDueTimeInMinutes = handlers.handleDueTimeInMinutes;
  var name = values.name,
      description = values.description,
      dueTimeInMinutes = values.dueTimeInMinutes;
  var nameError = useMemo(function () {
    return !name || name.length === 0 ? t('The_field_is_required', 'name') : undefined;
  }, [name, t]);
  var dueTimeInMinutesError = useMemo(function () {
    return !dueTimeInMinutes || dueTimeInMinutes <= 0 ? t('The_field_is_required', 'Estimated_due_time_in_minutes') : undefined;
  }, [dueTimeInMinutes, t]);
  var savePriority = useMethod('livechat:savePriority');
  var dispatchToastMessage = useToastMessageDispatch();
  var handleReset = useMutableCallback(function () {
    reload();
  });
  var canSave = useMemo(function () {
    return !nameError && !dueTimeInMinutesError;
  }, [nameError, dueTimeInMinutesError]);
  var handleSave = useMutableCallback(function () {
    function _callee() {
      var payload;
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                payload = {
                  name: name,
                  description: description,
                  dueTimeInMinutes: "" + dueTimeInMinutes
                };

                if (canSave) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return", dispatchToastMessage({
                  type: 'error',
                  message: t('The_field_is_required')
                }));

              case 3:
                _context.prev = 3;
                _context.next = 6;
                return _regeneratorRuntime.awrap(savePriority(priorityId, payload));

              case 6:
                dispatchToastMessage({
                  type: 'success',
                  message: t('Saved')
                });
                reload();
                prioritiesRoute.push({});
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](3);
                dispatchToastMessage({
                  type: 'error',
                  message: _context.t0
                });

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[3, 11]], Promise);
    }

    return _callee;
  }());
  return /*#__PURE__*/React.createElement(VerticalBar.ScrollableContent, _extends({
    is: "form"
  }, props), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Name'), "*"), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    placeholder: t('Name'),
    flexGrow: 1,
    value: name,
    onChange: handleName,
    error: hasUnsavedChanges && nameError
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Description')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    placeholder: t('Description'),
    flexGrow: 1,
    value: description,
    onChange: handleDescription
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Estimated_due_time_in_minutes'), "*"), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(NumberInput, {
    placeholder: t('Estimated_due_time_in_minutes'),
    value: dueTimeInMinutes,
    onChange: handleDueTimeInMinutes,
    flexGrow: 1,
    error: hasUnsavedChanges && dueTimeInMinutesError
  }))), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    w: "full"
  }, /*#__PURE__*/React.createElement(Margins, {
    inlineEnd: "x4"
  }, !isNew && /*#__PURE__*/React.createElement(Button, {
    flexGrow: 1,
    type: "reset",
    disabled: !hasUnsavedChanges,
    onClick: handleReset
  }, t('Reset')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    mie: "none",
    flexGrow: 1,
    disabled: !hasUnsavedChanges || !canSave,
    onClick: handleSave
  }, t('Save'))))));
}

module.exportDefault(PriorityEdit);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/priorities/124d9242f718fa8a1ad1fd71ae1f5225d71498ec.map
