function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Body/Inline.tsx                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var Emoji;
module.link("../../Emoji", {
  "default": function (v) {
    Emoji = v;
  }
}, 1);
var Bold;
module.link("./Bold", {
  "default": function (v) {
    Bold = v;
  }
}, 2);
var Image;
module.link("./Image", {
  "default": function (v) {
    Image = v;
  }
}, 3);
var InlineCode;
module.link("./InlineCode", {
  "default": function (v) {
    InlineCode = v;
  }
}, 4);
var Italic;
module.link("./Italic", {
  "default": function (v) {
    Italic = v;
  }
}, 5);
var Link;
module.link("./Link", {
  "default": function (v) {
    Link = v;
  }
}, 6);
var Mention;
module.link("./Mention", {
  "default": function (v) {
    Mention = v;
  }
}, 7);
var Plain;
module.link("./Plain", {
  "default": function (v) {
    Plain = v;
  }
}, 8);
var Strike;
module.link("./Strike", {
  "default": function (v) {
    Strike = v;
  }
}, 9);

var Inline = function (_ref) {
  var _ref$value = _ref.value,
      value = _ref$value === void 0 ? [] : _ref$value,
      _ref$mentions = _ref.mentions,
      mentions = _ref$mentions === void 0 ? [] : _ref$mentions;
  return /*#__PURE__*/React.createElement(React.Fragment, null, value.map(function (block, idx) {
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
          emojiHandle: ":" + block.value.value + ":"
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
//# sourceMappingURL=/dynamic/client/components/Message/Body/714dd52a6a256cabd5f4bc1a9808763ccb37a091.map
