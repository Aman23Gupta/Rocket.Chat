function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/components/CannedResponse/modals/CreateCannedResponse/PreviewText.tsx                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  }
}, 0);
var React, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 1);
var MarkdownText;
module.link("../../../../../../../client/components/MarkdownText", {
  "default": function (v) {
    MarkdownText = v;
  }
}, 2);

var PreviewText = function (_ref) {
  var text = _ref.text;
  var textM = text.split(/\n/).join('  \n');
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
//# sourceMappingURL=/dynamic/ee/client/omnichannel/components/CannedResponse/modals/CreateCannedResponse/6ec18f933e6b1294cac43fcf99d7926e345c818e.map
