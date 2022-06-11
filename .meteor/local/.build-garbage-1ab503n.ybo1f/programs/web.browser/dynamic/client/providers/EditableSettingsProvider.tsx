function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/providers/EditableSettingsProvider.tsx                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["_id"],
      _excluded2 = ["_id"];

let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 0);
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 1);
let Tracker;
module.link("meteor/tracker", {
  Tracker(v) {
    Tracker = v;
  }

}, 2);
let React, useEffect, useMemo, useRef;
module.link("react", {
  default(v) {
    React = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useRef(v) {
    useRef = v;
  }

}, 3);
let EditableSettingsContext;
module.link("../contexts/EditableSettingsContext", {
  EditableSettingsContext(v) {
    EditableSettingsContext = v;
  }

}, 4);
let useSettings;
module.link("../contexts/SettingsContext", {
  useSettings(v) {
    useSettings = v;
  }

}, 5);
let createReactiveSubscriptionFactory;
module.link("./createReactiveSubscriptionFactory", {
  createReactiveSubscriptionFactory(v) {
    createReactiveSubscriptionFactory = v;
  }

}, 6);
const defaultQuery = {};

const EditableSettingsProvider = _ref => {
  let {
    children,
    query = defaultQuery
  } = _ref;
  const settingsCollectionRef = useRef(null);
  const persistedSettings = useSettings(query);
  const getSettingsCollection = useMutableCallback(() => {
    if (!settingsCollectionRef.current) {
      settingsCollectionRef.current = new Mongo.Collection(null);
    }

    return settingsCollectionRef.current;
  });
  useEffect(() => {
    const settingsCollection = getSettingsCollection();
    settingsCollection.remove({
      _id: {
        $nin: persistedSettings.map(_ref2 => {
          let {
            _id
          } = _ref2;
          return _id;
        })
      }
    });

    for (const _ref3 of persistedSettings) {
      const {
        _id
      } = _ref3,
            fields = _objectWithoutProperties(_ref3, _excluded);

      settingsCollection.upsert(_id, {
        $set: _objectSpread({}, fields),
        $unset: {
          changed: true
        }
      });
    }
  }, [getSettingsCollection, persistedSettings]);
  const queryEditableSetting = useMemo(() => {
    const validateSettingQueries = (query, settingsCollection) => {
      if (!query) {
        return true;
      }

      const queries = [].concat(typeof query === 'string' ? JSON.parse(query) : query);
      return queries.every(query => settingsCollection.find(query).count() > 0);
    };

    return createReactiveSubscriptionFactory(_id => {
      const settingsCollection = getSettingsCollection();
      const editableSetting = settingsCollection.findOne(_id);

      if (!editableSetting) {
        return undefined;
      }

      return _objectSpread(_objectSpread({}, editableSetting), {}, {
        disabled: editableSetting.blocked || !validateSettingQueries(editableSetting.enableQuery, settingsCollection),
        invisible: !validateSettingQueries(editableSetting.displayQuery, settingsCollection)
      });
    });
  }, [getSettingsCollection]);
  const queryEditableSettings = useMemo(() => createReactiveSubscriptionFactory(function () {
    let query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    return getSettingsCollection().find(_objectSpread(_objectSpread(_objectSpread(_objectSpread({}, '_id' in query && {
      _id: {
        $in: query._id
      }
    }), 'group' in query && {
      group: query.group
    }), 'changed' in query && {
      changed: query.changed
    }), {}, {
      $and: [_objectSpread({}, 'section' in query && (query.section ? {
        section: query.section
      } : {
        $or: [{
          section: {
            $exists: false
          }
        }, {
          section: ''
        }]
      })), _objectSpread({}, 'tab' in query && (query.tab ? {
        tab: query.tab
      } : {
        $or: [{
          tab: {
            $exists: false
          }
        }, {
          tab: ''
        }]
      }))]
    }), {
      sort: {
        section: 1,
        sorter: 1,
        i18nLabel: 1
      }
    }).fetch();
  }), [getSettingsCollection]);
  const queryGroupSections = useMemo(() => createReactiveSubscriptionFactory((_id, tab) => Array.from(new Set(getSettingsCollection().find(_objectSpread({
    group: _id
  }, tab !== undefined ? {
    tab
  } : {
    $or: [{
      tab: {
        $exists: false
      }
    }, {
      tab: ''
    }]
  }), {
    fields: {
      section: 1
    },
    sort: {
      sorter: 1,
      section: 1,
      i18nLabel: 1
    }
  }).fetch().map(_ref4 => {
    let {
      section
    } = _ref4;
    return section || '';
  })))), [getSettingsCollection]);
  const queryGroupTabs = useMemo(() => createReactiveSubscriptionFactory(_id => Array.from(new Set(getSettingsCollection().find({
    group: _id
  }, {
    fields: {
      tab: 1
    },
    sort: {
      sorter: 1,
      tab: 1,
      i18nLabel: 1
    }
  }).fetch().map(_ref5 => {
    let {
      tab
    } = _ref5;
    return tab || '';
  })))), [getSettingsCollection]);
  const dispatch = useMutableCallback(changes => {
    for (const _ref6 of changes) {
      const {
        _id
      } = _ref6,
            data = _objectWithoutProperties(_ref6, _excluded2);

      if (!_id) {
        continue;
      }

      getSettingsCollection().update(_id, {
        $set: data
      });
    }

    Tracker.flush();
  });
  const contextValue = useMemo(() => ({
    queryEditableSetting,
    queryEditableSettings,
    queryGroupSections,
    queryGroupTabs,
    dispatch
  }), [queryEditableSetting, queryEditableSettings, queryGroupSections, queryGroupTabs, dispatch]);
  return /*#__PURE__*/React.createElement(EditableSettingsContext.Provider, {
    children: children,
    value: contextValue
  });
};

module.exportDefault(EditableSettingsProvider);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/providers/9982900960a330b2cebe747decd7b9d963c50deb.map
