function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/users/UserPageHeaderContentWithSeatsCap.tsx                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Button, ButtonGroup, Icon, Margins;
module.link("@rocket.chat/fuselage", {
  Button(v) {
    Button = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Icon(v) {
    Icon = v;
  },

  Margins(v) {
    Margins = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let ExternalLink;
module.link("../../../../../client/components/ExternalLink", {
  default(v) {
    ExternalLink = v;
  }

}, 2);
let useSetModal;
module.link("../../../../../client/contexts/ModalContext", {
  useSetModal(v) {
    useSetModal = v;
  }

}, 3);
let useRoute;
module.link("../../../../../client/contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 4);
let useTranslation;
module.link("../../../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 5);
let CloseToSeatsCapModal;
module.link("./CloseToSeatsCapModal", {
  default(v) {
    CloseToSeatsCapModal = v;
  }

}, 6);
let ReachedSeatsCapModal;
module.link("./ReachedSeatsCapModal", {
  default(v) {
    ReachedSeatsCapModal = v;
  }

}, 7);
let SeatsCapUsage;
module.link("./SeatsCapUsage", {
  default(v) {
    SeatsCapUsage = v;
  }

}, 8);
let useRequestSeatsLink;
module.link("./useRequestSeatsLink", {
  useRequestSeatsLink(v) {
    useRequestSeatsLink = v;
  }

}, 9);

const UserPageHeaderContentWithSeatsCap = _ref => {
  let {
    activeUsers,
    maxActiveUsers
  } = _ref;
  const seatsLinkUrl = useRequestSeatsLink();
  const t = useTranslation();
  const usersRoute = useRoute('admin-users');
  const setModal = useSetModal();

  const closeModal = () => setModal(null);

  const isCloseToLimit = () => {
    const ratio = activeUsers / maxActiveUsers;
    return ratio >= 0.8;
  };

  const hasReachedLimit = () => {
    const ratio = activeUsers / maxActiveUsers;
    return ratio >= 1;
  };

  const withPreventionOnReachedLimit = fn => () => {
    if (typeof seatsLinkUrl !== 'string') {
      return;
    }

    if (hasReachedLimit()) {
      setModal( /*#__PURE__*/React.createElement(ReachedSeatsCapModal, {
        members: activeUsers,
        limit: maxActiveUsers,
        requestSeatsLink: seatsLinkUrl,
        onClose: closeModal
      }));
      return;
    }

    fn();
  };

  const handleNewButtonClick = withPreventionOnReachedLimit(() => {
    if (typeof seatsLinkUrl !== 'string') {
      return;
    }

    if (isCloseToLimit()) {
      setModal( /*#__PURE__*/React.createElement(CloseToSeatsCapModal, {
        members: activeUsers,
        limit: maxActiveUsers,
        title: t('Create_new_members'),
        requestSeatsLink: seatsLinkUrl,
        onConfirm: () => {
          usersRoute.push({
            context: 'new'
          });
          closeModal();
        },
        onClose: closeModal
      }));
      return;
    }

    usersRoute.push({
      context: 'new'
    });
  });
  const handleInviteButtonClick = withPreventionOnReachedLimit(() => {
    if (typeof seatsLinkUrl !== 'string') {
      return;
    }

    if (isCloseToLimit()) {
      setModal( /*#__PURE__*/React.createElement(CloseToSeatsCapModal, {
        members: activeUsers,
        limit: maxActiveUsers,
        title: t('Invite_Users'),
        requestSeatsLink: seatsLinkUrl,
        onConfirm: () => {
          usersRoute.push({
            context: 'invite'
          });
          closeModal();
        },
        onClose: closeModal
      }));
      return;
    }

    usersRoute.push({
      context: 'invite'
    });
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Margins, {
    inline: "x16"
  }, /*#__PURE__*/React.createElement(SeatsCapUsage, {
    members: activeUsers,
    limit: maxActiveUsers
  })), /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
    onClick: handleNewButtonClick
  }, /*#__PURE__*/React.createElement(Icon, {
    size: "x20",
    name: "user-plus"
  }), " ", t('New')), /*#__PURE__*/React.createElement(Button, {
    onClick: handleInviteButtonClick
  }, /*#__PURE__*/React.createElement(Icon, {
    size: "x20",
    name: "mail"
  }), " ", t('Invite')), /*#__PURE__*/React.createElement(ExternalLink, {
    to: seatsLinkUrl || ''
  }, /*#__PURE__*/React.createElement(Button, null, /*#__PURE__*/React.createElement(Icon, {
    size: "x20",
    name: "new-window"
  }), " ", t('Request_seats')))));
};

module.exportDefault(UserPageHeaderContentWithSeatsCap);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/views/admin/users/8fad6c077004415a2896bacfc4d35355c81301ca.map
