function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/settings/groups/LDAPGroupPage.tsx                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["_id"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
let Button, Box, TextInput, Field;
module.link("@rocket.chat/fuselage", {
  Button(v) {
    Button = v;
  },

  Box(v) {
    Box = v;
  },

  TextInput(v) {
    TextInput = v;
  },

  Field(v) {
    Field = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React, memo, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 2);
let GenericModal;
module.link("../../../../components/GenericModal", {
  default(v) {
    GenericModal = v;
  }

}, 3);
let useEditableSettings;
module.link("../../../../contexts/EditableSettingsContext", {
  useEditableSettings(v) {
    useEditableSettings = v;
  }

}, 4);
let useSetModal;
module.link("../../../../contexts/ModalContext", {
  useSetModal(v) {
    useSetModal = v;
  }

}, 5);
let useEndpoint;
module.link("../../../../contexts/ServerContext", {
  useEndpoint(v) {
    useEndpoint = v;
  }

}, 6);
let useSetting;
module.link("../../../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 7);
let useToastMessageDispatch;
module.link("../../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 8);
let useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 9);
let TabbedGroupPage;
module.link("./TabbedGroupPage", {
  default(v) {
    TabbedGroupPage = v;
  }

}, 10);

function LDAPGroupPage(_ref) {
  let {
    _id
  } = _ref,
      group = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  const testConnection = useEndpoint('POST', 'ldap.testConnection');
  const syncNow = useEndpoint('POST', 'ldap.syncNow');
  const testSearch = useEndpoint('POST', 'ldap.testSearch');
  const ldapEnabled = useSetting('LDAP_Enable');
  const setModal = useSetModal();
  const closeModal = useMutableCallback(() => setModal());
  const editableSettings = useEditableSettings(useMemo(() => ({
    group: _id
  }), [_id]));
  const changed = useMemo(() => editableSettings.some(_ref2 => {
    let {
      changed
    } = _ref2;
    return changed;
  }), [editableSettings]);

  const handleTestConnectionButtonClick = async () => {
    try {
      const {
        message
      } = await testConnection();
      dispatchToastMessage({
        type: 'success',
        message: t(message)
      });
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }
  };

  const handleSyncNowButtonClick = async () => {
    try {
      await testConnection();

      const confirmSync = async () => {
        closeModal();

        try {
          const {
            message
          } = await syncNow();
          dispatchToastMessage({
            type: 'success',
            message: t(message)
          });
        } catch (error) {
          dispatchToastMessage({
            type: 'error',
            message: error
          });
        }
      };

      setModal( /*#__PURE__*/React.createElement(GenericModal, {
        variant: "info",
        confirmText: t('Sync'),
        cancelText: t('Cancel'),
        title: t('Execute_Synchronization_Now'),
        onConfirm: confirmSync,
        onClose: closeModal
      }, t('LDAP_Sync_Now_Description')));
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }
  };

  const handleSearchTestButtonClick = async () => {
    try {
      await testConnection();
      let username = '';

      const handleChangeUsername = event => {
        username = event.currentTarget.value;
      };

      const confirmSearch = async () => {
        try {
          const {
            message
          } = await testSearch({
            username
          });
          dispatchToastMessage({
            type: 'success',
            message: t(message)
          });
        } catch (error) {
          dispatchToastMessage({
            type: 'error',
            message: error
          });
        }
      };

      setModal( /*#__PURE__*/React.createElement(GenericModal, {
        variant: "info",
        confirmText: t('Search'),
        cancelText: t('Cancel'),
        title: t('Test_LDAP_Search'),
        onConfirm: confirmSearch,
        onClose: closeModal
      }, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Box, {
        display: "flex"
      }, /*#__PURE__*/React.createElement(Field.Label, null, t('LDAP_Username_To_Search'))), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
        onChange: handleChangeUsername
      })))));
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }
  };

  return /*#__PURE__*/React.createElement(TabbedGroupPage, _extends({
    _id: _id
  }, group, {
    headerButtons: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      children: t('Test_Connection'),
      disabled: !ldapEnabled || changed,
      onClick: handleTestConnectionButtonClick
    }), /*#__PURE__*/React.createElement(Button, {
      children: t('Test_LDAP_Search'),
      disabled: !ldapEnabled || changed,
      onClick: handleSearchTestButtonClick
    }), /*#__PURE__*/React.createElement(Button, {
      children: t('LDAP_Sync_Now'),
      disabled: !ldapEnabled || changed,
      onClick: handleSyncNowButtonClick
    }), /*#__PURE__*/React.createElement(Button, {
      is: "a",
      href: "https://go.rocket.chat/i/ldap-docs",
      target: "_blank"
    }, t('LDAP_Documentation')))
  }));
}

module.exportDefault( /*#__PURE__*/memo(LDAPGroupPage));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/settings/groups/1f978d238371df54bf3c2f8b236c3b0093c58a4d.map
