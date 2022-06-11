function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/businessHours/BusinessHoursPage.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Button, ButtonGroup, Icon;
module.link("@rocket.chat/fuselage", {
  Button(v) {
    Button = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Icon(v) {
    Icon = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React, lazy, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  lazy(v) {
    lazy = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 2);
let Page;
module.link("../../../components/Page", {
  default(v) {
    Page = v;
  }

}, 3);
let useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 4);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 5);

const BusinessHoursPage = () => {
  const t = useTranslation();
  const router = useRoute('omnichannel-businessHours');
  const Table = useMemo(() => /*#__PURE__*/lazy(() => module.dynamicImport('../../../../ee/client/omnichannel/BusinessHoursTableContainer')), []);
  const handleNew = useMutableCallback(() => {
    router.push({
      context: 'new'
    });
  });
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Business_Hours')
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
    onClick: handleNew
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "plus"
  }), " ", t('New')))), /*#__PURE__*/React.createElement(Page.Content, null, /*#__PURE__*/React.createElement(Table, null)));
};

module.exportDefault(BusinessHoursPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/businessHours/627dd9a6a9725ed5fc835b4620c068bcd8e7ce31.map
