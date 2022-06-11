function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/currentChats/FilterByText.tsx                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["setFilter", "reload"];

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

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 2);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 3);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 4);
var TextInput, Box, MultiSelect, Select, InputBox;
module.link("@rocket.chat/fuselage", {
  TextInput: function (v) {
    TextInput = v;
  },
  Box: function (v) {
    Box = v;
  },
  MultiSelect: function (v) {
    MultiSelect = v;
  },
  Select: function (v) {
    Select = v;
  },
  InputBox: function (v) {
    InputBox = v;
  }
}, 0);
var useMutableCallback, useLocalStorage;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  },
  useLocalStorage: function (v) {
    useLocalStorage = v;
  }
}, 1);
var moment;
module.link("moment", {
  "default": function (v) {
    moment = v;
  }
}, 2);
var React, useEffect, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 3);
var useSubscription;
module.link("use-subscription", {
  useSubscription: function (v) {
    useSubscription = v;
  }
}, 4);
var AutoCompleteAgent;
module.link("../../../components/AutoCompleteAgent", {
  "default": function (v) {
    AutoCompleteAgent = v;
  }
}, 5);
var AutoCompleteDepartment;
module.link("../../../components/AutoCompleteDepartment", {
  "default": function (v) {
    AutoCompleteDepartment = v;
  }
}, 6);
var GenericModal;
module.link("../../../components/GenericModal", {
  "default": function (v) {
    GenericModal = v;
  }
}, 7);
var useSetModal;
module.link("../../../contexts/ModalContext", {
  useSetModal: function (v) {
    useSetModal = v;
  }
}, 8);
var useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 9);
var useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 10);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 11);
var useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 12);
var formsSubscription;
module.link("../additionalForms", {
  formsSubscription: function (v) {
    formsSubscription = v;
  }
}, 13);
var Label;
module.link("./Label", {
  "default": function (v) {
    Label = v;
  }
}, 14);
var RemoveAllClosed;
module.link("./RemoveAllClosed", {
  "default": function (v) {
    RemoveAllClosed = v;
  }
}, 15);

