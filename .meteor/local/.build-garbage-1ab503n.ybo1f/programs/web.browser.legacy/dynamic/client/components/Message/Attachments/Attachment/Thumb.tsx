function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/Attachment/Thumb.tsx                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, Avatar;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Avatar: function (v) {
    Avatar = v;
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

var Thumb = function (_ref) {
  var url = _ref.url;
  return /*#__PURE__*/React.createElement(Box, {
    mis: "x8"
  }, /*#__PURE__*/React.createElement(Avatar, {
    url: url,
    size: 'x48'
  }));
};

module.exportDefault( /*#__PURE__*/memo(Thumb));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/Attachment/b2efbb6a364c799b11b976c7f6817343495886fe.map
