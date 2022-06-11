function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/settings/Setting.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 1);
let useDebouncedCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useDebouncedCallback(v) {
    useDebouncedCallback = v;
  }

}, 0);
let React, useEffect, useMemo, useState, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useState(v) {
    useState = v;
  },

  useCallback(v) {
    useCallback = v;
  }

}, 1);
let MarkdownText;
module.link("../../../components/MarkdownText", {
  default(v) {
    MarkdownText = v;
  }

}, 2);
let useEditableSetting, useEditableSettingsDispatch;
module.link("../../../contexts/EditableSettingsContext", {
  useEditableSetting(v) {
    useEditableSetting = v;
  },

  useEditableSettingsDispatch(v) {
    useEditableSettingsDispatch = v;
  }

}, 3);
let useSettingStructure;
module.link("../../../contexts/SettingsContext", {
  useSettingStructure(v) {
    useSettingStructure = v;
  }

}, 4);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 5);
let MemoizedSetting;
module.link("./MemoizedSetting", {
  default(v) {
    MemoizedSetting = v;
  }

}, 6);
let SettingSkeleton;
module.link("./SettingSkeleton", {
  default(v) {
    SettingSkeleton = v;
  }

}, 7);

function Setting(_ref) {
  let {
    className,
    settingId,
    sectionChanged
  } = _ref;
  const setting = useEditableSetting(settingId);
  const persistedSetting = useSettingStructure(settingId);
  const dispatch = useEditableSettingsDispatch();
  const update = useDebouncedCallback(_ref2 => {
    let {
      value,
      editor
    } = _ref2;

    if (!persistedSetting) {
      return;
    }

    dispatch([_objectSpread(_objectSpread(_objectSpread({
      _id: persistedSetting._id
    }, value !== undefined && {
      value
    }), editor !== undefined && {
      editor
    }), {}, {
      changed: JSON.stringify(persistedSetting.value) !== JSON.stringify(value) || JSON.stringify(persistedSetting.editor) !== JSON.stringify(editor)
    })]);
  }, 230, [persistedSetting, dispatch]);
  const t = useTranslation();
  const [value, setValue] = useState(setting.value);
  const [editor, setEditor] = useState(setting.editor);
  useEffect(() => {
    setValue(setting.value);
  }, [setting.value]);
  useEffect(() => {
    setEditor(setting.editor);
  }, [setting.editor]);
  const onChangeValue = useCallback(value => {
    setValue(value);
    update({
      value
    });
  }, [update]);
  const onChangeEditor = useCallback(editor => {
    setEditor(editor);
    update({
      editor
    });
  }, [update]);
  const onResetButtonClick = useCallback(() => {
    setValue(setting.value);
    setEditor(setting.editor);
    update({
      value: persistedSetting.packageValue,
      editor: persistedSetting.packageEditor
    });
  }, [setting.value, setting.editor, update, persistedSetting]);
  const {
    _id,
    disabled,
    disableReset,
    readonly,
    type,
    packageEditor,
    packageValue,
    i18nLabel,
    i18nDescription,
    alert,
    invisible
  } = setting;
  const label = i18nLabel && t(i18nLabel) || _id || t(_id);
  const hint = useMemo(() => t.has(i18nDescription) && /*#__PURE__*/React.createElement(MarkdownText, {
    preserveHtml: true,
    content: t(i18nDescription)
  }), [i18nDescription, t]);
  const callout = useMemo(() => alert && /*#__PURE__*/React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: t(alert)
    }
  }), [alert, t]);
  const hasResetButton = !disableReset && !readonly && type !== 'asset' && (JSON.stringify(packageEditor) !== JSON.stringify(editor) || JSON.stringify(value) !== JSON.stringify(packageValue)) && !disabled;
  return /*#__PURE__*/React.createElement(MemoizedSetting, _extends({
    className: className,
    type: type,
    label: label,
    hint: hint,
    callout: callout,
    sectionChanged: sectionChanged
  }, setting, {
    value: value,
    editor: editor,
    hasResetButton: hasResetButton,
    onChangeValue: onChangeValue,
    onChangeEditor: onChangeEditor,
    onResetButtonClick: onResetButtonClick,
    invisible: invisible
  }));
}

module.exportDefault(Object.assign(Setting, {
  Memoized: MemoizedSetting,
  Skeleton: SettingSkeleton
}));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/settings/7664a63d60e6982d23706cc10f38e336cad6fd48.map
