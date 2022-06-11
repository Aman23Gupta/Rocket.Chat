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
var check = Package.check.check;
var Match = Package.check.Match;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var HTTP = Package.http.HTTP;
var meteorInstall = Package.modules.meteorInstall;
var Promise = Package.promise.Promise;

var require = meteorInstall({"node_modules":{"meteor":{"mizzao:timesync":{"client":{"index.js":function module(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/mizzao_timesync/client/index.js                                                                         //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
module.export({
  TimeSync: () => TimeSync,
  SyncInternals: () => SyncInternals
});
let TimeSync, SyncInternals;
module.link("./timesync-client", {
  TimeSync(v) {
    TimeSync = v;
  },

  SyncInternals(v) {
    SyncInternals = v;
  }

}, 0);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"timesync-client.js":function module(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                  //
// packages/mizzao_timesync/client/timesync-client.js                                                               //
//                                                                                                                  //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                    //
module.export({
  TimeSync: () => TimeSync,
  SyncInternals: () => SyncInternals
});
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let Tracker;
module.link("meteor/tracker", {
  Tracker(v) {
    Tracker = v;
  }

}, 1);
let HTTP;
module.link("meteor/http", {
  HTTP(v) {
    HTTP = v;
  }

}, 2);

//IE8 doesn't have Date.now()
Date.now = Date.now || function () {
  return +new Date();
};

const TimeSync = {
  loggingEnabled: true
};

function
  /* arguments */
log() {
  if (TimeSync.loggingEnabled) {
    Meteor._debug.apply(this, arguments);
  }
}

var defaultInterval = 1000; // Internal values, exported for testing

const SyncInternals = {
  offset: undefined,
  roundTripTime: undefined,
  offsetDep: new Tracker.Dependency(),
  timeTick: {},
  timeCheck: function (lastTime, currentTime, interval, tolerance) {
    if (Math.abs(currentTime - lastTime - interval) < tolerance) {
      // Everything is A-OK
      return true;
    } // We're no longer in sync.


    return false;
  }
};
SyncInternals.timeTick[defaultInterval] = new Tracker.Dependency();
var maxAttempts = 5;
var attempts = 0;
/*
  This is an approximation of
  http://en.wikipedia.org/wiki/Network_Time_Protocol

  If this turns out to be more accurate under the connect handlers,
  we should try taking multiple measurements.
 */

var syncUrl = "/_timesync";

if (__meteor_runtime_config__.ROOT_URL_PATH_PREFIX) {
  syncUrl = __meteor_runtime_config__.ROOT_URL_PATH_PREFIX + syncUrl;
}

var updateOffset = function () {
  var t0 = Date.now();
  HTTP.get(syncUrl, function (err, response) {
    var t3 = Date.now(); // Grab this now

    if (err) {
      //  We'll still use our last computed offset if is defined
      log("Error syncing to server time: ", err);
      if (++attempts <= maxAttempts) Meteor.setTimeout(TimeSync.resync, 1000);else log("Max number of time sync attempts reached. Giving up.");
      return;
    }

    attempts = 0; // It worked

    var ts = parseInt(response.content);
    SyncInternals.offset = Math.round((ts - t0 + (ts - t3)) / 2);
    SyncInternals.roundTripTime = t3 - t0; // - (ts - ts) which is 0

    SyncInternals.offsetDep.changed();
  });
}; // Reactive variable for server time that updates every second.


TimeSync.serverTime = function (clientTime, interval) {
  check(interval, Match.Optional(Match.Integer)); // If we don't know the offset, we can't provide the server time.

  if (!TimeSync.isSynced()) return undefined; // If a client time is provided, we don't need to depend on the tick.

  if (!clientTime) getTickDependency(interval || defaultInterval).depend(); // SyncInternals.offsetDep.depend(); implicit as we call isSynced()
  // Convert Date argument to epoch as necessary

  return (+clientTime || Date.now()) + SyncInternals.offset;
}; // Reactive variable for the difference between server and client time.


TimeSync.serverOffset = function () {
  SyncInternals.offsetDep.depend();
  return SyncInternals.offset;
};

TimeSync.roundTripTime = function () {
  SyncInternals.offsetDep.depend();
  return SyncInternals.roundTripTime;
};

TimeSync.isSynced = function () {
  SyncInternals.offsetDep.depend();
  return SyncInternals.offset !== undefined;
};

var resyncIntervalId = null;

TimeSync.resync = function () {
  if (resyncIntervalId !== null) Meteor.clearInterval(resyncIntervalId);
  updateOffset();
  resyncIntervalId = Meteor.setInterval(updateOffset, 600000);
}; // Run this as soon as we load, even before Meteor.startup()
// Run again whenever we reconnect after losing connection


var wasConnected = false;
Tracker.autorun(function () {
  var connected = Meteor.status().connected;
  if (connected && !wasConnected) TimeSync.resync();
  wasConnected = connected;
}); // Resync if unexpected change by more than a few seconds. This needs to be
// somewhat lenient, or a CPU-intensive operation can trigger a re-sync even
// when the offset is still accurate. In any case, we're not going to be able to
// catch very small system-initiated NTP adjustments with this, anyway.

var tickCheckTolerance = 5000;
var lastClientTime = Date.now(); // Set up a new interval for any amount of reactivity.

function getTickDependency(interval) {
  if (!SyncInternals.timeTick[interval]) {
    var dep = new Tracker.Dependency();
    Meteor.setInterval(function () {
      dep.changed();
    }, interval);
    SyncInternals.timeTick[interval] = dep;
  }

  return SyncInternals.timeTick[interval];
} // Set up special interval for the default tick, which also watches for re-sync


Meteor.setInterval(function () {
  var currentClientTime = Date.now();

  if (SyncInternals.timeCheck(lastClientTime, currentClientTime, defaultInterval, tickCheckTolerance)) {
    // No problem here, just keep ticking along
    SyncInternals.timeTick[defaultInterval].changed();
  } else {
    // resync on major client clock changes
    // based on http://stackoverflow.com/a/3367542/1656818
    log("Clock discrepancy detected. Attempting re-sync."); // Refuse to compute server time.

    SyncInternals.offset = undefined;
    SyncInternals.offsetDep.changed();
    TimeSync.resync();
  }

  lastClientTime = currentClientTime;
}, defaultInterval);
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});

var exports = require("/node_modules/meteor/mizzao:timesync/client/index.js");

/* Exports */
Package._define("mizzao:timesync", exports);

})();
