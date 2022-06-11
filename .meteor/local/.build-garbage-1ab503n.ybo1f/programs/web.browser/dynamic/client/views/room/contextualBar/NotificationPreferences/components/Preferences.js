function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/NotificationPreferences/components/Preferences.js                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["name", "options", "onChange", "optionDefault", "children"];

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 0);
module.export({
  Preferences: () => Preferences
});
let Field, Select;
module.link("@rocket.chat/fuselage", {
  Field(v) {
    Field = v;
  },

  Select(v) {
    Select = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);

const Preferences = _ref => {
  let {
    name,
    options,
    onChange,
    optionDefault,
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  return /*#__PURE__*/React.createElement(Field, props, /*#__PURE__*/React.createElement(Field.Label, null, name), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Select, {
    onChange: onChange,
    options: options,
    value: optionDefault
  }), children));
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/NotificationPreferences/components/b8b9cc7da975d96ae59b0c8bce69dcf79331b5de.map
