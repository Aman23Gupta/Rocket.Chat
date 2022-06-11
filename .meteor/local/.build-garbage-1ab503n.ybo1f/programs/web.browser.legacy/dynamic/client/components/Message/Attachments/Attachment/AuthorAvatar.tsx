function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/Attachment/AuthorAvatar.tsx                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Avatar;
module.link("@rocket.chat/fuselage", {
  Avatar: function (v) {
    Avatar = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);

var AuthorAvatar = function (_ref) {
  var url = _ref.url;
  return /*#__PURE__*/React.createElement(Avatar, {
    url: url,
    size: 'x24'
  });
};

module.exportDefault(AuthorAvatar);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/Attachment/37a74370bbf602b7d5f567ce0b6e19a3d924a707.map
