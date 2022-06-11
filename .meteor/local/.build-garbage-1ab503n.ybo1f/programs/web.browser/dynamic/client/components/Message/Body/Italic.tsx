function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Body/Italic.tsx                                                                           //
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
let Link;
module.link("./Link", {
  default(v) {
    Link = v;
  }

}, 2);
let Strike;
module.link("./Strike", {
  default(v) {
    Strike = v;
  }

}, 3);

const Italic = _ref => {
  let {
    value = []
  } = _ref;
  return /*#__PURE__*/React.createElement("i", null, value.map((block, index) => {
    switch (block.type) {
      case 'LINK':
        return /*#__PURE__*/React.createElement(Link, {
          key: index,
          value: block.value
        });

      case 'PLAIN_TEXT':
        return block.value;

      case 'STRIKE':
        return /*#__PURE__*/React.createElement(Strike, {
          key: index,
          value: block.value
        });

      case 'BOLD':
        return /*#__PURE__*/React.createElement(Bold, {
          key: index,
          value: block.value
        });

      default:
        return null;
    }
  }));
};

module.exportDefault(Italic);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Body/0f29cacd56289bf64f13a8d655a660e8f961a342.map
