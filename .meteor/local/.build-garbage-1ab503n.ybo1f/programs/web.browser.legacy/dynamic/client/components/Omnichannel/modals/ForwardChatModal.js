function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Omnichannel/modals/ForwardChatModal.js                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["onForward", "onCancel", "room"];

var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 2);
var Field, Button, TextAreaInput, Icon, ButtonGroup, Modal, Box, PaginatedSelectFiltered;
module.link("@rocket.chat/fuselage", {
  Field: function (v) {
    Field = v;
  },
  Button: function (v) {
    Button = v;
  },
  TextAreaInput: function (v) {
    TextAreaInput = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Modal: function (v) {
    Modal = v;
  },
  Box: function (v) {
    Box = v;
  },
  PaginatedSelectFiltered: function (v) {
    PaginatedSelectFiltered = v;
  }
}, 0);
var useMutableCallback, useAutoFocus, useDebouncedValue;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  },
  useAutoFocus: function (v) {
    useAutoFocus = v;
  },
  useDebouncedValue: function (v) {
    useDebouncedValue = v;
  }
}, 1);
var React, useEffect, useMemo, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 2);
var useEndpoint;
module.link("../../../contexts/ServerContext", {
  useEndpoint: function (v) {
    useEndpoint = v;
  }
}, 3);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 4);
var useRecordList;
module.link("../../../hooks/lists/useRecordList", {
  useRecordList: function (v) {
    useRecordList = v;
  }
}, 5);
var AsyncStatePhase;
module.link("../../../hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 6);
var useForm;
module.link("../../../hooks/useForm", {
  useForm: function (v) {
    useForm = v;
  }
}, 7);
var UserAutoComplete;
module.link("../../UserAutoComplete", {
  "default": function (v) {
    UserAutoComplete = v;
  }
}, 8);
var useDepartmentsList;
module.link("../hooks/useDepartmentsList", {
  useDepartmentsList: function (v) {
    useDepartmentsList = v;
  }
}, 9);
var ModalSeparator;
module.link("./ModalSeparator", {
  "default": function (v) {
    ModalSeparator = v;
  }
}, 10);

var ForwardChatModal = function (_ref) {
  var onForward = _ref.onForward,
      onCancel = _ref.onCancel,
      room = _ref.room,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var inputRef = useAutoFocus(true);

  var _useForm = useForm({
    username: '',
    comment: '',
    department: {}
  }),
      values = _useForm.values,
      handlers = _useForm.handlers;

  var username = values.username,
      comment = values.comment,
      department = values.department;

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      userId = _useState2[0],
      setUserId = _useState2[1];

  var handleUsername = handlers.handleUsername,
      handleComment = handlers.handleComment,
      handleDepartment = handlers.handleDepartment;
  var getUserData = useEndpoint('GET', "users.info?username=" + username);

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      departmentsFilter = _useState4[0],
      setDepartmentsFilter = _useState4[1];

  var debouncedDepartmentsFilter = useDebouncedValue(departmentsFilter, 500);

  var _useDepartmentsList = useDepartmentsList(useMemo(function () {
    return {
      filter: debouncedDepartmentsFilter
    };
  }, [debouncedDepartmentsFilter])),
      departmentsList = _useDepartmentsList.itemsList,
      loadMoreDepartments = _useDepartmentsList.loadMoreItems;

  var _useRecordList = useRecordList(departmentsList),
      departmentsPhase = _useRecordList.phase,
      departmentsItems = _useRecordList.items,
      departmentsTotal = _useRecordList.itemCount;

  var handleSend = useMutableCallback(function () {
    onForward(department === null || department === void 0 ? void 0 : department.value, userId, comment);
  }, [onForward, department.value, userId, comment]);
  var onChangeUsername = useMutableCallback(function (username) {
    handleUsername(username);
  });
  useEffect(function () {
    if (!username) {
      return;
    }

    var fetchData = function () {
      function _callee() {
        var _await$getUserData, user;

        return _regeneratorRuntime.async(function () {
          function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _regeneratorRuntime.awrap(getUserData());

                case 2:
                  _await$getUserData = _context.sent;
                  user = _await$getUserData.user;
                  setUserId(user._id);

                case 5:
                case "end":
                  return _context.stop();
              }
            }
          }

          return _callee$;
        }(), null, null, null, Promise);
      }

      return _callee;
    }();

    fetchData(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [username]);
  var canForward = department || username;
  var departments = departmentsItems;
  var hasDepartments = departments && departments.length > 0;

  var _ref2 = room || {},
      _ref2$servedBy = _ref2.servedBy;

  _ref2$servedBy = _ref2$servedBy === void 0 ? {} : _ref2$servedBy;
  var agentId = _ref2$servedBy._id;

  var _id = agentId && {
    $ne: agentId
  };

  var conditions = {
    _id: _id,
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
    endReached: departmentsPhase === AsyncStatePhase.LOADING ? function () {} : function (start) {
      return loadMoreDepartments(start, Math.min(50, departmentsTotal));
    }
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
//# sourceMappingURL=/dynamic/client/components/Omnichannel/modals/6bd6904cbd4348c4047a1c89e018b112370b97d2.map
