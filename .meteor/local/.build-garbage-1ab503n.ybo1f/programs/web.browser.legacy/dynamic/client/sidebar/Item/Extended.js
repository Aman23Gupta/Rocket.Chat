function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/Item/Extended.js                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["icon", "title", "avatar", "actions", "href", "time", "menu", "menuOptions", "subtitle", "titleIcon", "badges", "threadUnread", "unread", "selected"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 2);
var Sidebar, ActionButton;
module.link("@rocket.chat/fuselage", {
  Sidebar: function (v) {
    Sidebar = v;
  },
  ActionButton: function (v) {
    ActionButton = v;
  }
}, 0);
var useMutableCallback, usePrefersReducedMotion;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  },
  usePrefersReducedMotion: function (v) {
    usePrefersReducedMotion = v;
  }
}, 1);
var React, memo, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 2);
var useShortTimeAgo;
module.link("../../hooks/useTimeAgo", {
  useShortTimeAgo: function (v) {
    useShortTimeAgo = v;
  }
}, 3);

var Extended = function (_ref) {
  var _handleMenuEvent;

  var icon = _ref.icon,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title,
      avatar = _ref.avatar,
      actions = _ref.actions,
      href = _ref.href,
      time = _ref.time,
      menu = _ref.menu,
      menuOptions = _ref.menuOptions,
      _ref$subtitle = _ref.subtitle,
      subtitle = _ref$subtitle === void 0 ? '' : _ref$subtitle,
      titleIcon = _ref.titleIcon,
      badges = _ref.badges,
      threadUnread = _ref.threadUnread,
      unread = _ref.unread,
      selected = _ref.selected,
      props = _objectWithoutProperties(_ref, _excluded);

  var formatDate = useShortTimeAgo();

  var _useState = useState(!!window.DISABLE_ANIMATION),
      _useState2 = _slicedToArray(_useState, 2),
      menuVisibility = _useState2[0],
      setMenuVisibility = _useState2[1];

  var isReduceMotionEnabled = usePrefersReducedMotion();
  var handleMenu = useMutableCallback(function (e) {
    setMenuVisibility(e.target.offsetWidth > 0 && Boolean(menu));
  });
  var handleMenuEvent = (_handleMenuEvent = {}, _handleMenuEvent[isReduceMotionEnabled ? 'onMouseEnter' : 'onTransitionEnd'] = handleMenu, _handleMenuEvent);
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
//# sourceMappingURL=/dynamic/client/sidebar/Item/364a772cd1858c85955b59a90449249cb1a68f5e.map
