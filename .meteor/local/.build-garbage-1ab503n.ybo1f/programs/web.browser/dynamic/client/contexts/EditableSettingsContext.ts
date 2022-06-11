function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/contexts/EditableSettingsContext.ts                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  EditableSettingsContext: () => EditableSettingsContext,
  useEditableSetting: () => useEditableSetting,
  useEditableSettings: () => useEditableSettings,
  useEditableSettingsGroupSections: () => useEditableSettingsGroupSections,
  useEditableSettingsGroupTabs: () => useEditableSettingsGroupTabs,
  useEditableSettingsDispatch: () => useEditableSettingsDispatch
});
let createContext, useContext, useMemo;
module.link("react", {
  createContext(v) {
    createContext = v;
  },

  useContext(v) {
    useContext = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 0);
let useSubscription;
module.link("use-subscription", {
  useSubscription(v) {
    useSubscription = v;
  }

}, 1);
const EditableSettingsContext = /*#__PURE__*/createContext({
  queryEditableSetting: () => ({
    getCurrentValue: () => undefined,
    subscribe: () => () => undefined
  }),
  queryEditableSettings: () => ({
    getCurrentValue: () => [],
    subscribe: () => () => undefined
  }),
  queryGroupSections: () => ({
    getCurrentValue: () => [],
    subscribe: () => () => undefined
  }),
  queryGroupTabs: () => ({
    getCurrentValue: () => [],
    subscribe: () => () => undefined
  }),
  dispatch: () => undefined
});

const useEditableSetting = _id => {
  const {
    queryEditableSetting
  } = useContext(EditableSettingsContext);
  const subscription = useMemo(() => queryEditableSetting(_id), [queryEditableSetting, _id]);
  return useSubscription(subscription);
};

const useEditableSettings = query => {
  const {
    queryEditableSettings
  } = useContext(EditableSettingsContext);
  const subscription = useMemo(() => queryEditableSettings(query !== null && query !== void 0 ? query : {}), [queryEditableSettings, query]);
  return useSubscription(subscription);
};

const useEditableSettingsGroupSections = (_id, tab) => {
  const {
    queryGroupSections
  } = useContext(EditableSettingsContext);
  const subscription = useMemo(() => queryGroupSections(_id, tab), [queryGroupSections, _id, tab]);
  return useSubscription(subscription);
};

const useEditableSettingsGroupTabs = _id => {
  const {
    queryGroupTabs
  } = useContext(EditableSettingsContext);
  const subscription = useMemo(() => queryGroupTabs(_id), [queryGroupTabs, _id]);
  return useSubscription(subscription);
};

const useEditableSettingsDispatch = () => useContext(EditableSettingsContext).dispatch;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/contexts/5ce0ead2ab09e55050de20811ad1901f7df8a153.map
