function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Body/UnorderedList.tsx                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Inline;
module.link("./Inline", {
  default(v) {
    Inline = v;
  }

}, 1);

const UnorderedList = _ref => {
  let {
    value
  } = _ref;
  return /*#__PURE__*/React.createElement("ul", null, value.map(item => /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(Inline, {
    value: item.value
  }))));
};

module.exportDefault(UnorderedList);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Body/22f8e6669571a58c2a93e0c9829439e23096392e.map
