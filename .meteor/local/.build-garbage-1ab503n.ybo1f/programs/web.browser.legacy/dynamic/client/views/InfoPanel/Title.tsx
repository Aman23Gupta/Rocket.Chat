function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/InfoPanel/Title.tsx                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, Icon;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
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

var Title = function (_ref) {
  var title = _ref.title,
      icon = _ref.icon;
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
//# sourceMappingURL=/dynamic/client/views/InfoPanel/f913b24d5786df48bd7d8d6446fa84905724a2ce.map
