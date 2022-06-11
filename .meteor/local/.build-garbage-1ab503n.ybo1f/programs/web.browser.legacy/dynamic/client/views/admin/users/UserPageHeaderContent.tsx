function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/users/UserPageHeaderContent.tsx                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Button, ButtonGroup, Icon;
module.link("@rocket.chat/fuselage", {
  Button: function (v) {
    Button = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Icon: function (v) {
    Icon = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 2);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);

var UserPageHeaderContent = function () {
  var usersRoute = useRoute('admin-users');
  var t = useTranslation();

  var handleNewButtonClick = function () {
    usersRoute.push({
      context: 'new'
    });
  };

  var handleInviteButtonClick = function () {
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
//# sourceMappingURL=/dynamic/client/views/admin/users/96aeb6cc6de63cca40760d7cece6c0d38009eb4e.map
