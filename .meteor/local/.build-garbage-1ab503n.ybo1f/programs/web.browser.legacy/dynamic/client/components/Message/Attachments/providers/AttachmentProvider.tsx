function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/providers/AttachmentProvider.tsx                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var usePrefersReducedData;
module.link("@rocket.chat/fuselage-hooks", {
  usePrefersReducedData: function (v) {
    usePrefersReducedData = v;
  }
}, 0);
var React, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 1);
var getURL;
module.link("../../../../../app/utils/client", {
  getURL: function (v) {
    getURL = v;
  }
}, 2);
var useLayout;
module.link("../../../../contexts/LayoutContext", {
  useLayout: function (v) {
    useLayout = v;
  }
}, 3);
var useUserPreference;
module.link("../../../../contexts/UserContext", {
  useUserPreference: function (v) {
    useUserPreference = v;
  }
}, 4);
var AttachmentContext;
module.link("../context/AttachmentContext", {
  AttachmentContext: function (v) {
    AttachmentContext = v;
  }
}, 5);

var AttachmentProvider = function (_ref) {
  var children = _ref.children;

  var _useLayout = useLayout(),
      isMobile = _useLayout.isMobile;

  var reducedData = usePrefersReducedData();
  var collapsedByDefault = !!useUserPreference('collapseMediaByDefault');
  var autoLoadEmbedMedias = !!useUserPreference('autoImageLoad');
  var saveMobileBandwidth = !!useUserPreference('saveMobileBandwidth');
  var contextValue = useMemo(function () {
    return {
      getURL: function (url) {
        return getURL(url, {
          full: true
        });
      },
      collapsedByDefault: collapsedByDefault,
      autoLoadEmbedMedias: !reducedData && autoLoadEmbedMedias && (!saveMobileBandwidth || !isMobile),
      dimensions: {
        width: 480,
        height: 360
      }
    };
  }, [collapsedByDefault, reducedData, autoLoadEmbedMedias, saveMobileBandwidth, isMobile]);
  return /*#__PURE__*/React.createElement(AttachmentContext.Provider, {
    children: children,
    value: contextValue
  });
};

module.exportDefault(AttachmentProvider);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/providers/94e6051d39768c5dd939e273ae169542ed3f2630.map
