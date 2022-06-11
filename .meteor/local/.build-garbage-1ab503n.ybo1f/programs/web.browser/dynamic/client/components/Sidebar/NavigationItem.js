function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Sidebar/NavigationItem.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Icon, Tag;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Icon(v) {
    Icon = v;
  },

  Tag(v) {
    Tag = v;
  }

}, 0);
let React, memo, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 1);
let useRoutePath;
module.link("../../contexts/RouterContext", {
  useRoutePath(v) {
    useRoutePath = v;
  }

}, 2);
let Sidebar;
module.link("./Sidebar", {
  default(v) {
    Sidebar = v;
  }

}, 3);

const NavigationItem = _ref => {
  let {
    permissionGranted,
    pathGroup,
    pathSection,
    icon,
    label,
    currentPath,
    tag
  } = _ref;
  const params = useMemo(() => ({
    group: pathGroup
  }), [pathGroup]);
  const path = useRoutePath(pathSection, params);
  const isActive = path === currentPath || false;

  if (permissionGranted && !permissionGranted()) {
    return null;
  }

  return /*#__PURE__*/React.createElement(Sidebar.GenericItem, {
    active: isActive,
    href: path,
    key: path
  }, icon && /*#__PURE__*/React.createElement(Icon, {
    name: icon,
    size: "x20",
    mi: "x4"
  }), /*#__PURE__*/React.createElement(Box, {
    withTruncatedText: true,
    fontScale: "p2",
    mi: "x4",
    color: "info"
  }, label, " ", tag && /*#__PURE__*/React.createElement(Tag, {
    style: {
      display: 'inline',
      backgroundColor: '#000',
      color: '#FFF',
      marginLeft: 4
    }
  }, tag)));
};

module.exportDefault( /*#__PURE__*/memo(NavigationItem));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Sidebar/118e2a7d181e9b3f37b0d5ce9f6a22249a702041.map
