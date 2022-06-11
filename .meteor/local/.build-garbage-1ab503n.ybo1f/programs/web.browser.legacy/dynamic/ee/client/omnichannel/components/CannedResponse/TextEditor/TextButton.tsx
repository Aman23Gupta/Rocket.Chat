function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/components/CannedResponse/TextEditor/TextButton.tsx                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Button;
module.link("@rocket.chat/fuselage", {
  Button: function (v) {
    Button = v;
  }
}, 0);
var React, forwardRef, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  forwardRef: function (v) {
    forwardRef = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 1);
var useTranslation;
module.link("../../../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);
var TextButton = /*#__PURE__*/forwardRef(function () {
  function TextButton(_ref, ref) {
    var text = _ref.text,
        action = _ref.action;
    var t = useTranslation();
    return /*#__PURE__*/React.createElement(Button, {
      nude: true,
      small: true,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      onClick: function (e) {
        e.stopPropagation();
        e.preventDefault();
        action();
      },
      ref: ref
    }, t(text));
  }

  return TextButton;
}());
module.exportDefault( /*#__PURE__*/memo(TextButton));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/components/CannedResponse/TextEditor/ea553e583ae372965740d999cced1312bc38de99.map
