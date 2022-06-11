function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/RawText.js                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);

var RawText = function (_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: children
    }
  });
};

module.exportDefault(RawText);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/5212dc55e87a9641edb871a2f56cb4d15b3ea7b2.map
