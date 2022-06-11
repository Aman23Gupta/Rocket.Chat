function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/info/DescriptionList.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["children", "title"];

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
let Box, Table;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Table(v) {
    Table = v;
  }

}, 0);
let React, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  }

}, 1);
let DescriptionListEntry;
module.link("./DescriptionListEntry", {
  default(v) {
    DescriptionListEntry = v;
  }

}, 2);

const DescriptionList = _ref => {
  let {
    children,
    title
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(React.Fragment, null, title && /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    justifyContent: "flex-end",
    width: "30%",
    paddingInline: "x8"
  }, title), /*#__PURE__*/React.createElement(Table, _extends({
    striped: true,
    marginBlockEnd: "x32",
    width: "full"
  }, props), /*#__PURE__*/React.createElement(Table.Body, null, children)));
};

module.exportDefault(Object.assign( /*#__PURE__*/memo(DescriptionList), {
  Entry: DescriptionListEntry
}));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/info/9c0696cf1421c60a1f3254582e74e22a855b970e.map
