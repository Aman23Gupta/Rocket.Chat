function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Body/Bold.tsx                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Italic;
module.link("./Italic", {
  default(v) {
    Italic = v;
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

const Bold = _ref => {
  let {
    value = []
  } = _ref;
  return /*#__PURE__*/React.createElement("strong", null, value.map((block, index) => {
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

module.exportDefault(Bold);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Body/6ba001bedbdb7fa417e67b45a1804291630b3be4.map
