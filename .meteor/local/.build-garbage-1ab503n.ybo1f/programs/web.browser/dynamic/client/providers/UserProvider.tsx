function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/providers/UserProvider.tsx                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let React, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 1);
let Subscriptions, Rooms;
module.link("../../app/models/client", {
  Subscriptions(v) {
    Subscriptions = v;
  },

  Rooms(v) {
    Rooms = v;
  }

}, 2);
let getUserPreference;
module.link("../../app/utils/client", {
  getUserPreference(v) {
    getUserPreference = v;
  }

}, 3);
let callbacks;
module.link("../../lib/callbacks", {
  callbacks(v) {
    callbacks = v;
  }

}, 4);
let UserContext;
module.link("../contexts/UserContext", {
  UserContext(v) {
    UserContext = v;
  }

}, 5);
let useReactiveValue;
module.link("../hooks/useReactiveValue", {
  useReactiveValue(v) {
    useReactiveValue = v;
  }

}, 6);
let createReactiveSubscriptionFactory;
module.link("./createReactiveSubscriptionFactory", {
  createReactiveSubscriptionFactory(v) {
    createReactiveSubscriptionFactory = v;
  }

}, 7);

const getUserId = () => Meteor.userId();

const getUser = () => Meteor.user();

const loginWithPassword = (user, password) => new Promise((resolve, reject) => {
  Meteor.loginWithPassword(user, password, error => {
    if (error) {
      reject(error);
      return;
    }

    resolve();
  });
});

const logout = () => new Promise(resolve => {
  const user = getUser();

  if (!user) {
    return resolve();
  }

  Meteor.logout(() => {
    callbacks.run('afterLogoutCleanUp', user);
    Meteor.call('logoutCleanUp', user, resolve);
  });
});

const UserProvider = _ref => {
  let {
    children
  } = _ref;
  const userId = useReactiveValue(getUserId);
  const user = useReactiveValue(getUser);
  const contextValue = useMemo(() => ({
    userId,
    user,
    loginWithPassword,
    logout,
    queryPreference: createReactiveSubscriptionFactory((key, defaultValue) => getUserPreference(userId, key, defaultValue)),
    querySubscription: createReactiveSubscriptionFactory((query, fields) => Subscriptions.findOne(query, {
      fields
    })),
    queryRoom: createReactiveSubscriptionFactory((query, fields) => Rooms.findOne(query, {
      fields
    })),
    querySubscriptions: createReactiveSubscriptionFactory((query, options) => (userId ? Subscriptions : Rooms).find(query, options).fetch())
  }), [userId, user]);
  return /*#__PURE__*/React.createElement(UserContext.Provider, {
    children: children,
    value: contextValue
  });
};

module.exportDefault(UserProvider);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/providers/d976b72fd99f2525615fe6168d5b87eb10177b31.map
