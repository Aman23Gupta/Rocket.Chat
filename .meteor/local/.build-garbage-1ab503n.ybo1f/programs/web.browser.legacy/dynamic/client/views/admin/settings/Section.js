function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/settings/Section.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Accordion, Box, Button, FieldGroup;
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
  FieldGroup: function (v) {
    FieldGroup = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 2);
var useEditableSettings, useEditableSettingsDispatch;
module.link("../../../contexts/EditableSettingsContext", {
  useEditableSettings: function (v) {
    useEditableSettings = v;
  },
  useEditableSettingsDispatch: function (v) {
    useEditableSettingsDispatch = v;
  }
}, 3);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 4);
var SectionSkeleton;
module.link("./SectionSkeleton", {
  "default": function (v) {
    SectionSkeleton = v;
  }
}, 5);
var Setting;
module.link("./Setting", {
  "default": function (v) {
    Setting = v;
  }
}, 6);

function Section(_ref) {
  var _ref$children = _ref.children,
      children = _ref$children === void 0 ? undefined : _ref$children,
      groupId = _ref.groupId,
      _ref$hasReset = _ref.hasReset,
      hasReset = _ref$hasReset === void 0 ? true : _ref$hasReset,
      _ref$help = _ref.help,
      help = _ref$help === void 0 ? undefined : _ref$help,
      sectionName = _ref.sectionName,
      tabName = _ref.tabName,
      solo = _ref.solo;
  var editableSettings = useEditableSettings(useMemo(function () {
    return {
      group: groupId,
      section: sectionName,
      tab: tabName
    };
  }, [groupId, sectionName, tabName]));
  var changed = useMemo(function () {
    return editableSettings.some(function (_ref2) {
      var changed = _ref2.changed;
      return changed;
    });
  }, [editableSettings]);
  var canReset = useMemo(function () {
    return editableSettings.some(function (_ref3) {
      var value = _ref3.value,
          packageValue = _ref3.packageValue;
      return JSON.stringify(value) !== JSON.stringify(packageValue);
    });
  }, [editableSettings]);
  var dispatch = useEditableSettingsDispatch();
  var reset = useMutableCallback(function () {
    dispatch(editableSettings.filter(function (_ref4) {
      var disabled = _ref4.disabled;
      return !disabled;
    }).map(function (_ref5) {
      var _id = _ref5._id,
          value = _ref5.value,
          packageValue = _ref5.packageValue,
          editor = _ref5.editor,
          packageEditor = _ref5.packageEditor;
      return {
        _id: _id,
        value: packageValue,
        editor: packageEditor,
        changed: JSON.stringify(value) !== JSON.stringify(packageValue) || JSON.stringify(editor) !== JSON.stringify(packageEditor)
      };
    }));
  });
  var t = useTranslation();

  var handleResetSectionClick = function () {
    reset();
  };

  return /*#__PURE__*/React.createElement(Accordion.Item, {
    "data-qa-section": sectionName,
    noncollapsible: solo || !sectionName,
    title: sectionName && t(sectionName)
  }, help && /*#__PURE__*/React.createElement(Box, {
    is: "p",
    color: "hint",
    fontScale: "p2"
  }, help), /*#__PURE__*/React.createElement(FieldGroup, null, editableSettings.map(function (setting) {
    return /*#__PURE__*/React.createElement(Setting, {
      key: setting._id,
      settingId: setting._id,
      sectionChanged: changed
    });
  }), children), hasReset && canReset && /*#__PURE__*/React.createElement(Button, {
    children: t('Reset_section_settings'),
    danger: true,
    marginBlockStart: 'x16',
    "data-section": sectionName,
    onClick: handleResetSectionClick
  }));
}

module.exportDefault(Object.assign(Section, {
  Skeleton: SectionSkeleton
}));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/settings/cf81882bc91afa6463a6e471003195640634dc34.map
