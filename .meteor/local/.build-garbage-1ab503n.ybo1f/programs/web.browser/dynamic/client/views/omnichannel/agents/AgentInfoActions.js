function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/agents/AgentInfoActions.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
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
let useSetModal;
module.link("../../../contexts/ModalContext", {
  useSetModal(v) {
    useSetModal = v;
  }

}, 3);
let useRouteParameter, useRoute;
module.link("../../../contexts/RouterContext", {
  useRouteParameter(v) {
    useRouteParameter = v;
  },

  useRoute(v) {
    useRoute = v;
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
let AgentInfo;
module.link("./AgentInfo", {
  default(v) {
    AgentInfo = v;
  }

}, 8);

function AgentInfoActions(_ref) {
  let {
    reload
  } = _ref;
  const t = useTranslation();

  const _id = useRouteParameter('id');

  const agentsRoute = useRoute('omnichannel-agents');
  const deleteAction = useEndpointAction('DELETE', "livechat/users/agent/".concat(_id));
  const setModal = useSetModal();
  const dispatchToastMessage = useToastMessageDispatch();
  const handleRemoveClick = useMutableCallback(async () => {
    const result = await deleteAction();

    if (result.success === true) {
      agentsRoute.push({});
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
          message: t('Agent_removed')
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
  const handleEditClick = useMutableCallback(() => agentsRoute.push({
    context: 'edit',
    id: _id
  }));
  return [/*#__PURE__*/React.createElement(AgentInfo.Action, {
    key: t('Remove'),
    title: t('Remove'),
    label: t('Remove'),
    onClick: handleDelete,
    icon: 'trash'
  }), /*#__PURE__*/React.createElement(AgentInfo.Action, {
    key: t('Edit'),
    title: t('Edit'),
    label: t('Edit'),
    onClick: handleEditClick,
    icon: 'edit'
  })];
}

module.exportDefault(AgentInfoActions);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/agents/a6468491bb4d51b8e73105c017ea1fe120329a16.map
