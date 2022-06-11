function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/components/CategoryDropDown.tsx                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["data", "onSelected"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
let useToggle;
module.link("@rocket.chat/fuselage-hooks", {
  useToggle(v) {
    useToggle = v;
  }

}, 0);
let React, useRef, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  useRef(v) {
    useRef = v;
  },

  useCallback(v) {
    useCallback = v;
  }

}, 1);
let CategoryDropDownAnchor;
module.link("./CategoryDropDownAnchor", {
  default(v) {
    CategoryDropDownAnchor = v;
  }

}, 2);
let CategoryDropDownList;
module.link("./CategoryDropDownList", {
  default(v) {
    CategoryDropDownList = v;
  }

}, 3);
let CategoryDropDownListWrapper;
module.link("./CategoryDropDownListWrapper", {
  default(v) {
    CategoryDropDownListWrapper = v;
  }

}, 4);

const CategoryDropDown = _ref => {
  let {
    data,
    onSelected
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const reference = useRef(null);
  const [collapsed, toggleCollapsed] = useToggle(false);
  const onClose = useCallback(e => {
    var _reference$current;

    if (e.target !== reference.current && !((_reference$current = reference.current) !== null && _reference$current !== void 0 && _reference$current.contains(e.target))) {
      toggleCollapsed(false);
      return;
    }

    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
    return false;
  }, [toggleCollapsed]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(CategoryDropDownAnchor, _extends({
    ref: reference,
    onClick: toggleCollapsed
  }, props)), collapsed && /*#__PURE__*/React.createElement(CategoryDropDownListWrapper, {
    ref: reference,
    onClose: onClose
  }, /*#__PURE__*/React.createElement(CategoryDropDownList, {
    groups: data,
    onSelected: onSelected
  })));
};

module.exportDefault(CategoryDropDown);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/components/3ccc45c729da767e02edfb4c0beafe4e973ee1d9.map
