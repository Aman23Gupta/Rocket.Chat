function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/providers/EditableSettingsProvider.tsx                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["_id"],
    _excluded2 = ["_id"];

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 0);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 1);

var _createForOfIteratorHelperLoose;

module.link("@babel/runtime/helpers/createForOfIteratorHelperLoose", {
  default: function (v) {
    _createForOfIteratorHelperLoose = v;
  }
}, 2);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 0);
var Mongo;
module.link("meteor/mongo", {
  Mongo: function (v) {
    Mongo = v;
  }
}, 1);
var Tracker;
module.link("meteor/tracker", {
  Tracker: function (v) {
    Tracker = v;
  }
}, 2);
var React, useEffect, useMemo, useRef;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useRef: function (v) {
    useRef = v;
  }
}, 3);
var EditableSettingsContext;
module.link("../contexts/EditableSettingsContext", {
  EditableSettingsContext: function (v) {
    EditableSettingsContext = v;
  }
}, 4);
var useSettings;
module.link("../contexts/SettingsContext", {
  useSettings: function (v) {
    useSettings = v;
  }
}, 5);
var createReactiveSubscriptionFactory;
module.link("./createReactiveSubscriptionFactory", {
  createReactiveSubscriptionFactory: function (v) {
    createReactiveSubscriptionFactory = v;
  }
}, 6);
var defaultQuery = {};

var EditableSettingsProvider = function (_ref) {
  var children = _ref.children,
      _ref$query = _ref.query,
      query = _ref$query === void 0 ? defaultQuery : _ref$query;
  var settingsCollectionRef = useRef(null);
  var persistedSettings = useSettings(query);
  var getSettingsCollection = useMutableCallback(function () {
    if (!settingsCollectionRef.current) {
      settingsCollectionRef.current = new Mongo.Collection(null);
    }

    return settingsCollectionRef.current;
  });
  useEffect(function () {
    var settingsCollection = getSettingsCollection();
    settingsCollection.remove({
      _id: {
        $nin: persistedSettings.map(function (_ref2) {
          var _id = _ref2._id;
          return _id;
        })
      }
    });

    for (var _iterator = _createForOfIteratorHelperLoose(persistedSettings), _step; !(_step = _iterator()).done;) {
      var _ref3 = _step.value;

      var _id = _ref3._id,
          fields = _objectWithoutProperties(_ref3, _excluded);

      settingsCollection.upsert(_id, {
        $set: _objectSpread({}, fields),
        $unset: {
          changed: true
        }
      });
    }
  }, [getSettingsCollection, persistedSettings]);
  var queryEditableSetting = useMemo(function () {
    var validateSettingQueries = function (query, settingsCollection) {
      if (!query) {
        return true;
      }

      var queries = [].concat(typeof query === 'string' ? JSON.parse(query) : query);
      return queries.every(function (query) {
        return settingsCollection.find(query).count() > 0;
      });
    };

    return createReactiveSubscriptionFactory(function (_id) {
      var settingsCollection = getSettingsCollection();
      var editableSetting = settingsCollection.findOne(_id);

      if (!editableSetting) {
        return undefined;
      }

      return _objectSpread(_objectSpread({}, editableSetting), {}, {
        disabled: editableSetting.blocked || !validateSettingQueries(editableSetting.enableQuery, settingsCollection),
        invisible: !validateSettingQueries(editableSetting.displayQuery, settingsCollection)
      });
    });
  }, [getSettingsCollection]);
  var queryEditableSettings = useMemo(function () {
    return createReactiveSubscriptionFactory(function () {
      var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
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
    });
  }, [getSettingsCollection]);
  var queryGroupSections = useMemo(function () {
    return createReactiveSubscriptionFactory(function (_id, tab) {
      return Array.from(new Set(getSettingsCollection().find(_objectSpread({
        group: _id
      }, tab !== undefined ? {
        tab: tab
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
      }).fetch().map(function (_ref4) {
        var section = _ref4.section;
        return section || '';
      })));
    });
  }, [getSettingsCollection]);
  var queryGroupTabs = useMemo(function () {
    return createReactiveSubscriptionFactory(function (_id) {
      return Array.from(new Set(getSettingsCollection().find({
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
      }).fetch().map(function (_ref5) {
        var tab = _ref5.tab;
        return tab || '';
      })));
    });
  }, [getSettingsCollection]);
  var dispatch = useMutableCallback(function (changes) {
    for (var _iterator2 = _createForOfIteratorHelperLoose(changes), _step2; !(_step2 = _iterator2()).done;) {
      var _ref6 = _step2.value;

      var _id = _ref6._id,
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
  var contextValue = useMemo(function () {
    return {
      queryEditableSetting: queryEditableSetting,
      queryEditableSettings: queryEditableSettings,
      queryGroupSections: queryGroupSections,
      queryGroupTabs: queryGroupTabs,
      dispatch: dispatch
    };
  }, [queryEditableSetting, queryEditableSettings, queryGroupSections, queryGroupTabs, dispatch]);
  return /*#__PURE__*/React.createElement(EditableSettingsContext.Provider, {
    children: children,
    value: contextValue
  });
};

module.exportDefault(EditableSettingsProvider);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/providers/68fb7414e782f1f1b5e00c33c8f084d6a8a27031.map
