function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/providers/LayoutProvider.tsx                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useLayoutSizes: () => useLayoutSizes,
  useLayoutContextualBarExpanded: () => useLayoutContextualBarExpanded,
  useLayoutContextualBarPosition: () => useLayoutContextualBarPosition
});
let useBreakpoints;
module.link("@rocket.chat/fuselage-hooks", {
  useBreakpoints(v) {
    useBreakpoints = v;
  }

}, 0);
let React, useContext, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useContext(v) {
    useContext = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 1);
let menu;
module.link("../../app/ui-utils/client", {
  menu(v) {
    menu = v;
  }

}, 2);
let LayoutContext;
module.link("../contexts/LayoutContext", {
  LayoutContext(v) {
    LayoutContext = v;
  }

}, 3);
let useQueryStringParameter;
module.link("../contexts/RouterContext", {
  useQueryStringParameter(v) {
    useQueryStringParameter = v;
  }

}, 4);
let useSetting;
module.link("../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 5);

const LayoutProvider = _ref => {
  let {
    children
  } = _ref;
  const showTopNavbarEmbeddedLayout = Boolean(useSetting('UI_Show_top_navbar_embedded_layout'));
  const layout = useQueryStringParameter('layout');
  const isEmbedded = layout === 'embedded';
  const breakpoints = useBreakpoints(); // ["xs", "sm", "md", "lg", "xl", xxl"]

  return /*#__PURE__*/React.createElement(LayoutContext.Provider, {
    children: children,
    value: useMemo(() => ({
      isMobile: !breakpoints.includes('md'),
      isEmbedded,
      showTopNavbarEmbeddedLayout,
      sidebar: menu,
      size: {
        sidebar: '240px',
        // eslint-disable-next-line no-nested-ternary
        contextualBar: breakpoints.includes('sm') ? breakpoints.includes('xl') ? '38%' : '380px' : '100%'
      },
      contextualBarExpanded: !breakpoints.includes('xxxl') && breakpoints.includes('sm'),
      // eslint-disable-next-line no-nested-ternary
      contextualBarPosition: breakpoints.includes('sm') ? breakpoints.includes('lg') ? 'relative' : 'absolute' : 'fixed'
    }), [isEmbedded, showTopNavbarEmbeddedLayout, breakpoints])
  });
};

module.exportDefault(LayoutProvider);

const useLayoutSizes = () => useContext(LayoutContext).size;

const useLayoutContextualBarExpanded = () => useContext(LayoutContext).contextualBarExpanded;

const useLayoutContextualBarPosition = () => useContext(LayoutContext).contextualBarPosition;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/providers/864df3cb72e24f9f51778681c3c77b8980260b7a.map
