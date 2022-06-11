function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Body/Body.tsx                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
let React, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  }

}, 0);
let BigEmoji;
module.link("./BigEmoji", {
  default(v) {
    BigEmoji = v;
  }

}, 1);
let Code;
module.link("./Code", {
  default(v) {
    Code = v;
  }

}, 2);
let Heading;
module.link("./Heading", {
  default(v) {
    Heading = v;
  }

}, 3);
let OrderedList;
module.link("./OrderedList", {
  default(v) {
    OrderedList = v;
  }

}, 4);
let Paragraph;
module.link("./Paragraph", {
  default(v) {
    Paragraph = v;
  }

}, 5);
let Quote;
module.link("./Quote", {
  default(v) {
    Quote = v;
  }

}, 6);
let TaskList;
module.link("./TaskList", {
  default(v) {
    TaskList = v;
  }

}, 7);
let UnorderedList;
module.link("./UnorderedList", {
  default(v) {
    UnorderedList = v;
  }

}, 8);

const isBigEmoji = tokens => tokens.length === 1 && tokens[0].type === 'BIG_EMOJI';

const Body = _ref => {
  let {
    tokens,
    mentions
  } = _ref;

  if (isBigEmoji(tokens)) {
    return /*#__PURE__*/React.createElement(BigEmoji, {
      value: tokens[0].value
    });
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, tokens.map((block, index) => {
    if (block.type === 'UNORDERED_LIST') {
      return /*#__PURE__*/React.createElement(UnorderedList, {
        value: block.value,
        key: index
      });
    }

    if (block.type === 'QUOTE') {
      return /*#__PURE__*/React.createElement(Quote, {
        value: block.value,
        key: index
      });
    }

    if (block.type === 'TASKS') {
      return /*#__PURE__*/React.createElement(TaskList, {
        value: block.value,
        key: index
      });
    }

    if (block.type === 'ORDERED_LIST') {
      return /*#__PURE__*/React.createElement(OrderedList, {
        value: block.value,
        key: index
      });
    }

    if (block.type === 'PARAGRAPH') {
      return /*#__PURE__*/React.createElement(Paragraph, {
        mentions: mentions,
        value: block.value,
        key: index
      });
    }

    if (block.type === 'CODE') {
      return /*#__PURE__*/React.createElement(Code, _extends({}, block, {
        key: index
      }));
    }

    if (block.type === 'HEADING') {
      return /*#__PURE__*/React.createElement(Heading, {
        value: block.value,
        key: index
      });
    }

    return null;
  }));
};

module.exportDefault( /*#__PURE__*/memo(Body));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Body/2fa6b2748c7db0c8fa347824492ad28581132e93.map
