function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Body/InlineCode.tsx                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);

const InlineCode = _ref => {
  let {
    value
  } = _ref;
  return /*#__PURE__*/React.createElement("code", {
    className: "code-colors inline"
  }, (block => {
    switch (block.type) {
      case 'PLAIN_TEXT':
        return block.value;

      default:
        return null;
    }
  })(value));
};

module.exportDefault(InlineCode);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Body/5d971d3856e8964bfdbace4c5baa5175b4df9177.map
