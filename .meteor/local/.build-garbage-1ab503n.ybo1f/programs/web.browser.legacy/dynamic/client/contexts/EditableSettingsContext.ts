function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/contexts/EditableSettingsContext.ts                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  EditableSettingsContext: function () {
    return EditableSettingsContext;
  },
  useEditableSetting: function () {
    return useEditableSetting;
  },
  useEditableSettings: function () {
    return useEditableSettings;
  },
  useEditableSettingsGroupSections: function () {
    return useEditableSettingsGroupSections;
  },
  useEditableSettingsGroupTabs: function () {
    return useEditableSettingsGroupTabs;
  },
  useEditableSettingsDispatch: function () {
    return useEditableSettingsDispatch;
  }
});
var createContext, useContext, useMemo;
module.link("react", {
  createContext: function (v) {
    createContext = v;
  },
  useContext: function (v) {
    useContext = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 0);
var useSubscription;
module.link("use-subscription", {
  useSubscription: function (v) {
    useSubscription = v;
  }
}, 1);
var EditableSettingsContext = /*#__PURE__*/createContext({
  queryEditableSetting: function () {
    return {
      getCurrentValue: function () {
        return undefined;
      },
      subscribe: function () {
        return function () {
          return undefined;
        };
      }
    };
  },
  queryEditableSettings: function () {
    return {
      getCurrentValue: function () {
        return [];
      },
      subscribe: function () {
        return function () {
          return undefined;
        };
      }
    };
  },
  queryGroupSections: function () {
    return {
      getCurrentValue: function () {
        return [];
      },
      subscribe: function () {
        return function () {
          return undefined;
        };
      }
    };
  },
  queryGroupTabs: function () {
    return {
      getCurrentValue: function () {
        return [];
      },
      subscribe: function () {
        return function () {
          return undefined;
        };
      }
    };
  },
  dispatch: function () {
    return undefined;
  }
});

var useEditableSetting = function (_id) {
  var _useContext = useContext(EditableSettingsContext),
      queryEditableSetting = _useContext.queryEditableSetting;

  var subscription = useMemo(function () {
    return queryEditableSetting(_id);
  }, [queryEditableSetting, _id]);
  return useSubscription(subscription);
};

var useEditableSettings = function (query) {
  var _useContext2 = useContext(EditableSettingsContext),
      queryEditableSettings = _useContext2.queryEditableSettings;

  var subscription = useMemo(function () {
    return queryEditableSettings(query !== null && query !== void 0 ? query : {});
  }, [queryEditableSettings, query]);
  return useSubscription(subscription);
};

var useEditableSettingsGroupSections = function (_id, tab) {
  var _useContext3 = useContext(EditableSettingsContext),
      queryGroupSections = _useContext3.queryGroupSections;

  var subscription = useMemo(function () {
    return queryGroupSections(_id, tab);
  }, [queryGroupSections, _id, tab]);
  return useSubscription(subscription);
};

var useEditableSettingsGroupTabs = function (_id) {
  var _useContext4 = useContext(EditableSettingsContext),
      queryGroupTabs = _useContext4.queryGroupTabs;

  var subscription = useMemo(function () {
    return queryGroupTabs(_id);
  }, [queryGroupTabs, _id]);
  return useSubscription(subscription);
};

var useEditableSettingsDispatch = function () {
  return useContext(EditableSettingsContext).dispatch;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/contexts/2bd1c1d8219fc70c736cb59b349a52a1a81c65ae.map
