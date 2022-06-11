function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/cloud/WhatIsItSection.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
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
let Subtitle;
module.link("../../../components/Subtitle", {
  default(v) {
    Subtitle = v;
  }

}, 2);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);

function WhatIsItSection(props) {
  const t = useTranslation();
  return /*#__PURE__*/React.createElement(Box, _extends({
    is: "section"
  }, props), /*#__PURE__*/React.createElement(Subtitle, null, t('Cloud_what_is_it')), /*#__PURE__*/React.createElement(Box, {
    withRichContent: true,
    color: "neutral-800"
  }, /*#__PURE__*/React.createElement("p", null, t('Cloud_what_is_it_description')), /*#__PURE__*/React.createElement("details", null, /*#__PURE__*/React.createElement("p", null, t('Cloud_what_is_it_services_like')), /*#__PURE__*/React.createElement("ul", null, /*#__PURE__*/React.createElement("li", null, t('Register_Server_Registered_Push_Notifications')), /*#__PURE__*/React.createElement("li", null, t('Register_Server_Registered_Livechat')), /*#__PURE__*/React.createElement("li", null, t('Register_Server_Registered_OAuth')), /*#__PURE__*/React.createElement("li", null, t('Register_Server_Registered_Marketplace'))), /*#__PURE__*/React.createElement("p", null, t('Cloud_what_is_it_additional')))));
}

module.exportDefault(WhatIsItSection);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/cloud/a66eb0d60c12d91ecb0366d8c286fe91a823dfb1.map
