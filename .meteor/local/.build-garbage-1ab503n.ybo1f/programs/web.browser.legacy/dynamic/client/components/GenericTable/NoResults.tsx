function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/GenericTable/NoResults.tsx                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, Tile, Button, Icon;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Tile: function (v) {
    Tile = v;
  },
  Button: function (v) {
    Button = v;
  },
  Icon: function (v) {
    Icon = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);

var NoResults = function (_ref) {
  var icon = _ref.icon,
      title = _ref.title,
      description = _ref.description,
      buttonTitle = _ref.buttonTitle,
      buttonAction = _ref.buttonAction;
  return /*#__PURE__*/React.createElement(Box, {
    textAlign: "center"
  }, /*#__PURE__*/React.createElement(Box, {
    mbs: "x60",
    mbe: "x20",
    style: {
      whiteSpace: 'nowrap',
      textTransform: 'uppercase',
      backgroundColor: 'var(--color-gray-lightest)',
      borderRadius: '9999px',
      display: 'inline-block',
      padding: '1rem'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: "x30"
  })), /*#__PURE__*/React.createElement(Box, {
    is: "h2",
    fontScale: "h2",
    flexGrow: 1
  }, title), /*#__PURE__*/React.createElement(Tile, {
    paddingBlockStart: "x5",
    fontScale: "p2",
    elevation: "0",
    color: "info",
    textAlign: "center"
  }, /*#__PURE__*/React.createElement(Box, {
    margin: "auto",
    maxWidth: "400px"
  }, description)), buttonTitle && buttonAction && /*#__PURE__*/React.createElement(Button, {
    marginBlockStart: "x20",
    primary: true,
    onClick: buttonAction
  }, buttonTitle));
};

module.exportDefault(NoResults);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/GenericTable/bcd35e0edc589ee2b016780ce6a763901e323fdc.map
