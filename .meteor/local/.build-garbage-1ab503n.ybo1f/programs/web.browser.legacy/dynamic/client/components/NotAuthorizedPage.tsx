function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/NotAuthorizedPage.tsx                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var useTranslation;
module.link("../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);
var Page;
module.link("./Page", {
  "default": function (v) {
    Page = v;
  }
}, 3);

var NotAuthorizedPage = function () {
  var t = useTranslation();
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Content, {
    pb: "x24"
  }, /*#__PURE__*/React.createElement(Box, {
    is: "p",
    fontScale: "p2"
  }, t('You_are_not_authorized_to_view_this_page'))));
};

module.exportDefault(NotAuthorizedPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/dcbc4063834f987e6a560eb2645526763c9c8700.map
