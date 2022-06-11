function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/settings/groups/LDAPGroupPage.tsx                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["_id"];

var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 1);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 2);
var Button, Box, TextInput, Field;
module.link("@rocket.chat/fuselage", {
  Button: function (v) {
    Button = v;
  },
  Box: function (v) {
    Box = v;
  },
  TextInput: function (v) {
    TextInput = v;
  },
  Field: function (v) {
    Field = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React, memo, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 2);
var GenericModal;
module.link("../../../../components/GenericModal", {
  "default": function (v) {
    GenericModal = v;
  }
}, 3);
var useEditableSettings;
module.link("../../../../contexts/EditableSettingsContext", {
  useEditableSettings: function (v) {
    useEditableSettings = v;
  }
}, 4);
var useSetModal;
module.link("../../../../contexts/ModalContext", {
  useSetModal: function (v) {
    useSetModal = v;
  }
}, 5);
var useEndpoint;
module.link("../../../../contexts/ServerContext", {
  useEndpoint: function (v) {
    useEndpoint = v;
  }
}, 6);
var useSetting;
module.link("../../../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 7);
var useToastMessageDispatch;
module.link("../../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 8);
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 9);
var TabbedGroupPage;
module.link("./TabbedGroupPage", {
  "default": function (v) {
    TabbedGroupPage = v;
  }
}, 10);

function LDAPGroupPage(_ref) {
  var _id = _ref._id,
      group = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();
  var testConnection = useEndpoint('POST', 'ldap.testConnection');
  var syncNow = useEndpoint('POST', 'ldap.syncNow');
  var testSearch = useEndpoint('POST', 'ldap.testSearch');
  var ldapEnabled = useSetting('LDAP_Enable');
  var setModal = useSetModal();
  var closeModal = useMutableCallback(function () {
    return setModal();
  });
  var editableSettings = useEditableSettings(useMemo(function () {
    return {
      group: _id
    };
  }, [_id]));
  var changed = useMemo(function () {
    return editableSettings.some(function (_ref2) {
      var changed = _ref2.changed;
      return changed;
    });
  }, [editableSettings]);

  var handleTestConnectionButtonClick = function () {
    function _callee() {
      var _await$testConnection, message;

      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _regeneratorRuntime.awrap(testConnection());

              case 3:
                _await$testConnection = _context.sent;
                message = _await$testConnection.message;
                dispatchToastMessage({
                  type: 'success',
                  message: t(message)
                });
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                dispatchToastMessage({
                  type: 'error',
                  message: _context.t0
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[0, 8]], Promise);
    }

    return _callee;
  }();

  var handleSyncNowButtonClick = function () {
    function _callee3() {
      var confirmSync;
      return _regeneratorRuntime.async(function () {
        function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.prev = 0;
                _context3.next = 3;
                return _regeneratorRuntime.awrap(testConnection());

              case 3:
                confirmSync = function () {
                  function _callee2() {
                    var _await$syncNow, message;

                    return _regeneratorRuntime.async(function () {
                      function _callee2$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                              closeModal();
                              _context2.prev = 1;
                              _context2.next = 4;
                              return _regeneratorRuntime.awrap(syncNow());

                            case 4:
                              _await$syncNow = _context2.sent;
                              message = _await$syncNow.message;
                              dispatchToastMessage({
                                type: 'success',
                                message: t(message)
                              });
                              _context2.next = 12;
                              break;

                            case 9:
                              _context2.prev = 9;
                              _context2.t0 = _context2["catch"](1);
                              dispatchToastMessage({
                                type: 'error',
                                message: _context2.t0
                              });

                            case 12:
                            case "end":
                              return _context2.stop();
                          }
                        }
                      }

                      return _callee2$;
                    }(), null, null, [[1, 9]], Promise);
                  }

                  return _callee2;
                }();

                setModal( /*#__PURE__*/React.createElement(GenericModal, {
                  variant: "info",
                  confirmText: t('Sync'),
                  cancelText: t('Cancel'),
                  title: t('Execute_Synchronization_Now'),
                  onConfirm: confirmSync,
                  onClose: closeModal
                }, t('LDAP_Sync_Now_Description')));
                _context3.next = 10;
                break;

              case 7:
                _context3.prev = 7;
                _context3.t0 = _context3["catch"](0);
                dispatchToastMessage({
                  type: 'error',
                  message: _context3.t0
                });

              case 10:
              case "end":
                return _context3.stop();
            }
          }
        }

        return _callee3$;
      }(), null, null, [[0, 7]], Promise);
    }

    return _callee3;
  }();

  var handleSearchTestButtonClick = function () {
    function _callee5() {
      var username, handleChangeUsername, confirmSearch;
      return _regeneratorRuntime.async(function () {
        function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.prev = 0;
                _context5.next = 3;
                return _regeneratorRuntime.awrap(testConnection());

              case 3:
                username = '';

                handleChangeUsername = function (event) {
                  username = event.currentTarget.value;
                };

                confirmSearch = function () {
                  function _callee4() {
                    var _await$testSearch, message;

                    return _regeneratorRuntime.async(function () {
                      function _callee4$(_context4) {
                        while (1) {
                          switch (_context4.prev = _context4.next) {
                            case 0:
                              _context4.prev = 0;
                              _context4.next = 3;
                              return _regeneratorRuntime.awrap(testSearch({
                                username: username
                              }));

                            case 3:
                              _await$testSearch = _context4.sent;
                              message = _await$testSearch.message;
                              dispatchToastMessage({
                                type: 'success',
                                message: t(message)
                              });
                              _context4.next = 11;
                              break;

                            case 8:
                              _context4.prev = 8;
                              _context4.t0 = _context4["catch"](0);
                              dispatchToastMessage({
                                type: 'error',
                                message: _context4.t0
                              });

                            case 11:
                            case "end":
                              return _context4.stop();
                          }
                        }
                      }

                      return _callee4$;
                    }(), null, null, [[0, 8]], Promise);
                  }

                  return _callee4;
                }();

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
                _context5.next = 12;
                break;

              case 9:
                _context5.prev = 9;
                _context5.t0 = _context5["catch"](0);
                dispatchToastMessage({
                  type: 'error',
                  message: _context5.t0
                });

              case 12:
              case "end":
                return _context5.stop();
            }
          }
        }

        return _callee5$;
      }(), null, null, [[0, 9]], Promise);
    }

    return _callee5;
  }();

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
//# sourceMappingURL=/dynamic/client/views/admin/settings/groups/99e2956d89b0bbca9db9b4403ab50dd8e2137da8.map
