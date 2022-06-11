function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/tokens/AccountTokensPage.js                                                                    //
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
var useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 3);
var AccountTokensTable;
module.link("./AccountTokensTable", {
  "default": function (v) {
    AccountTokensTable = v;
  }
}, 4);
var AddToken;
module.link("./AddToken", {
  "default": function (v) {
    AddToken = v;
  }
}, 5);

var AccountTokensPage = function () {
  var t = useTranslation();

  var _useEndpointData = useEndpointData('users.getPersonalAccessTokens'),
      data = _useEndpointData.value,
      reload = _useEndpointData.reload;

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
//# sourceMappingURL=/dynamic/client/views/account/tokens/f65dcc2f00c795115ba22ca07c24d64a92b52048.map
