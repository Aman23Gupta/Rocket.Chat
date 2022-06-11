function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/directory/ContextualBar.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let useRouteParameter;
module.link("../../../contexts/RouterContext", {
  useRouteParameter(v) {
    useRouteParameter = v;
  }

}, 1);
let ChatsContextualBar;
module.link("./ChatsContextualBar", {
  default(v) {
    ChatsContextualBar = v;
  }

}, 2);
let ContactContextualBar;
module.link("./ContactContextualBar", {
  default(v) {
    ContactContextualBar = v;
  }

}, 3);

const ContextualBar = _ref => {
  let {
    contactReload,
    chatReload
  } = _ref;
  const page = useRouteParameter('page');
  const bar = useRouteParameter('bar');

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
//# sourceMappingURL=/dynamic/client/views/omnichannel/directory/2246bf76a8469f6336fad5250c1f991ad4f3ac68.map
