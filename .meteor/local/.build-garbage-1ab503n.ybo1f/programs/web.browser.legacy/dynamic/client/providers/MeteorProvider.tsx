function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/providers/MeteorProvider.tsx                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var AttachmentProvider;
module.link("../components/Message/Attachments/providers/AttachmentProvider", {
  "default": function (v) {
    AttachmentProvider = v;
  }
}, 1);
var AuthorizationProvider;
module.link("./AuthorizationProvider", {
  "default": function (v) {
    AuthorizationProvider = v;
  }
}, 2);
var AvatarUrlProvider;
module.link("./AvatarUrlProvider", {
  "default": function (v) {
    AvatarUrlProvider = v;
  }
}, 3);
var ConnectionStatusProvider;
module.link("./ConnectionStatusProvider", {
  "default": function (v) {
    ConnectionStatusProvider = v;
  }
}, 4);
var CustomSoundProvider;
module.link("./CustomSoundProvider", {
  "default": function (v) {
    CustomSoundProvider = v;
  }
}, 5);
var LayoutProvider;
module.link("./LayoutProvider", {
  "default": function (v) {
    LayoutProvider = v;
  }
}, 6);
var ModalProvider;
module.link("./ModalProvider", {
  "default": function (v) {
    ModalProvider = v;
  }
}, 7);
var OmnichannelProvider;
module.link("./OmnichannelProvider", {
  "default": function (v) {
    OmnichannelProvider = v;
  }
}, 8);
var RouterProvider;
module.link("./RouterProvider", {
  "default": function (v) {
    RouterProvider = v;
  }
}, 9);
var ServerProvider;
module.link("./ServerProvider", {
  "default": function (v) {
    ServerProvider = v;
  }
}, 10);
var SessionProvider;
module.link("./SessionProvider", {
  "default": function (v) {
    SessionProvider = v;
  }
}, 11);
var SettingsProvider;
module.link("./SettingsProvider", {
  "default": function (v) {
    SettingsProvider = v;
  }
}, 12);
var SidebarProvider;
module.link("./SidebarProvider", {
  "default": function (v) {
    SidebarProvider = v;
  }
}, 13);
var ToastMessagesProvider;
module.link("./ToastMessagesProvider", {
  "default": function (v) {
    ToastMessagesProvider = v;
  }
}, 14);
var TranslationProvider;
module.link("./TranslationProvider", {
  "default": function (v) {
    TranslationProvider = v;
  }
}, 15);
var UserProvider;
module.link("./UserProvider", {
  "default": function (v) {
    UserProvider = v;
  }
}, 16);

var MeteorProvider = function (_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(ConnectionStatusProvider, null, /*#__PURE__*/React.createElement(ServerProvider, null, /*#__PURE__*/React.createElement(RouterProvider, null, /*#__PURE__*/React.createElement(TranslationProvider, null, /*#__PURE__*/React.createElement(SessionProvider, null, /*#__PURE__*/React.createElement(SidebarProvider, null, /*#__PURE__*/React.createElement(ToastMessagesProvider, null, /*#__PURE__*/React.createElement(SettingsProvider, null, /*#__PURE__*/React.createElement(LayoutProvider, null, /*#__PURE__*/React.createElement(AvatarUrlProvider, null, /*#__PURE__*/React.createElement(CustomSoundProvider, null, /*#__PURE__*/React.createElement(UserProvider, null, /*#__PURE__*/React.createElement(AuthorizationProvider, null, /*#__PURE__*/React.createElement(OmnichannelProvider, null, /*#__PURE__*/React.createElement(ModalProvider, null, /*#__PURE__*/React.createElement(AttachmentProvider, null, children))))))))))))))));
};

module.exportDefault(MeteorProvider);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/providers/2d85757843fb8bfb8c6659b35e4b939e8a2ae8f1.map
