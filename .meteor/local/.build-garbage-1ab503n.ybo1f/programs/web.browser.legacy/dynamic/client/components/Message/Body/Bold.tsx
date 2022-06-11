function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Body/Bold.tsx                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var Italic;
module.link("./Italic", {
  "default": function (v) {
    Italic = v;
  }
}, 1);
var Link;
module.link("./Link", {
  "default": function (v) {
    Link = v;
  }
}, 2);
var Strike;
module.link("./Strike", {
  "default": function (v) {
    Strike = v;
  }
}, 3);

var Bold = function (_ref) {
  var _ref$value = _ref.value,
      value = _ref$value === void 0 ? [] : _ref$value;
  return /*#__PURE__*/React.createElement("strong", null, value.map(function (block, index) {
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
//# sourceMappingURL=/dynamic/client/components/Message/Body/782e97765420ff06712a519782fdbad38d5a24c7.map
