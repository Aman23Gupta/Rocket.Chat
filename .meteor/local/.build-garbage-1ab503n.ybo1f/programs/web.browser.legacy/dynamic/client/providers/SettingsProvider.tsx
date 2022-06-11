function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/providers/SettingsProvider.tsx                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 1);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 2);
var Tracker;
module.link("meteor/tracker", {
  Tracker: function (v) {
    Tracker = v;
  }
}, 0);
var React, useCallback, useEffect, useMemo, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 1);
var useAtLeastOnePermission;
module.link("../contexts/AuthorizationContext", {
  useAtLeastOnePermission: function (v) {
    useAtLeastOnePermission = v;
  }
}, 2);
var useMethod;
module.link("../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 3);
var SettingsContext;
module.link("../contexts/SettingsContext", {
  SettingsContext: function (v) {
    SettingsContext = v;
  }
}, 4);
var PrivateSettingsCachedCollection;
module.link("../lib/settings/PrivateSettingsCachedCollection", {
  PrivateSettingsCachedCollection: function (v) {
    PrivateSettingsCachedCollection = v;
  }
}, 5);
var PublicSettingsCachedCollection;
module.link("../lib/settings/PublicSettingsCachedCollection", {
  PublicSettingsCachedCollection: function (v) {
    PublicSettingsCachedCollection = v;
  }
}, 6);
var createReactiveSubscriptionFactory;
module.link("./createReactiveSubscriptionFactory", {
  createReactiveSubscriptionFactory: function (v) {
    createReactiveSubscriptionFactory = v;
  }
}, 7);

var SettingsProvider = function (_ref) {
  var children = _ref.children,
      _ref$privileged = _ref.privileged,
      privileged = _ref$privileged === void 0 ? false : _ref$privileged;
  var hasPrivilegedPermission = useAtLeastOnePermission(useMemo(function () {
    return ['view-privileged-setting', 'edit-privileged-setting', 'manage-selected-settings'];
  }, []));
  var hasPrivateAccess = privileged && hasPrivilegedPermission;
  var cachedCollection = useMemo(function () {
    return hasPrivateAccess ? PrivateSettingsCachedCollection.get() : PublicSettingsCachedCollection.get();
  }, [hasPrivateAccess]);

  var _useState = useState(function () {
    return Tracker.nonreactive(function () {
      return !cachedCollection.ready.get();
    });
  }),
      _useState2 = _slicedToArray(_useState, 2),
      isLoading = _useState2[0],
      setLoading = _useState2[1];

  useEffect(function () {
    var mounted = true;

    var initialize = function () {
      function _callee() {
        return _regeneratorRuntime.async(function () {
          function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  if (Tracker.nonreactive(function () {
                    return cachedCollection.ready.get();
                  })) {
                    _context.next = 3;
                    break;
                  }

                  _context.next = 3;
                  return _regeneratorRuntime.awrap(cachedCollection.init());

                case 3:
                  if (mounted) {
                    _context.next = 5;
                    break;
                  }

                  return _context.abrupt("return");

                case 5:
                  setLoading(false);

                case 6:
                case "end":
                  return _context.stop();
              }
            }
          }

          return _callee$;
        }(), null, null, null, Promise);
      }

      return _callee;
    }();

    initialize();
    return function () {
      mounted = false;
    };
  }, [cachedCollection]);
  var querySetting = useMemo(function () {
    return createReactiveSubscriptionFactory(function (_id) {
      return _objectSpread({}, cachedCollection.collection.findOne(_id));
    });
  }, [cachedCollection]);
  var querySettings = useMemo(function () {
    return createReactiveSubscriptionFactory(function () {
      var query = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
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
    });
  }, [cachedCollection]);
  var saveSettings = useMethod('saveSettings');
  var dispatch = useCallback(function () {
    function _callee2(changes) {
      return _regeneratorRuntime.async(function () {
        function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _regeneratorRuntime.awrap(saveSettings(changes));

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }

        return _callee2$;
      }(), null, null, null, Promise);
    }

    return _callee2;
  }(), [saveSettings]);
  var contextValue = useMemo(function () {
    return {
      hasPrivateAccess: hasPrivateAccess,
      isLoading: isLoading,
      querySetting: querySetting,
      querySettings: querySettings,
      dispatch: dispatch
    };
  }, [hasPrivateAccess, isLoading, querySetting, querySettings, dispatch]);
  return /*#__PURE__*/React.createElement(SettingsContext.Provider, {
    children: children,
    value: contextValue
  });
};

module.exportDefault(SettingsProvider);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/providers/f7fa1945bb2ccdfe166ab2b7d4bac728bea5532d.map
