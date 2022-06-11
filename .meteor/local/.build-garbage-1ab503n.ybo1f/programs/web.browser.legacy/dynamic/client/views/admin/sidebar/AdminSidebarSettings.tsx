function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/sidebar/AdminSidebarSettings.tsx                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
var Box, Icon, SearchInput, Skeleton;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  SearchInput: function (v) {
    SearchInput = v;
  },
  Skeleton: function (v) {
    Skeleton = v;
  }
}, 0);
var useDebouncedValue;
module.link("@rocket.chat/fuselage-hooks", {
  useDebouncedValue: function (v) {
    useDebouncedValue = v;
  }
}, 1);
var React, useCallback, useState, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useState: function (v) {
    useState = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 2);
var Sidebar;
module.link("../../../components/Sidebar", {
  "default": function (v) {
    Sidebar = v;
  }
}, 3);
var useSettings;
module.link("../../../contexts/SettingsContext", {
  useSettings: function (v) {
    useSettings = v;
  }
}, 4);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 5);

var useSettingsGroups = function (filter) {
  var settings = useSettings();
  var t = useTranslation();
  var filterPredicate = useMemo(function () {
    if (!filter) {
      return function () {
        return true;
      };
    }

    var getMatchableStrings = function (setting) {
      return [setting.i18nLabel && t(setting.i18nLabel), t(setting._id), setting._id].filter(Boolean);
    };

    try {
      var filterRegex = new RegExp(filter, 'i');
      return function (setting) {
        return getMatchableStrings(setting).some(function (text) {
          return filterRegex.test(text);
        });
      };
    } catch (e) {
      return function (setting) {
        return getMatchableStrings(setting).some(function (text) {
          return text.slice(0, filter.length) === filter;
        });
      };
    }
  }, [filter, t]);
  return useMemo(function () {
    var groupIds = Array.from(new Set(settings.filter(filterPredicate).map(function (setting) {
      if (setting.type === 'group') {
        return setting._id;
      }

      return setting.group;
    })));
    return settings.filter(function (_ref) {
      var type = _ref.type,
          group = _ref.group,
          _id = _ref._id;
      return type === 'group' && groupIds.includes(group || _id);
    }).sort(function (a, b) {
      return t(a.i18nLabel || a._id).localeCompare(t(b.i18nLabel || b._id));
    });
  }, [settings, filterPredicate, t]);
};

var AdminSidebarSettings = function (_ref2) {
  var currentPath = _ref2.currentPath;
  var t = useTranslation();

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      filter = _useState2[0],
      setFilter = _useState2[1];

  var handleChange = useCallback(function (e) {
    return setFilter(e.currentTarget.value);
  }, []);
  var groups = useSettingsGroups(useDebouncedValue(filter, 400));
  var isLoadingGroups = false; // TODO: get from PrivilegedSettingsContext

  return /*#__PURE__*/React.createElement(Box, {
    is: "section",
    display: "flex",
    flexDirection: "column",
    flexShrink: 0,
    pb: "x24"
  }, /*#__PURE__*/React.createElement(Box, {
    pi: "x24",
    pb: "x8",
    fontScale: "p2m",
    color: "info"
  }, t('Settings')), /*#__PURE__*/React.createElement(Box, {
    pi: "x24",
    pb: "x8",
    display: "flex"
  }, /*#__PURE__*/React.createElement(SearchInput, {
    value: filter,
    placeholder: t('Search'),
    onChange: handleChange,
    addon: /*#__PURE__*/React.createElement(Icon, {
      name: "magnifier",
      size: "x20"
    })
  })), /*#__PURE__*/React.createElement(Box, {
    pb: "x16",
    display: "flex",
    flexDirection: "column"
  }, isLoadingGroups && /*#__PURE__*/React.createElement(Skeleton, null), !isLoadingGroups && !!groups.length && /*#__PURE__*/React.createElement(Sidebar.ItemsAssembler, {
    items: groups.map(function (group) {
      return {
        name: t(group.i18nLabel || group._id),
        pathSection: 'admin',
        pathGroup: group._id
      };
    }),
    currentPath: currentPath
  }), !isLoadingGroups && !groups.length && /*#__PURE__*/React.createElement(Box, {
    pi: "x28",
    mb: "x4",
    color: "hint"
  }, t('Nothing_found'))));
};

module.exportDefault(AdminSidebarSettings);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/sidebar/56fc5032290ef035deea915d6f5277e5a183acd5.map
