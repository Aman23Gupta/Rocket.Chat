function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/customFields/NewCustomFieldsPage.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
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

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 2);
var Box, Button, Icon, FieldGroup, ButtonGroup;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Button: function (v) {
    Button = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  FieldGroup: function (v) {
    FieldGroup = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React, useCallback, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 2);
var useSubscription;
module.link("use-subscription", {
  useSubscription: function (v) {
    useSubscription = v;
  }
}, 3);
var Page;
module.link("../../../components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 4);
var useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 5);
var useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 6);
var useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 7);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 8);
var useForm;
module.link("../../../hooks/useForm", {
  useForm: function (v) {
    useForm = v;
  }
}, 9);
var formsSubscription;
module.link("../additionalForms", {
  formsSubscription: function (v) {
    formsSubscription = v;
  }
}, 10);
var CustomFieldsForm;
module.link("./CustomFieldsForm", {
  "default": function (v) {
    CustomFieldsForm = v;
  }
}, 11);
var initialValues = {
  field: '',
  label: '',
  scope: 'visitor',
  visibility: true,
  regexp: ''
};

var NewCustomFieldsPage = function (_ref) {
  var reload = _ref.reload;
  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();

  var _useState = useState({}),
      _useState2 = _slicedToArray(_useState, 2),
      additionalValues = _useState2[0],
      setAdditionalValues = _useState2[1];

  var _useSubscription = useSubscription(formsSubscription),
      _useSubscription$useC = _useSubscription.useCustomFieldsAdditionalForm,
      useCustomFieldsAdditionalForm = _useSubscription$useC === void 0 ? function () {} : _useSubscription$useC;

  var AdditionalForm = useCustomFieldsAdditionalForm();
  var router = useRoute('omnichannel-customfields');
  var handleReturn = useCallback(function () {
    router.push({});
  }, [router]);

  var _useForm = useForm(initialValues),
      values = _useForm.values,
      handlers = _useForm.handlers,
      hasUnsavedChanges = _useForm.hasUnsavedChanges;

  var save = useMethod('livechat:saveCustomField');
  var hasError = additionalValues.hasError,
      additionalData = additionalValues.data,
      additionalFormChanged = additionalValues.hasUnsavedChanges;
  var label = values.label,
      field = values.field;
  var canSave = !hasError && label && field && (additionalFormChanged || hasUnsavedChanges);
  var handleSave = useMutableCallback(function () {
    function _callee() {
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _regeneratorRuntime.awrap(save(undefined, _objectSpread(_objectSpread({}, values), {}, {
                  visibility: values.visibility ? 'visible' : 'hidden'
                }, additionalData)));

              case 3:
                dispatchToastMessage({
                  type: 'success',
                  message: t('Saved')
                });
                reload();
                router.push({});
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                dispatchToastMessage({
                  type: 'error',
                  message: _context.t0
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[0, 8]], Promise);
    }

    return _callee;
  }());
  var handleAdditionalForm = useMutableCallback(function (val) {
    setAdditionalValues(_objectSpread(_objectSpread({}, additionalValues), val));
  });
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('New_Custom_Field')
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
    onClick: handleReturn
  }, /*#__PURE__*/React.createElement(Icon, {
    size: "x16",
    name: "back"
  }), t('Back')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: handleSave,
    disabled: !canSave
  }, t('Save')))), /*#__PURE__*/React.createElement(Page.ScrollableContentWithShadow, null, /*#__PURE__*/React.createElement(Box, {
    maxWidth: "x600",
    w: "full",
    alignSelf: "center"
  }, /*#__PURE__*/React.createElement(FieldGroup, null, /*#__PURE__*/React.createElement(CustomFieldsForm, {
    values: values,
    handlers: handlers
  }), AdditionalForm && /*#__PURE__*/React.createElement(AdditionalForm, {
    onChange: handleAdditionalForm,
    state: values
  })))));
};

module.exportDefault(NewCustomFieldsPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/customFields/4e59a01a625b062879e11454f4aef8696a688d7a.map
