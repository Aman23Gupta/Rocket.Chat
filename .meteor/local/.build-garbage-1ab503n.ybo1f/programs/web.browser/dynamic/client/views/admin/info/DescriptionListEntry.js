function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/info/DescriptionListEntry.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["children", "label"];

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 0);
let Table;
module.link("@rocket.chat/fuselage", {
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
const style = {
  wordBreak: 'break-word'
};

const DescriptionListEntry = _ref => {
  let {
    children,
    label
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Table.Row, props, /*#__PURE__*/React.createElement(Table.Cell, {
    is: "th",
    scope: "col",
    align: "end",
    color: "hint",
    backgroundColor: "surface",
    fontScale: "p2m",
    style: style
  }, label), /*#__PURE__*/React.createElement(Table.Cell, {
    align: "start",
    color: "default",
    style: style
  }, children));
};

module.exportDefault( /*#__PURE__*/memo(DescriptionListEntry));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/info/19717738ee2711deb2ba48408c9a745f13c4d752.map
