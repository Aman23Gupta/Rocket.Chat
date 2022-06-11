function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Body/OrderedList.tsx                                                                      //
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

var OrderedList = function (_ref) {
  var value = _ref.value;
  return /*#__PURE__*/React.createElement("ol", null, value.map(function (item, index) {
    return /*#__PURE__*/React.createElement("li", {
      key: index
    }, /*#__PURE__*/React.createElement(Inline, {
      value: item.value
    }));
  }));
};

module.exportDefault(OrderedList);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Body/cd17addd9d5cf60c4281498340e272525e5bd987.map
