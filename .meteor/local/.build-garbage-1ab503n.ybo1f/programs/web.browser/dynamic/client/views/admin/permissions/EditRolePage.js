function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/permissions/EditRolePage.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, ButtonGroup, Button, Margins;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Button(v) {
    Button = v;
  },

  Margins(v) {
    Margins = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 2);
let GenericModal;
module.link("../../../components/GenericModal", {
  default(v) {
    GenericModal = v;
  }

}, 3);
let VerticalBar;
module.link("../../../components/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 4);
let useSetModal;
module.link("../../../contexts/ModalContext", {
  useSetModal(v) {
    useSetModal = v;
  }

}, 5);
let useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 6);
let useEndpoint;
module.link("../../../contexts/ServerContext", {
  useEndpoint(v) {
    useEndpoint = v;
  }

}, 7);
let useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 8);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 9);
let useForm;
module.link("../../../hooks/useForm", {
  useForm(v) {
    useForm = v;
  }

}, 10);
let RoleForm;
module.link("./RoleForm", {
  default(v) {
    RoleForm = v;
  }

}, 11);

const EditRolePage = _ref => {
  let {
    data
  } = _ref;
  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  const setModal = useSetModal();
  const usersInRoleRouter = useRoute('admin-permissions');
  const router = useRoute('admin-permissions');
  const {
    values,
    handlers,
    hasUnsavedChanges
  } = useForm({
    roleId: data._id,
    name: data.name,
    description: data.description || '',
    scope: data.scope || 'Users',
    mandatory2fa: !!data.mandatory2fa
  });
  const saveRole = useEndpoint('POST', 'roles.update');
  const deleteRole = useEndpoint('POST', 'roles.delete');
  const handleManageUsers = useMutableCallback(() => {
    usersInRoleRouter.push({
      context: 'users-in-role',
      _id: data._id
    });
  });
  const handleSave = useMutableCallback(async () => {
    try {
      await saveRole(values);
      dispatchToastMessage({
        type: 'success',
        message: t('Saved')
      });
      router.push({});
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }
  });
  const handleDelete = useMutableCallback(async () => {
    const deleteRoleAction = async () => {
      try {
        await deleteRole({
          roleId: data._id
        });
        dispatchToastMessage({
          type: 'success',
          message: t('Role_removed')
        });
        setModal();
        router.push({});
      } catch (error) {
        dispatchToastMessage({
          type: 'error',
          message: error
        });
        setModal();
      }
    };

    setModal( /*#__PURE__*/React.createElement(GenericModal, {
      variant: "danger",
      onConfirm: deleteRoleAction,
      onClose: () => setModal(),
      onCancel: () => setModal(),
      confirmText: t('Delete')
    }, t('Delete_Role_Warning')));
  });
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
//# sourceMappingURL=/dynamic/client/views/admin/permissions/3bdc16f23398a706b7596dc8d7ea805cff027f63.map
