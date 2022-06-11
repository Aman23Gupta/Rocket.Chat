function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Body/Heading.tsx                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);

const Heading = _ref => {
  let {
    value = []
  } = _ref;
  return /*#__PURE__*/React.createElement("h1", null, value.map(block => {
    switch (block.type) {
      case 'PLAIN_TEXT':
        return block.value;

      default:
        return null;
    }
  }));
};

module.exportDefault(Heading);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Body/054e8bba77fbadb0592329be74a79b6d6fc42a94.map
