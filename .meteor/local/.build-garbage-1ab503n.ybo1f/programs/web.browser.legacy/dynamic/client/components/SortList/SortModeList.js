function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/SortList/SortModeList.js                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var RadioButton, OptionTitle;
module.link("@rocket.chat/fuselage", {
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

function SortModeList() {
  var t = useTranslation();
  var saveUserPreferences = useMethod('saveUserPreferences');
  var sidebarSortBy = useUserPreference('sidebarSortby', 'activity');

  var useHandleChange = function (value) {
    return useCallback(function () {
      return saveUserPreferences({
        sidebarSortby: value
      });
    }, [value]);
  };

  var setToAlphabetical = useHandleChange('alphabetical');
  var setToActivity = useHandleChange('activity');
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
//# sourceMappingURL=/dynamic/client/components/SortList/0b671e4d81bde7a966e23a1157e96454e8f1c21b.map
