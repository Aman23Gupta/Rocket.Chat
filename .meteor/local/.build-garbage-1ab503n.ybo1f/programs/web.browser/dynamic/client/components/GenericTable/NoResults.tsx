function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/GenericTable/NoResults.tsx                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Tile, Button, Icon;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Tile(v) {
    Tile = v;
  },

  Button(v) {
    Button = v;
  },

  Icon(v) {
    Icon = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);

const NoResults = _ref => {
  let {
    icon,
    title,
    description,
    buttonTitle,
    buttonAction
  } = _ref;
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
//# sourceMappingURL=/dynamic/client/components/GenericTable/156a0d922f58de2d9ab923034b1f78fc03016ce2.map
