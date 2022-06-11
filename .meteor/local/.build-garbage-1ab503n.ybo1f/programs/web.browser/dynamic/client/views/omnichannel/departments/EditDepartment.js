function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/departments/EditDepartment.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let FieldGroup, Field, TextInput, Chip, Box, Icon, Divider, ToggleSwitch, TextAreaInput, ButtonGroup, Button, PaginatedSelectFiltered;
module.link("@rocket.chat/fuselage", {
  FieldGroup(v) {
    FieldGroup = v;
  },

  Field(v) {
    Field = v;
  },

  TextInput(v) {
    TextInput = v;
  },

  Chip(v) {
    Chip = v;
  },

  Box(v) {
    Box = v;
  },

  Icon(v) {
    Icon = v;
  },

  Divider(v) {
    Divider = v;
  },

  ToggleSwitch(v) {
    ToggleSwitch = v;
  },

  TextAreaInput(v) {
    TextAreaInput = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Button(v) {
    Button = v;
  },

  PaginatedSelectFiltered(v) {
    PaginatedSelectFiltered = v;
  }

}, 0);
let useMutableCallback, useUniqueId;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  },

  useUniqueId(v) {
    useUniqueId = v;
  }

}, 1);
let React, useMemo, useState, useRef;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useState(v) {
    useState = v;
  },

  useRef(v) {
    useRef = v;
  }

}, 2);
let useSubscription;
module.link("use-subscription", {
  useSubscription(v) {
    useSubscription = v;
  }

}, 3);
let validateEmail;
module.link("../../../../lib/emailValidator", {
  validateEmail(v) {
    validateEmail = v;
  }

}, 4);
let Page;
module.link("../../../components/Page", {
  default(v) {
    Page = v;
  }

}, 5);
let useRoomsList;
module.link("../../../components/RoomAutoComplete/hooks/useRoomsList", {
  useRoomsList(v) {
    useRoomsList = v;
  }

}, 6);
let useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 7);
let useMethod, useEndpoint;
module.link("../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  },

  useEndpoint(v) {
    useEndpoint = v;
  }

}, 8);
let useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 9);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 10);
let useRecordList;
module.link("../../../hooks/lists/useRecordList", {
  useRecordList(v) {
    useRecordList = v;
  }

}, 11);
let useComponentDidUpdate;
module.link("../../../hooks/useComponentDidUpdate", {
  useComponentDidUpdate(v) {
    useComponentDidUpdate = v;
  }

}, 12);
let useForm;
module.link("../../../hooks/useForm", {
  useForm(v) {
    useForm = v;
  }

}, 13);
let AsyncStatePhase;
module.link("../../../lib/asyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 14);
let formsSubscription;
module.link("../additionalForms", {
  formsSubscription(v) {
    formsSubscription = v;
  }

}, 15);
let DepartmentsAgentsTable;
module.link("./DepartmentsAgentsTable", {
  default(v) {
    DepartmentsAgentsTable = v;
  }

}, 16);

function withDefault(key, defaultValue) {
  return key || defaultValue;
}

function EditDepartment(_ref) {
  var _allowedToForwardData;

  let {
    data,
    id,
    title,
    reload,
    allowedToForwardData
  } = _ref;
  const t = useTranslation();
  const departmentsRoute = useRoute('omnichannel-departments');
  const {
    useEeNumberInput = () => {},
    useEeTextInput = () => {},
    useEeTextAreaInput = () => {},
    useDepartmentForwarding = () => {},
    useDepartmentBusinessHours = () => {},
    useSelectForwardDepartment = () => {}
  } = useSubscription(formsSubscription);
  const initialAgents = useRef(data && data.agents || []);
  const MaxChats = useEeNumberInput();
  const VisitorInactivity = useEeNumberInput();
  const WaitingQueueMessageInput = useEeTextAreaInput();
  const AbandonedMessageInput = useEeTextInput();
  const DepartmentForwarding = useDepartmentForwarding();
  const DepartmentBusinessHours = useDepartmentBusinessHours();
  const AutoCompleteDepartment = useSelectForwardDepartment();
  const [agentList, setAgentList] = useState([]);
  const [agentsRemoved, setAgentsRemoved] = useState([]);
  const [agentsAdded, setAgentsAdded] = useState([]);
  const {
    department
  } = data || {
    department: {}
  };
  const [[tags, tagsText], setTagsState] = useState(() => {
    var _department$chatClosi;

    return [(_department$chatClosi = department === null || department === void 0 ? void 0 : department.chatClosingTags) !== null && _department$chatClosi !== void 0 ? _department$chatClosi : [], ''];
  });
  const {
    values,
    handlers,
    hasUnsavedChanges
  } = useForm({
    name: withDefault(department === null || department === void 0 ? void 0 : department.name, ''),
    email: withDefault(department === null || department === void 0 ? void 0 : department.email, ''),
    description: withDefault(department === null || department === void 0 ? void 0 : department.description, ''),
    enabled: !!(department !== null && department !== void 0 && department.enabled),
    maxNumberSimultaneousChat: department === null || department === void 0 ? void 0 : department.maxNumberSimultaneousChat,
    showOnRegistration: !!(department !== null && department !== void 0 && department.showOnRegistration),
    showOnOfflineForm: !!(department !== null && department !== void 0 && department.showOnOfflineForm),
    abandonedRoomsCloseCustomMessage: withDefault(department === null || department === void 0 ? void 0 : department.abandonedRoomsCloseCustomMessage, ''),
    requestTagBeforeClosingChat: !!(department !== null && department !== void 0 && department.requestTagBeforeClosingChat),
    offlineMessageChannelName: withDefault(department === null || department === void 0 ? void 0 : department.offlineMessageChannelName, ''),
    visitorInactivityTimeoutInSeconds: department === null || department === void 0 ? void 0 : department.visitorInactivityTimeoutInSeconds,
    waitingQueueMessage: withDefault(department === null || department === void 0 ? void 0 : department.waitingQueueMessage, ''),
    departmentsAllowedToForward: (allowedToForwardData === null || allowedToForwardData === void 0 ? void 0 : (_allowedToForwardData = allowedToForwardData.departments) === null || _allowedToForwardData === void 0 ? void 0 : _allowedToForwardData.map(dep => ({
      label: dep.name,
      value: dep._id
    }))) || [],
    fallbackForwardDepartment: withDefault(department === null || department === void 0 ? void 0 : department.fallbackForwardDepartment, '')
  });
  const {
    handleName,
    handleEmail,
    handleDescription,
    handleEnabled,
    handleMaxNumberSimultaneousChat,
    handleShowOnRegistration,
    handleShowOnOfflineForm,
    handleAbandonedRoomsCloseCustomMessage,
    handleRequestTagBeforeClosingChat,
    handleOfflineMessageChannelName,
    handleVisitorInactivityTimeoutInSeconds,
    handleWaitingQueueMessage,
    handleDepartmentsAllowedToForward,
    handleFallbackForwardDepartment
  } = handlers;
  const {
    name,
    email,
    description,
    enabled,
    maxNumberSimultaneousChat,
    showOnRegistration,
    showOnOfflineForm,
    abandonedRoomsCloseCustomMessage,
    requestTagBeforeClosingChat,
    offlineMessageChannelName,
    visitorInactivityTimeoutInSeconds,
    waitingQueueMessage,
    departmentsAllowedToForward,
    fallbackForwardDepartment
  } = values;
  const {
    itemsList: RoomsList,
    loadMoreItems: loadMoreRooms
  } = useRoomsList(useMemo(() => ({
    text: offlineMessageChannelName
  }), [offlineMessageChannelName]));
  const {
    phase: roomsPhase,
    items: roomsItems,
    itemCount: roomsTotal
  } = useRecordList(RoomsList);

  const handleTagChipClick = tag => () => {
    setTagsState(_ref2 => {
      let [tags, tagsText] = _ref2;
      return [tags.filter(_tag => _tag !== tag), tagsText];
    });
  };

  const handleTagTextSubmit = useMutableCallback(() => {
    setTagsState(state => {
      const [tags, tagsText] = state;

      if (tags.includes(tagsText)) {
        return state;
      }

      return [[...tags, tagsText], ''];
    });
  });

  const handleTagTextChange = e => {
    setTagsState(_ref3 => {
      let [tags] = _ref3;
      return [tags, e.target.value];
    });
  };

  const saveDepartmentInfo = useMethod('livechat:saveDepartment');
  const saveDepartmentAgentsInfoOnEdit = useEndpoint('POST', "livechat/department/".concat(id, "/agents"));
  const dispatchToastMessage = useToastMessageDispatch();
  const [nameError, setNameError] = useState();
  const [emailError, setEmailError] = useState();
  const [tagError, setTagError] = useState();
  useComponentDidUpdate(() => {
    setNameError(!name ? t('The_field_is_required', 'name') : '');
  }, [t, name]);
  useComponentDidUpdate(() => {
    setEmailError(!email ? t('The_field_is_required', 'email') : '');
  }, [t, email]);
  useComponentDidUpdate(() => {
    setEmailError(!validateEmail(email) ? t('Validate_email_address') : '');
  }, [t, email]);
  useComponentDidUpdate(() => {
    setTagError(requestTagBeforeClosingChat && (!tags || tags.length === 0) ? t('The_field_is_required', 'name') : '');
  }, [requestTagBeforeClosingChat, t, tags]);
  const handleSubmit = useMutableCallback(async e => {
    e.preventDefault();
    let error = false;

    if (!name) {
      setNameError(t('The_field_is_required', 'name'));
      error = true;
    }

    if (!email) {
      setEmailError(t('The_field_is_required', 'email'));
      error = true;
    }

    if (!validateEmail(email)) {
      setEmailError(t('Validate_email_address'));
      error = true;
    }

    if (requestTagBeforeClosingChat && (!tags || tags.length === 0)) {
      setTagError(t('The_field_is_required', 'tags'));
      error = true;
    }

    if (error) {
      return;
    }

    const payload = {
      enabled,
      name,
      description,
      showOnRegistration,
      showOnOfflineForm,
      requestTagBeforeClosingChat,
      email,
      chatClosingTags: tags,
      offlineMessageChannelName,
      maxNumberSimultaneousChat,
      visitorInactivityTimeoutInSeconds,
      abandonedRoomsCloseCustomMessage,
      waitingQueueMessage,
      departmentsAllowedToForward: departmentsAllowedToForward === null || departmentsAllowedToForward === void 0 ? void 0 : departmentsAllowedToForward.map(dep => dep.value).join(),
      fallbackForwardDepartment: fallbackForwardDepartment.value
    };
    const agentListPayload = {
      upsert: agentList.filter(agent => !initialAgents.current.some(initialAgent => initialAgent._id === agent._id && agent.count === initialAgent.count && agent.order === initialAgent.order)),
      remove: initialAgents.current.filter(initialAgent => !agentList.some(agent => initialAgent._id === agent._id))
    };

    try {
      if (id) {
        await saveDepartmentInfo(id, payload, []);

        if (agentListPayload.upsert.length > 0 || agentListPayload.remove.length > 0) {
          await saveDepartmentAgentsInfoOnEdit(agentListPayload);
        }
      } else {
        await saveDepartmentInfo(id, payload, agentList);
      }

      dispatchToastMessage({
        type: 'success',
        message: t('Saved')
      });
      reload();
      departmentsRoute.push({});
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }
  });
  const handleReturn = useMutableCallback(() => {
    departmentsRoute.push({});
  });
  const invalidForm = !name || !email || !validateEmail(email) || !hasUnsavedChanges || requestTagBeforeClosingChat && (!tags || tags.length === 0);
  const formId = useUniqueId();
  const hasNewAgent = useMemo(() => data.agents.length === agentList.length, [data.agents, agentList]);

  const agentsHaveChanged = () => {
    let hasChanges = false;

    if (agentList.length !== initialAgents.current.length) {
      hasChanges = true;
    }

    if (agentsAdded.length > 0 && agentsRemoved.length > 0) {
      hasChanges = true;
    }

    agentList.forEach(agent => {
      const existingAgent = initialAgents.current.find(initial => initial.agentId === agent.agentId);

      if (existingAgent) {
        if (agent.count !== existingAgent.count) {
          hasChanges = true;
        }

        if (agent.order !== existingAgent.order) {
          hasChanges = true;
        }
      }
    });
    return hasChanges;
  };

  return /*#__PURE__*/React.createElement(Page, {
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: title
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
    onClick: handleReturn
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "back"
  }), " ", t('Back')), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    form: formId,
    primary: true,
    disabled: invalidForm && hasNewAgent && !(id && agentsHaveChanged())
  }, t('Save')))), /*#__PURE__*/React.createElement(Page.ScrollableContentWithShadow, null, /*#__PURE__*/React.createElement(FieldGroup, {
    w: "full",
    alignSelf: "center",
    maxWidth: "x600",
    id: formId,
    is: "form",
    autoComplete: "off",
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Enabled')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
    flexGrow: 1,
    checked: enabled,
    onChange: handleEnabled
  })))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Name'), "*"), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    flexGrow: 1,
    error: nameError,
    value: name,
    onChange: handleName,
    placeholder: t('Name')
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Description')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextAreaInput, {
    flexGrow: 1,
    value: description,
    onChange: handleDescription,
    placeholder: t('Description')
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Show_on_registration_page')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
    flexGrow: 1,
    checked: showOnRegistration,
    onChange: handleShowOnRegistration
  })))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Email'), "*"), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    flexGrow: 1,
    error: emailError,
    value: email,
    addon: /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: "x20"
    }),
    onChange: handleEmail,
    placeholder: t('Email')
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Show_on_offline_page')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
    flexGrow: 1,
    checked: showOnOfflineForm,
    onChange: handleShowOnOfflineForm
  })))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Livechat_DepartmentOfflineMessageToChannel')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(PaginatedSelectFiltered, {
    value: offlineMessageChannelName,
    onChange: handleOfflineMessageChannelName,
    flexShrink: 0,
    filter: offlineMessageChannelName,
    setFilter: handleOfflineMessageChannelName,
    options: roomsItems,
    placeholder: t('Channel_name'),
    endReached: roomsPhase === AsyncStatePhase.LOADING ? () => {} : start => loadMoreRooms(start, Math.min(50, roomsTotal))
  }))), MaxChats && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(MaxChats, {
    value: maxNumberSimultaneousChat,
    handler: handleMaxNumberSimultaneousChat,
    label: 'Max_number_of_chats_per_agent',
    placeholder: "Max_number_of_chats_per_agent_description"
  })), VisitorInactivity && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(VisitorInactivity, {
    value: visitorInactivityTimeoutInSeconds,
    handler: handleVisitorInactivityTimeoutInSeconds,
    label: 'How_long_to_wait_to_consider_visitor_abandonment_in_seconds',
    placeholder: "Number_in_seconds"
  })), AbandonedMessageInput && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(AbandonedMessageInput, {
    value: abandonedRoomsCloseCustomMessage,
    handler: handleAbandonedRoomsCloseCustomMessage,
    label: 'Livechat_abandoned_rooms_closed_custom_message',
    placeholder: "Enter_a_custom_message"
  })), WaitingQueueMessageInput && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(WaitingQueueMessageInput, {
    value: waitingQueueMessage,
    handler: handleWaitingQueueMessage,
    label: 'Waiting_queue_message'
  })), DepartmentForwarding && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(DepartmentForwarding, {
    departmentId: id,
    value: departmentsAllowedToForward,
    handler: handleDepartmentsAllowedToForward,
    label: 'List_of_departments_for_forward',
    placeholder: "Enter_a_department_name"
  })), AutoCompleteDepartment && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Fallback_forward_department')), /*#__PURE__*/React.createElement(AutoCompleteDepartment, {
    haveNone: true,
    excludeDepartmentId: department === null || department === void 0 ? void 0 : department._id,
    value: fallbackForwardDepartment,
    onChange: handleFallbackForwardDepartment,
    placeholder: t('Fallback_forward_department'),
    label: t('Fallback_forward_department'),
    onlyMyDepartments: true
  })), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Request_tag_before_closing_chat')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ToggleSwitch, {
    flexGrow: 1,
    checked: requestTagBeforeClosingChat,
    onChange: handleRequestTagBeforeClosingChat
  })))), requestTagBeforeClosingChat && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, {
    alignSelf: "stretch"
  }, t('Conversation_closing_tags'), "*"), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    error: tagError,
    value: tagsText,
    onChange: handleTagTextChange,
    placeholder: t('Enter_a_tag')
  }), /*#__PURE__*/React.createElement(Button, {
    mis: "x8",
    title: t('add'),
    onClick: handleTagTextSubmit
  }, t('Add'))), /*#__PURE__*/React.createElement(Field.Hint, null, t('Conversation_closing_tags_description')), (tags === null || tags === void 0 ? void 0 : tags.length) > 0 && /*#__PURE__*/React.createElement(Field.Row, {
    justifyContent: "flex-start"
  }, tags.map((tag, i) => /*#__PURE__*/React.createElement(Chip, {
    key: i,
    onClick: handleTagChipClick(tag),
    mie: "x8"
  }, tag)))), DepartmentBusinessHours && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(DepartmentBusinessHours, {
    bhId: department === null || department === void 0 ? void 0 : department.businessHourId
  })), /*#__PURE__*/React.createElement(Divider, {
    mb: "x16"
  }), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, {
    mb: "x4"
  }, t('Agents'), ":"), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    height: "50vh"
  }, /*#__PURE__*/React.createElement(DepartmentsAgentsTable, {
    agents: data && data.agents,
    setAgentListFinal: setAgentList,
    setAgentsAdded: setAgentsAdded,
    setAgentsRemoved: setAgentsRemoved
  })))))));
}

module.exportDefault(EditDepartment);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/departments/c6ac0a5901d5980c8ac60b762d7ae8e9ee1e0034.map
