function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/departments/EditDepartment.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _toConsumableArray;

module.link("@babel/runtime/helpers/toConsumableArray", {
  default: function (v) {
    _toConsumableArray = v;
  }
}, 1);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 2);
var FieldGroup, Field, TextInput, Chip, Box, Icon, Divider, ToggleSwitch, TextAreaInput, ButtonGroup, Button, PaginatedSelectFiltered;
module.link("@rocket.chat/fuselage", {
  FieldGroup: function (v) {
    FieldGroup = v;
  },
  Field: function (v) {
    Field = v;
  },
  TextInput: function (v) {
    TextInput = v;
  },
  Chip: function (v) {
    Chip = v;
  },
  Box: function (v) {
    Box = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  Divider: function (v) {
    Divider = v;
  },
  ToggleSwitch: function (v) {
    ToggleSwitch = v;
  },
  TextAreaInput: function (v) {
    TextAreaInput = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Button: function (v) {
    Button = v;
  },
  PaginatedSelectFiltered: function (v) {
    PaginatedSelectFiltered = v;
  }
}, 0);
var useMutableCallback, useUniqueId;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  },
  useUniqueId: function (v) {
    useUniqueId = v;
  }
}, 1);
var React, useMemo, useState, useRef;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useState: function (v) {
    useState = v;
  },
  useRef: function (v) {
    useRef = v;
  }
}, 2);
var useSubscription;
module.link("use-subscription", {
  useSubscription: function (v) {
    useSubscription = v;
  }
}, 3);
var validateEmail;
module.link("../../../../lib/emailValidator", {
  validateEmail: function (v) {
    validateEmail = v;
  }
}, 4);
var Page;
module.link("../../../components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 5);
var useRoomsList;
module.link("../../../components/RoomAutoComplete/hooks/useRoomsList", {
  useRoomsList: function (v) {
    useRoomsList = v;
  }
}, 6);
var useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 7);
var useMethod, useEndpoint;
module.link("../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  },
  useEndpoint: function (v) {
    useEndpoint = v;
  }
}, 8);
var useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 9);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 10);
var useRecordList;
module.link("../../../hooks/lists/useRecordList", {
  useRecordList: function (v) {
    useRecordList = v;
  }
}, 11);
var useComponentDidUpdate;
module.link("../../../hooks/useComponentDidUpdate", {
  useComponentDidUpdate: function (v) {
    useComponentDidUpdate = v;
  }
}, 12);
var useForm;
module.link("../../../hooks/useForm", {
  useForm: function (v) {
    useForm = v;
  }
}, 13);
var AsyncStatePhase;
module.link("../../../lib/asyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 14);
var formsSubscription;
module.link("../additionalForms", {
  formsSubscription: function (v) {
    formsSubscription = v;
  }
}, 15);
var DepartmentsAgentsTable;
module.link("./DepartmentsAgentsTable", {
  "default": function (v) {
    DepartmentsAgentsTable = v;
  }
}, 16);

function withDefault(key, defaultValue) {
  return key || defaultValue;
}

function EditDepartment(_ref) {
  var _allowedToForwardData;

  var data = _ref.data,
      id = _ref.id,
      title = _ref.title,
      reload = _ref.reload,
      allowedToForwardData = _ref.allowedToForwardData;
  var t = useTranslation();
  var departmentsRoute = useRoute('omnichannel-departments');

  var _useSubscription = useSubscription(formsSubscription),
      _useSubscription$useE = _useSubscription.useEeNumberInput,
      useEeNumberInput = _useSubscription$useE === void 0 ? function () {} : _useSubscription$useE,
      _useSubscription$useE2 = _useSubscription.useEeTextInput,
      useEeTextInput = _useSubscription$useE2 === void 0 ? function () {} : _useSubscription$useE2,
      _useSubscription$useE3 = _useSubscription.useEeTextAreaInput,
      useEeTextAreaInput = _useSubscription$useE3 === void 0 ? function () {} : _useSubscription$useE3,
      _useSubscription$useD = _useSubscription.useDepartmentForwarding,
      useDepartmentForwarding = _useSubscription$useD === void 0 ? function () {} : _useSubscription$useD,
      _useSubscription$useD2 = _useSubscription.useDepartmentBusinessHours,
      useDepartmentBusinessHours = _useSubscription$useD2 === void 0 ? function () {} : _useSubscription$useD2,
      _useSubscription$useS = _useSubscription.useSelectForwardDepartment,
      useSelectForwardDepartment = _useSubscription$useS === void 0 ? function () {} : _useSubscription$useS;

  var initialAgents = useRef(data && data.agents || []);
  var MaxChats = useEeNumberInput();
  var VisitorInactivity = useEeNumberInput();
  var WaitingQueueMessageInput = useEeTextAreaInput();
  var AbandonedMessageInput = useEeTextInput();
  var DepartmentForwarding = useDepartmentForwarding();
  var DepartmentBusinessHours = useDepartmentBusinessHours();
  var AutoCompleteDepartment = useSelectForwardDepartment();

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      agentList = _useState2[0],
      setAgentList = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      agentsRemoved = _useState4[0],
      setAgentsRemoved = _useState4[1];

  var _useState5 = useState([]),
      _useState6 = _slicedToArray(_useState5, 2),
      agentsAdded = _useState6[0],
      setAgentsAdded = _useState6[1];

  var _ref2 = data || {
    department: {}
  },
      department = _ref2.department;

  var _useState7 = useState(function () {
    var _department$chatClosi;

    return [(_department$chatClosi = department === null || department === void 0 ? void 0 : department.chatClosingTags) !== null && _department$chatClosi !== void 0 ? _department$chatClosi : [], ''];
  }),
      _useState8 = _slicedToArray(_useState7, 2),
      _useState8$ = _slicedToArray(_useState8[0], 2),
      tags = _useState8$[0],
      tagsText = _useState8$[1],
      setTagsState = _useState8[1];

  var _useForm = useForm({
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
    departmentsAllowedToForward: (allowedToForwardData === null || allowedToForwardData === void 0 ? void 0 : (_allowedToForwardData = allowedToForwardData.departments) === null || _allowedToForwardData === void 0 ? void 0 : _allowedToForwardData.map(function (dep) {
      return {
        label: dep.name,
        value: dep._id
      };
    })) || [],
    fallbackForwardDepartment: withDefault(department === null || department === void 0 ? void 0 : department.fallbackForwardDepartment, '')
  }),
      values = _useForm.values,
      handlers = _useForm.handlers,
      hasUnsavedChanges = _useForm.hasUnsavedChanges;

  var handleName = handlers.handleName,
      handleEmail = handlers.handleEmail,
      handleDescription = handlers.handleDescription,
      handleEnabled = handlers.handleEnabled,
      handleMaxNumberSimultaneousChat = handlers.handleMaxNumberSimultaneousChat,
      handleShowOnRegistration = handlers.handleShowOnRegistration,
      handleShowOnOfflineForm = handlers.handleShowOnOfflineForm,
      handleAbandonedRoomsCloseCustomMessage = handlers.handleAbandonedRoomsCloseCustomMessage,
      handleRequestTagBeforeClosingChat = handlers.handleRequestTagBeforeClosingChat,
      handleOfflineMessageChannelName = handlers.handleOfflineMessageChannelName,
      handleVisitorInactivityTimeoutInSeconds = handlers.handleVisitorInactivityTimeoutInSeconds,
      handleWaitingQueueMessage = handlers.handleWaitingQueueMessage,
      handleDepartmentsAllowedToForward = handlers.handleDepartmentsAllowedToForward,
      handleFallbackForwardDepartment = handlers.handleFallbackForwardDepartment;
  var name = values.name,
      email = values.email,
      description = values.description,
      enabled = values.enabled,
      maxNumberSimultaneousChat = values.maxNumberSimultaneousChat,
      showOnRegistration = values.showOnRegistration,
      showOnOfflineForm = values.showOnOfflineForm,
      abandonedRoomsCloseCustomMessage = values.abandonedRoomsCloseCustomMessage,
      requestTagBeforeClosingChat = values.requestTagBeforeClosingChat,
      offlineMessageChannelName = values.offlineMessageChannelName,
      visitorInactivityTimeoutInSeconds = values.visitorInactivityTimeoutInSeconds,
      waitingQueueMessage = values.waitingQueueMessage,
      departmentsAllowedToForward = values.departmentsAllowedToForward,
      fallbackForwardDepartment = values.fallbackForwardDepartment;

  var _useRoomsList = useRoomsList(useMemo(function () {
    return {
      text: offlineMessageChannelName
    };
  }, [offlineMessageChannelName])),
      RoomsList = _useRoomsList.itemsList,
      loadMoreRooms = _useRoomsList.loadMoreItems;

  var _useRecordList = useRecordList(RoomsList),
      roomsPhase = _useRecordList.phase,
      roomsItems = _useRecordList.items,
      roomsTotal = _useRecordList.itemCount;

  var handleTagChipClick = function (tag) {
    return function () {
      setTagsState(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 2),
            tags = _ref4[0],
            tagsText = _ref4[1];

        return [tags.filter(function (_tag) {
          return _tag !== tag;
        }), tagsText];
      });
    };
  };

  var handleTagTextSubmit = useMutableCallback(function () {
    setTagsState(function (state) {
      var _state = _slicedToArray(state, 2),
          tags = _state[0],
          tagsText = _state[1];

      if (tags.includes(tagsText)) {
        return state;
      }

      return [[].concat(_toConsumableArray(tags), [tagsText]), ''];
    });
  });

  var handleTagTextChange = function (e) {
    setTagsState(function (_ref5) {
      var _ref6 = _slicedToArray(_ref5, 1),
          tags = _ref6[0];

      return [tags, e.target.value];
    });
  };

  var saveDepartmentInfo = useMethod('livechat:saveDepartment');
  var saveDepartmentAgentsInfoOnEdit = useEndpoint('POST', "livechat/department/" + id + "/agents");
  var dispatchToastMessage = useToastMessageDispatch();

  var _useState9 = useState(),
      _useState10 = _slicedToArray(_useState9, 2),
      nameError = _useState10[0],
      setNameError = _useState10[1];

  var _useState11 = useState(),
      _useState12 = _slicedToArray(_useState11, 2),
      emailError = _useState12[0],
      setEmailError = _useState12[1];

  var _useState13 = useState(),
      _useState14 = _slicedToArray(_useState13, 2),
      tagError = _useState14[0],
      setTagError = _useState14[1];

  useComponentDidUpdate(function () {
    setNameError(!name ? t('The_field_is_required', 'name') : '');
  }, [t, name]);
  useComponentDidUpdate(function () {
    setEmailError(!email ? t('The_field_is_required', 'email') : '');
  }, [t, email]);
  useComponentDidUpdate(function () {
    setEmailError(!validateEmail(email) ? t('Validate_email_address') : '');
  }, [t, email]);
  useComponentDidUpdate(function () {
    setTagError(requestTagBeforeClosingChat && (!tags || tags.length === 0) ? t('The_field_is_required', 'name') : '');
  }, [requestTagBeforeClosingChat, t, tags]);
  var handleSubmit = useMutableCallback(function () {
    function _callee(e) {
      var error, payload, agentListPayload;
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                e.preventDefault();
                error = false;

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

                if (!error) {
                  _context.next = 8;
                  break;
                }

                return _context.abrupt("return");

              case 8:
                payload = {
                  enabled: enabled,
                  name: name,
                  description: description,
                  showOnRegistration: showOnRegistration,
                  showOnOfflineForm: showOnOfflineForm,
                  requestTagBeforeClosingChat: requestTagBeforeClosingChat,
                  email: email,
                  chatClosingTags: tags,
                  offlineMessageChannelName: offlineMessageChannelName,
                  maxNumberSimultaneousChat: maxNumberSimultaneousChat,
                  visitorInactivityTimeoutInSeconds: visitorInactivityTimeoutInSeconds,
                  abandonedRoomsCloseCustomMessage: abandonedRoomsCloseCustomMessage,
                  waitingQueueMessage: waitingQueueMessage,
                  departmentsAllowedToForward: departmentsAllowedToForward === null || departmentsAllowedToForward === void 0 ? void 0 : departmentsAllowedToForward.map(function (dep) {
                    return dep.value;
                  }).join(),
                  fallbackForwardDepartment: fallbackForwardDepartment.value
                };
                agentListPayload = {
                  upsert: agentList.filter(function (agent) {
                    return !initialAgents.current.some(function (initialAgent) {
                      return initialAgent._id === agent._id && agent.count === initialAgent.count && agent.order === initialAgent.order;
                    });
                  }),
                  remove: initialAgents.current.filter(function (initialAgent) {
                    return !agentList.some(function (agent) {
                      return initialAgent._id === agent._id;
                    });
                  })
                };
                _context.prev = 10;

                if (!id) {
                  _context.next = 19;
                  break;
                }

                _context.next = 14;
                return _regeneratorRuntime.awrap(saveDepartmentInfo(id, payload, []));

              case 14:
                if (!(agentListPayload.upsert.length > 0 || agentListPayload.remove.length > 0)) {
                  _context.next = 17;
                  break;
                }

                _context.next = 17;
                return _regeneratorRuntime.awrap(saveDepartmentAgentsInfoOnEdit(agentListPayload));

              case 17:
                _context.next = 21;
                break;

              case 19:
                _context.next = 21;
                return _regeneratorRuntime.awrap(saveDepartmentInfo(id, payload, agentList));

              case 21:
                dispatchToastMessage({
                  type: 'success',
                  message: t('Saved')
                });
                reload();
                departmentsRoute.push({});
                _context.next = 29;
                break;

              case 26:
                _context.prev = 26;
                _context.t0 = _context["catch"](10);
                dispatchToastMessage({
                  type: 'error',
                  message: _context.t0
                });

              case 29:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[10, 26]], Promise);
    }

    return _callee;
  }());
  var handleReturn = useMutableCallback(function () {
    departmentsRoute.push({});
  });
  var invalidForm = !name || !email || !validateEmail(email) || !hasUnsavedChanges || requestTagBeforeClosingChat && (!tags || tags.length === 0);
  var formId = useUniqueId();
  var hasNewAgent = useMemo(function () {
    return data.agents.length === agentList.length;
  }, [data.agents, agentList]);

  var agentsHaveChanged = function () {
    var hasChanges = false;

    if (agentList.length !== initialAgents.current.length) {
      hasChanges = true;
    }

    if (agentsAdded.length > 0 && agentsRemoved.length > 0) {
      hasChanges = true;
    }

    agentList.forEach(function (agent) {
      var existingAgent = initialAgents.current.find(function (initial) {
        return initial.agentId === agent.agentId;
      });

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
    endReached: roomsPhase === AsyncStatePhase.LOADING ? function () {} : function (start) {
      return loadMoreRooms(start, Math.min(50, roomsTotal));
    }
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
  }, tags.map(function (tag, i) {
    return /*#__PURE__*/React.createElement(Chip, {
      key: i,
      onClick: handleTagChipClick(tag),
      mie: "x8"
    }, tag);
  }))), DepartmentBusinessHours && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(DepartmentBusinessHours, {
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
//# sourceMappingURL=/dynamic/client/views/omnichannel/departments/9b492bf4a188ddee3cd28ae3b5c1b47698ee83c1.map
