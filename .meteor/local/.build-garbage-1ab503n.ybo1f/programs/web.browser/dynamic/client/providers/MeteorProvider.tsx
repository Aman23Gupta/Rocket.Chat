function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/providers/MeteorProvider.tsx                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let AttachmentProvider;
module.link("../components/Message/Attachments/providers/AttachmentProvider", {
  default(v) {
    AttachmentProvider = v;
  }

}, 1);
let AuthorizationProvider;
module.link("./AuthorizationProvider", {
  default(v) {
    AuthorizationProvider = v;
  }

}, 2);
let AvatarUrlProvider;
module.link("./AvatarUrlProvider", {
  default(v) {
    AvatarUrlProvider = v;
  }

}, 3);
let ConnectionStatusProvider;
module.link("./ConnectionStatusProvider", {
  default(v) {
    ConnectionStatusProvider = v;
  }

}, 4);
let CustomSoundProvider;
module.link("./CustomSoundProvider", {
  default(v) {
    CustomSoundProvider = v;
  }

}, 5);
let LayoutProvider;
module.link("./LayoutProvider", {
  default(v) {
    LayoutProvider = v;
  }

}, 6);
let ModalProvider;
module.link("./ModalProvider", {
  default(v) {
    ModalProvider = v;
  }

}, 7);
let OmnichannelProvider;
module.link("./OmnichannelProvider", {
  default(v) {
    OmnichannelProvider = v;
  }

}, 8);
let RouterProvider;
module.link("./RouterProvider", {
  default(v) {
    RouterProvider = v;
  }

}, 9);
let ServerProvider;
module.link("./ServerProvider", {
  default(v) {
    ServerProvider = v;
  }

}, 10);
let SessionProvider;
module.link("./SessionProvider", {
  default(v) {
    SessionProvider = v;
  }

}, 11);
let SettingsProvider;
module.link("./SettingsProvider", {
  default(v) {
    SettingsProvider = v;
  }

}, 12);
let SidebarProvider;
module.link("./SidebarProvider", {
  default(v) {
    SidebarProvider = v;
  }

}, 13);
let ToastMessagesProvider;
module.link("./ToastMessagesProvider", {
  default(v) {
    ToastMessagesProvider = v;
  }

}, 14);
let TranslationProvider;
module.link("./TranslationProvider", {
  default(v) {
    TranslationProvider = v;
  }

}, 15);
let UserProvider;
module.link("./UserProvider", {
  default(v) {
    UserProvider = v;
  }

}, 16);

const MeteorProvider = _ref => {
  let {
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(ConnectionStatusProvider, null, /*#__PURE__*/React.createElement(ServerProvider, null, /*#__PURE__*/React.createElement(RouterProvider, null, /*#__PURE__*/React.createElement(TranslationProvider, null, /*#__PURE__*/React.createElement(SessionProvider, null, /*#__PURE__*/React.createElement(SidebarProvider, null, /*#__PURE__*/React.createElement(ToastMessagesProvider, null, /*#__PURE__*/React.createElement(SettingsProvider, null, /*#__PURE__*/React.createElement(LayoutProvider, null, /*#__PURE__*/React.createElement(AvatarUrlProvider, null, /*#__PURE__*/React.createElement(CustomSoundProvider, null, /*#__PURE__*/React.createElement(UserProvider, null, /*#__PURE__*/React.createElement(AuthorizationProvider, null, /*#__PURE__*/React.createElement(OmnichannelProvider, null, /*#__PURE__*/React.createElement(ModalProvider, null, /*#__PURE__*/React.createElement(AttachmentProvider, null, children))))))))))))))));
};

module.exportDefault(MeteorProvider);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/providers/3cf54645e3accb50c376ee5a32ef883ba28159b8.map
