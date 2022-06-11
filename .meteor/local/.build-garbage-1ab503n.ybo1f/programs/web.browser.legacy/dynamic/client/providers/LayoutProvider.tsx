function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/providers/LayoutProvider.tsx                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useLayoutSizes: function () {
    return useLayoutSizes;
  },
  useLayoutContextualBarExpanded: function () {
    return useLayoutContextualBarExpanded;
  },
  useLayoutContextualBarPosition: function () {
    return useLayoutContextualBarPosition;
  }
});
var useBreakpoints;
module.link("@rocket.chat/fuselage-hooks", {
  useBreakpoints: function (v) {
    useBreakpoints = v;
  }
}, 0);
var React, useContext, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useContext: function (v) {
    useContext = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 1);
var menu;
module.link("../../app/ui-utils/client", {
  menu: function (v) {
    menu = v;
  }
}, 2);
var LayoutContext;
module.link("../contexts/LayoutContext", {
  LayoutContext: function (v) {
    LayoutContext = v;
  }
}, 3);
var useQueryStringParameter;
module.link("../contexts/RouterContext", {
  useQueryStringParameter: function (v) {
    useQueryStringParameter = v;
  }
}, 4);
var useSetting;
module.link("../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 5);

var LayoutProvider = function (_ref) {
  var children = _ref.children;
  var showTopNavbarEmbeddedLayout = Boolean(useSetting('UI_Show_top_navbar_embedded_layout'));
  var layout = useQueryStringParameter('layout');
  var isEmbedded = layout === 'embedded';
  var breakpoints = useBreakpoints(); // ["xs", "sm", "md", "lg", "xl", xxl"]

  return /*#__PURE__*/React.createElement(LayoutContext.Provider, {
    children: children,
    value: useMemo(function () {
      return {
        isMobile: !breakpoints.includes('md'),
        isEmbedded: isEmbedded,
        showTopNavbarEmbeddedLayout: showTopNavbarEmbeddedLayout,
        sidebar: menu,
        size: {
          sidebar: '240px',
          // eslint-disable-next-line no-nested-ternary
          contextualBar: breakpoints.includes('sm') ? breakpoints.includes('xl') ? '38%' : '380px' : '100%'
        },
        contextualBarExpanded: !breakpoints.includes('xxxl') && breakpoints.includes('sm'),
        // eslint-disable-next-line no-nested-ternary
        contextualBarPosition: breakpoints.includes('sm') ? breakpoints.includes('lg') ? 'relative' : 'absolute' : 'fixed'
      };
    }, [isEmbedded, showTopNavbarEmbeddedLayout, breakpoints])
  });
};

module.exportDefault(LayoutProvider);

var useLayoutSizes = function () {
  return useContext(LayoutContext).size;
};

var useLayoutContextualBarExpanded = function () {
  return useContext(LayoutContext).contextualBarExpanded;
};

var useLayoutContextualBarPosition = function () {
  return useContext(LayoutContext).contextualBarPosition;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/providers/084a41876e5b263335a1993fd9df5d48f6c048c8.map
