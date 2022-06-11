function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/VerticalBar/VerticalBarActionBack.tsx                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);
var React, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 0);
var VerticalBarAction;
module.link("./VerticalBarAction", {
  "default": function (v) {
    VerticalBarAction = v;
  }
}, 1);

var VerticalBarActionBack = function (props) {
  return /*#__PURE__*/React.createElement(VerticalBarAction, _extends({}, props, {
    name: "arrow-back"
  }));
};

module.exportDefault( /*#__PURE__*/memo(VerticalBarActionBack));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/VerticalBar/712edf6cf269e4b29c797c3cb944ef9ce4a0ebd2.map
