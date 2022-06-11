function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/cannedResponses/CannedResponseEdit.tsx                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let Button, ButtonGroup, Icon, FieldGroup;
module.link("@rocket.chat/fuselage", {
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
let React, memo, useState, useMemo, useEffect, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  },

  useState(v) {
    useState = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useCallback(v) {
    useCallback = v;
  }

}, 2);
let Page;
module.link("../../../../client/components/Page", {
  default(v) {
    Page = v;
  }

}, 3);
let usePermission;
module.link("../../../../client/contexts/AuthorizationContext", {
  usePermission(v) {
    usePermission = v;
  }

}, 4);
let useRoute;
module.link("../../../../client/contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 5);
let useEndpoint;
module.link("../../../../client/contexts/ServerContext", {
  useEndpoint(v) {
    useEndpoint = v;
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
let CannedResponseForm;
module.link("./components/cannedResponseForm", {
  default(v) {
    CannedResponseForm = v;
  }

}, 10);

const CannedResponseEdit = _ref => {
  var _data$cannedResponse, _data$cannedResponse2, _departmentData$depar;

  let {
    data,
    reload,
    totalDataReload,
    isNew = false,
    departmentData = {}
  } = _ref;
  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  const Route = useRoute('omnichannel-canned-responses');
  const handleReturn = useMutableCallback(() => Route.push({
    context: ''
  }));
  const saveCannedResponse = useEndpoint('POST', 'canned-responses');
  const hasManagerPermission = usePermission('view-all-canned-responses');
  const hasMonitorPermission = usePermission('save-department-canned-responses');
  const form = useForm({
    _id: data !== null && data !== void 0 && data.cannedResponse ? data.cannedResponse._id : '',
    shortcut: data ? data.cannedResponse.shortcut : '',
    text: data ? data.cannedResponse.text : '',
    tags: data !== null && data !== void 0 && (_data$cannedResponse = data.cannedResponse) !== null && _data$cannedResponse !== void 0 && _data$cannedResponse.tags && Array.isArray(data.cannedResponse.tags) ? data.cannedResponse.tags.map(tag => ({
      label: tag,
      value: tag
    })) : [],
    scope: data ? data.cannedResponse.scope : 'user',
    departmentId: data !== null && data !== void 0 && (_data$cannedResponse2 = data.cannedResponse) !== null && _data$cannedResponse2 !== void 0 && _data$cannedResponse2.departmentId ? {
      value: data.cannedResponse.departmentId,
      label: departmentData === null || departmentData === void 0 ? void 0 : (_departmentData$depar = departmentData.department) === null || _departmentData$depar === void 0 ? void 0 : _departmentData$depar.name
    } : ''
  });
  const {
    values,
    handlers,
    hasUnsavedChanges
  } = form;
  const [errors, setErrors] = useState({});
  const [radioDescription, setRadioDescription] = useState(t('Canned_Response_Sharing_Private_Description'));
  const [preview, setPreview] = useState(false);
  const listErrors = useMemo(() => {
    const empty = {};

    for (const [key, value] of Object.entries(values)) {
      if (['shortcut', 'text'].includes(key) && !value) {
        empty[key] = t('Field_required');
      }
    }

    if (values.scope === 'department' && !values.departmentId) {
      empty.departmentId = t('Field_required');
    }

    return empty;
  }, [t, values]);
  useEffect(() => {
    setErrors(listErrors);
  }, [values.shortcut, values.text, values.departmentId, listErrors]);
  const radioHandlers = {
    setPublic: () => {
      handlers.handleScope('global');
      handlers.handleDepartmentId('');
      setRadioDescription(t('Canned_Response_Sharing_Public_Description'));
    },
    setDepartment: () => {
      handlers.handleScope('department');
      setRadioDescription(t('Canned_Response_Sharing_Department_Description'));
    },
    setPrivate: () => {
      handlers.handleScope('user');
      handlers.handleDepartmentId('');
      setRadioDescription(t('Canned_Response_Sharing_Private_Description'));
    }
  };
  const onSave = useCallback(async () => {
    try {
      const {
        _id,
        shortcut,
        text,
        scope,
        tags,
        departmentId
      } = values;
      const mappedTags = tags.map(tag => typeof tag === 'object' ? tag === null || tag === void 0 ? void 0 : tag.value : tag);
      await saveCannedResponse(_objectSpread(_objectSpread(_objectSpread({}, _id && {
        _id
      }), {}, {
        shortcut,
        text,
        scope
      }, mappedTags.length > 0 && {
        tags: mappedTags
      }), departmentId && {
        departmentId: departmentId.value
      }));
      dispatchToastMessage({
        type: 'success',
        message: t(_id ? 'Canned_Response_Updated' : 'Canned_Response_Created')
      });
      Route.push({
        context: ''
      });
      reload();
      totalDataReload();
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }
  }, [values, saveCannedResponse, dispatchToastMessage, t, Route, reload, totalDataReload]);

  const onPreview = () => {
    setPreview(!preview);
  };

  const {
    shortcut,
    text,
    scope,
    departmentId
  } = values;
  const checkDepartment = scope !== 'department' || scope === 'department' && departmentId;
  const canSave = shortcut && text && checkDepartment;
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: isNew ? t('New_CannedResponse') : t('Edit_CannedResponse')
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
    onClick: handleReturn
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "back"
  }), " ", t('Back')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    mie: "none",
    flexGrow: 1,
    disabled: !hasUnsavedChanges || !canSave,
    onClick: onSave
  }, t('Save')))), /*#__PURE__*/React.createElement(Page.ScrollableContentWithShadow, {
    fontScale: "p2"
  }, /*#__PURE__*/React.createElement(FieldGroup, {
    w: "full",
    alignSelf: "center",
    maxWidth: "x600",
    is: "form",
    autoComplete: "off"
  }, /*#__PURE__*/React.createElement(CannedResponseForm, {
    isManager: hasManagerPermission,
    isMonitor: hasMonitorPermission,
    values: values,
    handlers: handlers,
    errors: errors,
    radioHandlers: radioHandlers,
    radioDescription: radioDescription,
    onPreview: onPreview,
    previewState: preview
  }))));
};

module.exportDefault( /*#__PURE__*/memo(CannedResponseEdit));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/cannedResponses/6bec0e2371f713d2602445d77983eca83b7fc73f.map
