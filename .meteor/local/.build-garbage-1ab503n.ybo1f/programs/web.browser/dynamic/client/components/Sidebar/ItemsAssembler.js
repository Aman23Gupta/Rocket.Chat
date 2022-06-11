function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Sidebar/ItemsAssembler.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  }

}, 0);
let useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 1);
let Sidebar;
module.link("./Sidebar", {
  default(v) {
    Sidebar = v;
  }

}, 2);

const ItemsAssembler = _ref => {
  let {
    items,
    currentPath
  } = _ref;
  const t = useTranslation();
  return items.map(_ref2 => {
    let {
      href,
      pathSection,
      i18nLabel,
      name,
      icon,
      permissionGranted,
      pathGroup,
      tag
    } = _ref2;
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
//# sourceMappingURL=/dynamic/client/components/Sidebar/44fc0975013d465432f8edda64f166c5d4be8865.map
