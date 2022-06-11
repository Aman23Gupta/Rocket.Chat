function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/currentChats/FilterByText.tsx                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["setFilter", "reload"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 1);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 2);
let TextInput, Box, MultiSelect, Select, InputBox;
module.link("@rocket.chat/fuselage", {
  TextInput(v) {
    TextInput = v;
  },

  Box(v) {
    Box = v;
  },

  MultiSelect(v) {
    MultiSelect = v;
  },

  Select(v) {
    Select = v;
  },

  InputBox(v) {
    InputBox = v;
  }

}, 0);
let useMutableCallback, useLocalStorage;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  },

  useLocalStorage(v) {
    useLocalStorage = v;
  }

}, 1);
let moment;
module.link("moment", {
  default(v) {
    moment = v;
  }

}, 2);
let React, useEffect, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 3);
let useSubscription;
module.link("use-subscription", {
  useSubscription(v) {
    useSubscription = v;
  }

}, 4);
let AutoCompleteAgent;
module.link("../../../components/AutoCompleteAgent", {
  default(v) {
    AutoCompleteAgent = v;
  }

}, 5);
let AutoCompleteDepartment;
module.link("../../../components/AutoCompleteDepartment", {
  default(v) {
    AutoCompleteDepartment = v;
  }

}, 6);
let GenericModal;
module.link("../../../components/GenericModal", {
  default(v) {
    GenericModal = v;
  }

}, 7);
let useSetModal;
module.link("../../../contexts/ModalContext", {
  useSetModal(v) {
    useSetModal = v;
  }

}, 8);
let useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 9);
let useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 10);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 11);
let useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 12);
let formsSubscription;
module.link("../additionalForms", {
  formsSubscription(v) {
    formsSubscription = v;
  }

}, 13);
let Label;
module.link("./Label", {
  default(v) {
    Label = v;
  }

}, 14);
let RemoveAllClosed;
module.link("./RemoveAllClosed", {
  default(v) {
    RemoveAllClosed = v;
  }

}, 15);

