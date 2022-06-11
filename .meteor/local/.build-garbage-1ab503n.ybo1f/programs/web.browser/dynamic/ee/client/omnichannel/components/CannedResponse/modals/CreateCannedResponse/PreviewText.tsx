function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/components/CannedResponse/modals/CreateCannedResponse/PreviewText.tsx                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  }

}, 0);
let React, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  }

}, 1);
let MarkdownText;
module.link("../../../../../../../client/components/MarkdownText", {
  default(v) {
    MarkdownText = v;
  }

}, 2);

const PreviewText = _ref => {
  let {
    text
  } = _ref;
  const textM = text.split(/\n/).join('  \n');
  return /*#__PURE__*/React.createElement(Box, {
    style: {
      wordBreak: 'normal'
    },
    display: "flex",
    flexDirection: "column",
    pbs: "12px",
    pi: "16px",
    pbe: "16px",
    "rcx-box--animated": true,
    "rcx-input-box__wrapper": true
  }, /*#__PURE__*/React.createElement(MarkdownText, {
    w: "full",
    flexGrow: 1,
    content: textM,
    parseEmoji: true
  }));
};

module.exportDefault( /*#__PURE__*/memo(PreviewText));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/components/CannedResponse/modals/CreateCannedResponse/66ea1a7fa41c6d3fe98186f1498fb2ab487c1188.map
