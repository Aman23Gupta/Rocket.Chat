function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Page/PageContent.tsx                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);
var Box;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  }
}, 0);
var React, forwardRef;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  forwardRef: function (v) {
    forwardRef = v;
  }
}, 1);
var PageContent = /*#__PURE__*/forwardRef(function () {
  function PageContent(props, ref) {
    return /*#__PURE__*/React.createElement(Box, _extends({
      ref: ref,
      paddingInline: "x24",
      display: "flex",
      flexDirection: "column",
      overflowY: "hidden",
      height: "full"
    }, props));
  }

  return PageContent;
}());
module.exportDefault(PageContent);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Page/88e42a1c559cce8edb79de21a702ed2b9353a87f.map
