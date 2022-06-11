function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Sidebar/ListItem.tsx                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Option, OptionColumn;
module.link("@rocket.chat/fuselage", {
  Option: function (v) {
    Option = v;
  },
  OptionColumn: function (v) {
    OptionColumn = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);

var ListItem = function (_ref) {
  var text = _ref.text,
      icon = _ref.icon,
      input = _ref.input,
      action = _ref.action;
  return /*#__PURE__*/React.createElement(Option, {
    onClick: action
  }, icon && /*#__PURE__*/React.createElement(Option.Icon, {
    name: icon
  }), /*#__PURE__*/React.createElement(Option.Content, null, text), input && /*#__PURE__*/React.createElement(OptionColumn, null, input));
};

module.exportDefault(ListItem);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Sidebar/2c163946bce06b2e3defb89f6a52d235ed058f76.map
