function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/settings/Setting.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 2);
var useDebouncedCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useDebouncedCallback: function (v) {
    useDebouncedCallback = v;
  }
}, 0);
var React, useEffect, useMemo, useState, useCallback;
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
  },
  useCallback: function (v) {
    useCallback = v;
  }
}, 1);
var MarkdownText;
module.link("../../../components/MarkdownText", {
  "default": function (v) {
    MarkdownText = v;
  }
}, 2);
var useEditableSetting, useEditableSettingsDispatch;
module.link("../../../contexts/EditableSettingsContext", {
  useEditableSetting: function (v) {
    useEditableSetting = v;
  },
  useEditableSettingsDispatch: function (v) {
    useEditableSettingsDispatch = v;
  }
}, 3);
var useSettingStructure;
module.link("../../../contexts/SettingsContext", {
  useSettingStructure: function (v) {
    useSettingStructure = v;
  }
}, 4);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 5);
var MemoizedSetting;
module.link("./MemoizedSetting", {
  "default": function (v) {
    MemoizedSetting = v;
  }
}, 6);
var SettingSkeleton;
module.link("./SettingSkeleton", {
  "default": function (v) {
    SettingSkeleton = v;
  }
}, 7);

function Setting(_ref) {
  var className = _ref.className,
      settingId = _ref.settingId,
      sectionChanged = _ref.sectionChanged;
  var setting = useEditableSetting(settingId);
  var persistedSetting = useSettingStructure(settingId);
  var dispatch = useEditableSettingsDispatch();
  var update = useDebouncedCallback(function (_ref2) {
    var value = _ref2.value,
        editor = _ref2.editor;

    if (!persistedSetting) {
      return;
    }

    dispatch([_objectSpread(_objectSpread(_objectSpread({
      _id: persistedSetting._id
    }, value !== undefined && {
      value: value
    }), editor !== undefined && {
      editor: editor
    }), {}, {
      changed: JSON.stringify(persistedSetting.value) !== JSON.stringify(value) || JSON.stringify(persistedSetting.editor) !== JSON.stringify(editor)
    })]);
  }, 230, [persistedSetting, dispatch]);
  var t = useTranslation();

  var _useState = useState(setting.value),
      _useState2 = _slicedToArray(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = useState(setting.editor),
      _useState4 = _slicedToArray(_useState3, 2),
      editor = _useState4[0],
      setEditor = _useState4[1];

  useEffect(function () {
    setValue(setting.value);
  }, [setting.value]);
  useEffect(function () {
    setEditor(setting.editor);
  }, [setting.editor]);
  var onChangeValue = useCallback(function (value) {
    setValue(value);
    update({
      value: value
    });
  }, [update]);
  var onChangeEditor = useCallback(function (editor) {
    setEditor(editor);
    update({
      editor: editor
    });
  }, [update]);
  var onResetButtonClick = useCallback(function () {
    setValue(setting.value);
    setEditor(setting.editor);
    update({
      value: persistedSetting.packageValue,
      editor: persistedSetting.packageEditor
    });
  }, [setting.value, setting.editor, update, persistedSetting]);
  var _id = setting._id,
      disabled = setting.disabled,
      disableReset = setting.disableReset,
      readonly = setting.readonly,
      type = setting.type,
      packageEditor = setting.packageEditor,
      packageValue = setting.packageValue,
      i18nLabel = setting.i18nLabel,
      i18nDescription = setting.i18nDescription,
      alert = setting.alert,
      invisible = setting.invisible;
  var label = i18nLabel && t(i18nLabel) || _id || t(_id);
  var hint = useMemo(function () {
    return t.has(i18nDescription) && /*#__PURE__*/React.createElement(MarkdownText, {
      preserveHtml: true,
      content: t(i18nDescription)
    });
  }, [i18nDescription, t]);
  var callout = useMemo(function () {
    return alert && /*#__PURE__*/React.createElement("span", {
      dangerouslySetInnerHTML: {
        __html: t(alert)
      }
    });
  }, [alert, t]);
  var hasResetButton = !disableReset && !readonly && type !== 'asset' && (JSON.stringify(packageEditor) !== JSON.stringify(editor) || JSON.stringify(value) !== JSON.stringify(packageValue)) && !disabled;
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
//# sourceMappingURL=/dynamic/client/views/admin/settings/ba1c311e5c3b2642361c22b68a86e4cc230c8d14.map
