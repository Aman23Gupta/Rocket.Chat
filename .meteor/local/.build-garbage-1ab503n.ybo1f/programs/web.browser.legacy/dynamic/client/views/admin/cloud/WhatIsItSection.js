function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/cloud/WhatIsItSection.js                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);
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
var Subtitle;
module.link("../../../components/Subtitle", {
  "default": function (v) {
    Subtitle = v;
  }
}, 2);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);

function WhatIsItSection(props) {
  var t = useTranslation();
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
//# sourceMappingURL=/dynamic/client/views/admin/cloud/c931127ecad88018cf60c51f8725f61673d8af19.map
