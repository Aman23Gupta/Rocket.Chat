function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Actions/Actions.tsx                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);
var ButtonGroup;
module.link("@rocket.chat/fuselage", {
  ButtonGroup: function (v) {
    ButtonGroup = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var Content;
module.link("../Metrics/Content", {
  "default": function (v) {
    Content = v;
  }
}, 2);
var Action;
module.link("./Action", {
  "default": function (v) {
    Action = v;
  }
}, 3);

var Actions = function (_ref) {
  var _actions$;

  var actions = _ref.actions,
      runAction = _ref.runAction;
  var alignment = ((_actions$ = actions[0]) === null || _actions$ === void 0 ? void 0 : _actions$.actionLinksAlignment) || 'center';
  return /*#__PURE__*/React.createElement(Content, {
    width: "full",
    justifyContent: alignment
  }, /*#__PURE__*/React.createElement(ButtonGroup, {
    align: "center"
  }, actions.map(function (action) {
    return /*#__PURE__*/React.createElement(Action, _extends({
      runAction: runAction,
      key: action.id
    }, action));
  })));
};

module.exportDefault(Actions);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Actions/97d021b4685ba7fc091cbea2daffd64a9e85d3e3.map
