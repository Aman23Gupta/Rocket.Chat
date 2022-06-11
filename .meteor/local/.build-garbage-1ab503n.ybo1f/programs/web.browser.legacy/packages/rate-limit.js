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
var Random = Package.random.Random;
var meteorInstall = Package.modules.meteorInstall;
var meteorBabelHelpers = Package.modules.meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;

/* Package-scope variables */
var RateLimiter;

var require = meteorInstall({"node_modules":{"meteor":{"rate-limit":{"rate-limit.js":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/rate-limit/rate-limit.js                                                                              //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
module.export({
  RateLimiter: function () {
    return RateLimiter;
  }
});
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);
var Random;
module.link("meteor/random", {
  Random: function (v) {
    Random = v;
  }
}, 1);
// Default time interval (in milliseconds) to reset rate limit counters
var DEFAULT_INTERVAL_TIME_IN_MILLISECONDS = 1000; // Default number of events allowed per time interval

var DEFAULT_REQUESTS_PER_INTERVAL = 10;
var hasOwn = Object.prototype.hasOwnProperty; // A rule is defined by an options object that contains two fields,
// `numRequestsAllowed` which is the number of events allowed per interval, and
// an `intervalTime` which is the amount of time in milliseconds before the
// rate limit restarts its internal counters, and by a matchers object. A
// matchers object is a POJO that contains a set of keys with values that
// define the entire set of inputs that match for each key. The values can
// either be null (optional), a primitive or a function that returns a boolean
// of whether the provided input's value matches for this key.
//
// Rules are uniquely assigned an `id` and they store a dictionary of counters,
// which are records used to keep track of inputs that match the rule. If a
// counter reaches the `numRequestsAllowed` within a given `intervalTime`, a
// rate limit is reached and future inputs that map to that counter will
// result in errors being returned to the client.

var Rule = /*#__PURE__*/function () {
  function Rule(options, matchers) {
    this.id = Random.id();
    this.options = options;
    this._matchers = matchers;
    this._lastResetTime = new Date().getTime(); // Dictionary of input keys to counters

    this.counters = {};
  } // Determine if this rule applies to the given input by comparing all
  // rule.matchers. If the match fails, search short circuits instead of
  // iterating through all matchers.


  var _proto = Rule.prototype;

  _proto.match = function () {
    function match(input) {
      return Object.entries(this._matchers).every(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            matcher = _ref2[1];

        if (matcher !== null) {
          if (!hasOwn.call(input, key)) {
            return false;
          } else if (typeof matcher === 'function') {
            if (!matcher(input[key])) {
              return false;
            }
          } else if (matcher !== input[key]) {
            return false;
          }
        }

        return true;
      });
    }

    return match;
  }() // Generates unique key string for provided input by concatenating all the
  // keys in the matcher with the corresponding values in the input.
  // Only called if rule matches input.
  ;

  _proto._generateKeyString = function () {
    function _generateKeyString(input) {
      var _this = this;

      return Object.entries(this._matchers).filter(function (_ref3) {
        var _ref4 = _slicedToArray(_ref3, 1),
            key = _ref4[0];

        return _this._matchers[key] !== null;
      }).reduce(function (returnString, _ref5) {
        var _ref6 = _slicedToArray(_ref5, 2),
            key = _ref6[0],
            matcher = _ref6[1];

        if (typeof matcher === 'function') {
          if (matcher(input[key])) {
            returnString += key + input[key];
          }
        } else {
          returnString += key + input[key];
        }

        return returnString;
      }, '');
    }

    return _generateKeyString;
  }() // Applies the provided input and returns the key string, time since counters
  // were last reset and time to next reset.
  ;

  _proto.apply = function () {
    function apply(input) {
      var key = this._generateKeyString(input);

      var timeSinceLastReset = new Date().getTime() - this._lastResetTime;

      var timeToNextReset = this.options.intervalTime - timeSinceLastReset;
      return {
        key: key,
        timeSinceLastReset: timeSinceLastReset,
        timeToNextReset: timeToNextReset
      };
    }

    return apply;
  }() // Reset counter dictionary for this specific rule. Called once the
  // timeSinceLastReset has exceeded the intervalTime. _lastResetTime is
  // set to be the current time in milliseconds.
  ;

  _proto.resetCounter = function () {
    function resetCounter() {
      // Delete the old counters dictionary to allow for garbage collection
      this.counters = {};
      this._lastResetTime = new Date().getTime();
    }

    return resetCounter;
  }();

  _proto._executeCallback = function () {
    function _executeCallback(reply, ruleInput) {
      try {
        if (this.options.callback) {
          this.options.callback(reply, ruleInput);
        }
      } catch (e) {
        // Do not throw error here
        console.error(e);
      }
    }

    return _executeCallback;
  }();

  return Rule;
}();

var RateLimiter = /*#__PURE__*/function () {
  // Initialize rules to be an empty dictionary.
  function RateLimiter() {
    // Dictionary of all rules associated with this RateLimiter, keyed by their
    // id. Each rule object stores the rule pattern, number of events allowed,
    // last reset time and the rule reset interval in milliseconds.
    this.rules = {};
  }
  /**
  * Checks if this input has exceeded any rate limits.
  * @param  {object} input dictionary containing key-value pairs of attributes
  * that match to rules
  * @return {object} Returns object of following structure
  * { 'allowed': boolean - is this input allowed
  *   'timeToReset': integer | Infinity - returns time until counters are reset
  *                   in milliseconds
  *   'numInvocationsLeft': integer | Infinity - returns number of calls left
  *   before limit is reached
  * }
  * If multiple rules match, the least number of invocations left is returned.
  * If the rate limit has been reached, the longest timeToReset is returned.
  */


  var _proto2 = RateLimiter.prototype;

  _proto2.check = function () {
    function check(input) {
      var reply = {
        allowed: true,
        timeToReset: 0,
        numInvocationsLeft: Infinity
      };

      var matchedRules = this._findAllMatchingRules(input);

      matchedRules.forEach(function (rule) {
        var ruleResult = rule.apply(input);
        var numInvocations = rule.counters[ruleResult.key];

        if (ruleResult.timeToNextReset < 0) {
          // Reset all the counters since the rule has reset
          rule.resetCounter();
          ruleResult.timeSinceLastReset = new Date().getTime() - rule._lastResetTime;
          ruleResult.timeToNextReset = rule.options.intervalTime;
          numInvocations = 0;
        }

        if (numInvocations > rule.options.numRequestsAllowed) {
          // Only update timeToReset if the new time would be longer than the
          // previously set time. This is to ensure that if this input triggers
          // multiple rules, we return the longest period of time until they can
          // successfully make another call
          if (reply.timeToReset < ruleResult.timeToNextReset) {
            reply.timeToReset = ruleResult.timeToNextReset;
          }

          reply.allowed = false;
          reply.numInvocationsLeft = 0;

          rule._executeCallback(reply, input);
        } else {
          // If this is an allowed attempt and we haven't failed on any of the
          // other rules that match, update the reply field.
          if (rule.options.numRequestsAllowed - numInvocations < reply.numInvocationsLeft && reply.allowed) {
            reply.timeToReset = ruleResult.timeToNextReset;
            reply.numInvocationsLeft = rule.options.numRequestsAllowed - numInvocations;
          }

          rule._executeCallback(reply, input);
        }
      });
      return reply;
    }

    return check;
  }()
  /**
  * Adds a rule to dictionary of rules that are checked against on every call.
  * Only inputs that pass all of the rules will be allowed. Returns unique rule
  * id that can be passed to `removeRule`.
  * @param {object} rule    Input dictionary defining certain attributes and
  * rules associated with them.
  * Each attribute's value can either be a value, a function or null. All
  * functions must return a boolean of whether the input is matched by that
  * attribute's rule or not
  * @param {integer} numRequestsAllowed Optional. Number of events allowed per
  * interval. Default = 10.
  * @param {integer} intervalTime Optional. Number of milliseconds before
  * rule's counters are reset. Default = 1000.
  * @param {function} callback Optional. Function to be called after a
  * rule is executed. Two objects will be passed to this function.
  * The first one is the result of RateLimiter.prototype.check
  * The second is the input object of the rule, it has the following structure:
  * {
  *   'type': string - either 'method' or 'subscription'
  *   'name': string - the name of the method or subscription being called
  *   'userId': string - the user ID attempting the method or subscription
  *   'connectionId': string - a string representing the user's DDP connection
  *   'clientAddress': string - the IP address of the user
  * }
  * @return {string} Returns unique rule id
  */
  ;

  _proto2.addRule = function () {
    function addRule(rule, numRequestsAllowed, intervalTime, callback) {
      var options = {
        numRequestsAllowed: numRequestsAllowed || DEFAULT_REQUESTS_PER_INTERVAL,
        intervalTime: intervalTime || DEFAULT_INTERVAL_TIME_IN_MILLISECONDS,
        callback: callback && Meteor.bindEnvironment(callback)
      };
      var newRule = new Rule(options, rule);
      this.rules[newRule.id] = newRule;
      return newRule.id;
    }

    return addRule;
  }()
  /**
  * Increment counters in every rule that match to this input
  * @param  {object} input Dictionary object containing attributes that may
  * match to rules
  */
  ;

  _proto2.increment = function () {
    function increment(input) {
      // Only increment rule counters that match this input
      var matchedRules = this._findAllMatchingRules(input);

      matchedRules.forEach(function (rule) {
        var ruleResult = rule.apply(input);

        if (ruleResult.timeSinceLastReset > rule.options.intervalTime) {
          // Reset all the counters since the rule has reset
          rule.resetCounter();
        } // Check whether the key exists, incrementing it if so or otherwise
        // adding the key and setting its value to 1


        if (hasOwn.call(rule.counters, ruleResult.key)) {
          rule.counters[ruleResult.key]++;
        } else {
          rule.counters[ruleResult.key] = 1;
        }
      });
    }

    return increment;
  }() // Returns an array of all rules that apply to provided input
  ;

  _proto2._findAllMatchingRules = function () {
    function _findAllMatchingRules(input) {
      return Object.values(this.rules).filter(function (rule) {
        return rule.match(input);
      });
    }

    return _findAllMatchingRules;
  }()
  /**
   * Provides a mechanism to remove rules from the rate limiter. Returns boolean
   * about success.
   * @param  {string} id Rule id returned from #addRule
   * @return {boolean} Returns true if rule was found and deleted, else false.
   */
  ;

  _proto2.removeRule = function () {
    function removeRule(id) {
      if (this.rules[id]) {
        delete this.rules[id];
        return true;
      }

      return false;
    }

    return removeRule;
  }();

  return RateLimiter;
}();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});

var exports = require("/node_modules/meteor/rate-limit/rate-limit.js");

/* Exports */
Package._define("rate-limit", exports, {
  RateLimiter: RateLimiter
});

})();
