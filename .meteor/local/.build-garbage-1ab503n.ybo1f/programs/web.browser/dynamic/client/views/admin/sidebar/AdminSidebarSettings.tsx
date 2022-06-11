function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/sidebar/AdminSidebarSettings.tsx                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Icon, SearchInput, Skeleton;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Icon(v) {
    Icon = v;
  },

  SearchInput(v) {
    SearchInput = v;
  },

  Skeleton(v) {
    Skeleton = v;
  }

}, 0);
let useDebouncedValue;
module.link("@rocket.chat/fuselage-hooks", {
  useDebouncedValue(v) {
    useDebouncedValue = v;
  }

}, 1);
let React, useCallback, useState, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useState(v) {
    useState = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 2);
let Sidebar;
module.link("../../../components/Sidebar", {
  default(v) {
    Sidebar = v;
  }

}, 3);
let useSettings;
module.link("../../../contexts/SettingsContext", {
  useSettings(v) {
    useSettings = v;
  }

}, 4);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 5);

const useSettingsGroups = filter => {
  const settings = useSettings();
  const t = useTranslation();
  const filterPredicate = useMemo(() => {
    if (!filter) {
      return () => true;
    }

    const getMatchableStrings = setting => [setting.i18nLabel && t(setting.i18nLabel), t(setting._id), setting._id].filter(Boolean);

    try {
      const filterRegex = new RegExp(filter, 'i');
      return setting => getMatchableStrings(setting).some(text => filterRegex.test(text));
    } catch (e) {
      return setting => getMatchableStrings(setting).some(text => text.slice(0, filter.length) === filter);
    }
  }, [filter, t]);
  return useMemo(() => {
    const groupIds = Array.from(new Set(settings.filter(filterPredicate).map(setting => {
      if (setting.type === 'group') {
        return setting._id;
      }

      return setting.group;
    })));
    return settings.filter(_ref => {
      let {
        type,
        group,
        _id
      } = _ref;
      return type === 'group' && groupIds.includes(group || _id);
    }).sort((a, b) => t(a.i18nLabel || a._id).localeCompare(t(b.i18nLabel || b._id)));
  }, [settings, filterPredicate, t]);
};

const AdminSidebarSettings = _ref2 => {
  let {
    currentPath
  } = _ref2;
  const t = useTranslation();
  const [filter, setFilter] = useState('');
  const handleChange = useCallback(e => setFilter(e.currentTarget.value), []);
  const groups = useSettingsGroups(useDebouncedValue(filter, 400));
  const isLoadingGroups = false; // TODO: get from PrivilegedSettingsContext

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
    items: groups.map(group => ({
      name: t(group.i18nLabel || group._id),
      pathSection: 'admin',
      pathGroup: group._id
    })),
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
//# sourceMappingURL=/dynamic/client/views/admin/sidebar/1617fcf677ba533ceb94bd75bf025aba9069b787.map
