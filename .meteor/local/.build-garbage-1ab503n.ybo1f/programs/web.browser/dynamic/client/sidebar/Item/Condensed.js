function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/Item/Condensed.js                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["icon", "title", "titleIcon", "avatar", "actions", "href", "menuOptions", "unread", "menu", "badges", "threadUnread"];

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

const Condensed = _ref => {
  let {
    icon,
    title = '',
    titleIcon,
    avatar,
    actions,
    href,
    menuOptions,
    unread,
    menu,
    badges,
    threadUnread
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const [menuVisibility, setMenuVisibility] = useState(!!window.DISABLE_ANIMATION);
  const isReduceMotionEnabled = usePrefersReducedMotion();
  const handleMenu = useMutableCallback(e => {
    setMenuVisibility(e.target.offsetWidth > 0 && Boolean(menu));
  });
  const handleMenuEvent = {
    [isReduceMotionEnabled ? 'onMouseEnter' : 'onTransitionEnd']: handleMenu
  };
  return /*#__PURE__*/React.createElement(Sidebar.Item, _extends({}, props, {
    href: href,
    clickable: !!href
  }), avatar && /*#__PURE__*/React.createElement(Sidebar.Item.Avatar, null, avatar), /*#__PURE__*/React.createElement(Sidebar.Item.Content, null, /*#__PURE__*/React.createElement(Sidebar.Item.Wrapper, null, icon, /*#__PURE__*/React.createElement(Sidebar.Item.Title, {
    "data-qa": "sidebar-item-title",
    className: unread && 'rcx-sidebar-item--highlighted'
  }, title)), badges && /*#__PURE__*/React.createElement(Sidebar.Item.Badge, null, badges), menu && /*#__PURE__*/React.createElement(Sidebar.Item.Menu, handleMenuEvent, menuVisibility ? menu() : /*#__PURE__*/React.createElement(ActionButton, {
    square: true,
    ghost: true,
    mini: true,
    "rcx-sidebar-item__menu": true,
    icon: "kebab"
  }))), actions && /*#__PURE__*/React.createElement(Sidebar.Item.Container, null, /*#__PURE__*/React.createElement(Sidebar.Item.Actions, null, actions)));
};

module.exportDefault( /*#__PURE__*/memo(Condensed));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/Item/957f8806a14b72b435f31c8962a0d83a6280e84b.map
