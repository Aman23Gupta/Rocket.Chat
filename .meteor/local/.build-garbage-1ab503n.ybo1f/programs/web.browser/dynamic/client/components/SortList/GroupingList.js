function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/SortList/GroupingList.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let CheckBox, OptionTitle;
module.link("@rocket.chat/fuselage", {
  CheckBox(v) {
    CheckBox = v;
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

function GroupingList() {
  const sidebarGroupByType = useUserPreference('sidebarGroupByType');
  const sidebarShowFavorites = useUserPreference('sidebarShowFavorites');
  const sidebarShowUnread = useUserPreference('sidebarShowUnread');
  const saveUserPreferences = useMethod('saveUserPreferences');

  const useHandleChange = (key, value) => useCallback(() => saveUserPreferences({
    [key]: value
  }), [key, value]);

  const handleChangeGroupByType = useHandleChange('sidebarGroupByType', !sidebarGroupByType);
  const handleChangeShoFavorite = useHandleChange('sidebarShowFavorites', !sidebarShowFavorites);
  const handleChangeShowUnread = useHandleChange('sidebarShowUnread', !sidebarShowUnread);
  const t = useTranslation();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(OptionTitle, {
    style: style
  }, t('Group_by')), /*#__PURE__*/React.createElement("ul", {
    className: "rc-popover__list"
  }, /*#__PURE__*/React.createElement(ListItem, {
    icon: 'flag',
    text: t('Unread'),
    input: /*#__PURE__*/React.createElement(CheckBox, {
      style: checkBoxStyle,
      onChange: handleChangeShowUnread,
      name: "sidebarShowUnread",
      checked: sidebarShowUnread
    })
  }), /*#__PURE__*/React.createElement(ListItem, {
    icon: 'star',
    text: t('Favorites'),
    input: /*#__PURE__*/React.createElement(CheckBox, {
      style: checkBoxStyle,
      onChange: handleChangeShoFavorite,
      name: "sidebarShowFavorites",
      checked: sidebarShowFavorites
    })
  }), /*#__PURE__*/React.createElement(ListItem, {
    icon: 'group-by-type',
    text: t('Types'),
    input: /*#__PURE__*/React.createElement(CheckBox, {
      style: checkBoxStyle,
      onChange: handleChangeGroupByType,
      name: "sidebarGroupByType",
      checked: sidebarGroupByType
    })
  })));
}

module.exportDefault(GroupingList);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/SortList/c9f1592cbe0818ee018d46d13b6bdbba0a10d3cc.map
