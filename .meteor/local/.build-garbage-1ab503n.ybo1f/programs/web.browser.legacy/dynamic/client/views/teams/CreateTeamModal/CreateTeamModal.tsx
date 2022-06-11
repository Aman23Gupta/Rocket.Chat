function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/CreateTeamModal/CreateTeamModal.tsx                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _toConsumableArray;

module.link("@babel/runtime/helpers/toConsumableArray", {
  default: function (v) {
    _toConsumableArray = v;
  }
}, 1);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 2);
var Box, Modal, ButtonGroup, Button, TextInput, Field, ToggleSwitch, FieldGroup;
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
var useMutableCallback, useDebouncedCallback, useAutoFocus;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  },
  useDebouncedCallback: function (v) {
    useDebouncedCallback = v;
  },
  useAutoFocus: function (v) {
    useAutoFocus = v;
  }
}, 1);
var React, memo, useCallback, useEffect, useMemo, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  },
  useCallback: function (v) {
    useCallback = v;
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
var usePermission;
module.link("../../../contexts/AuthorizationContext", {
  usePermission: function (v) {
    usePermission = v;
  }
}, 3);
var useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 4);
var useSetting;
module.link("../../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 5);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 6);
var useEndpointActionExperimental;
module.link("../../../hooks/useEndpointActionExperimental", {
  useEndpointActionExperimental: function (v) {
    useEndpointActionExperimental = v;
  }
}, 7);
var useForm;
module.link("../../../hooks/useForm", {
  useForm: function (v) {
    useForm = v;
  }
}, 8);
var goToRoomById;
module.link("../../../lib/utils/goToRoomById", {
  goToRoomById: function (v) {
    goToRoomById = v;
  }
}, 9);
var TeamNameInput;
module.link("./TeamNameInput", {
  "default": function (v) {
    TeamNameInput = v;
  }
}, 10);
var UsersInput;
module.link("./UsersInput", {
  "default": function (v) {
    UsersInput = v;
  }
}, 11);

var useCreateTeamModalState = function (onClose) {
  var e2eEnabled = useSetting('E2E_Enable');
  var e2eEnabledForPrivateByDefault = useSetting('E2E_Enabled_Default_PrivateRooms');
  var namesValidation = useSetting('UTF8_Channel_Names_Validation');
  var allowSpecialNames = useSetting('UI_Allow_room_names_with_special_chars');

  var _useForm = useForm({
    members: [],
    name: '',
    description: '',
    type: true,
    readOnly: false,
    encrypted: e2eEnabledForPrivateByDefault !== null && e2eEnabledForPrivateByDefault !== void 0 ? e2eEnabledForPrivateByDefault : false,
    broadcast: false
  }),
      values = _useForm.values,
      handlers = _useForm.handlers,
      hasUnsavedChanges = _useForm.hasUnsavedChanges;

  var name = values.name,
      description = values.description,
      type = values.type,
      readOnly = values.readOnly,
      broadcast = values.broadcast,
      encrypted = values.encrypted,
      members = values.members;
  var handleMembers = handlers.handleMembers,
      handleEncrypted = handlers.handleEncrypted,
      handleType = handlers.handleType,
      handleBroadcast = handlers.handleBroadcast,
      handleReadOnly = handlers.handleReadOnly;
  var t = useTranslation();
  var teamNameRegex = useMemo(function () {
    if (allowSpecialNames) {
      return null;
    }

    return new RegExp("^" + namesValidation + "$");
  }, [allowSpecialNames, namesValidation]);

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      nameError = _useState2[0],
      setNameError = _useState2[1];

  var teamNameExists = useMethod('roomNameExists');
  var checkName = useDebouncedCallback(function () {
    function _callee(name) {
      var isNotAvailable;
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setNameError(undefined);

                if (hasUnsavedChanges) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                if (!(!name || name.length === 0)) {
                  _context.next = 6;
                  break;
                }

                setNameError(t('Field_required'));
                return _context.abrupt("return");

              case 6:
                if (!(teamNameRegex && !teamNameRegex.test(name))) {
                  _context.next = 9;
                  break;
                }

                setNameError(t('error-invalid-name'));
                return _context.abrupt("return");

              case 9:
                _context.next = 11;
                return _regeneratorRuntime.awrap(teamNameExists(name));

              case 11:
                isNotAvailable = _context.sent;

                if (isNotAvailable) {
                  setNameError(t('Teams_Errors_team_name', {
                    name: name
                  }));
                }

              case 13:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, null, Promise);
    }

    return _callee;
  }(), 230, [name]);
  useEffect(function () {
    checkName(name);
  }, [checkName, name]);
  var canChangeReadOnly = !broadcast;
  var canChangeEncrypted = type && !broadcast && e2eEnabled && !e2eEnabledForPrivateByDefault;
  var onChangeName = handlers.handleName;
  var onChangeDescription = handlers.handleDescription;
  var onChangeType = useMutableCallback(function (value) {
    handleEncrypted(!value);
    return handleType(value);
  });
  var onChangeReadOnly = handlers.handleReadOnly;
  var onChangeEncrypted = handlers.handleEncrypted;
  var onChangeBroadcast = useCallback(function (value) {
    handleEncrypted(!value);
    handleReadOnly(value);
    return handleBroadcast(value);
  }, [handleBroadcast, handleEncrypted, handleReadOnly]);
  var onChangeMembers = useCallback(function (value, action) {
    if (!action) {
      if (members.includes(value)) {
        return;
      }

      return handleMembers([].concat(_toConsumableArray(members), [value]));
    }

    handleMembers(members.filter(function (current) {
      return current !== value;
    }));
  }, [handleMembers, members]);
  var canSave = hasUnsavedChanges && !nameError;
  var canCreateTeam = usePermission('create-team');
  var isCreateButtonEnabled = canSave && canCreateTeam;
  var createTeam = useEndpointActionExperimental('POST', 'teams.create');
  var onCreate = useCallback(function () {
    function _callee2() {
      var params, data;
      return _regeneratorRuntime.async(function () {
        function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                params = {
                  name: name,
                  members: members,
                  type: type ? 1 : 0,
                  room: {
                    readOnly: readOnly,
                    extraData: {
                      description: description,
                      broadcast: broadcast,
                      encrypted: encrypted
                    }
                  }
                };
                _context2.next = 3;
                return _regeneratorRuntime.awrap(createTeam(params));

              case 3:
                data = _context2.sent;
                goToRoomById(data.team.roomId);
                onClose();

              case 6:
              case "end":
                return _context2.stop();
            }
          }
        }

        return _callee2$;
      }(), null, null, null, Promise);
    }

    return _callee2;
  }(), [name, members, type, readOnly, description, broadcast, encrypted, createTeam, onClose]);
  return {
    name: name,
    nameError: nameError,
    onChangeName: onChangeName,
    description: description,
    onChangeDescription: onChangeDescription,
    type: type,
    onChangeType: onChangeType,
    readOnly: readOnly,
    canChangeReadOnly: canChangeReadOnly,
    onChangeReadOnly: onChangeReadOnly,
    encrypted: encrypted,
    canChangeEncrypted: canChangeEncrypted,
    onChangeEncrypted: onChangeEncrypted,
    broadcast: broadcast,
    onChangeBroadcast: onChangeBroadcast,
    members: members,
    onChangeMembers: onChangeMembers,
    hasUnsavedChanges: hasUnsavedChanges,
    isCreateButtonEnabled: isCreateButtonEnabled,
    onCreate: onCreate
  };
};

