function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/components/RoomTemplate/RoomTemplate.tsx                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["children"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 1);
module.export({
  RoomTemplate: function () {
    return RoomTemplate;
  }
});
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
var flattenChildren;
module.link("react-keyed-flatten-children", {
  "default": function (v) {
    flattenChildren = v;
  }
}, 2);
var VerticalBar;
module.link("../../../../components/VerticalBar/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 3);
var Aside;
module.link("./slots/Aside", {
  Aside: function (v) {
    Aside = v;
  }
}, 4);
var Body;
module.link("./slots/Body", {
  Body: function (v) {
    Body = v;
  }
}, 5);
var Footer;
module.link("./slots/Footer", {
  Footer: function (v) {
    Footer = v;
  }
}, 6);
var Header;
module.link("./slots/Header", {
  Header: function (v) {
    Header = v;
  }
}, 7);

var RoomTemplate = function (_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  var c = flattenChildren(children);
  var header = c.filter(function (child) {
    return child.type === RoomTemplate.Header;
  });
  var body = c.filter(function (child) {
    return child.type === RoomTemplate.Body;
  });
  var footer = c.filter(function (child) {
    return child.type === RoomTemplate.Footer;
  });
  var aside = c.filter(function (child) {
    return child.type === RoomTemplate.Aside;
  });
  return /*#__PURE__*/React.createElement(Box, _extends({
    is: "main",
    h: "full",
    display: "flex",
    flexDirection: "column"
  }, props), header.length > 0 && header, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexGrow: 1,
    overflow: "hidden",
    height: "full",
    position: "relative"
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1
  }, /*#__PURE__*/React.createElement(Box, {
    is: "div",
    display: "flex",
    flexDirection: "column",
    flexGrow: 1
  }, body), footer.length > 0 && /*#__PURE__*/React.createElement(Box, {
    is: "footer"
  }, footer)), aside.length > 0 && /*#__PURE__*/React.createElement(VerticalBar, {
    is: "aside"
  }, aside)));
};

RoomTemplate.Header = Header;
RoomTemplate.Body = Body;
RoomTemplate.Footer = Footer;
RoomTemplate.Aside = Aside;
module.exportDefault(RoomTemplate);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/components/RoomTemplate/19297aa5294ef4c7de52626d62f38d2a081f6b0e.map
