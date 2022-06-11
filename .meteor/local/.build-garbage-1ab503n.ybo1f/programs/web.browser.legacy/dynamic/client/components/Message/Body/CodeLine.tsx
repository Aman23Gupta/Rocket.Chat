function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Body/CodeLine.tsx                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);

var CodeLine = function (_ref) {
  var value = _ref.value;
  return /*#__PURE__*/React.createElement("div", null, value.type === 'PLAIN_TEXT' && value.value);
};

module.exportDefault(CodeLine);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Body/862946e50ce94a3ae7a6cc066e5779e5f19ed87d.map
