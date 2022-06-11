function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/GenericTable/V2/GenericTableRow.tsx                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  GenericTableRow: function () {
    return GenericTableRow;
  }
});
var Table;
module.link("@rocket.chat/fuselage", {
  Table: function (v) {
    Table = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);

var GenericTableRow = function (props) {
  return /*#__PURE__*/React.createElement(Table.Row, props);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/GenericTable/V2/5567d08c16855936df05f408f29d0b142c320f4f.map
