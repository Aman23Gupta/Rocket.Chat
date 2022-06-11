function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/units/RemoveUnitButton.js                                                                     //
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
module.link("../../../../client/components/GenericModal", {
  default(v) {
    GenericModal = v;
  }

}, 3);
let useSetModal;
module.link("../../../../client/contexts/ModalContext", {
  useSetModal(v) {
    useSetModal = v;
  }

}, 4);
let useRoute;
module.link("../../../../client/contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 5);
let useMethod;
module.link("../../../../client/contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 6);
let useToastMessageDispatch;
module.link("../../../../client/contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 7);
let useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 8);

function RemoveUnitButton(_ref) {
  let {
    _id,
    reload
  } = _ref;
  const removeUnit = useMethod('livechat:removeUnit');
  const unitsRoute = useRoute('omnichannel-units');
  const setModal = useSetModal();
  const dispatchToastMessage = useToastMessageDispatch();
  const t = useTranslation();
  const handleRemoveClick = useMutableCallback(async () => {
    try {
      await removeUnit(_id);
    } catch (error) {
      console.log(error);
    }

    unitsRoute.push({});
    reload();
  });
  const handleDelete = useMutableCallback(e => {
    e.stopPropagation();

    const onDeleteAgent = async () => {
      try {
        await handleRemoveClick();
        dispatchToastMessage({
          type: 'success',
          message: t('Unit_removed')
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

module.exportDefault(RemoveUnitButton);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/units/079f2be893c2998d9fc04f805dcbee48ffd9cac6.map
