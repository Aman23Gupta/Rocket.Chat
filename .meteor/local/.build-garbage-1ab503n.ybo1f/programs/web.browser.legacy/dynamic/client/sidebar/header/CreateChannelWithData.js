function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/header/CreateChannelWithData.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 1);

var _toConsumableArray;

module.link("@babel/runtime/helpers/toConsumableArray", {
  default: function (v) {
    _toConsumableArray = v;
  }
}, 2);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 0);
var React, memo, useCallback, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 1);
var usePermission;
module.link("../../contexts/AuthorizationContext", {
  usePermission: function (v) {
    usePermission = v;
  }
}, 2);
var useSetting;
module.link("../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 3);
var useEndpointActionExperimental;
module.link("../../hooks/useEndpointActionExperimental", {
  useEndpointActionExperimental: function (v) {
    useEndpointActionExperimental = v;
  }
}, 4);
var useForm;
module.link("../../hooks/useForm", {
  useForm: function (v) {
    useForm = v;
  }
}, 5);
var goToRoomById;
module.link("../../lib/utils/goToRoomById", {
  goToRoomById: function (v) {
    goToRoomById = v;
  }
}, 6);
var CreateChannel;
module.link("./CreateChannel", {
  "default": function (v) {
    CreateChannel = v;
  }
}, 7);

var CreateChannelWithData = function (_ref) {
  var onClose = _ref.onClose,
      _ref$teamId = _ref.teamId,
      teamId = _ref$teamId === void 0 ? '' : _ref$teamId,
      reload = _ref.reload;
  var createChannel = useEndpointActionExperimental('POST', 'channels.create');
  var createPrivateChannel = useEndpointActionExperimental('POST', 'groups.create');
  var canCreateChannel = usePermission('create-c');
  var canCreatePrivateChannel = usePermission('create-p');
  var e2eEnabledForPrivateByDefault = useSetting('E2E_Enabled_Default_PrivateRooms');
  var canOnlyCreateOneType = useMemo(function () {
    if (!canCreateChannel && canCreatePrivateChannel) {
      return 'p';
    }

    if (canCreateChannel && !canCreatePrivateChannel) {
      return 'c';
    }

    return false;
  }, [canCreateChannel, canCreatePrivateChannel]);
  var initialValues = {
    users: [],
    name: '',
    description: '',
    type: canOnlyCreateOneType ? canOnlyCreateOneType === 'p' : true,
    readOnly: false,
    encrypted: e2eEnabledForPrivateByDefault !== null && e2eEnabledForPrivateByDefault !== void 0 ? e2eEnabledForPrivateByDefault : false,
    broadcast: false
  };

  var _useForm = useForm(initialValues),
      values = _useForm.values,
      handlers = _useForm.handlers,
      hasUnsavedChanges = _useForm.hasUnsavedChanges;

  var users = values.users,
      name = values.name,
      description = values.description,
      type = values.type,
      readOnly = values.readOnly,
      broadcast = values.broadcast,
      encrypted = values.encrypted;
  var handleUsers = handlers.handleUsers,
      handleEncrypted = handlers.handleEncrypted,
      handleType = handlers.handleType,
      handleBroadcast = handlers.handleBroadcast,
      handleReadOnly = handlers.handleReadOnly;
  var onChangeUsers = useMutableCallback(function (value, action) {
    if (!action) {
      if (users.includes(value)) {
        return;
      }

      return handleUsers([].concat(_toConsumableArray(users), [value]));
    }

    handleUsers(users.filter(function (current) {
      return current !== value;
    }));
  });
  var onChangeType = useMutableCallback(function (value) {
    handleEncrypted(!value);
    return handleType(value);
  });
  var onChangeBroadcast = useMutableCallback(function (value) {
    handleEncrypted(!value);
    handleReadOnly(value);
    return handleBroadcast(value);
  });
  var onCreate = useCallback(function () {
    function _callee() {
      var goToRoom, params, roomData;
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                goToRoom = function (rid) {
                  goToRoomById(rid);
                };

                params = {
                  name: name,
                  members: users,
                  readOnly: readOnly,
                  extraData: _objectSpread({
                    description: description,
                    broadcast: broadcast,
                    encrypted: encrypted
                  }, teamId && {
                    teamId: teamId
                  })
                };

                if (!type) {
                  _context.next = 9;
                  break;
                }

                _context.next = 5;
                return _regeneratorRuntime.awrap(createPrivateChannel(params));

              case 5:
                roomData = _context.sent;
                !teamId && goToRoom(roomData.group._id);
                _context.next = 13;
                break;

              case 9:
                _context.next = 11;
                return _regeneratorRuntime.awrap(createChannel(params));

              case 11:
                roomData = _context.sent;
                !teamId && goToRoom(roomData.channel._id);

              case 13:
                onClose();
                reload();

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, null, Promise);
    }

    return _callee;
  }(), [broadcast, createChannel, createPrivateChannel, description, encrypted, name, onClose, readOnly, teamId, type, users, reload]);
  return /*#__PURE__*/React.createElement(CreateChannel, {
    values: values,
    handlers: handlers,
    hasUnsavedChanges: hasUnsavedChanges,
    onChangeUsers: onChangeUsers,
    onChangeType: onChangeType,
    onChangeBroadcast: onChangeBroadcast,
    canOnlyCreateOneType: canOnlyCreateOneType,
    e2eEnabledForPrivateByDefault: e2eEnabledForPrivateByDefault,
    onClose: onClose,
    onCreate: onCreate
  });
};

module.exportDefault( /*#__PURE__*/memo(CreateChannelWithData));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/header/5ddcbeb531ac59957ba2e4d24bb142b5c44a3fec.map
