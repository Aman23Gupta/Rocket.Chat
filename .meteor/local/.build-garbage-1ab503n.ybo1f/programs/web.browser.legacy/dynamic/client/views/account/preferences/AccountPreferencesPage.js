function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/preferences/AccountPreferencesPage.js                                                          //
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
var ButtonGroup, Button, Box, Accordion;
module.link("@rocket.chat/fuselage", {
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Button: function (v) {
    Button = v;
  },
  Box: function (v) {
    Box = v;
  },
  Accordion: function (v) {
    Accordion = v;
  }
}, 0);
var React, useState, useCallback, useRef;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useRef: function (v) {
    useRef = v;
  }
}, 1);
var Page;
module.link("../../../components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 2);
var useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 3);
var useSetting;
module.link("../../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 4);
var useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 5);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 6);
var PreferencesGlobalSection;
module.link("./PreferencesGlobalSection", {
  "default": function (v) {
    PreferencesGlobalSection = v;
  }
}, 7);
var PreferencesHighlightsSection;
module.link("./PreferencesHighlightsSection", {
  "default": function (v) {
    PreferencesHighlightsSection = v;
  }
}, 8);
var PreferencesLocalizationSection;
module.link("./PreferencesLocalizationSection", {
  "default": function (v) {
    PreferencesLocalizationSection = v;
  }
}, 9);
var PreferencesMessagesSection;
module.link("./PreferencesMessagesSection", {
  "default": function (v) {
    PreferencesMessagesSection = v;
  }
}, 10);
var PreferencesMyDataSection;
module.link("./PreferencesMyDataSection", {
  "default": function (v) {
    PreferencesMyDataSection = v;
  }
}, 11);
var PreferencesNotificationsSection;
module.link("./PreferencesNotificationsSection", {
  "default": function (v) {
    PreferencesNotificationsSection = v;
  }
}, 12);
var PreferencesSoundSection;
module.link("./PreferencesSoundSection", {
  "default": function (v) {
    PreferencesSoundSection = v;
  }
}, 13);
var PreferencesUserPresenceSection;
module.link("./PreferencesUserPresenceSection", {
  "default": function (v) {
    PreferencesUserPresenceSection = v;
  }
}, 14);

var AccountPreferencesPage = function () {
  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      hasAnyChange = _useState2[0],
      setHasAnyChange = _useState2[1];

  var saveData = useRef({});
  var commitRef = useRef({});
  var dataDownloadEnabled = useSetting('UserData_EnableDownload');
  var onChange = useCallback(function (_ref) {
    var initialValue = _ref.initialValue,
        value = _ref.value,
        key = _ref.key;
    var current = saveData.current;

    if (JSON.stringify(initialValue) !== JSON.stringify(value)) {
      current[key] = value;
    } else {
      delete current[key];
    }

    var anyChange = !!Object.values(current).length;

    if (anyChange !== hasAnyChange) {
      setHasAnyChange(anyChange);
    }
  }, [hasAnyChange]);
  var saveFn = useMethod('saveUserPreferences');
  var handleSave = useCallback(function () {
    function _callee() {
      var data, list;
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                data = saveData.current;

                if (data.highlights || data.highlights === '') {
                  Object.assign(data, {
                    highlights: data.highlights.split(/,|\n/).map(function (val) {
                      return val.trim();
                    }).filter(Boolean)
                  });
                }

                if (data.dontAskAgainList) {
                  list = Array.isArray(data.dontAskAgainList) && data.dontAskAgainList.length > 0 ? data.dontAskAgainList.map(function (_ref2) {
                    var _ref3 = _slicedToArray(_ref2, 2),
                        action = _ref3[0],
                        label = _ref3[1];

                    return {
                      action: action,
                      label: label
                    };
                  }) : [];
                  Object.assign(data, {
                    dontAskAgainList: list
                  });
                }

                _context.next = 6;
                return _regeneratorRuntime.awrap(saveFn(data));

              case 6:
                saveData.current = {};
                setHasAnyChange(false);
                Object.values(commitRef.current).forEach(function (fn) {
                  return fn();
                });
                dispatchToastMessage({
                  type: 'success',
                  message: t('Preferences_saved')
                });
                _context.next = 15;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](0);
                dispatchToastMessage({
                  type: 'error',
                  message: _context.t0
                });

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[0, 12]], Promise);
    }

    return _callee;
  }(), [dispatchToastMessage, saveFn, t]);
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Preferences')
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    disabled: !hasAnyChange,
    onClick: handleSave
  }, t('Save_changes')))), /*#__PURE__*/React.createElement(Page.ScrollableContentWithShadow, null, /*#__PURE__*/React.createElement(Box, {
    maxWidth: "x600",
    w: "full",
    alignSelf: "center"
  }, /*#__PURE__*/React.createElement(Accordion, null, /*#__PURE__*/React.createElement(PreferencesLocalizationSection, {
    commitRef: commitRef,
    onChange: onChange,
    defaultExpanded: true
  }), /*#__PURE__*/React.createElement(PreferencesGlobalSection, {
    commitRef: commitRef,
    onChange: onChange
  }), /*#__PURE__*/React.createElement(PreferencesUserPresenceSection, {
    commitRef: commitRef,
    onChange: onChange
  }), /*#__PURE__*/React.createElement(PreferencesNotificationsSection, {
    commitRef: commitRef,
    onChange: onChange
  }), /*#__PURE__*/React.createElement(PreferencesMessagesSection, {
    commitRef: commitRef,
    onChange: onChange
  }), /*#__PURE__*/React.createElement(PreferencesHighlightsSection, {
    commitRef: commitRef,
    onChange: onChange
  }), /*#__PURE__*/React.createElement(PreferencesSoundSection, {
    commitRef: commitRef,
    onChange: onChange
  }), dataDownloadEnabled && /*#__PURE__*/React.createElement(PreferencesMyDataSection, {
    onChange: onChange
  })))));
};

module.exportDefault(AccountPreferencesPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/account/preferences/347ec8374926c52f842b39984cf10782ba9de42a.map
