function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/components/CannedResponse/TextEditor/IconButton.tsx                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Button, Icon;
module.link("@rocket.chat/fuselage", {
  Button(v) {
    Button = v;
  },

  Icon(v) {
    Icon = v;
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

const IconButton = _ref => {
  let {
    name,
    action
  } = _ref;
  return /*#__PURE__*/React.createElement(Button, {
    nude: true,
    small: true,
    square: true,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    mie: "12px",
    onClick: e => {
      e.stopPropagation();
      e.preventDefault();
      action();
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: name,
    size: "24px",
    color: "neutral-700"
  }));
};

module.exportDefault( /*#__PURE__*/memo(IconButton));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/components/CannedResponse/TextEditor/8e98b1f669440bdbd0e7c1549145cef68464ed98.map
