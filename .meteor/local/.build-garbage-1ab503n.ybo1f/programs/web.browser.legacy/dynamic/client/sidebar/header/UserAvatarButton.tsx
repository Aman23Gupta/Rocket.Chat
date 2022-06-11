function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/header/UserAvatarButton.tsx                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _templateObject, _templateObject2;

var _taggedTemplateLiteralLoose;

module.link("@babel/runtime/helpers/taggedTemplateLiteralLoose", {
  default: function (v) {
    _taggedTemplateLiteralLoose = v;
  }
}, 0);
var css;
module.link("@rocket.chat/css-in-js", {
  css: function (v) {
    css = v;
  }
}, 0);
var Box, Dropdown;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Dropdown: function (v) {
    Dropdown = v;
  }
}, 1);
var React, memo, useRef;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  },
  useRef: function (v) {
    useRef = v;
  }
}, 2);
var createPortal;
module.link("react-dom", {
  createPortal: function (v) {
    createPortal = v;
  }
}, 3);
var UserStatus;
module.link("../../components/UserStatus", {
  UserStatus: function (v) {
    UserStatus = v;
  }
}, 4);
var UserAvatar;
module.link("../../components/avatar/UserAvatar", {
  "default": function (v) {
    UserAvatar = v;
  }
}, 5);
var useUser;
module.link("../../contexts/UserContext", {
  useUser: function (v) {
    useUser = v;
  }
}, 6);
var UserDropdown;
module.link("./UserDropdown", {
  "default": function (v) {
    UserDropdown = v;
  }
}, 7);
var useDropdownVisibility;
module.link("./hooks/useDropdownVisibility", {
  useDropdownVisibility: function (v) {
    useDropdownVisibility = v;
  }
}, 8);

var UserAvatarButton = function () {
  function UserAvatarButton() {
    var user = useUser();

    var _ref = user || {
      _id: '',
      username: 'Anonymous',
      status: 'online',
      statusText: ''
    },
        _ref$status = _ref.status,
        status = _ref$status === void 0 ? !user ? 'online' : 'offline' : _ref$status,
        username = _ref.username,
        avatarETag = _ref.avatarETag,
        statusText = _ref.statusText; // const allowAnonymousRead = useSetting('Accounts_AllowAnonymousRead');


    var reference = useRef(null);
    var target = useRef(null);

    var _useDropdownVisibilit = useDropdownVisibility({
      reference: reference,
      target: target
    }),
        isVisible = _useDropdownVisibilit.isVisible,
        toggle = _useDropdownVisibilit.toggle;

    return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Box, {
      position: "relative",
      ref: reference,
      onClick: function () {
        return toggle();
      },
      className: css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n\t\t\t\t\tcursor: pointer;\n\t\t\t\t"]))),
      "data-qa": "sidebar-avatar-button"
    }, /*#__PURE__*/React.createElement(UserAvatar, {
      size: "x24",
      username: username,
      etag: avatarETag
    }), /*#__PURE__*/React.createElement(Box, {
      className: css(_templateObject2 || (_templateObject2 = _taggedTemplateLiteralLoose(["\n\t\t\t\t\t\tbottom: 0;\n\t\t\t\t\t\tright: 0;\n\t\t\t\t\t"]))),
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
      onClose: function () {
        return toggle(false);
      }
    })), document.body));
  }

  return UserAvatarButton;
}();

module.exportDefault( /*#__PURE__*/memo(UserAvatarButton));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/header/899ec5b47ed15cf7b85d6d0bc049f8f67cb59b06.map
