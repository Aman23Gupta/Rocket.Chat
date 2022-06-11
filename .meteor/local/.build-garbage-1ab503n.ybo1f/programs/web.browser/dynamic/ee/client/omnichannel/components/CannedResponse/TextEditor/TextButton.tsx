function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/components/CannedResponse/TextEditor/TextButton.tsx                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Button;
module.link("@rocket.chat/fuselage", {
  Button(v) {
    Button = v;
  }

}, 0);
let React, forwardRef, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  forwardRef(v) {
    forwardRef = v;
  },

  memo(v) {
    memo = v;
  }

}, 1);
let useTranslation;
module.link("../../../../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);
const TextButton = /*#__PURE__*/forwardRef(function TextButton(_ref, ref) {
  let {
    text,
    action
  } = _ref;
  const t = useTranslation();
  return /*#__PURE__*/React.createElement(Button, {
    nude: true,
    small: true,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    onClick: e => {
      e.stopPropagation();
      e.preventDefault();
      action();
    },
    ref: ref
  }, t(text));
});
module.exportDefault( /*#__PURE__*/memo(TextButton));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/components/CannedResponse/TextEditor/b7b3ba95792481a375c99580c9f9929350e13b25.map
