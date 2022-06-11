function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/cannedResponses/RemoveCannedResponseButton.tsx                                                //
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

const RemoveCannedResponseButton = _ref => {
  let {
    _id,
    reload,
    totalDataReload
  } = _ref;
  const cannedResponsesRoute = useRoute('omnichannel-canned-responses');
  const removeCannedResponse = useMethod('removeCannedResponse');
  const setModal = useSetModal();
  const dispatchToastMessage = useToastMessageDispatch();
  const t = useTranslation();
  const handleRemoveClick = useMutableCallback(async () => {
    try {
      await removeCannedResponse(_id);
    } catch (error) {
      console.log(error);
    }

    cannedResponsesRoute.push({});
  });
  const handleDelete = useMutableCallback(e => {
    e.stopPropagation();

    const onDeleteCannedResponse = async () => {
      try {
        await handleRemoveClick();
        reload();
        totalDataReload();
        dispatchToastMessage({
          type: 'success',
          message: t('Canned_Response_Removed')
        });
      } catch (error) {
        dispatchToastMessage({
          type: 'error',
          message: error
        });
      }

      setModal(null);
    };

    setModal( /*#__PURE__*/React.createElement(GenericModal, {
      variant: "danger",
      onConfirm: onDeleteCannedResponse,
      onCancel: () => setModal(null),
      onClose: () => setModal(null),
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
};

module.exportDefault(RemoveCannedResponseButton);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/cannedResponses/d971cf2b11f0b85107027064c39709d1f1fa60b5.map
