function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Actions/Actions.tsx                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
let ButtonGroup;
module.link("@rocket.chat/fuselage", {
  ButtonGroup(v) {
    ButtonGroup = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let Content;
module.link("../Metrics/Content", {
  default(v) {
    Content = v;
  }

}, 2);
let Action;
module.link("./Action", {
  default(v) {
    Action = v;
  }

}, 3);

const Actions = _ref => {
  var _actions$;

  let {
    actions,
    runAction
  } = _ref;
  const alignment = ((_actions$ = actions[0]) === null || _actions$ === void 0 ? void 0 : _actions$.actionLinksAlignment) || 'center';
  return /*#__PURE__*/React.createElement(Content, {
    width: "full",
    justifyContent: alignment
  }, /*#__PURE__*/React.createElement(ButtonGroup, {
    align: "center"
  }, actions.map(action => /*#__PURE__*/React.createElement(Action, _extends({
    runAction: runAction,
    key: action.id
  }, action)))));
};

module.exportDefault(Actions);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Actions/8c4eb289c49944a4b7784e3f8cdcafab489dc708.map
