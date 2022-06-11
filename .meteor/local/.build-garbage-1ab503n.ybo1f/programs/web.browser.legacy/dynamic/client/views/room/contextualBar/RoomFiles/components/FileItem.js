function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/RoomFiles/components/FileItem.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _templateObject;

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _taggedTemplateLiteralLoose;

module.link("@babel/runtime/helpers/taggedTemplateLiteralLoose", {
  default: function (v) {
    _taggedTemplateLiteralLoose = v;
  }
}, 1);
var css;
module.link("@rocket.chat/css-in-js", {
  css: function (v) {
    css = v;
  }
}, 0);
var Box, Avatar;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Avatar: function (v) {
    Avatar = v;
  }
}, 1);
var colors;
module.link("@rocket.chat/fuselage-tokens/colors", {
  "default": function (v) {
    colors = v;
  }
}, 2);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 3);
var useFormatDateAndTime;
module.link("../../../../../hooks/useFormatDateAndTime", {
  useFormatDateAndTime: function (v) {
    useFormatDateAndTime = v;
  }
}, 4);
var FileItemIcon;
module.link("./FileItemIcon", {
  "default": function (v) {
    FileItemIcon = v;
  }
}, 5);
var MenuItem;
module.link("./MenuItem", {
  "default": function (v) {
    MenuItem = v;
  }
}, 6);
var hoverClass = css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n\t&:hover {\n\t\tcursor: pointer;\n\t\tbackground-color: ", ";\n\t}\n"])), colors.n100);

var FileItem = function (_ref) {
  var fileData = _ref.fileData,
      isDeletionAllowed = _ref.isDeletionAllowed,
      onClickDelete = _ref.onClickDelete,
      index = _ref.index;
  var format = useFormatDateAndTime();
  var _id = fileData._id,
      name = fileData.name,
      url = fileData.url,
      uploadedAt = fileData.uploadedAt,
      ts = fileData.ts,
      type = fileData.type,
      typeGroup = fileData.typeGroup,
      style = fileData.style,
      className = fileData.className,
      user = fileData.user;
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
      ts: ts
    }) && onClickDelete
  }));
};

module.exportDefault(FileItem);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/RoomFiles/components/3d2f1cdb6848695d46812e0c5c158216337ef1dc.map
