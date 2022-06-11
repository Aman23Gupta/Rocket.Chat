function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/Room/Skeleton.tsx                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Skeleton, Box, InputBox;
module.link("@rocket.chat/fuselage", {
  Skeleton(v) {
    Skeleton = v;
  },

  Box(v) {
    Box = v;
  },

  InputBox(v) {
    InputBox = v;
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
let Header;
module.link("../../../components/Header", {
  default(v) {
    Header = v;
  }

}, 2);
let VerticalBarSkeleton;
module.link("../../../components/VerticalBar/VerticalBarSkeleton", {
  default(v) {
    VerticalBarSkeleton = v;
  }

}, 3);
let RoomTemplate;
module.link("../components/RoomTemplate/RoomTemplate", {
  RoomTemplate(v) {
    RoomTemplate = v;
  }

}, 4);

const RoomSkeleton = () => /*#__PURE__*/React.createElement(RoomTemplate, null, /*#__PURE__*/React.createElement(RoomTemplate.Header, null, /*#__PURE__*/React.createElement(Header, null, /*#__PURE__*/React.createElement(Header.Avatar, null, /*#__PURE__*/React.createElement(Skeleton, {
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

module.exportDefault( /*#__PURE__*/memo(RoomSkeleton));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/Room/a478993a914d9c9fb6a21840aaaea37633b7563a.map
