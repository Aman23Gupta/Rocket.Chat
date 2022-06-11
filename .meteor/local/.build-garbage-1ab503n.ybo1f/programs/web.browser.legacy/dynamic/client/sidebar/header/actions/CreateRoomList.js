function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/header/actions/CreateRoomList.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var OptionTitle;
module.link("@rocket.chat/fuselage", {
  OptionTitle: function (v) {
    OptionTitle = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 2);
var popover;
module.link("../../../../app/ui-utils/client", {
  popover: function (v) {
    popover = v;
  }
}, 3);
var CreateDiscussion;
module.link("../../../components/CreateDiscussion", {
  "default": function (v) {
    CreateDiscussion = v;
  }
}, 4);
var ListItem;
module.link("../../../components/Sidebar/ListItem", {
  "default": function (v) {
    ListItem = v;
  }
}, 5);
var useAtLeastOnePermission;
module.link("../../../contexts/AuthorizationContext", {
  useAtLeastOnePermission: function (v) {
    useAtLeastOnePermission = v;
  }
}, 6);
var useSetModal;
module.link("../../../contexts/ModalContext", {
  useSetModal: function (v) {
    useSetModal = v;
  }
}, 7);
var useSetting;
module.link("../../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 8);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 9);
var CreateTeamModal;
module.link("../../../views/teams/CreateTeamModal", {
  "default": function (v) {
    CreateTeamModal = v;
  }
}, 10);
var CreateChannelWithData;
module.link("../CreateChannelWithData", {
  "default": function (v) {
    CreateChannelWithData = v;
  }
}, 11);
var CreateDirectMessage;
module.link("../CreateDirectMessage", {
  "default": function (v) {
    CreateDirectMessage = v;
  }
}, 12);
var CREATE_CHANNEL_PERMISSIONS = ['create-c', 'create-p'];
var CREATE_TEAM_PERMISSIONS = ['create-team'];
var CREATE_DIRECT_PERMISSIONS = ['create-d'];
var CREATE_DISCUSSION_PERMISSIONS = ['start-discussion', 'start-discussion-other-user'];
var style = {
  textTransform: 'uppercase'
};

var useReactModal = function (Component) {
  var setModal = useSetModal();
  return useMutableCallback(function (e) {
    popover.close();
    e.preventDefault();

    var handleClose = function () {
      setModal(null);
    };

    setModal(function () {
      return /*#__PURE__*/React.createElement(Component, {
        onClose: handleClose
      });
    });
  });
};

function CreateRoomList(_ref) {
  var closeList = _ref.closeList;
  var t = useTranslation();
  var canCreateChannel = useAtLeastOnePermission(CREATE_CHANNEL_PERMISSIONS);
  var canCreateTeam = useAtLeastOnePermission(CREATE_TEAM_PERMISSIONS);
  var canCreateDirectMessages = useAtLeastOnePermission(CREATE_DIRECT_PERMISSIONS);
  var canCreateDiscussion = useAtLeastOnePermission(CREATE_DISCUSSION_PERMISSIONS);
  var createChannel = useReactModal(CreateChannelWithData);
  var createTeam = useReactModal(CreateTeamModal);
  var createDiscussion = useReactModal(CreateDiscussion);
  var createDirectMessage = useReactModal(CreateDirectMessage);
  var discussionEnabled = useSetting('Discussion_enabled');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(OptionTitle, {
    pb: "x8",
    style: style
  }, t('Create_new')), /*#__PURE__*/React.createElement("ul", {
    className: "rc-popover__list"
  }, canCreateChannel && /*#__PURE__*/React.createElement(ListItem, {
    icon: "hashtag",
    text: t('Channel'),
    action: function (e) {
      createChannel(e);
      closeList();
    }
  }), canCreateTeam && /*#__PURE__*/React.createElement(ListItem, {
    icon: "team",
    text: t('Team'),
    action: function (e) {
      createTeam(e);
      closeList();
    }
  }), canCreateDirectMessages && /*#__PURE__*/React.createElement(ListItem, {
    icon: "balloon",
    text: t('Direct_Messages'),
    action: function (e) {
      createDirectMessage(e);
      closeList();
    }
  }), discussionEnabled && canCreateDiscussion && /*#__PURE__*/React.createElement(ListItem, {
    icon: "discussion",
    text: t('Discussion'),
    action: function (e) {
      createDiscussion(e);
      closeList();
    }
  })));
}

module.exportDefault(CreateRoomList);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/header/actions/9d8fd11b65a3473c17b77cc0282a94b13cf1e1fe.map
