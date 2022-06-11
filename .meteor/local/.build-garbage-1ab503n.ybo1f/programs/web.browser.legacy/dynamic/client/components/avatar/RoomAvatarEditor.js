function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/avatar/RoomAvatarEditor.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _templateObject;

var _excluded = ["room", "roomAvatar", "onChangeAvatar"];

var _taggedTemplateLiteralLoose;

module.link("@babel/runtime/helpers/taggedTemplateLiteralLoose", {
  default: function (v) {
    _taggedTemplateLiteralLoose = v;
  }
}, 0);

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 1);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 2);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 3);
var css;
module.link("@rocket.chat/css-in-js", {
  css: function (v) {
    css = v;
  }
}, 0);
var Box, Button, ButtonGroup, Icon;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Button: function (v) {
    Button = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Icon: function (v) {
    Icon = v;
  }
}, 1);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 2);
var React, useEffect;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useEffect: function (v) {
    useEffect = v;
  }
}, 3);
var getAvatarURL;
module.link("../../../app/utils/lib/getAvatarURL", {
  getAvatarURL: function (v) {
    getAvatarURL = v;
  }
}, 4);
var useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 5);
var useFileInput;
module.link("../../hooks/useFileInput", {
  useFileInput: function (v) {
    useFileInput = v;
  }
}, 6);
var RoomAvatar;
module.link("./RoomAvatar", {
  "default": function (v) {
    RoomAvatar = v;
  }
}, 7);

var RoomAvatarEditor = function (_ref) {
  var room = _ref.room,
      roomAvatar = _ref.roomAvatar,
      _ref$onChangeAvatar = _ref.onChangeAvatar,
      onChangeAvatar = _ref$onChangeAvatar === void 0 ? function () {} : _ref$onChangeAvatar,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var handleChangeAvatar = useMutableCallback(function (file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = function () {
      onChangeAvatar(reader.result);
    };
  });

  var _useFileInput = useFileInput(handleChangeAvatar),
      _useFileInput2 = _slicedToArray(_useFileInput, 2),
      clickUpload = _useFileInput2[0],
      reset = _useFileInput2[1];

  var clickReset = useMutableCallback(function () {
    reset();
    onChangeAvatar(null);
  });
  useEffect(function () {
    !roomAvatar && reset();
  }, [roomAvatar, reset]);
  var defaultUrl = room.prid ? getAvatarURL({
    roomId: room.prid
  }) : getAvatarURL({
    username: "@" + room.name
  }); // Discussions inherit avatars from the parent room

  return /*#__PURE__*/React.createElement(Box, _extends({
    borderRadius: "x2",
    maxWidth: "x332",
    w: "full",
    position: "relative"
  }, props), /*#__PURE__*/React.createElement(RoomAvatar, _extends({}, roomAvatar !== undefined && {
    url: roomAvatar === null ? defaultUrl : roomAvatar
  }, {
    room: room,
    size: "x332"
  })), /*#__PURE__*/React.createElement(Box, {
    className: [css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n\t\t\t\t\t\tbottom: 0;\n\t\t\t\t\t\tright: 0;\n\t\t\t\t\t"])))],
    position: "absolute",
    m: "x12"
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
    small: true,
    title: t('Upload_user_avatar'),
    onClick: clickUpload
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "upload",
    size: "x16"
  }), t('Upload')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    small: true,
    danger: true,
    title: t('Accounts_SetDefaultAvatar'),
    disabled: roomAvatar === null,
    onClick: clickReset
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash",
    size: "x16"
  })))));
};

module.exportDefault(RoomAvatarEditor);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/avatar/0b2c86e94821ab6ed2888b5066add906aec3789d.map
