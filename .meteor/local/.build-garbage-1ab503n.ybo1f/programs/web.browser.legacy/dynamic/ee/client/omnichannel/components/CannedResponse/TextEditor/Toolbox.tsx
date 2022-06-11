function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/components/CannedResponse/TextEditor/Toolbox.tsx                                              //
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
var IconButton;
module.link("./IconButton", {
  "default": function (v) {
    IconButton = v;
  }
}, 2);
var TextButton;
module.link("./TextButton", {
  "default": function (v) {
    TextButton = v;
  }
}, 3);

var Toolbox = function (_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    w: "full",
    justifyContent: "space-between",
    alignItems: "center"
  }, children));
};

module.exportDefault(Object.assign(Toolbox, {
  IconButton: IconButton,
  TextButton: TextButton
}));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/components/CannedResponse/TextEditor/f4ce15328b00ea335367d9e9abdeff5764b750e5.map
