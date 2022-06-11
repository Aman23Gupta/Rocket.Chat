function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/SortList/SortList.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Option;
module.link("@rocket.chat/fuselage", {
  Option: function (v) {
    Option = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var GroupingList;
module.link("./GroupingList", {
  "default": function (v) {
    GroupingList = v;
  }
}, 2);
var SortModeList;
module.link("./SortModeList", {
  "default": function (v) {
    SortModeList = v;
  }
}, 3);
var ViewModeList;
module.link("./ViewModeList", {
  "default": function (v) {
    ViewModeList = v;
  }
}, 4);

function SortList() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ViewModeList, null), /*#__PURE__*/React.createElement(Option.Divider, null), /*#__PURE__*/React.createElement(SortModeList, null), /*#__PURE__*/React.createElement(Option.Divider, null), /*#__PURE__*/React.createElement(GroupingList, null));
}

module.exportDefault(SortList);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/SortList/6441e65c4dca0a3915076d64e0377307b12a9b44.map
