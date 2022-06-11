function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/providers/SettingsProvider.tsx                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let Tracker;
module.link("meteor/tracker", {
  Tracker(v) {
    Tracker = v;
  }

}, 0);
let React, useCallback, useEffect, useMemo, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useState(v) {
    useState = v;
  }

}, 1);
let useAtLeastOnePermission;
module.link("../contexts/AuthorizationContext", {
  useAtLeastOnePermission(v) {
    useAtLeastOnePermission = v;
  }

}, 2);
let useMethod;
module.link("../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 3);
let SettingsContext;
module.link("../contexts/SettingsContext", {
  SettingsContext(v) {
    SettingsContext = v;
  }

}, 4);
let PrivateSettingsCachedCollection;
module.link("../lib/settings/PrivateSettingsCachedCollection", {
  PrivateSettingsCachedCollection(v) {
    PrivateSettingsCachedCollection = v;
  }

}, 5);
let PublicSettingsCachedCollection;
module.link("../lib/settings/PublicSettingsCachedCollection", {
  PublicSettingsCachedCollection(v) {
    PublicSettingsCachedCollection = v;
  }

}, 6);
let createReactiveSubscriptionFactory;
module.link("./createReactiveSubscriptionFactory", {
  createReactiveSubscriptionFactory(v) {
    createReactiveSubscriptionFactory = v;
  }

}, 7);

const SettingsProvider = _ref => {
  let {
    children,
    privileged = false
  } = _ref;
  const hasPrivilegedPermission = useAtLeastOnePermission(useMemo(() => ['view-privileged-setting', 'edit-privileged-setting', 'manage-selected-settings'], []));
  const hasPrivateAccess = privileged && hasPrivilegedPermission;
  const cachedCollection = useMemo(() => hasPrivateAccess ? PrivateSettingsCachedCollection.get() : PublicSettingsCachedCollection.get(), [hasPrivateAccess]);
  const [isLoading, setLoading] = useState(() => Tracker.nonreactive(() => !cachedCollection.ready.get()));
  useEffect(() => {
    let mounted = true;

    const initialize = async () => {
      if (!Tracker.nonreactive(() => cachedCollection.ready.get())) {
        await cachedCollection.init();
      }

      if (!mounted) {
        return;
      }

      setLoading(false);
    };

    initialize();
    return () => {
      mounted = false;
    };
  }, [cachedCollection]);
  const querySetting = useMemo(() => createReactiveSubscriptionFactory(_id => _objectSpread({}, cachedCollection.collection.findOne(_id))), [cachedCollection]);
  const querySettings = useMemo(() => createReactiveSubscriptionFactory(function () {
    let query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return cachedCollection.collection.find(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, '_id' in query && Array.isArray(query._id) && {
      _id: {
        $in: query._id
      }
    }), '_id' in query && !Array.isArray(query._id) && {
      _id: query._id
    }), 'group' in query && {
      group: query.group
    }), 'section' in query && (query.section ? {
      section: query.section
    } : {
      $or: [{
        section: {
          $exists: false
        }
      }, {
        section: null
      }]
    })), {
      sort: {
        section: 1,
        sorter: 1,
        i18nLabel: 1
      }
    }).fetch();
  }), [cachedCollection]);
  const saveSettings = useMethod('saveSettings');
  const dispatch = useCallback(async changes => {
    await saveSettings(changes);
  }, [saveSettings]);
  const contextValue = useMemo(() => ({
    hasPrivateAccess,
    isLoading,
    querySetting,
    querySettings,
    dispatch
  }), [hasPrivateAccess, isLoading, querySetting, querySettings, dispatch]);
  return /*#__PURE__*/React.createElement(SettingsContext.Provider, {
    children: children,
    value: contextValue
  });
};

module.exportDefault(SettingsProvider);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/providers/1a22fe4123216d3884557955b0dbb11bad8d9b0b.map
