function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Sidebar/ListItem.tsx                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Option, OptionColumn;
module.link("@rocket.chat/fuselage", {
  Option(v) {
    Option = v;
  },

  OptionColumn(v) {
    OptionColumn = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);

const ListItem = _ref => {
  let {
    text,
    icon,
    input,
    action
  } = _ref;
  return /*#__PURE__*/React.createElement(Option, {
    onClick: action
  }, icon && /*#__PURE__*/React.createElement(Option.Icon, {
    name: icon
  }), /*#__PURE__*/React.createElement(Option.Content, null, text), input && /*#__PURE__*/React.createElement(OptionColumn, null, input));
};

module.exportDefault(ListItem);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Sidebar/498b4a0ab0c92e23f0b30e51ce29e29a18ef2d10.map
