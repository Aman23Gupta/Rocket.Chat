function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Body/Plain.tsx                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 0);

var Plain = function (_ref) {
  var value = _ref.value;
  return /*#__PURE__*/React.createElement(React.Fragment, null, value.type === 'PLAIN_TEXT' && value.value);
};

module.exportDefault( /*#__PURE__*/memo(Plain));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Body/02410a4c91f7793c1b30a160e504bae9a8f85545.map
