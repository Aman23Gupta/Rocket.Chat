function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/VerticalBar/VerticalBarScrollableContent.tsx                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["children"];

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
var Margins;
module.link("@rocket.chat/fuselage", {
  Margins: function (v) {
    Margins = v;
  }
}, 0);
var React, forwardRef, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  forwardRef: function (v) {
    forwardRef = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 1);
var Page;
module.link("../Page", {
  "default": function (v) {
    Page = v;
  }
}, 2);
var VerticalBarScrollableContent = /*#__PURE__*/forwardRef(function () {
  function VerticalBarScrollableContent(_ref, ref) {
    var children = _ref.children,
        props = _objectWithoutProperties(_ref, _excluded);

    return /*#__PURE__*/React.createElement(Page.ScrollableContent, _extends({
      p: "x24"
    }, props, {
      ref: ref
    }), /*#__PURE__*/React.createElement(Margins, {
      blockEnd: "x16"
    }, children));
  }

  return VerticalBarScrollableContent;
}());
module.exportDefault( /*#__PURE__*/memo(VerticalBarScrollableContent));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/VerticalBar/54788887fa91d9bcec6255fba5b5b5357617e113.map
