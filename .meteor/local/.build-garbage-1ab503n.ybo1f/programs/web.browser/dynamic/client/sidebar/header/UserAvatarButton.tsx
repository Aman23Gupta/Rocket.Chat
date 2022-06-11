function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/header/UserAvatarButton.tsx                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _templateObject, _templateObject2;

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
let Box, Dropdown;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Dropdown(v) {
    Dropdown = v;
  }

}, 1);
let React, memo, useRef;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  },

  useRef(v) {
    useRef = v;
  }

}, 2);
let createPortal;
module.link("react-dom", {
  createPortal(v) {
    createPortal = v;
  }

}, 3);
let UserStatus;
module.link("../../components/UserStatus", {
  UserStatus(v) {
    UserStatus = v;
  }

}, 4);
let UserAvatar;
module.link("../../components/avatar/UserAvatar", {
  default(v) {
    UserAvatar = v;
  }

}, 5);
let useUser;
module.link("../../contexts/UserContext", {
  useUser(v) {
    useUser = v;
  }

}, 6);
let UserDropdown;
module.link("./UserDropdown", {
  default(v) {
    UserDropdown = v;
  }

}, 7);
let useDropdownVisibility;
module.link("./hooks/useDropdownVisibility", {
  useDropdownVisibility(v) {
    useDropdownVisibility = v;
  }

}, 8);

const UserAvatarButton = function UserAvatarButton() {
  const user = useUser();
  const {
    status = !user ? 'online' : 'offline',
    username,
    avatarETag,
    statusText
  } = user || {
    _id: '',
    username: 'Anonymous',
    status: 'online',
    statusText: ''
  }; // const allowAnonymousRead = useSetting('Accounts_AllowAnonymousRead');

  const reference = useRef(null);
  const target = useRef(null);
  const {
    isVisible,
    toggle
  } = useDropdownVisibility({
    reference,
    target
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
    position: "relative",
    ref: reference,
    onClick: () => toggle(),
    className: css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t"]))),
    "data-qa": "sidebar-avatar-button"
  }, /*#__PURE__*/React.createElement(UserAvatar, {
    size: "x24",
    username: username,
    etag: avatarETag
  }), /*#__PURE__*/React.createElement(Box, {
    className: css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n\t\t\t\t\t\tbottom: 0;\n\t\t\t\t\t\tright: 0;\n\t\t\t\t\t"]))),
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    overflow: "hidden",
    size: 12,
    borderWidth: "x2",
    position: "absolute",
    bg: "neutral-200",
    borderColor: "neutral-200",
    borderRadius: "full",
    mie: "neg-x2",
    mbe: "neg-x2"
  }, /*#__PURE__*/React.createElement(UserStatus, {
    small: true,
    status: status,
    statusText: statusText
  }))), user && isVisible && /*#__PURE__*/createPortal( /*#__PURE__*/React.createElement(Dropdown, {
    reference: reference,
    ref: target
  }, /*#__PURE__*/React.createElement(UserDropdown, {
    user: user,
    onClose: () => toggle(false)
  })), document.body));
};

module.exportDefault( /*#__PURE__*/memo(UserAvatarButton));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/header/0cca3d0933f2ed0f7def27d220c5f8f3752413ec.map
