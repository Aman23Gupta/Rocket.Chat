function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/managers/RemoveManagerButton.js                                                            //
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

function RemoveManagerButton(_ref) {
  let {
    _id,
    reload
  } = _ref;
  const t = useTranslation();
  const deleteAction = useEndpointAction('DELETE', "livechat/users/manager/".concat(_id));
  const setModal = useSetModal();
  const dispatchToastMessage = useToastMessageDispatch();
  const handleRemoveClick = useMutableCallback(async () => {
    const result = await deleteAction();

    if (result.success === true) {
      reload();
    }
  });
  const handleDelete = useMutableCallback(e => {
    e.stopPropagation();

    const onDeleteManager = async () => {
      try {
        await handleRemoveClick();
        dispatchToastMessage({
          type: 'success',
          message: t('Manager_removed')
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
      onConfirm: onDeleteManager,
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

module.exportDefault(RemoveManagerButton);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/managers/47acfe011e0f38d597895cad92cb9a11852bccf7.map
