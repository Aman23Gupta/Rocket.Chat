function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/header/actions/Sort.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
let Box, Sidebar, Dropdown;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Sidebar(v) {
    Sidebar = v;
  },

  Dropdown(v) {
    Dropdown = v;
  }

}, 0);
let React, useRef;
module.link("react", {
  default(v) {
    React = v;
  },

  useRef(v) {
    useRef = v;
  }

}, 1);
let createPortal;
module.link("react-dom", {
  createPortal(v) {
    createPortal = v;
  }

}, 2);
let SortList;
module.link("../../../components/SortList", {
  default(v) {
    SortList = v;
  }

}, 3);
let useDropdownVisibility;
module.link("../hooks/useDropdownVisibility", {
  useDropdownVisibility(v) {
    useDropdownVisibility = v;
  }

}, 4);

const Sort = props => {
  const reference = useRef(null);
  const target = useRef(null);
  const {
    isVisible,
    toggle
  } = useDropdownVisibility({
    reference,
    target
  });
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
//# sourceMappingURL=/dynamic/client/sidebar/header/actions/56566ac09d25500117b494fec48ad0861cfc0281.map
