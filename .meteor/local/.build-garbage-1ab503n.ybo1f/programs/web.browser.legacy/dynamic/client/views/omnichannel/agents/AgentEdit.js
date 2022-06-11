function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/agents/AgentEdit.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["data", "userDepartments", "availableDepartments", "uid", "reset"],
    _excluded2 = ["hasUnsavedChanges"];

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

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 2);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 3);
var Field, TextInput, Button, Margins, Box, MultiSelect, Icon, Select;
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
  Margins: function (v) {
    Margins = v;
  },
  Box: function (v) {
    Box = v;
  },
  MultiSelect: function (v) {
    MultiSelect = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  Select: function (v) {
    Select = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React, useMemo, useRef, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useRef: function (v) {
    useRef = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 2);
var useSubscription;
module.link("use-subscription", {
  useSubscription: function (v) {
    useSubscription = v;
  }
}, 3);
var getUserEmailAddress;
module.link("../../../../lib/getUserEmailAddress", {
  getUserEmailAddress: function (v) {
    getUserEmailAddress = v;
  }
}, 4);
var VerticalBar;
module.link("../../../components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 5);
var useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 6);
var useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 7);
var useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 8);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 9);
var useForm;
module.link("../../../hooks/useForm", {
  useForm: function (v) {
    useForm = v;
  }
}, 10);
var UserInfo;
module.link("../../room/contextualBar/UserInfo", {
  "default": function (v) {
    UserInfo = v;
  }
}, 11);
var formsSubscription;
module.link("../additionalForms", {
  formsSubscription: function (v) {
    formsSubscription = v;
  }
}, 12);

function AgentEdit(_ref) {
  var data = _ref.data,
      userDepartments = _ref.userDepartments,
      availableDepartments = _ref.availableDepartments,
      uid = _ref.uid,
      reset = _ref.reset,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var agentsRoute = useRoute('omnichannel-agents');

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      maxChatUnsaved = _useState2[0],
      setMaxChatUnsaved = _useState2[1];

  var _ref2 = data || {
    user: {}
  },
      user = _ref2.user;

  var name = user.name,
      username = user.username,
      statusLivechat = user.statusLivechat;
  var email = getUserEmailAddress(user);
  var options = useMemo(function () {
    return availableDepartments && availableDepartments.departments ? availableDepartments.departments.map(function (_ref3) {
      var _id = _ref3._id,
          name = _ref3.name;
      return [_id, name || _id];
    }) : [];
  }, [availableDepartments]);
  var initialDepartmentValue = useMemo(function () {
    return userDepartments && userDepartments.departments ? userDepartments.departments.map(function (_ref4) {
      var departmentId = _ref4.departmentId;
      return departmentId;
    }) : [];
  }, [userDepartments]);
  var eeForms = useSubscription(formsSubscription);
  var saveRef = useRef({
    values: {},
    hasUnsavedChanges: false
  });
  var onChangeMaxChats = useMutableCallback(function (_ref5) {
    var hasUnsavedChanges = _ref5.hasUnsavedChanges,
        value = _objectWithoutProperties(_ref5, _excluded2);

    saveRef.current = value;

    if (hasUnsavedChanges !== maxChatUnsaved) {
      setMaxChatUnsaved(hasUnsavedChanges);
    }
  });
  var _eeForms$useMaxChatsP = eeForms.useMaxChatsPerAgent,
      useMaxChatsPerAgent = _eeForms$useMaxChatsP === void 0 ? function () {} : _eeForms$useMaxChatsP;

  var _useForm = useForm({
    departments: initialDepartmentValue,
    status: statusLivechat,
    maxChats: 0
  }),
      values = _useForm.values,
      handlers = _useForm.handlers,
      hasUnsavedChanges = _useForm.hasUnsavedChanges,
      commit = _useForm.commit;

  var _saveRef$current = saveRef.current,
      resetMaxChats = _saveRef$current.reset,
      commitMaxChats = _saveRef$current.commit;
  var handleDepartments = handlers.handleDepartments,
      handleStatus = handlers.handleStatus;
  var departments = values.departments,
      status = values.status;
  var MaxChats = useMaxChatsPerAgent();
  var saveAgentInfo = useMethod('livechat:saveAgentInfo');
  var saveAgentStatus = useMethod('livechat:changeLivechatStatus');
  var dispatchToastMessage = useToastMessageDispatch();
  var handleReset = useMutableCallback(function () {
    reset();
    resetMaxChats();
  });
  var handleSave = useMutableCallback(function () {
    function _callee() {
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _regeneratorRuntime.awrap(saveAgentInfo(uid, saveRef.current.values, departments));

              case 3:
                _context.next = 5;
                return _regeneratorRuntime.awrap(saveAgentStatus({
                  status: status,
                  agentId: uid
                }));

              case 5:
                dispatchToastMessage({
                  type: 'success',
                  message: t('saved')
                });
                agentsRoute.push({});
                reset();
                _context.next = 13;
                break;

              case 10:
                _context.prev = 10;
                _context.t0 = _context["catch"](0);
                dispatchToastMessage({
                  type: 'error',
                  message: _context.t0
                });

              case 13:
                commit();
                commitMaxChats();

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[0, 10]], Promise);
    }

    return _callee;
  }());
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
//# sourceMappingURL=/dynamic/client/views/omnichannel/agents/05c7687cb3a64a9fef3f1da74f46a61ffa8beff1.map
