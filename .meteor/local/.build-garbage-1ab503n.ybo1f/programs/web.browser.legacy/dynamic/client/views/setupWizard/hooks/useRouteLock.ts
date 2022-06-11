function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/setupWizard/hooks/useRouteLock.ts                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
module.export({
  useRouteLock: function () {
    return useRouteLock;
  }
});
var useDebouncedValue;
module.link("@rocket.chat/fuselage-hooks", {
  useDebouncedValue: function (v) {
    useDebouncedValue = v;
  }
}, 0);
var useEffect, useState;
module.link("react", {
  useEffect: function (v) {
    useEffect = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 1);
var useRole;
module.link("../../../contexts/AuthorizationContext", {
  useRole: function (v) {
    useRole = v;
  }
}, 2);
var useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 3);
var useSetting;
module.link("../../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 4);
var useUserId, useUser;
module.link("../../../contexts/UserContext", {
  useUserId: function (v) {
    useUserId = v;
  },
  useUser: function (v) {
    useUser = v;
  }
}, 5);

var useRouteLock = function () {
  var _useState = useState(true),
      _useState2 = _slicedToArray(_useState, 2),
      locked = _useState2[0],
      setLocked = _useState2[1];

  var setupWizardState = useSetting('Show_Setup_Wizard');
  var userId = useUserId();
  var user = useDebouncedValue(useUser(), 100);
  var hasAdminRole = useRole('admin');
  var homeRoute = useRoute('home');
  useEffect(function () {
    if (!setupWizardState) {
      return;
    }

    if (userId && !(user !== null && user !== void 0 && user.status)) {
      return;
    }

    var isComplete = setupWizardState === 'completed';
    var noUserLoggedInAndIsNotPending = locked && !user && setupWizardState !== 'pending';
    var userIsLoggedInButIsNotAdmin = !!user && !hasAdminRole;
    var mustRedirect = isComplete || noUserLoggedInAndIsNotPending || userIsLoggedInButIsNotAdmin;

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
//# sourceMappingURL=/dynamic/client/views/setupWizard/hooks/32fcec61188a788b062876dd38b5cb80c2b8498b.map
