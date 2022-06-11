function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Page/PageScrollableContent.tsx                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["onScrollContent"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 1);
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
var ScrollableContentWrapper;
module.link("../ScrollableContentWrapper", {
  "default": function (v) {
    ScrollableContentWrapper = v;
  }
}, 2);
var PageScrollableContent = /*#__PURE__*/forwardRef(function () {
  function PageScrollableContent(_ref, ref) {
    var onScrollContent = _ref.onScrollContent,
        props = _objectWithoutProperties(_ref, _excluded);

    return /*#__PURE__*/React.createElement(Box, {
      height: "50vh",
      display: "flex",
      flexShrink: 1,
      flexDirection: "column",
      flexGrow: 1,
      overflow: "hidden"
    }, /*#__PURE__*/React.createElement(ScrollableContentWrapper, {
      onScroll: onScrollContent,
      ref: ref
    }, /*#__PURE__*/React.createElement(Box, _extends({
      p: "x16",
      display: "flex",
      flexDirection: "column",
      flexGrow: 1
    }, props))));
  }

  return PageScrollableContent;
}());
module.exportDefault(PageScrollableContent);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Page/e839047f5a04b4dc7ebca15aeb19bfb71bff2074.map
