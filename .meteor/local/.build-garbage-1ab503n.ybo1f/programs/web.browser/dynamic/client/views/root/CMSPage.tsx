function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/root/CMSPage.tsx                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let useRoute;
module.link("../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 1);
let useSetting;
module.link("../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 2);

const CMSPage = _ref => {
  let {
    page
  } = _ref;
  const homeRoute = useRoute('/');
  const pageContent = useSetting(page);

  const handlePageCloseClick = () => {
    homeRoute.push();
  };

  return /*#__PURE__*/React.createElement("main", {
    id: "rocket-chat"
  }, /*#__PURE__*/React.createElement("div", {
    className: "main-content cms-page"
  }, /*#__PURE__*/React.createElement("div", {
    className: "container cms-page content-background-color"
  }, /*#__PURE__*/React.createElement("div", {
    className: "cms-page-close",
    onClick: handlePageCloseClick
  }, /*#__PURE__*/React.createElement("button", {
    className: "rc-button rc-button--nude"
  }, /*#__PURE__*/React.createElement("i", {
    className: "icon-cancel"
  }))), /*#__PURE__*/React.createElement("div", {
    className: "cms-page__content",
    dangerouslySetInnerHTML: {
      __html: pageContent
    }
  }))));
};

module.exportDefault(CMSPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/root/6c36178464900a863f4791a708495d8f991dc318.map
