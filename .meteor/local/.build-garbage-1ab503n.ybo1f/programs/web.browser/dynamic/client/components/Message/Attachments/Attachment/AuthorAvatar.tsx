function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/Attachment/AuthorAvatar.tsx                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Avatar;
module.link("@rocket.chat/fuselage", {
  Avatar(v) {
    Avatar = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);

const AuthorAvatar = _ref => {
  let {
    url
  } = _ref;
  return /*#__PURE__*/React.createElement(Avatar, {
    url,
    size: 'x24'
  });
};

module.exportDefault(AuthorAvatar);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/Attachment/e251a7a3ed4ccb9f5b3b1fc29e520780af169474.map