var FilterByText = function (_ref) {
  var setFilter = _ref.setFilter,
      reload = _ref.reload,
      props = _objectWithoutProperties(_ref, _excluded);

  var setModal = useSetModal();
  var dispatchToastMessage = useToastMessageDispatch();
  var t = useTranslation();

  var _useEndpointData = useEndpointData('livechat/custom-fields'),
      allCustomFields = _useEndpointData.value;

  var statusOptions = [['all', t('All')], ['closed', t('Closed')], ['opened', t('Open')], ['onhold', t('On_Hold_Chats')]];
  var customFieldsOptions = useMemo(function () {
    return allCustomFields !== null && allCustomFields !== void 0 && allCustomFields.customFields ? allCustomFields.customFields.map(function (_ref2) {
      var _id = _ref2._id,
          label = _ref2.label;
      return [_id, label];
    }) : [];
  }, [allCustomFields]);

  var _useLocalStorage = useLocalStorage('guest', ''),
      _useLocalStorage2 = _slicedToArray(_useLocalStorage, 2),
      guest = _useLocalStorage2[0],
      setGuest = _useLocalStorage2[1];

  var _useLocalStorage3 = useLocalStorage('servedBy', 'all'),
      _useLocalStorage4 = _slicedToArray(_useLocalStorage3, 2),
      servedBy = _useLocalStorage4[0],
      setServedBy = _useLocalStorage4[1];

  var _useLocalStorage5 = useLocalStorage('status', 'all'),
      _useLocalStorage6 = _slicedToArray(_useLocalStorage5, 2),
      status = _useLocalStorage6[0],
      setStatus = _useLocalStorage6[1];

  var _useLocalStorage7 = useLocalStorage('department', {
    value: 'all',
    label: t('All')
  }),
      _useLocalStorage8 = _slicedToArray(_useLocalStorage7, 2),
      department = _useLocalStorage8[0],
      setDepartment = _useLocalStorage8[1];

  var _useLocalStorage9 = useLocalStorage('from', ''),
      _useLocalStorage10 = _slicedToArray(_useLocalStorage9, 2),
      from = _useLocalStorage10[0],
      setFrom = _useLocalStorage10[1];

  var _useLocalStorage11 = useLocalStorage('to', ''),
      _useLocalStorage12 = _slicedToArray(_useLocalStorage11, 2),
      to = _useLocalStorage12[0],
      setTo = _useLocalStorage12[1];

  var _useLocalStorage13 = useLocalStorage('tags', []),
      _useLocalStorage14 = _slicedToArray(_useLocalStorage13, 2),
      tags = _useLocalStorage14[0],
      setTags = _useLocalStorage14[1];

  var _useLocalStorage15 = useLocalStorage('tags', []),
      _useLocalStorage16 = _slicedToArray(_useLocalStorage15, 2),
      customFields = _useLocalStorage16[0],
      setCustomFields = _useLocalStorage16[1];

  var handleGuest = useMutableCallback(function (e) {
    return setGuest(e.target.value);
  });
  var handleServedBy = useMutableCallback(function (e) {
    return setServedBy(e);
  });
  var handleStatus = useMutableCallback(function (e) {
    return setStatus(e);
  });
  var handleDepartment = useMutableCallback(function (e) {
    return setDepartment(e);
  });
  var handleFrom = useMutableCallback(function (e) {
    return setFrom(e.target.value);
  });
  var handleTo = useMutableCallback(function (e) {
    return setTo(e.target.value);
  });
  var handleTags = useMutableCallback(function (e) {
    return setTags(e);
  });
  var handleCustomFields = useMutableCallback(function (e) {
    return setCustomFields(e);
  });
  var reset = useMutableCallback(function () {
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
  var forms = useSubscription(formsSubscription);
  var _forms$useCurrentChat = forms.useCurrentChatTags,
      useCurrentChatTags = _forms$useCurrentChat === void 0 ? function () {
    return undefined;
  } : _forms$useCurrentChat;
  var Tags = useCurrentChatTags();
  var onSubmit = useMutableCallback(function (e) {
    return e.preventDefault();
  });

  var reducer = function (acc, curr) {
    acc[curr] = '';
    return acc;
  };

  useEffect(function () {
    setFilter(_objectSpread(_objectSpread({
      guest: guest,
      servedBy: servedBy,
      status: status
    }, (department === null || department === void 0 ? void 0 : department.value) && department.value !== 'all' && {
      department: department.value
    }), {}, {
      from: from && moment(new Date(from)).utc().format('YYYY-MM-DDTHH:mm:ss'),
      to: to && moment(new Date(to)).utc().format('YYYY-MM-DDTHH:mm:ss'),
      tags: tags.map(function (tag) {
        return tag.label;
      }),
      customFields: customFields.reduce(reducer, {})
    }));
  }, [setFilter, guest, servedBy, status, department, from, to, tags, customFields]);
  var handleClearFilters = useMutableCallback(function () {
    reset();
  });
  var removeClosedChats = useMethod('livechat:removeAllClosedRooms');
  var handleRemoveClosed = useMutableCallback(function () {
    function _callee2() {
      var onDeleteAll, handleClose;
      return _regeneratorRuntime.async(function () {
        function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                onDeleteAll = function () {
                  function _callee() {
                    return _regeneratorRuntime.async(function () {
                      function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              _context.prev = 0;
                              _context.next = 3;
                              return _regeneratorRuntime.awrap(removeClosedChats());

                            case 3:
                              reload === null || reload === void 0 ? void 0 : reload();
                              dispatchToastMessage({
                                type: 'success',
                                message: t('Chat_removed')
                              });
                              _context.next = 10;
                              break;

                            case 7:
                              _context.prev = 7;
                              _context.t0 = _context["catch"](0);
                              dispatchToastMessage({
                                type: 'error',
                                message: _context.t0.message
                              });

                            case 10:
                              setModal(null);

                            case 11:
                            case "end":
                              return _context.stop();
                          }
                        }
                      }

                      return _callee$;
                    }(), null, null, [[0, 7]], Promise);
                  }

                  return _callee;
                }();

                handleClose = function () {
                  setModal(null);
                };

                setModal( /*#__PURE__*/React.createElement(GenericModal, {
                  variant: "danger",
                  onConfirm: onDeleteAll,
                  onClose: handleClose,
                  onCancel: handleClose,
                  confirmText: t('Delete')
                }));

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }

        return _callee2$;
      }(), null, null, null, Promise);
    }

    return _callee2;
  }());
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
//# sourceMappingURL=/dynamic/client/views/omnichannel/currentChats/1e9a026bc6c091d3806aefdaec2dfa7d91a477a7.map
