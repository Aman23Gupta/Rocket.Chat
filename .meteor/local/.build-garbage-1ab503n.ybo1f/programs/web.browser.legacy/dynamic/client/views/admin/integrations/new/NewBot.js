function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/integrations/new/NewBot.js                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  "default": function () {
    return NewBot;
  }
});
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
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);

function NewBot() {
  var t = useTranslation();
  return /*#__PURE__*/React.createElement(Box, {
    pb: "x20",
    fontScale: "h4",
    key: "bots",
    dangerouslySetInnerHTML: {
      __html: t('additional_integrations_Bots')
    }
  });
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/integrations/new/164ce626f158394203123f3d0797e19266d6e3d2.map
