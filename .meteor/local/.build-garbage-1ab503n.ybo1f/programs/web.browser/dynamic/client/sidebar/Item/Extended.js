function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/Item/Extended.js                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["icon", "title", "avatar", "actions", "href", "time", "menu", "menuOptions", "subtitle", "titleIcon", "badges", "threadUnread", "unread", "selected"];

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
let Sidebar, ActionButton;
module.link("@rocket.chat/fuselage", {
  Sidebar(v) {
    Sidebar = v;
  },

  ActionButton(v) {
    ActionButton = v;
  }

}, 0);
let useMutableCallback, usePrefersReducedMotion;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  },

  usePrefersReducedMotion(v) {
    usePrefersReducedMotion = v;
  }

}, 1);
let React, memo, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  },

  useState(v) {
    useState = v;
  }

}, 2);
let useShortTimeAgo;
module.link("../../hooks/useTimeAgo", {
  useShortTimeAgo(v) {
    useShortTimeAgo = v;
  }

}, 3);

const Extended = _ref => {
  let {
    icon,
    title = '',
    avatar,
    actions,
    href,
    time,
    menu,
    menuOptions,
    subtitle = '',
    titleIcon,
    badges,
    threadUnread,
    unread,
    selected
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const formatDate = useShortTimeAgo();
  const [menuVisibility, setMenuVisibility] = useState(!!window.DISABLE_ANIMATION);
  const isReduceMotionEnabled = usePrefersReducedMotion();
  const handleMenu = useMutableCallback(e => {
    setMenuVisibility(e.target.offsetWidth > 0 && Boolean(menu));
  });
  const handleMenuEvent = {
    [isReduceMotionEnabled ? 'onMouseEnter' : 'onTransitionEnd']: handleMenu
  };
  return /*#__PURE__*/React.createElement(Sidebar.Item, _extends({
    "aria-selected": selected,
    selected: selected,
    highlighted: unread
  }, props, {
    href: href,
    clickable: !!href
  }), avatar && /*#__PURE__*/React.createElement(Sidebar.Item.Avatar, null, avatar), /*#__PURE__*/React.createElement(Sidebar.Item.Content, null, /*#__PURE__*/React.createElement(Sidebar.Item.Content, null, /*#__PURE__*/React.createElement(Sidebar.Item.Wrapper, null, icon, /*#__PURE__*/React.createElement(Sidebar.Item.Title, {
    "data-qa": "sidebar-item-title",
    className: unread && 'rcx-sidebar-item--highlighted'
  }, title), time && /*#__PURE__*/React.createElement(Sidebar.Item.Time, null, formatDate(time)))), /*#__PURE__*/React.createElement(Sidebar.Item.Content, null, /*#__PURE__*/React.createElement(Sidebar.Item.Wrapper, null, /*#__PURE__*/React.createElement(Sidebar.Item.Subtitle, {
    tabIndex: "-1",
    className: unread && 'rcx-sidebar-item--highlighted'
  }, subtitle), /*#__PURE__*/React.createElement(Sidebar.Item.Badge, null, badges), menu && /*#__PURE__*/React.createElement(Sidebar.Item.Menu, handleMenuEvent, menuVisibility ? menu() : /*#__PURE__*/React.createElement(ActionButton, {
    square: true,
    ghost: true,
    mini: true,
    "rcx-sidebar-item__menu": true,
    icon: "kebab"
  }))))), actions && /*#__PURE__*/React.createElement(Sidebar.Item.Container, null, /*#__PURE__*/React.createElement(Sidebar.Item.Actions, null, actions)));
};

module.exportDefault( /*#__PURE__*/memo(Extended));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/Item/68272821a381a15b31e64087da7d9684a757b239.map
