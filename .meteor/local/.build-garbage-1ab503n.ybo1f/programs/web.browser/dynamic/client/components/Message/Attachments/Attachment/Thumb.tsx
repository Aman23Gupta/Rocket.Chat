function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/Attachment/Thumb.tsx                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Avatar;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Avatar(v) {
    Avatar = v;
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

const Thumb = _ref => {
  let {
    url
  } = _ref;
  return /*#__PURE__*/React.createElement(Box, {
    mis: "x8"
  }, /*#__PURE__*/React.createElement(Avatar, {
    url,
    size: 'x48'
  }));
};

module.exportDefault( /*#__PURE__*/memo(Thumb));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/Attachment/8608c6e1adb4fdc96fd3218ca2d031e9df587f08.map
