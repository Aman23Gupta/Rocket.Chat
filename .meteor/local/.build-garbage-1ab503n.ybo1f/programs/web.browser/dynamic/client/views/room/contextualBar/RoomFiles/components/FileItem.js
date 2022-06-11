function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/RoomFiles/components/FileItem.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _templateObject;

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _taggedTemplateLiteral;

module.link("@babel/runtime/helpers/taggedTemplateLiteral", {
  default(v) {
    _taggedTemplateLiteral = v;
  }

}, 1);
let css;
module.link("@rocket.chat/css-in-js", {
  css(v) {
    css = v;
  }

}, 0);
let Box, Avatar;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Avatar(v) {
    Avatar = v;
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
let useFormatDateAndTime;
module.link("../../../../../hooks/useFormatDateAndTime", {
  useFormatDateAndTime(v) {
    useFormatDateAndTime = v;
  }

}, 4);
let FileItemIcon;
module.link("./FileItemIcon", {
  default(v) {
    FileItemIcon = v;
  }

}, 5);
let MenuItem;
module.link("./MenuItem", {
  default(v) {
    MenuItem = v;
  }

}, 6);
const hoverClass = css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t&:hover {\n\t\tcursor: pointer;\n\t\tbackground-color: ", ";\n\t}\n"])), colors.n100);

const FileItem = _ref => {
  let {
    fileData,
    isDeletionAllowed,
    onClickDelete,
    index
  } = _ref;
  const format = useFormatDateAndTime();
  const {
    _id,
    name,
    url,
    uploadedAt,
    ts,
    type,
    typeGroup,
    style,
    className,
    user
  } = fileData;
  return /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    p: "x12",
    style: style,
    className: [className, hoverClass]
  }, /*#__PURE__*/React.createElement(Box, _extends({
    is: "a",
    minWidth: 0
  }, typeGroup === 'image' && {
    className: 'gallery-item'
  }, {
    download: true,
    rel: "noopener noreferrer",
    target: "_blank",
    title: name,
    display: "flex",
    flexGrow: 1,
    flexShrink: 1,
    href: url,
    key: index
  }), typeGroup === 'image' ? /*#__PURE__*/React.createElement(Avatar, {
    size: "x48",
    url: url
  }) : /*#__PURE__*/React.createElement(FileItemIcon, {
    type: type
  }), /*#__PURE__*/React.createElement(Box, {
    mis: "x8",
    flexShrink: 1,
    overflow: "hidden"
  }, /*#__PURE__*/React.createElement(Box, {
    withTruncatedText: true,
    color: "default",
    fontScale: "p2m"
  }, name), /*#__PURE__*/React.createElement(Box, {
    withTruncatedText: true,
    color: "hint",
    fontScale: "p2"
  }, "@", user === null || user === void 0 ? void 0 : user.username), /*#__PURE__*/React.createElement(Box, {
    color: "hint",
    fontScale: "micro"
  }, format(uploadedAt)))), /*#__PURE__*/React.createElement(MenuItem, {
    _id: _id,
    name: name,
    url: url,
    onClickDelete: isDeletionAllowed && isDeletionAllowed({
      uid: user === null || user === void 0 ? void 0 : user._id,
      ts
    }) && onClickDelete
  }));
};

module.exportDefault(FileItem);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/RoomFiles/components/132bfd5c06a463eb339b1735c708d590d390f8b8.map
