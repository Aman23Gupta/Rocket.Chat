function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/providers/AuthorizationProvider.tsx                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let React, useCallback, useEffect;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useEffect(v) {
    useEffect = v;
  }

}, 1);
let hasPermission, hasAtLeastOnePermission, hasAllPermission, hasRole;
module.link("../../app/authorization/client", {
  hasPermission(v) {
    hasPermission = v;
  },

  hasAtLeastOnePermission(v) {
    hasAtLeastOnePermission = v;
  },

  hasAllPermission(v) {
    hasAllPermission = v;
  },

  hasRole(v) {
    hasRole = v;
  }

}, 2);
let Roles;
module.link("../../app/models/client/models/Roles", {
  Roles(v) {
    Roles = v;
  }

}, 3);
let AuthorizationContext, RoleStore;
module.link("../contexts/AuthorizationContext", {
  AuthorizationContext(v) {
    AuthorizationContext = v;
  },

  RoleStore(v) {
    RoleStore = v;
  }

}, 4);
let useReactiveValue;
module.link("../hooks/useReactiveValue", {
  useReactiveValue(v) {
    useReactiveValue = v;
  }

}, 5);
let createReactiveSubscriptionFactory;
module.link("./createReactiveSubscriptionFactory", {
  createReactiveSubscriptionFactory(v) {
    createReactiveSubscriptionFactory = v;
  }

}, 6);
const contextValue = {
  queryPermission: createReactiveSubscriptionFactory((permission, scope) => hasPermission(permission, scope)),
  queryAtLeastOnePermission: createReactiveSubscriptionFactory((permissions, scope) => hasAtLeastOnePermission(permissions, scope)),
  queryAllPermissions: createReactiveSubscriptionFactory((permissions, scope) => hasAllPermission(permissions, scope)),
  queryRole: createReactiveSubscriptionFactory(role => hasRole(Meteor.userId(), role)),
  roleStore: new RoleStore()
};

const AuthorizationProvider = _ref => {
  let {
    children
  } = _ref;
  const roles = useReactiveValue(useCallback(() => Roles.find().fetch().reduce((ret, obj) => {
    ret[obj._id] = obj;
    return ret;
  }, {}), []));
  useEffect(() => {
    contextValue.roleStore.roles = roles;
    contextValue.roleStore.emit('change', roles);
  }, [roles]);
  return /*#__PURE__*/React.createElement(AuthorizationContext.Provider, {
    children: children,
    value: contextValue
  });
};

module.exportDefault(AuthorizationProvider);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/providers/c09a5b81ee0ccd9cbd2a94dbb82ffaeb3fa9c935.map
