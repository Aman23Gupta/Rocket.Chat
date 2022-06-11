function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/SortList/ViewModeList.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var ToggleSwitch, RadioButton, OptionTitle;
module.link("@rocket.chat/fuselage", {
  ToggleSwitch: function (v) {
    ToggleSwitch = v;
  },
  RadioButton: function (v) {
    RadioButton = v;
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

function ViewModeList() {
  var t = useTranslation();
  var saveUserPreferences = useMethod('saveUserPreferences');

  var useHandleChange = function (value) {
    return useCallback(function () {
      return saveUserPreferences({
        sidebarViewMode: value
      });
    }, [value]);
  };

  var sidebarViewMode = useUserPreference('sidebarViewMode', 'extended');
  var sidebarDisplayAvatar = useUserPreference('sidebarDisplayAvatar', false);
  var setToExtended = useHandleChange('extended');
  var setToMedium = useHandleChange('medium');
  var setToCondensed = useHandleChange('condensed');
  var handleChangeSidebarDisplayAvatar = useCallback(function () {
    return saveUserPreferences({
      sidebarDisplayAvatar: !sidebarDisplayAvatar
    });
  }, [saveUserPreferences, sidebarDisplayAvatar]);
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
//# sourceMappingURL=/dynamic/client/components/SortList/721a6b7126bcb0dc02e2006f246edb3cb180d8a7.map
