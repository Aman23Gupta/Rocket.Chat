function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/tokens/AccountTokensPage.js                                                                    //
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
let useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 3);
let AccountTokensTable;
module.link("./AccountTokensTable", {
  default(v) {
    AccountTokensTable = v;
  }

}, 4);
let AddToken;
module.link("./AddToken", {
  default(v) {
    AddToken = v;
  }

}, 5);

const AccountTokensPage = () => {
  const t = useTranslation();
  const {
    value: data,
    reload
  } = useEndpointData('users.getPersonalAccessTokens');
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Personal_Access_Tokens')
  }), /*#__PURE__*/React.createElement(Page.Content, null, /*#__PURE__*/React.createElement(AddToken, {
    onDidAddToken: reload
  }), /*#__PURE__*/React.createElement(AccountTokensTable, {
    data: data,
    reload: reload
  })));
};

module.exportDefault(AccountTokensPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/account/tokens/9d44de259a0a55095139f1ceb2b3367b736774f5.map
