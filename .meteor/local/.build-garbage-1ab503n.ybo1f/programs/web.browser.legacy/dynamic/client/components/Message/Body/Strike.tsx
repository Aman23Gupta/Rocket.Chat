function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Body/Strike.tsx                                                                           //
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
var Italic;
module.link("./Italic", {
  "default": function (v) {
    Italic = v;
  }
}, 2);
var Link;
module.link("./Link", {
  "default": function (v) {
    Link = v;
  }
}, 3);

var Strike = function (_ref) {
  var _ref$value = _ref.value,
      value = _ref$value === void 0 ? [] : _ref$value;
  return /*#__PURE__*/React.createElement("del", null, value.map(function (block, index) {
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
//# sourceMappingURL=/dynamic/client/components/Message/Body/b7cf01267ba2665e43b7cb5fe4fa0f402c12abc2.map
