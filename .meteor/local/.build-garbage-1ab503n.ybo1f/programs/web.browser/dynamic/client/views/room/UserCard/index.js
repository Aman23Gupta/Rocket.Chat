function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/UserCard/index.js                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["label"];

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
let PositionAnimated, AnimatedVisibility, Menu, Option;
module.link("@rocket.chat/fuselage", {
  PositionAnimated(v) {
    PositionAnimated = v;
  },

  AnimatedVisibility(v) {
    AnimatedVisibility = v;
  },

  Menu(v) {
    Menu = v;
  },

  Option(v) {
    Option = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React, useMemo, useRef;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useRef(v) {
    useRef = v;
  }

}, 2);
let Backdrop;
module.link("../../../components/Backdrop", {
  Backdrop(v) {
    Backdrop = v;
  }

}, 3);
let LocalTime;
module.link("../../../components/LocalTime", {
  default(v) {
    LocalTime = v;
  }

}, 4);
let UserCard;
module.link("../../../components/UserCard", {
  default(v) {
    UserCard = v;
  }

}, 5);
let ReactiveUserStatus;
module.link("../../../components/UserStatus", {
  ReactiveUserStatus(v) {
    ReactiveUserStatus = v;
  }

}, 6);
let useRolesDescription;
module.link("../../../contexts/AuthorizationContext", {
  useRolesDescription(v) {
    useRolesDescription = v;
  }

}, 7);
let useSetting;
module.link("../../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 8);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 9);
let AsyncStatePhase;
module.link("../../../hooks/useAsyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 10);
let useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 11);
let useActionSpread;
module.link("../../hooks/useActionSpread", {
  useActionSpread(v) {
    useActionSpread = v;
  }

}, 12);
let useUserInfoActions;
module.link("../hooks/useUserInfoActions", {
  useUserInfoActions(v) {
    useUserInfoActions = v;
  }

}, 13);

const UserCardWithData = _ref => {
  let {
    username,
    onClose,
    target,
    open,
    rid
  } = _ref;
  const ref = useRef(target);
  const getRoles = useRolesDescription();
  const t = useTranslation();
  const showRealNames = useSetting('UI_Use_Real_Name');
  const query = useMemo(() => ({
    username
  }), [username]);
  const {
    value: data,
    phase: state
  } = useEndpointData('users.info', query);
  ref.current = target;
  const user = useMemo(() => {
    const loading = state === AsyncStatePhase.LOADING;
    const defaultValue = loading ? undefined : null;
    const {
      user
    } = data || {
      user: {}
    };
    const {
      _id,
      name = username,
      roles = defaultValue,
      status = null,
      statusText = status,
      bio = defaultValue,
      utcOffset = defaultValue,
      nickname,
      avatarETag
    } = user;
    return {
      _id,
      name: showRealNames ? name : username,
      username,
      roles: roles && getRoles(roles).map((role, index) => /*#__PURE__*/React.createElement(UserCard.Role, {
        key: index
      }, role)),
      bio,
      etag: avatarETag,
      localTime: Number.isInteger(utcOffset) && /*#__PURE__*/React.createElement(LocalTime, {
        utcOffset: utcOffset
      }),
      status: /*#__PURE__*/React.createElement(ReactiveUserStatus, {
        uid: _id
      }),
      customStatus: statusText,
      nickname
    };
  }, [data, username, showRealNames, state, getRoles]);
  const handleOpen = useMutableCallback(e => {
    open && open(e);
    onClose && onClose();
  });
  const {
    actions: actionsDefinition,
    menu: menuOptions
  } = useActionSpread(useUserInfoActions(user, rid));
  const menu = useMemo(() => {
    if (!menuOptions) {
      return null;
    }

    return /*#__PURE__*/React.createElement(Menu, {
      flexShrink: 0,
      mi: "x2",
      key: "menu",
      ghost: false,
      renderItem: _ref2 => {
        let {
          label: {
            label,
            icon
          }
        } = _ref2,
            props = _objectWithoutProperties(_ref2, _excluded);

        return /*#__PURE__*/React.createElement(Option, _extends({}, props, {
          label: label,
          icon: icon
        }));
      },
      options: menuOptions
    });
  }, [menuOptions]);
  const actions = useMemo(() => {
    const mapAction = _ref3 => {
      let [key, {
        label,
        icon,
        action
      }] = _ref3;
      return /*#__PURE__*/React.createElement(UserCard.Action, {
        key: key,
        title: label,
        "aria-label": label,
        onClick: action,
        icon: icon
      });
    };

    return [...actionsDefinition.map(mapAction), menu].filter(Boolean);
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
//# sourceMappingURL=/dynamic/client/views/room/UserCard/2f83dc19d6bd0905ec155cbcdbd16a3b06665cae.map
