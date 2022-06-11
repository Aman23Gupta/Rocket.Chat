function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/header/index.js                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Sidebar;
module.link("@rocket.chat/fuselage", {
  Sidebar: function (v) {
    Sidebar = v;
  }
}, 0);
var React, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 1);
var useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);
var useUser;
module.link("../../contexts/UserContext", {
  useUser: function (v) {
    useUser = v;
  }
}, 3);
var useSidebarPaletteColor;
module.link("../hooks/useSidebarPaletteColor", {
  useSidebarPaletteColor: function (v) {
    useSidebarPaletteColor = v;
  }
}, 4);
var UserAvatarButton;
module.link("./UserAvatarButton", {
  "default": function (v) {
    UserAvatarButton = v;
  }
}, 5);
var CreateRoom;
module.link("./actions/CreateRoom", {
  "default": function (v) {
    CreateRoom = v;
  }
}, 6);
var Directory;
module.link("./actions/Directory", {
  "default": function (v) {
    Directory = v;
  }
}, 7);
var Home;
module.link("./actions/Home", {
  "default": function (v) {
    Home = v;
  }
}, 8);
var Login;
module.link("./actions/Login", {
  "default": function (v) {
    Login = v;
  }
}, 9);
var Search;
module.link("./actions/Search", {
  "default": function (v) {
    Search = v;
  }
}, 10);
var Sort;
module.link("./actions/Sort", {
  "default": function (v) {
    Sort = v;
  }
}, 11);

var HeaderWithData = function () {
  var user = useUser();
  var t = useTranslation();
  useSidebarPaletteColor();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Sidebar.TopBar.Section, {
    className: "sidebar--custom-colors"
  }, /*#__PURE__*/React.createElement(UserAvatarButton, {
    user: user
  }), /*#__PURE__*/React.createElement(Sidebar.TopBar.Actions, null, /*#__PURE__*/React.createElement(Home, {
    title: t('Home')
  }), /*#__PURE__*/React.createElement(Search, {
    title: t('Search'),
    "data-qa": "sidebar-search"
  }), user && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Directory, {
    title: t('Directory')
  }), /*#__PURE__*/React.createElement(Sort, {
    title: t('Display')
  }), /*#__PURE__*/React.createElement(CreateRoom, {
    title: t('Create_new'),
    "data-qa": "sidebar-create"
  })), !user && /*#__PURE__*/React.createElement(Login, {
    title: t('Login')
  }))));
};

module.exportDefault( /*#__PURE__*/memo(HeaderWithData));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/header/fbe7d8ce9b07c74092c66295d91a422103d2199a.map
