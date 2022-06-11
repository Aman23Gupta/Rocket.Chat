function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/RoomMembers/AddUsers/AddUsersWithData.js                                            //
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
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var useMethod;
module.link("../../../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
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
var useTabBarClose;
module.link("../../../providers/ToolboxProvider", {
  useTabBarClose: function (v) {
    useTabBarClose = v;
  }
}, 6);
var AddUsers;
module.link("./AddUsers", {
  "default": function (v) {
    AddUsers = v;
  }
}, 7);

var AddUsersWithData = function (_ref) {
  var rid = _ref.rid,
      onClickBack = _ref.onClickBack,
      reload = _ref.reload;
  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();
  var onClickClose = useTabBarClose();
  var saveAction = useMethod('addUsersToRoom');

  var _useForm = useForm({
    users: []
  }),
      values = _useForm.values,
      handlers = _useForm.handlers;

  var users = values.users;
  var handleUsers = handlers.handleUsers;
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
  var handleSave = useMutableCallback(function () {
    function _callee() {
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _regeneratorRuntime.awrap(saveAction({
                  rid: rid,
                  users: users
                }));

              case 3:
                dispatchToastMessage({
                  type: 'success',
                  message: t('Users_added')
                });
                onClickBack();
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
  }());
  return /*#__PURE__*/React.createElement(AddUsers, {
    onClickClose: onClickClose,
    onClickBack: onClickBack,
    onClickSave: handleSave,
    value: users,
    onChange: onChangeUsers
  });
};

module.exportDefault(AddUsersWithData);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/RoomMembers/AddUsers/709752de3d6714a7a2a3a2225f05b5fbd326bc0b.map
