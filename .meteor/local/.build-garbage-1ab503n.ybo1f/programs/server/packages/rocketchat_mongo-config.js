(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var ECMAScript = Package.ecmascript.ECMAScript;
var MongoInternals = Package.mongo.MongoInternals;
var Mongo = Package.mongo.Mongo;
var Email = Package.email.Email;
var EmailInternals = Package.email.EmailInternals;
var HTTP = Package.http.HTTP;
var HTTPInternals = Package.http.HTTPInternals;
var meteorInstall = Package.modules.meteorInstall;
var Promise = Package.promise.Promise;

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:mongo-config":{"server":{"index.js":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                        //
// packages/rocketchat_mongo-config/server/index.js                                                       //
//                                                                                                        //
////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                          //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let tls;
module.link("tls", {
  default(v) {
    tls = v;
  }

}, 0);
let PassThrough;
module.link("stream", {
  PassThrough(v) {
    PassThrough = v;
  }

}, 1);
let EmailTest, Email;
module.link("meteor/email", {
  EmailTest(v) {
    EmailTest = v;
  },

  Email(v) {
    Email = v;
  }

}, 2);
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 3);
let HTTP;
module.link("meteor/http", {
  HTTP(v) {
    HTTP = v;
  }

}, 4);

if (!process.env.USE_NATIVE_OPLOG) {
  Package['disable-oplog'] = {};
} // Set default HTTP call timeout to 20s


const envTimeout = parseInt(process.env.HTTP_DEFAULT_TIMEOUT, 10);
const timeout = !isNaN(envTimeout) ? envTimeout : 20000;
const {
  call
} = HTTP;

HTTP.call = function _call(method, url) {
  let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  let callback = arguments.length > 3 ? arguments[3] : undefined;
  const defaultTimeout = 'timeout' in options ? options : _objectSpread(_objectSpread({}, options), {}, {
    timeout
  });
  return call.call(HTTP, method, url, defaultTimeout, callback);
}; // FIX For TLS error see more here https://github.com/RocketChat/Rocket.Chat/issues/9316
// TODO: Remove after NodeJS fix it, more information
// https://github.com/nodejs/node/issues/16196
// https://github.com/nodejs/node/pull/16853
// This is fixed in Node 10, but this supports LTS versions


tls.DEFAULT_ECDH_CURVE = 'auto';

const mongoConnectionOptions = _objectSpread({}, !process.env.MONGO_URL.includes('retryWrites') && {
  retryWrites: false
});

const mongoOptionStr = process.env.MONGO_OPTIONS;

if (typeof mongoOptionStr !== 'undefined') {
  const mongoOptions = JSON.parse(mongoOptionStr);
  Object.assign(mongoConnectionOptions, mongoOptions);
}

if (Object.keys(mongoConnectionOptions).length > 0) {
  Mongo.setConnectionOptions(mongoConnectionOptions);
}

process.env.HTTP_FORWARDED_COUNT = process.env.HTTP_FORWARDED_COUNT || '1'; // Send emails to a "fake" stream instead of print them in console

if (process.env.NODE_ENV !== 'development') {
  const stream = new PassThrough();
  EmailTest.overrideOutputStream(stream);
  stream.on('data', () => {});
  stream.on('end', () => {});
} // Just print to logs if in TEST_MODE due to a bug in Meteor 2.5: TypeError: Cannot read property '_syncSendMail' of null


if (process.env.TEST_MODE === 'true') {
  Email.send = function _send(options) {
    console.log('Email.send', options);
  };
}
////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});

var exports = require("/node_modules/meteor/rocketchat:mongo-config/server/index.js");

/* Exports */
Package._define("rocketchat:mongo-config", exports);

})();

