function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/components/CategoryDropDownListWrapper.tsx                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  }

}, 0);
let usePosition, useOutsideClick;
module.link("@rocket.chat/fuselage-hooks", {
  usePosition(v) {
    usePosition = v;
  },

  useOutsideClick(v) {
    useOutsideClick = v;
  }

}, 1);
let React, forwardRef, useRef;
module.link("react", {
  default(v) {
    React = v;
  },

  forwardRef(v) {
    forwardRef = v;
  },

  useRef(v) {
    useRef = v;
  }

}, 2);
const options = {
  margin: 8,
  placement: 'bottom-end'
};
const hidden = {
  visibility: 'hidden',
  opacity: 0,
  position: 'fixed'
};
const CategoryDropDownListWrapper = /*#__PURE__*/forwardRef(function CategoryDropDownListWrapper(_ref, ref) {
  let {
    children,
    onClose
  } = _ref;
  const target = useRef(null);
  useOutsideClick([target], onClose);
  const {
    style = hidden
  } = usePosition(ref, target, options);
  return /*#__PURE__*/React.createElement(Box, {
    ref: target,
    style: style,
    minWidth: 224,
    zIndex: "99999"
  }, children);
});
module.exportDefault(CategoryDropDownListWrapper);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/components/abbd076c22db85fde02741559cb29141cf7e8ee6.map
