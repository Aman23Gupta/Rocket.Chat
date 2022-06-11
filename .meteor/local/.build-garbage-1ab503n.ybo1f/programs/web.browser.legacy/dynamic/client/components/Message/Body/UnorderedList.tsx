function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Body/UnorderedList.tsx                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var Inline;
module.link("./Inline", {
  "default": function (v) {
    Inline = v;
  }
}, 1);

var UnorderedList = function (_ref) {
  var value = _ref.value;
  return /*#__PURE__*/React.createElement("ul", null, value.map(function (item) {
    return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Inline, {
      value: item.value
    }));
  }));
};

module.exportDefault(UnorderedList);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Body/141653d9d790de8ea312a8212fec067095f7a6a9.map
