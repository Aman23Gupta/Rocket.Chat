function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/settings/GroupPage.js                                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Accordion, Box, Button, ButtonGroup;
module.link("@rocket.chat/fuselage", {
  Accordion(v) {
    Accordion = v;
  },

  Box(v) {
    Box = v;
  },

  Button(v) {
    Button = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React, useMemo, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  memo(v) {
    memo = v;
  }

}, 2);
let Page;
module.link("../../../components/Page", {
  default(v) {
    Page = v;
  }

}, 3);
let useEditableSettingsDispatch, useEditableSettings;
module.link("../../../contexts/EditableSettingsContext", {
  useEditableSettingsDispatch(v) {
    useEditableSettingsDispatch = v;
  },

  useEditableSettings(v) {
    useEditableSettings = v;
  }

}, 4);
let useSettingsDispatch, useSettings;
module.link("../../../contexts/SettingsContext", {
  useSettingsDispatch(v) {
    useSettingsDispatch = v;
  },

  useSettings(v) {
    useSettings = v;
  }

}, 5);
let useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 6);
let useTranslation, useLoadLanguage;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  },

  useLoadLanguage(v) {
    useLoadLanguage = v;
  }

}, 7);
let useUser;
module.link("../../../contexts/UserContext", {
  useUser(v) {
    useUser = v;
  }

}, 8);
let GroupPageSkeleton;
module.link("./GroupPageSkeleton", {
  default(v) {
    GroupPageSkeleton = v;
  }

}, 9);

function GroupPage(_ref) {
  let {
    children = undefined,
    headerButtons = undefined,
    _id,
    i18nLabel,
    i18nDescription = undefined,
    tabs = undefined
  } = _ref;
  const changedEditableSettings = useEditableSettings(useMemo(() => ({
    group: _id,
    changed: true
  }), [_id]));
  const originalSettings = useSettings(useMemo(() => ({
    _id: changedEditableSettings.map(_ref2 => {
      let {
        _id
      } = _ref2;
      return _id;
    })
  }), [changedEditableSettings]));
  const dispatch = useSettingsDispatch();
  const dispatchToastMessage = useToastMessageDispatch();
  const t = useTranslation();
  const loadLanguage = useLoadLanguage();
  const user = useUser();
  const save = useMutableCallback(async () => {
    const changes = changedEditableSettings.map(_ref3 => {
      let {
        _id,
        value,
        editor
      } = _ref3;
      return {
        _id,
        value,
        editor
      };
    });

    if (changes.length === 0) {
      return;
    }

    try {
      await dispatch(changes);

      if (changes.some(_ref4 => {
        let {
          _id
        } = _ref4;
        return _id === 'Language';
      })) {
        var _changes$filter$shift;

        const lng = (user === null || user === void 0 ? void 0 : user.language) || ((_changes$filter$shift = changes.filter(_ref5 => {
          let {
            _id
          } = _ref5;
          return _id === 'Language';
        }).shift()) === null || _changes$filter$shift === void 0 ? void 0 : _changes$filter$shift.value) || 'en';
        await loadLanguage(lng);
        dispatchToastMessage({
          type: 'success',
          message: t('Settings_updated', {
            lng
          })
        });
        return;
      }

      dispatchToastMessage({
        type: 'success',
        message: t('Settings_updated')
      });
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }
  });
  const dispatchToEditing = useEditableSettingsDispatch();
  const cancel = useMutableCallback(() => {
    dispatchToEditing(changedEditableSettings.map(_ref6 => {
      let {
        _id
      } = _ref6;
      return originalSettings.find(setting => setting._id === _id);
    }).map(setting => {
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

  const handleSubmit = event => {
    event.preventDefault();
    save();
  };

  const handleCancelClick = event => {
    event.preventDefault();
    cancel();
  };

  const handleSaveClick = event => {
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
//# sourceMappingURL=/dynamic/client/views/admin/settings/ce9c4f414eb51a66b4f448b9b2912594a0852f48.map
