function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Body/Body.tsx                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);
var React, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 0);
var BigEmoji;
module.link("./BigEmoji", {
  "default": function (v) {
    BigEmoji = v;
  }
}, 1);
var Code;
module.link("./Code", {
  "default": function (v) {
    Code = v;
  }
}, 2);
var Heading;
module.link("./Heading", {
  "default": function (v) {
    Heading = v;
  }
}, 3);
var OrderedList;
module.link("./OrderedList", {
  "default": function (v) {
    OrderedList = v;
  }
}, 4);
var Paragraph;
module.link("./Paragraph", {
  "default": function (v) {
    Paragraph = v;
  }
}, 5);
var Quote;
module.link("./Quote", {
  "default": function (v) {
    Quote = v;
  }
}, 6);
var TaskList;
module.link("./TaskList", {
  "default": function (v) {
    TaskList = v;
  }
}, 7);
var UnorderedList;
module.link("./UnorderedList", {
  "default": function (v) {
    UnorderedList = v;
  }
}, 8);

var isBigEmoji = function (tokens) {
  return tokens.length === 1 && tokens[0].type === 'BIG_EMOJI';
};

var Body = function (_ref) {
  var tokens = _ref.tokens,
      mentions = _ref.mentions;

  if (isBigEmoji(tokens)) {
    return /*#__PURE__*/React.createElement(BigEmoji, {
      value: tokens[0].value
    });
  }

  return /*#__PURE__*/React.createElement(React.Fragment, null, tokens.map(function (block, index) {
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
//# sourceMappingURL=/dynamic/client/components/Message/Body/1a7b9816b7ee9fd13b2d4e02eed919cdda5a7e3f.map
