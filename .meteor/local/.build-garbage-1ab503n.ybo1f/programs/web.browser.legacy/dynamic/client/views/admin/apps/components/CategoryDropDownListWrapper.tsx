function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/components/CategoryDropDownListWrapper.tsx                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  }
}, 0);
var usePosition, useOutsideClick;
module.link("@rocket.chat/fuselage-hooks", {
  usePosition: function (v) {
    usePosition = v;
  },
  useOutsideClick: function (v) {
    useOutsideClick = v;
  }
}, 1);
var React, forwardRef, useRef;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  forwardRef: function (v) {
    forwardRef = v;
  },
  useRef: function (v) {
    useRef = v;
  }
}, 2);
var options = {
  margin: 8,
  placement: 'bottom-end'
};
var hidden = {
  visibility: 'hidden',
  opacity: 0,
  position: 'fixed'
};
var CategoryDropDownListWrapper = /*#__PURE__*/forwardRef(function () {
  function CategoryDropDownListWrapper(_ref, ref) {
    var children = _ref.children,
        onClose = _ref.onClose;
    var target = useRef(null);
    useOutsideClick([target], onClose);

    var _usePosition = usePosition(ref, target, options),
        _usePosition$style = _usePosition.style,
        style = _usePosition$style === void 0 ? hidden : _usePosition$style;

    return /*#__PURE__*/React.createElement(Box, {
      ref: target,
      style: style,
      minWidth: 224,
      zIndex: "99999"
    }, children);
  }

  return CategoryDropDownListWrapper;
}());
module.exportDefault(CategoryDropDownListWrapper);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/components/466aff415a30ef8320c6b440401713305cdacb20.map
