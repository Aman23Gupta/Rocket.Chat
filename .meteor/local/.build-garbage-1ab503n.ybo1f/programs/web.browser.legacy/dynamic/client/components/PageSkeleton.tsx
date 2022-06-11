function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/PageSkeleton.tsx                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, Button, ButtonGroup, Skeleton;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Button: function (v) {
    Button = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Skeleton: function (v) {
    Skeleton = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var Page;
module.link("./Page", {
  "default": function (v) {
    Page = v;
  }
}, 2);

var PageSkeleton = function () {
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
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
};

module.exportDefault(PageSkeleton);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/7feb92f40db12eb3aa98690cb1dde10ac2fd94ed.map
