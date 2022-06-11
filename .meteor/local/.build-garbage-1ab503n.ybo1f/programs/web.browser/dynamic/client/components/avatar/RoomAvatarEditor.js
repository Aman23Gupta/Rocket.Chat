function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/avatar/RoomAvatarEditor.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _templateObject;

const _excluded = ["room", "roomAvatar", "onChangeAvatar"];

let _taggedTemplateLiteral;

module.link("@babel/runtime/helpers/taggedTemplateLiteral", {
  default(v) {
    _taggedTemplateLiteral = v;
  }

}, 0);

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 1);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 2);
let css;
module.link("@rocket.chat/css-in-js", {
  css(v) {
    css = v;
  }

}, 0);
let Box, Button, ButtonGroup, Icon;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Button(v) {
    Button = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Icon(v) {
    Icon = v;
  }

}, 1);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 2);
let React, useEffect;
module.link("react", {
  default(v) {
    React = v;
  },

  useEffect(v) {
    useEffect = v;
  }

}, 3);
let getAvatarURL;
module.link("../../../app/utils/lib/getAvatarURL", {
  getAvatarURL(v) {
    getAvatarURL = v;
  }

}, 4);
let useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 5);
let useFileInput;
module.link("../../hooks/useFileInput", {
  useFileInput(v) {
    useFileInput = v;
  }

}, 6);
let RoomAvatar;
module.link("./RoomAvatar", {
  default(v) {
    RoomAvatar = v;
  }

}, 7);

const RoomAvatarEditor = _ref => {
  let {
    room,
    roomAvatar,
    onChangeAvatar = () => {}
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const handleChangeAvatar = useMutableCallback(file => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      onChangeAvatar(reader.result);
    };
  });
  const [clickUpload, reset] = useFileInput(handleChangeAvatar);
  const clickReset = useMutableCallback(() => {
    reset();
    onChangeAvatar(null);
  });
  useEffect(() => {
    !roomAvatar && reset();
  }, [roomAvatar, reset]);
  const defaultUrl = room.prid ? getAvatarURL({
    roomId: room.prid
  }) : getAvatarURL({
    username: "@".concat(room.name)
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
    className: [css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t\t\t\t\t\tbottom: 0;\n\t\t\t\t\t\tright: 0;\n\t\t\t\t\t"])))],
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
//# sourceMappingURL=/dynamic/client/components/avatar/63323c448fca5b020069cd0b9a1177cc5ece88c3.map
