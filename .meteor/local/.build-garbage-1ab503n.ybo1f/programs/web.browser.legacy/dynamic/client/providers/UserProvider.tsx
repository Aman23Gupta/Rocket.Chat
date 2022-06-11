function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/providers/UserProvider.tsx                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);
var React, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 1);
var Subscriptions, Rooms;
module.link("../../app/models/client", {
  Subscriptions: function (v) {
    Subscriptions = v;
  },
  Rooms: function (v) {
    Rooms = v;
  }
}, 2);
var getUserPreference;
module.link("../../app/utils/client", {
  getUserPreference: function (v) {
    getUserPreference = v;
  }
}, 3);
var callbacks;
module.link("../../lib/callbacks", {
  callbacks: function (v) {
    callbacks = v;
  }
}, 4);
var UserContext;
module.link("../contexts/UserContext", {
  UserContext: function (v) {
    UserContext = v;
  }
}, 5);
var useReactiveValue;
module.link("../hooks/useReactiveValue", {
  useReactiveValue: function (v) {
    useReactiveValue = v;
  }
}, 6);
var createReactiveSubscriptionFactory;
module.link("./createReactiveSubscriptionFactory", {
  createReactiveSubscriptionFactory: function (v) {
    createReactiveSubscriptionFactory = v;
  }
}, 7);

var getUserId = function () {
  return Meteor.userId();
};

var getUser = function () {
  return Meteor.user();
};

var loginWithPassword = function (user, password) {
  return new Promise(function (resolve, reject) {
    Meteor.loginWithPassword(user, password, function (error) {
      if (error) {
        reject(error);
        return;
      }

      resolve();
    });
  });
};

var logout = function () {
  return new Promise(function (resolve) {
    var user = getUser();

    if (!user) {
      return resolve();
    }

    Meteor.logout(function () {
      callbacks.run('afterLogoutCleanUp', user);
      Meteor.call('logoutCleanUp', user, resolve);
    });
  });
};

var UserProvider = function (_ref) {
  var children = _ref.children;
  var userId = useReactiveValue(getUserId);
  var user = useReactiveValue(getUser);
  var contextValue = useMemo(function () {
    return {
      userId: userId,
      user: user,
      loginWithPassword: loginWithPassword,
      logout: logout,
      queryPreference: createReactiveSubscriptionFactory(function (key, defaultValue) {
        return getUserPreference(userId, key, defaultValue);
      }),
      querySubscription: createReactiveSubscriptionFactory(function (query, fields) {
        return Subscriptions.findOne(query, {
          fields: fields
        });
      }),
      queryRoom: createReactiveSubscriptionFactory(function (query, fields) {
        return Rooms.findOne(query, {
          fields: fields
        });
      }),
      querySubscriptions: createReactiveSubscriptionFactory(function (query, options) {
        return (userId ? Subscriptions : Rooms).find(query, options).fetch();
      })
    };
  }, [userId, user]);
  return /*#__PURE__*/React.createElement(UserContext.Provider, {
    children: children,
    value: contextValue
  });
};

module.exportDefault(UserProvider);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/providers/245bac1d82ee9b9dac59b3b275054052d27838da.map
