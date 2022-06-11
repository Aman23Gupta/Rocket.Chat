function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/LogsLoading.tsx                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, Skeleton, Margins;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Skeleton: function (v) {
    Skeleton = v;
  },
  Margins: function (v) {
    Margins = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);

var LogsLoading = function () {
  return /*#__PURE__*/React.createElement(Box, {
    maxWidth: "x600",
    w: "full",
    alignSelf: "center"
  }, /*#__PURE__*/React.createElement(Margins, {
    block: "x2"
  }, /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rect",
    width: "100%",
    height: "x80"
  }), /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rect",
    width: "100%",
    height: "x80"
  }), /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rect",
    width: "100%",
    height: "x80"
  })));
};

module.exportDefault(LogsLoading);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/79c8a91aa14fa818bd33b0f8bf3246183508063c.map
