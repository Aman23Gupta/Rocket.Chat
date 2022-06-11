function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/Attachments.tsx                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let useBlockRendered;
module.link("../hooks/useBlockRendered", {
  useBlockRendered(v) {
    useBlockRendered = v;
  }

}, 1);
let Item;
module.link("./Item", {
  default(v) {
    Item = v;
  }

}, 2);

const Attachments = _ref => {
  let {
    attachments = null,
    file
  } = _ref;
  const {
    className,
    ref
  } = useBlockRendered();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: className,
    ref: ref
  }), attachments === null || attachments === void 0 ? void 0 : attachments.map((attachment, index) => /*#__PURE__*/React.createElement(Item, {
    key: index,
    file: file,
    attachment: attachment
  })));
};

module.exportDefault(Attachments);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/3724d99fa7a7d2fa3a71df479025956308844ffa.map
