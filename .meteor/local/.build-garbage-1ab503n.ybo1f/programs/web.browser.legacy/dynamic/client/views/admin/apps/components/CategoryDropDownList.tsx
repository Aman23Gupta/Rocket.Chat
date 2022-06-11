function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/components/CategoryDropDownList.tsx                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, CheckBox, Option, Tile;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  CheckBox: function (v) {
    CheckBox = v;
  },
  Option: function (v) {
    Option = v;
  },
  Tile: function (v) {
    Tile = v;
  }
}, 0);
var React, Fragment;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  Fragment: function (v) {
    Fragment = v;
  }
}, 1);

var CategoryDropDownList = function () {
  function CategoryDropDownList(_ref) {
    var groups = _ref.groups,
        onSelected = _ref.onSelected;
    return /*#__PURE__*/React.createElement(Tile, {
      overflow: "auto",
      pb: "x12",
      pi: 0,
      elevation: "2",
      w: "full",
      bg: "alternative",
      borderRadius: "x2"
    }, groups.map(function (group, index) {
      return /*#__PURE__*/React.createElement(Fragment, {
        key: index
      }, group.label && /*#__PURE__*/React.createElement(Box, {
        pi: "x16",
        pbs: "x8",
        pbe: "x4",
        fontScale: "micro",
        textTransform: "uppercase",
        color: "default"
      }, group.label), group.items.map(function (item) {
        return /*#__PURE__*/React.createElement(Option, {
          key: item.id,
          label: item.label,
          onClick: function () {
            return onSelected(item);
          }
        }, /*#__PURE__*/React.createElement(CheckBox, {
          checked: item.checked,
          onChange: function () {
            return onSelected(item);
          }
        }));
      }));
    }));
  }

  return CategoryDropDownList;
}();

module.exportDefault(CategoryDropDownList);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/components/3dd16492b0308fe24e32f505f8133da805004438.map
