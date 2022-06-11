function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/InfoPanel/Title.tsx                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Icon;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
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

const Title = _ref => {
  let {
    title,
    icon
  } = _ref;
  return /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    title: title,
    flexShrink: 0,
    alignItems: "center",
    fontScale: "h4",
    color: "default",
    withTruncatedText: true
  }, typeof icon === 'string' ? icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: "x22"
  }) : icon, /*#__PURE__*/React.createElement(Box, {
    mis: "x8",
    flexGrow: 1,
    withTruncatedText: true
  }, title));
};

module.exportDefault(Title);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/InfoPanel/a5def74966b2da82b0427207aff7fb75d1b41a60.map
