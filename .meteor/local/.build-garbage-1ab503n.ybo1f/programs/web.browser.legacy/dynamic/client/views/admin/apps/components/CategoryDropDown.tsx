function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/components/CategoryDropDown.tsx                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["data", "onSelected"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 2);
var useToggle;
module.link("@rocket.chat/fuselage-hooks", {
  useToggle: function (v) {
    useToggle = v;
  }
}, 0);
var React, useRef, useCallback;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useRef: function (v) {
    useRef = v;
  },
  useCallback: function (v) {
    useCallback = v;
  }
}, 1);
var CategoryDropDownAnchor;
module.link("./CategoryDropDownAnchor", {
  "default": function (v) {
    CategoryDropDownAnchor = v;
  }
}, 2);
var CategoryDropDownList;
module.link("./CategoryDropDownList", {
  "default": function (v) {
    CategoryDropDownList = v;
  }
}, 3);
var CategoryDropDownListWrapper;
module.link("./CategoryDropDownListWrapper", {
  "default": function (v) {
    CategoryDropDownListWrapper = v;
  }
}, 4);

var CategoryDropDown = function (_ref) {
  var data = _ref.data,
      onSelected = _ref.onSelected,
      props = _objectWithoutProperties(_ref, _excluded);

  var reference = useRef(null);

  var _useToggle = useToggle(false),
      _useToggle2 = _slicedToArray(_useToggle, 2),
      collapsed = _useToggle2[0],
      toggleCollapsed = _useToggle2[1];

  var onClose = useCallback(function (e) {
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
//# sourceMappingURL=/dynamic/client/views/admin/apps/components/84421f3f3f110ff45e6771351388fc719655ee86.map
