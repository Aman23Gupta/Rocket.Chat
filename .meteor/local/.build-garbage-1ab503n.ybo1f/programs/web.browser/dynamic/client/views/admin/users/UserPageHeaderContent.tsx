function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/users/UserPageHeaderContent.tsx                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Button, ButtonGroup, Icon;
module.link("@rocket.chat/fuselage", {
  Button(v) {
    Button = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Icon(v) {
    Icon = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 2);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);

const UserPageHeaderContent = () => {
  const usersRoute = useRoute('admin-users');
  const t = useTranslation();

  const handleNewButtonClick = () => {
    usersRoute.push({
      context: 'new'
    });
  };

  const handleInviteButtonClick = () => {
    usersRoute.push({
      context: 'invite'
    });
  };

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
    onClick: handleNewButtonClick
  }, /*#__PURE__*/React.createElement(Icon, {
    size: "x20",
    name: "user-plus"
  }), " ", t('New')), /*#__PURE__*/React.createElement(Button, {
    onClick: handleInviteButtonClick
  }, /*#__PURE__*/React.createElement(Icon, {
    size: "x20",
    name: "mail"
  }), " ", t('Invite'))));
};

module.exportDefault(UserPageHeaderContent);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/users/b538675627d2d56cbd9f1d26cb433776ee6b9d7e.map
