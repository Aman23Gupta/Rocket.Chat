function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/UserCard/index.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["label"];

var _toConsumableArray;

module.link("@babel/runtime/helpers/toConsumableArray", {
  default: function (v) {
    _toConsumableArray = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 2);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 3);
var PositionAnimated, AnimatedVisibility, Menu, Option;
module.link("@rocket.chat/fuselage", {
  PositionAnimated: function (v) {
    PositionAnimated = v;
  },
  AnimatedVisibility: function (v) {
    AnimatedVisibility = v;
  },
  Menu: function (v) {
    Menu = v;
  },
  Option: function (v) {
    Option = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React, useMemo, useRef;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useRef: function (v) {
    useRef = v;
  }
}, 2);
var Backdrop;
module.link("../../../components/Backdrop", {
  Backdrop: function (v) {
    Backdrop = v;
  }
}, 3);
var LocalTime;
module.link("../../../components/LocalTime", {
  "default": function (v) {
    LocalTime = v;
  }
}, 4);
var UserCard;
module.link("../../../components/UserCard", {
  "default": function (v) {
    UserCard = v;
  }
}, 5);
var ReactiveUserStatus;
module.link("../../../components/UserStatus", {
  ReactiveUserStatus: function (v) {
    ReactiveUserStatus = v;
  }
}, 6);
var useRolesDescription;
module.link("../../../contexts/AuthorizationContext", {
  useRolesDescription: function (v) {
    useRolesDescription = v;
  }
}, 7);
var useSetting;
module.link("../../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 8);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 9);
var AsyncStatePhase;
module.link("../../../hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 10);
var useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 11);
var useActionSpread;
module.link("../../hooks/useActionSpread", {
  useActionSpread: function (v) {
    useActionSpread = v;
  }
}, 12);
var useUserInfoActions;
module.link("../hooks/useUserInfoActions", {
  useUserInfoActions: function (v) {
    useUserInfoActions = v;
  }
}, 13);

var UserCardWithData = function (_ref) {
  var username = _ref.username,
      onClose = _ref.onClose,
      target = _ref.target,
      open = _ref.open,
      rid = _ref.rid;
  var ref = useRef(target);
  var getRoles = useRolesDescription();
  var t = useTranslation();
  var showRealNames = useSetting('UI_Use_Real_Name');
  var query = useMemo(function () {
    return {
      username: username
    };
  }, [username]);

  var _useEndpointData = useEndpointData('users.info', query),
      data = _useEndpointData.value,
      state = _useEndpointData.phase;

  ref.current = target;
  var user = useMemo(function () {
    var loading = state === AsyncStatePhase.LOADING;
    var defaultValue = loading ? undefined : null;

    var _ref2 = data || {
      user: {}
    },
        user = _ref2.user;

    var _id = user._id,
        _user$name = user.name,
        name = _user$name === void 0 ? username : _user$name,
        _user$roles = user.roles,
        roles = _user$roles === void 0 ? defaultValue : _user$roles,
        _user$status = user.status,
        status = _user$status === void 0 ? null : _user$status,
        _user$statusText = user.statusText,
        statusText = _user$statusText === void 0 ? status : _user$statusText,
        _user$bio = user.bio,
        bio = _user$bio === void 0 ? defaultValue : _user$bio,
        _user$utcOffset = user.utcOffset,
        utcOffset = _user$utcOffset === void 0 ? defaultValue : _user$utcOffset,
        nickname = user.nickname,
        avatarETag = user.avatarETag;
    return {
      _id: _id,
      name: showRealNames ? name : username,
      username: username,
      roles: roles && getRoles(roles).map(function (role, index) {
        return /*#__PURE__*/React.createElement(UserCard.Role, {
          key: index
        }, role);
      }),
      bio: bio,
      etag: avatarETag,
      localTime: Number.isInteger(utcOffset) && /*#__PURE__*/React.createElement(LocalTime, {
        utcOffset: utcOffset
      }),
      status: /*#__PURE__*/React.createElement(ReactiveUserStatus, {
        uid: _id
      }),
      customStatus: statusText,
      nickname: nickname
    };
  }, [data, username, showRealNames, state, getRoles]);
  var handleOpen = useMutableCallback(function (e) {
    open && open(e);
    onClose && onClose();
  });

  var _useActionSpread = useActionSpread(useUserInfoActions(user, rid)),
      actionsDefinition = _useActionSpread.actions,
      menuOptions = _useActionSpread.menu;

  var menu = useMemo(function () {
    if (!menuOptions) {
      return null;
    }

    return /*#__PURE__*/React.createElement(Menu, {
      flexShrink: 0,
      mi: "x2",
      key: "menu",
      ghost: false,
      renderItem: function (_ref3) {
        var _ref3$label = _ref3.label,
            label = _ref3$label.label,
            icon = _ref3$label.icon,
            props = _objectWithoutProperties(_ref3, _excluded);

        return /*#__PURE__*/React.createElement(Option, _extends({}, props, {
          label: label,
          icon: icon
        }));
      },
      options: menuOptions
    });
  }, [menuOptions]);
  var actions = useMemo(function () {
    var mapAction = function (_ref4) {
      var _ref5 = _slicedToArray(_ref4, 2),
          key = _ref5[0],
          _ref5$ = _ref5[1],
          label = _ref5$.label,
          icon = _ref5$.icon,
          action = _ref5$.action;

      return /*#__PURE__*/React.createElement(UserCard.Action, {
        key: key,
        title: label,
        "aria-label": label,
        onClick: action,
        icon: icon
      });
    };

    return [].concat(_toConsumableArray(actionsDefinition.map(mapAction)), [menu]).filter(Boolean);
  }, [actionsDefinition, menu]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Backdrop, {
    bg: "transparent",
    onClick: onClose
  }), /*#__PURE__*/React.createElement(PositionAnimated, {
    anchor: ref,
    placement: "top-start",
    margin: 8,
    visible: AnimatedVisibility.UNHIDING
  }, /*#__PURE__*/React.createElement(UserCard, _extends({}, user, {
    onClose: onClose,
    open: handleOpen,
    actions: actions,
    t: t
  }))));
};

module.exportDefault(UserCardWithData);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/UserCard/d824a6d8535e970541f48f19fea8ae52a880fbc5.map
