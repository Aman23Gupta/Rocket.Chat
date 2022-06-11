function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Body/Link.tsx                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var baseURI;
module.link("../../../lib/baseURI", {
  baseURI: function (v) {
    baseURI = v;
  }
}, 1);
var Bold;
module.link("./Bold", {
  "default": function (v) {
    Bold = v;
  }
}, 2);
var Italic;
module.link("./Italic", {
  "default": function (v) {
    Italic = v;
  }
}, 3);
var Strike;
module.link("./Strike", {
  "default": function (v) {
    Strike = v;
  }
}, 4);

var Link = function (_ref) {
  var value = _ref.value;
  var src = value.src,
      label = value.label;
  var target = src.value.indexOf(baseURI) === 0 ? '' : '_blank';
  return /*#__PURE__*/React.createElement("a", {
    href: src.value,
    "data-title": src.value,
    target: target,
    rel: "noopener noreferrer"
  }, function (block) {
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
  }(label));
};

module.exportDefault(Link);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Body/e666480872a38ffd6983d015acf313524c1ab006.map
