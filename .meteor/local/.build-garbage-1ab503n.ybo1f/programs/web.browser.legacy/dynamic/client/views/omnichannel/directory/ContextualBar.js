function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/directory/ContextualBar.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var useRouteParameter;
module.link("../../../contexts/RouterContext", {
  useRouteParameter: function (v) {
    useRouteParameter = v;
  }
}, 1);
var ChatsContextualBar;
module.link("./ChatsContextualBar", {
  "default": function (v) {
    ChatsContextualBar = v;
  }
}, 2);
var ContactContextualBar;
module.link("./ContactContextualBar", {
  "default": function (v) {
    ContactContextualBar = v;
  }
}, 3);

var ContextualBar = function (_ref) {
  var contactReload = _ref.contactReload,
      chatReload = _ref.chatReload;
  var page = useRouteParameter('page');
  var bar = useRouteParameter('bar');

  if (!bar) {
    return null;
  }

  switch (page) {
    case 'contacts':
      return /*#__PURE__*/React.createElement(ContactContextualBar, {
        contactReload: contactReload
      });

    case 'chats':
      return /*#__PURE__*/React.createElement(ChatsContextualBar, {
        chatReload: chatReload
      });

    default:
      return null;
  }
};

module.exportDefault(ContextualBar);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/directory/73b3f92e4e77602d2e1d50d1aa515ade292f6c0b.map
