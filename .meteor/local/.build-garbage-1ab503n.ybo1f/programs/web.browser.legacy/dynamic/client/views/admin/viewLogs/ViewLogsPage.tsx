function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/viewLogs/ViewLogsPage.tsx                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var Page;
module.link("../../../components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 1);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);
var ServerLogs;
module.link("./ServerLogs", {
  "default": function (v) {
    ServerLogs = v;
  }
}, 3);

var ViewLogsPage = function () {
  var t = useTranslation();
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('View_Logs')
  }), /*#__PURE__*/React.createElement(Page.Content, null, /*#__PURE__*/React.createElement(ServerLogs, null)));
};

module.exportDefault(ViewLogsPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/viewLogs/3de2aba8cc8e8c203ba62ef3be0cba1370601a3c.map
