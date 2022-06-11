function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/views/admin/users/UserPageHeaderContentWithSeatsCap.tsx                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Button, ButtonGroup, Icon, Margins;
module.link("@rocket.chat/fuselage", {
  Button: function (v) {
    Button = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  Margins: function (v) {
    Margins = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var ExternalLink;
module.link("../../../../../client/components/ExternalLink", {
  "default": function (v) {
    ExternalLink = v;
  }
}, 2);
var useSetModal;
module.link("../../../../../client/contexts/ModalContext", {
  useSetModal: function (v) {
    useSetModal = v;
  }
}, 3);
var useRoute;
module.link("../../../../../client/contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 4);
var useTranslation;
module.link("../../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 5);
var CloseToSeatsCapModal;
module.link("./CloseToSeatsCapModal", {
  "default": function (v) {
    CloseToSeatsCapModal = v;
  }
}, 6);
var ReachedSeatsCapModal;
module.link("./ReachedSeatsCapModal", {
  "default": function (v) {
    ReachedSeatsCapModal = v;
  }
}, 7);
var SeatsCapUsage;
module.link("./SeatsCapUsage", {
  "default": function (v) {
    SeatsCapUsage = v;
  }
}, 8);
var useRequestSeatsLink;
module.link("./useRequestSeatsLink", {
  useRequestSeatsLink: function (v) {
    useRequestSeatsLink = v;
  }
}, 9);

var UserPageHeaderContentWithSeatsCap = function (_ref) {
  var activeUsers = _ref.activeUsers,
      maxActiveUsers = _ref.maxActiveUsers;
  var seatsLinkUrl = useRequestSeatsLink();
  var t = useTranslation();
  var usersRoute = useRoute('admin-users');
  var setModal = useSetModal();

  var closeModal = function () {
    return setModal(null);
  };

  var isCloseToLimit = function () {
    var ratio = activeUsers / maxActiveUsers;
    return ratio >= 0.8;
  };

  var hasReachedLimit = function () {
    var ratio = activeUsers / maxActiveUsers;
    return ratio >= 1;
  };

  var withPreventionOnReachedLimit = function (fn) {
    return function () {
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
  };

  var handleNewButtonClick = withPreventionOnReachedLimit(function () {
    if (typeof seatsLinkUrl !== 'string') {
      return;
    }

    if (isCloseToLimit()) {
      setModal( /*#__PURE__*/React.createElement(CloseToSeatsCapModal, {
        members: activeUsers,
        limit: maxActiveUsers,
        title: t('Create_new_members'),
        requestSeatsLink: seatsLinkUrl,
        onConfirm: function () {
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
  var handleInviteButtonClick = withPreventionOnReachedLimit(function () {
    if (typeof seatsLinkUrl !== 'string') {
      return;
    }

    if (isCloseToLimit()) {
      setModal( /*#__PURE__*/React.createElement(CloseToSeatsCapModal, {
        members: activeUsers,
        limit: maxActiveUsers,
        title: t('Invite_Users'),
        requestSeatsLink: seatsLinkUrl,
        onConfirm: function () {
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
//# sourceMappingURL=/dynamic/ee/client/views/admin/users/d457aec21535d510dd6939c5d5794798ebd387ff.map
