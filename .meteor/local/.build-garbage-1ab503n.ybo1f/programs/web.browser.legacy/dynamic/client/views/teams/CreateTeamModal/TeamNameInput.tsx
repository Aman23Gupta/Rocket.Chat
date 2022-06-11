function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/CreateTeamModal/TeamNameInput.tsx                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["private"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 1);
var Icon, TextInput;
module.link("@rocket.chat/fuselage", {
  Icon: function (v) {
    Icon = v;
  },
  TextInput: function (v) {
    TextInput = v;
  }
}, 0);
var React, forwardRef, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  forwardRef: function (v) {
    forwardRef = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 1);
var TeamNameInput = /*#__PURE__*/forwardRef(function () {
  function TeamNameInput(_ref, ref) {
    var _ref$private = _ref.private,
        _private = _ref$private === void 0 ? true : _ref$private,
        props = _objectWithoutProperties(_ref, _excluded);

    var addon = useMemo(function () {
      return /*#__PURE__*/React.createElement(Icon, {
        name: _private ? 'team-lock' : 'team',
        size: "x20"
      });
    }, [_private]);
    return /*#__PURE__*/React.createElement(TextInput, _extends({
      ref: ref
    }, props, {
      addon: addon
    }));
  }

  return TeamNameInput;
}());
module.exportDefault(TeamNameInput);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/CreateTeamModal/f1a74cecb79de0eb50edc89d861c5e29c51e768f.map
