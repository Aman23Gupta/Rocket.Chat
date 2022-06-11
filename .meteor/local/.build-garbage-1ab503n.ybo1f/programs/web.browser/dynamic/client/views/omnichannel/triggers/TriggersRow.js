function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/triggers/TriggersRow.js                                                                    //
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
let React, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
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
let useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 5);
let useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 6);
let useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 7);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 8);
const TriggersRow = /*#__PURE__*/memo(function TriggersRow(props) {
  const {
    _id,
    name,
    description,
    enabled,
    onDelete
  } = props;
  const dispatchToastMessage = useToastMessageDispatch();
  const t = useTranslation();
  const setModal = useSetModal();
  const bhRoute = useRoute('omnichannel-triggers');
  const deleteTrigger = useMethod('livechat:removeTrigger');
  const handleClick = useMutableCallback(() => {
    bhRoute.push({
      context: 'edit',
      id: _id
    });
  });
  const handleKeyDown = useMutableCallback(e => {
    if (!['Enter', 'Space'].includes(e.nativeEvent.code)) {
      return;
    }

    handleClick();
  });
  const handleDelete = useMutableCallback(e => {
    e.stopPropagation();

    const onDeleteTrigger = async () => {
      try {
        await deleteTrigger(_id);
        dispatchToastMessage({
          type: 'success',
          message: t('Trigger_removed')
        });
        onDelete();
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
      onConfirm: onDeleteTrigger,
      onCancel: () => setModal(),
      confirmText: t('Delete')
    }));
  });
  return /*#__PURE__*/React.createElement(Table.Row, {
    key: _id,
    role: "link",
    action: true,
    tabIndex: 0,
    onClick: handleClick,
    onKeyDown: handleKeyDown
  }, /*#__PURE__*/React.createElement(Table.Cell, {
    withTruncatedText: true
  }, name), /*#__PURE__*/React.createElement(Table.Cell, {
    withTruncatedText: true
  }, description), /*#__PURE__*/React.createElement(Table.Cell, {
    withTruncatedText: true
  }, enabled ? t('Yes') : t('No')), /*#__PURE__*/React.createElement(Table.Cell, {
    withTruncatedText: true
  }, /*#__PURE__*/React.createElement(Button, {
    small: true,
    ghost: true,
    title: t('Remove'),
    onClick: handleDelete
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash",
    size: "x16"
  }))));
});
module.exportDefault(TriggersRow);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/triggers/3e096458538d212de51aa9d07f4a151a747b2abb.map
