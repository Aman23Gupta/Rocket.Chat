function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/settings/Section.js                                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Accordion, Box, Button, FieldGroup;
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

  FieldGroup(v) {
    FieldGroup = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 2);
let useEditableSettings, useEditableSettingsDispatch;
module.link("../../../contexts/EditableSettingsContext", {
  useEditableSettings(v) {
    useEditableSettings = v;
  },

  useEditableSettingsDispatch(v) {
    useEditableSettingsDispatch = v;
  }

}, 3);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 4);
let SectionSkeleton;
module.link("./SectionSkeleton", {
  default(v) {
    SectionSkeleton = v;
  }

}, 5);
let Setting;
module.link("./Setting", {
  default(v) {
    Setting = v;
  }

}, 6);

function Section(_ref) {
  let {
    children = undefined,
    groupId,
    hasReset = true,
    help = undefined,
    sectionName,
    tabName,
    solo
  } = _ref;
  const editableSettings = useEditableSettings(useMemo(() => ({
    group: groupId,
    section: sectionName,
    tab: tabName
  }), [groupId, sectionName, tabName]));
  const changed = useMemo(() => editableSettings.some(_ref2 => {
    let {
      changed
    } = _ref2;
    return changed;
  }), [editableSettings]);
  const canReset = useMemo(() => editableSettings.some(_ref3 => {
    let {
      value,
      packageValue
    } = _ref3;
    return JSON.stringify(value) !== JSON.stringify(packageValue);
  }), [editableSettings]);
  const dispatch = useEditableSettingsDispatch();
  const reset = useMutableCallback(() => {
    dispatch(editableSettings.filter(_ref4 => {
      let {
        disabled
      } = _ref4;
      return !disabled;
    }).map(_ref5 => {
      let {
        _id,
        value,
        packageValue,
        editor,
        packageEditor
      } = _ref5;
      return {
        _id,
        value: packageValue,
        editor: packageEditor,
        changed: JSON.stringify(value) !== JSON.stringify(packageValue) || JSON.stringify(editor) !== JSON.stringify(packageEditor)
      };
    }));
  });
  const t = useTranslation();

  const handleResetSectionClick = () => {
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
  }, help), /*#__PURE__*/React.createElement(FieldGroup, null, editableSettings.map(setting => /*#__PURE__*/React.createElement(Setting, {
    key: setting._id,
    settingId: setting._id,
    sectionChanged: changed
  })), children), hasReset && canReset && /*#__PURE__*/React.createElement(Button, {
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
//# sourceMappingURL=/dynamic/client/views/admin/settings/e909fc275387930865bda1992221961764c96f3a.map
