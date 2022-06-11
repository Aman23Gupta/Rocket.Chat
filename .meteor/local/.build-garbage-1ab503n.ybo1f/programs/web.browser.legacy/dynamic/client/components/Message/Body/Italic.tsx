function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Body/Italic.tsx                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var Bold;
module.link("./Bold", {
  "default": function (v) {
    Bold = v;
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

var Italic = function (_ref) {
  var _ref$value = _ref.value,
      value = _ref$value === void 0 ? [] : _ref$value;
  return /*#__PURE__*/React.createElement("i", null, value.map(function (block, index) {
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
//# sourceMappingURL=/dynamic/client/components/Message/Body/e2b8c593162935b437fa2fb389ffe2738d688f2d.map
