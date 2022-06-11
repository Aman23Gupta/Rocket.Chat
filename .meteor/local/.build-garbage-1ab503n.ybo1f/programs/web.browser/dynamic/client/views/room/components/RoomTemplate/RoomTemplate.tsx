function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/components/RoomTemplate/RoomTemplate.tsx                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["children"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
module.export({
  RoomTemplate: () => RoomTemplate
});
let Box;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let flattenChildren;
module.link("react-keyed-flatten-children", {
  default(v) {
    flattenChildren = v;
  }

}, 2);
let VerticalBar;
module.link("../../../../components/VerticalBar/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 3);
let Aside;
module.link("./slots/Aside", {
  Aside(v) {
    Aside = v;
  }

}, 4);
let Body;
module.link("./slots/Body", {
  Body(v) {
    Body = v;
  }

}, 5);
let Footer;
module.link("./slots/Footer", {
  Footer(v) {
    Footer = v;
  }

}, 6);
let Header;
module.link("./slots/Header", {
  Header(v) {
    Header = v;
  }

}, 7);

const RoomTemplate = _ref => {
  let {
    children
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const c = flattenChildren(children);
  const header = c.filter(child => child.type === RoomTemplate.Header);
  const body = c.filter(child => child.type === RoomTemplate.Body);
  const footer = c.filter(child => child.type === RoomTemplate.Footer);
  const aside = c.filter(child => child.type === RoomTemplate.Aside);
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
//# sourceMappingURL=/dynamic/client/views/room/components/RoomTemplate/440225688fc4966c39d75335f6a62a642a1fedd6.map
