function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/components/CannedResponse/TextEditor/index.tsx                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var Textarea;
module.link("./Textarea", {
  "default": function (v) {
    Textarea = v;
  }
}, 2);
var Toolbox;
module.link("./Toolbox", {
  "default": function (v) {
    Toolbox = v;
  }
}, 3);

var TextEditor = function (_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    pbs: "12px",
    pi: "16px",
    pbe: "16px",
    "rcx-box--animated": true,
    "rcx-input-box__wrapper": true
  }, children);
};

module.exportDefault(Object.assign(TextEditor, {
  Toolbox: Toolbox,
  Textarea: Textarea
}));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/components/CannedResponse/TextEditor/0b8a49762e2e13df42658c8d94ca5304427451ad.map
