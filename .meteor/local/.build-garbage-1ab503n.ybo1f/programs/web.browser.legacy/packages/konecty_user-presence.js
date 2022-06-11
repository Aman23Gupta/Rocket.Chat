//////////////////////////////////////////////////////////////////////////
//                                                                      //
// This is a generated file. You can view the original                  //
// source in your browser if your browser supports source maps.         //
// Source maps are supported by all recent versions of Chrome, Safari,  //
// and Firefox, and by Internet Explorer 11.                            //
//                                                                      //
//////////////////////////////////////////////////////////////////////////


(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var check = Package.check.check;
var Match = Package.check.Match;
var meteorInstall = Package.modules.meteorInstall;
var meteorBabelHelpers = Package.modules.meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;

/* Package-scope variables */
var UsersSessions, UserPresence;

var require = meteorInstall({"node_modules":{"meteor":{"konecty:user-presence":{"common":{"common.js":function module(){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/konecty_user-presence/common/common.js                                             //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
/* globals UsersSessions */

/* exported UsersSessions */
UsersSessions = new Meteor.Collection('usersSessions');
/////////////////////////////////////////////////////////////////////////////////////////////////

}},"client":{"client.js":function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/konecty_user-presence/client/client.js                                             //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
var debounce;
module.link("../utils", {
  debounce: function (v) {
    debounce = v;
  }
}, 0);
var timer, status;
var setUserPresence = debounce(function (newStatus) {
  if (!UserPresence.connected || newStatus === status) {
    UserPresence.startTimer();
    return;
  }

  switch (newStatus) {
    case 'online':
      Meteor.call('UserPresence:online', UserPresence.userId);
      break;

    case 'away':
      Meteor.call('UserPresence:away', UserPresence.userId);
      UserPresence.stopTimer();
      break;

    default:
      return;
  }

  status = newStatus;
}, 1000);
UserPresence = {
  awayTime: 60000,
  // 1 minute
  awayOnWindowBlur: false,
  callbacks: [],
  connected: true,
  started: false,
  userId: null,

  /**
   * The callback will receive the following parameters: user, status
   */
  onSetUserStatus: function (callback) {
    this.callbacks.push(callback);
  },
  runCallbacks: function (user, status) {
    this.callbacks.forEach(function (callback) {
      callback.call(null, user, status);
    });
  },
  startTimer: function () {
    UserPresence.stopTimer();

    if (!UserPresence.awayTime) {
      return;
    }

    timer = setTimeout(UserPresence.setAway, UserPresence.awayTime);
  },
  stopTimer: function () {
    clearTimeout(timer);
  },
  restartTimer: function () {
    UserPresence.startTimer();
  },
  setAway: function () {
    return setUserPresence('away');
  },
  setOnline: function () {
    return setUserPresence('online');
  },
  start: function (userId) {
    var _this = this;

    // after first call overwrite start function to only call startTimer
    this.start = function () {
      _this.startTimer();
    };

    this.userId = userId; // register a tracker on connection status so we can setup the away timer again (on reconnect)

    Tracker.autorun(function () {
      var _Meteor$status = Meteor.status(),
          connected = _Meteor$status.connected;

      _this.connected = connected;

      if (connected) {
        _this.startTimer();

        status = 'online';
        return;
      }

      _this.stopTimer();

      status = 'offline';
    });
    ['mousemove', 'mousedown', 'touchend', 'keydown'].forEach(function (key) {
      return document.addEventListener(key, _this.setOnline);
    });
    window.addEventListener('focus', this.setOnline);

    if (this.awayOnWindowBlur === true) {
      window.addEventListener('blur', this.setAway);
    }
  }
};
Meteor.methods({
  'UserPresence:setDefaultStatus': function (status) {
    check(status, String);
    Meteor.users.update({
      _id: Meteor.userId()
    }, {
      $set: {
        status: status,
        statusDefault: status
      }
    });
  },
  'UserPresence:online': function () {
    var user = Meteor.user();

    if (user && user.status !== 'online' && user.statusDefault === 'online') {
      Meteor.users.update({
        _id: Meteor.userId()
      }, {
        $set: {
          status: 'online'
        }
      });
    }

    UserPresence.runCallbacks(user, 'online');
  },
  'UserPresence:away': function () {
    var user = Meteor.user();
    UserPresence.runCallbacks(user, 'away');
  }
});
/////////////////////////////////////////////////////////////////////////////////////////////////

}},"utils":{"index.js":function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                             //
// packages/konecty_user-presence/utils/index.js                                               //
//                                                                                             //
/////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                               //
module.export({
  debounce: function () {
    return debounce;
  }
});

function debounce(func, wait) {
  var timeout;
  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(function () {
      return func.apply(void 0, args);
    }, wait);
  };
}

;
/////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});

require("/node_modules/meteor/konecty:user-presence/common/common.js");
require("/node_modules/meteor/konecty:user-presence/client/client.js");

/* Exports */
Package._define("konecty:user-presence", {
  UserPresence: UserPresence,
  UsersSessions: UsersSessions
});

})();
