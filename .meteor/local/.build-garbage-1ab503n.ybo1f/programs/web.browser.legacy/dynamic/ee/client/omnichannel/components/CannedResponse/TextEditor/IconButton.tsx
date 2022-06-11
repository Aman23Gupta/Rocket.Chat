function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/components/CannedResponse/TextEditor/IconButton.tsx                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Button, Icon;
module.link("@rocket.chat/fuselage", {
  Button: function (v) {
    Button = v;
  },
  Icon: function (v) {
    Icon = v;
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

var IconButton = function (_ref) {
  var name = _ref.name,
      action = _ref.action;
  return /*#__PURE__*/React.createElement(Button, {
    nude: true,
    small: true,
    square: true,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    mie: "12px",
    onClick: function (e) {
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
//# sourceMappingURL=/dynamic/ee/client/omnichannel/components/CannedResponse/TextEditor/c13676cb9dbfd2c25474b800c23924f79416519b.map
