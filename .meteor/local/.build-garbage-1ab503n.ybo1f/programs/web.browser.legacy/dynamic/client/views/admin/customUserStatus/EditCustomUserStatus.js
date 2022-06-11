function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/customUserStatus/EditCustomUserStatus.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["close", "onChange", "data"];

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
module.export({
  EditCustomUserStatus: function () {
    return EditCustomUserStatus;
  }
});
var Button, ButtonGroup, TextInput, Field, Select, Icon;
module.link("@rocket.chat/fuselage", {
  Button: function (v) {
    Button = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  TextInput: function (v) {
    TextInput = v;
  },
  Field: function (v) {
    Field = v;
  },
  Select: function (v) {
    Select = v;
  },
  Icon: function (v) {
    Icon = v;
  }
}, 0);
var React, useCallback, useState, useMemo, useEffect;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useState: function (v) {
    useState = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useEffect: function (v) {
    useEffect = v;
  }
}, 1);
var GenericModal;
module.link("../../../components/GenericModal", {
  "default": function (v) {
    GenericModal = v;
  }
}, 2);
var VerticalBar;
module.link("../../../components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 3);
var useSetModal;
module.link("../../../contexts/ModalContext", {
  useSetModal: function (v) {
    useSetModal = v;
  }
}, 4);
var useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 5);
var useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 6);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 7);

function EditCustomUserStatus(_ref) {
  var close = _ref.close,
      onChange = _ref.onChange,
      data = _ref.data,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();
  var setModal = useSetModal();

  var _ref2 = data || {},
      _id = _ref2._id,
      previousName = _ref2.name,
      previousStatusType = _ref2.statusType;

  var _useState = useState(function () {
    var _data$name;

    return (_data$name = data === null || data === void 0 ? void 0 : data.name) !== null && _data$name !== void 0 ? _data$name : '';
  }),
      _useState2 = _slicedToArray(_useState, 2),
      name = _useState2[0],
      setName = _useState2[1];

  var _useState3 = useState(function () {
    var _data$statusType;

    return (_data$statusType = data === null || data === void 0 ? void 0 : data.statusType) !== null && _data$statusType !== void 0 ? _data$statusType : '';
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      statusType = _useState4[0],
      setStatusType = _useState4[1];

  useEffect(function () {
    setName(previousName || '');
    setStatusType(previousStatusType || '');
  }, [previousName, previousStatusType, _id]);
  var saveStatus = useMethod('insertOrUpdateUserStatus');
  var deleteStatus = useMethod('deleteCustomUserStatus');
  var hasUnsavedChanges = useMemo(function () {
    return previousName !== name || previousStatusType !== statusType;
  }, [name, previousName, previousStatusType, statusType]);
  var handleSave = useCallback(function () {
    function _callee() {
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _regeneratorRuntime.awrap(saveStatus({
                  _id: _id,
                  previousName: previousName,
                  previousStatusType: previousStatusType,
                  name: name,
                  statusType: statusType
                }));

              case 3:
                dispatchToastMessage({
                  type: 'success',
                  message: t('Custom_User_Status_Updated_Successfully')
                });
                onChange();
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](0);
                dispatchToastMessage({
                  type: 'error',
                  message: _context.t0
                });

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[0, 7]], Promise);
    }

    return _callee;
  }(), [saveStatus, _id, previousName, previousStatusType, name, statusType, dispatchToastMessage, t, onChange]);
  var handleDeleteButtonClick = useCallback(function () {
    var handleClose = function () {
      setModal(null);
      close();
      onChange();
    };

    var handleDelete = function () {
      function _callee2() {
        return _regeneratorRuntime.async(function () {
          function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  _context2.prev = 0;
                  _context2.next = 3;
                  return _regeneratorRuntime.awrap(deleteStatus(_id));

                case 3:
                  setModal(function () {
                    return /*#__PURE__*/React.createElement(GenericModal, {
                      variant: "success",
                      onClose: handleClose,
                      onConfirm: handleClose
                    }, t('Custom_User_Status_Has_Been_Deleted'));
                  });
                  _context2.next = 10;
                  break;

                case 6:
                  _context2.prev = 6;
                  _context2.t0 = _context2["catch"](0);
                  dispatchToastMessage({
                    type: 'error',
                    message: _context2.t0
                  });
                  onChange();

                case 10:
                case "end":
                  return _context2.stop();
              }
            }
          }

          return _callee2$;
        }(), null, null, [[0, 6]], Promise);
      }

      return _callee2;
    }();

    var handleCancel = function () {
      setModal(null);
    };

    setModal(function () {
      return /*#__PURE__*/React.createElement(GenericModal, {
        variant: "danger",
        onConfirm: handleDelete,
        onCancel: handleCancel,
        confirmText: t('Delete')
      }, t('Custom_User_Status_Delete_Warning'));
    });
  }, [_id, close, deleteStatus, dispatchToastMessage, onChange, setModal, t]);
  var presenceOptions = [['online', t('Online')], ['busy', t('Busy')], ['away', t('Away')], ['offline', t('Offline')]];
  return /*#__PURE__*/React.createElement(VerticalBar.ScrollableContent, props, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Name')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    value: name,
    onChange: function (e) {
      return setName(e.currentTarget.value);
    },
    placeholder: t('Name')
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Presence')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Select, {
    value: statusType,
    onChange: function (value) {
      return setStatusType(value);
    },
    placeholder: t('Presence'),
    options: presenceOptions
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    stretch: true,
    w: "full"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: close
  }, t('Cancel')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: handleSave,
    disabled: !hasUnsavedChanges
  }, t('Save'))))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    stretch: true,
    w: "full"
  }, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    danger: true,
    onClick: handleDeleteButtonClick
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash",
    mie: "x4"
  }), t('Delete'))))));
}

module.exportDefault(EditCustomUserStatus);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/customUserStatus/1e78cb6a19221e43ff0dbcd84c57a3ddf38deb22.map
