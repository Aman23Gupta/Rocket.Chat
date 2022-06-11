function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/header/actions/Sort.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);
var Box, Sidebar, Dropdown;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Sidebar: function (v) {
    Sidebar = v;
  },
  Dropdown: function (v) {
    Dropdown = v;
  }
}, 0);
var React, useRef;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useRef: function (v) {
    useRef = v;
  }
}, 1);
var createPortal;
module.link("react-dom", {
  createPortal: function (v) {
    createPortal = v;
  }
}, 2);
var SortList;
module.link("../../../components/SortList", {
  "default": function (v) {
    SortList = v;
  }
}, 3);
var useDropdownVisibility;
module.link("../hooks/useDropdownVisibility", {
  useDropdownVisibility: function (v) {
    useDropdownVisibility = v;
  }
}, 4);

var Sort = function (props) {
  var reference = useRef(null);
  var target = useRef(null);

  var _useDropdownVisibilit = useDropdownVisibility({
    reference: reference,
    target: target
  }),
      isVisible = _useDropdownVisibilit.isVisible,
      toggle = _useDropdownVisibilit.toggle;

  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
    ref: reference
  }, /*#__PURE__*/React.createElement(Sidebar.TopBar.Action, _extends({}, props, {
    icon: "sort",
    onClick: toggle
  }))), isVisible && /*#__PURE__*/createPortal( /*#__PURE__*/React.createElement(Dropdown, {
    reference: reference,
    ref: target
  }, /*#__PURE__*/React.createElement(SortList, null)), document.body));
};

module.exportDefault(Sort);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/header/actions/6fa88077396bd315510280ad2ed4088850f4d851.map
