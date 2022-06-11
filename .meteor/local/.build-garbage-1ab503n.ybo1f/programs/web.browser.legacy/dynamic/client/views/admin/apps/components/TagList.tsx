function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/components/TagList.tsx                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Chip, ButtonGroup;
module.link("@rocket.chat/fuselage", {
  Chip: function (v) {
    Chip = v;
  },
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

var TagList = function (_ref) {
  var categories = _ref.categories,
      onClick = _ref.onClick;
  return /*#__PURE__*/React.createElement(ButtonGroup, {
    small: true,
    flexWrap: "wrap"
  }, categories.map(function (category) {
    return /*#__PURE__*/React.createElement(Chip, {
      flexShrink: 0,
      key: category.id,
      onClick: function () {
        return onClick(category);
      },
      disabled: undefined,
      mbe: "x8"
    }, category.label);
  }));
};

module.exportDefault(TagList);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/components/a0f5b49742a8ee3ea73611d77dfca47c770d1ecc.map
