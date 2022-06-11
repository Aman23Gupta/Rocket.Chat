function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/components/CannedResponse/TextEditor/Textarea.tsx                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
let Box;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  }

}, 0);
let React, forwardRef;
module.link("react", {
  default(v) {
    React = v;
  },

  forwardRef(v) {
    forwardRef = v;
  }

}, 1);
const Textarea = /*#__PURE__*/forwardRef(function Textarea(props, ref) {
  return /*#__PURE__*/React.createElement(Box, _extends({
    is: "textarea",
    ref: ref,
    w: "full",
    style: {
      wordBreak: 'normal'
    },
    "rcx-box--animated": true,
    "rcx-input-box--type": 'textarea',
    "rcx-input-box--undecorated": true
  }, props));
});
module.exportDefault(Textarea);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/components/CannedResponse/TextEditor/23885c6cc17c13b105b533204efa8ce671030543.map
