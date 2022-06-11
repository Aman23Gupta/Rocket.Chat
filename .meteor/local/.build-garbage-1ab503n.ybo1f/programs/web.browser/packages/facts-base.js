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
var Promise = Package.promise.Promise;

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
  Facts: () => Facts,
  FACTS_COLLECTION: () => FACTS_COLLECTION,
  FACTS_PUBLICATION: () => FACTS_PUBLICATION
});
const Facts = {};
const FACTS_COLLECTION = 'meteor_Facts_server';
const FACTS_PUBLICATION = 'meteor_facts';
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
