function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/agents/AgentEdit.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["data", "userDepartments", "availableDepartments", "uid", "reset"],
      _excluded2 = ["hasUnsavedChanges"];

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
let Field, TextInput, Button, Margins, Box, MultiSelect, Icon, Select;
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

  MultiSelect(v) {
    MultiSelect = v;
  },

  Icon(v) {
    Icon = v;
  },

  Select(v) {
    Select = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React, useMemo, useRef, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useRef(v) {
    useRef = v;
  },

  useState(v) {
    useState = v;
  }

}, 2);
let useSubscription;
module.link("use-subscription", {
  useSubscription(v) {
    useSubscription = v;
  }

}, 3);
let getUserEmailAddress;
module.link("../../../../lib/getUserEmailAddress", {
  getUserEmailAddress(v) {
    getUserEmailAddress = v;
  }

}, 4);
let VerticalBar;
module.link("../../../components/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 5);
let useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 6);
let useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 7);
let useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 8);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 9);
let useForm;
module.link("../../../hooks/useForm", {
  useForm(v) {
    useForm = v;
  }

}, 10);
let UserInfo;
module.link("../../room/contextualBar/UserInfo", {
  default(v) {
    UserInfo = v;
  }

}, 11);
let formsSubscription;
module.link("../additionalForms", {
  formsSubscription(v) {
    formsSubscription = v;
  }

}, 12);

function AgentEdit(_ref) {
  let {
    data,
    userDepartments,
    availableDepartments,
    uid,
    reset
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const agentsRoute = useRoute('omnichannel-agents');
  const [maxChatUnsaved, setMaxChatUnsaved] = useState();
  const {
    user
  } = data || {
    user: {}
  };
  const {
    name,
    username,
    statusLivechat
  } = user;
  const email = getUserEmailAddress(user);
  const options = useMemo(() => availableDepartments && availableDepartments.departments ? availableDepartments.departments.map(_ref2 => {
    let {
      _id,
      name
    } = _ref2;
    return [_id, name || _id];
  }) : [], [availableDepartments]);
  const initialDepartmentValue = useMemo(() => userDepartments && userDepartments.departments ? userDepartments.departments.map(_ref3 => {
    let {
      departmentId
    } = _ref3;
    return departmentId;
  }) : [], [userDepartments]);
  const eeForms = useSubscription(formsSubscription);
  const saveRef = useRef({
    values: {},
    hasUnsavedChanges: false
  });
  const onChangeMaxChats = useMutableCallback(_ref4 => {
    let {
      hasUnsavedChanges
    } = _ref4,
        value = _objectWithoutProperties(_ref4, _excluded2);

    saveRef.current = value;

    if (hasUnsavedChanges !== maxChatUnsaved) {
      setMaxChatUnsaved(hasUnsavedChanges);
    }
  });
  const {
    useMaxChatsPerAgent = () => {}
  } = eeForms;
  const {
    values,
    handlers,
    hasUnsavedChanges,
    commit
  } = useForm({
    departments: initialDepartmentValue,
    status: statusLivechat,
    maxChats: 0
  });
  const {
    reset: resetMaxChats,
    commit: commitMaxChats
  } = saveRef.current;
  const {
    handleDepartments,
    handleStatus
  } = handlers;
  const {
    departments,
    status
  } = values;
  const MaxChats = useMaxChatsPerAgent();
  const saveAgentInfo = useMethod('livechat:saveAgentInfo');
  const saveAgentStatus = useMethod('livechat:changeLivechatStatus');
  const dispatchToastMessage = useToastMessageDispatch();
  const handleReset = useMutableCallback(() => {
    reset();
    resetMaxChats();
  });
  const handleSave = useMutableCallback(async () => {
    try {
      await saveAgentInfo(uid, saveRef.current.values, departments);
      await saveAgentStatus({
        status,
        agentId: uid
      });
      dispatchToastMessage({
        type: 'success',
        message: t('saved')
      });
      agentsRoute.push({});
      reset();
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }

    commit();
    commitMaxChats();
  });
  return /*#__PURE__*/React.createElement(VerticalBar.ScrollableContent, _extends({
    is: "form"
  }, props), /*#__PURE__*/React.createElement(Box, {
    alignSelf: "center"
  }, /*#__PURE__*/React.createElement(UserInfo.Avatar, {
    margin: "auto",
    size: 'x332',
    title: username,
    username: username
  })), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Name')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    flexGrow: 1,
    value: name,
    disabled: true
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Username')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    flexGrow: 1,
    value: username,
    disabled: true,
    addon: /*#__PURE__*/React.createElement(Icon, {
      name: "at",
      size: "x20"
    })
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Email')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    flexGrow: 1,
    value: email,
    disabled: true,
    addon: /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: "x20"
    })
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Departments')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(MultiSelect, {
    options: options,
    value: departments,
    placeholder: t('Select_an_option'),
    onChange: handleDepartments,
    flexGrow: 1
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Status')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Select, {
    options: [['available', t('Available')], ['not-available', t('Not_Available')]],
    value: status,
    placeholder: t('Select_an_option'),
    onChange: handleStatus,
    flexGrow: 1
  }))), MaxChats && /*#__PURE__*/React.createElement(MaxChats, {
    data: user,
    onChange: onChangeMaxChats
  }), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    w: "full"
  }, /*#__PURE__*/React.createElement(Margins, {
    inlineEnd: "x4"
  }, /*#__PURE__*/React.createElement(Button, {
    flexGrow: 1,
    type: "reset",
    disabled: !hasUnsavedChanges && !maxChatUnsaved,
    onClick: handleReset
  }, t('Reset')), /*#__PURE__*/React.createElement(Button, {
    mie: "none",
    flexGrow: 1,
    disabled: !hasUnsavedChanges && !maxChatUnsaved,
    onClick: handleSave
  }, t('Save'))))));
}

module.exportDefault(AgentEdit);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/agents/ed809573aa81fa903bbb75751e8d3b696b0ecd0f.map
