function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Omnichannel/modals/ForwardChatModal.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["onForward", "onCancel", "room"];

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 0);
let Field, Button, TextAreaInput, Icon, ButtonGroup, Modal, Box, PaginatedSelectFiltered;
module.link("@rocket.chat/fuselage", {
  Field(v) {
    Field = v;
  },

  Button(v) {
    Button = v;
  },

  TextAreaInput(v) {
    TextAreaInput = v;
  },

  Icon(v) {
    Icon = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Modal(v) {
    Modal = v;
  },

  Box(v) {
    Box = v;
  },

  PaginatedSelectFiltered(v) {
    PaginatedSelectFiltered = v;
  }

}, 0);
let useMutableCallback, useAutoFocus, useDebouncedValue;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  },

  useAutoFocus(v) {
    useAutoFocus = v;
  },

  useDebouncedValue(v) {
    useDebouncedValue = v;
  }

}, 1);
let React, useEffect, useMemo, useState;
module.link("react", {
  default(v) {
    React = v;
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

}, 2);
let useEndpoint;
module.link("../../../contexts/ServerContext", {
  useEndpoint(v) {
    useEndpoint = v;
  }

}, 3);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 4);
let useRecordList;
module.link("../../../hooks/lists/useRecordList", {
  useRecordList(v) {
    useRecordList = v;
  }

}, 5);
let AsyncStatePhase;
module.link("../../../hooks/useAsyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 6);
let useForm;
module.link("../../../hooks/useForm", {
  useForm(v) {
    useForm = v;
  }

}, 7);
let UserAutoComplete;
module.link("../../UserAutoComplete", {
  default(v) {
    UserAutoComplete = v;
  }

}, 8);
let useDepartmentsList;
module.link("../hooks/useDepartmentsList", {
  useDepartmentsList(v) {
    useDepartmentsList = v;
  }

}, 9);
let ModalSeparator;
module.link("./ModalSeparator", {
  default(v) {
    ModalSeparator = v;
  }

}, 10);

const ForwardChatModal = _ref => {
  let {
    onForward,
    onCancel,
    room
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const inputRef = useAutoFocus(true);
  const {
    values,
    handlers
  } = useForm({
    username: '',
    comment: '',
    department: {}
  });
  const {
    username,
    comment,
    department
  } = values;
  const [userId, setUserId] = useState('');
  const {
    handleUsername,
    handleComment,
    handleDepartment
  } = handlers;
  const getUserData = useEndpoint('GET', "users.info?username=".concat(username));
  const [departmentsFilter, setDepartmentsFilter] = useState('');
  const debouncedDepartmentsFilter = useDebouncedValue(departmentsFilter, 500);
  const {
    itemsList: departmentsList,
    loadMoreItems: loadMoreDepartments
  } = useDepartmentsList(useMemo(() => ({
    filter: debouncedDepartmentsFilter
  }), [debouncedDepartmentsFilter]));
  const {
    phase: departmentsPhase,
    items: departmentsItems,
    itemCount: departmentsTotal
  } = useRecordList(departmentsList);
  const handleSend = useMutableCallback(() => {
    onForward(department === null || department === void 0 ? void 0 : department.value, userId, comment);
  }, [onForward, department.value, userId, comment]);
  const onChangeUsername = useMutableCallback(username => {
    handleUsername(username);
  });
  useEffect(() => {
    if (!username) {
      return;
    }

    const fetchData = async () => {
      const {
        user
      } = await getUserData();
      setUserId(user._id);
    };

    fetchData(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);
  const canForward = department || username;
  const departments = departmentsItems;
  const hasDepartments = departments && departments.length > 0;
  const {
    servedBy: {
      _id: agentId
    } = {}
  } = room || {};

  const _id = agentId && {
    $ne: agentId
  };

  const conditions = {
    _id,
    status: {
      $ne: 'offline'
    },
    statusLivechat: 'available'
  };
  return /*#__PURE__*/React.createElement(Modal, props, /*#__PURE__*/React.createElement(Modal.Header, null, /*#__PURE__*/React.createElement(Icon, {
    name: "baloon-arrow-top-right",
    size: 20
  }), /*#__PURE__*/React.createElement(Modal.Title, null, t('Forward_chat')), /*#__PURE__*/React.createElement(Modal.Close, {
    onClick: onCancel
  })), /*#__PURE__*/React.createElement(Modal.Content, {
    fontScale: "p2"
  }, /*#__PURE__*/React.createElement(Field, {
    mbe: 'x30'
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Forward_to_department')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(PaginatedSelectFiltered, {
    withTitle: true,
    filter: departmentsFilter,
    setFilter: setDepartmentsFilter,
    options: departmentsItems,
    value: department,
    maxWidth: "100%",
    placeholder: t('Select_an_option'),
    onChange: handleDepartment,
    flexGrow: 1,
    endReached: departmentsPhase === AsyncStatePhase.LOADING ? () => {} : start => loadMoreDepartments(start, Math.min(50, departmentsTotal))
  }))), /*#__PURE__*/React.createElement(ModalSeparator, {
    text: t('or')
  }), /*#__PURE__*/React.createElement(Field, {
    mbs: hasDepartments && 'x30'
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Forward_to_user')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(UserAutoComplete, {
    conditions: conditions,
    flexGrow: 1,
    value: username,
    onChange: onChangeUsername,
    placeholder: t('Username')
  }))), /*#__PURE__*/React.createElement(Field, {
    marginBlock: "x15"
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Leave_a_comment'), ' ', /*#__PURE__*/React.createElement(Box, {
    is: "span",
    color: "neutral-600"
  }, "(", t('Optional'), ")")), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextAreaInput, {
    ref: inputRef,
    rows: 8,
    flexGrow: 1,
    value: comment,
    onChange: handleComment
  })))), /*#__PURE__*/React.createElement(Modal.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    align: "end"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onCancel
  }, t('Cancel')), /*#__PURE__*/React.createElement(Button, {
    disabled: !canForward,
    primary: true,
    onClick: handleSend
  }, t('Forward')))));
};

module.exportDefault(ForwardChatModal);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Omnichannel/modals/27dea88180925424490385f6cc3de8e9b8908018.map
