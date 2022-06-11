function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Body/InlineCode.tsx                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);

var InlineCode = function (_ref) {
  var value = _ref.value;
  return /*#__PURE__*/React.createElement("code", {
    className: "code-colors inline"
  }, function (block) {
    switch (block.type) {
      case 'PLAIN_TEXT':
        return block.value;

      default:
        return null;
    }
  }(value));
};

module.exportDefault(InlineCode);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Body/0d13b3c5af0f429bb5b3b425da3c641e99842ff1.map
