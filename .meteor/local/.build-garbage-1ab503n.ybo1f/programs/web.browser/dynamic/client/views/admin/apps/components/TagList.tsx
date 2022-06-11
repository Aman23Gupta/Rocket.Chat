function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/components/TagList.tsx                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Chip, ButtonGroup;
module.link("@rocket.chat/fuselage", {
  Chip(v) {
    Chip = v;
  },

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

const TagList = _ref => {
  let {
    categories,
    onClick
  } = _ref;
  return /*#__PURE__*/React.createElement(ButtonGroup, {
    small: true,
    flexWrap: "wrap"
  }, categories.map(category => /*#__PURE__*/React.createElement(Chip, {
    flexShrink: 0,
    key: category.id,
    onClick: () => onClick(category),
    disabled: undefined,
    mbe: "x8"
  }, category.label)));
};

module.exportDefault(TagList);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/components/1dceaae824f3ad62601c7e17f7be5ed49a36313d.map
