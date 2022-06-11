function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/components/CategoryDropDownList.tsx                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, CheckBox, Option, Tile;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  CheckBox(v) {
    CheckBox = v;
  },

  Option(v) {
    Option = v;
  },

  Tile(v) {
    Tile = v;
  }

}, 0);
let React, Fragment;
module.link("react", {
  default(v) {
    React = v;
  },

  Fragment(v) {
    Fragment = v;
  }

}, 1);

const CategoryDropDownList = function CategoryDropDownList(_ref) {
  let {
    groups,
    onSelected
  } = _ref;
  return /*#__PURE__*/React.createElement(Tile, {
    overflow: "auto",
    pb: "x12",
    pi: 0,
    elevation: "2",
    w: "full",
    bg: "alternative",
    borderRadius: "x2"
  }, groups.map((group, index) => /*#__PURE__*/React.createElement(Fragment, {
    key: index
  }, group.label && /*#__PURE__*/React.createElement(Box, {
    pi: "x16",
    pbs: "x8",
    pbe: "x4",
    fontScale: "micro",
    textTransform: "uppercase",
    color: "default"
  }, group.label), group.items.map(item => /*#__PURE__*/React.createElement(Option, {
    key: item.id,
    label: item.label,
    onClick: () => onSelected(item)
  }, /*#__PURE__*/React.createElement(CheckBox, {
    checked: item.checked,
    onChange: () => onSelected(item)
  }))))));
};

module.exportDefault(CategoryDropDownList);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/components/3070df43d86a27e75592eff019e71b65f2c8b395.map
