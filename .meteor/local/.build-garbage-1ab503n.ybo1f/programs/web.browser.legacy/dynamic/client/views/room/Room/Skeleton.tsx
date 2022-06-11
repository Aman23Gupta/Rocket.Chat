function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/Room/Skeleton.tsx                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Skeleton, Box, InputBox;
module.link("@rocket.chat/fuselage", {
  Skeleton: function (v) {
    Skeleton = v;
  },
  Box: function (v) {
    Box = v;
  },
  InputBox: function (v) {
    InputBox = v;
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
var Header;
module.link("../../../components/Header", {
  "default": function (v) {
    Header = v;
  }
}, 2);
var VerticalBarSkeleton;
module.link("../../../components/VerticalBar/VerticalBarSkeleton", {
  "default": function (v) {
    VerticalBarSkeleton = v;
  }
}, 3);
var RoomTemplate;
module.link("../components/RoomTemplate/RoomTemplate", {
  RoomTemplate: function (v) {
    RoomTemplate = v;
  }
}, 4);

var RoomSkeleton = function () {
  return /*#__PURE__*/React.createElement(RoomTemplate, null, /*#__PURE__*/React.createElement(RoomTemplate.Header, null, /*#__PURE__*/React.createElement(Header, null, /*#__PURE__*/React.createElement(Header.Avatar, null, /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rect",
    width: 36,
    height: 36
  })), /*#__PURE__*/React.createElement(Header.Content, null, /*#__PURE__*/React.createElement(Header.Content.Row, null, /*#__PURE__*/React.createElement(Skeleton, {
    width: "10%"
  })), /*#__PURE__*/React.createElement(Header.Content.Row, null, /*#__PURE__*/React.createElement(Skeleton, {
    width: "30%"
  }))))), /*#__PURE__*/React.createElement(RoomTemplate.Body, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    height: "100%",
    justifyContent: "flex-start",
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Box, {
    pi: "x24",
    pb: "x16",
    display: "flex"
  }, /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rect",
    width: 36,
    height: 36
  })), /*#__PURE__*/React.createElement(Box, {
    mis: "x8",
    flexGrow: 1
  }, /*#__PURE__*/React.createElement(Skeleton, {
    width: "100%"
  }), /*#__PURE__*/React.createElement(Skeleton, {
    width: "69%"
  }))), /*#__PURE__*/React.createElement(Box, {
    pi: "x24",
    pb: "x16",
    display: "flex"
  }, /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rect",
    width: 36,
    height: 36
  })), /*#__PURE__*/React.createElement(Box, {
    mis: "x8",
    flexGrow: 1
  }, /*#__PURE__*/React.createElement(Skeleton, {
    width: "100%"
  }), /*#__PURE__*/React.createElement(Skeleton, {
    width: "40%"
  })))), /*#__PURE__*/React.createElement(Box, {
    pi: "x24",
    pb: "x16",
    display: "flex"
  }, /*#__PURE__*/React.createElement(InputBox.Skeleton, null))), /*#__PURE__*/React.createElement(RoomTemplate.Aside, null, /*#__PURE__*/React.createElement(VerticalBarSkeleton, null)));
};

module.exportDefault( /*#__PURE__*/memo(RoomSkeleton));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/Room/9c37f0535e844d7dd59f1ebc7c824658b6db5ef8.map
