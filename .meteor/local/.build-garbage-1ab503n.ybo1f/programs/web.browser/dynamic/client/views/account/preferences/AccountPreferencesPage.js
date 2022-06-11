function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/account/preferences/AccountPreferencesPage.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let ButtonGroup, Button, Box, Accordion;
module.link("@rocket.chat/fuselage", {
  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Button(v) {
    Button = v;
  },

  Box(v) {
    Box = v;
  },

  Accordion(v) {
    Accordion = v;
  }

}, 0);
let React, useState, useCallback, useRef;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useRef(v) {
    useRef = v;
  }

}, 1);
let Page;
module.link("../../../components/Page", {
  default(v) {
    Page = v;
  }

}, 2);
let useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 3);
let useSetting;
module.link("../../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 4);
let useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 5);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 6);
let PreferencesGlobalSection;
module.link("./PreferencesGlobalSection", {
  default(v) {
    PreferencesGlobalSection = v;
  }

}, 7);
let PreferencesHighlightsSection;
module.link("./PreferencesHighlightsSection", {
  default(v) {
    PreferencesHighlightsSection = v;
  }

}, 8);
let PreferencesLocalizationSection;
module.link("./PreferencesLocalizationSection", {
  default(v) {
    PreferencesLocalizationSection = v;
  }

}, 9);
let PreferencesMessagesSection;
module.link("./PreferencesMessagesSection", {
  default(v) {
    PreferencesMessagesSection = v;
  }

}, 10);
let PreferencesMyDataSection;
module.link("./PreferencesMyDataSection", {
  default(v) {
    PreferencesMyDataSection = v;
  }

}, 11);
let PreferencesNotificationsSection;
module.link("./PreferencesNotificationsSection", {
  default(v) {
    PreferencesNotificationsSection = v;
  }

}, 12);
let PreferencesSoundSection;
module.link("./PreferencesSoundSection", {
  default(v) {
    PreferencesSoundSection = v;
  }

}, 13);
let PreferencesUserPresenceSection;
module.link("./PreferencesUserPresenceSection", {
  default(v) {
    PreferencesUserPresenceSection = v;
  }

}, 14);

const AccountPreferencesPage = () => {
  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  const [hasAnyChange, setHasAnyChange] = useState(false);
  const saveData = useRef({});
  const commitRef = useRef({});
  const dataDownloadEnabled = useSetting('UserData_EnableDownload');
  const onChange = useCallback(_ref => {
    let {
      initialValue,
      value,
      key
    } = _ref;
    const {
      current
    } = saveData;

    if (JSON.stringify(initialValue) !== JSON.stringify(value)) {
      current[key] = value;
    } else {
      delete current[key];
    }

    const anyChange = !!Object.values(current).length;

    if (anyChange !== hasAnyChange) {
      setHasAnyChange(anyChange);
    }
  }, [hasAnyChange]);
  const saveFn = useMethod('saveUserPreferences');
  const handleSave = useCallback(async () => {
    try {
      const {
        current: data
      } = saveData;

      if (data.highlights || data.highlights === '') {
        Object.assign(data, {
          highlights: data.highlights.split(/,|\n/).map(val => val.trim()).filter(Boolean)
        });
      }

      if (data.dontAskAgainList) {
        const list = Array.isArray(data.dontAskAgainList) && data.dontAskAgainList.length > 0 ? data.dontAskAgainList.map(_ref2 => {
          let [action, label] = _ref2;
          return {
            action,
            label
          };
        }) : [];
        Object.assign(data, {
          dontAskAgainList: list
        });
      }

      await saveFn(data);
      saveData.current = {};
      setHasAnyChange(false);
      Object.values(commitRef.current).forEach(fn => fn());
      dispatchToastMessage({
        type: 'success',
        message: t('Preferences_saved')
      });
    } catch (e) {
      dispatchToastMessage({
        type: 'error',
        message: e
      });
    }
  }, [dispatchToastMessage, saveFn, t]);
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
//# sourceMappingURL=/dynamic/client/views/account/preferences/a6f24678eec62cff2af48336e3d5233ff063df65.map
