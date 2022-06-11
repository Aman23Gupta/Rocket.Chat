function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/SortList/SortModeList.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let RadioButton, OptionTitle;
module.link("@rocket.chat/fuselage", {
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

function SortModeList() {
  const t = useTranslation();
  const saveUserPreferences = useMethod('saveUserPreferences');
  const sidebarSortBy = useUserPreference('sidebarSortby', 'activity');

  const useHandleChange = value => useCallback(() => saveUserPreferences({
    sidebarSortby: value
  }), [value]);

  const setToAlphabetical = useHandleChange('alphabetical');
  const setToActivity = useHandleChange('activity');
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(OptionTitle, {
    style: style
  }, t('Sort_By')), /*#__PURE__*/React.createElement("ul", {
    className: "rc-popover__list"
  }, /*#__PURE__*/React.createElement(ListItem, {
    icon: 'clock',
    text: t('Activity'),
    input: /*#__PURE__*/React.createElement(RadioButton, {
      style: checkBoxStyle,
      name: "sidebarSortby",
      onChange: setToActivity,
      checked: sidebarSortBy === 'activity'
    })
  }), /*#__PURE__*/React.createElement(ListItem, {
    icon: 'sort-az',
    text: t('Name'),
    input: /*#__PURE__*/React.createElement(RadioButton, {
      style: checkBoxStyle,
      name: "sidebarSortby",
      onChange: setToAlphabetical,
      checked: sidebarSortBy === 'alphabetical'
    })
  })));
}

module.exportDefault(SortModeList);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/SortList/7e9d7351d43f4620ab8a80b369f1d52be1e20342.map
