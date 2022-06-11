function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/AccountIntegrationsPage.tsx                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["_id"];

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 0);
let Box, Select, Field, Button;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Select(v) {
    Select = v;
  },

  Field(v) {
    Field = v;
  },

  Button(v) {
    Button = v;
  }

}, 0);
let React, useMemo, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useCallback(v) {
    useCallback = v;
  }

}, 1);
let WebdavAccounts;
module.link("../../../app/models/client", {
  WebdavAccounts(v) {
    WebdavAccounts = v;
  }

}, 2);
let Page;
module.link("../../components/Page", {
  default(v) {
    Page = v;
  }

}, 3);
let useMethod;
module.link("../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 4);
let useToastMessageDispatch;
module.link("../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 5);
let useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 6);
let useForm;
module.link("../../hooks/useForm", {
  useForm(v) {
    useForm = v;
  }

}, 7);
let useReactiveValue;
module.link("../../hooks/useReactiveValue", {
  useReactiveValue(v) {
    useReactiveValue = v;
  }

}, 8);

const getWebdavAccounts = () => WebdavAccounts.find().fetch();

const getServerName = _ref => {
  let {
    name,
    serverURL,
    username
  } = _ref;
  return name || "".concat(username, "@").concat(serverURL === null || serverURL === void 0 ? void 0 : serverURL.replace(/^https?\:\/\//i, ''));
};

const AccountIntegrationsPage = () => {
  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  const accounts = useReactiveValue(getWebdavAccounts);
  const removeWebdavAccount = useMethod('removeWebdavAccount');
  const {
    values: {
      selected
    },
    handlers: {
      handleSelected
    }
  } = useForm({
    selected: []
  });
  const options = useMemo(() => accounts.map(_ref2 => {
    let {
      _id
    } = _ref2,
        current = _objectWithoutProperties(_ref2, _excluded);

    return [_id, getServerName(current)];
  }), [accounts]);
  const handleClickRemove = useCallback(() => {
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
//# sourceMappingURL=/dynamic/client/views/account/ffcd3ed7e10aba1d67ef18581e60928f9fefaf65.map
