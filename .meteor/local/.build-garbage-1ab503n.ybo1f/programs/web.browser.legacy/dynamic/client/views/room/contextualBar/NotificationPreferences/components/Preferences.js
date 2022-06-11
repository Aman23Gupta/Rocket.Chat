function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/NotificationPreferences/components/Preferences.js                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["name", "options", "onChange", "optionDefault", "children"];

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 0);
module.export({
  Preferences: function () {
    return Preferences;
  }
});
var Field, Select;
module.link("@rocket.chat/fuselage", {
  Field: function (v) {
    Field = v;
  },
  Select: function (v) {
    Select = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);

var Preferences = function (_ref) {
  var name = _ref.name,
      options = _ref.options,
      onChange = _ref.onChange,
      optionDefault = _ref.optionDefault,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Field, props, /*#__PURE__*/React.createElement(Field.Label, null, name), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Select, {
    onChange: onChange,
    options: options,
    value: optionDefault
  }), children));
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/NotificationPreferences/components/9cfd55abe5f19bbb3dddcf947afd38b5e6a12d1c.map