var CreateTeamModal = function (_ref) {
  var onClose = _ref.onClose;

  var _useCreateTeamModalSt = useCreateTeamModalState(onClose),
      name = _useCreateTeamModalSt.name,
      nameError = _useCreateTeamModalSt.nameError,
      onChangeName = _useCreateTeamModalSt.onChangeName,
      description = _useCreateTeamModalSt.description,
      onChangeDescription = _useCreateTeamModalSt.onChangeDescription,
      type = _useCreateTeamModalSt.type,
      onChangeType = _useCreateTeamModalSt.onChangeType,
      readOnly = _useCreateTeamModalSt.readOnly,
      canChangeReadOnly = _useCreateTeamModalSt.canChangeReadOnly,
      onChangeReadOnly = _useCreateTeamModalSt.onChangeReadOnly,
      encrypted = _useCreateTeamModalSt.encrypted,
      canChangeEncrypted = _useCreateTeamModalSt.canChangeEncrypted,
      onChangeEncrypted = _useCreateTeamModalSt.onChangeEncrypted,
      broadcast = _useCreateTeamModalSt.broadcast,
      onChangeBroadcast = _useCreateTeamModalSt.onChangeBroadcast,
      members = _useCreateTeamModalSt.members,
      onChangeMembers = _useCreateTeamModalSt.onChangeMembers,
      hasUnsavedChanges = _useCreateTeamModalSt.hasUnsavedChanges,
      isCreateButtonEnabled = _useCreateTeamModalSt.isCreateButtonEnabled,
      onCreate = _useCreateTeamModalSt.onCreate;

  var t = useTranslation();
  var focusRef = useAutoFocus();
  return /*#__PURE__*/React.createElement(Modal, null, /*#__PURE__*/React.createElement(Modal.Header, null, /*#__PURE__*/React.createElement(Modal.Title, null, t('Teams_New_Title')), /*#__PURE__*/React.createElement(Modal.Close, {
    onClick: onClose
  })), /*#__PURE__*/React.createElement(Modal.Content, null, /*#__PURE__*/React.createElement(FieldGroup, null, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Teams_New_Name_Label')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TeamNameInput, {
    ref: focusRef,
    "private": type,
    error: hasUnsavedChanges ? nameError : undefined,
    value: name,
    onChange: onChangeName
  })), hasUnsavedChanges && nameError && /*#__PURE__*/React.createElement(Field.Error, null, nameError)), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Teams_New_Description_Label'), ' ', /*#__PURE__*/React.createElement(Box, {
    is: "span",
    color: "neutral-600"
  }, "(", t('optional'), ")")), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    placeholder: t('Teams_New_Description_Placeholder'),
    value: description,
    onChange: onChangeDescription
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start"
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    width: "full"
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Teams_New_Private_Label')), /*#__PURE__*/React.createElement(Field.Description, null, type ? t('Teams_New_Private_Description_Enabled') : t('Teams_New_Private_Description_Disabled'))), /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: type,
    onChange: onChangeType
  }))), /*#__PURE__*/React.createElement(Field, {
    disabled: !canChangeReadOnly
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start"
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    width: "full"
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Teams_New_Read_only_Label')), /*#__PURE__*/React.createElement(Field.Description, null, readOnly ? t('Only_authorized_users_can_write_new_messages') : t('Teams_New_Read_only_Description'))), /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: readOnly,
    disabled: !canChangeReadOnly,
    onChange: onChangeReadOnly
  }))), /*#__PURE__*/React.createElement(Field, {
    disabled: !canChangeEncrypted
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start"
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    width: "full"
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Teams_New_Encrypted_Label')), /*#__PURE__*/React.createElement(Field.Description, null, type ? t('Teams_New_Encrypted_Description_Enabled') : t('Teams_New_Encrypted_Description_Disabled'))), /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: encrypted,
    disabled: !canChangeEncrypted,
    onChange: onChangeEncrypted
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "start"
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column",
    width: "full"
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Teams_New_Broadcast_Label')), /*#__PURE__*/React.createElement(Field.Description, null, t('Teams_New_Broadcast_Description'))), /*#__PURE__*/React.createElement(ToggleSwitch, {
    checked: broadcast,
    onChange: onChangeBroadcast
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Teams_New_Add_members_Label'), ' ', /*#__PURE__*/React.createElement(Box, {
    is: "span",
    color: "neutral-600"
  }, "(", t('optional'), ")")), /*#__PURE__*/React.createElement(UsersInput, {
    value: members,
    onChange: onChangeMembers
  })))), /*#__PURE__*/React.createElement(Modal.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    align: "end"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onClose
  }, t('Cancel')), /*#__PURE__*/React.createElement(Button, {
    disabled: !isCreateButtonEnabled,
    onClick: onCreate,
    primary: true
  }, t('Create')))));
};

module.exportDefault( /*#__PURE__*/memo(CreateTeamModal));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/CreateTeamModal/898b0c36049f850f36ccef33f8ecfb2ad1be3d5a.map
