function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/departments/RemoveDepartmentButton.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Table, Icon, Button;
module.link("@rocket.chat/fuselage", {
  Table(v) {
    Table = v;
  },

  Icon(v) {
    Icon = v;
  },

  Button(v) {
    Button = v;
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
let useSetModal;
module.link("../../../contexts/ModalContext", {
  useSetModal(v) {
    useSetModal = v;
  }

}, 4);
let useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 5);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 6);
let useEndpointAction;
module.link("../../../hooks/useEndpointAction", {
  useEndpointAction(v) {
    useEndpointAction = v;
  }

}, 7);

function RemoveDepartmentButton(_ref) {
  let {
    _id,
    reload
  } = _ref;
  const deleteAction = useEndpointAction('DELETE', "livechat/department/".concat(_id));
  const setModal = useSetModal();
  const dispatchToastMessage = useToastMessageDispatch();
  const t = useTranslation();
  const handleRemoveClick = useMutableCallback(async () => {
    const result = await deleteAction();

    if (result.success === true) {
      reload();
    }
  });
  const handleDelete = useMutableCallback(e => {
    e.stopPropagation();

    const onDeleteAgent = async () => {
      try {
        await handleRemoveClick();
        dispatchToastMessage({
          type: 'success',
          message: t('Department_removed')
        });
      } catch (error) {
        dispatchToastMessage({
          type: 'error',
          message: error
        });
      }

      setModal();
    };

    setModal( /*#__PURE__*/React.createElement(GenericModal, {
      variant: "danger",
      onConfirm: onDeleteAgent,
      onCancel: () => setModal(),
      confirmText: t('Delete')
    }));
  });
  return /*#__PURE__*/React.createElement(Table.Cell, {
    fontScale: "p2",
    color: "hint",
    withTruncatedText: true
  }, /*#__PURE__*/React.createElement(Button, {
    small: true,
    ghost: true,
    title: t('Remove'),
    onClick: handleDelete
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash",
    size: "x16"
  })));
}

module.exportDefault(RemoveDepartmentButton);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/departments/20d4c29ac12182812a58d4aaad4a1452253e8591.map
