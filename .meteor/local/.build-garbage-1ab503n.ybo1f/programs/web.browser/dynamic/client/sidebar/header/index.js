function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/header/index.js                                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Sidebar;
module.link("@rocket.chat/fuselage", {
  Sidebar(v) {
    Sidebar = v;
  }

}, 0);
let React, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  }

}, 1);
let useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);
let useUser;
module.link("../../contexts/UserContext", {
  useUser(v) {
    useUser = v;
  }

}, 3);
let useSidebarPaletteColor;
module.link("../hooks/useSidebarPaletteColor", {
  useSidebarPaletteColor(v) {
    useSidebarPaletteColor = v;
  }

}, 4);
let UserAvatarButton;
module.link("./UserAvatarButton", {
  default(v) {
    UserAvatarButton = v;
  }

}, 5);
let CreateRoom;
module.link("./actions/CreateRoom", {
  default(v) {
    CreateRoom = v;
  }

}, 6);
let Directory;
module.link("./actions/Directory", {
  default(v) {
    Directory = v;
  }

}, 7);
let Home;
module.link("./actions/Home", {
  default(v) {
    Home = v;
  }

}, 8);
let Login;
module.link("./actions/Login", {
  default(v) {
    Login = v;
  }

}, 9);
let Search;
module.link("./actions/Search", {
  default(v) {
    Search = v;
  }

}, 10);
let Sort;
module.link("./actions/Sort", {
  default(v) {
    Sort = v;
  }

}, 11);

const HeaderWithData = () => {
  const user = useUser();
  const t = useTranslation();
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
//# sourceMappingURL=/dynamic/client/sidebar/header/ac5f1405708341060af4049316582eb38b7f04ea.map