//# sourceURL=meteor://💻app/packages/rocketchat_mongo-config.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvcm9ja2V0Y2hhdDptb25nby1jb25maWcvc2VydmVyL2luZGV4LmpzIl0sIm5hbWVzIjpbIl9vYmplY3RTcHJlYWQiLCJtb2R1bGUiLCJsaW5rIiwiZGVmYXVsdCIsInYiLCJ0bHMiLCJQYXNzVGhyb3VnaCIsIkVtYWlsVGVzdCIsIkVtYWlsIiwiTW9uZ28iLCJIVFRQIiwicHJvY2VzcyIsImVudiIsIlVTRV9OQVRJVkVfT1BMT0ciLCJQYWNrYWdlIiwiZW52VGltZW91dCIsInBhcnNlSW50IiwiSFRUUF9ERUZBVUxUX1RJTUVPVVQiLCJ0aW1lb3V0IiwiaXNOYU4iLCJjYWxsIiwiX2NhbGwiLCJtZXRob2QiLCJ1cmwiLCJvcHRpb25zIiwiY2FsbGJhY2siLCJkZWZhdWx0VGltZW91dCIsIkRFRkFVTFRfRUNESF9DVVJWRSIsIm1vbmdvQ29ubmVjdGlvbk9wdGlvbnMiLCJNT05HT19VUkwiLCJpbmNsdWRlcyIsInJldHJ5V3JpdGVzIiwibW9uZ29PcHRpb25TdHIiLCJNT05HT19PUFRJT05TIiwibW9uZ29PcHRpb25zIiwiSlNPTiIsInBhcnNlIiwiT2JqZWN0IiwiYXNzaWduIiwia2V5cyIsImxlbmd0aCIsInNldENvbm5lY3Rpb25PcHRpb25zIiwiSFRUUF9GT1JXQVJERURfQ09VTlQiLCJOT0RFX0VOViIsInN0cmVhbSIsIm92ZXJyaWRlT3V0cHV0U3RyZWFtIiwib24iLCJURVNUX01PREUiLCJzZW5kIiwiX3NlbmQiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJQSxhQUFKOztBQUFrQkMsTUFBTSxDQUFDQyxJQUFQLENBQVksc0NBQVosRUFBbUQ7QUFBQ0MsU0FBTyxDQUFDQyxDQUFELEVBQUc7QUFBQ0osaUJBQWEsR0FBQ0ksQ0FBZDtBQUFnQjs7QUFBNUIsQ0FBbkQsRUFBaUYsQ0FBakY7QUFBbEIsSUFBSUMsR0FBSjtBQUFRSixNQUFNLENBQUNDLElBQVAsQ0FBWSxLQUFaLEVBQWtCO0FBQUNDLFNBQU8sQ0FBQ0MsQ0FBRCxFQUFHO0FBQUNDLE9BQUcsR0FBQ0QsQ0FBSjtBQUFNOztBQUFsQixDQUFsQixFQUFzQyxDQUF0QztBQUF5QyxJQUFJRSxXQUFKO0FBQWdCTCxNQUFNLENBQUNDLElBQVAsQ0FBWSxRQUFaLEVBQXFCO0FBQUNJLGFBQVcsQ0FBQ0YsQ0FBRCxFQUFHO0FBQUNFLGVBQVcsR0FBQ0YsQ0FBWjtBQUFjOztBQUE5QixDQUFyQixFQUFxRCxDQUFyRDtBQUF3RCxJQUFJRyxTQUFKLEVBQWNDLEtBQWQ7QUFBb0JQLE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLGNBQVosRUFBMkI7QUFBQ0ssV0FBUyxDQUFDSCxDQUFELEVBQUc7QUFBQ0csYUFBUyxHQUFDSCxDQUFWO0FBQVksR0FBMUI7O0FBQTJCSSxPQUFLLENBQUNKLENBQUQsRUFBRztBQUFDSSxTQUFLLEdBQUNKLENBQU47QUFBUTs7QUFBNUMsQ0FBM0IsRUFBeUUsQ0FBekU7QUFBNEUsSUFBSUssS0FBSjtBQUFVUixNQUFNLENBQUNDLElBQVAsQ0FBWSxjQUFaLEVBQTJCO0FBQUNPLE9BQUssQ0FBQ0wsQ0FBRCxFQUFHO0FBQUNLLFNBQUssR0FBQ0wsQ0FBTjtBQUFROztBQUFsQixDQUEzQixFQUErQyxDQUEvQztBQUFrRCxJQUFJTSxJQUFKO0FBQVNULE1BQU0sQ0FBQ0MsSUFBUCxDQUFZLGFBQVosRUFBMEI7QUFBQ1EsTUFBSSxDQUFDTixDQUFELEVBQUc7QUFBQ00sUUFBSSxHQUFDTixDQUFMO0FBQU87O0FBQWhCLENBQTFCLEVBQTRDLENBQTVDOztBQU85UixJQUFJLENBQUNPLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxnQkFBakIsRUFBbUM7QUFDbENDLFNBQU8sQ0FBQyxlQUFELENBQVAsR0FBMkIsRUFBM0I7QUFDQSxDLENBRUQ7OztBQUNBLE1BQU1DLFVBQVUsR0FBR0MsUUFBUSxDQUFDTCxPQUFPLENBQUNDLEdBQVIsQ0FBWUssb0JBQWIsRUFBbUMsRUFBbkMsQ0FBM0I7QUFDQSxNQUFNQyxPQUFPLEdBQUcsQ0FBQ0MsS0FBSyxDQUFDSixVQUFELENBQU4sR0FBcUJBLFVBQXJCLEdBQWtDLEtBQWxEO0FBRUEsTUFBTTtBQUFFSztBQUFGLElBQVdWLElBQWpCOztBQUNBQSxJQUFJLENBQUNVLElBQUwsR0FBWSxTQUFTQyxLQUFULENBQWVDLE1BQWYsRUFBdUJDLEdBQXZCLEVBQW9EO0FBQUEsTUFBeEJDLE9BQXdCLHVFQUFkLEVBQWM7QUFBQSxNQUFWQyxRQUFVO0FBQy9ELFFBQU1DLGNBQWMsR0FBRyxhQUFhRixPQUFiLEdBQXVCQSxPQUF2QixtQ0FBc0NBLE9BQXRDO0FBQStDTjtBQUEvQyxJQUF2QjtBQUVBLFNBQU9FLElBQUksQ0FBQ0EsSUFBTCxDQUFVVixJQUFWLEVBQWdCWSxNQUFoQixFQUF3QkMsR0FBeEIsRUFBNkJHLGNBQTdCLEVBQTZDRCxRQUE3QyxDQUFQO0FBQ0EsQ0FKRCxDLENBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0FwQixHQUFHLENBQUNzQixrQkFBSixHQUF5QixNQUF6Qjs7QUFFQSxNQUFNQyxzQkFBc0IscUJBRXZCLENBQUNqQixPQUFPLENBQUNDLEdBQVIsQ0FBWWlCLFNBQVosQ0FBc0JDLFFBQXRCLENBQStCLGFBQS9CLENBQUQsSUFBa0Q7QUFBRUMsYUFBVyxFQUFFO0FBQWYsQ0FGM0IsQ0FBNUI7O0FBTUEsTUFBTUMsY0FBYyxHQUFHckIsT0FBTyxDQUFDQyxHQUFSLENBQVlxQixhQUFuQzs7QUFDQSxJQUFJLE9BQU9ELGNBQVAsS0FBMEIsV0FBOUIsRUFBMkM7QUFDMUMsUUFBTUUsWUFBWSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0osY0FBWCxDQUFyQjtBQUNBSyxRQUFNLENBQUNDLE1BQVAsQ0FBY1Ysc0JBQWQsRUFBc0NNLFlBQXRDO0FBQ0E7O0FBRUQsSUFBSUcsTUFBTSxDQUFDRSxJQUFQLENBQVlYLHNCQUFaLEVBQW9DWSxNQUFwQyxHQUE2QyxDQUFqRCxFQUFvRDtBQUNuRC9CLE9BQUssQ0FBQ2dDLG9CQUFOLENBQTJCYixzQkFBM0I7QUFDQTs7QUFFRGpCLE9BQU8sQ0FBQ0MsR0FBUixDQUFZOEIsb0JBQVosR0FBbUMvQixPQUFPLENBQUNDLEdBQVIsQ0FBWThCLG9CQUFaLElBQW9DLEdBQXZFLEMsQ0FFQTs7QUFDQSxJQUFJL0IsT0FBTyxDQUFDQyxHQUFSLENBQVkrQixRQUFaLEtBQXlCLGFBQTdCLEVBQTRDO0FBQzNDLFFBQU1DLE1BQU0sR0FBRyxJQUFJdEMsV0FBSixFQUFmO0FBQ0FDLFdBQVMsQ0FBQ3NDLG9CQUFWLENBQStCRCxNQUEvQjtBQUNBQSxRQUFNLENBQUNFLEVBQVAsQ0FBVSxNQUFWLEVBQWtCLE1BQU0sQ0FBRSxDQUExQjtBQUNBRixRQUFNLENBQUNFLEVBQVAsQ0FBVSxLQUFWLEVBQWlCLE1BQU0sQ0FBRSxDQUF6QjtBQUNBLEMsQ0FFRDs7O0FBQ0EsSUFBSW5DLE9BQU8sQ0FBQ0MsR0FBUixDQUFZbUMsU0FBWixLQUEwQixNQUE5QixFQUFzQztBQUNyQ3ZDLE9BQUssQ0FBQ3dDLElBQU4sR0FBYSxTQUFTQyxLQUFULENBQWV6QixPQUFmLEVBQXdCO0FBQ3BDMEIsV0FBTyxDQUFDQyxHQUFSLENBQVksWUFBWixFQUEwQjNCLE9BQTFCO0FBQ0EsR0FGRDtBQUdBLEMiLCJmaWxlIjoiL3BhY2thZ2VzL3JvY2tldGNoYXRfbW9uZ28tY29uZmlnLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHRscyBmcm9tICd0bHMnO1xuaW1wb3J0IHsgUGFzc1Rocm91Z2ggfSBmcm9tICdzdHJlYW0nO1xuXG5pbXBvcnQgeyBFbWFpbFRlc3QsIEVtYWlsIH0gZnJvbSAnbWV0ZW9yL2VtYWlsJztcbmltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcbmltcG9ydCB7IEhUVFAgfSBmcm9tICdtZXRlb3IvaHR0cCc7XG5cbmlmICghcHJvY2Vzcy5lbnYuVVNFX05BVElWRV9PUExPRykge1xuXHRQYWNrYWdlWydkaXNhYmxlLW9wbG9nJ10gPSB7fTtcbn1cblxuLy8gU2V0IGRlZmF1bHQgSFRUUCBjYWxsIHRpbWVvdXQgdG8gMjBzXG5jb25zdCBlbnZUaW1lb3V0ID0gcGFyc2VJbnQocHJvY2Vzcy5lbnYuSFRUUF9ERUZBVUxUX1RJTUVPVVQsIDEwKTtcbmNvbnN0IHRpbWVvdXQgPSAhaXNOYU4oZW52VGltZW91dCkgPyBlbnZUaW1lb3V0IDogMjAwMDA7XG5cbmNvbnN0IHsgY2FsbCB9ID0gSFRUUDtcbkhUVFAuY2FsbCA9IGZ1bmN0aW9uIF9jYWxsKG1ldGhvZCwgdXJsLCBvcHRpb25zID0ge30sIGNhbGxiYWNrKSB7XG5cdGNvbnN0IGRlZmF1bHRUaW1lb3V0ID0gJ3RpbWVvdXQnIGluIG9wdGlvbnMgPyBvcHRpb25zIDogeyAuLi5vcHRpb25zLCB0aW1lb3V0IH07XG5cblx0cmV0dXJuIGNhbGwuY2FsbChIVFRQLCBtZXRob2QsIHVybCwgZGVmYXVsdFRpbWVvdXQsIGNhbGxiYWNrKTtcbn07XG5cbi8vIEZJWCBGb3IgVExTIGVycm9yIHNlZSBtb3JlIGhlcmUgaHR0cHM6Ly9naXRodWIuY29tL1JvY2tldENoYXQvUm9ja2V0LkNoYXQvaXNzdWVzLzkzMTZcbi8vIFRPRE86IFJlbW92ZSBhZnRlciBOb2RlSlMgZml4IGl0LCBtb3JlIGluZm9ybWF0aW9uXG4vLyBodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL25vZGUvaXNzdWVzLzE2MTk2XG4vLyBodHRwczovL2dpdGh1Yi5jb20vbm9kZWpzL25vZGUvcHVsbC8xNjg1M1xuLy8gVGhpcyBpcyBmaXhlZCBpbiBOb2RlIDEwLCBidXQgdGhpcyBzdXBwb3J0cyBMVFMgdmVyc2lvbnNcbnRscy5ERUZBVUxUX0VDREhfQ1VSVkUgPSAnYXV0byc7XG5cbmNvbnN0IG1vbmdvQ29ubmVjdGlvbk9wdGlvbnMgPSB7XG5cdC8vIGFkZCByZXRyeVdyaXRlcz1mYWxzZSBpZiBub3QgcHJlc2VudCBpbiBNT05HT19VUkxcblx0Li4uKCFwcm9jZXNzLmVudi5NT05HT19VUkwuaW5jbHVkZXMoJ3JldHJ5V3JpdGVzJykgJiYgeyByZXRyeVdyaXRlczogZmFsc2UgfSksXG5cdC8vIGlnbm9yZVVuZGVmaW5lZDogZmFsc2UsIC8vIFRPRE8gZXZhbHVhdGUgYWRkaW5nIHRoaXMgY29uZmlnXG59O1xuXG5jb25zdCBtb25nb09wdGlvblN0ciA9IHByb2Nlc3MuZW52Lk1PTkdPX09QVElPTlM7XG5pZiAodHlwZW9mIG1vbmdvT3B0aW9uU3RyICE9PSAndW5kZWZpbmVkJykge1xuXHRjb25zdCBtb25nb09wdGlvbnMgPSBKU09OLnBhcnNlKG1vbmdvT3B0aW9uU3RyKTtcblx0T2JqZWN0LmFzc2lnbihtb25nb0Nvbm5lY3Rpb25PcHRpb25zLCBtb25nb09wdGlvbnMpO1xufVxuXG5pZiAoT2JqZWN0LmtleXMobW9uZ29Db25uZWN0aW9uT3B0aW9ucykubGVuZ3RoID4gMCkge1xuXHRNb25nby5zZXRDb25uZWN0aW9uT3B0aW9ucyhtb25nb0Nvbm5lY3Rpb25PcHRpb25zKTtcbn1cblxucHJvY2Vzcy5lbnYuSFRUUF9GT1JXQVJERURfQ09VTlQgPSBwcm9jZXNzLmVudi5IVFRQX0ZPUldBUkRFRF9DT1VOVCB8fCAnMSc7XG5cbi8vIFNlbmQgZW1haWxzIHRvIGEgXCJmYWtlXCIgc3RyZWFtIGluc3RlYWQgb2YgcHJpbnQgdGhlbSBpbiBjb25zb2xlXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdkZXZlbG9wbWVudCcpIHtcblx0Y29uc3Qgc3RyZWFtID0gbmV3IFBhc3NUaHJvdWdoKCk7XG5cdEVtYWlsVGVzdC5vdmVycmlkZU91dHB1dFN0cmVhbShzdHJlYW0pO1xuXHRzdHJlYW0ub24oJ2RhdGEnLCAoKSA9PiB7fSk7XG5cdHN0cmVhbS5vbignZW5kJywgKCkgPT4ge30pO1xufVxuXG4vLyBKdXN0IHByaW50IHRvIGxvZ3MgaWYgaW4gVEVTVF9NT0RFIGR1ZSB0byBhIGJ1ZyBpbiBNZXRlb3IgMi41OiBUeXBlRXJyb3I6IENhbm5vdCByZWFkIHByb3BlcnR5ICdfc3luY1NlbmRNYWlsJyBvZiBudWxsXG5pZiAocHJvY2Vzcy5lbnYuVEVTVF9NT0RFID09PSAndHJ1ZScpIHtcblx0RW1haWwuc2VuZCA9IGZ1bmN0aW9uIF9zZW5kKG9wdGlvbnMpIHtcblx0XHRjb25zb2xlLmxvZygnRW1haWwuc2VuZCcsIG9wdGlvbnMpO1xuXHR9O1xufVxuIl19
