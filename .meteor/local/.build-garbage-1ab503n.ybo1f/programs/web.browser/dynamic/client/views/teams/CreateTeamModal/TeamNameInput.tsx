function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/CreateTeamModal/TeamNameInput.tsx                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["private"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
let Icon, TextInput;
module.link("@rocket.chat/fuselage", {
  Icon(v) {
    Icon = v;
  },

  TextInput(v) {
    TextInput = v;
  }

}, 0);
let React, forwardRef, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  forwardRef(v) {
    forwardRef = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 1);
const TeamNameInput = /*#__PURE__*/forwardRef(function TeamNameInput(_ref, ref) {
  let {
    private: _private = true
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const addon = useMemo(() => /*#__PURE__*/React.createElement(Icon, {
    name: _private ? 'team-lock' : 'team',
    size: "x20"
  }), [_private]);
  return /*#__PURE__*/React.createElement(TextInput, _extends({
    ref: ref
  }, props, {
    addon: addon
  }));
});
module.exportDefault(TeamNameInput);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/CreateTeamModal/4849c87f0719a3d96efe2ca470167dca6333a5f3.map