const FilterByText = _ref => {
  let {
    setFilter,
    reload
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const setModal = useSetModal();
  const dispatchToastMessage = useToastMessageDispatch();
  const t = useTranslation();
  const {
    value: allCustomFields
  } = useEndpointData('livechat/custom-fields');
  const statusOptions = [['all', t('All')], ['closed', t('Closed')], ['opened', t('Open')], ['onhold', t('On_Hold_Chats')]];
  const customFieldsOptions = useMemo(() => allCustomFields !== null && allCustomFields !== void 0 && allCustomFields.customFields ? allCustomFields.customFields.map(_ref2 => {
    let {
      _id,
      label
    } = _ref2;
    return [_id, label];
  }) : [], [allCustomFields]);
  const [guest, setGuest] = useLocalStorage('guest', '');
  const [servedBy, setServedBy] = useLocalStorage('servedBy', 'all');
  const [status, setStatus] = useLocalStorage('status', 'all');
  const [department, setDepartment] = useLocalStorage('department', {
    value: 'all',
    label: t('All')
  });
  const [from, setFrom] = useLocalStorage('from', '');
  const [to, setTo] = useLocalStorage('to', '');
  const [tags, setTags] = useLocalStorage('tags', []);
  const [customFields, setCustomFields] = useLocalStorage('tags', []);
  const handleGuest = useMutableCallback(e => setGuest(e.target.value));
  const handleServedBy = useMutableCallback(e => setServedBy(e));
  const handleStatus = useMutableCallback(e => setStatus(e));
  const handleDepartment = useMutableCallback(e => setDepartment(e));
  const handleFrom = useMutableCallback(e => setFrom(e.target.value));
  const handleTo = useMutableCallback(e => setTo(e.target.value));
  const handleTags = useMutableCallback(e => setTags(e));
  const handleCustomFields = useMutableCallback(e => setCustomFields(e));
  const reset = useMutableCallback(() => {
    setGuest('');
    setServedBy('all');
    setStatus('all');
    setDepartment({
      value: 'all',
      label: t('All')
    });
    setFrom('');
    setTo('');
    setTags([]);
    setCustomFields([]);
  });
  const forms = useSubscription(formsSubscription);
  const {
    useCurrentChatTags = () => undefined
  } = forms;
  const Tags = useCurrentChatTags();
  const onSubmit = useMutableCallback(e => e.preventDefault());

  const reducer = function (acc, curr) {
    acc[curr] = '';
    return acc;
  };

  useEffect(() => {
    setFilter(_objectSpread(_objectSpread({
      guest,
      servedBy,
      status
    }, (department === null || department === void 0 ? void 0 : department.value) && department.value !== 'all' && {
      department: department.value
    }), {}, {
      from: from && moment(new Date(from)).utc().format('YYYY-MM-DDTHH:mm:ss'),
      to: to && moment(new Date(to)).utc().format('YYYY-MM-DDTHH:mm:ss'),
      tags: tags.map(tag => tag.label),
      customFields: customFields.reduce(reducer, {})
    }));
  }, [setFilter, guest, servedBy, status, department, from, to, tags, customFields]);
  const handleClearFilters = useMutableCallback(() => {
    reset();
  });
  const removeClosedChats = useMethod('livechat:removeAllClosedRooms');
  const handleRemoveClosed = useMutableCallback(async () => {
    const onDeleteAll = async () => {
      try {
        await removeClosedChats();
        reload === null || reload === void 0 ? void 0 : reload();
        dispatchToastMessage({
          type: 'success',
          message: t('Chat_removed')
        });
      } catch (error) {
        dispatchToastMessage({
          type: 'error',
          message: error.message
        });
      }

      setModal(null);
    };

    const handleClose = () => {
      setModal(null);
    };

    setModal( /*#__PURE__*/React.createElement(GenericModal, {
      variant: "danger",
      onConfirm: onDeleteAll,
      onClose: handleClose,
      onCancel: handleClose,
      confirmText: t('Delete')
    }));
  });
  return /*#__PURE__*/React.createElement(Box, _extends({
    mb: "x16",
    is: "form",
    onSubmit: onSubmit,
    display: "flex",
    flexDirection: "column"
  }, props), /*#__PURE__*/React.createElement(Box, _extends({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  }, props), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    mie: "x8",
    flexGrow: 1,
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Label, {
    mb: "x4"
  }, t('Guest')), /*#__PURE__*/React.createElement(TextInput, {
    flexShrink: 0,
    placeholder: t('Guest'),
    onChange: handleGuest,
    value: guest
  })), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    mie: "x8",
    flexGrow: 1,
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Label, {
    mb: "x4"
  }, t('Served_By')), /*#__PURE__*/React.createElement(AutoCompleteAgent, {
    haveAll: true,
    value: servedBy,
    onChange: handleServedBy
  })), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    mie: "x8",
    flexGrow: 1,
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Label, {
    mb: "x4"
  }, t('Status')), /*#__PURE__*/React.createElement(Select, {
    flexShrink: 0,
    options: statusOptions,
    value: status,
    onChange: handleStatus,
    placeholder: t('Status')
  })), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    mie: "x8",
    flexGrow: 0,
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Label, {
    mb: "x4"
  }, t('From')), /*#__PURE__*/React.createElement(InputBox, {
    type: "date",
    flexShrink: 0,
    placeholder: t('From'),
    onChange: handleFrom,
    value: from
  })), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    mie: "x8",
    flexGrow: 0,
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Label, {
    mb: "x4"
  }, t('To')), /*#__PURE__*/React.createElement(InputBox, {
    type: "date",
    flexShrink: 0,
    placeholder: t('To'),
    onChange: handleTo,
    value: to
  })), /*#__PURE__*/React.createElement(RemoveAllClosed, {
    handleClearFilters: handleClearFilters,
    handleRemoveClosed: handleRemoveClosed
  })), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    marginBlockStart: "x8",
    flexGrow: 1,
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    mie: "x8",
    flexGrow: 1,
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Label, {
    mb: "x4"
  }, t('Department')), /*#__PURE__*/React.createElement(AutoCompleteDepartment, {
    haveAll: true,
    value: department,
    onChange: handleDepartment,
    label: t('All'),
    onlyMyDepartments: true
  }))), Tags && /*#__PURE__*/React.createElement(Box, _extends({
    display: "flex",
    flexDirection: "row",
    marginBlockStart: "x8"
  }, props), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    mie: "x8",
    flexGrow: 1,
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Label, {
    mb: "x4"
  }, t('Tags')), /*#__PURE__*/React.createElement(Tags, {
    value: tags,
    handler: handleTags
  }))), allCustomFields && /*#__PURE__*/React.createElement(Box, _extends({
    display: "flex",
    flexDirection: "row",
    marginBlockStart: "x8"
  }, props), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    mie: "x8",
    flexGrow: 1,
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Label, {
    mb: "x4"
  }, t('Custom_Fields')), /*#__PURE__*/React.createElement(MultiSelect, _extends({
    options: customFieldsOptions,
    value: customFields,
    onChange: handleCustomFields,
    flexGrow: 1
  }, props)))));
};

module.exportDefault(FilterByText);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/currentChats/87aacb324f917f175f2d237af3e2df57fd7adea9.map
