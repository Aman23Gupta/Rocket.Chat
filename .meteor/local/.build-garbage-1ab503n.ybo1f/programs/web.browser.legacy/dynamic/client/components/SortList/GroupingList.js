function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/SortList/GroupingList.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var CheckBox, OptionTitle;
module.link("@rocket.chat/fuselage", {
  CheckBox: function (v) {
    CheckBox = v;
  },
  OptionTitle: function (v) {
    OptionTitle = v;
  }
}, 0);
var React, useCallback;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  }
}, 1);
var useMethod;
module.link("../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 2);
var useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var useUserPreference;
module.link("../../contexts/UserContext", {
  useUserPreference: function (v) {
    useUserPreference = v;
  }
}, 4);
var ListItem;
module.link("../Sidebar/ListItem", {
  "default": function (v) {
    ListItem = v;
  }
}, 5);
var style = {
  textTransform: 'uppercase'
};
var checkBoxStyle = {
  paddingLeft: '24px',
  paddingInlineStart: '24px'
};

function GroupingList() {
  var sidebarGroupByType = useUserPreference('sidebarGroupByType');
  var sidebarShowFavorites = useUserPreference('sidebarShowFavorites');
  var sidebarShowUnread = useUserPreference('sidebarShowUnread');
  var saveUserPreferences = useMethod('saveUserPreferences');

  var useHandleChange = function (key, value) {
    return useCallback(function () {
      var _saveUserPreferences;

      return saveUserPreferences((_saveUserPreferences = {}, _saveUserPreferences[key] = value, _saveUserPreferences));
    }, [key, value]);
  };

  var handleChangeGroupByType = useHandleChange('sidebarGroupByType', !sidebarGroupByType);
  var handleChangeShoFavorite = useHandleChange('sidebarShowFavorites', !sidebarShowFavorites);
  var handleChangeShowUnread = useHandleChange('sidebarShowUnread', !sidebarShowUnread);
  var t = useTranslation();
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
//# sourceMappingURL=/dynamic/client/components/SortList/947995f3303a84210ca8e5a0787842601db57c5d.map
