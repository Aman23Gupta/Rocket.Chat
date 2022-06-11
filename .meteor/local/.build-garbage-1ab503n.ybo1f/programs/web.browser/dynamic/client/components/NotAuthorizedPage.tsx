function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/NotAuthorizedPage.tsx                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let useTranslation;
module.link("../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);
let Page;
module.link("./Page", {
  default(v) {
    Page = v;
  }

}, 3);

const NotAuthorizedPage = () => {
  const t = useTranslation();
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
//# sourceMappingURL=/dynamic/client/components/f56dd5e7be99feb80faff71b1b7baa02b9d6c536.map
