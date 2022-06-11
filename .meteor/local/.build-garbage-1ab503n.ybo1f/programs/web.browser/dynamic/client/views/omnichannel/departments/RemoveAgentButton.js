function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/departments/RemoveAgentButton.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Icon, Button;
module.link("@rocket.chat/fuselage", {
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

function RemoveAgentButton(_ref) {
  let {
    agentId,
    setAgentList,
    agentList,
    setAgentsRemoved
  } = _ref;
  const setModal = useSetModal();
  const dispatchToastMessage = useToastMessageDispatch();
  const t = useTranslation();
  const handleDelete = useMutableCallback(e => {
    e.stopPropagation();

    const onDeleteAgent = async () => {
      const newList = agentList.filter(listItem => listItem.agentId !== agentId);
      setAgentList(newList);
      dispatchToastMessage({
        type: 'success',
        message: t('Agent_removed')
      });
      setModal();
      setAgentsRemoved(agents => [...agents, {
        agentId
      }]);
    };

    setModal( /*#__PURE__*/React.createElement(GenericModal, {
      variant: "danger",
      onConfirm: onDeleteAgent,
      onCancel: () => setModal(),
      confirmText: t('Delete')
    }));
  });
  return /*#__PURE__*/React.createElement(Button, {
    small: true,
    ghost: true,
    title: t('Remove'),
    onClick: handleDelete
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash",
    size: "x16"
  }));
}

module.exportDefault(RemoveAgentButton);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/departments/abb778ff564056dadf53a0ac6873ee11e9eadac1.map
