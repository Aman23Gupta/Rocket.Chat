function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/components/CannedResponse/TextEditor/Textarea.tsx                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);
var Box;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  }
}, 0);
var React, forwardRef;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  forwardRef: function (v) {
    forwardRef = v;
  }
}, 1);
var Textarea = /*#__PURE__*/forwardRef(function () {
  function Textarea(props, ref) {
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
  }

  return Textarea;
}());
module.exportDefault(Textarea);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/components/CannedResponse/TextEditor/2b863452273d8b5c53fe8fdf95fb887eb0d29daf.map
