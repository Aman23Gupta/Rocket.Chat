function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Sidebar/ItemsAssembler.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 0);
var useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 1);
var Sidebar;
module.link("./Sidebar", {
  "default": function (v) {
    Sidebar = v;
  }
}, 2);

var ItemsAssembler = function (_ref) {
  var items = _ref.items,
      currentPath = _ref.currentPath;
  var t = useTranslation();
  return items.map(function (_ref2) {
    var href = _ref2.href,
        pathSection = _ref2.pathSection,
        i18nLabel = _ref2.i18nLabel,
        name = _ref2.name,
        icon = _ref2.icon,
        permissionGranted = _ref2.permissionGranted,
        pathGroup = _ref2.pathGroup,
        tag = _ref2.tag;
    return /*#__PURE__*/React.createElement(Sidebar.NavigationItem, {
      permissionGranted: permissionGranted,
      pathGroup: pathGroup,
      pathSection: href || pathSection,
      icon: icon,
      label: t(i18nLabel || name),
      key: i18nLabel || name,
      currentPath: currentPath,
      tag: t(tag)
    });
  });
};

module.exportDefault( /*#__PURE__*/memo(ItemsAssembler));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Sidebar/960f191205c5b6aeba7245f2ff51907df2bdd65c.map
