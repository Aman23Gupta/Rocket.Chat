function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/components/CannedResponse/modals/CreateCannedResponse/index.tsx                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let React, memo, useCallback, useEffect, useMemo, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useState(v) {
    useState = v;
  }

}, 0);
let usePermission;
module.link("../../../../../../../client/contexts/AuthorizationContext", {
  usePermission(v) {
    usePermission = v;
  }

}, 1);
let useSetModal;
module.link("../../../../../../../client/contexts/ModalContext", {
  useSetModal(v) {
    useSetModal = v;
  }

}, 2);
let useEndpoint;
module.link("../../../../../../../client/contexts/ServerContext", {
  useEndpoint(v) {
    useEndpoint = v;
  }

}, 3);
let useToastMessageDispatch;
module.link("../../../../../../../client/contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 4);
let useTranslation;
module.link("../../../../../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 5);
let useForm;
module.link("../../../../../../../client/hooks/useForm", {
  useForm(v) {
    useForm = v;
  }

}, 6);
let CreateCannedResponseModal;
module.link("./CreateCannedResponseModal", {
  default(v) {
    CreateCannedResponseModal = v;
  }

}, 7);

const WrapCreateCannedResponseModal = _ref => {
  let {
    data,
    reloadCannedList
  } = _ref;
  const t = useTranslation();
  const closeModal = useSetModal();
  const dispatchToastMessage = useToastMessageDispatch();
  const saveCannedResponse = useEndpoint('POST', 'canned-responses');
  const hasManagerPermission = usePermission('view-all-canned-responses');
  const hasMonitorPermission = usePermission('save-department-canned-responses');
  const form = useForm({
    _id: data ? data._id : '',
    shortcut: data ? data.shortcut : '',
    text: data ? data.text : '',
    tags: data !== null && data !== void 0 && data.tags && Array.isArray(data.tags) ? data.tags.map(tag => ({
      label: tag,
      value: tag
    })) : [],
    scope: data ? data.scope : 'user',
    departmentId: data !== null && data !== void 0 && data.departmentId ? data.departmentId : ''
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
      }, tags.length > 0 && {
        tags: mappedTags
      }), departmentId && {
        departmentId: departmentId.value
      }));
      dispatchToastMessage({
        type: 'success',
        message: t(_id ? 'Canned_Response_Updated' : 'Canned_Response_Created')
      });
      closeModal(null);
      reloadCannedList === null || reloadCannedList === void 0 ? void 0 : reloadCannedList();
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }
  }, [values, saveCannedResponse, dispatchToastMessage, t, closeModal, reloadCannedList]);

  const onPreview = () => {
    setPreview(!preview);
  };

  return /*#__PURE__*/React.createElement(CreateCannedResponseModal, {
    isManager: hasManagerPermission,
    isMonitor: hasMonitorPermission,
    values: values,
    handlers: handlers,
    errors: errors,
    hasUnsavedChanges: hasUnsavedChanges,
    radioHandlers: radioHandlers,
    radioDescription: radioDescription,
    onClose: closeModal,
    onSave: onSave,
    onPreview: onPreview,
    previewState: preview
  });
};

module.exportDefault( /*#__PURE__*/memo(WrapCreateCannedResponseModal));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/components/CannedResponse/modals/CreateCannedResponse/c49f8182873b9fbe81b132f080eb0b0eefc3e9b8.map
