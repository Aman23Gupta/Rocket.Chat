function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/VerticalBar/VerticalBarContent.tsx                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
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
}, 0);
var Page;
module.link("../Page", {
  "default": function (v) {
    Page = v;
  }
}, 1);
var VerticalBarContent = /*#__PURE__*/forwardRef(function () {
  function VerticalBarContent(props, ref) {
    return /*#__PURE__*/React.createElement(Page.Content, _extends({
      "rcx-vertical-bar__content": true,
      display: "flex"
    }, props, {
      ref: ref
    }));
  }

  return VerticalBarContent;
}());
module.exportDefault( /*#__PURE__*/memo(VerticalBarContent));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/VerticalBar/afb4901683c43ec71620a5f8d5cab056689cc131.map
