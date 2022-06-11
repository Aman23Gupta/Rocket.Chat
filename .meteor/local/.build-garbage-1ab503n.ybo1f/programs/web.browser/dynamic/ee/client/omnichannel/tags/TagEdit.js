function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/tags/TagEdit.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["title", "data", "tagId", "isNew", "reload", "currentDepartments"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
let Field, TextInput, Button, ButtonGroup, Icon, FieldGroup;
module.link("@rocket.chat/fuselage", {
  Field(v) {
    Field = v;
  },

  TextInput(v) {
    TextInput = v;
  },

  Button(v) {
    Button = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Icon(v) {
    Icon = v;
  },

  FieldGroup(v) {
    FieldGroup = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 2);
let AutoCompleteDepartmentMultiple;
module.link("../../../../client/components/AutoCompleteDepartmentMultiple", {
  default(v) {
    AutoCompleteDepartmentMultiple = v;
  }

}, 3);
let Page;
module.link("../../../../client/components/Page", {
  default(v) {
    Page = v;
  }

}, 4);
let useRoute;
module.link("../../../../client/contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 5);
let useMethod;
module.link("../../../../client/contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 6);
let useToastMessageDispatch;
module.link("../../../../client/contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 7);
let useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 8);
let useForm;
module.link("../../../../client/hooks/useForm", {
  useForm(v) {
    useForm = v;
  }

}, 9);

function TagEdit(_ref) {
  let {
    title,
    data,
    tagId,
    isNew,
    reload,
    currentDepartments
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const tagsRoute = useRoute('omnichannel-tags');
  const tag = data || {};
  const {
    values,
    handlers,
    hasUnsavedChanges
  } = useForm({
    name: tag.name,
    description: tag.description,
    departments: currentDepartments && currentDepartments.departments ? currentDepartments.departments.map(dep => ({
      label: dep.name,
      value: dep._id
    })) : []
  });
  const {
    handleName,
    handleDescription,
    handleDepartments
  } = handlers;
  const {
    name,
    description,
    departments
  } = values;
  const nameError = useMemo(() => !name || name.length === 0 ? t('The_field_is_required', 'name') : undefined, [name, t]);
  const saveTag = useMethod('livechat:saveTag');
  const dispatchToastMessage = useToastMessageDispatch();
  const handleReturn = useMutableCallback(() => {
    tagsRoute.push({});
  });
  const canSave = useMemo(() => !nameError, [nameError]);
  const handleSave = useMutableCallback(async () => {
    const tagData = {
      name,
      description
    };

    if (!canSave) {
      return dispatchToastMessage({
        type: 'error',
        message: t('The_field_is_required')
      });
    }

    const finalDepartments = departments ? departments.map(dep => dep.value) : [''];

    try {
      await saveTag(tagId, tagData, finalDepartments);
      dispatchToastMessage({
        type: 'success',
        message: t('Saved')
      });
      reload();
      tagsRoute.push({});
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }
  });
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
//# sourceMappingURL=/dynamic/ee/client/omnichannel/tags/ed983fe0213179d8e244879729e81ab8fff958e7.map
