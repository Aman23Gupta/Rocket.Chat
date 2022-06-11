function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/sidebar/header/CreateChannel.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);
var Box, Modal, ButtonGroup, Button, TextInput, Icon, Field, ToggleSwitch, FieldGroup;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Modal: function (v) {
    Modal = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Button: function (v) {
    Button = v;
  },
  TextInput: function (v) {
    TextInput = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  Field: function (v) {
    Field = v;
  },
  ToggleSwitch: function (v) {
    ToggleSwitch = v;
  },
  FieldGroup: function (v) {
    FieldGroup = v;
  }
}, 0);
var useDebouncedCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useDebouncedCallback: function (v) {
    useDebouncedCallback = v;
  }
}, 1);
var React, useEffect, useMemo, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 2);
var UserAutoCompleteMultiple;
module.link("../../components/UserAutoCompleteMultiple", {
  "default": function (v) {
    UserAutoCompleteMultiple = v;
  }
}, 3);
var useMethod;
module.link("../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 4);
var useSetting;
module.link("../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 5);
var useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 6);

var CreateChannel = function (_ref) {
  var values = _ref.values,
      handlers = _ref.handlers,
      hasUnsavedChanges = _ref.hasUnsavedChanges,
      onChangeUsers = _ref.onChangeUsers,
      onChangeType = _ref.onChangeType,
      onChangeBroadcast = _ref.onChangeBroadcast,
      canOnlyCreateOneType = _ref.canOnlyCreateOneType,
      e2eEnabledForPrivateByDefault = _ref.e2eEnabledForPrivateByDefault,
      onCreate = _ref.onCreate,
      onClose = _ref.onClose;
  var t = useTranslation();
  var e2eEnabled = useSetting('E2E_Enable');
  var namesValidation = useSetting('UTF8_Channel_Names_Validation');
  var allowSpecialNames = useSetting('UI_Allow_room_names_with_special_chars');
  var channelNameExists = useMethod('roomNameExists');
  var channelNameRegex = useMemo(function () {
    return new RegExp("^" + namesValidation + "$");
  }, [namesValidation]);

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      nameError = _useState2[0],
      setNameError = _useState2[1];

  var checkName = useDebouncedCallback(function () {
    function _callee(name) {
      var isNotAvailable;
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setNameError(false);

                if (!hasUnsavedChanges) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                if (!(!name || name.length === 0)) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", setNameError(t('Field_required')));

              case 5:
                if (!(!allowSpecialNames && !channelNameRegex.test(name))) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", setNameError(t('error-invalid-name')));

              case 7:
                _context.next = 9;
                return _regeneratorRuntime.awrap(channelNameExists(name));

              case 9:
                isNotAvailable = _context.sent;

                if (!isNotAvailable) {
                  _context.next = 12;
                  break;
                }

                return _context.abrupt("return", setNameError(t('Channel_already_exist', name)));

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, null, Promise);
    }

    return _callee;
  }(), 100, [channelNameRegex]);
  useEffect(function () {
    checkName(values.name);
  }, [checkName, values.name]);
  var e2edisabled = useMemo(function () {
    return !values.type || values.broadcast || !e2eEnabled || e2eEnabledForPrivateByDefault;
  }, [e2eEnabled, e2eEnabledForPrivateByDefault, values.broadcast, values.type]);
  var canSave = useMemo(function () {
    return hasUnsavedChanges && !nameError;
  }, [hasUnsavedChanges, nameError]);
  return /*#__PURE__*/React.createElement(Modal, null, /*#__PURE__*/React.createElement(Modal.Header, null, /*#__PURE__*/React.createElement(Modal.Title, null, t('Create_channel')), /*#__PURE__*/React.createElement(Modal.Close, {
    onClick: onClose
  })), /*#__PURE__*/React.createElement(Modal.Content, null, /*#__PURE__*/React.createElement(FieldGroup, null, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Name')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    error: hasUnsavedChanges ? nameError : undefined,
    addon: /*#__PURE__*/React.createElement(Icon, {
      name: values.type ? 'lock' : 'hash',
      size: "x20"
    }),
    placeholder: t('Channel_name'),
    onChange: handlers.handleName
  })), hasUnsavedChanges && nameError && /*#__PURE__*/React.createElement(Field.Error, null, nameError)), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Topic'), ' ', /*#__PURE__*/React.createElement(Box, {
    is: "span",
    color: "neutral-600"
  }, "(", t('optional'), ")")), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    placeholder: t('Channel_what_is_this_channel_about'),
    onChange: handlers.handleDescription
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start"
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    width: "full"
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Private')), /*#__PURE__*/React.createElement(Field.Description, null, values.type ? t('Only_invited_users_can_acess_this_channel') : t('Everyone_can_access_this_channel'))), /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: values.type,
    disabled: !!canOnlyCreateOneType,
    onChange: onChangeType
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start"
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    width: "full"
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Read_only')), /*#__PURE__*/React.createElement(Field.Description, null, values.readOnly ? t('Only_authorized_users_can_write_new_messages') : t('All_users_in_the_channel_can_write_new_messages'))), /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: values.readOnly,
    disabled: values.broadcast,
    onChange: handlers.handleReadOnly
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start"
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    width: "full"
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Encrypted')), /*#__PURE__*/React.createElement(Field.Description, null, values.type ? t('Encrypted_channel_Description') : t('Encrypted_not_available'))), /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: values.encrypted,
    disabled: e2edisabled,
    onChange: handlers.handleEncrypted
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start"
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    width: "full"
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Broadcast')), /*#__PURE__*/React.createElement(Field.Description, null, t('Broadcast_channel_Description'))), /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: values.broadcast,
    onChange: onChangeBroadcast
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Add_members') + " (" + t('optional') + ")"), /*#__PURE__*/React.createElement(UserAutoCompleteMultiple, {
    value: values.users,
    onChange: onChangeUsers
  })))), /*#__PURE__*/React.createElement(Modal.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    align: "end"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onClose
  }, t('Cancel')), /*#__PURE__*/React.createElement(Button, {
    disabled: !canSave,
    onClick: onCreate,
    primary: true
  }, t('Create')))));
};

module.exportDefault(CreateChannel);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/sidebar/header/183041527bc550dbd6acc72a0a420d064c2ee976.map
