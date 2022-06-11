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
var meteorInstall = Package.modules.meteorInstall;
var meteorBabelHelpers = Package.modules.meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;

/* Package-scope variables */
var Facts;

var require = meteorInstall({"node_modules":{"meteor":{"facts-base":{"facts_base_common.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////
//                                                                   //
// packages/facts-base/facts_base_common.js                          //
//                                                                   //
///////////////////////////////////////////////////////////////////////
                                                                     //
module.export({
  Facts: function () {
    return Facts;
  },
  FACTS_COLLECTION: function () {
    return FACTS_COLLECTION;
  },
  FACTS_PUBLICATION: function () {
    return FACTS_PUBLICATION;
  }
});
var Facts = {};
var FACTS_COLLECTION = 'meteor_Facts_server';
var FACTS_PUBLICATION = 'meteor_facts';
///////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});

var exports = require("/node_modules/meteor/facts-base/facts_base_common.js");

/* Exports */
Package._define("facts-base", exports, {
  Facts: Facts
});

})();
