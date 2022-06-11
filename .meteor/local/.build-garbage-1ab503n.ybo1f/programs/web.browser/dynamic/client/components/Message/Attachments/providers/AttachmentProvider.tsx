function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/providers/AttachmentProvider.tsx                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let usePrefersReducedData;
module.link("@rocket.chat/fuselage-hooks", {
  usePrefersReducedData(v) {
    usePrefersReducedData = v;
  }

}, 0);
let React, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 1);
let getURL;
module.link("../../../../../app/utils/client", {
  getURL(v) {
    getURL = v;
  }

}, 2);
let useLayout;
module.link("../../../../contexts/LayoutContext", {
  useLayout(v) {
    useLayout = v;
  }

}, 3);
let useUserPreference;
module.link("../../../../contexts/UserContext", {
  useUserPreference(v) {
    useUserPreference = v;
  }

}, 4);
let AttachmentContext;
module.link("../context/AttachmentContext", {
  AttachmentContext(v) {
    AttachmentContext = v;
  }

}, 5);

const AttachmentProvider = _ref => {
  let {
    children
  } = _ref;
  const {
    isMobile
  } = useLayout();
  const reducedData = usePrefersReducedData();
  const collapsedByDefault = !!useUserPreference('collapseMediaByDefault');
  const autoLoadEmbedMedias = !!useUserPreference('autoImageLoad');
  const saveMobileBandwidth = !!useUserPreference('saveMobileBandwidth');
  const contextValue = useMemo(() => ({
    getURL: url => getURL(url, {
      full: true
    }),
    collapsedByDefault,
    autoLoadEmbedMedias: !reducedData && autoLoadEmbedMedias && (!saveMobileBandwidth || !isMobile),
    dimensions: {
      width: 480,
      height: 360
    }
  }), [collapsedByDefault, reducedData, autoLoadEmbedMedias, saveMobileBandwidth, isMobile]);
  return /*#__PURE__*/React.createElement(AttachmentContext.Provider, {
    children: children,
    value: contextValue
  });
};

module.exportDefault(AttachmentProvider);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/providers/a92f81eae7e1c8daed3f2ef9662006e155fbd99b.map
