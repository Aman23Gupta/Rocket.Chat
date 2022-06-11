function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/Item/Condensed.js                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["icon", "title", "titleIcon", "avatar", "actions", "href", "menuOptions", "unread", "menu", "badges", "threadUnread"];

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

var Condensed = function (_ref) {
  var _handleMenuEvent;

  var icon = _ref.icon,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title,
      titleIcon = _ref.titleIcon,
      avatar = _ref.avatar,
      actions = _ref.actions,
      href = _ref.href,
      menuOptions = _ref.menuOptions,
      unread = _ref.unread,
      menu = _ref.menu,
      badges = _ref.badges,
      threadUnread = _ref.threadUnread,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useState = useState(!!window.DISABLE_ANIMATION),
      _useState2 = _slicedToArray(_useState, 2),
      menuVisibility = _useState2[0],
      setMenuVisibility = _useState2[1];

  var isReduceMotionEnabled = usePrefersReducedMotion();
  var handleMenu = useMutableCallback(function (e) {
    setMenuVisibility(e.target.offsetWidth > 0 && Boolean(menu));
  });
  var handleMenuEvent = (_handleMenuEvent = {}, _handleMenuEvent[isReduceMotionEnabled ? 'onMouseEnter' : 'onTransitionEnd'] = handleMenu, _handleMenuEvent);
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
//# sourceMappingURL=/dynamic/client/sidebar/Item/5c4110d37657ee71272ba3b7a8e160224127fc40.map
