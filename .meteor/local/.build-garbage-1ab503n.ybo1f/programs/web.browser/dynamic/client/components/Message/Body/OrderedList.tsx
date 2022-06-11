function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Body/OrderedList.tsx                                                                      //
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

const OrderedList = _ref => {
  let {
    value
  } = _ref;
  return /*#__PURE__*/React.createElement("ol", null, value.map((item, index) => /*#__PURE__*/React.createElement("li", {
    key: index
  }, /*#__PURE__*/React.createElement(Inline, {
    value: item.value
  }))));
};

module.exportDefault(OrderedList);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Body/e37e0abcd9be2eb220869fef7f682de0716a99e6.map
