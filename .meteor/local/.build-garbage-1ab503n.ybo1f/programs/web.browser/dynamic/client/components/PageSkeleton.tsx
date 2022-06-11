function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/PageSkeleton.tsx                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Button, ButtonGroup, Skeleton;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Button(v) {
    Button = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Skeleton(v) {
    Skeleton = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let Page;
module.link("./Page", {
  default(v) {
    Page = v;
  }

}, 2);

const PageSkeleton = () => /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
  title: /*#__PURE__*/React.createElement(Skeleton, {
    width: "x320",
    maxWidth: "full"
  })
}, /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
  children: /*#__PURE__*/React.createElement(Skeleton, {
    width: "x80"
  }),
  disabled: true,
  primary: true
}))), /*#__PURE__*/React.createElement(Page.Content, null, /*#__PURE__*/React.createElement(Box, {
  marginBlock: "none",
  marginInline: "auto",
  width: "full",
  maxWidth: "x580"
}, /*#__PURE__*/React.createElement(Box, {
  is: "p",
  color: "hint",
  fontScale: "p2"
}, /*#__PURE__*/React.createElement(Skeleton, null), /*#__PURE__*/React.createElement(Skeleton, null), /*#__PURE__*/React.createElement(Skeleton, {
  width: "75%"
})))));

module.exportDefault(PageSkeleton);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/d33e6641324b4b1d34fa16bb6b3f33daa1f75e09.map
