function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/header/actions/CreateRoomList.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let OptionTitle;
module.link("@rocket.chat/fuselage", {
  OptionTitle(v) {
    OptionTitle = v;
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
let popover;
module.link("../../../../app/ui-utils/client", {
  popover(v) {
    popover = v;
  }

}, 3);
let CreateDiscussion;
module.link("../../../components/CreateDiscussion", {
  default(v) {
    CreateDiscussion = v;
  }

}, 4);
let ListItem;
module.link("../../../components/Sidebar/ListItem", {
  default(v) {
    ListItem = v;
  }

}, 5);
let useAtLeastOnePermission;
module.link("../../../contexts/AuthorizationContext", {
  useAtLeastOnePermission(v) {
    useAtLeastOnePermission = v;
  }

}, 6);
let useSetModal;
module.link("../../../contexts/ModalContext", {
  useSetModal(v) {
    useSetModal = v;
  }

}, 7);
let useSetting;
module.link("../../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 8);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 9);
let CreateTeamModal;
module.link("../../../views/teams/CreateTeamModal", {
  default(v) {
    CreateTeamModal = v;
  }

}, 10);
let CreateChannelWithData;
module.link("../CreateChannelWithData", {
  default(v) {
    CreateChannelWithData = v;
  }

}, 11);
let CreateDirectMessage;
module.link("../CreateDirectMessage", {
  default(v) {
    CreateDirectMessage = v;
  }

}, 12);
const CREATE_CHANNEL_PERMISSIONS = ['create-c', 'create-p'];
const CREATE_TEAM_PERMISSIONS = ['create-team'];
const CREATE_DIRECT_PERMISSIONS = ['create-d'];
const CREATE_DISCUSSION_PERMISSIONS = ['start-discussion', 'start-discussion-other-user'];
const style = {
  textTransform: 'uppercase'
};

const useReactModal = Component => {
  const setModal = useSetModal();
  return useMutableCallback(e => {
    popover.close();
    e.preventDefault();

    const handleClose = () => {
      setModal(null);
    };

    setModal(() => /*#__PURE__*/React.createElement(Component, {
      onClose: handleClose
    }));
  });
};

function CreateRoomList(_ref) {
  let {
    closeList
  } = _ref;
  const t = useTranslation();
  const canCreateChannel = useAtLeastOnePermission(CREATE_CHANNEL_PERMISSIONS);
  const canCreateTeam = useAtLeastOnePermission(CREATE_TEAM_PERMISSIONS);
  const canCreateDirectMessages = useAtLeastOnePermission(CREATE_DIRECT_PERMISSIONS);
  const canCreateDiscussion = useAtLeastOnePermission(CREATE_DISCUSSION_PERMISSIONS);
  const createChannel = useReactModal(CreateChannelWithData);
  const createTeam = useReactModal(CreateTeamModal);
  const createDiscussion = useReactModal(CreateDiscussion);
  const createDirectMessage = useReactModal(CreateDirectMessage);
  const discussionEnabled = useSetting('Discussion_enabled');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(OptionTitle, {
    pb: "x8",
    style: style
  }, t('Create_new')), /*#__PURE__*/React.createElement("ul", {
    className: "rc-popover__list"
  }, canCreateChannel && /*#__PURE__*/React.createElement(ListItem, {
    icon: "hashtag",
    text: t('Channel'),
    action: e => {
      createChannel(e);
      closeList();
    }
  }), canCreateTeam && /*#__PURE__*/React.createElement(ListItem, {
    icon: "team",
    text: t('Team'),
    action: e => {
      createTeam(e);
      closeList();
    }
  }), canCreateDirectMessages && /*#__PURE__*/React.createElement(ListItem, {
    icon: "balloon",
    text: t('Direct_Messages'),
    action: e => {
      createDirectMessage(e);
      closeList();
    }
  }), discussionEnabled && canCreateDiscussion && /*#__PURE__*/React.createElement(ListItem, {
    icon: "discussion",
    text: t('Discussion'),
    action: e => {
      createDiscussion(e);
      closeList();
    }
  })));
}

module.exportDefault(CreateRoomList);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/header/actions/8302d67ca3d933385b87d873c363cf3335c94340.map
