function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/AccountIntegrationsPage.tsx                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["_id"];

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 0);
var Box, Select, Field, Button;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Select: function (v) {
    Select = v;
  },
  Field: function (v) {
    Field = v;
  },
  Button: function (v) {
    Button = v;
  }
}, 0);
var React, useMemo, useCallback;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useCallback: function (v) {
    useCallback = v;
  }
}, 1);
var WebdavAccounts;
module.link("../../../app/models/client", {
  WebdavAccounts: function (v) {
    WebdavAccounts = v;
  }
}, 2);
var Page;
module.link("../../components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 3);
var useMethod;
module.link("../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 4);
var useToastMessageDispatch;
module.link("../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 5);
var useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 6);
var useForm;
module.link("../../hooks/useForm", {
  useForm: function (v) {
    useForm = v;
  }
}, 7);
var useReactiveValue;
module.link("../../hooks/useReactiveValue", {
  useReactiveValue: function (v) {
    useReactiveValue = v;
  }
}, 8);

var getWebdavAccounts = function () {
  return WebdavAccounts.find().fetch();
};

var getServerName = function (_ref) {
  var name = _ref.name,
      serverURL = _ref.serverURL,
      username = _ref.username;
  return name || username + "@" + (serverURL === null || serverURL === void 0 ? void 0 : serverURL.replace(/^https?\:\/\//i, ''));
};

var AccountIntegrationsPage = function () {
  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();
  var accounts = useReactiveValue(getWebdavAccounts);
  var removeWebdavAccount = useMethod('removeWebdavAccount');

  var _useForm = useForm({
    selected: []
  }),
      selected = _useForm.values.selected,
      handleSelected = _useForm.handlers.handleSelected;

  var options = useMemo(function () {
    return accounts.map(function (_ref2) {
      var _id = _ref2._id,
          current = _objectWithoutProperties(_ref2, _excluded);

      return [_id, getServerName(current)];
    });
  }, [accounts]);
  var handleClickRemove = useCallback(function () {
    try {
      removeWebdavAccount(selected);
      dispatchToastMessage({
        type: 'success',
        message: t('Webdav_account_removed')
      });
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }
  }, [dispatchToastMessage, removeWebdavAccount, selected, t]);
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Integrations')
  }), /*#__PURE__*/React.createElement(Page.ScrollableContentWithShadow, null, /*#__PURE__*/React.createElement(Box, {
    maxWidth: "x600",
    w: "full",
    alignSelf: "center"
  }, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('WebDAV_Accounts')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Select, {
    options: options,
    onChange: handleSelected,
    value: selected,
    placeholder: t('Select_an_option')
  }), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    danger: true,
    onClick: handleClickRemove
  }, t('Remove')))))));
};

module.exportDefault(AccountIntegrationsPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/account/f02e28c51a1d3d46c707aa0317924f2746173cd4.map
