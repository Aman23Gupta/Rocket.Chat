function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/priorities/PriorityEdit.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["data", "isNew", "priorityId", "reload"];

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
let Field, TextInput, Button, Margins, Box, NumberInput;
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

  Margins(v) {
    Margins = v;
  },

  Box(v) {
    Box = v;
  },

  NumberInput(v) {
    NumberInput = v;
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
let VerticalBar;
module.link("../../../../client/components/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 3);
let useRoute;
module.link("../../../../client/contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 4);
let useMethod;
module.link("../../../../client/contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 5);
let useToastMessageDispatch;
module.link("../../../../client/contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 6);
let useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 7);
let useForm;
module.link("../../../../client/hooks/useForm", {
  useForm(v) {
    useForm = v;
  }

}, 8);

function PriorityEdit(_ref) {
  let {
    data,
    isNew,
    priorityId,
    reload
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const prioritiesRoute = useRoute('omnichannel-priorities');
  const priority = data || {};
  const {
    values,
    handlers,
    hasUnsavedChanges
  } = useForm({
    name: priority.name,
    description: priority.description,
    dueTimeInMinutes: priority.dueTimeInMinutes
  });
  const {
    handleName,
    handleDescription,
    handleDueTimeInMinutes
  } = handlers;
  const {
    name,
    description,
    dueTimeInMinutes
  } = values;
  const nameError = useMemo(() => !name || name.length === 0 ? t('The_field_is_required', 'name') : undefined, [name, t]);
  const dueTimeInMinutesError = useMemo(() => !dueTimeInMinutes || dueTimeInMinutes <= 0 ? t('The_field_is_required', 'Estimated_due_time_in_minutes') : undefined, [dueTimeInMinutes, t]);
  const savePriority = useMethod('livechat:savePriority');
  const dispatchToastMessage = useToastMessageDispatch();
  const handleReset = useMutableCallback(() => {
    reload();
  });
  const canSave = useMemo(() => !nameError && !dueTimeInMinutesError, [nameError, dueTimeInMinutesError]);
  const handleSave = useMutableCallback(async () => {
    const payload = {
      name,
      description,
      dueTimeInMinutes: "".concat(dueTimeInMinutes)
    };

    if (!canSave) {
      return dispatchToastMessage({
        type: 'error',
        message: t('The_field_is_required')
      });
    }

    try {
      await savePriority(priorityId, payload);
      dispatchToastMessage({
        type: 'success',
        message: t('Saved')
      });
      reload();
      prioritiesRoute.push({});
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }
  });
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
//# sourceMappingURL=/dynamic/ee/client/omnichannel/priorities/febee7b975fb7b7e99740ea8d5d979a0bec3de8a.map
