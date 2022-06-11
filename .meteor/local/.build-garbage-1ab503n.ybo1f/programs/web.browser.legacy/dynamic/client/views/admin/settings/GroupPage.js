function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/settings/GroupPage.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);
var Accordion, Box, Button, ButtonGroup;
module.link("@rocket.chat/fuselage", {
  Accordion: function (v) {
    Accordion = v;
  },
  Box: function (v) {
    Box = v;
  },
  Button: function (v) {
    Button = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React, useMemo, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 2);
var Page;
module.link("../../../components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 3);
var useEditableSettingsDispatch, useEditableSettings;
module.link("../../../contexts/EditableSettingsContext", {
  useEditableSettingsDispatch: function (v) {
    useEditableSettingsDispatch = v;
  },
  useEditableSettings: function (v) {
    useEditableSettings = v;
  }
}, 4);
var useSettingsDispatch, useSettings;
module.link("../../../contexts/SettingsContext", {
  useSettingsDispatch: function (v) {
    useSettingsDispatch = v;
  },
  useSettings: function (v) {
    useSettings = v;
  }
}, 5);
var useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 6);
var useTranslation, useLoadLanguage;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  },
  useLoadLanguage: function (v) {
    useLoadLanguage = v;
  }
}, 7);
var useUser;
module.link("../../../contexts/UserContext", {
  useUser: function (v) {
    useUser = v;
  }
}, 8);
var GroupPageSkeleton;
module.link("./GroupPageSkeleton", {
  "default": function (v) {
    GroupPageSkeleton = v;
  }
}, 9);

function GroupPage(_ref) {
  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? undefined : _ref$children,
      _ref$headerButtons = _ref.headerButtons,
      headerButtons = _ref$headerButtons === void 0 ? undefined : _ref$headerButtons,
      _id = _ref._id,
      i18nLabel = _ref.i18nLabel,
      _ref$i18nDescription = _ref.i18nDescription,
      i18nDescription = _ref$i18nDescription === void 0 ? undefined : _ref$i18nDescription,
      _ref$tabs = _ref.tabs,
      tabs = _ref$tabs === void 0 ? undefined : _ref$tabs;
  var changedEditableSettings = useEditableSettings(useMemo(function () {
    return {
      group: _id,
      changed: true
    };
  }, [_id]));
  var originalSettings = useSettings(useMemo(function () {
    return {
      _id: changedEditableSettings.map(function (_ref2) {
        var _id = _ref2._id;
        return _id;
      })
    };
  }, [changedEditableSettings]));
  var dispatch = useSettingsDispatch();
  var dispatchToastMessage = useToastMessageDispatch();
  var t = useTranslation();
  var loadLanguage = useLoadLanguage();
  var user = useUser();
  var save = useMutableCallback(function () {
    function _callee() {
      var changes, _changes$filter$shift, lng;

      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                changes = changedEditableSettings.map(function (_ref3) {
                  var _id = _ref3._id,
                      value = _ref3.value,
                      editor = _ref3.editor;
                  return {
                    _id: _id,
                    value: value,
                    editor: editor
                  };
                });

                if (!(changes.length === 0)) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                _context.prev = 3;
                _context.next = 6;
                return _regeneratorRuntime.awrap(dispatch(changes));

              case 6:
                if (!changes.some(function (_ref4) {
                  var _id = _ref4._id;
                  return _id === 'Language';
                })) {
                  _context.next = 12;
                  break;
                }

                lng = (user === null || user === void 0 ? void 0 : user.language) || ((_changes$filter$shift = changes.filter(function (_ref5) {
                  var _id = _ref5._id;
                  return _id === 'Language';
                }).shift()) === null || _changes$filter$shift === void 0 ? void 0 : _changes$filter$shift.value) || 'en';
                _context.next = 10;
                return _regeneratorRuntime.awrap(loadLanguage(lng));

              case 10:
                dispatchToastMessage({
                  type: 'success',
                  message: t('Settings_updated', {
                    lng: lng
                  })
                });
                return _context.abrupt("return");

              case 12:
                dispatchToastMessage({
                  type: 'success',
                  message: t('Settings_updated')
                });
                _context.next = 18;
                break;

              case 15:
                _context.prev = 15;
                _context.t0 = _context["catch"](3);
                dispatchToastMessage({
                  type: 'error',
                  message: _context.t0
                });

              case 18:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[3, 15]], Promise);
    }

    return _callee;
  }());
  var dispatchToEditing = useEditableSettingsDispatch();
  var cancel = useMutableCallback(function () {
    dispatchToEditing(changedEditableSettings.map(function (_ref6) {
      var _id = _ref6._id;
      return originalSettings.find(function (setting) {
        return setting._id === _id;
      });
    }).map(function (setting) {
      if (!setting) {
        return;
      }

      return {
        _id: setting._id,
        value: setting.value,
        editor: setting.editor,
        changed: false
      };
    }).filter(Boolean));
  });

  var handleSubmit = function (event) {
    event.preventDefault();
    save();
  };

  var handleCancelClick = function (event) {
    event.preventDefault();
    cancel();
  };

  var handleSaveClick = function (event) {
    event.preventDefault();
    save();
  };

  if (!_id) {
    return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, null), /*#__PURE__*/React.createElement(Page.Content, null));
  }

  return /*#__PURE__*/React.createElement(Page, {
    is: "form",
    action: "#",
    method: "post",
    onSubmit: handleSubmit
  }, /*#__PURE__*/React.createElement(Page.Header, {
    title: t(i18nLabel)
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, changedEditableSettings.length > 0 && /*#__PURE__*/React.createElement(Button, {
    danger: true,
    primary: true,
    type: "reset",
    onClick: handleCancelClick
  }, t('Cancel')), /*#__PURE__*/React.createElement(Button, {
    children: t('Save_changes'),
    className: "save",
    disabled: changedEditableSettings.length === 0,
    primary: true,
    type: "submit",
    onClick: handleSaveClick
  }), headerButtons)), tabs, /*#__PURE__*/React.createElement(Page.ScrollableContentWithShadow, null, /*#__PURE__*/React.createElement(Box, {
    marginBlock: "none",
    marginInline: "auto",
    width: "full",
    maxWidth: "x580"
  }, t.has(i18nDescription) && /*#__PURE__*/React.createElement(Box, {
    is: "p",
    color: "hint",
    fontScale: "p2"
  }, t(i18nDescription)), /*#__PURE__*/React.createElement(Accordion, {
    className: "page-settings"
  }, children))));
}

module.exportDefault(Object.assign( /*#__PURE__*/memo(GroupPage), {
  Skeleton: GroupPageSkeleton
}));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/settings/4d03b70d5b3c6e514a15ce60501bc72102638289.map
