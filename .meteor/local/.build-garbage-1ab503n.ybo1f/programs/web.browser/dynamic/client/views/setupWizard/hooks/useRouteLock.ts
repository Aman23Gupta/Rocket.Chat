function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/setupWizard/hooks/useRouteLock.ts                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useRouteLock: () => useRouteLock
});
let useDebouncedValue;
module.link("@rocket.chat/fuselage-hooks", {
  useDebouncedValue(v) {
    useDebouncedValue = v;
  }

}, 0);
let useEffect, useState;
module.link("react", {
  useEffect(v) {
    useEffect = v;
  },

  useState(v) {
    useState = v;
  }

}, 1);
let useRole;
module.link("../../../contexts/AuthorizationContext", {
  useRole(v) {
    useRole = v;
  }

}, 2);
let useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 3);
let useSetting;
module.link("../../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 4);
let useUserId, useUser;
module.link("../../../contexts/UserContext", {
  useUserId(v) {
    useUserId = v;
  },

  useUser(v) {
    useUser = v;
  }

}, 5);

const useRouteLock = () => {
  const [locked, setLocked] = useState(true);
  const setupWizardState = useSetting('Show_Setup_Wizard');
  const userId = useUserId();
  const user = useDebouncedValue(useUser(), 100);
  const hasAdminRole = useRole('admin');
  const homeRoute = useRoute('home');
  useEffect(() => {
    if (!setupWizardState) {
      return;
    }

    if (userId && !(user !== null && user !== void 0 && user.status)) {
      return;
    }

    const isComplete = setupWizardState === 'completed';
    const noUserLoggedInAndIsNotPending = locked && !user && setupWizardState !== 'pending';
    const userIsLoggedInButIsNotAdmin = !!user && !hasAdminRole;
    const mustRedirect = isComplete || noUserLoggedInAndIsNotPending || userIsLoggedInButIsNotAdmin;

    if (mustRedirect) {
      homeRoute.replace();
      return;
    }

    setLocked(false);
  }, [homeRoute, setupWizardState, userId, user, hasAdminRole, locked]);
  return locked;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/setupWizard/hooks/a3258d132d6d77b981f2af285e22f8c6073b1383.map
