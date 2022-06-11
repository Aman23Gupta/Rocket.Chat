function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/LoadingDetails.tsx                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, Skeleton;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
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

var LoadingDetails = function () {
  return /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    mbe: "x20",
    w: "full"
  }, /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rect",
    w: "x120",
    h: "x120",
    mie: "x20"
  }), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flexGrow: 1
  }, /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rect",
    w: "full",
    h: "x32"
  }), /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rect",
    w: "full",
    h: "x32"
  }), /*#__PURE__*/React.createElement(Skeleton, {
    variant: "rect",
    w: "full",
    h: "x32"
  })));
};

module.exportDefault(LoadingDetails);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/92fdf5359e1c02b62b798bd1553a6e89bea01849.map
