function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/Announcement/AnnouncementComponent.tsx                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _templateObject;

let _taggedTemplateLiteral;

module.link("@babel/runtime/helpers/taggedTemplateLiteral", {
  default(v) {
    _taggedTemplateLiteral = v;
  }

}, 0);
let css;
module.link("@rocket.chat/css-in-js", {
  css(v) {
    css = v;
  }

}, 0);
let Box;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  }

}, 1);
let colors;
module.link("@rocket.chat/fuselage-tokens/colors", {
  default(v) {
    colors = v;
  }

}, 2);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 3);

const AnnouncementComponent = _ref => {
  let {
    children,
    onClickOpen
  } = _ref;
  const announcementBar = css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t\tbackground-color: ", ";\n\t\tbackground-color: var(--rc-color-announcement-background, ", ");\n\t\tcolor: ", ";\n\t\tcolor: var(--rc-color-announcement-text, ", ");\n\t\tcursor: pointer;\n\t\ttransition: transform 0.2s ease-out;\n\t\ta {\n\t\t\tcolor: ", " !important;\n\t\t\tcolor: var(--rc-color-announcement-text, ", ") !important;\n\t\t\ttext-decoration: underline !important;\n\t\t}\n\t\t> * {\n\t\t\tflex: auto;\n\t\t}\n\t\t&:hover,\n\t\t&:focus {\n\t\t\tbackground-color: ", ";\n\t\t\tbackground-color: var(--rc-color-announcement-background-hover, ", ");\n\t\t\tcolor: ", ";\n\t\t\tcolor: var(--rc-color-announcement-text-hover, ", ");\n\t\t}\n\t"])), colors.b200, colors.b200, colors.b600, colors.b600, colors.b600, colors.b600, colors.b300, colors.b300, colors.b800, colors.b800);
  return /*#__PURE__*/React.createElement(Box, {
    onClick: onClickOpen,
    height: "x40",
    pi: "x24",
    alignItems: "center",
    display: "flex",
    fontScale: "p2m",
    textAlign: "center",
    className: announcementBar
  }, /*#__PURE__*/React.createElement(Box, {
    withTruncatedText: true,
    w: "none"
  }, children));
};

module.exportDefault(AnnouncementComponent);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/Announcement/e64acbc7f22b01a58b519ff10bfdb68f97584f2d.map
