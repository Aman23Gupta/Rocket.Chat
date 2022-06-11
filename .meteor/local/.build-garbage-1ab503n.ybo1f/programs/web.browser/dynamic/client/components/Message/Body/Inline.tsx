function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Body/Inline.tsx                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Emoji;
module.link("../../Emoji", {
  default(v) {
    Emoji = v;
  }

}, 1);
let Bold;
module.link("./Bold", {
  default(v) {
    Bold = v;
  }

}, 2);
let Image;
module.link("./Image", {
  default(v) {
    Image = v;
  }

}, 3);
let InlineCode;
module.link("./InlineCode", {
  default(v) {
    InlineCode = v;
  }

}, 4);
let Italic;
module.link("./Italic", {
  default(v) {
    Italic = v;
  }

}, 5);
let Link;
module.link("./Link", {
  default(v) {
    Link = v;
  }

}, 6);
let Mention;
module.link("./Mention", {
  default(v) {
    Mention = v;
  }

}, 7);
let Plain;
module.link("./Plain", {
  default(v) {
    Plain = v;
  }

}, 8);
let Strike;
module.link("./Strike", {
  default(v) {
    Strike = v;
  }

}, 9);

const Inline = _ref => {
  let {
    value = [],
    mentions = []
  } = _ref;
  return /*#__PURE__*/React.createElement(React.Fragment, null, value.map((block, idx) => {
    switch (block.type) {
      case 'IMAGE':
        return /*#__PURE__*/React.createElement(Image, {
          key: idx,
          value: block.value
        });

      case 'PLAIN_TEXT':
        return block.value;

      case 'BOLD':
        return /*#__PURE__*/React.createElement(Bold, {
          key: idx,
          value: block.value
        });

      case 'STRIKE':
        return /*#__PURE__*/React.createElement(Strike, {
          key: idx,
          value: block.value
        });

      case 'ITALIC':
        return /*#__PURE__*/React.createElement(Italic, {
          key: idx,
          value: block.value
        });

      case 'LINK':
        return /*#__PURE__*/React.createElement(Link, {
          key: idx,
          value: block.value
        });

      case 'MENTION_USER':
        return /*#__PURE__*/React.createElement(Mention, {
          key: idx,
          value: block.value,
          mentions: mentions
        });

      case 'EMOJI':
        return /*#__PURE__*/React.createElement(Emoji, {
          key: idx,
          emojiHandle: ":".concat(block.value.value, ":")
        });

      case 'MENTION_CHANNEL':
        // case 'COLOR':
        return /*#__PURE__*/React.createElement(Plain, {
          key: idx,
          value: block.value
        });

      case 'INLINE_CODE':
        return /*#__PURE__*/React.createElement(InlineCode, {
          key: idx,
          value: block.value
        });

      default:
        return null;
    }
  }));
};

module.exportDefault(Inline);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Body/42bd1a6d547df9d1561dbd9230fe2a1a4cb07050.map
