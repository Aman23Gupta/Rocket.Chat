function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Sidebar/NavigationItem.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, Icon, Tag;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  Tag: function (v) {
    Tag = v;
  }
}, 0);
var React, memo, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 1);
var useRoutePath;
module.link("../../contexts/RouterContext", {
  useRoutePath: function (v) {
    useRoutePath = v;
  }
}, 2);
var Sidebar;
module.link("./Sidebar", {
  "default": function (v) {
    Sidebar = v;
  }
}, 3);

var NavigationItem = function (_ref) {
  var permissionGranted = _ref.permissionGranted,
      pathGroup = _ref.pathGroup,
      pathSection = _ref.pathSection,
      icon = _ref.icon,
      label = _ref.label,
      currentPath = _ref.currentPath,
      tag = _ref.tag;
  var params = useMemo(function () {
    return {
      group: pathGroup
    };
  }, [pathGroup]);
  var path = useRoutePath(pathSection, params);
  var isActive = path === currentPath || false;

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
//# sourceMappingURL=/dynamic/client/components/Sidebar/0577f96458a4fd3a613bc19ef9a7cdf33649116e.map
