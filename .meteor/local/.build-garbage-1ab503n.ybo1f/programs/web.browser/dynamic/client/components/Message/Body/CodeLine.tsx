function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Body/CodeLine.tsx                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);

const CodeLine = _ref => {
  let {
    value
  } = _ref;
  return /*#__PURE__*/React.createElement("div", null, value.type === 'PLAIN_TEXT' && value.value);
};

module.exportDefault(CodeLine);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Body/f86bf80f42e9e64389e9a7677ec8655268fd0f5b.map
