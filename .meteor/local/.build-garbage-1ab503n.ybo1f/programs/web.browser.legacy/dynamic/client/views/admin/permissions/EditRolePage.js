function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/permissions/EditRolePage.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);
var Box, ButtonGroup, Button, Margins;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Button: function (v) {
    Button = v;
  },
  Margins: function (v) {
    Margins = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 2);
var GenericModal;
module.link("../../../components/GenericModal", {
  "default": function (v) {
    GenericModal = v;
  }
}, 3);
var VerticalBar;
module.link("../../../components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 4);
var useSetModal;
module.link("../../../contexts/ModalContext", {
  useSetModal: function (v) {
    useSetModal = v;
  }
}, 5);
var useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 6);
var useEndpoint;
module.link("../../../contexts/ServerContext", {
  useEndpoint: function (v) {
    useEndpoint = v;
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
var RoleForm;
module.link("./RoleForm", {
  "default": function (v) {
    RoleForm = v;
  }
}, 11);

var EditRolePage = function (_ref) {
  var data = _ref.data;
  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();
  var setModal = useSetModal();
  var usersInRoleRouter = useRoute('admin-permissions');
  var router = useRoute('admin-permissions');

  var _useForm = useForm({
    roleId: data._id,
    name: data.name,
    description: data.description || '',
    scope: data.scope || 'Users',
    mandatory2fa: !!data.mandatory2fa
  }),
      values = _useForm.values,
      handlers = _useForm.handlers,
      hasUnsavedChanges = _useForm.hasUnsavedChanges;

  var saveRole = useEndpoint('POST', 'roles.update');
  var deleteRole = useEndpoint('POST', 'roles.delete');
  var handleManageUsers = useMutableCallback(function () {
    usersInRoleRouter.push({
      context: 'users-in-role',
      _id: data._id
    });
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
                return _regeneratorRuntime.awrap(saveRole(values));

              case 3:
                dispatchToastMessage({
                  type: 'success',
                  message: t('Saved')
                });
                router.push({});
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
  }());
  var handleDelete = useMutableCallback(function () {
    function _callee3() {
      var deleteRoleAction;
      return _regeneratorRuntime.async(function () {
        function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                deleteRoleAction = function () {
                  function _callee2() {
                    return _regeneratorRuntime.async(function () {
                      function _callee2$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                              _context2.prev = 0;
                              _context2.next = 3;
                              return _regeneratorRuntime.awrap(deleteRole({
                                roleId: data._id
                              }));

                            case 3:
                              dispatchToastMessage({
                                type: 'success',
                                message: t('Role_removed')
                              });
                              setModal();
                              router.push({});
                              _context2.next = 12;
                              break;

                            case 8:
                              _context2.prev = 8;
                              _context2.t0 = _context2["catch"](0);
                              dispatchToastMessage({
                                type: 'error',
                                message: _context2.t0
                              });
                              setModal();

                            case 12:
                            case "end":
                              return _context2.stop();
                          }
                        }
                      }

                      return _callee2$;
                    }(), null, null, [[0, 8]], Promise);
                  }

                  return _callee2;
                }();

                setModal( /*#__PURE__*/React.createElement(GenericModal, {
                  variant: "danger",
                  onConfirm: deleteRoleAction,
                  onClose: function () {
                    return setModal();
                  },
                  onCancel: function () {
                    return setModal();
                  },
                  confirmText: t('Delete')
                }, t('Delete_Role_Warning')));

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }

        return _callee3$;
      }(), null, null, null, Promise);
    }

    return _callee3;
  }());
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VerticalBar.ScrollableContent, null, /*#__PURE__*/React.createElement(Box, {
    w: "full",
    alignSelf: "center",
    mb: "neg-x8"
  }, /*#__PURE__*/React.createElement(Margins, {
    block: "x8"
  }, /*#__PURE__*/React.createElement(RoleForm, {
    values: values,
    handlers: handlers,
    editing: true,
    isProtected: data.protected
  })))), /*#__PURE__*/React.createElement(VerticalBar.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    vertical: true,
    stretch: true
  }, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    disabled: !hasUnsavedChanges,
    onClick: handleSave
  }, t('Save')), !data.protected && /*#__PURE__*/React.createElement(Button, {
    danger: true,
    onClick: handleDelete
  }, t('Delete')), /*#__PURE__*/React.createElement(Button, {
    onClick: handleManageUsers
  }, t('Users_in_role')))));
};

module.exportDefault(EditRolePage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/permissions/fae25186bd9eeb6dec21cd194ac03d3969c35f6b.map
