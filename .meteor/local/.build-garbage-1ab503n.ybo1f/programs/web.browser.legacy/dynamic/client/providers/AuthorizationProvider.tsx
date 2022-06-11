function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/providers/AuthorizationProvider.tsx                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);
var React, useCallback, useEffect;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useEffect: function (v) {
    useEffect = v;
  }
}, 1);
var hasPermission, hasAtLeastOnePermission, hasAllPermission, hasRole;
module.link("../../app/authorization/client", {
  hasPermission: function (v) {
    hasPermission = v;
  },
  hasAtLeastOnePermission: function (v) {
    hasAtLeastOnePermission = v;
  },
  hasAllPermission: function (v) {
    hasAllPermission = v;
  },
  hasRole: function (v) {
    hasRole = v;
  }
}, 2);
var Roles;
module.link("../../app/models/client/models/Roles", {
  Roles: function (v) {
    Roles = v;
  }
}, 3);
var AuthorizationContext, RoleStore;
module.link("../contexts/AuthorizationContext", {
  AuthorizationContext: function (v) {
    AuthorizationContext = v;
  },
  RoleStore: function (v) {
    RoleStore = v;
  }
}, 4);
var useReactiveValue;
module.link("../hooks/useReactiveValue", {
  useReactiveValue: function (v) {
    useReactiveValue = v;
  }
}, 5);
var createReactiveSubscriptionFactory;
module.link("./createReactiveSubscriptionFactory", {
  createReactiveSubscriptionFactory: function (v) {
    createReactiveSubscriptionFactory = v;
  }
}, 6);
var contextValue = {
  queryPermission: createReactiveSubscriptionFactory(function (permission, scope) {
    return hasPermission(permission, scope);
  }),
  queryAtLeastOnePermission: createReactiveSubscriptionFactory(function (permissions, scope) {
    return hasAtLeastOnePermission(permissions, scope);
  }),
  queryAllPermissions: createReactiveSubscriptionFactory(function (permissions, scope) {
    return hasAllPermission(permissions, scope);
  }),
  queryRole: createReactiveSubscriptionFactory(function (role) {
    return hasRole(Meteor.userId(), role);
  }),
  roleStore: new RoleStore()
};

var AuthorizationProvider = function (_ref) {
  var children = _ref.children;
  var roles = useReactiveValue(useCallback(function () {
    return Roles.find().fetch().reduce(function (ret, obj) {
      ret[obj._id] = obj;
      return ret;
    }, {});
  }, []));
  useEffect(function () {
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
//# sourceMappingURL=/dynamic/client/providers/88fc5c9ee9a3441c32dcbb92577083f77b8c5c41.map
