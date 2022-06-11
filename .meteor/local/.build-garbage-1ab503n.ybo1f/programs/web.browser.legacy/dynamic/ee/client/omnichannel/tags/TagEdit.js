function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/tags/TagEdit.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["title", "data", "tagId", "isNew", "reload", "currentDepartments"];

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
var Field, TextInput, Button, ButtonGroup, Icon, FieldGroup;
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
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  FieldGroup: function (v) {
    FieldGroup = v;
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
var AutoCompleteDepartmentMultiple;
module.link("../../../../client/components/AutoCompleteDepartmentMultiple", {
  "default": function (v) {
    AutoCompleteDepartmentMultiple = v;
  }
}, 3);
var Page;
module.link("../../../../client/components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 4);
var useRoute;
module.link("../../../../client/contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 5);
var useMethod;
module.link("../../../../client/contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 6);
var useToastMessageDispatch;
module.link("../../../../client/contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 7);
var useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 8);
var useForm;
module.link("../../../../client/hooks/useForm", {
  useForm: function (v) {
    useForm = v;
  }
}, 9);

function TagEdit(_ref) {
  var title = _ref.title,
      data = _ref.data,
      tagId = _ref.tagId,
      isNew = _ref.isNew,
      reload = _ref.reload,
      currentDepartments = _ref.currentDepartments,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var tagsRoute = useRoute('omnichannel-tags');
  var tag = data || {};

  var _useForm = useForm({
    name: tag.name,
    description: tag.description,
    departments: currentDepartments && currentDepartments.departments ? currentDepartments.departments.map(function (dep) {
      return {
        label: dep.name,
        value: dep._id
      };
    }) : []
  }),
      values = _useForm.values,
      handlers = _useForm.handlers,
      hasUnsavedChanges = _useForm.hasUnsavedChanges;

  var handleName = handlers.handleName,
      handleDescription = handlers.handleDescription,
      handleDepartments = handlers.handleDepartments;
  var name = values.name,
      description = values.description,
      departments = values.departments;
  var nameError = useMemo(function () {
    return !name || name.length === 0 ? t('The_field_is_required', 'name') : undefined;
  }, [name, t]);
  var saveTag = useMethod('livechat:saveTag');
  var dispatchToastMessage = useToastMessageDispatch();
  var handleReturn = useMutableCallback(function () {
    tagsRoute.push({});
  });
  var canSave = useMemo(function () {
    return !nameError;
  }, [nameError]);
  var handleSave = useMutableCallback(function () {
    function _callee() {
      var tagData, finalDepartments;
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                tagData = {
                  name: name,
                  description: description
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
                finalDepartments = departments ? departments.map(function (dep) {
                  return dep.value;
                }) : [''];
                _context.prev = 4;
                _context.next = 7;
                return _regeneratorRuntime.awrap(saveTag(tagId, tagData, finalDepartments));

              case 7:
                dispatchToastMessage({
                  type: 'success',
                  message: t('Saved')
                });
                reload();
                tagsRoute.push({});
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](4);
                dispatchToastMessage({
                  type: 'error',
                  message: _context.t0
                });

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[4, 12]], Promise);
    }

    return _callee;
  }());
  return /*#__PURE__*/React.createElement(Page, {
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: title
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
    onClick: handleReturn
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "back"
  }), " ", t('Back')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    mie: "none",
    flexGrow: 1,
    disabled: !hasUnsavedChanges || !canSave,
    onClick: handleSave
  }, t('Save')))), /*#__PURE__*/React.createElement(Page.ScrollableContentWithShadow, null, /*#__PURE__*/React.createElement(FieldGroup, _extends({
    w: "full",
    alignSelf: "center",
    maxWidth: "x600",
    is: "form",
    autoComplete: "off"
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
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Departments')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(AutoCompleteDepartmentMultiple, {
    value: departments,
    onChange: handleDepartments
  })))))));
}

module.exportDefault(TagEdit);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/tags/86168a24c87eff4a4777cf0b028bbb9e79af09bd.map
