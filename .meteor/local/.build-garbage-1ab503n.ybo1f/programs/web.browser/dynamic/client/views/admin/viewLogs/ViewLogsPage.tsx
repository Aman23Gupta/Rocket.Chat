function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/viewLogs/ViewLogsPage.tsx                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Page;
module.link("../../../components/Page", {
  default(v) {
    Page = v;
  }

}, 1);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);
let ServerLogs;
module.link("./ServerLogs", {
  default(v) {
    ServerLogs = v;
  }

}, 3);

const ViewLogsPage = () => {
  const t = useTranslation();
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('View_Logs')
  }), /*#__PURE__*/React.createElement(Page.Content, null, /*#__PURE__*/React.createElement(ServerLogs, null)));
};

module.exportDefault(ViewLogsPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/viewLogs/6c07b6213797d3fbcd4252277bc1b0f46972a184.map
