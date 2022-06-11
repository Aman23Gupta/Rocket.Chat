function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/permissions/UsersInRoleTable.js                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let GenericModal;
module.link("../../../components/GenericModal", {
  default(v) {
    GenericModal = v;
  }

}, 2);
let GenericTable;
module.link("../../../components/GenericTable", {
  default(v) {
    GenericTable = v;
  }

}, 3);
let useSetModal;
module.link("../../../contexts/ModalContext", {
  useSetModal(v) {
    useSetModal = v;
  }

}, 4);
let useEndpoint;
module.link("../../../contexts/ServerContext", {
  useEndpoint(v) {
    useEndpoint = v;
  }

}, 5);
let useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 6);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 7);
let UserRow;
module.link("./UserRow", {
  default(v) {
    UserRow = v;
  }

}, 8);

function UsersInRoleTable(_ref) {
  let {
    data,
    reload,
    roleName,
    description,
    total,
    params,
    setParams,
    rid
  } = _ref;
  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  const setModal = useSetModal();

  const closeModal = () => setModal();

  const removeUser = useEndpoint('POST', 'roles.removeUserFromRole');
  const onRemove = useMutableCallback(username => {
    const remove = async () => {
      try {
        await removeUser({
          roleName,
          username,
          rid
        });
        dispatchToastMessage({
          type: 'success',
          message: t('User_removed')
        });
      } catch (error) {
        dispatchToastMessage({
          type: 'error',
          message: error
        });
      }

      closeModal();
      reload();
    };

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
  }, props => /*#__PURE__*/React.createElement(UserRow, _extends({
    onRemove: onRemove,
    key: props._id
  }, props)));
}

module.exportDefault(UsersInRoleTable);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/permissions/e8bddf3065d187d3f2c989d2aae263996cba2c79.map
