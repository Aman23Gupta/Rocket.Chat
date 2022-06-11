function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/permissions/UsersInRoleTable.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
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
var GenericModal;
module.link("../../../components/GenericModal", {
  "default": function (v) {
    GenericModal = v;
  }
}, 2);
var GenericTable;
module.link("../../../components/GenericTable", {
  "default": function (v) {
    GenericTable = v;
  }
}, 3);
var useSetModal;
module.link("../../../contexts/ModalContext", {
  useSetModal: function (v) {
    useSetModal = v;
  }
}, 4);
var useEndpoint;
module.link("../../../contexts/ServerContext", {
  useEndpoint: function (v) {
    useEndpoint = v;
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
var UserRow;
module.link("./UserRow", {
  "default": function (v) {
    UserRow = v;
  }
}, 8);

function UsersInRoleTable(_ref) {
  var data = _ref.data,
      reload = _ref.reload,
      roleName = _ref.roleName,
      description = _ref.description,
      total = _ref.total,
      params = _ref.params,
      setParams = _ref.setParams,
      rid = _ref.rid;
  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();
  var setModal = useSetModal();

  var closeModal = function () {
    return setModal();
  };

  var removeUser = useEndpoint('POST', 'roles.removeUserFromRole');
  var onRemove = useMutableCallback(function (username) {
    var remove = function () {
      function _callee() {
        return _regeneratorRuntime.async(function () {
          function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return _regeneratorRuntime.awrap(removeUser({
                    roleName: roleName,
                    username: username,
                    rid: rid
                  }));

                case 3:
                  dispatchToastMessage({
                    type: 'success',
                    message: t('User_removed')
                  });
                  _context.next = 9;
                  break;

                case 6:
                  _context.prev = 6;
                  _context.t0 = _context["catch"](0);
                  dispatchToastMessage({
                    type: 'error',
                    message: _context.t0
                  });

                case 9:
                  closeModal();
                  reload();

                case 11:
                case "end":
                  return _context.stop();
              }
            }
          }

          return _callee$;
        }(), null, null, [[0, 6]], Promise);
      }

      return _callee;
    }();

    setModal( /*#__PURE__*/React.createElement(GenericModal, {
      variant: "danger",
      onConfirm: remove,
      onCancel: closeModal,
      confirmText: t('Delete')
    }, t('The_user_s_will_be_removed_from_role_s', username, description || roleName)));
  });
  return /*#__PURE__*/React.createElement(GenericTable, {
    header: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(GenericTable.HeaderCell, null, t('Name')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, null, t('Email')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      w: "x80"
    })),
    results: data,
    params: params,
    setParams: setParams,
    total: total
  }, function (props) {
    return /*#__PURE__*/React.createElement(UserRow, _extends({
      onRemove: onRemove,
      key: props._id
    }, props));
  });
}

module.exportDefault(UsersInRoleTable);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/permissions/386053f4bdae2f596f2e4d7f688592d3ed9b1ccc.map
