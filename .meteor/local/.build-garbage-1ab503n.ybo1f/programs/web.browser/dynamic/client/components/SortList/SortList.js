function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/SortList/SortList.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Option;
module.link("@rocket.chat/fuselage", {
  Option(v) {
    Option = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let GroupingList;
module.link("./GroupingList", {
  default(v) {
    GroupingList = v;
  }

}, 2);
let SortModeList;
module.link("./SortModeList", {
  default(v) {
    SortModeList = v;
  }

}, 3);
let ViewModeList;
module.link("./ViewModeList", {
  default(v) {
    ViewModeList = v;
  }

}, 4);

function SortList() {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(ViewModeList, null), /*#__PURE__*/React.createElement(Option.Divider, null), /*#__PURE__*/React.createElement(SortModeList, null), /*#__PURE__*/React.createElement(Option.Divider, null), /*#__PURE__*/React.createElement(GroupingList, null));
}

module.exportDefault(SortList);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/SortList/5a7a00c4176fca91a275db7a9a2b47bc80eb5168.map
