function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Body/Strike.tsx                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Bold;
module.link("./Bold", {
  default(v) {
    Bold = v;
  }

}, 1);
let Italic;
module.link("./Italic", {
  default(v) {
    Italic = v;
  }

}, 2);
let Link;
module.link("./Link", {
  default(v) {
    Link = v;
  }

}, 3);

const Strike = _ref => {
  let {
    value = []
  } = _ref;
  return /*#__PURE__*/React.createElement("del", null, value.map((block, index) => {
    switch (block.type) {
      case 'LINK':
        return /*#__PURE__*/React.createElement(Link, {
          key: index,
          value: block.value
        });

      case 'PLAIN_TEXT':
        return block.value;

      case 'BOLD':
        return /*#__PURE__*/React.createElement(Bold, {
          key: index,
          value: block.value
        });

      case 'ITALIC':
        return /*#__PURE__*/React.createElement(Italic, {
          key: index,
          value: block.value
        });

      default:
        return null;
    }
  }));
};

module.exportDefault(Strike);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Body/0344bdb500cc35dd29d3990c0c83e9fb17f65cd1.map
