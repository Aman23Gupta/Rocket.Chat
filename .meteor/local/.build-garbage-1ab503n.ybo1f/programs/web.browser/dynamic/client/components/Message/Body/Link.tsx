function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Body/Link.tsx                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let baseURI;
module.link("../../../lib/baseURI", {
  baseURI(v) {
    baseURI = v;
  }

}, 1);
let Bold;
module.link("./Bold", {
  default(v) {
    Bold = v;
  }

}, 2);
let Italic;
module.link("./Italic", {
  default(v) {
    Italic = v;
  }

}, 3);
let Strike;
module.link("./Strike", {
  default(v) {
    Strike = v;
  }

}, 4);

const Link = _ref => {
  let {
    value
  } = _ref;
  const {
    src,
    label
  } = value;
  const target = src.value.indexOf(baseURI) === 0 ? '' : '_blank';
  return /*#__PURE__*/React.createElement("a", {
    href: src.value,
    "data-title": src.value,
    target: target,
    rel: "noopener noreferrer"
  }, (block => {
    switch (block.type) {
      case 'PLAIN_TEXT':
        return /*#__PURE__*/React.createElement(React.Fragment, null, block.value);

      case 'STRIKE':
        return /*#__PURE__*/React.createElement(Strike, {
          value: block.value
        });

      case 'ITALIC':
        return /*#__PURE__*/React.createElement(Italic, {
          value: block.value
        });

      case 'BOLD':
        return /*#__PURE__*/React.createElement(Bold, {
          value: block.value
        });

      default:
        return null;
    }
  })(label));
};

module.exportDefault(Link);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Body/bb81d30d039c910e2c6d61b9cd7465c54fa98fd9.map
