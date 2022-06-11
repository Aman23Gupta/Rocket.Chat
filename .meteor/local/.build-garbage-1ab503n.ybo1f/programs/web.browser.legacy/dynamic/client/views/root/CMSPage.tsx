function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/root/CMSPage.tsx                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var useRoute;
module.link("../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 1);
var useSetting;
module.link("../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 2);

var CMSPage = function (_ref) {
  var page = _ref.page;
  var homeRoute = useRoute('/');
  var pageContent = useSetting(page);

  var handlePageCloseClick = function () {
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
//# sourceMappingURL=/dynamic/client/views/root/79660d656c750d55f19dfa380736f1e73b8c6d45.map
