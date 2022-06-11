function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Body/Heading.tsx                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);

var Heading = function (_ref) {
  var _ref$value = _ref.value,
      value = _ref$value === void 0 ? [] : _ref$value;
  return /*#__PURE__*/React.createElement("h1", null, value.map(function (block) {
    switch (block.type) {
      case 'PLAIN_TEXT':
        return block.value;

      default:
        return null;
    }
  }));
};

module.exportDefault(Heading);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Body/782f1360b6bf2c30b10079d66ccdd5afca6ed713.map
