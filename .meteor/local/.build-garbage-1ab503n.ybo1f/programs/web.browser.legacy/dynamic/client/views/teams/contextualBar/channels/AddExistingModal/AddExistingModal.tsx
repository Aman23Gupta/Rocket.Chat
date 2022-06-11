function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/channels/AddExistingModal/AddExistingModal.tsx                                     //
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
var ButtonGroup, Button, Field, Modal;
module.link("@rocket.chat/fuselage", {
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Button: function (v) {
    Button = v;
  },
  Field: function (v) {
    Field = v;
  },
  Modal: function (v) {
    Modal = v;
  }
}, 0);
var React, memo, useCallback;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  },
  useCallback: function (v) {
    useCallback = v;
  }
}, 1);
var useEndpoint;
module.link("../../../../../contexts/ServerContext", {
  useEndpoint: function (v) {
    useEndpoint = v;
  }
}, 2);
var useToastMessageDispatch;
module.link("../../../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 3);
var useTranslation;
module.link("../../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 4);
var useForm;
module.link("../../../../../hooks/useForm", {
  useForm: function (v) {
    useForm = v;
  }
}, 5);
var RoomsInput;
module.link("./RoomsInput", {
  "default": function (v) {
    RoomsInput = v;
  }
}, 6);

var useAddExistingModalState = function (onClose, teamId, reload) {
  var t = useTranslation();
  var addRoomEndpoint = useEndpoint('POST', 'teams.addRooms');
  var dispatchToastMessage = useToastMessageDispatch();

  var _useForm = useForm({
    rooms: []
  }),
      values = _useForm.values,
      handlers = _useForm.handlers,
      hasUnsavedChanges = _useForm.hasUnsavedChanges;

  var rooms = values.rooms;
  var handleRooms = handlers.handleRooms;
  var onChange = useCallback(function (value, action) {
    if (!action) {
      if (rooms.some(function (current) {
        return current._id === value._id;
      })) {
        return;
      }

      return handleRooms([].concat(_toConsumableArray(rooms), [value]));
    }

    handleRooms(rooms.filter(function (current) {
      return current._id !== value._id;
    }));
  }, [handleRooms, rooms]);
  var onAdd = useCallback(function () {
    function _callee() {
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _regeneratorRuntime.awrap(addRoomEndpoint({
                  rooms: rooms.map(function (room) {
                    return room._id;
                  }),
                  teamId: teamId
                }));

              case 3:
                dispatchToastMessage({
                  type: 'success',
                  message: t('Channels_added')
                });
                onClose();
                reload();
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                dispatchToastMessage({
                  type: 'error',
                  message: _context.t0
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[0, 8]], Promise);
    }

    return _callee;
  }(), [addRoomEndpoint, rooms, teamId, onClose, dispatchToastMessage, t, reload]);
  return {
    onAdd: onAdd,
    rooms: rooms,
    onChange: onChange,
    hasUnsavedChanges: hasUnsavedChanges
  };
};

var AddExistingModal = function (_ref) {
  var onClose = _ref.onClose,
      teamId = _ref.teamId,
      reload = _ref.reload;
  var t = useTranslation();

  var _useAddExistingModalS = useAddExistingModalState(onClose, teamId, reload),
      rooms = _useAddExistingModalS.rooms,
      onAdd = _useAddExistingModalS.onAdd,
      onChange = _useAddExistingModalS.onChange,
      hasUnsavedChanges = _useAddExistingModalS.hasUnsavedChanges;

  var isAddButtonEnabled = hasUnsavedChanges;
  return /*#__PURE__*/React.createElement(Modal, null, /*#__PURE__*/React.createElement(Modal.Header, null, /*#__PURE__*/React.createElement(Modal.Title, null, t('Team_Add_existing_channels')), /*#__PURE__*/React.createElement(Modal.Close, {
    onClick: onClose
  })), /*#__PURE__*/React.createElement(Modal.Content, null, /*#__PURE__*/React.createElement(Field, {
    mbe: "x24"
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Channels')), /*#__PURE__*/React.createElement(RoomsInput, {
    value: rooms,
    onChange: onChange
  }))), /*#__PURE__*/React.createElement(Modal.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    align: "end"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onClose
  }, t('Cancel')), /*#__PURE__*/React.createElement(Button, {
    disabled: !isAddButtonEnabled,
    onClick: onAdd,
    primary: true
  }, t('Add')))));
};

module.exportDefault( /*#__PURE__*/memo(AddExistingModal));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/channels/AddExistingModal/35cdbbe36e8eba202e237b738ac5aa34618c679c.map
