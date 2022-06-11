function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/Attachment/Block.tsx                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let Attachment;
module.link("./Attachment", {
  default(v) {
    Attachment = v;
  }

}, 2);

const Block = _ref => {
  let {
    pre,
    color = 'neutral-600',
    children
  } = _ref;
  return /*#__PURE__*/React.createElement(Attachment, null, pre, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    pis: "x16",
    borderRadius: "x2",
    borderInlineStartStyle: "solid",
    borderInlineStartWidth: "x2",
    borderInlineStartColor: color,
    children: children
  }));
};

module.exportDefault(Block);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/Attachment/df82f48e480e3dfda48398760ae85247fcfa0283.map
