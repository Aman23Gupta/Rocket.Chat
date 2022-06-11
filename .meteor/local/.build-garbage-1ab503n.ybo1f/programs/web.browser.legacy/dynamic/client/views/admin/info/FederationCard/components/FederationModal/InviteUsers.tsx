function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/info/FederationCard/components/FederationModal/InviteUsers.tsx                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, ButtonGroup, Button, Banner;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Button: function (v) {
    Button = v;
  },
  Banner: function (v) {
    Banner = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var useRoute;
module.link("../../../../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 2);
var useTranslation;
module.link("../../../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);

var InviteUsers = function (_ref) {
  var onClose = _ref.onClose;
  var t = useTranslation();
  var directoryRoute = useRoute('directory');

  var handleDirectory = function () {
    onClose();
    directoryRoute.push({
      tab: 'users'
    });
  };

  return /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    flexGrow: 1
  }, /*#__PURE__*/React.createElement(Box, {
    fontWeight: "c2",
    fontSize: "p2"
  }, t('Federation_Inviting_users_from_another_server')), /*#__PURE__*/React.createElement(Box, {
    mbs: "x16"
  }, t('Federation_Search_users_you_want_to_connect')), /*#__PURE__*/React.createElement(Box, {
    mbs: "x16",
    pis: "x16"
  }, /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'disc',
      listStylePosition: 'inside'
    }
  }, /*#__PURE__*/React.createElement("li", null, t('Federation_Username')), /*#__PURE__*/React.createElement("li", null, t('Federation_Email')))), /*#__PURE__*/React.createElement(Box, {
    mbs: "x16",
    mbe: "x16"
  }, t('Federation_You_will_invite_users_without_login_access'), /*#__PURE__*/React.createElement(ButtonGroup, {
    mbs: "x20",
    align: "start"
  }, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    small: true,
    onClick: handleDirectory
  }, t('Federation_Invite_User')))), /*#__PURE__*/React.createElement(Banner, null, /*#__PURE__*/React.createElement(Box, {
    is: "h2",
    fontWeight: "c2"
  }, t('Federation_Invite_Users_To_Private_Rooms')), /*#__PURE__*/React.createElement("p", null, t('Federation_Channels_Will_Be_Replicated'))));
};

module.exportDefault(InviteUsers);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/info/FederationCard/components/FederationModal/ac634c2af3ba03bbacc5e95044711136355d931d.map
