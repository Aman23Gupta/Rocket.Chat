function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Body/Paragraph.tsx                                                                        //
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

const Paragraph = _ref => {
  let {
    value = [],
    mentions
  } = _ref;
  return /*#__PURE__*/React.createElement("p", null, /*#__PURE__*/React.createElement(Inline, {
    value: value,
    mentions: mentions
  }));
};

module.exportDefault(Paragraph);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Body/4037ccb7351b56d429e7cccc9c34770c11f06afe.map
