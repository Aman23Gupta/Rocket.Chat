function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/SortList/ViewModeList.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let ToggleSwitch, RadioButton, OptionTitle;
module.link("@rocket.chat/fuselage", {
  ToggleSwitch(v) {
    ToggleSwitch = v;
  },

  RadioButton(v) {
    RadioButton = v;
  },

  OptionTitle(v) {
    OptionTitle = v;
  }

}, 0);
let React, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  }

}, 1);
let useMethod;
module.link("../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 2);
let useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let useUserPreference;
module.link("../../contexts/UserContext", {
  useUserPreference(v) {
    useUserPreference = v;
  }

}, 4);
let ListItem;
module.link("../Sidebar/ListItem", {
  default(v) {
    ListItem = v;
  }

}, 5);
const style = {
  textTransform: 'uppercase'
};
const checkBoxStyle = {
  paddingLeft: '24px',
  paddingInlineStart: '24px'
};

function ViewModeList() {
  const t = useTranslation();
  const saveUserPreferences = useMethod('saveUserPreferences');

  const useHandleChange = value => useCallback(() => saveUserPreferences({
    sidebarViewMode: value
  }), [value]);

  const sidebarViewMode = useUserPreference('sidebarViewMode', 'extended');
  const sidebarDisplayAvatar = useUserPreference('sidebarDisplayAvatar', false);
  const setToExtended = useHandleChange('extended');
  const setToMedium = useHandleChange('medium');
  const setToCondensed = useHandleChange('condensed');
  const handleChangeSidebarDisplayAvatar = useCallback(() => saveUserPreferences({
    sidebarDisplayAvatar: !sidebarDisplayAvatar
  }), [saveUserPreferences, sidebarDisplayAvatar]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(OptionTitle, {
    style: style
  }, t('Display')), /*#__PURE__*/React.createElement("ul", {
    className: "rc-popover__list"
  }, /*#__PURE__*/React.createElement(ListItem, {
    icon: 'extended-view',
    text: t('Extended'),
    input: /*#__PURE__*/React.createElement(RadioButton, {
      style: checkBoxStyle,
      onChange: setToExtended,
      name: "sidebarViewMode",
      value: "extended",
      checked: sidebarViewMode === 'extended'
    })
  }), /*#__PURE__*/React.createElement(ListItem, {
    icon: 'medium-view',
    text: t('Medium'),
    input: /*#__PURE__*/React.createElement(RadioButton, {
      style: checkBoxStyle,
      onChange: setToMedium,
      name: "sidebarViewMode",
      value: "medium",
      checked: sidebarViewMode === 'medium'
    })
  }), /*#__PURE__*/React.createElement(ListItem, {
    icon: 'condensed-view',
    text: t('Condensed'),
    input: /*#__PURE__*/React.createElement(RadioButton, {
      style: checkBoxStyle,
      onChange: setToCondensed,
      name: "sidebarViewMode",
      value: "condensed",
      checked: sidebarViewMode === 'condensed'
    })
  }), /*#__PURE__*/React.createElement(ListItem, {
    icon: 'user-rounded',
    text: t('Avatars'),
    input: /*#__PURE__*/React.createElement(ToggleSwitch, {
      style: checkBoxStyle,
      onChange: handleChangeSidebarDisplayAvatar,
      name: "sidebarDisplayAvatar",
      checked: sidebarDisplayAvatar
    })
  })));
}

module.exportDefault(ViewModeList);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/SortList/e448a8d5a3a33e4efdac2653121114456494452c.map
