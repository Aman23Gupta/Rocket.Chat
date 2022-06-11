(function () {

/* Imports */
var _ = Package.underscore._;
var ECMAScript = Package.ecmascript.ECMAScript;
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var Tracker = Package.tracker.Tracker;
var Deps = Package.tracker.Deps;
var EventEmitter = Package['raix:eventemitter'].EventEmitter;
var JsonRoutes = Package['simple:json-routes'].JsonRoutes;
var RestMiddleware = Package['simple:json-routes'].RestMiddleware;
var Promise = Package.promise.Promise;
var meteorInstall = Package.modules.meteorInstall;

/* Package-scope variables */
var TAPi18next, __coffeescriptShare, TAPi18n;

var require = meteorInstall({"node_modules":{"meteor":{"rocketchat:tap-i18n":{"lib":{"tap_i18next":{"tap_i18next-1.7.3.js":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_tap-i18n/lib/tap_i18next/tap_i18next-1.7.3.js                                                  //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
!function (module1) {
  // tap_i18next is a copy of i18next that expose i18next to the global namespace
  // under the name name TAPi18next instead of i18n to (1) avoid interfering with other
  // Meteor packages that might use i18n with different configurations than we do
  // or worse - (2) using a different version of i18next
  //
  // setJqueryExt is disabled by default in TAPi18next
  // sprintf is a default postProcess in TAPi18next
  //
  // TAPi18next is set outside of the singleton builder to make it available in the
  // package level
  // i18next, v1.7.3
  // Copyright (c)2014 Jan Mühlemann (jamuhl).
  // Distributed under MIT license
  // http://i18next.com
  // set TAPi18next outside of the singleton builder to make it available in the package level
  TAPi18next = {};

  (function () {
    // add indexOf to non ECMA-262 standard compliant browsers
    if (!Array.prototype.indexOf) {
      Array.prototype.indexOf = function (searchElement
      /*, fromIndex */
      ) {
        "use strict";

        if (this == null) {
          throw new TypeError();
        }

        var t = Object(this);
        var len = t.length >>> 0;

        if (len === 0) {
          return -1;
        }

        var n = 0;

        if (arguments.length > 0) {
          n = Number(arguments[1]);

          if (n != n) {
            // shortcut for verifying if it's NaN
            n = 0;
          } else if (n != 0 && n != Infinity && n != -Infinity) {
            n = (n > 0 || -1) * Math.floor(Math.abs(n));
          }
        }

        if (n >= len) {
          return -1;
        }

        var k = n >= 0 ? n : Math.max(len - Math.abs(n), 0);

        for (; k < len; k++) {
          if (k in t && t[k] === searchElement) {
            return k;
          }
        }

        return -1;
      };
    } // add lastIndexOf to non ECMA-262 standard compliant browsers


    if (!Array.prototype.lastIndexOf) {
      Array.prototype.lastIndexOf = function (searchElement
      /*, fromIndex*/
      ) {
        "use strict";

        if (this == null) {
          throw new TypeError();
        }

        var t = Object(this);
        var len = t.length >>> 0;

        if (len === 0) {
          return -1;
        }

        var n = len;

        if (arguments.length > 1) {
          n = Number(arguments[1]);

          if (n != n) {
            n = 0;
          } else if (n != 0 && n != 1 / 0 && n != -(1 / 0)) {
            n = (n > 0 || -1) * Math.floor(Math.abs(n));
          }
        }

        var k = n >= 0 ? Math.min(n, len - 1) : len - Math.abs(n);

        for (; k >= 0; k--) {
          if (k in t && t[k] === searchElement) {
            return k;
          }
        }

        return -1;
      };
    } // Add string trim for IE8.


    if (typeof String.prototype.trim !== 'function') {
      String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g, '');
      };
    }

    var root = this,
        $ = root.jQuery || root.Zepto,
        resStore = {},
        currentLng,
        replacementCounter = 0,
        languages = [],
        initialized = false; // Export the i18next object for **CommonJS**. 
    // If we're not in CommonJS, add `i18n` to the
    // global object or to jquery.

    if (typeof module !== 'undefined' && module.exports) {
      module.exports = TAPi18next;
    } else {
      if ($) {
        $.TAPi18next = $.TAPi18next || TAPi18next;
      }

      root.TAPi18next = root.TAPi18next || TAPi18next;
    } // defaults


    var o = {
      lng: undefined,
      load: 'all',
      preload: [],
      lowerCaseLng: false,
      returnObjectTrees: false,
      fallbackLng: ['dev'],
      fallbackNS: [],
      detectLngQS: 'setLng',
      ns: 'translation',
      fallbackOnNull: true,
      fallbackOnEmpty: false,
      fallbackToDefaultNS: false,
      nsseparator: ':',
      keyseparator: '.',
      selectorAttr: 'data-i18n',
      debug: false,
      resGetPath: 'locales/__lng__/__ns__.json',
      resPostPath: 'locales/add/__lng__/__ns__',
      getAsync: true,
      postAsync: true,
      resStore: undefined,
      useLocalStorage: false,
      localStorageExpirationTime: 7 * 24 * 60 * 60 * 1000,
      dynamicLoad: false,
      sendMissing: false,
      sendMissingTo: 'fallback',
      // current | all
      sendType: 'POST',
      interpolationPrefix: '__',
      interpolationSuffix: '__',
      reusePrefix: '$t(',
      reuseSuffix: ')',
      pluralSuffix: '_plural',
      pluralNotFound: ['plural_not_found', Math.random()].join(''),
      contextNotFound: ['context_not_found', Math.random()].join(''),
      escapeInterpolation: false,
      setJqueryExt: false,
      defaultValueFromContent: true,
      useDataAttrOptions: false,
      cookieExpirationTime: undefined,
      useCookie: true,
      cookieName: 'TAPi18next',
      cookieDomain: undefined,
      objectTreeKeyHandler: undefined,
      postProcess: ["sprintf"],
      parseMissingKey: undefined,
      shortcutFunction: 'sprintf' // or: defaultValue

    };

    function _extend(target, source) {
      if (!source || typeof source === 'function') {
        return target;
      }

      for (var attr in source) {
        target[attr] = source[attr];
      }

      return target;
    }

    function _each(object, callback, args) {
      var name,
          i = 0,
          length = object.length,
          isObj = length === undefined || Object.prototype.toString.apply(object) !== '[object Array]' || typeof object === "function";

      if (args) {
        if (isObj) {
          for (name in object) {
            if (callback.apply(object[name], args) === false) {
              break;
            }
          }
        } else {
          for (; i < length;) {
            if (callback.apply(object[i++], args) === false) {
              break;
            }
          }
        } // A special, fast, case for the most common use of each

      } else {
        if (isObj) {
          for (name in object) {
            if (callback.call(object[name], name, object[name]) === false) {
              break;
            }
          }
        } else {
          for (; i < length;) {
            if (callback.call(object[i], i, object[i++]) === false) {
              break;
            }
          }
        }
      }

      return object;
    }

    var _entityMap = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': '&quot;',
      "'": '&#39;',
      "/": '&#x2F;'
    };

    function _escape(data) {
      if (typeof data === 'string') {
        return data.replace(/[&<>"'\/]/g, function (s) {
          return _entityMap[s];
        });
      } else {
        return data;
      }
    }

    function _ajax(options) {
      // v0.5.0 of https://github.com/goloroden/http.js
      var getXhr = function (callback) {
        // Use the native XHR object if the browser supports it.
        if (window.XMLHttpRequest) {
          return callback(null, new XMLHttpRequest());
        } else if (window.ActiveXObject) {
          // In Internet Explorer check for ActiveX versions of the XHR object.
          try {
            return callback(null, new ActiveXObject("Msxml2.XMLHTTP"));
          } catch (e) {
            return callback(null, new ActiveXObject("Microsoft.XMLHTTP"));
          }
        } // If no XHR support was found, throw an error.


        return callback(new Error());
      };

      var encodeUsingUrlEncoding = function (data) {
        if (typeof data === 'string') {
          return data;
        }

        var result = [];

        for (var dataItem in data) {
          if (data.hasOwnProperty(dataItem)) {
            result.push(encodeURIComponent(dataItem) + '=' + encodeURIComponent(data[dataItem]));
          }
        }

        return result.join('&');
      };

      var utf8 = function (text) {
        text = text.replace(/\r\n/g, '\n');
        var result = '';

        for (var i = 0; i < text.length; i++) {
          var c = text.charCodeAt(i);

          if (c < 128) {
            result += String.fromCharCode(c);
          } else if (c > 127 && c < 2048) {
            result += String.fromCharCode(c >> 6 | 192);
            result += String.fromCharCode(c & 63 | 128);
          } else {
            result += String.fromCharCode(c >> 12 | 224);
            result += String.fromCharCode(c >> 6 & 63 | 128);
            result += String.fromCharCode(c & 63 | 128);
          }
        }

        return result;
      };

      var base64 = function (text) {
        var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
        text = utf8(text);
        var result = '',
            chr1,
            chr2,
            chr3,
            enc1,
            enc2,
            enc3,
            enc4,
            i = 0;

        do {
          chr1 = text.charCodeAt(i++);
          chr2 = text.charCodeAt(i++);
          chr3 = text.charCodeAt(i++);
          enc1 = chr1 >> 2;
          enc2 = (chr1 & 3) << 4 | chr2 >> 4;
          enc3 = (chr2 & 15) << 2 | chr3 >> 6;
          enc4 = chr3 & 63;

          if (isNaN(chr2)) {
            enc3 = enc4 = 64;
          } else if (isNaN(chr3)) {
            enc4 = 64;
          }

          result += keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4);
          chr1 = chr2 = chr3 = '';
          enc1 = enc2 = enc3 = enc4 = '';
        } while (i < text.length);

        return result;
      };

      var mergeHeaders = function () {
        // Use the first header object as base.
        var result = arguments[0]; // Iterate through the remaining header objects and add them.

        for (var i = 1; i < arguments.length; i++) {
          var currentHeaders = arguments[i];

          for (var header in currentHeaders) {
            if (currentHeaders.hasOwnProperty(header)) {
              result[header] = currentHeaders[header];
            }
          }
        } // Return the merged headers.


        return result;
      };

      var ajax = function (method, url, options, callback) {
        // Adjust parameters.
        if (typeof options === 'function') {
          callback = options;
          options = {};
        } // Set default parameter values.


        options.cache = options.cache || false;
        options.data = options.data || {};
        options.headers = options.headers || {};
        options.jsonp = options.jsonp || false;
        options.async = options.async === undefined ? true : options.async; // Merge the various header objects.

        var headers = mergeHeaders({
          'accept': '*/*',
          'content-type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }, ajax.headers, options.headers); // Encode the data according to the content-type.

        var payload;

        if (headers['content-type'] === 'application/json') {
          payload = JSON.stringify(options.data);
        } else {
          payload = encodeUsingUrlEncoding(options.data);
        } // Specially prepare GET requests: Setup the query string, handle caching and make a JSONP call
        // if neccessary.


        if (method === 'GET') {
          // Setup the query string.
          var queryString = [];

          if (payload) {
            queryString.push(payload);
            payload = null;
          } // Handle caching.


          if (!options.cache) {
            queryString.push('_=' + new Date().getTime());
          } // If neccessary prepare the query string for a JSONP call.


          if (options.jsonp) {
            queryString.push('callback=' + options.jsonp);
            queryString.push('jsonp=' + options.jsonp);
          } // Merge the query string and attach it to the url.


          queryString = queryString.join('&');

          if (queryString.length > 1) {
            if (url.indexOf('?') > -1) {
              url += '&' + queryString;
            } else {
              url += '?' + queryString;
            }
          } // Make a JSONP call if neccessary.


          if (options.jsonp) {
            var head = document.getElementsByTagName('head')[0];
            var script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = url;
            head.appendChild(script);
            return;
          }
        } // Since we got here, it is no JSONP request, so make a normal XHR request.


        getXhr(function (err, xhr) {
          if (err) return callback(err); // Open the request.

          xhr.open(method, url, options.async); // Set the request headers.

          for (var header in headers) {
            if (headers.hasOwnProperty(header)) {
              xhr.setRequestHeader(header, headers[header]);
            }
          } // Handle the request events.


          xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
              var data = xhr.responseText || ''; // If no callback is given, return.

              if (!callback) {
                return;
              } // Return an object that provides access to the data as text and JSON.


              callback(xhr.status, {
                text: function () {
                  return data;
                },
                json: function () {
                  return JSON.parse(data);
                }
              });
            }
          }; // Actually send the XHR request.


          xhr.send(payload);
        });
      }; // Define the external interface.


      var http = {
        authBasic: function (username, password) {
          ajax.headers['Authorization'] = 'Basic ' + base64(username + ':' + password);
        },
        connect: function (url, options, callback) {
          return ajax('CONNECT', url, options, callback);
        },
        del: function (url, options, callback) {
          return ajax('DELETE', url, options, callback);
        },
        get: function (url, options, callback) {
          return ajax('GET', url, options, callback);
        },
        head: function (url, options, callback) {
          return ajax('HEAD', url, options, callback);
        },
        headers: function (headers) {
          ajax.headers = headers || {};
        },
        isAllowed: function (url, verb, callback) {
          this.options(url, function (status, data) {
            callback(data.text().indexOf(verb) !== -1);
          });
        },
        options: function (url, options, callback) {
          return ajax('OPTIONS', url, options, callback);
        },
        patch: function (url, options, callback) {
          return ajax('PATCH', url, options, callback);
        },
        post: function (url, options, callback) {
          return ajax('POST', url, options, callback);
        },
        put: function (url, options, callback) {
          return ajax('PUT', url, options, callback);
        },
        trace: function (url, options, callback) {
          return ajax('TRACE', url, options, callback);
        }
      };
      var methode = options.type ? options.type.toLowerCase() : 'get';
      http[methode](options.url, options, function (status, data) {
        if (status === 200) {
          options.success(data.json(), status, null);
        } else {
          options.error(data.text(), status, null);
        }
      });
    }

    var _cookie = {
      create: function (name, value, minutes, domain) {
        var expires;

        if (minutes) {
          var date = new Date();
          date.setTime(date.getTime() + minutes * 60 * 1000);
          expires = "; expires=" + date.toGMTString();
        } else expires = "";

        domain = domain ? "domain=" + domain + ";" : "";
        document.cookie = name + "=" + value + expires + ";" + domain + "path=/";
      },
      read: function (name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');

        for (var i = 0; i < ca.length; i++) {
          var c = ca[i];

          while (c.charAt(0) == ' ') c = c.substring(1, c.length);

          if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
        }

        return null;
      },
      remove: function (name) {
        this.create(name, "", -1);
      }
    };
    var cookie_noop = {
      create: function (name, value, minutes, domain) {},
      read: function (name) {
        return null;
      },
      remove: function (name) {}
    }; // move dependent functions to a container so that
    // they can be overriden easier in no jquery environment (node.js)

    var f = {
      extend: $ ? $.extend : _extend,
      each: $ ? $.each : _each,
      ajax: $ ? $.ajax : typeof document !== 'undefined' ? _ajax : function () {},
      cookie: typeof document !== 'undefined' ? _cookie : cookie_noop,
      detectLanguage: detectLanguage,
      escape: _escape,
      log: function (str) {
        if (o.debug && typeof console !== "undefined") console.log(str);
      },
      toLanguages: function (lng) {
        var languages = [];

        if (typeof lng === 'string' && lng.indexOf('-') > -1) {
          var parts = lng.split('-');
          lng = o.lowerCaseLng ? parts[0].toLowerCase() + '-' + parts[1].toLowerCase() : parts[0].toLowerCase() + '-' + parts[1].toUpperCase();
          if (o.load !== 'unspecific') languages.push(lng);
          if (o.load !== 'current') languages.push(parts[0]);
        } else {
          languages.push(lng);
        }

        for (var i = 0; i < o.fallbackLng.length; i++) {
          if (languages.indexOf(o.fallbackLng[i]) === -1 && o.fallbackLng[i]) languages.push(o.fallbackLng[i]);
        }

        return languages;
      },
      regexEscape: function (str) {
        return str.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
      }
    };

    function init(options, cb) {
      if (typeof options === 'function') {
        cb = options;
        options = {};
      }

      options = options || {}; // override defaults with passed in options

      f.extend(o, options);
      delete o.fixLng;
      /* passed in each time */
      // create namespace object if namespace is passed in as string

      if (typeof o.ns == 'string') {
        o.ns = {
          namespaces: [o.ns],
          defaultNs: o.ns
        };
      } // fallback namespaces


      if (typeof o.fallbackNS == 'string') {
        o.fallbackNS = [o.fallbackNS];
      } // fallback languages


      if (typeof o.fallbackLng == 'string' || typeof o.fallbackLng == 'boolean') {
        o.fallbackLng = [o.fallbackLng];
      } // escape prefix/suffix


      o.interpolationPrefixEscaped = f.regexEscape(o.interpolationPrefix);
      o.interpolationSuffixEscaped = f.regexEscape(o.interpolationSuffix);
      if (!o.lng) o.lng = f.detectLanguage();

      if (o.lng) {
        // set cookie with lng set (as detectLanguage will set cookie on need)
        if (o.useCookie) f.cookie.create(o.cookieName, o.lng, o.cookieExpirationTime, o.cookieDomain);
      } else {
        o.lng = o.fallbackLng[0];
        if (o.useCookie) f.cookie.remove(o.cookieName);
      }

      languages = f.toLanguages(o.lng);
      currentLng = languages[0];
      f.log('currentLng set to: ' + currentLng);
      var lngTranslate = translate;

      if (options.fixLng) {
        lngTranslate = function (key, options) {
          options = options || {};
          options.lng = options.lng || lngTranslate.lng;
          return translate(key, options);
        };

        lngTranslate.lng = currentLng;
      }

      pluralExtensions.setCurrentLng(currentLng); // add JQuery extensions

      if ($ && o.setJqueryExt) addJqueryFunct(); // jQuery deferred

      var deferred;

      if ($ && $.Deferred) {
        deferred = $.Deferred();
      } // return immidiatly if res are passed in


      if (o.resStore) {
        resStore = o.resStore;
        initialized = true;
        if (cb) cb(lngTranslate);
        if (deferred) deferred.resolve(lngTranslate);
        if (deferred) return deferred.promise();
        return;
      } // languages to load


      var lngsToLoad = f.toLanguages(o.lng);
      if (typeof o.preload === 'string') o.preload = [o.preload];

      for (var i = 0, l = o.preload.length; i < l; i++) {
        var pres = f.toLanguages(o.preload[i]);

        for (var y = 0, len = pres.length; y < len; y++) {
          if (lngsToLoad.indexOf(pres[y]) < 0) {
            lngsToLoad.push(pres[y]);
          }
        }
      } // else load them


      TAPi18next.sync.load(lngsToLoad, o, function (err, store) {
        resStore = store;
        initialized = true;
        if (cb) cb(lngTranslate);
        if (deferred) deferred.resolve(lngTranslate);
      });
      if (deferred) return deferred.promise();
    }

    function preload(lngs, cb) {
      if (typeof lngs === 'string') lngs = [lngs];

      for (var i = 0, l = lngs.length; i < l; i++) {
        if (o.preload.indexOf(lngs[i]) < 0) {
          o.preload.push(lngs[i]);
        }
      }

      return init(cb);
    }

    function addResourceBundle(lng, ns, resources) {
      if (typeof ns !== 'string') {
        resources = ns;
        ns = o.ns.defaultNs;
      } else if (o.ns.namespaces.indexOf(ns) < 0) {
        o.ns.namespaces.push(ns);
      }

      resStore[lng] = resStore[lng] || {};
      resStore[lng][ns] = resStore[lng][ns] || {};
      f.extend(resStore[lng][ns], resources);
    }

    function removeResourceBundle(lng, ns) {
      if (typeof ns !== 'string') {
        ns = o.ns.defaultNs;
      }

      resStore[lng] = resStore[lng] || {};
      resStore[lng][ns] = {};
    }

    function setDefaultNamespace(ns) {
      o.ns.defaultNs = ns;
    }

    function loadNamespace(namespace, cb) {
      loadNamespaces([namespace], cb);
    }

    function loadNamespaces(namespaces, cb) {
      var opts = {
        dynamicLoad: o.dynamicLoad,
        resGetPath: o.resGetPath,
        getAsync: o.getAsync,
        customLoad: o.customLoad,
        ns: {
          namespaces: namespaces,
          defaultNs: ''
        }
        /* new namespaces to load */

      }; // languages to load

      var lngsToLoad = f.toLanguages(o.lng);
      if (typeof o.preload === 'string') o.preload = [o.preload];

      for (var i = 0, l = o.preload.length; i < l; i++) {
        var pres = f.toLanguages(o.preload[i]);

        for (var y = 0, len = pres.length; y < len; y++) {
          if (lngsToLoad.indexOf(pres[y]) < 0) {
            lngsToLoad.push(pres[y]);
          }
        }
      } // check if we have to load


      var lngNeedLoad = [];

      for (var a = 0, lenA = lngsToLoad.length; a < lenA; a++) {
        var needLoad = false;
        var resSet = resStore[lngsToLoad[a]];

        if (resSet) {
          for (var b = 0, lenB = namespaces.length; b < lenB; b++) {
            if (!resSet[namespaces[b]]) needLoad = true;
          }
        } else {
          needLoad = true;
        }

        if (needLoad) lngNeedLoad.push(lngsToLoad[a]);
      }

      if (lngNeedLoad.length) {
        TAPi18next.sync._fetch(lngNeedLoad, opts, function (err, store) {
          var todo = namespaces.length * lngNeedLoad.length; // load each file individual

          f.each(namespaces, function (nsIndex, nsValue) {
            // append namespace to namespace array
            if (o.ns.namespaces.indexOf(nsValue) < 0) {
              o.ns.namespaces.push(nsValue);
            }

            f.each(lngNeedLoad, function (lngIndex, lngValue) {
              resStore[lngValue] = resStore[lngValue] || {};
              resStore[lngValue][nsValue] = store[lngValue][nsValue];
              todo--; // wait for all done befor callback

              if (todo === 0 && cb) {
                if (o.useLocalStorage) TAPi18next.sync._storeLocal(resStore);
                cb();
              }
            });
          });
        });
      } else {
        if (cb) cb();
      }
    }

    function setLng(lng, options, cb) {
      if (typeof options === 'function') {
        cb = options;
        options = {};
      } else if (!options) {
        options = {};
      }

      options.lng = lng;
      return init(options, cb);
    }

    function lng() {
      return currentLng;
    }

    function addJqueryFunct() {
      // $.t shortcut
      $.t = $.t || translate;

      function parse(ele, key, options) {
        if (key.length === 0) return;
        var attr = 'text';

        if (key.indexOf('[') === 0) {
          var parts = key.split(']');
          key = parts[1];
          attr = parts[0].substr(1, parts[0].length - 1);
        }

        if (key.indexOf(';') === key.length - 1) {
          key = key.substr(0, key.length - 2);
        }

        var optionsToUse;

        if (attr === 'html') {
          optionsToUse = o.defaultValueFromContent ? $.extend({
            defaultValue: ele.html()
          }, options) : options;
          ele.html($.t(key, optionsToUse));
        } else if (attr === 'text') {
          optionsToUse = o.defaultValueFromContent ? $.extend({
            defaultValue: ele.text()
          }, options) : options;
          ele.text($.t(key, optionsToUse));
        } else if (attr === 'prepend') {
          optionsToUse = o.defaultValueFromContent ? $.extend({
            defaultValue: ele.html()
          }, options) : options;
          ele.prepend($.t(key, optionsToUse));
        } else if (attr === 'append') {
          optionsToUse = o.defaultValueFromContent ? $.extend({
            defaultValue: ele.html()
          }, options) : options;
          ele.append($.t(key, optionsToUse));
        } else if (attr.indexOf("data-") === 0) {
          var dataAttr = attr.substr("data-".length);
          optionsToUse = o.defaultValueFromContent ? $.extend({
            defaultValue: ele.data(dataAttr)
          }, options) : options;
          var translated = $.t(key, optionsToUse); //we change into the data cache

          ele.data(dataAttr, translated); //we change into the dom

          ele.attr(attr, translated);
        } else {
          optionsToUse = o.defaultValueFromContent ? $.extend({
            defaultValue: ele.attr(attr)
          }, options) : options;
          ele.attr(attr, $.t(key, optionsToUse));
        }
      }

      function localize(ele, options) {
        var key = ele.attr(o.selectorAttr);
        if (!key && typeof key !== 'undefined' && key !== false) key = ele.text() || ele.val();
        if (!key) return;
        var target = ele,
            targetSelector = ele.data("i18n-target");

        if (targetSelector) {
          target = ele.find(targetSelector) || ele;
        }

        if (!options && o.useDataAttrOptions === true) {
          options = ele.data("i18n-options");
        }

        options = options || {};

        if (key.indexOf(';') >= 0) {
          var keys = key.split(';');
          $.each(keys, function (m, k) {
            if (k !== '') parse(target, k, options);
          });
        } else {
          parse(target, key, options);
        }

        if (o.useDataAttrOptions === true) ele.data("i18n-options", options);
      } // fn


      $.fn.TAPi18next = function (options) {
        return this.each(function () {
          // localize element itself
          localize($(this), options); // localize childs

          var elements = $(this).find('[' + o.selectorAttr + ']');
          elements.each(function () {
            localize($(this), options);
          });
        });
      };
    }

    function applyReplacement(str, replacementHash, nestedKey, options) {
      if (!str) return str;
      options = options || replacementHash; // first call uses replacement hash combined with options

      if (str.indexOf(options.interpolationPrefix || o.interpolationPrefix) < 0) return str;
      var prefix = options.interpolationPrefix ? f.regexEscape(options.interpolationPrefix) : o.interpolationPrefixEscaped,
          suffix = options.interpolationSuffix ? f.regexEscape(options.interpolationSuffix) : o.interpolationSuffixEscaped,
          unEscapingSuffix = 'HTML' + suffix;
      f.each(replacementHash, function (key, value) {
        var nextKey = nestedKey ? nestedKey + o.keyseparator + key : key;

        if (typeof value === 'object' && value !== null) {
          str = applyReplacement(str, value, nextKey, options);
        } else {
          if (options.escapeInterpolation || o.escapeInterpolation) {
            str = str.replace(new RegExp([prefix, nextKey, unEscapingSuffix].join(''), 'g'), value);
            str = str.replace(new RegExp([prefix, nextKey, suffix].join(''), 'g'), f.escape(value));
          } else {
            str = str.replace(new RegExp([prefix, nextKey, suffix].join(''), 'g'), value);
          } // str = options.escapeInterpolation;

        }
      });
      return str;
    } // append it to functions


    f.applyReplacement = applyReplacement;

    function applyReuse(translated, options) {
      var comma = ',';
      var options_open = '{';
      var options_close = '}';
      var opts = f.extend({}, options);
      delete opts.postProcess;

      while (translated.indexOf(o.reusePrefix) != -1) {
        replacementCounter++;

        if (replacementCounter > o.maxRecursion) {
          break;
        } // safety net for too much recursion


        var index_of_opening = translated.lastIndexOf(o.reusePrefix);
        var index_of_end_of_closing = translated.indexOf(o.reuseSuffix, index_of_opening) + o.reuseSuffix.length;
        var token = translated.substring(index_of_opening, index_of_end_of_closing);
        var token_without_symbols = token.replace(o.reusePrefix, '').replace(o.reuseSuffix, '');

        if (token_without_symbols.indexOf(comma) != -1) {
          var index_of_token_end_of_closing = token_without_symbols.indexOf(comma);

          if (token_without_symbols.indexOf(options_open, index_of_token_end_of_closing) != -1 && token_without_symbols.indexOf(options_close, index_of_token_end_of_closing) != -1) {
            var index_of_opts_opening = token_without_symbols.indexOf(options_open, index_of_token_end_of_closing);
            var index_of_opts_end_of_closing = token_without_symbols.indexOf(options_close, index_of_opts_opening) + options_close.length;

            try {
              opts = f.extend(opts, JSON.parse(token_without_symbols.substring(index_of_opts_opening, index_of_opts_end_of_closing)));
              token_without_symbols = token_without_symbols.substring(0, index_of_token_end_of_closing);
            } catch (e) {}
          }
        }

        var translated_token = _translate(token_without_symbols, opts);

        translated = translated.replace(token, translated_token);
      }

      return translated;
    }

    function hasContext(options) {
      return options.context && (typeof options.context == 'string' || typeof options.context == 'number');
    }

    function needsPlural(options) {
      return options.count !== undefined && typeof options.count != 'string' && options.count !== 1;
    }

    function exists(key, options) {
      options = options || {};

      var notFound = _getDefaultValue(key, options),
          found = _find(key, options);

      return found !== undefined || found === notFound;
    }

    function translate(key, options) {
      if (typeof options === 'undefined') {
        options = {};
      }

      if (!initialized) {
        f.log('i18next not finished initialization. you might have called t function before loading resources finished.');
        return options.defaultValue || '';
      }

      ;
      replacementCounter = 0;
      return _translate.apply(null, arguments);
    }

    function _getDefaultValue(key, options) {
      return options.defaultValue !== undefined ? options.defaultValue : key;
    }

    function _injectSprintfProcessor() {
      var values = []; // mh: build array from second argument onwards

      for (var i = 1; i < arguments.length; i++) {
        values.push(arguments[i]);
      }

      return {
        postProcess: 'sprintf',
        sprintf: values
      };
    }

    function _translate(potentialKeys, options) {
      if (typeof options !== "undefined" && options !== null && typeof options !== 'object') {
        if (o.shortcutFunction === 'sprintf') {
          // mh: gettext like sprintf syntax found, automatically create sprintf processor
          options = _injectSprintfProcessor.apply(null, arguments);
        } else if (o.shortcutFunction === 'defaultValue') {
          options = {
            defaultValue: options
          };
        }
      } else {
        options = options || {};
      }

      if (potentialKeys === undefined || potentialKeys === null) return '';

      if (typeof potentialKeys == 'string') {
        potentialKeys = [potentialKeys];
      }

      var key = potentialKeys[0];

      if (potentialKeys.length > 1) {
        for (var i = 0; i < potentialKeys.length; i++) {
          key = potentialKeys[i];

          if (exists(key, options)) {
            break;
          }
        }
      }

      var notFound = _getDefaultValue(key, options),
          found = _find(key, options),
          lngs = options.lng ? f.toLanguages(options.lng) : languages,
          ns = options.ns || o.ns.defaultNs,
          parts; // split ns and key


      if (key.indexOf(o.nsseparator) > -1) {
        parts = key.split(o.nsseparator);
        ns = parts[0];
        key = parts[1];
      }

      if (found === undefined && o.sendMissing) {
        if (options.lng) {
          sync.postMissing(lngs[0], ns, key, notFound, lngs);
        } else {
          sync.postMissing(o.lng, ns, key, notFound, lngs);
        }
      }

      var postProcessor = options.postProcess || o.postProcess;

      if (found !== undefined && postProcessor) {
        if (postProcessors[postProcessor]) {
          found = postProcessors[postProcessor](found, key, options);
        }
      } // process notFound if function exists


      var splitNotFound = notFound;

      if (notFound.indexOf(o.nsseparator) > -1) {
        parts = notFound.split(o.nsseparator);
        splitNotFound = parts[1];
      }

      if (splitNotFound === key && o.parseMissingKey) {
        notFound = o.parseMissingKey(notFound);
      }

      if (found === undefined) {
        notFound = applyReplacement(notFound, options);
        notFound = applyReuse(notFound, options);

        if (postProcessor && postProcessors[postProcessor]) {
          var val = _getDefaultValue(key, options);

          found = postProcessors[postProcessor](val, key, options);
        }
      }

      return found !== undefined ? found : notFound;
    }

    function _find(key, options) {
      options = options || {};

      var optionWithoutCount,
          translated,
          notFound = _getDefaultValue(key, options),
          lngs = languages;

      if (!resStore) {
        return notFound;
      } // no resStore to translate from
      // CI mode


      if (lngs[0].toLowerCase() === 'cimode') return notFound; // passed in lng

      if (options.lng) {
        lngs = f.toLanguages(options.lng);

        if (!resStore[lngs[0]]) {
          var oldAsync = o.getAsync;
          o.getAsync = false;
          TAPi18next.sync.load(lngs, o, function (err, store) {
            f.extend(resStore, store);
            o.getAsync = oldAsync;
          });
        }
      }

      var ns = options.ns || o.ns.defaultNs;

      if (key.indexOf(o.nsseparator) > -1) {
        var parts = key.split(o.nsseparator);
        ns = parts[0];
        key = parts[1];
      }

      if (hasContext(options)) {
        optionWithoutCount = f.extend({}, options);
        delete optionWithoutCount.context;
        optionWithoutCount.defaultValue = o.contextNotFound;
        var contextKey = ns + o.nsseparator + key + '_' + options.context;
        translated = translate(contextKey, optionWithoutCount);

        if (translated != o.contextNotFound) {
          return applyReplacement(translated, {
            context: options.context
          }); // apply replacement for context only
        } // else continue translation with original/nonContext key

      }

      if (needsPlural(options)) {
        optionWithoutCount = f.extend({}, options);
        delete optionWithoutCount.count;
        optionWithoutCount.defaultValue = o.pluralNotFound;
        var pluralKey = ns + o.nsseparator + key + o.pluralSuffix;
        var pluralExtension = pluralExtensions.get(lngs[0], options.count);

        if (pluralExtension >= 0) {
          pluralKey = pluralKey + '_' + pluralExtension;
        } else if (pluralExtension === 1) {
          pluralKey = ns + o.nsseparator + key; // singular
        }

        translated = translate(pluralKey, optionWithoutCount);

        if (translated != o.pluralNotFound) {
          return applyReplacement(translated, {
            count: options.count,
            interpolationPrefix: options.interpolationPrefix,
            interpolationSuffix: options.interpolationSuffix
          }); // apply replacement for count only
        } // else continue translation with original/singular key

      }

      var found;
      var keys = key.split(o.keyseparator);

      for (var i = 0, len = lngs.length; i < len; i++) {
        if (found !== undefined) break;
        var l = lngs[i];
        var x = 0;
        var value = resStore[l] && resStore[l][ns];

        while (keys[x]) {
          value = value && value[keys[x]];
          x++;
        }

        if (value !== undefined) {
          var valueType = Object.prototype.toString.apply(value);

          if (typeof value === 'string') {
            value = applyReplacement(value, options);
            value = applyReuse(value, options);
          } else if (valueType === '[object Array]' && !o.returnObjectTrees && !options.returnObjectTrees) {
            value = value.join('\n');
            value = applyReplacement(value, options);
            value = applyReuse(value, options);
          } else if (value === null && o.fallbackOnNull === true) {
            value = undefined;
          } else if (value !== null) {
            if (!o.returnObjectTrees && !options.returnObjectTrees) {
              if (o.objectTreeKeyHandler && typeof o.objectTreeKeyHandler == 'function') {
                value = o.objectTreeKeyHandler(key, value, l, ns, options);
              } else {
                value = 'key \'' + ns + ':' + key + ' (' + l + ')\' ' + 'returned an object instead of string.';
                f.log(value);
              }
            } else if (valueType !== '[object Number]' && valueType !== '[object Function]' && valueType !== '[object RegExp]') {
              var copy = valueType === '[object Array]' ? [] : {}; // apply child translation on a copy

              f.each(value, function (m) {
                copy[m] = _translate(ns + o.nsseparator + key + o.keyseparator + m, options);
              });
              value = copy;
            }
          }

          if (typeof value === 'string' && value.trim() === '' && o.fallbackOnEmpty === true) value = undefined;
          found = value;
        }
      }

      if (found === undefined && !options.isFallbackLookup && (o.fallbackToDefaultNS === true || o.fallbackNS && o.fallbackNS.length > 0)) {
        // set flag for fallback lookup - avoid recursion
        options.isFallbackLookup = true;

        if (o.fallbackNS.length) {
          for (var y = 0, lenY = o.fallbackNS.length; y < lenY; y++) {
            found = _find(o.fallbackNS[y] + o.nsseparator + key, options);

            if (found) {
              /* compare value without namespace */
              var foundValue = found.indexOf(o.nsseparator) > -1 ? found.split(o.nsseparator)[1] : found,
                  notFoundValue = notFound.indexOf(o.nsseparator) > -1 ? notFound.split(o.nsseparator)[1] : notFound;
              if (foundValue !== notFoundValue) break;
            }
          }
        } else {
          found = _find(key, options); // fallback to default NS
        }
      }

      return found;
    }

    function detectLanguage() {
      var detectedLng; // get from qs

      var qsParm = [];

      if (typeof window !== 'undefined') {
        (function () {
          var query = window.location.search.substring(1);
          var parms = query.split('&');

          for (var i = 0; i < parms.length; i++) {
            var pos = parms[i].indexOf('=');

            if (pos > 0) {
              var key = parms[i].substring(0, pos);
              var val = parms[i].substring(pos + 1);
              qsParm[key] = val;
            }
          }
        })();

        if (qsParm[o.detectLngQS]) {
          detectedLng = qsParm[o.detectLngQS];
        }
      } // get from cookie


      if (!detectedLng && typeof document !== 'undefined' && o.useCookie) {
        var c = f.cookie.read(o.cookieName);
        if (c) detectedLng = c;
      } // get from navigator


      if (!detectedLng && typeof navigator !== 'undefined') {
        detectedLng = navigator.language ? navigator.language : navigator.userLanguage;
      }

      return detectedLng;
    }

    var sync = {
      load: function (lngs, options, cb) {
        if (options.useLocalStorage) {
          sync._loadLocal(lngs, options, function (err, store) {
            var missingLngs = [];

            for (var i = 0, len = lngs.length; i < len; i++) {
              if (!store[lngs[i]]) missingLngs.push(lngs[i]);
            }

            if (missingLngs.length > 0) {
              sync._fetch(missingLngs, options, function (err, fetched) {
                f.extend(store, fetched);

                sync._storeLocal(fetched);

                cb(null, store);
              });
            } else {
              cb(null, store);
            }
          });
        } else {
          sync._fetch(lngs, options, function (err, store) {
            cb(null, store);
          });
        }
      },
      _loadLocal: function (lngs, options, cb) {
        var store = {},
            nowMS = new Date().getTime();

        if (window.localStorage) {
          var todo = lngs.length;
          f.each(lngs, function (key, lng) {
            var local = window.localStorage.getItem('res_' + lng);

            if (local) {
              local = JSON.parse(local);

              if (local.i18nStamp && local.i18nStamp + options.localStorageExpirationTime > nowMS) {
                store[lng] = local;
              }
            }

            todo--; // wait for all done befor callback

            if (todo === 0) cb(null, store);
          });
        }
      },
      _storeLocal: function (store) {
        if (window.localStorage) {
          for (var m in store) {
            store[m].i18nStamp = new Date().getTime();
            window.localStorage.setItem('res_' + m, JSON.stringify(store[m]));
          }
        }

        return;
      },
      _fetch: function (lngs, options, cb) {
        var ns = options.ns,
            store = {};

        if (!options.dynamicLoad) {
          var todo = ns.namespaces.length * lngs.length,
              errors; // load each file individual

          f.each(ns.namespaces, function (nsIndex, nsValue) {
            f.each(lngs, function (lngIndex, lngValue) {
              // Call this once our translation has returned.
              var loadComplete = function (err, data) {
                if (err) {
                  errors = errors || [];
                  errors.push(err);
                }

                store[lngValue] = store[lngValue] || {};
                store[lngValue][nsValue] = data;
                todo--; // wait for all done befor callback

                if (todo === 0) cb(errors, store);
              };

              if (typeof options.customLoad == 'function') {
                // Use the specified custom callback.
                options.customLoad(lngValue, nsValue, options, loadComplete);
              } else {
                //~ // Use our inbuilt sync.
                sync._fetchOne(lngValue, nsValue, options, loadComplete);
              }
            });
          });
        } else {
          // Call this once our translation has returned.
          var loadComplete = function (err, data) {
            cb(null, data);
          };

          if (typeof options.customLoad == 'function') {
            // Use the specified custom callback.
            options.customLoad(lngs, ns.namespaces, options, loadComplete);
          } else {
            var url = applyReplacement(options.resGetPath, {
              lng: lngs.join('+'),
              ns: ns.namespaces.join('+')
            }); // load all needed stuff once

            f.ajax({
              url: url,
              success: function (data, status, xhr) {
                f.log('loaded: ' + url);
                loadComplete(null, data);
              },
              error: function (xhr, status, error) {
                f.log('failed loading: ' + url);
                loadComplete('failed loading resource.json error: ' + error);
              },
              dataType: "json",
              async: options.getAsync
            });
          }
        }
      },
      _fetchOne: function (lng, ns, options, done) {
        var url = applyReplacement(options.resGetPath, {
          lng: lng,
          ns: ns
        });
        f.ajax({
          url: url,
          success: function (data, status, xhr) {
            f.log('loaded: ' + url);
            done(null, data);
          },
          error: function (xhr, status, error) {
            if (status && status == 200 || xhr && xhr.status && xhr.status == 200) {
              // file loaded but invalid json, stop waste time !
              f.log('There is a typo in: ' + url);
            } else if (status && status == 404 || xhr && xhr.status && xhr.status == 404) {
              f.log('Does not exist: ' + url);
            } else {
              var theStatus = status ? status : xhr && xhr.status ? xhr.status : null;
              f.log(theStatus + ' when loading ' + url);
            }

            done(error, {});
          },
          dataType: "json",
          async: options.getAsync
        });
      },
      postMissing: function (lng, ns, key, defaultValue, lngs) {
        var payload = {};
        payload[key] = defaultValue;
        var urls = [];

        if (o.sendMissingTo === 'fallback' && o.fallbackLng[0] !== false) {
          for (var i = 0; i < o.fallbackLng.length; i++) {
            urls.push({
              lng: o.fallbackLng[i],
              url: applyReplacement(o.resPostPath, {
                lng: o.fallbackLng[i],
                ns: ns
              })
            });
          }
        } else if (o.sendMissingTo === 'current' || o.sendMissingTo === 'fallback' && o.fallbackLng[0] === false) {
          urls.push({
            lng: lng,
            url: applyReplacement(o.resPostPath, {
              lng: lng,
              ns: ns
            })
          });
        } else if (o.sendMissingTo === 'all') {
          for (var i = 0, l = lngs.length; i < l; i++) {
            urls.push({
              lng: lngs[i],
              url: applyReplacement(o.resPostPath, {
                lng: lngs[i],
                ns: ns
              })
            });
          }
        }

        for (var y = 0, len = urls.length; y < len; y++) {
          var item = urls[y];
          f.ajax({
            url: item.url,
            type: o.sendType,
            data: payload,
            success: function (data, status, xhr) {
              f.log('posted missing key \'' + key + '\' to: ' + item.url); // add key to resStore

              var keys = key.split('.');
              var x = 0;
              var value = resStore[item.lng][ns];

              while (keys[x]) {
                if (x === keys.length - 1) {
                  value = value[keys[x]] = defaultValue;
                } else {
                  value = value[keys[x]] = value[keys[x]] || {};
                }

                x++;
              }
            },
            error: function (xhr, status, error) {
              f.log('failed posting missing key \'' + key + '\' to: ' + item.url);
            },
            dataType: "json",
            async: o.postAsync
          });
        }
      }
    }; // definition http://translate.sourceforge.net/wiki/l10n/pluralforms

    var pluralExtensions = {
      rules: {
        "ach": {
          "name": "Acholi",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n > 1);
          }
        },
        "af": {
          "name": "Afrikaans",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "ak": {
          "name": "Akan",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n > 1);
          }
        },
        "am": {
          "name": "Amharic",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n > 1);
          }
        },
        "an": {
          "name": "Aragonese",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "ar": {
          "name": "Arabic",
          "numbers": [0, 1, 2, 3, 11, 100],
          "plurals": function (n) {
            return Number(n === 0 ? 0 : n == 1 ? 1 : n == 2 ? 2 : n % 100 >= 3 && n % 100 <= 10 ? 3 : n % 100 >= 11 ? 4 : 5);
          }
        },
        "arn": {
          "name": "Mapudungun",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n > 1);
          }
        },
        "ast": {
          "name": "Asturian",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "ay": {
          "name": "Aymar\xE1",
          "numbers": [1],
          "plurals": function (n) {
            return 0;
          }
        },
        "az": {
          "name": "Azerbaijani",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "be": {
          "name": "Belarusian",
          "numbers": [1, 2, 5],
          "plurals": function (n) {
            return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
          }
        },
        "bg": {
          "name": "Bulgarian",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "bn": {
          "name": "Bengali",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "bo": {
          "name": "Tibetan",
          "numbers": [1],
          "plurals": function (n) {
            return 0;
          }
        },
        "br": {
          "name": "Breton",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n > 1);
          }
        },
        "bs": {
          "name": "Bosnian",
          "numbers": [1, 2, 5],
          "plurals": function (n) {
            return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
          }
        },
        "ca": {
          "name": "Catalan",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "cgg": {
          "name": "Chiga",
          "numbers": [1],
          "plurals": function (n) {
            return 0;
          }
        },
        "cs": {
          "name": "Czech",
          "numbers": [1, 2, 5],
          "plurals": function (n) {
            return Number(n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2);
          }
        },
        "csb": {
          "name": "Kashubian",
          "numbers": [1, 2, 5],
          "plurals": function (n) {
            return Number(n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
          }
        },
        "cy": {
          "name": "Welsh",
          "numbers": [1, 2, 3, 8],
          "plurals": function (n) {
            return Number(n == 1 ? 0 : n == 2 ? 1 : n != 8 && n != 11 ? 2 : 3);
          }
        },
        "da": {
          "name": "Danish",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "de": {
          "name": "German",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "dz": {
          "name": "Dzongkha",
          "numbers": [1],
          "plurals": function (n) {
            return 0;
          }
        },
        "el": {
          "name": "Greek",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "en": {
          "name": "English",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "eo": {
          "name": "Esperanto",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "es": {
          "name": "Spanish",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "es_ar": {
          "name": "Argentinean Spanish",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "et": {
          "name": "Estonian",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "eu": {
          "name": "Basque",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "fa": {
          "name": "Persian",
          "numbers": [1],
          "plurals": function (n) {
            return 0;
          }
        },
        "fi": {
          "name": "Finnish",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "fil": {
          "name": "Filipino",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n > 1);
          }
        },
        "fo": {
          "name": "Faroese",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "fr": {
          "name": "French",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n > 1);
          }
        },
        "fur": {
          "name": "Friulian",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "fy": {
          "name": "Frisian",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "ga": {
          "name": "Irish",
          "numbers": [1, 2, 3, 7, 11],
          "plurals": function (n) {
            return Number(n == 1 ? 0 : n == 2 ? 1 : n < 7 ? 2 : n < 11 ? 3 : 4);
          }
        },
        "gd": {
          "name": "Scottish Gaelic",
          "numbers": [1, 2, 3, 20],
          "plurals": function (n) {
            return Number(n == 1 || n == 11 ? 0 : n == 2 || n == 12 ? 1 : n > 2 && n < 20 ? 2 : 3);
          }
        },
        "gl": {
          "name": "Galician",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "gu": {
          "name": "Gujarati",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "gun": {
          "name": "Gun",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n > 1);
          }
        },
        "ha": {
          "name": "Hausa",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "he": {
          "name": "Hebrew",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "hi": {
          "name": "Hindi",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "hr": {
          "name": "Croatian",
          "numbers": [1, 2, 5],
          "plurals": function (n) {
            return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
          }
        },
        "hu": {
          "name": "Hungarian",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "hy": {
          "name": "Armenian",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "ia": {
          "name": "Interlingua",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "id": {
          "name": "Indonesian",
          "numbers": [1],
          "plurals": function (n) {
            return 0;
          }
        },
        "is": {
          "name": "Icelandic",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n % 10 != 1 || n % 100 == 11);
          }
        },
        "it": {
          "name": "Italian",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "ja": {
          "name": "Japanese",
          "numbers": [1],
          "plurals": function (n) {
            return 0;
          }
        },
        "jbo": {
          "name": "Lojban",
          "numbers": [1],
          "plurals": function (n) {
            return 0;
          }
        },
        "jv": {
          "name": "Javanese",
          "numbers": [0, 1],
          "plurals": function (n) {
            return Number(n !== 0);
          }
        },
        "ka": {
          "name": "Georgian",
          "numbers": [1],
          "plurals": function (n) {
            return 0;
          }
        },
        "kk": {
          "name": "Kazakh",
          "numbers": [1],
          "plurals": function (n) {
            return 0;
          }
        },
        "km": {
          "name": "Khmer",
          "numbers": [1],
          "plurals": function (n) {
            return 0;
          }
        },
        "kn": {
          "name": "Kannada",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "ko": {
          "name": "Korean",
          "numbers": [1],
          "plurals": function (n) {
            return 0;
          }
        },
        "ku": {
          "name": "Kurdish",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "kw": {
          "name": "Cornish",
          "numbers": [1, 2, 3, 4],
          "plurals": function (n) {
            return Number(n == 1 ? 0 : n == 2 ? 1 : n == 3 ? 2 : 3);
          }
        },
        "ky": {
          "name": "Kyrgyz",
          "numbers": [1],
          "plurals": function (n) {
            return 0;
          }
        },
        "lb": {
          "name": "Letzeburgesch",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "ln": {
          "name": "Lingala",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n > 1);
          }
        },
        "lo": {
          "name": "Lao",
          "numbers": [1],
          "plurals": function (n) {
            return 0;
          }
        },
        "lt": {
          "name": "Lithuanian",
          "numbers": [1, 2, 10],
          "plurals": function (n) {
            return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
          }
        },
        "lv": {
          "name": "Latvian",
          "numbers": [1, 2, 0],
          "plurals": function (n) {
            return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n !== 0 ? 1 : 2);
          }
        },
        "mai": {
          "name": "Maithili",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "mfe": {
          "name": "Mauritian Creole",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n > 1);
          }
        },
        "mg": {
          "name": "Malagasy",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n > 1);
          }
        },
        "mi": {
          "name": "Maori",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n > 1);
          }
        },
        "mk": {
          "name": "Macedonian",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n == 1 || n % 10 == 1 ? 0 : 1);
          }
        },
        "ml": {
          "name": "Malayalam",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "mn": {
          "name": "Mongolian",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "mnk": {
          "name": "Mandinka",
          "numbers": [0, 1, 2],
          "plurals": function (n) {
            return Number(n == 0 ? 0 : n == 1 ? 1 : 2);
          }
        },
        "mr": {
          "name": "Marathi",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "ms": {
          "name": "Malay",
          "numbers": [1],
          "plurals": function (n) {
            return 0;
          }
        },
        "mt": {
          "name": "Maltese",
          "numbers": [1, 2, 11, 20],
          "plurals": function (n) {
            return Number(n == 1 ? 0 : n === 0 || n % 100 > 1 && n % 100 < 11 ? 1 : n % 100 > 10 && n % 100 < 20 ? 2 : 3);
          }
        },
        "nah": {
          "name": "Nahuatl",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "nap": {
          "name": "Neapolitan",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "nb": {
          "name": "Norwegian Bokmal",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "ne": {
          "name": "Nepali",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "nl": {
          "name": "Dutch",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "nn": {
          "name": "Norwegian Nynorsk",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "no": {
          "name": "Norwegian",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "nso": {
          "name": "Northern Sotho",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "oc": {
          "name": "Occitan",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n > 1);
          }
        },
        "or": {
          "name": "Oriya",
          "numbers": [2, 1],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "pa": {
          "name": "Punjabi",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "pap": {
          "name": "Papiamento",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "pl": {
          "name": "Polish",
          "numbers": [1, 2, 5],
          "plurals": function (n) {
            return Number(n == 1 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
          }
        },
        "pms": {
          "name": "Piemontese",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "ps": {
          "name": "Pashto",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "pt": {
          "name": "Portuguese",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "pt_br": {
          "name": "Brazilian Portuguese",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "rm": {
          "name": "Romansh",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "ro": {
          "name": "Romanian",
          "numbers": [1, 2, 20],
          "plurals": function (n) {
            return Number(n == 1 ? 0 : n === 0 || n % 100 > 0 && n % 100 < 20 ? 1 : 2);
          }
        },
        "ru": {
          "name": "Russian",
          "numbers": [1, 2, 5],
          "plurals": function (n) {
            return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
          }
        },
        "sah": {
          "name": "Yakut",
          "numbers": [1],
          "plurals": function (n) {
            return 0;
          }
        },
        "sco": {
          "name": "Scots",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "se": {
          "name": "Northern Sami",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "si": {
          "name": "Sinhala",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "sk": {
          "name": "Slovak",
          "numbers": [1, 2, 5],
          "plurals": function (n) {
            return Number(n == 1 ? 0 : n >= 2 && n <= 4 ? 1 : 2);
          }
        },
        "sl": {
          "name": "Slovenian",
          "numbers": [5, 1, 2, 3],
          "plurals": function (n) {
            return Number(n % 100 == 1 ? 1 : n % 100 == 2 ? 2 : n % 100 == 3 || n % 100 == 4 ? 3 : 0);
          }
        },
        "so": {
          "name": "Somali",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "son": {
          "name": "Songhay",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "sq": {
          "name": "Albanian",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "sr": {
          "name": "Serbian",
          "numbers": [1, 2, 5],
          "plurals": function (n) {
            return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
          }
        },
        "su": {
          "name": "Sundanese",
          "numbers": [1],
          "plurals": function (n) {
            return 0;
          }
        },
        "sv": {
          "name": "Swedish",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "sw": {
          "name": "Swahili",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "ta": {
          "name": "Tamil",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "te": {
          "name": "Telugu",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "tg": {
          "name": "Tajik",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n > 1);
          }
        },
        "th": {
          "name": "Thai",
          "numbers": [1],
          "plurals": function (n) {
            return 0;
          }
        },
        "ti": {
          "name": "Tigrinya",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n > 1);
          }
        },
        "tk": {
          "name": "Turkmen",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "tr": {
          "name": "Turkish",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n > 1);
          }
        },
        "tt": {
          "name": "Tatar",
          "numbers": [1],
          "plurals": function (n) {
            return 0;
          }
        },
        "ug": {
          "name": "Uyghur",
          "numbers": [1],
          "plurals": function (n) {
            return 0;
          }
        },
        "uk": {
          "name": "Ukrainian",
          "numbers": [1, 2, 5],
          "plurals": function (n) {
            return Number(n % 10 == 1 && n % 100 != 11 ? 0 : n % 10 >= 2 && n % 10 <= 4 && (n % 100 < 10 || n % 100 >= 20) ? 1 : 2);
          }
        },
        "ur": {
          "name": "Urdu",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "uz": {
          "name": "Uzbek",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n > 1);
          }
        },
        "vi": {
          "name": "Vietnamese",
          "numbers": [1],
          "plurals": function (n) {
            return 0;
          }
        },
        "wa": {
          "name": "Walloon",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n > 1);
          }
        },
        "wo": {
          "name": "Wolof",
          "numbers": [1],
          "plurals": function (n) {
            return 0;
          }
        },
        "yo": {
          "name": "Yoruba",
          "numbers": [1, 2],
          "plurals": function (n) {
            return Number(n != 1);
          }
        },
        "zh": {
          "name": "Chinese",
          "numbers": [1],
          "plurals": function (n) {
            return 0;
          }
        }
      },
      // for demonstration only sl and ar is added but you can add your own pluralExtensions
      addRule: function (lng, obj) {
        pluralExtensions.rules[lng] = obj;
      },
      setCurrentLng: function (lng) {
        if (!pluralExtensions.currentRule || pluralExtensions.currentRule.lng !== lng) {
          var parts = lng.split('-');
          pluralExtensions.currentRule = {
            lng: lng,
            rule: pluralExtensions.rules[parts[0]]
          };
        }
      },
      get: function (lng, count) {
        var parts = lng.split('-');

        function getResult(l, c) {
          var ext;

          if (pluralExtensions.currentRule && pluralExtensions.currentRule.lng === lng) {
            ext = pluralExtensions.currentRule.rule;
          } else {
            ext = pluralExtensions.rules[l];
          }

          if (ext) {
            var i = ext.plurals(c);
            var number = ext.numbers[i];

            if (ext.numbers.length === 2 && ext.numbers[0] === 1) {
              if (number === 2) {
                number = -1; // regular plural
              } else if (number === 1) {
                number = 1; // singular
              }
            } //console.log(count + '-' + number);


            return number;
          } else {
            return c === 1 ? '1' : '-1';
          }
        }

        return getResult(parts[0], count);
      }
    };
    var postProcessors = {};

    var addPostProcessor = function (name, fc) {
      postProcessors[name] = fc;
    }; // sprintf support


    var sprintf = function () {
      function get_type(variable) {
        return Object.prototype.toString.call(variable).slice(8, -1).toLowerCase();
      }

      function str_repeat(input, multiplier) {
        for (var output = []; multiplier > 0; output[--multiplier] = input) {
          /* do nothing */
        }

        return output.join('');
      }

      var str_format = function () {
        if (!str_format.cache.hasOwnProperty(arguments[0])) {
          str_format.cache[arguments[0]] = str_format.parse(arguments[0]);
        }

        return str_format.format.call(null, str_format.cache[arguments[0]], arguments);
      };

      str_format.format = function (parse_tree, argv) {
        var cursor = 1,
            tree_length = parse_tree.length,
            node_type = '',
            arg,
            output = [],
            i,
            k,
            match,
            pad,
            pad_character,
            pad_length;

        for (i = 0; i < tree_length; i++) {
          node_type = get_type(parse_tree[i]);

          if (node_type === 'string') {
            output.push(parse_tree[i]);
          } else if (node_type === 'array') {
            match = parse_tree[i]; // convenience purposes only

            if (match[2]) {
              // keyword argument
              arg = argv[cursor];

              for (k = 0; k < match[2].length; k++) {
                if (!arg.hasOwnProperty(match[2][k])) {
                  throw sprintf('[sprintf] property "%s" does not exist', match[2][k]);
                }

                arg = arg[match[2][k]];
              }
            } else if (match[1]) {
              // positional argument (explicit)
              arg = argv[match[1]];
            } else {
              // positional argument (implicit)
              arg = argv[cursor++];
            }

            if (/[^s]/.test(match[8]) && get_type(arg) != 'number') {
              throw sprintf('[sprintf] expecting number but found %s', get_type(arg));
            }

            switch (match[8]) {
              case 'b':
                arg = arg.toString(2);
                break;

              case 'c':
                arg = String.fromCharCode(arg);
                break;

              case 'd':
                arg = parseInt(arg, 10);
                break;

              case 'e':
                arg = match[7] ? arg.toExponential(match[7]) : arg.toExponential();
                break;

              case 'f':
                arg = match[7] ? parseFloat(arg).toFixed(match[7]) : parseFloat(arg);
                break;

              case 'o':
                arg = arg.toString(8);
                break;

              case 's':
                arg = (arg = String(arg)) && match[7] ? arg.substring(0, match[7]) : arg;
                break;

              case 'u':
                arg = Math.abs(arg);
                break;

              case 'x':
                arg = arg.toString(16);
                break;

              case 'X':
                arg = arg.toString(16).toUpperCase();
                break;
            }

            arg = /[def]/.test(match[8]) && match[3] && arg >= 0 ? '+' + arg : arg;
            pad_character = match[4] ? match[4] == '0' ? '0' : match[4].charAt(1) : ' ';
            pad_length = match[6] - String(arg).length;
            pad = match[6] ? str_repeat(pad_character, pad_length) : '';
            output.push(match[5] ? arg + pad : pad + arg);
          }
        }

        return output.join('');
      };

      str_format.cache = {};

      str_format.parse = function (fmt) {
        var _fmt = fmt,
            match = [],
            parse_tree = [],
            arg_names = 0;

        while (_fmt) {
          if ((match = /^[^\x25]+/.exec(_fmt)) !== null) {
            parse_tree.push(match[0]);
          } else if ((match = /^\x25{2}/.exec(_fmt)) !== null) {
            parse_tree.push('%');
          } else if ((match = /^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-fosuxX])/.exec(_fmt)) !== null) {
            if (match[2]) {
              arg_names |= 1;
              var field_list = [],
                  replacement_field = match[2],
                  field_match = [];

              if ((field_match = /^([a-z_][a-z_\d]*)/i.exec(replacement_field)) !== null) {
                field_list.push(field_match[1]);

                while ((replacement_field = replacement_field.substring(field_match[0].length)) !== '') {
                  if ((field_match = /^\.([a-z_][a-z_\d]*)/i.exec(replacement_field)) !== null) {
                    field_list.push(field_match[1]);
                  } else if ((field_match = /^\[(\d+)\]/.exec(replacement_field)) !== null) {
                    field_list.push(field_match[1]);
                  } else {
                    throw '[sprintf] huh?';
                  }
                }
              } else {
                throw '[sprintf] huh?';
              }

              match[2] = field_list;
            } else {
              arg_names |= 2;
            }

            if (arg_names === 3) {
              throw '[sprintf] mixing positional and named placeholders is not (yet) supported';
            }

            parse_tree.push(match);
          } else {
            throw '[sprintf] huh?';
          }

          _fmt = _fmt.substring(match[0].length);
        }

        return parse_tree;
      };

      return str_format;
    }();

    var vsprintf = function (fmt, argv) {
      argv.unshift(fmt);
      return sprintf.apply(null, argv);
    };

    addPostProcessor("sprintf", function (val, key, opts) {
      if (!opts.sprintf) return val;

      if (Object.prototype.toString.apply(opts.sprintf) === '[object Array]') {
        return vsprintf(val, opts.sprintf);
      } else if (typeof opts.sprintf === 'object') {
        return sprintf(val, opts.sprintf);
      }

      return val;
    }); // public api interface

    TAPi18next.init = init;
    TAPi18next.setLng = setLng;
    TAPi18next.preload = preload;
    TAPi18next.addResourceBundle = addResourceBundle;
    TAPi18next.removeResourceBundle = removeResourceBundle;
    TAPi18next.loadNamespace = loadNamespace;
    TAPi18next.loadNamespaces = loadNamespaces;
    TAPi18next.setDefaultNamespace = setDefaultNamespace;
    TAPi18next.t = translate;
    TAPi18next.translate = translate;
    TAPi18next.exists = exists;
    TAPi18next.detectLanguage = f.detectLanguage;
    TAPi18next.pluralExtensions = pluralExtensions;
    TAPi18next.sync = sync;
    TAPi18next.functions = f;
    TAPi18next.lng = lng;
    TAPi18next.addPostProcessor = addPostProcessor;
    TAPi18next.options = o;
  })();
}.call(this, module);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"tap_i18n":{"globals.js":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_tap-i18n/lib/tap_i18n/globals.js                                                               //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({
  globals: () => globals
});
const globals = {
  fallback_language: 'en',
  langauges_tags_regex: '[a-z]{2,3}(?:-[a-zA-Z]{4})?(?:-[A-Z]{2,3})?',
  project_translations_domain: 'project',
  browser_path: '/tap-i18n',
  debug: false
};
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"tap_i18n-common.coffee":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_tap-i18n/lib/tap_i18n/tap_i18n-common.coffee                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
module.export({
  TAPi18nBase: () => TAPi18nBase
});
let TAPi18next;
module.link("../tap_i18next/tap_i18next-1.7.3.js", {
  default(v) {
    TAPi18next = v;
  }

}, 0);
let globals;
module.link("./globals", {
  globals(v) {
    globals = v;
  }

}, 1);
var fallback_language;
fallback_language = globals.fallback_language;
TAPi18next.init({
  resStore: {},
  fallbackLng: globals.fallback_language,
  useCookie: false
});

var TAPi18nBase = function () {
  class TAPi18nBase extends EventEmitter {
    constructor() {
      super();
      this._fallback_language = fallback_language;
      this._language_changed_tracker = new Tracker.Dependency();
      this._loaded_languages = [fallback_language]; // stores the loaded languages, the fallback language is loaded automatically

      this.conf = null; // If conf isn't null we assume that tap:i18n is enabled for the project.
      // We assume conf is valid, we sterilize and validate it during the build process.

      this.packages = {}; // Stores the packages' package-tap.i18n jsons

      this.languages_names = {}; // Stores languages that we've found languages files for in the project dir.
      // format:
      // {
      //    lang_tag: [lang_name_in_english, lang_name_in_local_language]
      // }

      this.translations = {}; // Stores the packages/project translations - Server side only
      // fallback_language translations are not stored here

      if (Meteor.isClient) {
        Session.set(this._loaded_lang_session_key, null);
        this._languageSpecificTranslators = {};
        this._languageSpecificTranslatorsTrackers = {};
      }

      if (Meteor.isServer) {
        this.server_translators = {};
        Meteor.startup(() => {
          // If tap-i18n is enabled for that project
          if (this._enabled()) {
            return this._registerHTTPMethod();
          }
        });
      }

      this.__ = this._getPackageI18nextProxy(globals.project_translations_domain);
      TAPi18next.setLng(fallback_language);
    }

    _enable(conf) {
      // tap:i18n gets enabled for a project once a conf file is set for it.
      // It can be either a conf object that was set by project-tap.i18n file or
      // a default conf, which is being added if the project has lang files
      // (*.i18n.json) but not project-tap.i18n
      this.conf = conf;
      return this._onceEnabled();
    }

    _onceEnabled() {} // The arch specific code can use this for procedures that should be performed once
    // tap:i18n gets enabled (project conf file is being set)


    _enabled() {
      // read the comment of @conf
      return this.conf != null;
    }

    _getPackageDomain(package_name) {
      return package_name.replace(/:/g, "-");
    }

    addResourceBundle(lang_tag, package_name, translations) {
      return TAPi18next.addResourceBundle(lang_tag, this._getPackageDomain(package_name), translations);
    }

    _getSpecificLangTranslator(lang) {
      var current_lang, translator;
      current_lang = TAPi18next.lng();
      translator = null;
      TAPi18next.setLng(lang, {
        fixLng: true
      }, lang_translator => {
        return translator = lang_translator;
      }); // Restore i18next lang that had been changed in the process of generating
      // lang specific translator

      TAPi18next.setLng(current_lang);
      return translator;
    }

    _getProjectLanguages() {
      // Return an array of languages available for the current project
      if (this._enabled()) {
        if (_.isArray(this.conf.supported_languages)) {
          return _.union([this._fallback_language], this.conf.supported_languages);
        } else {
          // If supported_languages is null, all the languages we found
          // translations files to in the project level are considered supported.
          // We use the @.languages_names array to tell which languages we found
          // since for every i18n.json file we found in the project level we add
          // an entry for its language to @.languages_names in the build process.
          // We also know for certain that when tap-i18n is enabled the fallback
          // lang is in @.languages_names
          return _.keys(this.languages_names);
        }
      } else {
        return [this._fallback_language];
      }
    }

    getLanguages() {
      var i, lang_tag, languages, len, ref;

      if (!this._enabled()) {
        return null;
      }

      languages = {};
      ref = this._getProjectLanguages();

      for (i = 0, len = ref.length; i < len; i++) {
        lang_tag = ref[i];
        languages[lang_tag] = {
          name: this.languages_names[lang_tag][1],
          en: this.languages_names[lang_tag][0]
        };
      }

      return languages;
    }

    _loadLangFileObject(language_tag, data) {
      var package_keys, package_name, ref, results;
      results = [];

      for (package_name in data) {
        package_keys = data[package_name]; // Translations that are added by loadTranslations() have higher priority

        package_keys = _.extend({}, package_keys, ((ref = this._loadTranslations_cache[language_tag]) != null ? ref[package_name] : void 0) || {});
        results.push(this.addResourceBundle(language_tag, package_name, package_keys));
      }

      return results;
    }

    loadTranslations(translations, namespace) {
      var language_tag, project_languages, results, translation_keys;
      project_languages = this._getProjectLanguages();
      results = [];

      for (language_tag in translations) {
        translation_keys = translations[language_tag];

        if (this._loadTranslations_cache[language_tag] == null) {
          this._loadTranslations_cache[language_tag] = {};
        }

        if (this._loadTranslations_cache[language_tag][namespace] == null) {
          this._loadTranslations_cache[language_tag][namespace] = {};
        }

        _.extend(this._loadTranslations_cache[language_tag][namespace], translation_keys);

        this.addResourceBundle(language_tag, namespace, translation_keys);

        if (Meteor.isClient && this.getLanguage() === language_tag) {
          // Retranslate if session language updated
          results.push(this._language_changed_tracker.changed());
        } else {
          results.push(void 0);
        }
      }

      return results;
    }

  }

  ;
  TAPi18nBase.prototype._loaded_lang_session_key = "TAPi18n::loaded_lang";
  TAPi18nBase.prototype._loadTranslations_cache = {};
  return TAPi18nBase;
}.call(this);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"tap_i18n-server.coffee":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_tap-i18n/lib/tap_i18n/tap_i18n-server.coffee                                                   //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
__coffeescriptShare = typeof __coffeescriptShare === 'object' ? __coffeescriptShare : {}; var share = __coffeescriptShare;
module.export({
  TAPi18nServer: () => TAPi18nServer
});
let TAPi18nBase;
module.link("./tap_i18n-common", {
  TAPi18nBase(v) {
    TAPi18nBase = v;
  }

}, 0);
let globals;
module.link("./globals", {
  globals(v) {
    globals = v;
  }

}, 1);
var indexOf = [].indexOf;

var TAPi18nServer = function () {
  class TAPi18nServer extends TAPi18nBase {
    _registerServerTranslator(lang_tag, package_name) {
      if (this._enabled()) {
        if (!(lang_tag in this.server_translators)) {
          this.server_translators[lang_tag] = this._getSpecificLangTranslator(lang_tag);
        } // fallback language is integrated, and isn't part of @translations


        if (lang_tag !== this._fallback_language) {
          this.addResourceBundle(lang_tag, package_name, this.translations[lang_tag][package_name]);
        }
      }

      if (!(this._fallback_language in this.server_translators)) {
        return this.server_translators[this._fallback_language] = this._getSpecificLangTranslator(this._fallback_language);
      }
    }

    _registerAllServerTranslators() {
      var i, lang_tag, len, package_name, ref, results;
      ref = this._getProjectLanguages();
      results = [];

      for (i = 0, len = ref.length; i < len; i++) {
        lang_tag = ref[i];
        results.push(function () {
          var results1;
          results1 = [];

          for (package_name in this.translations[lang_tag]) {
            results1.push(this._registerServerTranslator(lang_tag, package_name));
          }

          return results1;
        }.call(this));
      }

      return results;
    }

    _getPackageI18nextProxy(package_name) {
      // A proxy to TAPi18next.t where the namespace is preset to the package's
      return (key, options, lang_tag = null) => {
        if (lang_tag == null) {
          // translate to fallback_language
          return this.server_translators[this._fallback_language](`${this._getPackageDomain(package_name)}:${key}`, options);
        } else if (!(lang_tag in this.server_translators)) {
          console.log(`Warning: language ${lang_tag} is not supported in this project, fallback language (${this._fallback_language})`);
          return this.server_translators[this._fallback_language](`${this._getPackageDomain(package_name)}:${key}`, options);
        } else {
          return this.server_translators[lang_tag](`${this._getPackageDomain(package_name)}:${key}`, options);
        }
      };
    }

    _registerHTTPMethod() {
      var methods, self;
      self = this;
      methods = {};

      if (!self._enabled()) {
        throw new Meteor.Error(500, "tap-i18n has to be enabled in order to register the HTTP method");
      }

      JsonRoutes.add('get', `${self.conf.i18n_files_route.replace(/\/$/, "")}/multi/:langs`, function (req, res, next) {
        var i, lang_tag, langs, language_translations, len, output;

        if (!RegExp(`^((${globals.langauges_tags_regex},)*${globals.langauges_tags_regex}|all).json$`).test(req.params.langs)) {
          return JsonRoutes.sendResult(res, {
            code: 401
          });
        }

        langs = req.params.langs.replace(".json", "");

        if (langs === "all") {
          output = self.translations;
        } else {
          output = {};
          langs = langs.split(",");

          for (i = 0, len = langs.length; i < len; i++) {
            lang_tag = langs[i];

            if (indexOf.call(self._getProjectLanguages(), lang_tag) >= 0 && lang_tag !== self._fallback_language) {
              // fallback language is integrated to the bundle
              language_translations = self.translations[lang_tag];

              if (language_translations != null) {
                output[lang_tag] = language_translations;
              }
            }
          }
        }

        return JsonRoutes.sendResult(res, {
          data: output
        });
      });
      return JsonRoutes.add('get', `${self.conf.i18n_files_route.replace(/\/$/, "")}/:lang`, function (req, res, next) {
        var lang_tag, language_translations;

        if (!RegExp(`^${globals.langauges_tags_regex}.json$`).test(req.params.lang)) {
          return JsonRoutes.sendResult(res, {
            code: 401
          });
        }

        lang_tag = req.params.lang.replace(".json", "");

        if (indexOf.call(self._getProjectLanguages(), lang_tag) < 0 || lang_tag === self._fallback_language) {
          // fallback language is integrated to the bundle
          return JsonRoutes.sendResult(res, {
            code: 404 // not found

          });
        }

        language_translations = self.translations[lang_tag]; // returning {} if lang_tag is not in translations allows the project
        // developer to force a language supporte with project-tap.i18n's
        // supported_languages property, even if that language has no lang
        // files.

        return JsonRoutes.sendResult(res, {
          data: language_translations != null ? language_translations : {}
        });
      });
    }

    _onceEnabled() {
      return this._registerAllServerTranslators();
    }

  }

  ;
  TAPi18nServer.prototype.server_translators = null;
  return TAPi18nServer;
}.call(this);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"server.js":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                    //
// packages/rocketchat_tap-i18n/server.js                                                                             //
//                                                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                      //
module.export({
  TAPi18n: () => TAPi18n
});
let TAPi18nServer;
module.link("./lib/tap_i18n/tap_i18n-server", {
  TAPi18nServer(v) {
    TAPi18nServer = v;
  }

}, 0);
const TAPi18n = new TAPi18nServer();
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json",
    ".coffee"
  ]
});

require("/node_modules/meteor/rocketchat:tap-i18n/lib/tap_i18next/tap_i18next-1.7.3.js");
var exports = require("/node_modules/meteor/rocketchat:tap-i18n/server.js");

/* Exports */
Package._define("rocketchat:tap-i18n", exports, {
  TAPi18next: TAPi18next,
  TAPi18n: TAPi18n
});

})();

//# sourceURL=meteor://💻app/packages/rocketchat_tap-i18n.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvcm9ja2V0Y2hhdDp0YXAtaTE4bi9saWIvdGFwX2kxOG5leHQvdGFwX2kxOG5leHQtMS43LjMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3BhY2thZ2VzL3JvY2tldGNoYXQ6dGFwLWkxOG4vbGliL3RhcF9pMThuL2dsb2JhbHMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3BhY2thZ2VzL3JvY2tldGNoYXRfdGFwLWkxOG4vbGliL3RhcF9pMThuL3RhcF9pMThuLWNvbW1vbi5jb2ZmZWUiLCJtZXRlb3I6Ly/wn5K7YXBwL2xpYi90YXBfaTE4bi90YXBfaTE4bi1jb21tb24uY29mZmVlIiwibWV0ZW9yOi8v8J+Su2FwcC9wYWNrYWdlcy9yb2NrZXRjaGF0X3RhcC1pMThuL2xpYi90YXBfaTE4bi90YXBfaTE4bi1zZXJ2ZXIuY29mZmVlIiwibWV0ZW9yOi8v8J+Su2FwcC9saWIvdGFwX2kxOG4vdGFwX2kxOG4tc2VydmVyLmNvZmZlZSIsIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvcm9ja2V0Y2hhdDp0YXAtaTE4bi9zZXJ2ZXIuanMiXSwibmFtZXMiOlsiVEFQaTE4bmV4dCIsIkFycmF5IiwicHJvdG90eXBlIiwiaW5kZXhPZiIsInNlYXJjaEVsZW1lbnQiLCJUeXBlRXJyb3IiLCJ0IiwiT2JqZWN0IiwibGVuIiwibGVuZ3RoIiwibiIsImFyZ3VtZW50cyIsIk51bWJlciIsIkluZmluaXR5IiwiTWF0aCIsImZsb29yIiwiYWJzIiwiayIsIm1heCIsImxhc3RJbmRleE9mIiwibWluIiwiU3RyaW5nIiwidHJpbSIsInJlcGxhY2UiLCJyb290IiwiJCIsImpRdWVyeSIsIlplcHRvIiwicmVzU3RvcmUiLCJjdXJyZW50TG5nIiwicmVwbGFjZW1lbnRDb3VudGVyIiwibGFuZ3VhZ2VzIiwiaW5pdGlhbGl6ZWQiLCJtb2R1bGUiLCJleHBvcnRzIiwibyIsImxuZyIsInVuZGVmaW5lZCIsImxvYWQiLCJwcmVsb2FkIiwibG93ZXJDYXNlTG5nIiwicmV0dXJuT2JqZWN0VHJlZXMiLCJmYWxsYmFja0xuZyIsImZhbGxiYWNrTlMiLCJkZXRlY3RMbmdRUyIsIm5zIiwiZmFsbGJhY2tPbk51bGwiLCJmYWxsYmFja09uRW1wdHkiLCJmYWxsYmFja1RvRGVmYXVsdE5TIiwibnNzZXBhcmF0b3IiLCJrZXlzZXBhcmF0b3IiLCJzZWxlY3RvckF0dHIiLCJkZWJ1ZyIsInJlc0dldFBhdGgiLCJyZXNQb3N0UGF0aCIsImdldEFzeW5jIiwicG9zdEFzeW5jIiwidXNlTG9jYWxTdG9yYWdlIiwibG9jYWxTdG9yYWdlRXhwaXJhdGlvblRpbWUiLCJkeW5hbWljTG9hZCIsInNlbmRNaXNzaW5nIiwic2VuZE1pc3NpbmdUbyIsInNlbmRUeXBlIiwiaW50ZXJwb2xhdGlvblByZWZpeCIsImludGVycG9sYXRpb25TdWZmaXgiLCJyZXVzZVByZWZpeCIsInJldXNlU3VmZml4IiwicGx1cmFsU3VmZml4IiwicGx1cmFsTm90Rm91bmQiLCJyYW5kb20iLCJqb2luIiwiY29udGV4dE5vdEZvdW5kIiwiZXNjYXBlSW50ZXJwb2xhdGlvbiIsInNldEpxdWVyeUV4dCIsImRlZmF1bHRWYWx1ZUZyb21Db250ZW50IiwidXNlRGF0YUF0dHJPcHRpb25zIiwiY29va2llRXhwaXJhdGlvblRpbWUiLCJ1c2VDb29raWUiLCJjb29raWVOYW1lIiwiY29va2llRG9tYWluIiwib2JqZWN0VHJlZUtleUhhbmRsZXIiLCJwb3N0UHJvY2VzcyIsInBhcnNlTWlzc2luZ0tleSIsInNob3J0Y3V0RnVuY3Rpb24iLCJfZXh0ZW5kIiwidGFyZ2V0Iiwic291cmNlIiwiYXR0ciIsIl9lYWNoIiwib2JqZWN0IiwiY2FsbGJhY2siLCJhcmdzIiwibmFtZSIsImkiLCJpc09iaiIsInRvU3RyaW5nIiwiYXBwbHkiLCJjYWxsIiwiX2VudGl0eU1hcCIsIl9lc2NhcGUiLCJkYXRhIiwicyIsIl9hamF4Iiwib3B0aW9ucyIsImdldFhociIsIndpbmRvdyIsIlhNTEh0dHBSZXF1ZXN0IiwiQWN0aXZlWE9iamVjdCIsImUiLCJFcnJvciIsImVuY29kZVVzaW5nVXJsRW5jb2RpbmciLCJyZXN1bHQiLCJkYXRhSXRlbSIsImhhc093blByb3BlcnR5IiwicHVzaCIsImVuY29kZVVSSUNvbXBvbmVudCIsInV0ZjgiLCJ0ZXh0IiwiYyIsImNoYXJDb2RlQXQiLCJmcm9tQ2hhckNvZGUiLCJiYXNlNjQiLCJrZXlTdHIiLCJjaHIxIiwiY2hyMiIsImNocjMiLCJlbmMxIiwiZW5jMiIsImVuYzMiLCJlbmM0IiwiaXNOYU4iLCJjaGFyQXQiLCJtZXJnZUhlYWRlcnMiLCJjdXJyZW50SGVhZGVycyIsImhlYWRlciIsImFqYXgiLCJtZXRob2QiLCJ1cmwiLCJjYWNoZSIsImhlYWRlcnMiLCJqc29ucCIsImFzeW5jIiwicGF5bG9hZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJxdWVyeVN0cmluZyIsIkRhdGUiLCJnZXRUaW1lIiwiaGVhZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzY3JpcHQiLCJjcmVhdGVFbGVtZW50IiwidHlwZSIsInNyYyIsImFwcGVuZENoaWxkIiwiZXJyIiwieGhyIiwib3BlbiIsInNldFJlcXVlc3RIZWFkZXIiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwicmVzcG9uc2VUZXh0Iiwic3RhdHVzIiwianNvbiIsInBhcnNlIiwic2VuZCIsImh0dHAiLCJhdXRoQmFzaWMiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiY29ubmVjdCIsImRlbCIsImdldCIsImlzQWxsb3dlZCIsInZlcmIiLCJwYXRjaCIsInBvc3QiLCJwdXQiLCJ0cmFjZSIsIm1ldGhvZGUiLCJ0b0xvd2VyQ2FzZSIsInN1Y2Nlc3MiLCJlcnJvciIsIl9jb29raWUiLCJjcmVhdGUiLCJ2YWx1ZSIsIm1pbnV0ZXMiLCJkb21haW4iLCJleHBpcmVzIiwiZGF0ZSIsInNldFRpbWUiLCJ0b0dNVFN0cmluZyIsImNvb2tpZSIsInJlYWQiLCJuYW1lRVEiLCJjYSIsInNwbGl0Iiwic3Vic3RyaW5nIiwicmVtb3ZlIiwiY29va2llX25vb3AiLCJmIiwiZXh0ZW5kIiwiZWFjaCIsImRldGVjdExhbmd1YWdlIiwiZXNjYXBlIiwibG9nIiwic3RyIiwiY29uc29sZSIsInRvTGFuZ3VhZ2VzIiwicGFydHMiLCJ0b1VwcGVyQ2FzZSIsInJlZ2V4RXNjYXBlIiwiaW5pdCIsImNiIiwiZml4TG5nIiwibmFtZXNwYWNlcyIsImRlZmF1bHROcyIsImludGVycG9sYXRpb25QcmVmaXhFc2NhcGVkIiwiaW50ZXJwb2xhdGlvblN1ZmZpeEVzY2FwZWQiLCJsbmdUcmFuc2xhdGUiLCJ0cmFuc2xhdGUiLCJrZXkiLCJwbHVyYWxFeHRlbnNpb25zIiwic2V0Q3VycmVudExuZyIsImFkZEpxdWVyeUZ1bmN0IiwiZGVmZXJyZWQiLCJEZWZlcnJlZCIsInJlc29sdmUiLCJwcm9taXNlIiwibG5nc1RvTG9hZCIsImwiLCJwcmVzIiwieSIsInN5bmMiLCJzdG9yZSIsImxuZ3MiLCJhZGRSZXNvdXJjZUJ1bmRsZSIsInJlc291cmNlcyIsInJlbW92ZVJlc291cmNlQnVuZGxlIiwic2V0RGVmYXVsdE5hbWVzcGFjZSIsImxvYWROYW1lc3BhY2UiLCJuYW1lc3BhY2UiLCJsb2FkTmFtZXNwYWNlcyIsIm9wdHMiLCJjdXN0b21Mb2FkIiwibG5nTmVlZExvYWQiLCJhIiwibGVuQSIsIm5lZWRMb2FkIiwicmVzU2V0IiwiYiIsImxlbkIiLCJfZmV0Y2giLCJ0b2RvIiwibnNJbmRleCIsIm5zVmFsdWUiLCJsbmdJbmRleCIsImxuZ1ZhbHVlIiwiX3N0b3JlTG9jYWwiLCJzZXRMbmciLCJlbGUiLCJzdWJzdHIiLCJvcHRpb25zVG9Vc2UiLCJkZWZhdWx0VmFsdWUiLCJodG1sIiwicHJlcGVuZCIsImFwcGVuZCIsImRhdGFBdHRyIiwidHJhbnNsYXRlZCIsImxvY2FsaXplIiwidmFsIiwidGFyZ2V0U2VsZWN0b3IiLCJmaW5kIiwia2V5cyIsIm0iLCJmbiIsImVsZW1lbnRzIiwiYXBwbHlSZXBsYWNlbWVudCIsInJlcGxhY2VtZW50SGFzaCIsIm5lc3RlZEtleSIsInByZWZpeCIsInN1ZmZpeCIsInVuRXNjYXBpbmdTdWZmaXgiLCJuZXh0S2V5IiwiUmVnRXhwIiwiYXBwbHlSZXVzZSIsImNvbW1hIiwib3B0aW9uc19vcGVuIiwib3B0aW9uc19jbG9zZSIsIm1heFJlY3Vyc2lvbiIsImluZGV4X29mX29wZW5pbmciLCJpbmRleF9vZl9lbmRfb2ZfY2xvc2luZyIsInRva2VuIiwidG9rZW5fd2l0aG91dF9zeW1ib2xzIiwiaW5kZXhfb2ZfdG9rZW5fZW5kX29mX2Nsb3NpbmciLCJpbmRleF9vZl9vcHRzX29wZW5pbmciLCJpbmRleF9vZl9vcHRzX2VuZF9vZl9jbG9zaW5nIiwidHJhbnNsYXRlZF90b2tlbiIsIl90cmFuc2xhdGUiLCJoYXNDb250ZXh0IiwiY29udGV4dCIsIm5lZWRzUGx1cmFsIiwiY291bnQiLCJleGlzdHMiLCJub3RGb3VuZCIsIl9nZXREZWZhdWx0VmFsdWUiLCJmb3VuZCIsIl9maW5kIiwiX2luamVjdFNwcmludGZQcm9jZXNzb3IiLCJ2YWx1ZXMiLCJzcHJpbnRmIiwicG90ZW50aWFsS2V5cyIsInBvc3RNaXNzaW5nIiwicG9zdFByb2Nlc3NvciIsInBvc3RQcm9jZXNzb3JzIiwic3BsaXROb3RGb3VuZCIsIm9wdGlvbldpdGhvdXRDb3VudCIsIm9sZEFzeW5jIiwiY29udGV4dEtleSIsInBsdXJhbEtleSIsInBsdXJhbEV4dGVuc2lvbiIsIngiLCJ2YWx1ZVR5cGUiLCJjb3B5IiwiaXNGYWxsYmFja0xvb2t1cCIsImxlblkiLCJmb3VuZFZhbHVlIiwibm90Rm91bmRWYWx1ZSIsImRldGVjdGVkTG5nIiwicXNQYXJtIiwicXVlcnkiLCJsb2NhdGlvbiIsInNlYXJjaCIsInBhcm1zIiwicG9zIiwibmF2aWdhdG9yIiwibGFuZ3VhZ2UiLCJ1c2VyTGFuZ3VhZ2UiLCJfbG9hZExvY2FsIiwibWlzc2luZ0xuZ3MiLCJmZXRjaGVkIiwibm93TVMiLCJsb2NhbFN0b3JhZ2UiLCJsb2NhbCIsImdldEl0ZW0iLCJpMThuU3RhbXAiLCJzZXRJdGVtIiwiZXJyb3JzIiwibG9hZENvbXBsZXRlIiwiX2ZldGNoT25lIiwiZGF0YVR5cGUiLCJkb25lIiwidGhlU3RhdHVzIiwidXJscyIsIml0ZW0iLCJydWxlcyIsImFkZFJ1bGUiLCJvYmoiLCJjdXJyZW50UnVsZSIsInJ1bGUiLCJnZXRSZXN1bHQiLCJleHQiLCJwbHVyYWxzIiwibnVtYmVyIiwibnVtYmVycyIsImFkZFBvc3RQcm9jZXNzb3IiLCJmYyIsImdldF90eXBlIiwidmFyaWFibGUiLCJzbGljZSIsInN0cl9yZXBlYXQiLCJpbnB1dCIsIm11bHRpcGxpZXIiLCJvdXRwdXQiLCJzdHJfZm9ybWF0IiwiZm9ybWF0IiwicGFyc2VfdHJlZSIsImFyZ3YiLCJjdXJzb3IiLCJ0cmVlX2xlbmd0aCIsIm5vZGVfdHlwZSIsImFyZyIsIm1hdGNoIiwicGFkIiwicGFkX2NoYXJhY3RlciIsInBhZF9sZW5ndGgiLCJ0ZXN0IiwicGFyc2VJbnQiLCJ0b0V4cG9uZW50aWFsIiwicGFyc2VGbG9hdCIsInRvRml4ZWQiLCJmbXQiLCJfZm10IiwiYXJnX25hbWVzIiwiZXhlYyIsImZpZWxkX2xpc3QiLCJyZXBsYWNlbWVudF9maWVsZCIsImZpZWxkX21hdGNoIiwidnNwcmludGYiLCJ1bnNoaWZ0IiwiZnVuY3Rpb25zIiwiZXhwb3J0IiwiZ2xvYmFscyIsImZhbGxiYWNrX2xhbmd1YWdlIiwibGFuZ2F1Z2VzX3RhZ3NfcmVnZXgiLCJwcm9qZWN0X3RyYW5zbGF0aW9uc19kb21haW4iLCJicm93c2VyX3BhdGgiLCJUQVBpMThuQmFzZSIsImxpbmsiLCJkZWZhdWx0IiwidiIsIkV2ZW50RW1pdHRlciIsImNvbnN0cnVjdG9yIiwiX2ZhbGxiYWNrX2xhbmd1YWdlIiwiX2xhbmd1YWdlX2NoYW5nZWRfdHJhY2tlciIsIlRyYWNrZXIiLCJEZXBlbmRlbmN5IiwiX2xvYWRlZF9sYW5ndWFnZXMiLCJjb25mIiwicGFja2FnZXMiLCJsYW5ndWFnZXNfbmFtZXMiLCJ0cmFuc2xhdGlvbnMiLCJNZXRlb3IiLCJpc0NsaWVudCIsIlNlc3Npb24iLCJzZXQiLCJfbG9hZGVkX2xhbmdfc2Vzc2lvbl9rZXkiLCJfbGFuZ3VhZ2VTcGVjaWZpY1RyYW5zbGF0b3JzIiwiX2xhbmd1YWdlU3BlY2lmaWNUcmFuc2xhdG9yc1RyYWNrZXJzIiwiaXNTZXJ2ZXIiLCJzZXJ2ZXJfdHJhbnNsYXRvcnMiLCJzdGFydHVwIiwiX2VuYWJsZWQiLCJfcmVnaXN0ZXJIVFRQTWV0aG9kIiwiX18iLCJfZ2V0UGFja2FnZUkxOG5leHRQcm94eSIsIl9lbmFibGUiLCJfb25jZUVuYWJsZWQiLCJfZ2V0UGFja2FnZURvbWFpbiIsInBhY2thZ2VfbmFtZSIsImxhbmdfdGFnIiwiX2dldFNwZWNpZmljTGFuZ1RyYW5zbGF0b3IiLCJsYW5nIiwiY3VycmVudF9sYW5nIiwidHJhbnNsYXRvciIsImxhbmdfdHJhbnNsYXRvciIsIl9nZXRQcm9qZWN0TGFuZ3VhZ2VzIiwiXyIsImlzQXJyYXkiLCJzdXBwb3J0ZWRfbGFuZ3VhZ2VzIiwidW5pb24iLCJnZXRMYW5ndWFnZXMiLCJyZWYiLCJlbiIsIl9sb2FkTGFuZ0ZpbGVPYmplY3QiLCJsYW5ndWFnZV90YWciLCJwYWNrYWdlX2tleXMiLCJyZXN1bHRzIiwiX2xvYWRUcmFuc2xhdGlvbnNfY2FjaGUiLCJsb2FkVHJhbnNsYXRpb25zIiwicHJvamVjdF9sYW5ndWFnZXMiLCJ0cmFuc2xhdGlvbl9rZXlzIiwiZ2V0TGFuZ3VhZ2UiLCJjaGFuZ2VkIiwiVEFQaTE4blNlcnZlciIsIl9yZWdpc3RlclNlcnZlclRyYW5zbGF0b3IiLCJfcmVnaXN0ZXJBbGxTZXJ2ZXJUcmFuc2xhdG9ycyIsInJlc3VsdHMxIiwibWV0aG9kcyIsInNlbGYiLCJKc29uUm91dGVzIiwiYWRkIiwiaTE4bl9maWxlc19yb3V0ZSIsInJlcSIsInJlcyIsIm5leHQiLCJsYW5ncyIsImxhbmd1YWdlX3RyYW5zbGF0aW9ucyIsInBhcmFtcyIsInNlbmRSZXN1bHQiLCJjb2RlIiwiVEFQaTE4biJdLCJtYXBwaW5ncyI6Ijs7Ozs7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QSxLQUFZNkIsSUFBSSxDQUFDeEQsa0JBRHJCO0FBQUE7QUFFRSxpQkFBT3lELFVBQVUsQ0FBQ1MsVUFBWCxDQUFzQkwsR0FBdEIsRUFDTDtBQUFBTSxnQkFBQSxFQUFNLEdBQU47O0FBQUEsV0FESyxDQUFQO0FDOEJDOztBRDNCSEgsNkJBQUEsR0FBd0JSLElBQUksQ0FBQ2hELFlBQUwsQ0FBa0JtQixRQUFsQixDQUF4QixDQVorRSxDQ3lDN0U7QUFDQTtBQUNBO0FBQ0E7O0FEM0JGLGVBQU84QixVQUFVLENBQUNTLFVBQVgsQ0FBc0JMLEdBQXRCLEVBQ0w7QUFBQXZYLGNBQUEsRUFBVTBYLHFCQUFBLFdBQTRCQSxxQkFBNUIsR0FBdUQ7QUFBakUsU0FESyxDQUFQO0FBakJGLFFDMkJFO0FEM0RpQjs7QUFvRHJCeEMsZ0JBQWM7QUNnQ1YsYUQvQkYsS0FBQzZCLDZCQUFELEVDK0JFO0FEaENVOztBQXBGVDs7QUFBQTtBQ3lITEYsZUFBYSxDQUFDL2MsU0FBZCxDRHhIQTZhLGtCQ3dIQSxHRHhIb0IsSUN3SHBCO0FBRUEsU0FBT2tDLGFBQVA7QUFFRCxDRDdIWSxDQzZIVmhYLElEN0hVLENDNkhMLElEN0hLLENBQWIsQzs7Ozs7Ozs7Ozs7QUVIQWhFLE1BQU0sQ0FBQ2lYLE1BQVAsQ0FBYztBQUFDZ0YsU0FBTyxFQUFDLE1BQUlBO0FBQWIsQ0FBZDtBQUFxQyxJQUFJakIsYUFBSjtBQUFrQmhiLE1BQU0sQ0FBQ3dYLElBQVAsQ0FBWSxnQ0FBWixFQUE2QztBQUFDd0QsZUFBYSxDQUFDdEQsQ0FBRCxFQUFHO0FBQUNzRCxpQkFBYSxHQUFDdEQsQ0FBZDtBQUFnQjs7QUFBbEMsQ0FBN0MsRUFBaUYsQ0FBakY7QUFFaEQsTUFBTXVFLE9BQU8sR0FBRyxJQUFJakIsYUFBSixFQUFoQixDIiwiZmlsZSI6Ii9wYWNrYWdlcy9yb2NrZXRjaGF0X3RhcC1pMThuLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gdGFwX2kxOG5leHQgaXMgYSBjb3B5IG9mIGkxOG5leHQgdGhhdCBleHBvc2UgaTE4bmV4dCB0byB0aGUgZ2xvYmFsIG5hbWVzcGFjZVxuLy8gdW5kZXIgdGhlIG5hbWUgbmFtZSBUQVBpMThuZXh0IGluc3RlYWQgb2YgaTE4biB0byAoMSkgYXZvaWQgaW50ZXJmZXJpbmcgd2l0aCBvdGhlclxuLy8gTWV0ZW9yIHBhY2thZ2VzIHRoYXQgbWlnaHQgdXNlIGkxOG4gd2l0aCBkaWZmZXJlbnQgY29uZmlndXJhdGlvbnMgdGhhbiB3ZSBkb1xuLy8gb3Igd29yc2UgLSAoMikgdXNpbmcgYSBkaWZmZXJlbnQgdmVyc2lvbiBvZiBpMThuZXh0XG4vL1xuLy8gc2V0SnF1ZXJ5RXh0IGlzIGRpc2FibGVkIGJ5IGRlZmF1bHQgaW4gVEFQaTE4bmV4dFxuLy8gc3ByaW50ZiBpcyBhIGRlZmF1bHQgcG9zdFByb2Nlc3MgaW4gVEFQaTE4bmV4dFxuLy9cbi8vIFRBUGkxOG5leHQgaXMgc2V0IG91dHNpZGUgb2YgdGhlIHNpbmdsZXRvbiBidWlsZGVyIHRvIG1ha2UgaXQgYXZhaWxhYmxlIGluIHRoZVxuLy8gcGFja2FnZSBsZXZlbFxuXG4vLyBpMThuZXh0LCB2MS43LjNcbi8vIENvcHlyaWdodCAoYykyMDE0IEphbiBNw7xobGVtYW5uIChqYW11aGwpLlxuLy8gRGlzdHJpYnV0ZWQgdW5kZXIgTUlUIGxpY2Vuc2Vcbi8vIGh0dHA6Ly9pMThuZXh0LmNvbVxuXG4vLyBzZXQgVEFQaTE4bmV4dCBvdXRzaWRlIG9mIHRoZSBzaW5nbGV0b24gYnVpbGRlciB0byBtYWtlIGl0IGF2YWlsYWJsZSBpbiB0aGUgcGFja2FnZSBsZXZlbFxuVEFQaTE4bmV4dCA9IHt9O1xuKGZ1bmN0aW9uKCkge1xuXG4gICAgLy8gYWRkIGluZGV4T2YgdG8gbm9uIEVDTUEtMjYyIHN0YW5kYXJkIGNvbXBsaWFudCBicm93c2Vyc1xuICAgIGlmICghQXJyYXkucHJvdG90eXBlLmluZGV4T2YpIHtcbiAgICAgICAgQXJyYXkucHJvdG90eXBlLmluZGV4T2YgPSBmdW5jdGlvbiAoc2VhcmNoRWxlbWVudCAvKiwgZnJvbUluZGV4ICovICkge1xuICAgICAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgICAgICBpZiAodGhpcyA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHQgPSBPYmplY3QodGhpcyk7XG4gICAgICAgICAgICB2YXIgbGVuID0gdC5sZW5ndGggPj4+IDA7XG4gICAgICAgICAgICBpZiAobGVuID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG4gPSAwO1xuICAgICAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgbiA9IE51bWJlcihhcmd1bWVudHNbMV0pO1xuICAgICAgICAgICAgICAgIGlmIChuICE9IG4pIHsgLy8gc2hvcnRjdXQgZm9yIHZlcmlmeWluZyBpZiBpdCdzIE5hTlxuICAgICAgICAgICAgICAgICAgICBuID0gMDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG4gIT0gMCAmJiBuICE9IEluZmluaXR5ICYmIG4gIT0gLUluZmluaXR5KSB7XG4gICAgICAgICAgICAgICAgICAgIG4gPSAobiA+IDAgfHwgLTEpICogTWF0aC5mbG9vcihNYXRoLmFicyhuKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG4gPj0gbGVuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIGsgPSBuID49IDAgPyBuIDogTWF0aC5tYXgobGVuIC0gTWF0aC5hYnMobiksIDApO1xuICAgICAgICAgICAgZm9yICg7IGsgPCBsZW47IGsrKykge1xuICAgICAgICAgICAgICAgIGlmIChrIGluIHQgJiYgdFtrXSA9PT0gc2VhcmNoRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgLy8gYWRkIGxhc3RJbmRleE9mIHRvIG5vbiBFQ01BLTI2MiBzdGFuZGFyZCBjb21wbGlhbnQgYnJvd3NlcnNcbiAgICBpZiAoIUFycmF5LnByb3RvdHlwZS5sYXN0SW5kZXhPZikge1xuICAgICAgICBBcnJheS5wcm90b3R5cGUubGFzdEluZGV4T2YgPSBmdW5jdGlvbihzZWFyY2hFbGVtZW50IC8qLCBmcm9tSW5kZXgqLykge1xuICAgICAgICAgICAgXCJ1c2Ugc3RyaWN0XCI7XG4gICAgICAgICAgICBpZiAodGhpcyA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHQgPSBPYmplY3QodGhpcyk7XG4gICAgICAgICAgICB2YXIgbGVuID0gdC5sZW5ndGggPj4+IDA7XG4gICAgICAgICAgICBpZiAobGVuID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG4gPSBsZW47XG4gICAgICAgICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICBuID0gTnVtYmVyKGFyZ3VtZW50c1sxXSk7XG4gICAgICAgICAgICAgICAgaWYgKG4gIT0gbikge1xuICAgICAgICAgICAgICAgICAgICBuID0gMDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG4gIT0gMCAmJiBuICE9ICgxIC8gMCkgJiYgbiAhPSAtKDEgLyAwKSkge1xuICAgICAgICAgICAgICAgICAgICBuID0gKG4gPiAwIHx8IC0xKSAqIE1hdGguZmxvb3IoTWF0aC5hYnMobikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBrID0gbiA+PSAwID8gTWF0aC5taW4obiwgbGVuIC0gMSkgOiBsZW4gLSBNYXRoLmFicyhuKTtcbiAgICAgICAgICAgIGZvciAoOyBrID49IDA7IGstLSkge1xuICAgICAgICAgICAgICAgIGlmIChrIGluIHQgJiYgdFtrXSA9PT0gc2VhcmNoRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH07XG4gICAgfVxuICAgIFxuICAgIC8vIEFkZCBzdHJpbmcgdHJpbSBmb3IgSUU4LlxuICAgIGlmICh0eXBlb2YgU3RyaW5nLnByb3RvdHlwZS50cmltICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIFN0cmluZy5wcm90b3R5cGUudHJpbSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpOyBcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHZhciByb290ID0gdGhpc1xuICAgICAgLCAkID0gcm9vdC5qUXVlcnkgfHwgcm9vdC5aZXB0b1xuICAgICAgLCByZXNTdG9yZSA9IHt9XG4gICAgICAsIGN1cnJlbnRMbmdcbiAgICAgICwgcmVwbGFjZW1lbnRDb3VudGVyID0gMFxuICAgICAgLCBsYW5ndWFnZXMgPSBbXVxuICAgICAgLCBpbml0aWFsaXplZCA9IGZhbHNlO1xuXG5cbiAgICAvLyBFeHBvcnQgdGhlIGkxOG5leHQgb2JqZWN0IGZvciAqKkNvbW1vbkpTKiouIFxuICAgIC8vIElmIHdlJ3JlIG5vdCBpbiBDb21tb25KUywgYWRkIGBpMThuYCB0byB0aGVcbiAgICAvLyBnbG9iYWwgb2JqZWN0IG9yIHRvIGpxdWVyeS5cbiAgICBpZiAodHlwZW9mIG1vZHVsZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbW9kdWxlLmV4cG9ydHMpIHtcbiAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSBUQVBpMThuZXh0O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGlmICgkKSB7XG4gICAgICAgICAgICAkLlRBUGkxOG5leHQgPSAkLlRBUGkxOG5leHQgfHwgVEFQaTE4bmV4dDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcm9vdC5UQVBpMThuZXh0ID0gcm9vdC5UQVBpMThuZXh0IHx8IFRBUGkxOG5leHQ7XG4gICAgfVxuICAgIC8vIGRlZmF1bHRzXG4gICAgdmFyIG8gPSB7XG4gICAgICAgIGxuZzogdW5kZWZpbmVkLFxuICAgICAgICBsb2FkOiAnYWxsJyxcbiAgICAgICAgcHJlbG9hZDogW10sXG4gICAgICAgIGxvd2VyQ2FzZUxuZzogZmFsc2UsXG4gICAgICAgIHJldHVybk9iamVjdFRyZWVzOiBmYWxzZSxcbiAgICAgICAgZmFsbGJhY2tMbmc6IFsnZGV2J10sXG4gICAgICAgIGZhbGxiYWNrTlM6IFtdLFxuICAgICAgICBkZXRlY3RMbmdRUzogJ3NldExuZycsXG4gICAgICAgIG5zOiAndHJhbnNsYXRpb24nLFxuICAgICAgICBmYWxsYmFja09uTnVsbDogdHJ1ZSxcbiAgICAgICAgZmFsbGJhY2tPbkVtcHR5OiBmYWxzZSxcbiAgICAgICAgZmFsbGJhY2tUb0RlZmF1bHROUzogZmFsc2UsXG4gICAgICAgIG5zc2VwYXJhdG9yOiAnOicsXG4gICAgICAgIGtleXNlcGFyYXRvcjogJy4nLFxuICAgICAgICBzZWxlY3RvckF0dHI6ICdkYXRhLWkxOG4nLFxuICAgICAgICBkZWJ1ZzogZmFsc2UsXG4gICAgICAgIFxuICAgICAgICByZXNHZXRQYXRoOiAnbG9jYWxlcy9fX2xuZ19fL19fbnNfXy5qc29uJyxcbiAgICAgICAgcmVzUG9zdFBhdGg6ICdsb2NhbGVzL2FkZC9fX2xuZ19fL19fbnNfXycsXG4gICAgXG4gICAgICAgIGdldEFzeW5jOiB0cnVlLFxuICAgICAgICBwb3N0QXN5bmM6IHRydWUsXG4gICAgXG4gICAgICAgIHJlc1N0b3JlOiB1bmRlZmluZWQsXG4gICAgICAgIHVzZUxvY2FsU3RvcmFnZTogZmFsc2UsXG4gICAgICAgIGxvY2FsU3RvcmFnZUV4cGlyYXRpb25UaW1lOiA3KjI0KjYwKjYwKjEwMDAsXG4gICAgXG4gICAgICAgIGR5bmFtaWNMb2FkOiBmYWxzZSxcbiAgICAgICAgc2VuZE1pc3Npbmc6IGZhbHNlLFxuICAgICAgICBzZW5kTWlzc2luZ1RvOiAnZmFsbGJhY2snLCAvLyBjdXJyZW50IHwgYWxsXG4gICAgICAgIHNlbmRUeXBlOiAnUE9TVCcsXG4gICAgXG4gICAgICAgIGludGVycG9sYXRpb25QcmVmaXg6ICdfXycsXG4gICAgICAgIGludGVycG9sYXRpb25TdWZmaXg6ICdfXycsXG4gICAgICAgIHJldXNlUHJlZml4OiAnJHQoJyxcbiAgICAgICAgcmV1c2VTdWZmaXg6ICcpJyxcbiAgICAgICAgcGx1cmFsU3VmZml4OiAnX3BsdXJhbCcsXG4gICAgICAgIHBsdXJhbE5vdEZvdW5kOiBbJ3BsdXJhbF9ub3RfZm91bmQnLCBNYXRoLnJhbmRvbSgpXS5qb2luKCcnKSxcbiAgICAgICAgY29udGV4dE5vdEZvdW5kOiBbJ2NvbnRleHRfbm90X2ZvdW5kJywgTWF0aC5yYW5kb20oKV0uam9pbignJyksXG4gICAgICAgIGVzY2FwZUludGVycG9sYXRpb246IGZhbHNlLFxuICAgIFxuICAgICAgICBzZXRKcXVlcnlFeHQ6IGZhbHNlLFxuICAgICAgICBkZWZhdWx0VmFsdWVGcm9tQ29udGVudDogdHJ1ZSxcbiAgICAgICAgdXNlRGF0YUF0dHJPcHRpb25zOiBmYWxzZSxcbiAgICAgICAgY29va2llRXhwaXJhdGlvblRpbWU6IHVuZGVmaW5lZCxcbiAgICAgICAgdXNlQ29va2llOiB0cnVlLFxuICAgICAgICBjb29raWVOYW1lOiAnVEFQaTE4bmV4dCcsXG4gICAgICAgIGNvb2tpZURvbWFpbjogdW5kZWZpbmVkLFxuICAgIFxuICAgICAgICBvYmplY3RUcmVlS2V5SGFuZGxlcjogdW5kZWZpbmVkLFxuICAgICAgICBwb3N0UHJvY2VzczogW1wic3ByaW50ZlwiXSxcbiAgICAgICAgcGFyc2VNaXNzaW5nS2V5OiB1bmRlZmluZWQsXG4gICAgXG4gICAgICAgIHNob3J0Y3V0RnVuY3Rpb246ICdzcHJpbnRmJyAvLyBvcjogZGVmYXVsdFZhbHVlXG4gICAgfTtcbiAgICBmdW5jdGlvbiBfZXh0ZW5kKHRhcmdldCwgc291cmNlKSB7XG4gICAgICAgIGlmICghc291cmNlIHx8IHR5cGVvZiBzb3VyY2UgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgZm9yICh2YXIgYXR0ciBpbiBzb3VyY2UpIHsgdGFyZ2V0W2F0dHJdID0gc291cmNlW2F0dHJdOyB9XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIF9lYWNoKG9iamVjdCwgY2FsbGJhY2ssIGFyZ3MpIHtcbiAgICAgICAgdmFyIG5hbWUsIGkgPSAwLFxuICAgICAgICAgICAgbGVuZ3RoID0gb2JqZWN0Lmxlbmd0aCxcbiAgICAgICAgICAgIGlzT2JqID0gbGVuZ3RoID09PSB1bmRlZmluZWQgfHwgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5hcHBseShvYmplY3QpICE9PSAnW29iamVjdCBBcnJheV0nIHx8IHR5cGVvZiBvYmplY3QgPT09IFwiZnVuY3Rpb25cIjtcbiAgICBcbiAgICAgICAgaWYgKGFyZ3MpIHtcbiAgICAgICAgICAgIGlmIChpc09iaikge1xuICAgICAgICAgICAgICAgIGZvciAobmFtZSBpbiBvYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrLmFwcGx5KG9iamVjdFtuYW1lXSwgYXJncykgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yICggOyBpIDwgbGVuZ3RoOyApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrLmFwcGx5KG9iamVjdFtpKytdLCBhcmdzKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAvLyBBIHNwZWNpYWwsIGZhc3QsIGNhc2UgZm9yIHRoZSBtb3N0IGNvbW1vbiB1c2Ugb2YgZWFjaFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGlzT2JqKSB7XG4gICAgICAgICAgICAgICAgZm9yIChuYW1lIGluIG9iamVjdCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2suY2FsbChvYmplY3RbbmFtZV0sIG5hbWUsIG9iamVjdFtuYW1lXSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yICggOyBpIDwgbGVuZ3RoOyApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrLmNhbGwob2JqZWN0W2ldLCBpLCBvYmplY3RbaSsrXSkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICByZXR1cm4gb2JqZWN0O1xuICAgIH1cbiAgICBcbiAgICB2YXIgX2VudGl0eU1hcCA9IHtcbiAgICAgICAgXCImXCI6IFwiJmFtcDtcIixcbiAgICAgICAgXCI8XCI6IFwiJmx0O1wiLFxuICAgICAgICBcIj5cIjogXCImZ3Q7XCIsXG4gICAgICAgICdcIic6ICcmcXVvdDsnLFxuICAgICAgICBcIidcIjogJyYjMzk7JyxcbiAgICAgICAgXCIvXCI6ICcmI3gyRjsnXG4gICAgfTtcbiAgICBcbiAgICBmdW5jdGlvbiBfZXNjYXBlKGRhdGEpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBkYXRhID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcmV0dXJuIGRhdGEucmVwbGFjZSgvWyY8PlwiJ1xcL10vZywgZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gX2VudGl0eU1hcFtzXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIF9hamF4KG9wdGlvbnMpIHtcbiAgICBcbiAgICAgICAgLy8gdjAuNS4wIG9mIGh0dHBzOi8vZ2l0aHViLmNvbS9nb2xvcm9kZW4vaHR0cC5qc1xuICAgICAgICB2YXIgZ2V0WGhyID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAvLyBVc2UgdGhlIG5hdGl2ZSBYSFIgb2JqZWN0IGlmIHRoZSBicm93c2VyIHN1cHBvcnRzIGl0LlxuICAgICAgICAgICAgaWYgKHdpbmRvdy5YTUxIdHRwUmVxdWVzdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayhudWxsLCBuZXcgWE1MSHR0cFJlcXVlc3QoKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5BY3RpdmVYT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgLy8gSW4gSW50ZXJuZXQgRXhwbG9yZXIgY2hlY2sgZm9yIEFjdGl2ZVggdmVyc2lvbnMgb2YgdGhlIFhIUiBvYmplY3QuXG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwsIG5ldyBBY3RpdmVYT2JqZWN0KFwiTXN4bWwyLlhNTEhUVFBcIikpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG51bGwsIG5ldyBBY3RpdmVYT2JqZWN0KFwiTWljcm9zb2Z0LlhNTEhUVFBcIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIC8vIElmIG5vIFhIUiBzdXBwb3J0IHdhcyBmb3VuZCwgdGhyb3cgYW4gZXJyb3IuXG4gICAgICAgICAgICByZXR1cm4gY2FsbGJhY2sobmV3IEVycm9yKCkpO1xuICAgICAgICB9O1xuICAgIFxuICAgICAgICB2YXIgZW5jb2RlVXNpbmdVcmxFbmNvZGluZyA9IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBpZih0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICAgICAgIGZvcih2YXIgZGF0YUl0ZW0gaW4gZGF0YSkge1xuICAgICAgICAgICAgICAgIGlmKGRhdGEuaGFzT3duUHJvcGVydHkoZGF0YUl0ZW0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGVuY29kZVVSSUNvbXBvbmVudChkYXRhSXRlbSkgKyAnPScgKyBlbmNvZGVVUklDb21wb25lbnQoZGF0YVtkYXRhSXRlbV0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0LmpvaW4oJyYnKTtcbiAgICAgICAgfTtcbiAgICBcbiAgICAgICAgdmFyIHV0ZjggPSBmdW5jdGlvbiAodGV4dCkge1xuICAgICAgICAgICAgdGV4dCA9IHRleHQucmVwbGFjZSgvXFxyXFxuL2csICdcXG4nKTtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSAnJztcbiAgICBcbiAgICAgICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCB0ZXh0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGMgPSB0ZXh0LmNoYXJDb2RlQXQoaSk7XG4gICAgXG4gICAgICAgICAgICAgICAgaWYoYyA8IDEyOCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoYyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKChjID4gMTI3KSAmJiAoYyA8IDIwNDgpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyA+PiA2KSB8IDE5Mik7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyAmIDYzKSB8IDEyOCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjID4+IDEyKSB8IDIyNCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoKGMgPj4gNikgJiA2MykgfCAxMjgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgJiA2MykgfCAxMjgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH07XG4gICAgXG4gICAgICAgIHZhciBiYXNlNjQgPSBmdW5jdGlvbiAodGV4dCkge1xuICAgICAgICAgICAgdmFyIGtleVN0ciA9ICdBQkNERUZHSElKS0xNTk9QUVJTVFVWV1hZWmFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSsvPSc7XG4gICAgXG4gICAgICAgICAgICB0ZXh0ID0gdXRmOCh0ZXh0KTtcbiAgICAgICAgICAgIHZhciByZXN1bHQgPSAnJyxcbiAgICAgICAgICAgICAgICAgICAgY2hyMSwgY2hyMiwgY2hyMyxcbiAgICAgICAgICAgICAgICAgICAgZW5jMSwgZW5jMiwgZW5jMywgZW5jNCxcbiAgICAgICAgICAgICAgICAgICAgaSA9IDA7XG4gICAgXG4gICAgICAgICAgICBkbyB7XG4gICAgICAgICAgICAgICAgY2hyMSA9IHRleHQuY2hhckNvZGVBdChpKyspO1xuICAgICAgICAgICAgICAgIGNocjIgPSB0ZXh0LmNoYXJDb2RlQXQoaSsrKTtcbiAgICAgICAgICAgICAgICBjaHIzID0gdGV4dC5jaGFyQ29kZUF0KGkrKyk7XG4gICAgXG4gICAgICAgICAgICAgICAgZW5jMSA9IGNocjEgPj4gMjtcbiAgICAgICAgICAgICAgICBlbmMyID0gKChjaHIxICYgMykgPDwgNCkgfCAoY2hyMiA+PiA0KTtcbiAgICAgICAgICAgICAgICBlbmMzID0gKChjaHIyICYgMTUpIDw8IDIpIHwgKGNocjMgPj4gNik7XG4gICAgICAgICAgICAgICAgZW5jNCA9IGNocjMgJiA2MztcbiAgICBcbiAgICAgICAgICAgICAgICBpZihpc05hTihjaHIyKSkge1xuICAgICAgICAgICAgICAgICAgICBlbmMzID0gZW5jNCA9IDY0O1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZihpc05hTihjaHIzKSkge1xuICAgICAgICAgICAgICAgICAgICBlbmM0ID0gNjQ7XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIHJlc3VsdCArPVxuICAgICAgICAgICAgICAgICAgICBrZXlTdHIuY2hhckF0KGVuYzEpICtcbiAgICAgICAgICAgICAgICAgICAga2V5U3RyLmNoYXJBdChlbmMyKSArXG4gICAgICAgICAgICAgICAgICAgIGtleVN0ci5jaGFyQXQoZW5jMykgK1xuICAgICAgICAgICAgICAgICAgICBrZXlTdHIuY2hhckF0KGVuYzQpO1xuICAgICAgICAgICAgICAgIGNocjEgPSBjaHIyID0gY2hyMyA9ICcnO1xuICAgICAgICAgICAgICAgIGVuYzEgPSBlbmMyID0gZW5jMyA9IGVuYzQgPSAnJztcbiAgICAgICAgICAgIH0gd2hpbGUoaSA8IHRleHQubGVuZ3RoKTtcbiAgICBcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH07XG4gICAgXG4gICAgICAgIHZhciBtZXJnZUhlYWRlcnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyBVc2UgdGhlIGZpcnN0IGhlYWRlciBvYmplY3QgYXMgYmFzZS5cbiAgICAgICAgICAgIHZhciByZXN1bHQgPSBhcmd1bWVudHNbMF07XG4gICAgXG4gICAgICAgICAgICAvLyBJdGVyYXRlIHRocm91Z2ggdGhlIHJlbWFpbmluZyBoZWFkZXIgb2JqZWN0cyBhbmQgYWRkIHRoZW0uXG4gICAgICAgICAgICBmb3IodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGN1cnJlbnRIZWFkZXJzID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgICAgIGZvcih2YXIgaGVhZGVyIGluIGN1cnJlbnRIZWFkZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGN1cnJlbnRIZWFkZXJzLmhhc093blByb3BlcnR5KGhlYWRlcikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFtoZWFkZXJdID0gY3VycmVudEhlYWRlcnNbaGVhZGVyXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIC8vIFJldHVybiB0aGUgbWVyZ2VkIGhlYWRlcnMuXG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9O1xuICAgIFxuICAgICAgICB2YXIgYWpheCA9IGZ1bmN0aW9uIChtZXRob2QsIHVybCwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIC8vIEFkanVzdCBwYXJhbWV0ZXJzLlxuICAgICAgICAgICAgaWYodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjYWxsYmFjayA9IG9wdGlvbnM7XG4gICAgICAgICAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgLy8gU2V0IGRlZmF1bHQgcGFyYW1ldGVyIHZhbHVlcy5cbiAgICAgICAgICAgIG9wdGlvbnMuY2FjaGUgPSBvcHRpb25zLmNhY2hlIHx8IGZhbHNlO1xuICAgICAgICAgICAgb3B0aW9ucy5kYXRhID0gb3B0aW9ucy5kYXRhIHx8IHt9O1xuICAgICAgICAgICAgb3B0aW9ucy5oZWFkZXJzID0gb3B0aW9ucy5oZWFkZXJzIHx8IHt9O1xuICAgICAgICAgICAgb3B0aW9ucy5qc29ucCA9IG9wdGlvbnMuanNvbnAgfHwgZmFsc2U7XG4gICAgICAgICAgICBvcHRpb25zLmFzeW5jID0gb3B0aW9ucy5hc3luYyA9PT0gdW5kZWZpbmVkID8gdHJ1ZSA6IG9wdGlvbnMuYXN5bmM7XG4gICAgXG4gICAgICAgICAgICAvLyBNZXJnZSB0aGUgdmFyaW91cyBoZWFkZXIgb2JqZWN0cy5cbiAgICAgICAgICAgIHZhciBoZWFkZXJzID0gbWVyZ2VIZWFkZXJzKHtcbiAgICAgICAgICAgICAgICAnYWNjZXB0JzogJyovKicsXG4gICAgICAgICAgICAgICAgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7Y2hhcnNldD1VVEYtOCdcbiAgICAgICAgICAgIH0sIGFqYXguaGVhZGVycywgb3B0aW9ucy5oZWFkZXJzKTtcbiAgICBcbiAgICAgICAgICAgIC8vIEVuY29kZSB0aGUgZGF0YSBhY2NvcmRpbmcgdG8gdGhlIGNvbnRlbnQtdHlwZS5cbiAgICAgICAgICAgIHZhciBwYXlsb2FkO1xuICAgICAgICAgICAgaWYgKGhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddID09PSAnYXBwbGljYXRpb24vanNvbicpIHtcbiAgICAgICAgICAgICAgICBwYXlsb2FkID0gSlNPTi5zdHJpbmdpZnkob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcGF5bG9hZCA9IGVuY29kZVVzaW5nVXJsRW5jb2Rpbmcob3B0aW9ucy5kYXRhKTtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIC8vIFNwZWNpYWxseSBwcmVwYXJlIEdFVCByZXF1ZXN0czogU2V0dXAgdGhlIHF1ZXJ5IHN0cmluZywgaGFuZGxlIGNhY2hpbmcgYW5kIG1ha2UgYSBKU09OUCBjYWxsXG4gICAgICAgICAgICAvLyBpZiBuZWNjZXNzYXJ5LlxuICAgICAgICAgICAgaWYobWV0aG9kID09PSAnR0VUJykge1xuICAgICAgICAgICAgICAgIC8vIFNldHVwIHRoZSBxdWVyeSBzdHJpbmcuXG4gICAgICAgICAgICAgICAgdmFyIHF1ZXJ5U3RyaW5nID0gW107XG4gICAgICAgICAgICAgICAgaWYocGF5bG9hZCkge1xuICAgICAgICAgICAgICAgICAgICBxdWVyeVN0cmluZy5wdXNoKHBheWxvYWQpO1xuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgLy8gSGFuZGxlIGNhY2hpbmcuXG4gICAgICAgICAgICAgICAgaWYoIW9wdGlvbnMuY2FjaGUpIHtcbiAgICAgICAgICAgICAgICAgICAgcXVlcnlTdHJpbmcucHVzaCgnXz0nICsgKG5ldyBEYXRlKCkpLmdldFRpbWUoKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIC8vIElmIG5lY2Nlc3NhcnkgcHJlcGFyZSB0aGUgcXVlcnkgc3RyaW5nIGZvciBhIEpTT05QIGNhbGwuXG4gICAgICAgICAgICAgICAgaWYob3B0aW9ucy5qc29ucCkge1xuICAgICAgICAgICAgICAgICAgICBxdWVyeVN0cmluZy5wdXNoKCdjYWxsYmFjaz0nICsgb3B0aW9ucy5qc29ucCk7XG4gICAgICAgICAgICAgICAgICAgIHF1ZXJ5U3RyaW5nLnB1c2goJ2pzb25wPScgKyBvcHRpb25zLmpzb25wKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgLy8gTWVyZ2UgdGhlIHF1ZXJ5IHN0cmluZyBhbmQgYXR0YWNoIGl0IHRvIHRoZSB1cmwuXG4gICAgICAgICAgICAgICAgcXVlcnlTdHJpbmcgPSBxdWVyeVN0cmluZy5qb2luKCcmJyk7XG4gICAgICAgICAgICAgICAgaWYgKHF1ZXJ5U3RyaW5nLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHVybC5pbmRleE9mKCc/JykgPiAtMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsICs9ICcmJyArIHF1ZXJ5U3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdXJsICs9ICc/JyArIHF1ZXJ5U3RyaW5nO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIC8vIE1ha2UgYSBKU09OUCBjYWxsIGlmIG5lY2Nlc3NhcnkuXG4gICAgICAgICAgICAgICAgaWYob3B0aW9ucy5qc29ucCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gICAgICAgICAgICAgICAgICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgICAgICAgICAgICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgICAgICAgICAgICAgICAgc2NyaXB0LnNyYyA9IHVybDtcbiAgICAgICAgICAgICAgICAgICAgaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgLy8gU2luY2Ugd2UgZ290IGhlcmUsIGl0IGlzIG5vIEpTT05QIHJlcXVlc3QsIHNvIG1ha2UgYSBub3JtYWwgWEhSIHJlcXVlc3QuXG4gICAgICAgICAgICBnZXRYaHIoZnVuY3Rpb24gKGVyciwgeGhyKSB7XG4gICAgICAgICAgICAgICAgaWYoZXJyKSByZXR1cm4gY2FsbGJhY2soZXJyKTtcbiAgICBcbiAgICAgICAgICAgICAgICAvLyBPcGVuIHRoZSByZXF1ZXN0LlxuICAgICAgICAgICAgICAgIHhoci5vcGVuKG1ldGhvZCwgdXJsLCBvcHRpb25zLmFzeW5jKTtcbiAgICBcbiAgICAgICAgICAgICAgICAvLyBTZXQgdGhlIHJlcXVlc3QgaGVhZGVycy5cbiAgICAgICAgICAgICAgICBmb3IodmFyIGhlYWRlciBpbiBoZWFkZXJzKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmKGhlYWRlcnMuaGFzT3duUHJvcGVydHkoaGVhZGVyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoaGVhZGVyLCBoZWFkZXJzW2hlYWRlcl0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgIC8vIEhhbmRsZSB0aGUgcmVxdWVzdCBldmVudHMuXG4gICAgICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBkYXRhID0geGhyLnJlc3BvbnNlVGV4dCB8fCAnJztcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElmIG5vIGNhbGxiYWNrIGlzIGdpdmVuLCByZXR1cm4uXG4gICAgICAgICAgICAgICAgICAgICAgICBpZighY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBSZXR1cm4gYW4gb2JqZWN0IHRoYXQgcHJvdmlkZXMgYWNjZXNzIHRvIHRoZSBkYXRhIGFzIHRleHQgYW5kIEpTT04uXG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayh4aHIuc3RhdHVzLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGpzb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgIFxuICAgICAgICAgICAgICAgIC8vIEFjdHVhbGx5IHNlbmQgdGhlIFhIUiByZXF1ZXN0LlxuICAgICAgICAgICAgICAgIHhoci5zZW5kKHBheWxvYWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgXG4gICAgICAgIC8vIERlZmluZSB0aGUgZXh0ZXJuYWwgaW50ZXJmYWNlLlxuICAgICAgICB2YXIgaHR0cCA9IHtcbiAgICAgICAgICAgIGF1dGhCYXNpYzogZnVuY3Rpb24gKHVzZXJuYW1lLCBwYXNzd29yZCkge1xuICAgICAgICAgICAgICAgIGFqYXguaGVhZGVyc1snQXV0aG9yaXphdGlvbiddID0gJ0Jhc2ljICcgKyBiYXNlNjQodXNlcm5hbWUgKyAnOicgKyBwYXNzd29yZCk7XG4gICAgICAgICAgICB9LFxuICAgIFxuICAgICAgICAgICAgY29ubmVjdDogZnVuY3Rpb24gKHVybCwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWpheCgnQ09OTkVDVCcsIHVybCwgb3B0aW9ucywgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSxcbiAgICBcbiAgICAgICAgICAgIGRlbDogZnVuY3Rpb24gKHVybCwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWpheCgnREVMRVRFJywgdXJsLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9LFxuICAgIFxuICAgICAgICAgICAgZ2V0OiBmdW5jdGlvbiAodXJsLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHJldHVybiBhamF4KCdHRVQnLCB1cmwsIG9wdGlvbnMsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH0sXG4gICAgXG4gICAgICAgICAgICBoZWFkOiBmdW5jdGlvbiAodXJsLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHJldHVybiBhamF4KCdIRUFEJywgdXJsLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9LFxuICAgIFxuICAgICAgICAgICAgaGVhZGVyczogZnVuY3Rpb24gKGhlYWRlcnMpIHtcbiAgICAgICAgICAgICAgICBhamF4LmhlYWRlcnMgPSBoZWFkZXJzIHx8IHt9O1xuICAgICAgICAgICAgfSxcbiAgICBcbiAgICAgICAgICAgIGlzQWxsb3dlZDogZnVuY3Rpb24gKHVybCwgdmVyYiwgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICB0aGlzLm9wdGlvbnModXJsLCBmdW5jdGlvbiAoc3RhdHVzLCBkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGRhdGEudGV4dCgpLmluZGV4T2YodmVyYikgIT09IC0xKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0sXG4gICAgXG4gICAgICAgICAgICBvcHRpb25zOiBmdW5jdGlvbiAodXJsLCBvcHRpb25zLCBjYWxsYmFjaykge1xuICAgICAgICAgICAgICAgIHJldHVybiBhamF4KCdPUFRJT05TJywgdXJsLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9LFxuICAgIFxuICAgICAgICAgICAgcGF0Y2g6IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFqYXgoJ1BBVENIJywgdXJsLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9LFxuICAgIFxuICAgICAgICAgICAgcG9zdDogZnVuY3Rpb24gKHVybCwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWpheCgnUE9TVCcsIHVybCwgb3B0aW9ucywgY2FsbGJhY2spO1xuICAgICAgICAgICAgfSxcbiAgICBcbiAgICAgICAgICAgIHB1dDogZnVuY3Rpb24gKHVybCwgb3B0aW9ucywgY2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYWpheCgnUFVUJywgdXJsLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9LFxuICAgIFxuICAgICAgICAgICAgdHJhY2U6IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMsIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFqYXgoJ1RSQUNFJywgdXJsLCBvcHRpb25zLCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgXG4gICAgXG4gICAgICAgIHZhciBtZXRob2RlID0gb3B0aW9ucy50eXBlID8gb3B0aW9ucy50eXBlLnRvTG93ZXJDYXNlKCkgOiAnZ2V0JztcbiAgICBcbiAgICAgICAgaHR0cFttZXRob2RlXShvcHRpb25zLnVybCwgb3B0aW9ucywgZnVuY3Rpb24gKHN0YXR1cywgZGF0YSkge1xuICAgICAgICAgICAgaWYgKHN0YXR1cyA9PT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9ucy5zdWNjZXNzKGRhdGEuanNvbigpLCBzdGF0dXMsIG51bGwpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zLmVycm9yKGRhdGEudGV4dCgpLCBzdGF0dXMsIG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG4gICAgdmFyIF9jb29raWUgPSB7XG4gICAgICAgIGNyZWF0ZTogZnVuY3Rpb24obmFtZSx2YWx1ZSxtaW51dGVzLGRvbWFpbikge1xuICAgICAgICAgICAgdmFyIGV4cGlyZXM7XG4gICAgICAgICAgICBpZiAobWludXRlcykge1xuICAgICAgICAgICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgICBkYXRlLnNldFRpbWUoZGF0ZS5nZXRUaW1lKCkrKG1pbnV0ZXMqNjAqMTAwMCkpO1xuICAgICAgICAgICAgICAgIGV4cGlyZXMgPSBcIjsgZXhwaXJlcz1cIitkYXRlLnRvR01UU3RyaW5nKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGV4cGlyZXMgPSBcIlwiO1xuICAgICAgICAgICAgZG9tYWluID0gKGRvbWFpbik/IFwiZG9tYWluPVwiK2RvbWFpbitcIjtcIiA6IFwiXCI7XG4gICAgICAgICAgICBkb2N1bWVudC5jb29raWUgPSBuYW1lK1wiPVwiK3ZhbHVlK2V4cGlyZXMrXCI7XCIrZG9tYWluK1wicGF0aD0vXCI7XG4gICAgICAgIH0sXG4gICAgXG4gICAgICAgIHJlYWQ6IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgIHZhciBuYW1lRVEgPSBuYW1lICsgXCI9XCI7XG4gICAgICAgICAgICB2YXIgY2EgPSBkb2N1bWVudC5jb29raWUuc3BsaXQoJzsnKTtcbiAgICAgICAgICAgIGZvcih2YXIgaT0wO2kgPCBjYS5sZW5ndGg7aSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGMgPSBjYVtpXTtcbiAgICAgICAgICAgICAgICB3aGlsZSAoYy5jaGFyQXQoMCk9PScgJykgYyA9IGMuc3Vic3RyaW5nKDEsYy5sZW5ndGgpO1xuICAgICAgICAgICAgICAgIGlmIChjLmluZGV4T2YobmFtZUVRKSA9PT0gMCkgcmV0dXJuIGMuc3Vic3RyaW5nKG5hbWVFUS5sZW5ndGgsYy5sZW5ndGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH0sXG4gICAgXG4gICAgICAgIHJlbW92ZTogZnVuY3Rpb24obmFtZSkge1xuICAgICAgICAgICAgdGhpcy5jcmVhdGUobmFtZSxcIlwiLC0xKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgXG4gICAgdmFyIGNvb2tpZV9ub29wID0ge1xuICAgICAgICBjcmVhdGU6IGZ1bmN0aW9uKG5hbWUsdmFsdWUsbWludXRlcyxkb21haW4pIHt9LFxuICAgICAgICByZWFkOiBmdW5jdGlvbihuYW1lKSB7IHJldHVybiBudWxsOyB9LFxuICAgICAgICByZW1vdmU6IGZ1bmN0aW9uKG5hbWUpIHt9XG4gICAgfTtcbiAgICBcbiAgICBcbiAgICBcbiAgICAvLyBtb3ZlIGRlcGVuZGVudCBmdW5jdGlvbnMgdG8gYSBjb250YWluZXIgc28gdGhhdFxuICAgIC8vIHRoZXkgY2FuIGJlIG92ZXJyaWRlbiBlYXNpZXIgaW4gbm8ganF1ZXJ5IGVudmlyb25tZW50IChub2RlLmpzKVxuICAgIHZhciBmID0ge1xuICAgICAgICBleHRlbmQ6ICQgPyAkLmV4dGVuZCA6IF9leHRlbmQsXG4gICAgICAgIGVhY2g6ICQgPyAkLmVhY2ggOiBfZWFjaCxcbiAgICAgICAgYWpheDogJCA/ICQuYWpheCA6ICh0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnID8gX2FqYXggOiBmdW5jdGlvbigpIHt9KSxcbiAgICAgICAgY29va2llOiB0eXBlb2YgZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnID8gX2Nvb2tpZSA6IGNvb2tpZV9ub29wLFxuICAgICAgICBkZXRlY3RMYW5ndWFnZTogZGV0ZWN0TGFuZ3VhZ2UsXG4gICAgICAgIGVzY2FwZTogX2VzY2FwZSxcbiAgICAgICAgbG9nOiBmdW5jdGlvbihzdHIpIHtcbiAgICAgICAgICAgIGlmIChvLmRlYnVnICYmIHR5cGVvZiBjb25zb2xlICE9PSBcInVuZGVmaW5lZFwiKSBjb25zb2xlLmxvZyhzdHIpO1xuICAgICAgICB9LFxuICAgICAgICB0b0xhbmd1YWdlczogZnVuY3Rpb24obG5nKSB7XG4gICAgICAgICAgICB2YXIgbGFuZ3VhZ2VzID0gW107XG4gICAgICAgICAgICBpZiAodHlwZW9mIGxuZyA9PT0gJ3N0cmluZycgJiYgbG5nLmluZGV4T2YoJy0nKSA+IC0xKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcnRzID0gbG5nLnNwbGl0KCctJyk7XG4gICAgXG4gICAgICAgICAgICAgICAgbG5nID0gby5sb3dlckNhc2VMbmcgP1xuICAgICAgICAgICAgICAgICAgICBwYXJ0c1swXS50b0xvd2VyQ2FzZSgpICsgICctJyArIHBhcnRzWzFdLnRvTG93ZXJDYXNlKCkgOlxuICAgICAgICAgICAgICAgICAgICBwYXJ0c1swXS50b0xvd2VyQ2FzZSgpICsgICctJyArIHBhcnRzWzFdLnRvVXBwZXJDYXNlKCk7XG4gICAgXG4gICAgICAgICAgICAgICAgaWYgKG8ubG9hZCAhPT0gJ3Vuc3BlY2lmaWMnKSBsYW5ndWFnZXMucHVzaChsbmcpO1xuICAgICAgICAgICAgICAgIGlmIChvLmxvYWQgIT09ICdjdXJyZW50JykgbGFuZ3VhZ2VzLnB1c2gocGFydHNbMF0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBsYW5ndWFnZXMucHVzaChsbmcpO1xuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvLmZhbGxiYWNrTG5nLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGxhbmd1YWdlcy5pbmRleE9mKG8uZmFsbGJhY2tMbmdbaV0pID09PSAtMSAmJiBvLmZhbGxiYWNrTG5nW2ldKSBsYW5ndWFnZXMucHVzaChvLmZhbGxiYWNrTG5nW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIHJldHVybiBsYW5ndWFnZXM7XG4gICAgICAgIH0sXG4gICAgICAgIHJlZ2V4RXNjYXBlOiBmdW5jdGlvbihzdHIpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvW1xcLVxcW1xcXVxcL1xce1xcfVxcKFxcKVxcKlxcK1xcP1xcLlxcXFxcXF5cXCRcXHxdL2csIFwiXFxcXCQmXCIpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBmdW5jdGlvbiBpbml0KG9wdGlvbnMsIGNiKSB7XG4gICAgICAgIFxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNiID0gb3B0aW9ucztcbiAgICAgICAgICAgIG9wdGlvbnMgPSB7fTtcbiAgICAgICAgfVxuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICAgICAgXG4gICAgICAgIC8vIG92ZXJyaWRlIGRlZmF1bHRzIHdpdGggcGFzc2VkIGluIG9wdGlvbnNcbiAgICAgICAgZi5leHRlbmQobywgb3B0aW9ucyk7XG4gICAgICAgIGRlbGV0ZSBvLmZpeExuZzsgLyogcGFzc2VkIGluIGVhY2ggdGltZSAqL1xuICAgIFxuICAgICAgICAvLyBjcmVhdGUgbmFtZXNwYWNlIG9iamVjdCBpZiBuYW1lc3BhY2UgaXMgcGFzc2VkIGluIGFzIHN0cmluZ1xuICAgICAgICBpZiAodHlwZW9mIG8ubnMgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIG8ubnMgPSB7IG5hbWVzcGFjZXM6IFtvLm5zXSwgZGVmYXVsdE5zOiBvLm5zfTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAvLyBmYWxsYmFjayBuYW1lc3BhY2VzXG4gICAgICAgIGlmICh0eXBlb2Ygby5mYWxsYmFja05TID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBvLmZhbGxiYWNrTlMgPSBbby5mYWxsYmFja05TXTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAvLyBmYWxsYmFjayBsYW5ndWFnZXNcbiAgICAgICAgaWYgKHR5cGVvZiBvLmZhbGxiYWNrTG5nID09ICdzdHJpbmcnIHx8IHR5cGVvZiBvLmZhbGxiYWNrTG5nID09ICdib29sZWFuJykge1xuICAgICAgICAgICAgby5mYWxsYmFja0xuZyA9IFtvLmZhbGxiYWNrTG5nXTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAvLyBlc2NhcGUgcHJlZml4L3N1ZmZpeFxuICAgICAgICBvLmludGVycG9sYXRpb25QcmVmaXhFc2NhcGVkID0gZi5yZWdleEVzY2FwZShvLmludGVycG9sYXRpb25QcmVmaXgpO1xuICAgICAgICBvLmludGVycG9sYXRpb25TdWZmaXhFc2NhcGVkID0gZi5yZWdleEVzY2FwZShvLmludGVycG9sYXRpb25TdWZmaXgpO1xuICAgIFxuICAgICAgICBpZiAoIW8ubG5nKSBvLmxuZyA9IGYuZGV0ZWN0TGFuZ3VhZ2UoKTsgXG4gICAgICAgIGlmIChvLmxuZykge1xuICAgICAgICAgICAgLy8gc2V0IGNvb2tpZSB3aXRoIGxuZyBzZXQgKGFzIGRldGVjdExhbmd1YWdlIHdpbGwgc2V0IGNvb2tpZSBvbiBuZWVkKVxuICAgICAgICAgICAgaWYgKG8udXNlQ29va2llKSBmLmNvb2tpZS5jcmVhdGUoby5jb29raWVOYW1lLCBvLmxuZywgby5jb29raWVFeHBpcmF0aW9uVGltZSwgby5jb29raWVEb21haW4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgby5sbmcgPSAgby5mYWxsYmFja0xuZ1swXTtcbiAgICAgICAgICAgIGlmIChvLnVzZUNvb2tpZSkgZi5jb29raWUucmVtb3ZlKG8uY29va2llTmFtZSk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgbGFuZ3VhZ2VzID0gZi50b0xhbmd1YWdlcyhvLmxuZyk7XG4gICAgICAgIGN1cnJlbnRMbmcgPSBsYW5ndWFnZXNbMF07XG4gICAgICAgIGYubG9nKCdjdXJyZW50TG5nIHNldCB0bzogJyArIGN1cnJlbnRMbmcpO1xuICAgIFxuICAgICAgICB2YXIgbG5nVHJhbnNsYXRlID0gdHJhbnNsYXRlO1xuICAgICAgICBpZiAob3B0aW9ucy5maXhMbmcpIHtcbiAgICAgICAgICAgIGxuZ1RyYW5zbGF0ZSA9IGZ1bmN0aW9uKGtleSwgb3B0aW9ucykge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICAgICAgICAgIG9wdGlvbnMubG5nID0gb3B0aW9ucy5sbmcgfHwgbG5nVHJhbnNsYXRlLmxuZztcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJhbnNsYXRlKGtleSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgbG5nVHJhbnNsYXRlLmxuZyA9IGN1cnJlbnRMbmc7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgcGx1cmFsRXh0ZW5zaW9ucy5zZXRDdXJyZW50TG5nKGN1cnJlbnRMbmcpO1xuICAgIFxuICAgICAgICAvLyBhZGQgSlF1ZXJ5IGV4dGVuc2lvbnNcbiAgICAgICAgaWYgKCQgJiYgby5zZXRKcXVlcnlFeHQpIGFkZEpxdWVyeUZ1bmN0KCk7XG4gICAgXG4gICAgICAgIC8vIGpRdWVyeSBkZWZlcnJlZFxuICAgICAgICB2YXIgZGVmZXJyZWQ7XG4gICAgICAgIGlmICgkICYmICQuRGVmZXJyZWQpIHtcbiAgICAgICAgICAgIGRlZmVycmVkID0gJC5EZWZlcnJlZCgpO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIC8vIHJldHVybiBpbW1pZGlhdGx5IGlmIHJlcyBhcmUgcGFzc2VkIGluXG4gICAgICAgIGlmIChvLnJlc1N0b3JlKSB7XG4gICAgICAgICAgICByZXNTdG9yZSA9IG8ucmVzU3RvcmU7XG4gICAgICAgICAgICBpbml0aWFsaXplZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAoY2IpIGNiKGxuZ1RyYW5zbGF0ZSk7XG4gICAgICAgICAgICBpZiAoZGVmZXJyZWQpIGRlZmVycmVkLnJlc29sdmUobG5nVHJhbnNsYXRlKTtcbiAgICAgICAgICAgIGlmIChkZWZlcnJlZCkgcmV0dXJuIGRlZmVycmVkLnByb21pc2UoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAvLyBsYW5ndWFnZXMgdG8gbG9hZFxuICAgICAgICB2YXIgbG5nc1RvTG9hZCA9IGYudG9MYW5ndWFnZXMoby5sbmcpO1xuICAgICAgICBpZiAodHlwZW9mIG8ucHJlbG9hZCA9PT0gJ3N0cmluZycpIG8ucHJlbG9hZCA9IFtvLnByZWxvYWRdO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IG8ucHJlbG9hZC5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwcmVzID0gZi50b0xhbmd1YWdlcyhvLnByZWxvYWRbaV0pO1xuICAgICAgICAgICAgZm9yICh2YXIgeSA9IDAsIGxlbiA9IHByZXMubGVuZ3RoOyB5IDwgbGVuOyB5KyspIHtcbiAgICAgICAgICAgICAgICBpZiAobG5nc1RvTG9hZC5pbmRleE9mKHByZXNbeV0pIDwgMCkge1xuICAgICAgICAgICAgICAgICAgICBsbmdzVG9Mb2FkLnB1c2gocHJlc1t5XSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIC8vIGVsc2UgbG9hZCB0aGVtXG4gICAgICAgIFRBUGkxOG5leHQuc3luYy5sb2FkKGxuZ3NUb0xvYWQsIG8sIGZ1bmN0aW9uKGVyciwgc3RvcmUpIHtcbiAgICAgICAgICAgIHJlc1N0b3JlID0gc3RvcmU7XG4gICAgICAgICAgICBpbml0aWFsaXplZCA9IHRydWU7XG4gICAgXG4gICAgICAgICAgICBpZiAoY2IpIGNiKGxuZ1RyYW5zbGF0ZSk7XG4gICAgICAgICAgICBpZiAoZGVmZXJyZWQpIGRlZmVycmVkLnJlc29sdmUobG5nVHJhbnNsYXRlKTtcbiAgICAgICAgfSk7XG4gICAgXG4gICAgICAgIGlmIChkZWZlcnJlZCkgcmV0dXJuIGRlZmVycmVkLnByb21pc2UoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gcHJlbG9hZChsbmdzLCBjYikge1xuICAgICAgICBpZiAodHlwZW9mIGxuZ3MgPT09ICdzdHJpbmcnKSBsbmdzID0gW2xuZ3NdO1xuICAgICAgICBmb3IgKHZhciBpID0gMCwgbCA9IGxuZ3MubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoby5wcmVsb2FkLmluZGV4T2YobG5nc1tpXSkgPCAwKSB7XG4gICAgICAgICAgICAgICAgby5wcmVsb2FkLnB1c2gobG5nc1tpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluaXQoY2IpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBhZGRSZXNvdXJjZUJ1bmRsZShsbmcsIG5zLCByZXNvdXJjZXMpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBucyAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHJlc291cmNlcyA9IG5zO1xuICAgICAgICAgICAgbnMgPSBvLm5zLmRlZmF1bHROcztcbiAgICAgICAgfSBlbHNlIGlmIChvLm5zLm5hbWVzcGFjZXMuaW5kZXhPZihucykgPCAwKSB7XG4gICAgICAgICAgICBvLm5zLm5hbWVzcGFjZXMucHVzaChucyk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgcmVzU3RvcmVbbG5nXSA9IHJlc1N0b3JlW2xuZ10gfHwge307XG4gICAgICAgIHJlc1N0b3JlW2xuZ11bbnNdID0gcmVzU3RvcmVbbG5nXVtuc10gfHwge307XG4gICAgXG4gICAgICAgIGYuZXh0ZW5kKHJlc1N0b3JlW2xuZ11bbnNdLCByZXNvdXJjZXMpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiByZW1vdmVSZXNvdXJjZUJ1bmRsZShsbmcsIG5zKSB7XG4gICAgICAgIGlmICh0eXBlb2YgbnMgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICBucyA9IG8ubnMuZGVmYXVsdE5zO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIHJlc1N0b3JlW2xuZ10gPSByZXNTdG9yZVtsbmddIHx8IHt9O1xuICAgICAgICByZXNTdG9yZVtsbmddW25zXSA9IHt9O1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBzZXREZWZhdWx0TmFtZXNwYWNlKG5zKSB7XG4gICAgICAgIG8ubnMuZGVmYXVsdE5zID0gbnM7XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIGxvYWROYW1lc3BhY2UobmFtZXNwYWNlLCBjYikge1xuICAgICAgICBsb2FkTmFtZXNwYWNlcyhbbmFtZXNwYWNlXSwgY2IpO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBsb2FkTmFtZXNwYWNlcyhuYW1lc3BhY2VzLCBjYikge1xuICAgICAgICB2YXIgb3B0cyA9IHtcbiAgICAgICAgICAgIGR5bmFtaWNMb2FkOiBvLmR5bmFtaWNMb2FkLFxuICAgICAgICAgICAgcmVzR2V0UGF0aDogby5yZXNHZXRQYXRoLFxuICAgICAgICAgICAgZ2V0QXN5bmM6IG8uZ2V0QXN5bmMsXG4gICAgICAgICAgICBjdXN0b21Mb2FkOiBvLmN1c3RvbUxvYWQsXG4gICAgICAgICAgICBuczogeyBuYW1lc3BhY2VzOiBuYW1lc3BhY2VzLCBkZWZhdWx0TnM6ICcnfSAvKiBuZXcgbmFtZXNwYWNlcyB0byBsb2FkICovXG4gICAgICAgIH07XG4gICAgXG4gICAgICAgIC8vIGxhbmd1YWdlcyB0byBsb2FkXG4gICAgICAgIHZhciBsbmdzVG9Mb2FkID0gZi50b0xhbmd1YWdlcyhvLmxuZyk7XG4gICAgICAgIGlmICh0eXBlb2Ygby5wcmVsb2FkID09PSAnc3RyaW5nJykgby5wcmVsb2FkID0gW28ucHJlbG9hZF07XG4gICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gby5wcmVsb2FkLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgdmFyIHByZXMgPSBmLnRvTGFuZ3VhZ2VzKG8ucHJlbG9hZFtpXSk7XG4gICAgICAgICAgICBmb3IgKHZhciB5ID0gMCwgbGVuID0gcHJlcy5sZW5ndGg7IHkgPCBsZW47IHkrKykge1xuICAgICAgICAgICAgICAgIGlmIChsbmdzVG9Mb2FkLmluZGV4T2YocHJlc1t5XSkgPCAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxuZ3NUb0xvYWQucHVzaChwcmVzW3ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLy8gY2hlY2sgaWYgd2UgaGF2ZSB0byBsb2FkXG4gICAgICAgIHZhciBsbmdOZWVkTG9hZCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBhID0gMCwgbGVuQSA9IGxuZ3NUb0xvYWQubGVuZ3RoOyBhIDwgbGVuQTsgYSsrKSB7XG4gICAgICAgICAgICB2YXIgbmVlZExvYWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHZhciByZXNTZXQgPSByZXNTdG9yZVtsbmdzVG9Mb2FkW2FdXTtcbiAgICAgICAgICAgIGlmIChyZXNTZXQpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBiID0gMCwgbGVuQiA9IG5hbWVzcGFjZXMubGVuZ3RoOyBiIDwgbGVuQjsgYisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzU2V0W25hbWVzcGFjZXNbYl1dKSBuZWVkTG9hZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBuZWVkTG9hZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBpZiAobmVlZExvYWQpIGxuZ05lZWRMb2FkLnB1c2gobG5nc1RvTG9hZFthXSk7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaWYgKGxuZ05lZWRMb2FkLmxlbmd0aCkge1xuICAgICAgICAgICAgVEFQaTE4bmV4dC5zeW5jLl9mZXRjaChsbmdOZWVkTG9hZCwgb3B0cywgZnVuY3Rpb24oZXJyLCBzdG9yZSkge1xuICAgICAgICAgICAgICAgIHZhciB0b2RvID0gbmFtZXNwYWNlcy5sZW5ndGggKiBsbmdOZWVkTG9hZC5sZW5ndGg7XG4gICAgXG4gICAgICAgICAgICAgICAgLy8gbG9hZCBlYWNoIGZpbGUgaW5kaXZpZHVhbFxuICAgICAgICAgICAgICAgIGYuZWFjaChuYW1lc3BhY2VzLCBmdW5jdGlvbihuc0luZGV4LCBuc1ZhbHVlKSB7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIC8vIGFwcGVuZCBuYW1lc3BhY2UgdG8gbmFtZXNwYWNlIGFycmF5XG4gICAgICAgICAgICAgICAgICAgIGlmIChvLm5zLm5hbWVzcGFjZXMuaW5kZXhPZihuc1ZhbHVlKSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG8ubnMubmFtZXNwYWNlcy5wdXNoKG5zVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGYuZWFjaChsbmdOZWVkTG9hZCwgZnVuY3Rpb24obG5nSW5kZXgsIGxuZ1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNTdG9yZVtsbmdWYWx1ZV0gPSByZXNTdG9yZVtsbmdWYWx1ZV0gfHwge307XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNTdG9yZVtsbmdWYWx1ZV1bbnNWYWx1ZV0gPSBzdG9yZVtsbmdWYWx1ZV1bbnNWYWx1ZV07XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2RvLS07IC8vIHdhaXQgZm9yIGFsbCBkb25lIGJlZm9yIGNhbGxiYWNrXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9kbyA9PT0gMCAmJiBjYikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvLnVzZUxvY2FsU3RvcmFnZSkgVEFQaTE4bmV4dC5zeW5jLl9zdG9yZUxvY2FsKHJlc1N0b3JlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGNiKSBjYigpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIGZ1bmN0aW9uIHNldExuZyhsbmcsIG9wdGlvbnMsIGNiKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2IgPSBvcHRpb25zO1xuICAgICAgICAgICAgb3B0aW9ucyA9IHt9O1xuICAgICAgICB9IGVsc2UgaWYgKCFvcHRpb25zKSB7XG4gICAgICAgICAgICBvcHRpb25zID0ge307XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgb3B0aW9ucy5sbmcgPSBsbmc7XG4gICAgICAgIHJldHVybiBpbml0KG9wdGlvbnMsIGNiKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gbG5nKCkge1xuICAgICAgICByZXR1cm4gY3VycmVudExuZztcbiAgICB9XG4gICAgZnVuY3Rpb24gYWRkSnF1ZXJ5RnVuY3QoKSB7XG4gICAgICAgIC8vICQudCBzaG9ydGN1dFxuICAgICAgICAkLnQgPSAkLnQgfHwgdHJhbnNsYXRlO1xuICAgIFxuICAgICAgICBmdW5jdGlvbiBwYXJzZShlbGUsIGtleSwgb3B0aW9ucykge1xuICAgICAgICAgICAgaWYgKGtleS5sZW5ndGggPT09IDApIHJldHVybjtcbiAgICBcbiAgICAgICAgICAgIHZhciBhdHRyID0gJ3RleHQnO1xuICAgIFxuICAgICAgICAgICAgaWYgKGtleS5pbmRleE9mKCdbJykgPT09IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFydHMgPSBrZXkuc3BsaXQoJ10nKTtcbiAgICAgICAgICAgICAgICBrZXkgPSBwYXJ0c1sxXTtcbiAgICAgICAgICAgICAgICBhdHRyID0gcGFydHNbMF0uc3Vic3RyKDEsIHBhcnRzWzBdLmxlbmd0aC0xKTtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIGlmIChrZXkuaW5kZXhPZignOycpID09PSBrZXkubGVuZ3RoLTEpIHtcbiAgICAgICAgICAgICAgICBrZXkgPSBrZXkuc3Vic3RyKDAsIGtleS5sZW5ndGgtMik7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICB2YXIgb3B0aW9uc1RvVXNlO1xuICAgICAgICAgICAgaWYgKGF0dHIgPT09ICdodG1sJykge1xuICAgICAgICAgICAgICAgIG9wdGlvbnNUb1VzZSA9IG8uZGVmYXVsdFZhbHVlRnJvbUNvbnRlbnQgPyAkLmV4dGVuZCh7IGRlZmF1bHRWYWx1ZTogZWxlLmh0bWwoKSB9LCBvcHRpb25zKSA6IG9wdGlvbnM7XG4gICAgICAgICAgICAgICAgZWxlLmh0bWwoJC50KGtleSwgb3B0aW9uc1RvVXNlKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGF0dHIgPT09ICd0ZXh0Jykge1xuICAgICAgICAgICAgICAgIG9wdGlvbnNUb1VzZSA9IG8uZGVmYXVsdFZhbHVlRnJvbUNvbnRlbnQgPyAkLmV4dGVuZCh7IGRlZmF1bHRWYWx1ZTogZWxlLnRleHQoKSB9LCBvcHRpb25zKSA6IG9wdGlvbnM7XG4gICAgICAgICAgICAgICAgZWxlLnRleHQoJC50KGtleSwgb3B0aW9uc1RvVXNlKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGF0dHIgPT09ICdwcmVwZW5kJykge1xuICAgICAgICAgICAgICAgIG9wdGlvbnNUb1VzZSA9IG8uZGVmYXVsdFZhbHVlRnJvbUNvbnRlbnQgPyAkLmV4dGVuZCh7IGRlZmF1bHRWYWx1ZTogZWxlLmh0bWwoKSB9LCBvcHRpb25zKSA6IG9wdGlvbnM7XG4gICAgICAgICAgICAgICAgZWxlLnByZXBlbmQoJC50KGtleSwgb3B0aW9uc1RvVXNlKSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGF0dHIgPT09ICdhcHBlbmQnKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9uc1RvVXNlID0gby5kZWZhdWx0VmFsdWVGcm9tQ29udGVudCA/ICQuZXh0ZW5kKHsgZGVmYXVsdFZhbHVlOiBlbGUuaHRtbCgpIH0sIG9wdGlvbnMpIDogb3B0aW9ucztcbiAgICAgICAgICAgICAgICBlbGUuYXBwZW5kKCQudChrZXksIG9wdGlvbnNUb1VzZSkpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChhdHRyLmluZGV4T2YoXCJkYXRhLVwiKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHZhciBkYXRhQXR0ciA9IGF0dHIuc3Vic3RyKChcImRhdGEtXCIpLmxlbmd0aCk7XG4gICAgICAgICAgICAgICAgb3B0aW9uc1RvVXNlID0gby5kZWZhdWx0VmFsdWVGcm9tQ29udGVudCA/ICQuZXh0ZW5kKHsgZGVmYXVsdFZhbHVlOiBlbGUuZGF0YShkYXRhQXR0cikgfSwgb3B0aW9ucykgOiBvcHRpb25zO1xuICAgICAgICAgICAgICAgIHZhciB0cmFuc2xhdGVkID0gJC50KGtleSwgb3B0aW9uc1RvVXNlKTtcbiAgICAgICAgICAgICAgICAvL3dlIGNoYW5nZSBpbnRvIHRoZSBkYXRhIGNhY2hlXG4gICAgICAgICAgICAgICAgZWxlLmRhdGEoZGF0YUF0dHIsIHRyYW5zbGF0ZWQpO1xuICAgICAgICAgICAgICAgIC8vd2UgY2hhbmdlIGludG8gdGhlIGRvbVxuICAgICAgICAgICAgICAgIGVsZS5hdHRyKGF0dHIsIHRyYW5zbGF0ZWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvcHRpb25zVG9Vc2UgPSBvLmRlZmF1bHRWYWx1ZUZyb21Db250ZW50ID8gJC5leHRlbmQoeyBkZWZhdWx0VmFsdWU6IGVsZS5hdHRyKGF0dHIpIH0sIG9wdGlvbnMpIDogb3B0aW9ucztcbiAgICAgICAgICAgICAgICBlbGUuYXR0cihhdHRyLCAkLnQoa2V5LCBvcHRpb25zVG9Vc2UpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICBmdW5jdGlvbiBsb2NhbGl6ZShlbGUsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHZhciBrZXkgPSBlbGUuYXR0cihvLnNlbGVjdG9yQXR0cik7XG4gICAgICAgICAgICBpZiAoIWtleSAmJiB0eXBlb2Yga2V5ICE9PSAndW5kZWZpbmVkJyAmJiBrZXkgIT09IGZhbHNlKSBrZXkgPSBlbGUudGV4dCgpIHx8IGVsZS52YWwoKTtcbiAgICAgICAgICAgIGlmICgha2V5KSByZXR1cm47XG4gICAgXG4gICAgICAgICAgICB2YXIgdGFyZ2V0ID0gZWxlXG4gICAgICAgICAgICAgICwgdGFyZ2V0U2VsZWN0b3IgPSBlbGUuZGF0YShcImkxOG4tdGFyZ2V0XCIpO1xuICAgICAgICAgICAgaWYgKHRhcmdldFNlbGVjdG9yKSB7XG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gZWxlLmZpbmQodGFyZ2V0U2VsZWN0b3IpIHx8IGVsZTtcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIGlmICghb3B0aW9ucyAmJiBvLnVzZURhdGFBdHRyT3B0aW9ucyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSBlbGUuZGF0YShcImkxOG4tb3B0aW9uc1wiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIFxuICAgICAgICAgICAgaWYgKGtleS5pbmRleE9mKCc7JykgPj0gMCkge1xuICAgICAgICAgICAgICAgIHZhciBrZXlzID0ga2V5LnNwbGl0KCc7Jyk7XG4gICAgXG4gICAgICAgICAgICAgICAgJC5lYWNoKGtleXMsIGZ1bmN0aW9uKG0sIGspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGsgIT09ICcnKSBwYXJzZSh0YXJnZXQsIGssIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgIFxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJzZSh0YXJnZXQsIGtleSwgb3B0aW9ucyk7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICBpZiAoby51c2VEYXRhQXR0ck9wdGlvbnMgPT09IHRydWUpIGVsZS5kYXRhKFwiaTE4bi1vcHRpb25zXCIsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIC8vIGZuXG4gICAgICAgICQuZm4uVEFQaTE4bmV4dCA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIC8vIGxvY2FsaXplIGVsZW1lbnQgaXRzZWxmXG4gICAgICAgICAgICAgICAgbG9jYWxpemUoJCh0aGlzKSwgb3B0aW9ucyk7XG4gICAgXG4gICAgICAgICAgICAgICAgLy8gbG9jYWxpemUgY2hpbGRzXG4gICAgICAgICAgICAgICAgdmFyIGVsZW1lbnRzID0gICQodGhpcykuZmluZCgnWycgKyBvLnNlbGVjdG9yQXR0ciArICddJyk7XG4gICAgICAgICAgICAgICAgZWxlbWVudHMuZWFjaChmdW5jdGlvbigpIHsgXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsaXplKCQodGhpcyksIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGZ1bmN0aW9uIGFwcGx5UmVwbGFjZW1lbnQoc3RyLCByZXBsYWNlbWVudEhhc2gsIG5lc3RlZEtleSwgb3B0aW9ucykge1xuICAgICAgICBpZiAoIXN0cikgcmV0dXJuIHN0cjtcbiAgICBcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwgcmVwbGFjZW1lbnRIYXNoOyAvLyBmaXJzdCBjYWxsIHVzZXMgcmVwbGFjZW1lbnQgaGFzaCBjb21iaW5lZCB3aXRoIG9wdGlvbnNcbiAgICAgICAgaWYgKHN0ci5pbmRleE9mKG9wdGlvbnMuaW50ZXJwb2xhdGlvblByZWZpeCB8fCBvLmludGVycG9sYXRpb25QcmVmaXgpIDwgMCkgcmV0dXJuIHN0cjtcbiAgICBcbiAgICAgICAgdmFyIHByZWZpeCA9IG9wdGlvbnMuaW50ZXJwb2xhdGlvblByZWZpeCA/IGYucmVnZXhFc2NhcGUob3B0aW9ucy5pbnRlcnBvbGF0aW9uUHJlZml4KSA6IG8uaW50ZXJwb2xhdGlvblByZWZpeEVzY2FwZWRcbiAgICAgICAgICAsIHN1ZmZpeCA9IG9wdGlvbnMuaW50ZXJwb2xhdGlvblN1ZmZpeCA/IGYucmVnZXhFc2NhcGUob3B0aW9ucy5pbnRlcnBvbGF0aW9uU3VmZml4KSA6IG8uaW50ZXJwb2xhdGlvblN1ZmZpeEVzY2FwZWRcbiAgICAgICAgICAsIHVuRXNjYXBpbmdTdWZmaXggPSAnSFRNTCcrc3VmZml4O1xuICAgIFxuICAgICAgICBmLmVhY2gocmVwbGFjZW1lbnRIYXNoLCBmdW5jdGlvbihrZXksIHZhbHVlKSB7XG4gICAgICAgICAgICB2YXIgbmV4dEtleSA9IG5lc3RlZEtleSA/IG5lc3RlZEtleSArIG8ua2V5c2VwYXJhdG9yICsga2V5IDoga2V5O1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBzdHIgPSBhcHBseVJlcGxhY2VtZW50KHN0ciwgdmFsdWUsIG5leHRLZXksIG9wdGlvbnMpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5lc2NhcGVJbnRlcnBvbGF0aW9uIHx8IG8uZXNjYXBlSW50ZXJwb2xhdGlvbikge1xuICAgICAgICAgICAgICAgICAgICBzdHIgPSBzdHIucmVwbGFjZShuZXcgUmVnRXhwKFtwcmVmaXgsIG5leHRLZXksIHVuRXNjYXBpbmdTdWZmaXhdLmpvaW4oJycpLCAnZycpLCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgICAgIHN0ciA9IHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoW3ByZWZpeCwgbmV4dEtleSwgc3VmZml4XS5qb2luKCcnKSwgJ2cnKSwgZi5lc2NhcGUodmFsdWUpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdHIgPSBzdHIucmVwbGFjZShuZXcgUmVnRXhwKFtwcmVmaXgsIG5leHRLZXksIHN1ZmZpeF0uam9pbignJyksICdnJyksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gc3RyID0gb3B0aW9ucy5lc2NhcGVJbnRlcnBvbGF0aW9uO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9XG4gICAgXG4gICAgLy8gYXBwZW5kIGl0IHRvIGZ1bmN0aW9uc1xuICAgIGYuYXBwbHlSZXBsYWNlbWVudCA9IGFwcGx5UmVwbGFjZW1lbnQ7XG4gICAgXG4gICAgZnVuY3Rpb24gYXBwbHlSZXVzZSh0cmFuc2xhdGVkLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBjb21tYSA9ICcsJztcbiAgICAgICAgdmFyIG9wdGlvbnNfb3BlbiA9ICd7JztcbiAgICAgICAgdmFyIG9wdGlvbnNfY2xvc2UgPSAnfSc7XG4gICAgXG4gICAgICAgIHZhciBvcHRzID0gZi5leHRlbmQoe30sIG9wdGlvbnMpO1xuICAgICAgICBkZWxldGUgb3B0cy5wb3N0UHJvY2VzcztcbiAgICBcbiAgICAgICAgd2hpbGUgKHRyYW5zbGF0ZWQuaW5kZXhPZihvLnJldXNlUHJlZml4KSAhPSAtMSkge1xuICAgICAgICAgICAgcmVwbGFjZW1lbnRDb3VudGVyKys7XG4gICAgICAgICAgICBpZiAocmVwbGFjZW1lbnRDb3VudGVyID4gby5tYXhSZWN1cnNpb24pIHsgYnJlYWs7IH0gLy8gc2FmZXR5IG5ldCBmb3IgdG9vIG11Y2ggcmVjdXJzaW9uXG4gICAgICAgICAgICB2YXIgaW5kZXhfb2Zfb3BlbmluZyA9IHRyYW5zbGF0ZWQubGFzdEluZGV4T2Yoby5yZXVzZVByZWZpeCk7XG4gICAgICAgICAgICB2YXIgaW5kZXhfb2ZfZW5kX29mX2Nsb3NpbmcgPSB0cmFuc2xhdGVkLmluZGV4T2Yoby5yZXVzZVN1ZmZpeCwgaW5kZXhfb2Zfb3BlbmluZykgKyBvLnJldXNlU3VmZml4Lmxlbmd0aDtcbiAgICAgICAgICAgIHZhciB0b2tlbiA9IHRyYW5zbGF0ZWQuc3Vic3RyaW5nKGluZGV4X29mX29wZW5pbmcsIGluZGV4X29mX2VuZF9vZl9jbG9zaW5nKTtcbiAgICAgICAgICAgIHZhciB0b2tlbl93aXRob3V0X3N5bWJvbHMgPSB0b2tlbi5yZXBsYWNlKG8ucmV1c2VQcmVmaXgsICcnKS5yZXBsYWNlKG8ucmV1c2VTdWZmaXgsICcnKTtcbiAgICBcbiAgICBcbiAgICAgICAgICAgIGlmICh0b2tlbl93aXRob3V0X3N5bWJvbHMuaW5kZXhPZihjb21tYSkgIT0gLTEpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXhfb2ZfdG9rZW5fZW5kX29mX2Nsb3NpbmcgPSB0b2tlbl93aXRob3V0X3N5bWJvbHMuaW5kZXhPZihjb21tYSk7XG4gICAgICAgICAgICAgICAgaWYgKHRva2VuX3dpdGhvdXRfc3ltYm9scy5pbmRleE9mKG9wdGlvbnNfb3BlbiwgaW5kZXhfb2ZfdG9rZW5fZW5kX29mX2Nsb3NpbmcpICE9IC0xICYmIHRva2VuX3dpdGhvdXRfc3ltYm9scy5pbmRleE9mKG9wdGlvbnNfY2xvc2UsIGluZGV4X29mX3Rva2VuX2VuZF9vZl9jbG9zaW5nKSAhPSAtMSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaW5kZXhfb2Zfb3B0c19vcGVuaW5nID0gdG9rZW5fd2l0aG91dF9zeW1ib2xzLmluZGV4T2Yob3B0aW9uc19vcGVuLCBpbmRleF9vZl90b2tlbl9lbmRfb2ZfY2xvc2luZyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleF9vZl9vcHRzX2VuZF9vZl9jbG9zaW5nID0gdG9rZW5fd2l0aG91dF9zeW1ib2xzLmluZGV4T2Yob3B0aW9uc19jbG9zZSwgaW5kZXhfb2Zfb3B0c19vcGVuaW5nKSArIG9wdGlvbnNfY2xvc2UubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb3B0cyA9IGYuZXh0ZW5kKG9wdHMsIEpTT04ucGFyc2UodG9rZW5fd2l0aG91dF9zeW1ib2xzLnN1YnN0cmluZyhpbmRleF9vZl9vcHRzX29wZW5pbmcsIGluZGV4X29mX29wdHNfZW5kX29mX2Nsb3NpbmcpKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0b2tlbl93aXRob3V0X3N5bWJvbHMgPSB0b2tlbl93aXRob3V0X3N5bWJvbHMuc3Vic3RyaW5nKDAsIGluZGV4X29mX3Rva2VuX2VuZF9vZl9jbG9zaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgdmFyIHRyYW5zbGF0ZWRfdG9rZW4gPSBfdHJhbnNsYXRlKHRva2VuX3dpdGhvdXRfc3ltYm9scywgb3B0cyk7XG4gICAgICAgICAgICB0cmFuc2xhdGVkID0gdHJhbnNsYXRlZC5yZXBsYWNlKHRva2VuLCB0cmFuc2xhdGVkX3Rva2VuKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJhbnNsYXRlZDtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gaGFzQ29udGV4dChvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiAob3B0aW9ucy5jb250ZXh0ICYmICh0eXBlb2Ygb3B0aW9ucy5jb250ZXh0ID09ICdzdHJpbmcnIHx8IHR5cGVvZiBvcHRpb25zLmNvbnRleHQgPT0gJ251bWJlcicpKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gbmVlZHNQbHVyYWwob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gKG9wdGlvbnMuY291bnQgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygb3B0aW9ucy5jb3VudCAhPSAnc3RyaW5nJyAmJiBvcHRpb25zLmNvdW50ICE9PSAxKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gZXhpc3RzKGtleSwgb3B0aW9ucykge1xuICAgICAgICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgICBcbiAgICAgICAgdmFyIG5vdEZvdW5kID0gX2dldERlZmF1bHRWYWx1ZShrZXksIG9wdGlvbnMpXG4gICAgICAgICAgICAsIGZvdW5kID0gX2ZpbmQoa2V5LCBvcHRpb25zKTtcbiAgICBcbiAgICAgICAgcmV0dXJuIGZvdW5kICE9PSB1bmRlZmluZWQgfHwgZm91bmQgPT09IG5vdEZvdW5kO1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiB0cmFuc2xhdGUoa2V5LCBvcHRpb25zKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICBvcHRpb25zID0ge307XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaWYgKCFpbml0aWFsaXplZCkge1xuICAgICAgICAgICAgZi5sb2coJ2kxOG5leHQgbm90IGZpbmlzaGVkIGluaXRpYWxpemF0aW9uLiB5b3UgbWlnaHQgaGF2ZSBjYWxsZWQgdCBmdW5jdGlvbiBiZWZvcmUgbG9hZGluZyByZXNvdXJjZXMgZmluaXNoZWQuJylcbiAgICAgICAgICAgIHJldHVybiBvcHRpb25zLmRlZmF1bHRWYWx1ZSB8fCAnJztcbiAgICAgICAgfTtcbiAgICAgICAgcmVwbGFjZW1lbnRDb3VudGVyID0gMDtcbiAgICAgICAgcmV0dXJuIF90cmFuc2xhdGUuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gX2dldERlZmF1bHRWYWx1ZShrZXksIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIChvcHRpb25zLmRlZmF1bHRWYWx1ZSAhPT0gdW5kZWZpbmVkKSA/IG9wdGlvbnMuZGVmYXVsdFZhbHVlIDoga2V5O1xuICAgIH1cbiAgICBcbiAgICBmdW5jdGlvbiBfaW5qZWN0U3ByaW50ZlByb2Nlc3NvcigpIHtcbiAgICBcbiAgICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgIFxuICAgICAgICAvLyBtaDogYnVpbGQgYXJyYXkgZnJvbSBzZWNvbmQgYXJndW1lbnQgb253YXJkc1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFsdWVzLnB1c2goYXJndW1lbnRzW2ldKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcG9zdFByb2Nlc3M6ICdzcHJpbnRmJyxcbiAgICAgICAgICAgIHNwcmludGY6ICAgICB2YWx1ZXNcbiAgICAgICAgfTtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gX3RyYW5zbGF0ZShwb3RlbnRpYWxLZXlzLCBvcHRpb25zKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBvcHRpb25zICE9PSBudWxsICYmIHR5cGVvZiBvcHRpb25zICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgaWYgKG8uc2hvcnRjdXRGdW5jdGlvbiA9PT0gJ3NwcmludGYnKSB7XG4gICAgICAgICAgICAgICAgLy8gbWg6IGdldHRleHQgbGlrZSBzcHJpbnRmIHN5bnRheCBmb3VuZCwgYXV0b21hdGljYWxseSBjcmVhdGUgc3ByaW50ZiBwcm9jZXNzb3JcbiAgICAgICAgICAgICAgICBvcHRpb25zID0gX2luamVjdFNwcmludGZQcm9jZXNzb3IuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoby5zaG9ydGN1dEZ1bmN0aW9uID09PSAnZGVmYXVsdFZhbHVlJykge1xuICAgICAgICAgICAgICAgIG9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZTogb3B0aW9uc1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGlmIChwb3RlbnRpYWxLZXlzID09PSB1bmRlZmluZWQgfHwgcG90ZW50aWFsS2V5cyA9PT0gbnVsbCkgcmV0dXJuICcnO1xuICAgIFxuICAgICAgICBpZiAodHlwZW9mIHBvdGVudGlhbEtleXMgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgIHBvdGVudGlhbEtleXMgPSBbcG90ZW50aWFsS2V5c107XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgdmFyIGtleSA9IHBvdGVudGlhbEtleXNbMF07XG4gICAgXG4gICAgICAgIGlmIChwb3RlbnRpYWxLZXlzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG90ZW50aWFsS2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGtleSA9IHBvdGVudGlhbEtleXNbaV07XG4gICAgICAgICAgICAgICAgaWYgKGV4aXN0cyhrZXksIG9wdGlvbnMpKSB7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICB2YXIgbm90Rm91bmQgPSBfZ2V0RGVmYXVsdFZhbHVlKGtleSwgb3B0aW9ucylcbiAgICAgICAgICAgICwgZm91bmQgPSBfZmluZChrZXksIG9wdGlvbnMpXG4gICAgICAgICAgICAsIGxuZ3MgPSBvcHRpb25zLmxuZyA/IGYudG9MYW5ndWFnZXMob3B0aW9ucy5sbmcpIDogbGFuZ3VhZ2VzXG4gICAgICAgICAgICAsIG5zID0gb3B0aW9ucy5ucyB8fCBvLm5zLmRlZmF1bHROc1xuICAgICAgICAgICAgLCBwYXJ0cztcbiAgICBcbiAgICAgICAgLy8gc3BsaXQgbnMgYW5kIGtleVxuICAgICAgICBpZiAoa2V5LmluZGV4T2Yoby5uc3NlcGFyYXRvcikgPiAtMSkge1xuICAgICAgICAgICAgcGFydHMgPSBrZXkuc3BsaXQoby5uc3NlcGFyYXRvcik7XG4gICAgICAgICAgICBucyA9IHBhcnRzWzBdO1xuICAgICAgICAgICAga2V5ID0gcGFydHNbMV07XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaWYgKGZvdW5kID09PSB1bmRlZmluZWQgJiYgby5zZW5kTWlzc2luZykge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMubG5nKSB7XG4gICAgICAgICAgICAgICAgc3luYy5wb3N0TWlzc2luZyhsbmdzWzBdLCBucywga2V5LCBub3RGb3VuZCwgbG5ncyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN5bmMucG9zdE1pc3Npbmcoby5sbmcsIG5zLCBrZXksIG5vdEZvdW5kLCBsbmdzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICB2YXIgcG9zdFByb2Nlc3NvciA9IG9wdGlvbnMucG9zdFByb2Nlc3MgfHwgby5wb3N0UHJvY2VzcztcbiAgICAgICAgaWYgKGZvdW5kICE9PSB1bmRlZmluZWQgJiYgcG9zdFByb2Nlc3Nvcikge1xuICAgICAgICAgICAgaWYgKHBvc3RQcm9jZXNzb3JzW3Bvc3RQcm9jZXNzb3JdKSB7XG4gICAgICAgICAgICAgICAgZm91bmQgPSBwb3N0UHJvY2Vzc29yc1twb3N0UHJvY2Vzc29yXShmb3VuZCwga2V5LCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICAvLyBwcm9jZXNzIG5vdEZvdW5kIGlmIGZ1bmN0aW9uIGV4aXN0c1xuICAgICAgICB2YXIgc3BsaXROb3RGb3VuZCA9IG5vdEZvdW5kO1xuICAgICAgICBpZiAobm90Rm91bmQuaW5kZXhPZihvLm5zc2VwYXJhdG9yKSA+IC0xKSB7XG4gICAgICAgICAgICBwYXJ0cyA9IG5vdEZvdW5kLnNwbGl0KG8ubnNzZXBhcmF0b3IpO1xuICAgICAgICAgICAgc3BsaXROb3RGb3VuZCA9IHBhcnRzWzFdO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzcGxpdE5vdEZvdW5kID09PSBrZXkgJiYgby5wYXJzZU1pc3NpbmdLZXkpIHtcbiAgICAgICAgICAgIG5vdEZvdW5kID0gby5wYXJzZU1pc3NpbmdLZXkobm90Rm91bmQpO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGlmIChmb3VuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBub3RGb3VuZCA9IGFwcGx5UmVwbGFjZW1lbnQobm90Rm91bmQsIG9wdGlvbnMpO1xuICAgICAgICAgICAgbm90Rm91bmQgPSBhcHBseVJldXNlKG5vdEZvdW5kLCBvcHRpb25zKTtcbiAgICBcbiAgICAgICAgICAgIGlmIChwb3N0UHJvY2Vzc29yICYmIHBvc3RQcm9jZXNzb3JzW3Bvc3RQcm9jZXNzb3JdKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbCA9IF9nZXREZWZhdWx0VmFsdWUoa2V5LCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICBmb3VuZCA9IHBvc3RQcm9jZXNzb3JzW3Bvc3RQcm9jZXNzb3JdKHZhbCwga2V5LCBvcHRpb25zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICByZXR1cm4gKGZvdW5kICE9PSB1bmRlZmluZWQpID8gZm91bmQgOiBub3RGb3VuZDtcbiAgICB9XG4gICAgXG4gICAgZnVuY3Rpb24gX2ZpbmQoa2V5LCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgIFxuICAgICAgICB2YXIgb3B0aW9uV2l0aG91dENvdW50LCB0cmFuc2xhdGVkXG4gICAgICAgICAgICAsIG5vdEZvdW5kID0gX2dldERlZmF1bHRWYWx1ZShrZXksIG9wdGlvbnMpXG4gICAgICAgICAgICAsIGxuZ3MgPSBsYW5ndWFnZXM7XG4gICAgXG4gICAgICAgIGlmICghcmVzU3RvcmUpIHsgcmV0dXJuIG5vdEZvdW5kOyB9IC8vIG5vIHJlc1N0b3JlIHRvIHRyYW5zbGF0ZSBmcm9tXG4gICAgXG4gICAgICAgIC8vIENJIG1vZGVcbiAgICAgICAgaWYgKGxuZ3NbMF0udG9Mb3dlckNhc2UoKSA9PT0gJ2NpbW9kZScpIHJldHVybiBub3RGb3VuZDtcbiAgICBcbiAgICAgICAgLy8gcGFzc2VkIGluIGxuZ1xuICAgICAgICBpZiAob3B0aW9ucy5sbmcpIHtcbiAgICAgICAgICAgIGxuZ3MgPSBmLnRvTGFuZ3VhZ2VzKG9wdGlvbnMubG5nKTtcbiAgICBcbiAgICAgICAgICAgIGlmICghcmVzU3RvcmVbbG5nc1swXV0pIHtcbiAgICAgICAgICAgICAgICB2YXIgb2xkQXN5bmMgPSBvLmdldEFzeW5jO1xuICAgICAgICAgICAgICAgIG8uZ2V0QXN5bmMgPSBmYWxzZTtcbiAgICBcbiAgICAgICAgICAgICAgICBUQVBpMThuZXh0LnN5bmMubG9hZChsbmdzLCBvLCBmdW5jdGlvbihlcnIsIHN0b3JlKSB7XG4gICAgICAgICAgICAgICAgICAgIGYuZXh0ZW5kKHJlc1N0b3JlLCBzdG9yZSk7XG4gICAgICAgICAgICAgICAgICAgIG8uZ2V0QXN5bmMgPSBvbGRBc3luYztcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICB2YXIgbnMgPSBvcHRpb25zLm5zIHx8IG8ubnMuZGVmYXVsdE5zO1xuICAgICAgICBpZiAoa2V5LmluZGV4T2Yoby5uc3NlcGFyYXRvcikgPiAtMSkge1xuICAgICAgICAgICAgdmFyIHBhcnRzID0ga2V5LnNwbGl0KG8ubnNzZXBhcmF0b3IpO1xuICAgICAgICAgICAgbnMgPSBwYXJ0c1swXTtcbiAgICAgICAgICAgIGtleSA9IHBhcnRzWzFdO1xuICAgICAgICB9XG4gICAgXG4gICAgICAgIGlmIChoYXNDb250ZXh0KG9wdGlvbnMpKSB7XG4gICAgICAgICAgICBvcHRpb25XaXRob3V0Q291bnQgPSBmLmV4dGVuZCh7fSwgb3B0aW9ucyk7XG4gICAgICAgICAgICBkZWxldGUgb3B0aW9uV2l0aG91dENvdW50LmNvbnRleHQ7XG4gICAgICAgICAgICBvcHRpb25XaXRob3V0Q291bnQuZGVmYXVsdFZhbHVlID0gby5jb250ZXh0Tm90Rm91bmQ7XG4gICAgXG4gICAgICAgICAgICB2YXIgY29udGV4dEtleSA9IG5zICsgby5uc3NlcGFyYXRvciArIGtleSArICdfJyArIG9wdGlvbnMuY29udGV4dDtcbiAgICBcbiAgICAgICAgICAgIHRyYW5zbGF0ZWQgPSB0cmFuc2xhdGUoY29udGV4dEtleSwgb3B0aW9uV2l0aG91dENvdW50KTtcbiAgICAgICAgICAgIGlmICh0cmFuc2xhdGVkICE9IG8uY29udGV4dE5vdEZvdW5kKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFwcGx5UmVwbGFjZW1lbnQodHJhbnNsYXRlZCwgeyBjb250ZXh0OiBvcHRpb25zLmNvbnRleHQgfSk7IC8vIGFwcGx5IHJlcGxhY2VtZW50IGZvciBjb250ZXh0IG9ubHlcbiAgICAgICAgICAgIH0gLy8gZWxzZSBjb250aW51ZSB0cmFuc2xhdGlvbiB3aXRoIG9yaWdpbmFsL25vbkNvbnRleHQga2V5XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgaWYgKG5lZWRzUGx1cmFsKG9wdGlvbnMpKSB7XG4gICAgICAgICAgICBvcHRpb25XaXRob3V0Q291bnQgPSBmLmV4dGVuZCh7fSwgb3B0aW9ucyk7XG4gICAgICAgICAgICBkZWxldGUgb3B0aW9uV2l0aG91dENvdW50LmNvdW50O1xuICAgICAgICAgICAgb3B0aW9uV2l0aG91dENvdW50LmRlZmF1bHRWYWx1ZSA9IG8ucGx1cmFsTm90Rm91bmQ7XG4gICAgXG4gICAgICAgICAgICB2YXIgcGx1cmFsS2V5ID0gbnMgKyBvLm5zc2VwYXJhdG9yICsga2V5ICsgby5wbHVyYWxTdWZmaXg7XG4gICAgICAgICAgICB2YXIgcGx1cmFsRXh0ZW5zaW9uID0gcGx1cmFsRXh0ZW5zaW9ucy5nZXQobG5nc1swXSwgb3B0aW9ucy5jb3VudCk7XG4gICAgICAgICAgICBpZiAocGx1cmFsRXh0ZW5zaW9uID49IDApIHtcbiAgICAgICAgICAgICAgICBwbHVyYWxLZXkgPSBwbHVyYWxLZXkgKyAnXycgKyBwbHVyYWxFeHRlbnNpb247XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBsdXJhbEV4dGVuc2lvbiA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHBsdXJhbEtleSA9IG5zICsgby5uc3NlcGFyYXRvciArIGtleTsgLy8gc2luZ3VsYXJcbiAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgIHRyYW5zbGF0ZWQgPSB0cmFuc2xhdGUocGx1cmFsS2V5LCBvcHRpb25XaXRob3V0Q291bnQpO1xuICAgICAgICAgICAgaWYgKHRyYW5zbGF0ZWQgIT0gby5wbHVyYWxOb3RGb3VuZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBhcHBseVJlcGxhY2VtZW50KHRyYW5zbGF0ZWQsIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IG9wdGlvbnMuY291bnQsXG4gICAgICAgICAgICAgICAgICAgIGludGVycG9sYXRpb25QcmVmaXg6IG9wdGlvbnMuaW50ZXJwb2xhdGlvblByZWZpeCxcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJwb2xhdGlvblN1ZmZpeDogb3B0aW9ucy5pbnRlcnBvbGF0aW9uU3VmZml4XG4gICAgICAgICAgICAgICAgfSk7IC8vIGFwcGx5IHJlcGxhY2VtZW50IGZvciBjb3VudCBvbmx5XG4gICAgICAgICAgICB9IC8vIGVsc2UgY29udGludWUgdHJhbnNsYXRpb24gd2l0aCBvcmlnaW5hbC9zaW5ndWxhciBrZXlcbiAgICAgICAgfVxuICAgIFxuICAgICAgICB2YXIgZm91bmQ7XG4gICAgICAgIHZhciBrZXlzID0ga2V5LnNwbGl0KG8ua2V5c2VwYXJhdG9yKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IGxuZ3MubGVuZ3RoOyBpIDwgbGVuOyBpKysgKSB7XG4gICAgICAgICAgICBpZiAoZm91bmQgIT09IHVuZGVmaW5lZCkgYnJlYWs7XG4gICAgXG4gICAgICAgICAgICB2YXIgbCA9IGxuZ3NbaV07XG4gICAgXG4gICAgICAgICAgICB2YXIgeCA9IDA7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSByZXNTdG9yZVtsXSAmJiByZXNTdG9yZVtsXVtuc107XG4gICAgICAgICAgICB3aGlsZSAoa2V5c1t4XSkge1xuICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUgJiYgdmFsdWVba2V5c1t4XV07XG4gICAgICAgICAgICAgICAgeCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWVUeXBlID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5hcHBseSh2YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBhcHBseVJlcGxhY2VtZW50KHZhbHVlLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWUgPSBhcHBseVJldXNlKHZhbHVlLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlVHlwZSA9PT0gJ1tvYmplY3QgQXJyYXldJyAmJiAhby5yZXR1cm5PYmplY3RUcmVlcyAmJiAhb3B0aW9ucy5yZXR1cm5PYmplY3RUcmVlcykge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlLmpvaW4oJ1xcbicpO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGFwcGx5UmVwbGFjZW1lbnQodmFsdWUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IGFwcGx5UmV1c2UodmFsdWUsIG9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgPT09IG51bGwgJiYgby5mYWxsYmFja09uTnVsbCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghby5yZXR1cm5PYmplY3RUcmVlcyAmJiAhb3B0aW9ucy5yZXR1cm5PYmplY3RUcmVlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG8ub2JqZWN0VHJlZUtleUhhbmRsZXIgJiYgdHlwZW9mIG8ub2JqZWN0VHJlZUtleUhhbmRsZXIgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gby5vYmplY3RUcmVlS2V5SGFuZGxlcihrZXksIHZhbHVlLCBsLCBucywgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gJ2tleSBcXCcnICsgbnMgKyAnOicgKyBrZXkgKyAnICgnICsgbCArICcpXFwnICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAncmV0dXJuZWQgYW4gb2JqZWN0IGluc3RlYWQgb2Ygc3RyaW5nLic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZi5sb2codmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHZhbHVlVHlwZSAhPT0gJ1tvYmplY3QgTnVtYmVyXScgJiYgdmFsdWVUeXBlICE9PSAnW29iamVjdCBGdW5jdGlvbl0nICYmIHZhbHVlVHlwZSAhPT0gJ1tvYmplY3QgUmVnRXhwXScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb3B5ID0gKHZhbHVlVHlwZSA9PT0gJ1tvYmplY3QgQXJyYXldJykgPyBbXSA6IHt9OyAvLyBhcHBseSBjaGlsZCB0cmFuc2xhdGlvbiBvbiBhIGNvcHlcbiAgICAgICAgICAgICAgICAgICAgICAgIGYuZWFjaCh2YWx1ZSwgZnVuY3Rpb24obSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvcHlbbV0gPSBfdHJhbnNsYXRlKG5zICsgby5uc3NlcGFyYXRvciArIGtleSArIG8ua2V5c2VwYXJhdG9yICsgbSwgb3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gY29weTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnc3RyaW5nJyAmJiB2YWx1ZS50cmltKCkgPT09ICcnICYmIG8uZmFsbGJhY2tPbkVtcHR5ID09PSB0cnVlKVxuICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICBcbiAgICAgICAgICAgICAgICBmb3VuZCA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgXG4gICAgICAgIGlmIChmb3VuZCA9PT0gdW5kZWZpbmVkICYmICFvcHRpb25zLmlzRmFsbGJhY2tMb29rdXAgJiYgKG8uZmFsbGJhY2tUb0RlZmF1bHROUyA9PT0gdHJ1ZSB8fCAoby5mYWxsYmFja05TICYmIG8uZmFsbGJhY2tOUy5sZW5ndGggPiAwKSkpIHtcbiAgICAgICAgICAgIC8vIHNldCBmbGFnIGZvciBmYWxsYmFjayBsb29rdXAgLSBhdm9pZCByZWN1cnNpb25cbiAgICAgICAgICAgIG9wdGlvbnMuaXNGYWxsYmFja0xvb2t1cCA9IHRydWU7XG4gICAgXG4gICAgICAgICAgICBpZiAoby5mYWxsYmFja05TLmxlbmd0aCkge1xuICAgIFxuICAgICAgICAgICAgICAgIGZvciAodmFyIHkgPSAwLCBsZW5ZID0gby5mYWxsYmFja05TLmxlbmd0aDsgeSA8IGxlblk7IHkrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3VuZCA9IF9maW5kKG8uZmFsbGJhY2tOU1t5XSArIG8ubnNzZXBhcmF0b3IgKyBrZXksIG9wdGlvbnMpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8qIGNvbXBhcmUgdmFsdWUgd2l0aG91dCBuYW1lc3BhY2UgKi9cbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmb3VuZFZhbHVlID0gZm91bmQuaW5kZXhPZihvLm5zc2VwYXJhdG9yKSA+IC0xID8gZm91bmQuc3BsaXQoby5uc3NlcGFyYXRvcilbMV0gOiBmb3VuZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAsIG5vdEZvdW5kVmFsdWUgPSBub3RGb3VuZC5pbmRleE9mKG8ubnNzZXBhcmF0b3IpID4gLTEgPyBub3RGb3VuZC5zcGxpdChvLm5zc2VwYXJhdG9yKVsxXSA6IG5vdEZvdW5kO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZvdW5kVmFsdWUgIT09IG5vdEZvdW5kVmFsdWUpIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3VuZCA9IF9maW5kKGtleSwgb3B0aW9ucyk7IC8vIGZhbGxiYWNrIHRvIGRlZmF1bHQgTlNcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIFxuICAgICAgICByZXR1cm4gZm91bmQ7XG4gICAgfVxuICAgIGZ1bmN0aW9uIGRldGVjdExhbmd1YWdlKCkge1xuICAgICAgICB2YXIgZGV0ZWN0ZWRMbmc7XG4gICAgXG4gICAgICAgIC8vIGdldCBmcm9tIHFzXG4gICAgICAgIHZhciBxc1Bhcm0gPSBbXTtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHF1ZXJ5ID0gd2luZG93LmxvY2F0aW9uLnNlYXJjaC5zdWJzdHJpbmcoMSk7XG4gICAgICAgICAgICAgICAgdmFyIHBhcm1zID0gcXVlcnkuc3BsaXQoJyYnKTtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8cGFybXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBvcyA9IHBhcm1zW2ldLmluZGV4T2YoJz0nKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBvcyA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBrZXkgPSBwYXJtc1tpXS5zdWJzdHJpbmcoMCxwb3MpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbCA9IHBhcm1zW2ldLnN1YnN0cmluZyhwb3MrMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBxc1Bhcm1ba2V5XSA9IHZhbDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pKCk7XG4gICAgICAgICAgICBpZiAocXNQYXJtW28uZGV0ZWN0TG5nUVNdKSB7XG4gICAgICAgICAgICAgICAgZGV0ZWN0ZWRMbmcgPSBxc1Bhcm1bby5kZXRlY3RMbmdRU107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgLy8gZ2V0IGZyb20gY29va2llXG4gICAgICAgIGlmICghZGV0ZWN0ZWRMbmcgJiYgdHlwZW9mIGRvY3VtZW50ICE9PSAndW5kZWZpbmVkJyAmJiBvLnVzZUNvb2tpZSApIHtcbiAgICAgICAgICAgIHZhciBjID0gZi5jb29raWUucmVhZChvLmNvb2tpZU5hbWUpO1xuICAgICAgICAgICAgaWYgKGMpIGRldGVjdGVkTG5nID0gYztcbiAgICAgICAgfVxuICAgIFxuICAgICAgICAvLyBnZXQgZnJvbSBuYXZpZ2F0b3JcbiAgICAgICAgaWYgKCFkZXRlY3RlZExuZyAmJiB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgZGV0ZWN0ZWRMbmcgPSAgKG5hdmlnYXRvci5sYW5ndWFnZSkgPyBuYXZpZ2F0b3IubGFuZ3VhZ2UgOiBuYXZpZ2F0b3IudXNlckxhbmd1YWdlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZGV0ZWN0ZWRMbmc7XG4gICAgfVxuICAgIHZhciBzeW5jID0ge1xuICAgIFxuICAgICAgICBsb2FkOiBmdW5jdGlvbihsbmdzLCBvcHRpb25zLCBjYikge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMudXNlTG9jYWxTdG9yYWdlKSB7XG4gICAgICAgICAgICAgICAgc3luYy5fbG9hZExvY2FsKGxuZ3MsIG9wdGlvbnMsIGZ1bmN0aW9uKGVyciwgc3RvcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1pc3NpbmdMbmdzID0gW107XG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW4gPSBsbmdzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXN0b3JlW2xuZ3NbaV1dKSBtaXNzaW5nTG5ncy5wdXNoKGxuZ3NbaV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAgICAgICAgIGlmIChtaXNzaW5nTG5ncy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzeW5jLl9mZXRjaChtaXNzaW5nTG5ncywgb3B0aW9ucywgZnVuY3Rpb24oZXJyLCBmZXRjaGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZi5leHRlbmQoc3RvcmUsIGZldGNoZWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN5bmMuX3N0b3JlTG9jYWwoZmV0Y2hlZCk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2IobnVsbCwgc3RvcmUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYihudWxsLCBzdG9yZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgc3luYy5fZmV0Y2gobG5ncywgb3B0aW9ucywgZnVuY3Rpb24oZXJyLCBzdG9yZSl7XG4gICAgICAgICAgICAgICAgICAgIGNiKG51bGwsIHN0b3JlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICBcbiAgICAgICAgX2xvYWRMb2NhbDogZnVuY3Rpb24obG5ncywgb3B0aW9ucywgY2IpIHtcbiAgICAgICAgICAgIHZhciBzdG9yZSA9IHt9XG4gICAgICAgICAgICAgICwgbm93TVMgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICBcbiAgICAgICAgICAgIGlmKHdpbmRvdy5sb2NhbFN0b3JhZ2UpIHtcbiAgICBcbiAgICAgICAgICAgICAgICB2YXIgdG9kbyA9IGxuZ3MubGVuZ3RoO1xuICAgIFxuICAgICAgICAgICAgICAgIGYuZWFjaChsbmdzLCBmdW5jdGlvbihrZXksIGxuZykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbG9jYWwgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Jlc18nICsgbG5nKTtcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvY2FsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2NhbCA9IEpTT04ucGFyc2UobG9jYWwpO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxvY2FsLmkxOG5TdGFtcCAmJiBsb2NhbC5pMThuU3RhbXAgKyBvcHRpb25zLmxvY2FsU3RvcmFnZUV4cGlyYXRpb25UaW1lID4gbm93TVMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZVtsbmddID0gbG9jYWw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgdG9kby0tOyAvLyB3YWl0IGZvciBhbGwgZG9uZSBiZWZvciBjYWxsYmFja1xuICAgICAgICAgICAgICAgICAgICBpZiAodG9kbyA9PT0gMCkgY2IobnVsbCwgc3RvcmUpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIFxuICAgICAgICBfc3RvcmVMb2NhbDogZnVuY3Rpb24oc3RvcmUpIHtcbiAgICAgICAgICAgIGlmKHdpbmRvdy5sb2NhbFN0b3JhZ2UpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBtIGluIHN0b3JlKSB7XG4gICAgICAgICAgICAgICAgICAgIHN0b3JlW21dLmkxOG5TdGFtcCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Jlc18nICsgbSwgSlNPTi5zdHJpbmdpZnkoc3RvcmVbbV0pKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0sXG4gICAgXG4gICAgICAgIF9mZXRjaDogZnVuY3Rpb24obG5ncywgb3B0aW9ucywgY2IpIHtcbiAgICAgICAgICAgIHZhciBucyA9IG9wdGlvbnMubnNcbiAgICAgICAgICAgICAgLCBzdG9yZSA9IHt9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIW9wdGlvbnMuZHluYW1pY0xvYWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgdG9kbyA9IG5zLm5hbWVzcGFjZXMubGVuZ3RoICogbG5ncy5sZW5ndGhcbiAgICAgICAgICAgICAgICAgICwgZXJyb3JzO1xuICAgIFxuICAgICAgICAgICAgICAgIC8vIGxvYWQgZWFjaCBmaWxlIGluZGl2aWR1YWxcbiAgICAgICAgICAgICAgICBmLmVhY2gobnMubmFtZXNwYWNlcywgZnVuY3Rpb24obnNJbmRleCwgbnNWYWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBmLmVhY2gobG5ncywgZnVuY3Rpb24obG5nSW5kZXgsIGxuZ1ZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENhbGwgdGhpcyBvbmNlIG91ciB0cmFuc2xhdGlvbiBoYXMgcmV0dXJuZWQuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbG9hZENvbXBsZXRlID0gZnVuY3Rpb24oZXJyLCBkYXRhKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcnMgPSBlcnJvcnMgfHwgW107XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9ycy5wdXNoKGVycik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0b3JlW2xuZ1ZhbHVlXSA9IHN0b3JlW2xuZ1ZhbHVlXSB8fCB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdG9yZVtsbmdWYWx1ZV1bbnNWYWx1ZV0gPSBkYXRhO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRvZG8tLTsgLy8gd2FpdCBmb3IgYWxsIGRvbmUgYmVmb3IgY2FsbGJhY2tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodG9kbyA9PT0gMCkgY2IoZXJyb3JzLCBzdG9yZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZih0eXBlb2Ygb3B0aW9ucy5jdXN0b21Mb2FkID09ICdmdW5jdGlvbicpe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFVzZSB0aGUgc3BlY2lmaWVkIGN1c3RvbSBjYWxsYmFjay5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcHRpb25zLmN1c3RvbUxvYWQobG5nVmFsdWUsIG5zVmFsdWUsIG9wdGlvbnMsIGxvYWRDb21wbGV0ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vfiAvLyBVc2Ugb3VyIGluYnVpbHQgc3luYy5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzeW5jLl9mZXRjaE9uZShsbmdWYWx1ZSwgbnNWYWx1ZSwgb3B0aW9ucywgbG9hZENvbXBsZXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIENhbGwgdGhpcyBvbmNlIG91ciB0cmFuc2xhdGlvbiBoYXMgcmV0dXJuZWQuXG4gICAgICAgICAgICAgICAgdmFyIGxvYWRDb21wbGV0ZSA9IGZ1bmN0aW9uKGVyciwgZGF0YSkge1xuICAgICAgICAgICAgICAgICAgICBjYihudWxsLCBkYXRhKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgIFxuICAgICAgICAgICAgICAgIGlmKHR5cGVvZiBvcHRpb25zLmN1c3RvbUxvYWQgPT0gJ2Z1bmN0aW9uJyl7XG4gICAgICAgICAgICAgICAgICAgIC8vIFVzZSB0aGUgc3BlY2lmaWVkIGN1c3RvbSBjYWxsYmFjay5cbiAgICAgICAgICAgICAgICAgICAgb3B0aW9ucy5jdXN0b21Mb2FkKGxuZ3MsIG5zLm5hbWVzcGFjZXMsIG9wdGlvbnMsIGxvYWRDb21wbGV0ZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVybCA9IGFwcGx5UmVwbGFjZW1lbnQob3B0aW9ucy5yZXNHZXRQYXRoLCB7IGxuZzogbG5ncy5qb2luKCcrJyksIG5zOiBucy5uYW1lc3BhY2VzLmpvaW4oJysnKSB9KTtcbiAgICAgICAgICAgICAgICAgICAgLy8gbG9hZCBhbGwgbmVlZGVkIHN0dWZmIG9uY2VcbiAgICAgICAgICAgICAgICAgICAgZi5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogdXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSwgc3RhdHVzLCB4aHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmLmxvZygnbG9hZGVkOiAnICsgdXJsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkQ29tcGxldGUobnVsbCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IgOiBmdW5jdGlvbih4aHIsIHN0YXR1cywgZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmLmxvZygnZmFpbGVkIGxvYWRpbmc6ICcgKyB1cmwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRDb21wbGV0ZSgnZmFpbGVkIGxvYWRpbmcgcmVzb3VyY2UuanNvbiBlcnJvcjogJyArIGVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBhc3luYyA6IG9wdGlvbnMuZ2V0QXN5bmNcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICBcbiAgICAgICAgX2ZldGNoT25lOiBmdW5jdGlvbihsbmcsIG5zLCBvcHRpb25zLCBkb25lKSB7XG4gICAgICAgICAgICB2YXIgdXJsID0gYXBwbHlSZXBsYWNlbWVudChvcHRpb25zLnJlc0dldFBhdGgsIHsgbG5nOiBsbmcsIG5zOiBucyB9KTtcbiAgICAgICAgICAgIGYuYWpheCh7XG4gICAgICAgICAgICAgICAgdXJsOiB1cmwsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSwgc3RhdHVzLCB4aHIpIHtcbiAgICAgICAgICAgICAgICAgICAgZi5sb2coJ2xvYWRlZDogJyArIHVybCk7XG4gICAgICAgICAgICAgICAgICAgIGRvbmUobnVsbCwgZGF0YSk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvciA6IGZ1bmN0aW9uKHhociwgc3RhdHVzLCBlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBpZiAoKHN0YXR1cyAmJiBzdGF0dXMgPT0gMjAwKSB8fCAoeGhyICYmIHhoci5zdGF0dXMgJiYgeGhyLnN0YXR1cyA9PSAyMDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBmaWxlIGxvYWRlZCBidXQgaW52YWxpZCBqc29uLCBzdG9wIHdhc3RlIHRpbWUgIVxuICAgICAgICAgICAgICAgICAgICAgICAgZi5sb2coJ1RoZXJlIGlzIGEgdHlwbyBpbjogJyArIHVybCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoKHN0YXR1cyAmJiBzdGF0dXMgPT0gNDA0KSB8fCAoeGhyICYmIHhoci5zdGF0dXMgJiYgeGhyLnN0YXR1cyA9PSA0MDQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmLmxvZygnRG9lcyBub3QgZXhpc3Q6ICcgKyB1cmwpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRoZVN0YXR1cyA9IHN0YXR1cyA/IHN0YXR1cyA6ICgoeGhyICYmIHhoci5zdGF0dXMpID8geGhyLnN0YXR1cyA6IG51bGwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgZi5sb2codGhlU3RhdHVzICsgJyB3aGVuIGxvYWRpbmcgJyArIHVybCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGRvbmUoZXJyb3IsIHt9KTtcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGRhdGFUeXBlOiBcImpzb25cIixcbiAgICAgICAgICAgICAgICBhc3luYyA6IG9wdGlvbnMuZ2V0QXN5bmNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgIFxuICAgICAgICBwb3N0TWlzc2luZzogZnVuY3Rpb24obG5nLCBucywga2V5LCBkZWZhdWx0VmFsdWUsIGxuZ3MpIHtcbiAgICAgICAgICAgIHZhciBwYXlsb2FkID0ge307XG4gICAgICAgICAgICBwYXlsb2FkW2tleV0gPSBkZWZhdWx0VmFsdWU7XG4gICAgXG4gICAgICAgICAgICB2YXIgdXJscyA9IFtdO1xuICAgIFxuICAgICAgICAgICAgaWYgKG8uc2VuZE1pc3NpbmdUbyA9PT0gJ2ZhbGxiYWNrJyAmJiBvLmZhbGxiYWNrTG5nWzBdICE9PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgby5mYWxsYmFja0xuZy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB1cmxzLnB1c2goe2xuZzogby5mYWxsYmFja0xuZ1tpXSwgdXJsOiBhcHBseVJlcGxhY2VtZW50KG8ucmVzUG9zdFBhdGgsIHsgbG5nOiBvLmZhbGxiYWNrTG5nW2ldLCBuczogbnMgfSl9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG8uc2VuZE1pc3NpbmdUbyA9PT0gJ2N1cnJlbnQnIHx8IChvLnNlbmRNaXNzaW5nVG8gPT09ICdmYWxsYmFjaycgJiYgby5mYWxsYmFja0xuZ1swXSA9PT0gZmFsc2UpICkge1xuICAgICAgICAgICAgICAgIHVybHMucHVzaCh7bG5nOiBsbmcsIHVybDogYXBwbHlSZXBsYWNlbWVudChvLnJlc1Bvc3RQYXRoLCB7IGxuZzogbG5nLCBuczogbnMgfSl9KTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoby5zZW5kTWlzc2luZ1RvID09PSAnYWxsJykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gbG5ncy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdXJscy5wdXNoKHtsbmc6IGxuZ3NbaV0sIHVybDogYXBwbHlSZXBsYWNlbWVudChvLnJlc1Bvc3RQYXRoLCB7IGxuZzogbG5nc1tpXSwgbnM6IG5zIH0pfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgZm9yICh2YXIgeSA9IDAsIGxlbiA9IHVybHMubGVuZ3RoOyB5IDwgbGVuOyB5KyspIHtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHVybHNbeV07XG4gICAgICAgICAgICAgICAgZi5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBpdGVtLnVybCxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogby5zZW5kVHlwZSxcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogcGF5bG9hZCxcbiAgICAgICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24oZGF0YSwgc3RhdHVzLCB4aHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGYubG9nKCdwb3N0ZWQgbWlzc2luZyBrZXkgXFwnJyArIGtleSArICdcXCcgdG86ICcgKyBpdGVtLnVybCk7XG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhZGQga2V5IHRvIHJlc1N0b3JlXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIga2V5cyA9IGtleS5zcGxpdCgnLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gcmVzU3RvcmVbaXRlbS5sbmddW25zXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdoaWxlIChrZXlzW3hdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHggPT09IGtleXMubGVuZ3RoIC0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZSA9IHZhbHVlW2tleXNbeF1dID0gZGVmYXVsdFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlID0gdmFsdWVba2V5c1t4XV0gPSB2YWx1ZVtrZXlzW3hdXSB8fCB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeCsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBlcnJvciA6IGZ1bmN0aW9uKHhociwgc3RhdHVzLCBlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgZi5sb2coJ2ZhaWxlZCBwb3N0aW5nIG1pc3Npbmcga2V5IFxcJycgKyBrZXkgKyAnXFwnIHRvOiAnICsgaXRlbS51cmwpO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBkYXRhVHlwZTogXCJqc29uXCIsXG4gICAgICAgICAgICAgICAgICAgIGFzeW5jIDogby5wb3N0QXN5bmNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgLy8gZGVmaW5pdGlvbiBodHRwOi8vdHJhbnNsYXRlLnNvdXJjZWZvcmdlLm5ldC93aWtpL2wxMG4vcGx1cmFsZm9ybXNcbiAgICB2YXIgcGx1cmFsRXh0ZW5zaW9ucyA9IHtcbiAgICBcbiAgICAgICAgcnVsZXM6IHtcbiAgICAgICAgICAgIFwiYWNoXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJBY2hvbGlcIiwgXG4gICAgICAgICAgICAgICAgXCJudW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMSwgXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICBdLCBcbiAgICAgICAgICAgICAgICBcInBsdXJhbHNcIjogZnVuY3Rpb24obikgeyByZXR1cm4gTnVtYmVyKG4gPiAxKTsgfVxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICBcImFmXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJBZnJpa2FhbnNcIiwgXG4gICAgICAgICAgICAgICAgXCJudW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMSwgXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICBdLCBcbiAgICAgICAgICAgICAgICBcInBsdXJhbHNcIjogZnVuY3Rpb24obikgeyByZXR1cm4gTnVtYmVyKG4gIT0gMSk7IH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJha1wiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQWthblwiLCBcbiAgICAgICAgICAgICAgICBcIm51bWJlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAxLCBcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIF0sIFxuICAgICAgICAgICAgICAgIFwicGx1cmFsc1wiOiBmdW5jdGlvbihuKSB7IHJldHVybiBOdW1iZXIobiA+IDEpOyB9XG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIFwiYW1cIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkFtaGFyaWNcIiwgXG4gICAgICAgICAgICAgICAgXCJudW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMSwgXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICBdLCBcbiAgICAgICAgICAgICAgICBcInBsdXJhbHNcIjogZnVuY3Rpb24obikgeyByZXR1cm4gTnVtYmVyKG4gPiAxKTsgfVxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICBcImFuXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJBcmFnb25lc2VcIiwgXG4gICAgICAgICAgICAgICAgXCJudW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMSwgXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICBdLCBcbiAgICAgICAgICAgICAgICBcInBsdXJhbHNcIjogZnVuY3Rpb24obikgeyByZXR1cm4gTnVtYmVyKG4gIT0gMSk7IH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJhclwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQXJhYmljXCIsIFxuICAgICAgICAgICAgICAgIFwibnVtYmVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDAsIFxuICAgICAgICAgICAgICAgICAgICAxLCBcbiAgICAgICAgICAgICAgICAgICAgMiwgXG4gICAgICAgICAgICAgICAgICAgIDMsIFxuICAgICAgICAgICAgICAgICAgICAxMSwgXG4gICAgICAgICAgICAgICAgICAgIDEwMFxuICAgICAgICAgICAgICAgIF0sIFxuICAgICAgICAgICAgICAgIFwicGx1cmFsc1wiOiBmdW5jdGlvbihuKSB7IHJldHVybiBOdW1iZXIobj09PTAgPyAwIDogbj09MSA/IDEgOiBuPT0yID8gMiA6IG4lMTAwPj0zICYmIG4lMTAwPD0xMCA/IDMgOiBuJTEwMD49MTEgPyA0IDogNSk7IH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJhcm5cIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1hcHVkdW5ndW5cIiwgXG4gICAgICAgICAgICAgICAgXCJudW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMSwgXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICBdLCBcbiAgICAgICAgICAgICAgICBcInBsdXJhbHNcIjogZnVuY3Rpb24obikgeyByZXR1cm4gTnVtYmVyKG4gPiAxKTsgfVxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICBcImFzdFwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQXN0dXJpYW5cIiwgXG4gICAgICAgICAgICAgICAgXCJudW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMSwgXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICBdLCBcbiAgICAgICAgICAgICAgICBcInBsdXJhbHNcIjogZnVuY3Rpb24obikgeyByZXR1cm4gTnVtYmVyKG4gIT0gMSk7IH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJheVwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQXltYXJcXHUwMGUxXCIsIFxuICAgICAgICAgICAgICAgIFwibnVtYmVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICBdLCBcbiAgICAgICAgICAgICAgICBcInBsdXJhbHNcIjogZnVuY3Rpb24obikgeyByZXR1cm4gMDsgfVxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICBcImF6XCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJBemVyYmFpamFuaVwiLCBcbiAgICAgICAgICAgICAgICBcIm51bWJlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAxLCBcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIF0sIFxuICAgICAgICAgICAgICAgIFwicGx1cmFsc1wiOiBmdW5jdGlvbihuKSB7IHJldHVybiBOdW1iZXIobiAhPSAxKTsgfVxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICBcImJlXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCZWxhcnVzaWFuXCIsIFxuICAgICAgICAgICAgICAgIFwibnVtYmVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDEsIFxuICAgICAgICAgICAgICAgICAgICAyLCBcbiAgICAgICAgICAgICAgICAgICAgNVxuICAgICAgICAgICAgICAgIF0sIFxuICAgICAgICAgICAgICAgIFwicGx1cmFsc1wiOiBmdW5jdGlvbihuKSB7IHJldHVybiBOdW1iZXIobiUxMD09MSAmJiBuJTEwMCE9MTEgPyAwIDogbiUxMD49MiAmJiBuJTEwPD00ICYmIChuJTEwMDwxMCB8fCBuJTEwMD49MjApID8gMSA6IDIpOyB9XG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIFwiYmdcIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJ1bGdhcmlhblwiLCBcbiAgICAgICAgICAgICAgICBcIm51bWJlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAxLCBcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIF0sIFxuICAgICAgICAgICAgICAgIFwicGx1cmFsc1wiOiBmdW5jdGlvbihuKSB7IHJldHVybiBOdW1iZXIobiAhPSAxKTsgfVxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICBcImJuXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJCZW5nYWxpXCIsIFxuICAgICAgICAgICAgICAgIFwibnVtYmVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDEsIFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgXSwgXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxzXCI6IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIE51bWJlcihuICE9IDEpOyB9XG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIFwiYm9cIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlRpYmV0YW5cIiwgXG4gICAgICAgICAgICAgICAgXCJudW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIF0sIFxuICAgICAgICAgICAgICAgIFwicGx1cmFsc1wiOiBmdW5jdGlvbihuKSB7IHJldHVybiAwOyB9XG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIFwiYnJcIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJyZXRvblwiLCBcbiAgICAgICAgICAgICAgICBcIm51bWJlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAxLCBcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIF0sIFxuICAgICAgICAgICAgICAgIFwicGx1cmFsc1wiOiBmdW5jdGlvbihuKSB7IHJldHVybiBOdW1iZXIobiA+IDEpOyB9XG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIFwiYnNcIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJvc25pYW5cIiwgXG4gICAgICAgICAgICAgICAgXCJudW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMSwgXG4gICAgICAgICAgICAgICAgICAgIDIsIFxuICAgICAgICAgICAgICAgICAgICA1XG4gICAgICAgICAgICAgICAgXSwgXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxzXCI6IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIE51bWJlcihuJTEwPT0xICYmIG4lMTAwIT0xMSA/IDAgOiBuJTEwPj0yICYmIG4lMTA8PTQgJiYgKG4lMTAwPDEwIHx8IG4lMTAwPj0yMCkgPyAxIDogMik7IH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJjYVwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ2F0YWxhblwiLCBcbiAgICAgICAgICAgICAgICBcIm51bWJlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAxLCBcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIF0sIFxuICAgICAgICAgICAgICAgIFwicGx1cmFsc1wiOiBmdW5jdGlvbihuKSB7IHJldHVybiBOdW1iZXIobiAhPSAxKTsgfVxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICBcImNnZ1wiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ2hpZ2FcIiwgXG4gICAgICAgICAgICAgICAgXCJudW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIF0sIFxuICAgICAgICAgICAgICAgIFwicGx1cmFsc1wiOiBmdW5jdGlvbihuKSB7IHJldHVybiAwOyB9XG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIFwiY3NcIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkN6ZWNoXCIsIFxuICAgICAgICAgICAgICAgIFwibnVtYmVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDEsIFxuICAgICAgICAgICAgICAgICAgICAyLCBcbiAgICAgICAgICAgICAgICAgICAgNVxuICAgICAgICAgICAgICAgIF0sIFxuICAgICAgICAgICAgICAgIFwicGx1cmFsc1wiOiBmdW5jdGlvbihuKSB7IHJldHVybiBOdW1iZXIoKG49PTEpID8gMCA6IChuPj0yICYmIG48PTQpID8gMSA6IDIpOyB9XG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIFwiY3NiXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJLYXNodWJpYW5cIiwgXG4gICAgICAgICAgICAgICAgXCJudW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMSwgXG4gICAgICAgICAgICAgICAgICAgIDIsIFxuICAgICAgICAgICAgICAgICAgICA1XG4gICAgICAgICAgICAgICAgXSwgXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxzXCI6IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIE51bWJlcihuPT0xID8gMCA6IG4lMTA+PTIgJiYgbiUxMDw9NCAmJiAobiUxMDA8MTAgfHwgbiUxMDA+PTIwKSA/IDEgOiAyKTsgfVxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICBcImN5XCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJXZWxzaFwiLCBcbiAgICAgICAgICAgICAgICBcIm51bWJlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAxLCBcbiAgICAgICAgICAgICAgICAgICAgMiwgXG4gICAgICAgICAgICAgICAgICAgIDMsIFxuICAgICAgICAgICAgICAgICAgICA4XG4gICAgICAgICAgICAgICAgXSwgXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxzXCI6IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIE51bWJlcigobj09MSkgPyAwIDogKG49PTIpID8gMSA6IChuICE9IDggJiYgbiAhPSAxMSkgPyAyIDogMyk7IH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJkYVwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRGFuaXNoXCIsIFxuICAgICAgICAgICAgICAgIFwibnVtYmVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDEsIFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgXSwgXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxzXCI6IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIE51bWJlcihuICE9IDEpOyB9XG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIFwiZGVcIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkdlcm1hblwiLCBcbiAgICAgICAgICAgICAgICBcIm51bWJlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAxLCBcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIF0sIFxuICAgICAgICAgICAgICAgIFwicGx1cmFsc1wiOiBmdW5jdGlvbihuKSB7IHJldHVybiBOdW1iZXIobiAhPSAxKTsgfVxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICBcImR6XCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJEem9uZ2toYVwiLCBcbiAgICAgICAgICAgICAgICBcIm51bWJlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgXSwgXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxzXCI6IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIDA7IH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJlbFwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiR3JlZWtcIiwgXG4gICAgICAgICAgICAgICAgXCJudW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMSwgXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICBdLCBcbiAgICAgICAgICAgICAgICBcInBsdXJhbHNcIjogZnVuY3Rpb24obikgeyByZXR1cm4gTnVtYmVyKG4gIT0gMSk7IH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJlblwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRW5nbGlzaFwiLCBcbiAgICAgICAgICAgICAgICBcIm51bWJlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAxLCBcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIF0sIFxuICAgICAgICAgICAgICAgIFwicGx1cmFsc1wiOiBmdW5jdGlvbihuKSB7IHJldHVybiBOdW1iZXIobiAhPSAxKTsgfVxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICBcImVvXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJFc3BlcmFudG9cIiwgXG4gICAgICAgICAgICAgICAgXCJudW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMSwgXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICBdLCBcbiAgICAgICAgICAgICAgICBcInBsdXJhbHNcIjogZnVuY3Rpb24obikgeyByZXR1cm4gTnVtYmVyKG4gIT0gMSk7IH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJlc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiU3BhbmlzaFwiLCBcbiAgICAgICAgICAgICAgICBcIm51bWJlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAxLCBcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIF0sIFxuICAgICAgICAgICAgICAgIFwicGx1cmFsc1wiOiBmdW5jdGlvbihuKSB7IHJldHVybiBOdW1iZXIobiAhPSAxKTsgfVxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICBcImVzX2FyXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJBcmdlbnRpbmVhbiBTcGFuaXNoXCIsIFxuICAgICAgICAgICAgICAgIFwibnVtYmVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDEsIFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgXSwgXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxzXCI6IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIE51bWJlcihuICE9IDEpOyB9XG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIFwiZXRcIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkVzdG9uaWFuXCIsIFxuICAgICAgICAgICAgICAgIFwibnVtYmVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDEsIFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgXSwgXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxzXCI6IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIE51bWJlcihuICE9IDEpOyB9XG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIFwiZXVcIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJhc3F1ZVwiLCBcbiAgICAgICAgICAgICAgICBcIm51bWJlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAxLCBcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIF0sIFxuICAgICAgICAgICAgICAgIFwicGx1cmFsc1wiOiBmdW5jdGlvbihuKSB7IHJldHVybiBOdW1iZXIobiAhPSAxKTsgfVxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICBcImZhXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJQZXJzaWFuXCIsIFxuICAgICAgICAgICAgICAgIFwibnVtYmVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICBdLCBcbiAgICAgICAgICAgICAgICBcInBsdXJhbHNcIjogZnVuY3Rpb24obikgeyByZXR1cm4gMDsgfVxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICBcImZpXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJGaW5uaXNoXCIsIFxuICAgICAgICAgICAgICAgIFwibnVtYmVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDEsIFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgXSwgXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxzXCI6IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIE51bWJlcihuICE9IDEpOyB9XG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIFwiZmlsXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJGaWxpcGlub1wiLCBcbiAgICAgICAgICAgICAgICBcIm51bWJlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAxLCBcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIF0sIFxuICAgICAgICAgICAgICAgIFwicGx1cmFsc1wiOiBmdW5jdGlvbihuKSB7IHJldHVybiBOdW1iZXIobiA+IDEpOyB9XG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIFwiZm9cIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkZhcm9lc2VcIiwgXG4gICAgICAgICAgICAgICAgXCJudW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMSwgXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICBdLCBcbiAgICAgICAgICAgICAgICBcInBsdXJhbHNcIjogZnVuY3Rpb24obikgeyByZXR1cm4gTnVtYmVyKG4gIT0gMSk7IH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJmclwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRnJlbmNoXCIsIFxuICAgICAgICAgICAgICAgIFwibnVtYmVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDEsIFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgXSwgXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxzXCI6IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIE51bWJlcihuID4gMSk7IH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJmdXJcIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkZyaXVsaWFuXCIsIFxuICAgICAgICAgICAgICAgIFwibnVtYmVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDEsIFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgXSwgXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxzXCI6IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIE51bWJlcihuICE9IDEpOyB9XG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIFwiZnlcIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkZyaXNpYW5cIiwgXG4gICAgICAgICAgICAgICAgXCJudW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMSwgXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICBdLCBcbiAgICAgICAgICAgICAgICBcInBsdXJhbHNcIjogZnVuY3Rpb24obikgeyByZXR1cm4gTnVtYmVyKG4gIT0gMSk7IH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJnYVwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiSXJpc2hcIiwgXG4gICAgICAgICAgICAgICAgXCJudW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMSwgXG4gICAgICAgICAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAgICAgICAgIDMsXG4gICAgICAgICAgICAgICAgICAgIDcsIFxuICAgICAgICAgICAgICAgICAgICAxMVxuICAgICAgICAgICAgICAgIF0sIFxuICAgICAgICAgICAgICAgIFwicGx1cmFsc1wiOiBmdW5jdGlvbihuKSB7IHJldHVybiBOdW1iZXIobj09MSA/IDAgOiBuPT0yID8gMSA6IG48NyA/IDIgOiBuPDExID8gMyA6IDQpIDt9XG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIFwiZ2RcIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlNjb3R0aXNoIEdhZWxpY1wiLCBcbiAgICAgICAgICAgICAgICBcIm51bWJlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAxLCBcbiAgICAgICAgICAgICAgICAgICAgMiwgXG4gICAgICAgICAgICAgICAgICAgIDMsXG4gICAgICAgICAgICAgICAgICAgIDIwXG4gICAgICAgICAgICAgICAgXSwgXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxzXCI6IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIE51bWJlcigobj09MSB8fCBuPT0xMSkgPyAwIDogKG49PTIgfHwgbj09MTIpID8gMSA6IChuID4gMiAmJiBuIDwgMjApID8gMiA6IDMpOyB9XG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIFwiZ2xcIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkdhbGljaWFuXCIsIFxuICAgICAgICAgICAgICAgIFwibnVtYmVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDEsIFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgXSwgXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxzXCI6IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIE51bWJlcihuICE9IDEpOyB9XG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIFwiZ3VcIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkd1amFyYXRpXCIsIFxuICAgICAgICAgICAgICAgIFwibnVtYmVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDEsIFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgXSwgXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxzXCI6IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIE51bWJlcihuICE9IDEpOyB9XG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIFwiZ3VuXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJHdW5cIiwgXG4gICAgICAgICAgICAgICAgXCJudW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMSwgXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICBdLCBcbiAgICAgICAgICAgICAgICBcInBsdXJhbHNcIjogZnVuY3Rpb24obikgeyByZXR1cm4gTnVtYmVyKG4gPiAxKTsgfVxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICBcImhhXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJIYXVzYVwiLCBcbiAgICAgICAgICAgICAgICBcIm51bWJlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAxLCBcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIF0sIFxuICAgICAgICAgICAgICAgIFwicGx1cmFsc1wiOiBmdW5jdGlvbihuKSB7IHJldHVybiBOdW1iZXIobiAhPSAxKTsgfVxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICBcImhlXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJIZWJyZXdcIiwgXG4gICAgICAgICAgICAgICAgXCJudW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMSwgXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICBdLCBcbiAgICAgICAgICAgICAgICBcInBsdXJhbHNcIjogZnVuY3Rpb24obikgeyByZXR1cm4gTnVtYmVyKG4gIT0gMSk7IH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJoaVwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiSGluZGlcIiwgXG4gICAgICAgICAgICAgICAgXCJudW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMSwgXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICBdLCBcbiAgICAgICAgICAgICAgICBcInBsdXJhbHNcIjogZnVuY3Rpb24obikgeyByZXR1cm4gTnVtYmVyKG4gIT0gMSk7IH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJoclwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ3JvYXRpYW5cIiwgXG4gICAgICAgICAgICAgICAgXCJudW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMSwgXG4gICAgICAgICAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAgICAgICAgIDVcbiAgICAgICAgICAgICAgICBdLCBcbiAgICAgICAgICAgICAgICBcInBsdXJhbHNcIjogZnVuY3Rpb24obikgeyByZXR1cm4gTnVtYmVyKG4lMTA9PTEgJiYgbiUxMDAhPTExID8gMCA6IG4lMTA+PTIgJiYgbiUxMDw9NCAmJiAobiUxMDA8MTAgfHwgbiUxMDA+PTIwKSA/IDEgOiAyKTsgfVxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICBcImh1XCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJIdW5nYXJpYW5cIiwgXG4gICAgICAgICAgICAgICAgXCJudW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMSwgXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICBdLCBcbiAgICAgICAgICAgICAgICBcInBsdXJhbHNcIjogZnVuY3Rpb24obikgeyByZXR1cm4gTnVtYmVyKG4gIT0gMSk7IH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJoeVwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQXJtZW5pYW5cIiwgXG4gICAgICAgICAgICAgICAgXCJudW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMSwgXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICBdLCBcbiAgICAgICAgICAgICAgICBcInBsdXJhbHNcIjogZnVuY3Rpb24obikgeyByZXR1cm4gTnVtYmVyKG4gIT0gMSk7IH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJpYVwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiSW50ZXJsaW5ndWFcIiwgXG4gICAgICAgICAgICAgICAgXCJudW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMSwgXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICBdLCBcbiAgICAgICAgICAgICAgICBcInBsdXJhbHNcIjogZnVuY3Rpb24obikgeyByZXR1cm4gTnVtYmVyKG4gIT0gMSk7IH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJpZFwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiSW5kb25lc2lhblwiLCBcbiAgICAgICAgICAgICAgICBcIm51bWJlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgXSwgXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxzXCI6IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIDA7IH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJpc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiSWNlbGFuZGljXCIsIFxuICAgICAgICAgICAgICAgIFwibnVtYmVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDEsIFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgXSwgXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxzXCI6IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIE51bWJlcihuJTEwIT0xIHx8IG4lMTAwPT0xMSk7IH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJpdFwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiSXRhbGlhblwiLCBcbiAgICAgICAgICAgICAgICBcIm51bWJlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAxLCBcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIF0sIFxuICAgICAgICAgICAgICAgIFwicGx1cmFsc1wiOiBmdW5jdGlvbihuKSB7IHJldHVybiBOdW1iZXIobiAhPSAxKTsgfVxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICBcImphXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJKYXBhbmVzZVwiLCBcbiAgICAgICAgICAgICAgICBcIm51bWJlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgXSwgXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxzXCI6IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIDA7IH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJqYm9cIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkxvamJhblwiLCBcbiAgICAgICAgICAgICAgICBcIm51bWJlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgXSwgXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxzXCI6IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIDA7IH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJqdlwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiSmF2YW5lc2VcIiwgXG4gICAgICAgICAgICAgICAgXCJudW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMCwgXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICBdLCBcbiAgICAgICAgICAgICAgICBcInBsdXJhbHNcIjogZnVuY3Rpb24obikgeyByZXR1cm4gTnVtYmVyKG4gIT09IDApOyB9XG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIFwia2FcIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkdlb3JnaWFuXCIsIFxuICAgICAgICAgICAgICAgIFwibnVtYmVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICBdLCBcbiAgICAgICAgICAgICAgICBcInBsdXJhbHNcIjogZnVuY3Rpb24obikgeyByZXR1cm4gMDsgfVxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICBcImtrXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJLYXpha2hcIiwgXG4gICAgICAgICAgICAgICAgXCJudW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIF0sIFxuICAgICAgICAgICAgICAgIFwicGx1cmFsc1wiOiBmdW5jdGlvbihuKSB7IHJldHVybiAwOyB9XG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIFwia21cIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIktobWVyXCIsIFxuICAgICAgICAgICAgICAgIFwibnVtYmVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICBdLCBcbiAgICAgICAgICAgICAgICBcInBsdXJhbHNcIjogZnVuY3Rpb24obikgeyByZXR1cm4gMDsgfVxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICBcImtuXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJLYW5uYWRhXCIsIFxuICAgICAgICAgICAgICAgIFwibnVtYmVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDEsIFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgXSwgXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxzXCI6IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIE51bWJlcihuICE9IDEpOyB9XG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIFwia29cIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIktvcmVhblwiLCBcbiAgICAgICAgICAgICAgICBcIm51bWJlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgXSwgXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxzXCI6IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIDA7IH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJrdVwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiS3VyZGlzaFwiLCBcbiAgICAgICAgICAgICAgICBcIm51bWJlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAxLCBcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIF0sIFxuICAgICAgICAgICAgICAgIFwicGx1cmFsc1wiOiBmdW5jdGlvbihuKSB7IHJldHVybiBOdW1iZXIobiAhPSAxKTsgfVxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICBcImt3XCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJDb3JuaXNoXCIsIFxuICAgICAgICAgICAgICAgIFwibnVtYmVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDEsIFxuICAgICAgICAgICAgICAgICAgICAyLCBcbiAgICAgICAgICAgICAgICAgICAgMyxcbiAgICAgICAgICAgICAgICAgICAgNFxuICAgICAgICAgICAgICAgIF0sIFxuICAgICAgICAgICAgICAgIFwicGx1cmFsc1wiOiBmdW5jdGlvbihuKSB7IHJldHVybiBOdW1iZXIoKG49PTEpID8gMCA6IChuPT0yKSA/IDEgOiAobiA9PSAzKSA/IDIgOiAzKTsgfVxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICBcImt5XCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJLeXJneXpcIiwgXG4gICAgICAgICAgICAgICAgXCJudW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIF0sIFxuICAgICAgICAgICAgICAgIFwicGx1cmFsc1wiOiBmdW5jdGlvbihuKSB7IHJldHVybiAwOyB9XG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIFwibGJcIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkxldHplYnVyZ2VzY2hcIiwgXG4gICAgICAgICAgICAgICAgXCJudW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMSwgXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICBdLCBcbiAgICAgICAgICAgICAgICBcInBsdXJhbHNcIjogZnVuY3Rpb24obikgeyByZXR1cm4gTnVtYmVyKG4gIT0gMSk7IH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJsblwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTGluZ2FsYVwiLCBcbiAgICAgICAgICAgICAgICBcIm51bWJlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAxLCBcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIF0sIFxuICAgICAgICAgICAgICAgIFwicGx1cmFsc1wiOiBmdW5jdGlvbihuKSB7IHJldHVybiBOdW1iZXIobiA+IDEpOyB9XG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIFwibG9cIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkxhb1wiLCBcbiAgICAgICAgICAgICAgICBcIm51bWJlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgXSwgXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxzXCI6IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIDA7IH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJsdFwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTGl0aHVhbmlhblwiLCBcbiAgICAgICAgICAgICAgICBcIm51bWJlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAxLCBcbiAgICAgICAgICAgICAgICAgICAgMixcbiAgICAgICAgICAgICAgICAgICAgMTBcbiAgICAgICAgICAgICAgICBdLCBcbiAgICAgICAgICAgICAgICBcInBsdXJhbHNcIjogZnVuY3Rpb24obikgeyByZXR1cm4gTnVtYmVyKG4lMTA9PTEgJiYgbiUxMDAhPTExID8gMCA6IG4lMTA+PTIgJiYgKG4lMTAwPDEwIHx8IG4lMTAwPj0yMCkgPyAxIDogMik7IH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJsdlwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTGF0dmlhblwiLCBcbiAgICAgICAgICAgICAgICBcIm51bWJlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAxLCBcbiAgICAgICAgICAgICAgICAgICAgMiwgXG4gICAgICAgICAgICAgICAgICAgIDBcbiAgICAgICAgICAgICAgICBdLCBcbiAgICAgICAgICAgICAgICBcInBsdXJhbHNcIjogZnVuY3Rpb24obikgeyByZXR1cm4gTnVtYmVyKG4lMTA9PTEgJiYgbiUxMDAhPTExID8gMCA6IG4gIT09IDAgPyAxIDogMik7IH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJtYWlcIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1haXRoaWxpXCIsIFxuICAgICAgICAgICAgICAgIFwibnVtYmVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDEsIFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgXSwgXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxzXCI6IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIE51bWJlcihuICE9IDEpOyB9XG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIFwibWZlXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNYXVyaXRpYW4gQ3Jlb2xlXCIsIFxuICAgICAgICAgICAgICAgIFwibnVtYmVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDEsIFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgXSwgXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxzXCI6IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIE51bWJlcihuID4gMSk7IH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJtZ1wiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTWFsYWdhc3lcIiwgXG4gICAgICAgICAgICAgICAgXCJudW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMSwgXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICBdLCBcbiAgICAgICAgICAgICAgICBcInBsdXJhbHNcIjogZnVuY3Rpb24obikgeyByZXR1cm4gTnVtYmVyKG4gPiAxKTsgfVxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICBcIm1pXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNYW9yaVwiLCBcbiAgICAgICAgICAgICAgICBcIm51bWJlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAxLCBcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIF0sIFxuICAgICAgICAgICAgICAgIFwicGx1cmFsc1wiOiBmdW5jdGlvbihuKSB7IHJldHVybiBOdW1iZXIobiA+IDEpOyB9XG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIFwibWtcIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1hY2Vkb25pYW5cIiwgXG4gICAgICAgICAgICAgICAgXCJudW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMSwgXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICBdLCBcbiAgICAgICAgICAgICAgICBcInBsdXJhbHNcIjogZnVuY3Rpb24obikgeyByZXR1cm4gTnVtYmVyKG49PTEgfHwgbiUxMD09MSA/IDAgOiAxKTsgfVxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICBcIm1sXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNYWxheWFsYW1cIiwgXG4gICAgICAgICAgICAgICAgXCJudW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMSwgXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICBdLCBcbiAgICAgICAgICAgICAgICBcInBsdXJhbHNcIjogZnVuY3Rpb24obikgeyByZXR1cm4gTnVtYmVyKG4gIT0gMSk7IH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJtblwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTW9uZ29saWFuXCIsIFxuICAgICAgICAgICAgICAgIFwibnVtYmVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDEsIFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgXSwgXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxzXCI6IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIE51bWJlcihuICE9IDEpOyB9XG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIFwibW5rXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNYW5kaW5rYVwiLCBcbiAgICAgICAgICAgICAgICBcIm51bWJlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAwLCBcbiAgICAgICAgICAgICAgICAgICAgMSwgXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICBdLCBcbiAgICAgICAgICAgICAgICBcInBsdXJhbHNcIjogZnVuY3Rpb24obikgeyByZXR1cm4gTnVtYmVyKG4gPT0gMCA/IDAgOiBuPT0xID8gMSA6IDIpOyB9XG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIFwibXJcIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1hcmF0aGlcIiwgXG4gICAgICAgICAgICAgICAgXCJudW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMSwgXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICBdLCBcbiAgICAgICAgICAgICAgICBcInBsdXJhbHNcIjogZnVuY3Rpb24obikgeyByZXR1cm4gTnVtYmVyKG4gIT0gMSk7IH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJtc1wiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTWFsYXlcIiwgXG4gICAgICAgICAgICAgICAgXCJudW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgICAgIF0sIFxuICAgICAgICAgICAgICAgIFwicGx1cmFsc1wiOiBmdW5jdGlvbihuKSB7IHJldHVybiAwOyB9XG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIFwibXRcIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk1hbHRlc2VcIiwgXG4gICAgICAgICAgICAgICAgXCJudW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMSwgXG4gICAgICAgICAgICAgICAgICAgIDIsIFxuICAgICAgICAgICAgICAgICAgICAxMSwgXG4gICAgICAgICAgICAgICAgICAgIDIwXG4gICAgICAgICAgICAgICAgXSwgXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxzXCI6IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIE51bWJlcihuPT0xID8gMCA6IG49PT0wIHx8ICggbiUxMDA+MSAmJiBuJTEwMDwxMSkgPyAxIDogKG4lMTAwPjEwICYmIG4lMTAwPDIwICkgPyAyIDogMyk7IH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJuYWhcIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk5haHVhdGxcIiwgXG4gICAgICAgICAgICAgICAgXCJudW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMSwgXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICBdLCBcbiAgICAgICAgICAgICAgICBcInBsdXJhbHNcIjogZnVuY3Rpb24obikgeyByZXR1cm4gTnVtYmVyKG4gIT0gMSk7IH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJuYXBcIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk5lYXBvbGl0YW5cIiwgXG4gICAgICAgICAgICAgICAgXCJudW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMSwgXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICBdLCBcbiAgICAgICAgICAgICAgICBcInBsdXJhbHNcIjogZnVuY3Rpb24obikgeyByZXR1cm4gTnVtYmVyKG4gIT0gMSk7IH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJuYlwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTm9yd2VnaWFuIEJva21hbFwiLCBcbiAgICAgICAgICAgICAgICBcIm51bWJlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAxLCBcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIF0sIFxuICAgICAgICAgICAgICAgIFwicGx1cmFsc1wiOiBmdW5jdGlvbihuKSB7IHJldHVybiBOdW1iZXIobiAhPSAxKTsgfVxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICBcIm5lXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJOZXBhbGlcIiwgXG4gICAgICAgICAgICAgICAgXCJudW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMSwgXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICBdLCBcbiAgICAgICAgICAgICAgICBcInBsdXJhbHNcIjogZnVuY3Rpb24obikgeyByZXR1cm4gTnVtYmVyKG4gIT0gMSk7IH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJubFwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiRHV0Y2hcIiwgXG4gICAgICAgICAgICAgICAgXCJudW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMSwgXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICBdLCBcbiAgICAgICAgICAgICAgICBcInBsdXJhbHNcIjogZnVuY3Rpb24obikgeyByZXR1cm4gTnVtYmVyKG4gIT0gMSk7IH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJublwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTm9yd2VnaWFuIE55bm9yc2tcIiwgXG4gICAgICAgICAgICAgICAgXCJudW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMSwgXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICBdLCBcbiAgICAgICAgICAgICAgICBcInBsdXJhbHNcIjogZnVuY3Rpb24obikgeyByZXR1cm4gTnVtYmVyKG4gIT0gMSk7IH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJub1wiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTm9yd2VnaWFuXCIsIFxuICAgICAgICAgICAgICAgIFwibnVtYmVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDEsIFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgXSwgXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxzXCI6IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIE51bWJlcihuICE9IDEpOyB9XG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIFwibnNvXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJOb3J0aGVybiBTb3Rob1wiLCBcbiAgICAgICAgICAgICAgICBcIm51bWJlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAxLCBcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIF0sIFxuICAgICAgICAgICAgICAgIFwicGx1cmFsc1wiOiBmdW5jdGlvbihuKSB7IHJldHVybiBOdW1iZXIobiAhPSAxKTsgfVxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICBcIm9jXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJPY2NpdGFuXCIsIFxuICAgICAgICAgICAgICAgIFwibnVtYmVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDEsIFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgXSwgXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxzXCI6IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIE51bWJlcihuID4gMSk7IH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJvclwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiT3JpeWFcIiwgXG4gICAgICAgICAgICAgICAgXCJudW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMiwgXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICBdLCBcbiAgICAgICAgICAgICAgICBcInBsdXJhbHNcIjogZnVuY3Rpb24obikgeyByZXR1cm4gTnVtYmVyKG4gIT0gMSk7IH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJwYVwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiUHVuamFiaVwiLCBcbiAgICAgICAgICAgICAgICBcIm51bWJlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAxLCBcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIF0sIFxuICAgICAgICAgICAgICAgIFwicGx1cmFsc1wiOiBmdW5jdGlvbihuKSB7IHJldHVybiBOdW1iZXIobiAhPSAxKTsgfVxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICBcInBhcFwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiUGFwaWFtZW50b1wiLCBcbiAgICAgICAgICAgICAgICBcIm51bWJlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAxLCBcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIF0sIFxuICAgICAgICAgICAgICAgIFwicGx1cmFsc1wiOiBmdW5jdGlvbihuKSB7IHJldHVybiBOdW1iZXIobiAhPSAxKTsgfVxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICBcInBsXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJQb2xpc2hcIiwgXG4gICAgICAgICAgICAgICAgXCJudW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMSwgXG4gICAgICAgICAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAgICAgICAgIDVcbiAgICAgICAgICAgICAgICBdLCBcbiAgICAgICAgICAgICAgICBcInBsdXJhbHNcIjogZnVuY3Rpb24obikgeyByZXR1cm4gTnVtYmVyKG49PTEgPyAwIDogbiUxMD49MiAmJiBuJTEwPD00ICYmIChuJTEwMDwxMCB8fCBuJTEwMD49MjApID8gMSA6IDIpOyB9XG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIFwicG1zXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJQaWVtb250ZXNlXCIsIFxuICAgICAgICAgICAgICAgIFwibnVtYmVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDEsIFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgXSwgXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxzXCI6IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIE51bWJlcihuICE9IDEpOyB9XG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIFwicHNcIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlBhc2h0b1wiLCBcbiAgICAgICAgICAgICAgICBcIm51bWJlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAxLCBcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIF0sIFxuICAgICAgICAgICAgICAgIFwicGx1cmFsc1wiOiBmdW5jdGlvbihuKSB7IHJldHVybiBOdW1iZXIobiAhPSAxKTsgfVxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICBcInB0XCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJQb3J0dWd1ZXNlXCIsIFxuICAgICAgICAgICAgICAgIFwibnVtYmVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDEsIFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgXSwgXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxzXCI6IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIE51bWJlcihuICE9IDEpOyB9XG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIFwicHRfYnJcIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIkJyYXppbGlhbiBQb3J0dWd1ZXNlXCIsIFxuICAgICAgICAgICAgICAgIFwibnVtYmVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDEsIFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgXSwgXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxzXCI6IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIE51bWJlcihuICE9IDEpOyB9XG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIFwicm1cIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlJvbWFuc2hcIiwgXG4gICAgICAgICAgICAgICAgXCJudW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMSwgXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICBdLCBcbiAgICAgICAgICAgICAgICBcInBsdXJhbHNcIjogZnVuY3Rpb24obikgeyByZXR1cm4gTnVtYmVyKG4gIT0gMSk7IH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJyb1wiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiUm9tYW5pYW5cIiwgXG4gICAgICAgICAgICAgICAgXCJudW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMSwgXG4gICAgICAgICAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAgICAgICAgIDIwXG4gICAgICAgICAgICAgICAgXSwgXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxzXCI6IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIE51bWJlcihuPT0xID8gMCA6IChuPT09MCB8fCAobiUxMDAgPiAwICYmIG4lMTAwIDwgMjApKSA/IDEgOiAyKTsgfVxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICBcInJ1XCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJSdXNzaWFuXCIsIFxuICAgICAgICAgICAgICAgIFwibnVtYmVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDEsIFxuICAgICAgICAgICAgICAgICAgICAyLCBcbiAgICAgICAgICAgICAgICAgICAgNVxuICAgICAgICAgICAgICAgIF0sIFxuICAgICAgICAgICAgICAgIFwicGx1cmFsc1wiOiBmdW5jdGlvbihuKSB7IHJldHVybiBOdW1iZXIobiUxMD09MSAmJiBuJTEwMCE9MTEgPyAwIDogbiUxMD49MiAmJiBuJTEwPD00ICYmIChuJTEwMDwxMCB8fCBuJTEwMD49MjApID8gMSA6IDIpOyB9XG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIFwic2FoXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJZYWt1dFwiLCBcbiAgICAgICAgICAgICAgICBcIm51bWJlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgXSwgXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxzXCI6IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIDA7IH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJzY29cIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlNjb3RzXCIsIFxuICAgICAgICAgICAgICAgIFwibnVtYmVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDEsIFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgXSwgXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxzXCI6IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIE51bWJlcihuICE9IDEpOyB9XG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIFwic2VcIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIk5vcnRoZXJuIFNhbWlcIiwgXG4gICAgICAgICAgICAgICAgXCJudW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMSwgXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICBdLCBcbiAgICAgICAgICAgICAgICBcInBsdXJhbHNcIjogZnVuY3Rpb24obikgeyByZXR1cm4gTnVtYmVyKG4gIT0gMSk7IH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJzaVwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiU2luaGFsYVwiLCBcbiAgICAgICAgICAgICAgICBcIm51bWJlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAxLCBcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIF0sIFxuICAgICAgICAgICAgICAgIFwicGx1cmFsc1wiOiBmdW5jdGlvbihuKSB7IHJldHVybiBOdW1iZXIobiAhPSAxKTsgfVxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICBcInNrXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJTbG92YWtcIiwgXG4gICAgICAgICAgICAgICAgXCJudW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMSwgXG4gICAgICAgICAgICAgICAgICAgIDIsIFxuICAgICAgICAgICAgICAgICAgICA1XG4gICAgICAgICAgICAgICAgXSwgXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxzXCI6IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIE51bWJlcigobj09MSkgPyAwIDogKG4+PTIgJiYgbjw9NCkgPyAxIDogMik7IH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJzbFwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiU2xvdmVuaWFuXCIsIFxuICAgICAgICAgICAgICAgIFwibnVtYmVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDUsIFxuICAgICAgICAgICAgICAgICAgICAxLCBcbiAgICAgICAgICAgICAgICAgICAgMiwgXG4gICAgICAgICAgICAgICAgICAgIDNcbiAgICAgICAgICAgICAgICBdLCBcbiAgICAgICAgICAgICAgICBcInBsdXJhbHNcIjogZnVuY3Rpb24obikgeyByZXR1cm4gTnVtYmVyKG4lMTAwPT0xID8gMSA6IG4lMTAwPT0yID8gMiA6IG4lMTAwPT0zIHx8IG4lMTAwPT00ID8gMyA6IDApOyB9XG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIFwic29cIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlNvbWFsaVwiLCBcbiAgICAgICAgICAgICAgICBcIm51bWJlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAxLCBcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIF0sIFxuICAgICAgICAgICAgICAgIFwicGx1cmFsc1wiOiBmdW5jdGlvbihuKSB7IHJldHVybiBOdW1iZXIobiAhPSAxKTsgfVxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICBcInNvblwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiU29uZ2hheVwiLCBcbiAgICAgICAgICAgICAgICBcIm51bWJlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAxLCBcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIF0sIFxuICAgICAgICAgICAgICAgIFwicGx1cmFsc1wiOiBmdW5jdGlvbihuKSB7IHJldHVybiBOdW1iZXIobiAhPSAxKTsgfVxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICBcInNxXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJBbGJhbmlhblwiLCBcbiAgICAgICAgICAgICAgICBcIm51bWJlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAxLCBcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIF0sIFxuICAgICAgICAgICAgICAgIFwicGx1cmFsc1wiOiBmdW5jdGlvbihuKSB7IHJldHVybiBOdW1iZXIobiAhPSAxKTsgfVxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICBcInNyXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJTZXJiaWFuXCIsIFxuICAgICAgICAgICAgICAgIFwibnVtYmVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDEsIFxuICAgICAgICAgICAgICAgICAgICAyLFxuICAgICAgICAgICAgICAgICAgICA1XG4gICAgICAgICAgICAgICAgXSwgXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxzXCI6IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIE51bWJlcihuJTEwPT0xICYmIG4lMTAwIT0xMSA/IDAgOiBuJTEwPj0yICYmIG4lMTA8PTQgJiYgKG4lMTAwPDEwIHx8IG4lMTAwPj0yMCkgPyAxIDogMik7IH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJzdVwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiU3VuZGFuZXNlXCIsIFxuICAgICAgICAgICAgICAgIFwibnVtYmVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICBdLCBcbiAgICAgICAgICAgICAgICBcInBsdXJhbHNcIjogZnVuY3Rpb24obikgeyByZXR1cm4gMDsgfVxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICBcInN2XCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJTd2VkaXNoXCIsIFxuICAgICAgICAgICAgICAgIFwibnVtYmVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDEsIFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgXSwgXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxzXCI6IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIE51bWJlcihuICE9IDEpOyB9XG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIFwic3dcIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlN3YWhpbGlcIiwgXG4gICAgICAgICAgICAgICAgXCJudW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMSwgXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICBdLCBcbiAgICAgICAgICAgICAgICBcInBsdXJhbHNcIjogZnVuY3Rpb24obikgeyByZXR1cm4gTnVtYmVyKG4gIT0gMSk7IH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJ0YVwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVGFtaWxcIiwgXG4gICAgICAgICAgICAgICAgXCJudW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMSwgXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICBdLCBcbiAgICAgICAgICAgICAgICBcInBsdXJhbHNcIjogZnVuY3Rpb24obikgeyByZXR1cm4gTnVtYmVyKG4gIT0gMSk7IH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJ0ZVwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVGVsdWd1XCIsIFxuICAgICAgICAgICAgICAgIFwibnVtYmVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDEsIFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgXSwgXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxzXCI6IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIE51bWJlcihuICE9IDEpOyB9XG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIFwidGdcIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlRhamlrXCIsIFxuICAgICAgICAgICAgICAgIFwibnVtYmVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDEsIFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgXSwgXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxzXCI6IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIE51bWJlcihuID4gMSk7IH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJ0aFwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVGhhaVwiLCBcbiAgICAgICAgICAgICAgICBcIm51bWJlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgXSwgXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxzXCI6IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIDA7IH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJ0aVwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVGlncmlueWFcIiwgXG4gICAgICAgICAgICAgICAgXCJudW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMSwgXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICBdLCBcbiAgICAgICAgICAgICAgICBcInBsdXJhbHNcIjogZnVuY3Rpb24obikgeyByZXR1cm4gTnVtYmVyKG4gPiAxKTsgfVxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICBcInRrXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJUdXJrbWVuXCIsIFxuICAgICAgICAgICAgICAgIFwibnVtYmVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDEsIFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgXSwgXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxzXCI6IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIE51bWJlcihuICE9IDEpOyB9XG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIFwidHJcIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlR1cmtpc2hcIiwgXG4gICAgICAgICAgICAgICAgXCJudW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMSwgXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICBdLCBcbiAgICAgICAgICAgICAgICBcInBsdXJhbHNcIjogZnVuY3Rpb24obikgeyByZXR1cm4gTnVtYmVyKG4gPiAxKTsgfVxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICBcInR0XCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJUYXRhclwiLCBcbiAgICAgICAgICAgICAgICBcIm51bWJlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgXSwgXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxzXCI6IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIDA7IH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJ1Z1wiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVXlnaHVyXCIsIFxuICAgICAgICAgICAgICAgIFwibnVtYmVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICBdLCBcbiAgICAgICAgICAgICAgICBcInBsdXJhbHNcIjogZnVuY3Rpb24obikgeyByZXR1cm4gMDsgfVxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICBcInVrXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJVa3JhaW5pYW5cIiwgXG4gICAgICAgICAgICAgICAgXCJudW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMSwgXG4gICAgICAgICAgICAgICAgICAgIDIsXG4gICAgICAgICAgICAgICAgICAgIDVcbiAgICAgICAgICAgICAgICBdLCBcbiAgICAgICAgICAgICAgICBcInBsdXJhbHNcIjogZnVuY3Rpb24obikgeyByZXR1cm4gTnVtYmVyKG4lMTA9PTEgJiYgbiUxMDAhPTExID8gMCA6IG4lMTA+PTIgJiYgbiUxMDw9NCAmJiAobiUxMDA8MTAgfHwgbiUxMDA+PTIwKSA/IDEgOiAyKTsgfVxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICBcInVyXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJVcmR1XCIsIFxuICAgICAgICAgICAgICAgIFwibnVtYmVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDEsIFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgXSwgXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxzXCI6IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIE51bWJlcihuICE9IDEpOyB9XG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIFwidXpcIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlV6YmVrXCIsIFxuICAgICAgICAgICAgICAgIFwibnVtYmVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDEsIFxuICAgICAgICAgICAgICAgICAgICAyXG4gICAgICAgICAgICAgICAgXSwgXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxzXCI6IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIE51bWJlcihuID4gMSk7IH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJ2aVwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVmlldG5hbWVzZVwiLCBcbiAgICAgICAgICAgICAgICBcIm51bWJlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgXSwgXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxzXCI6IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIDA7IH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJ3YVwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiV2FsbG9vblwiLCBcbiAgICAgICAgICAgICAgICBcIm51bWJlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAxLCBcbiAgICAgICAgICAgICAgICAgICAgMlxuICAgICAgICAgICAgICAgIF0sIFxuICAgICAgICAgICAgICAgIFwicGx1cmFsc1wiOiBmdW5jdGlvbihuKSB7IHJldHVybiBOdW1iZXIobiA+IDEpOyB9XG4gICAgICAgICAgICB9LCBcbiAgICAgICAgICAgIFwid29cIjoge1xuICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIldvbG9mXCIsIFxuICAgICAgICAgICAgICAgIFwibnVtYmVyc1wiOiBbXG4gICAgICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgICBdLCBcbiAgICAgICAgICAgICAgICBcInBsdXJhbHNcIjogZnVuY3Rpb24obikgeyByZXR1cm4gMDsgfVxuICAgICAgICAgICAgfSwgXG4gICAgICAgICAgICBcInlvXCI6IHtcbiAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJZb3J1YmFcIiwgXG4gICAgICAgICAgICAgICAgXCJudW1iZXJzXCI6IFtcbiAgICAgICAgICAgICAgICAgICAgMSwgXG4gICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICBdLCBcbiAgICAgICAgICAgICAgICBcInBsdXJhbHNcIjogZnVuY3Rpb24obikgeyByZXR1cm4gTnVtYmVyKG4gIT0gMSk7IH1cbiAgICAgICAgICAgIH0sIFxuICAgICAgICAgICAgXCJ6aFwiOiB7XG4gICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiQ2hpbmVzZVwiLCBcbiAgICAgICAgICAgICAgICBcIm51bWJlcnNcIjogW1xuICAgICAgICAgICAgICAgICAgICAxXG4gICAgICAgICAgICAgICAgXSwgXG4gICAgICAgICAgICAgICAgXCJwbHVyYWxzXCI6IGZ1bmN0aW9uKG4pIHsgcmV0dXJuIDA7IH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICBcbiAgICAgICAgLy8gZm9yIGRlbW9uc3RyYXRpb24gb25seSBzbCBhbmQgYXIgaXMgYWRkZWQgYnV0IHlvdSBjYW4gYWRkIHlvdXIgb3duIHBsdXJhbEV4dGVuc2lvbnNcbiAgICAgICAgYWRkUnVsZTogZnVuY3Rpb24obG5nLCBvYmopIHtcbiAgICAgICAgICAgIHBsdXJhbEV4dGVuc2lvbnMucnVsZXNbbG5nXSA9IG9iajsgICAgXG4gICAgICAgIH0sXG4gICAgXG4gICAgICAgIHNldEN1cnJlbnRMbmc6IGZ1bmN0aW9uKGxuZykge1xuICAgICAgICAgICAgaWYgKCFwbHVyYWxFeHRlbnNpb25zLmN1cnJlbnRSdWxlIHx8IHBsdXJhbEV4dGVuc2lvbnMuY3VycmVudFJ1bGUubG5nICE9PSBsbmcpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFydHMgPSBsbmcuc3BsaXQoJy0nKTtcbiAgICBcbiAgICAgICAgICAgICAgICBwbHVyYWxFeHRlbnNpb25zLmN1cnJlbnRSdWxlID0ge1xuICAgICAgICAgICAgICAgICAgICBsbmc6IGxuZyxcbiAgICAgICAgICAgICAgICAgICAgcnVsZTogcGx1cmFsRXh0ZW5zaW9ucy5ydWxlc1twYXJ0c1swXV1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIFxuICAgICAgICBnZXQ6IGZ1bmN0aW9uKGxuZywgY291bnQpIHtcbiAgICAgICAgICAgIHZhciBwYXJ0cyA9IGxuZy5zcGxpdCgnLScpO1xuICAgIFxuICAgICAgICAgICAgZnVuY3Rpb24gZ2V0UmVzdWx0KGwsIGMpIHtcbiAgICAgICAgICAgICAgICB2YXIgZXh0O1xuICAgICAgICAgICAgICAgIGlmIChwbHVyYWxFeHRlbnNpb25zLmN1cnJlbnRSdWxlICYmIHBsdXJhbEV4dGVuc2lvbnMuY3VycmVudFJ1bGUubG5nID09PSBsbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgZXh0ID0gcGx1cmFsRXh0ZW5zaW9ucy5jdXJyZW50UnVsZS5ydWxlOyBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBleHQgPSBwbHVyYWxFeHRlbnNpb25zLnJ1bGVzW2xdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpID0gZXh0LnBsdXJhbHMoYyk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBudW1iZXIgPSBleHQubnVtYmVyc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4dC5udW1iZXJzLmxlbmd0aCA9PT0gMiAmJiBleHQubnVtYmVyc1swXSA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG51bWJlciA9PT0gMikgeyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBudW1iZXIgPSAtMTsgLy8gcmVndWxhciBwbHVyYWxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAobnVtYmVyID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyID0gMTsgLy8gc2luZ3VsYXJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfS8vY29uc29sZS5sb2coY291bnQgKyAnLScgKyBudW1iZXIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVtYmVyO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjID09PSAxID8gJzEnIDogJy0xJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBnZXRSZXN1bHQocGFydHNbMF0sIGNvdW50KTtcbiAgICAgICAgfVxuICAgIFxuICAgIH07XG4gICAgdmFyIHBvc3RQcm9jZXNzb3JzID0ge307XG4gICAgdmFyIGFkZFBvc3RQcm9jZXNzb3IgPSBmdW5jdGlvbihuYW1lLCBmYykge1xuICAgICAgICBwb3N0UHJvY2Vzc29yc1tuYW1lXSA9IGZjO1xuICAgIH07XG4gICAgLy8gc3ByaW50ZiBzdXBwb3J0XG4gICAgdmFyIHNwcmludGYgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgIGZ1bmN0aW9uIGdldF90eXBlKHZhcmlhYmxlKSB7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhcmlhYmxlKS5zbGljZSg4LCAtMSkudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBmdW5jdGlvbiBzdHJfcmVwZWF0KGlucHV0LCBtdWx0aXBsaWVyKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBvdXRwdXQgPSBbXTsgbXVsdGlwbGllciA+IDA7IG91dHB1dFstLW11bHRpcGxpZXJdID0gaW5wdXQpIHsvKiBkbyBub3RoaW5nICovfVxuICAgICAgICAgICAgcmV0dXJuIG91dHB1dC5qb2luKCcnKTtcbiAgICAgICAgfVxuICAgIFxuICAgICAgICB2YXIgc3RyX2Zvcm1hdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCFzdHJfZm9ybWF0LmNhY2hlLmhhc093blByb3BlcnR5KGFyZ3VtZW50c1swXSkpIHtcbiAgICAgICAgICAgICAgICBzdHJfZm9ybWF0LmNhY2hlW2FyZ3VtZW50c1swXV0gPSBzdHJfZm9ybWF0LnBhcnNlKGFyZ3VtZW50c1swXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc3RyX2Zvcm1hdC5mb3JtYXQuY2FsbChudWxsLCBzdHJfZm9ybWF0LmNhY2hlW2FyZ3VtZW50c1swXV0sIGFyZ3VtZW50cyk7XG4gICAgICAgIH07XG4gICAgXG4gICAgICAgIHN0cl9mb3JtYXQuZm9ybWF0ID0gZnVuY3Rpb24ocGFyc2VfdHJlZSwgYXJndikge1xuICAgICAgICAgICAgdmFyIGN1cnNvciA9IDEsIHRyZWVfbGVuZ3RoID0gcGFyc2VfdHJlZS5sZW5ndGgsIG5vZGVfdHlwZSA9ICcnLCBhcmcsIG91dHB1dCA9IFtdLCBpLCBrLCBtYXRjaCwgcGFkLCBwYWRfY2hhcmFjdGVyLCBwYWRfbGVuZ3RoO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHRyZWVfbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBub2RlX3R5cGUgPSBnZXRfdHlwZShwYXJzZV90cmVlW2ldKTtcbiAgICAgICAgICAgICAgICBpZiAobm9kZV90eXBlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBvdXRwdXQucHVzaChwYXJzZV90cmVlW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAobm9kZV90eXBlID09PSAnYXJyYXknKSB7XG4gICAgICAgICAgICAgICAgICAgIG1hdGNoID0gcGFyc2VfdHJlZVtpXTsgLy8gY29udmVuaWVuY2UgcHVycG9zZXMgb25seVxuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hbMl0pIHsgLy8ga2V5d29yZCBhcmd1bWVudFxuICAgICAgICAgICAgICAgICAgICAgICAgYXJnID0gYXJndltjdXJzb3JdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChrID0gMDsgayA8IG1hdGNoWzJdLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFhcmcuaGFzT3duUHJvcGVydHkobWF0Y2hbMl1ba10pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93KHNwcmludGYoJ1tzcHJpbnRmXSBwcm9wZXJ0eSBcIiVzXCIgZG9lcyBub3QgZXhpc3QnLCBtYXRjaFsyXVtrXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcmcgPSBhcmdbbWF0Y2hbMl1ba11dO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKG1hdGNoWzFdKSB7IC8vIHBvc2l0aW9uYWwgYXJndW1lbnQgKGV4cGxpY2l0KVxuICAgICAgICAgICAgICAgICAgICAgICAgYXJnID0gYXJndlttYXRjaFsxXV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7IC8vIHBvc2l0aW9uYWwgYXJndW1lbnQgKGltcGxpY2l0KVxuICAgICAgICAgICAgICAgICAgICAgICAgYXJnID0gYXJndltjdXJzb3IrK107XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgaWYgKC9bXnNdLy50ZXN0KG1hdGNoWzhdKSAmJiAoZ2V0X3R5cGUoYXJnKSAhPSAnbnVtYmVyJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRocm93KHNwcmludGYoJ1tzcHJpbnRmXSBleHBlY3RpbmcgbnVtYmVyIGJ1dCBmb3VuZCAlcycsIGdldF90eXBlKGFyZykpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKG1hdGNoWzhdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdiJzogYXJnID0gYXJnLnRvU3RyaW5nKDIpOyBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2MnOiBhcmcgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGFyZyk7IGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZCc6IGFyZyA9IHBhcnNlSW50KGFyZywgMTApOyBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2UnOiBhcmcgPSBtYXRjaFs3XSA/IGFyZy50b0V4cG9uZW50aWFsKG1hdGNoWzddKSA6IGFyZy50b0V4cG9uZW50aWFsKCk7IGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZic6IGFyZyA9IG1hdGNoWzddID8gcGFyc2VGbG9hdChhcmcpLnRvRml4ZWQobWF0Y2hbN10pIDogcGFyc2VGbG9hdChhcmcpOyBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ28nOiBhcmcgPSBhcmcudG9TdHJpbmcoOCk7IGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncyc6IGFyZyA9ICgoYXJnID0gU3RyaW5nKGFyZykpICYmIG1hdGNoWzddID8gYXJnLnN1YnN0cmluZygwLCBtYXRjaFs3XSkgOiBhcmcpOyBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3UnOiBhcmcgPSBNYXRoLmFicyhhcmcpOyBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3gnOiBhcmcgPSBhcmcudG9TdHJpbmcoMTYpOyBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1gnOiBhcmcgPSBhcmcudG9TdHJpbmcoMTYpLnRvVXBwZXJDYXNlKCk7IGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGFyZyA9ICgvW2RlZl0vLnRlc3QobWF0Y2hbOF0pICYmIG1hdGNoWzNdICYmIGFyZyA+PSAwID8gJysnKyBhcmcgOiBhcmcpO1xuICAgICAgICAgICAgICAgICAgICBwYWRfY2hhcmFjdGVyID0gbWF0Y2hbNF0gPyBtYXRjaFs0XSA9PSAnMCcgPyAnMCcgOiBtYXRjaFs0XS5jaGFyQXQoMSkgOiAnICc7XG4gICAgICAgICAgICAgICAgICAgIHBhZF9sZW5ndGggPSBtYXRjaFs2XSAtIFN0cmluZyhhcmcpLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgcGFkID0gbWF0Y2hbNl0gPyBzdHJfcmVwZWF0KHBhZF9jaGFyYWN0ZXIsIHBhZF9sZW5ndGgpIDogJyc7XG4gICAgICAgICAgICAgICAgICAgIG91dHB1dC5wdXNoKG1hdGNoWzVdID8gYXJnICsgcGFkIDogcGFkICsgYXJnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gb3V0cHV0LmpvaW4oJycpO1xuICAgICAgICB9O1xuICAgIFxuICAgICAgICBzdHJfZm9ybWF0LmNhY2hlID0ge307XG4gICAgXG4gICAgICAgIHN0cl9mb3JtYXQucGFyc2UgPSBmdW5jdGlvbihmbXQpIHtcbiAgICAgICAgICAgIHZhciBfZm10ID0gZm10LCBtYXRjaCA9IFtdLCBwYXJzZV90cmVlID0gW10sIGFyZ19uYW1lcyA9IDA7XG4gICAgICAgICAgICB3aGlsZSAoX2ZtdCkge1xuICAgICAgICAgICAgICAgIGlmICgobWF0Y2ggPSAvXlteXFx4MjVdKy8uZXhlYyhfZm10KSkgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VfdHJlZS5wdXNoKG1hdGNoWzBdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoKG1hdGNoID0gL15cXHgyNXsyfS8uZXhlYyhfZm10KSkgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyc2VfdHJlZS5wdXNoKCclJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKChtYXRjaCA9IC9eXFx4MjUoPzooWzEtOV1cXGQqKVxcJHxcXCgoW15cXCldKylcXCkpPyhcXCspPygwfCdbXiRdKT8oLSk/KFxcZCspPyg/OlxcLihcXGQrKSk/KFtiLWZvc3V4WF0pLy5leGVjKF9mbXQpKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2hbMl0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyZ19uYW1lcyB8PSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZpZWxkX2xpc3QgPSBbXSwgcmVwbGFjZW1lbnRfZmllbGQgPSBtYXRjaFsyXSwgZmllbGRfbWF0Y2ggPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgoZmllbGRfbWF0Y2ggPSAvXihbYS16X11bYS16X1xcZF0qKS9pLmV4ZWMocmVwbGFjZW1lbnRfZmllbGQpKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkX2xpc3QucHVzaChmaWVsZF9tYXRjaFsxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKChyZXBsYWNlbWVudF9maWVsZCA9IHJlcGxhY2VtZW50X2ZpZWxkLnN1YnN0cmluZyhmaWVsZF9tYXRjaFswXS5sZW5ndGgpKSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChmaWVsZF9tYXRjaCA9IC9eXFwuKFthLXpfXVthLXpfXFxkXSopL2kuZXhlYyhyZXBsYWNlbWVudF9maWVsZCkpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmaWVsZF9saXN0LnB1c2goZmllbGRfbWF0Y2hbMV0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKChmaWVsZF9tYXRjaCA9IC9eXFxbKFxcZCspXFxdLy5leGVjKHJlcGxhY2VtZW50X2ZpZWxkKSkgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkX2xpc3QucHVzaChmaWVsZF9tYXRjaFsxXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aHJvdygnW3NwcmludGZdIGh1aD8nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93KCdbc3ByaW50Zl0gaHVoPycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hbMl0gPSBmaWVsZF9saXN0O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJnX25hbWVzIHw9IDI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGFyZ19uYW1lcyA9PT0gMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3coJ1tzcHJpbnRmXSBtaXhpbmcgcG9zaXRpb25hbCBhbmQgbmFtZWQgcGxhY2Vob2xkZXJzIGlzIG5vdCAoeWV0KSBzdXBwb3J0ZWQnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBwYXJzZV90cmVlLnB1c2gobWF0Y2gpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3coJ1tzcHJpbnRmXSBodWg/Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF9mbXQgPSBfZm10LnN1YnN0cmluZyhtYXRjaFswXS5sZW5ndGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlX3RyZWU7XG4gICAgICAgIH07XG4gICAgXG4gICAgICAgIHJldHVybiBzdHJfZm9ybWF0O1xuICAgIH0pKCk7XG4gICAgXG4gICAgdmFyIHZzcHJpbnRmID0gZnVuY3Rpb24oZm10LCBhcmd2KSB7XG4gICAgICAgIGFyZ3YudW5zaGlmdChmbXQpO1xuICAgICAgICByZXR1cm4gc3ByaW50Zi5hcHBseShudWxsLCBhcmd2KTtcbiAgICB9O1xuICAgIFxuICAgIGFkZFBvc3RQcm9jZXNzb3IoXCJzcHJpbnRmXCIsIGZ1bmN0aW9uKHZhbCwga2V5LCBvcHRzKSB7XG4gICAgICAgIGlmICghb3B0cy5zcHJpbnRmKSByZXR1cm4gdmFsO1xuICAgIFxuICAgICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5hcHBseShvcHRzLnNwcmludGYpID09PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICAgICAgICByZXR1cm4gdnNwcmludGYodmFsLCBvcHRzLnNwcmludGYpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBvcHRzLnNwcmludGYgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gc3ByaW50Zih2YWwsIG9wdHMuc3ByaW50Zik7XG4gICAgICAgIH1cbiAgICBcbiAgICAgICAgcmV0dXJuIHZhbDtcbiAgICB9KTtcbiAgICAvLyBwdWJsaWMgYXBpIGludGVyZmFjZVxuICAgIFRBUGkxOG5leHQuaW5pdCA9IGluaXQ7XG4gICAgVEFQaTE4bmV4dC5zZXRMbmcgPSBzZXRMbmc7XG4gICAgVEFQaTE4bmV4dC5wcmVsb2FkID0gcHJlbG9hZDtcbiAgICBUQVBpMThuZXh0LmFkZFJlc291cmNlQnVuZGxlID0gYWRkUmVzb3VyY2VCdW5kbGU7XG4gICAgVEFQaTE4bmV4dC5yZW1vdmVSZXNvdXJjZUJ1bmRsZSA9IHJlbW92ZVJlc291cmNlQnVuZGxlO1xuICAgIFRBUGkxOG5leHQubG9hZE5hbWVzcGFjZSA9IGxvYWROYW1lc3BhY2U7XG4gICAgVEFQaTE4bmV4dC5sb2FkTmFtZXNwYWNlcyA9IGxvYWROYW1lc3BhY2VzO1xuICAgIFRBUGkxOG5leHQuc2V0RGVmYXVsdE5hbWVzcGFjZSA9IHNldERlZmF1bHROYW1lc3BhY2U7XG4gICAgVEFQaTE4bmV4dC50ID0gdHJhbnNsYXRlO1xuICAgIFRBUGkxOG5leHQudHJhbnNsYXRlID0gdHJhbnNsYXRlO1xuICAgIFRBUGkxOG5leHQuZXhpc3RzID0gZXhpc3RzO1xuICAgIFRBUGkxOG5leHQuZGV0ZWN0TGFuZ3VhZ2UgPSBmLmRldGVjdExhbmd1YWdlO1xuICAgIFRBUGkxOG5leHQucGx1cmFsRXh0ZW5zaW9ucyA9IHBsdXJhbEV4dGVuc2lvbnM7XG4gICAgVEFQaTE4bmV4dC5zeW5jID0gc3luYztcbiAgICBUQVBpMThuZXh0LmZ1bmN0aW9ucyA9IGY7XG4gICAgVEFQaTE4bmV4dC5sbmcgPSBsbmc7XG4gICAgVEFQaTE4bmV4dC5hZGRQb3N0UHJvY2Vzc29yID0gYWRkUG9zdFByb2Nlc3NvcjtcbiAgICBUQVBpMThuZXh0Lm9wdGlvbnMgPSBvO1xufSkoKTtcbiIsIi8vIFRoZSBnbG9iYWxzIG9iamVjdCB3aWxsIGJlIGFjY2Vzc2libGUgdG8gdGhlIGJ1aWxkIHBsdWdpbiwgdGhlIHNlcnZlciBhbmRcbi8vIHRoZSBjbGllbnRcblxuZXhwb3J0IGNvbnN0IGdsb2JhbHMgPSB7XG5cdGZhbGxiYWNrX2xhbmd1YWdlOiAnZW4nLFxuXHRsYW5nYXVnZXNfdGFnc19yZWdleDogJ1thLXpdezIsM30oPzotW2EtekEtWl17NH0pPyg/Oi1bQS1aXXsyLDN9KT8nLFxuXHRwcm9qZWN0X3RyYW5zbGF0aW9uc19kb21haW46ICdwcm9qZWN0Jyxcblx0YnJvd3Nlcl9wYXRoOiAnL3RhcC1pMThuJyxcblx0ZGVidWc6IGZhbHNlLFxufTtcbiIsImltcG9ydCBUQVBpMThuZXh0IGZyb20gJy4uL3RhcF9pMThuZXh0L3RhcF9pMThuZXh0LTEuNy4zLmpzJ1xuaW1wb3J0IHsgZ2xvYmFscyB9IGZyb20gJy4vZ2xvYmFscydcblxuZmFsbGJhY2tfbGFuZ3VhZ2UgPSBnbG9iYWxzLmZhbGxiYWNrX2xhbmd1YWdlXG5cblRBUGkxOG5leHQuaW5pdCh7IHJlc1N0b3JlOiB7fSwgZmFsbGJhY2tMbmc6IGdsb2JhbHMuZmFsbGJhY2tfbGFuZ3VhZ2UsIHVzZUNvb2tpZTogZmFsc2UgfSk7XG5cbmV4cG9ydCBjbGFzcyBUQVBpMThuQmFzZSBleHRlbmRzIEV2ZW50RW1pdHRlclxuICBfbG9hZGVkX2xhbmdfc2Vzc2lvbl9rZXk6IFwiVEFQaTE4bjo6bG9hZGVkX2xhbmdcIlxuXG4gIGNvbnN0cnVjdG9yOiAtPlxuICAgIHN1cGVyKClcbiAgICBAX2ZhbGxiYWNrX2xhbmd1YWdlID0gZmFsbGJhY2tfbGFuZ3VhZ2VcblxuICAgIEBfbGFuZ3VhZ2VfY2hhbmdlZF90cmFja2VyID0gbmV3IFRyYWNrZXIuRGVwZW5kZW5jeVxuXG4gICAgQF9sb2FkZWRfbGFuZ3VhZ2VzID0gW2ZhbGxiYWNrX2xhbmd1YWdlXSAjIHN0b3JlcyB0aGUgbG9hZGVkIGxhbmd1YWdlcywgdGhlIGZhbGxiYWNrIGxhbmd1YWdlIGlzIGxvYWRlZCBhdXRvbWF0aWNhbGx5XG5cbiAgICBAY29uZiA9IG51bGwgIyBJZiBjb25mIGlzbid0IG51bGwgd2UgYXNzdW1lIHRoYXQgdGFwOmkxOG4gaXMgZW5hYmxlZCBmb3IgdGhlIHByb2plY3QuXG4gICAgICAgICAgICAgICMgV2UgYXNzdW1lIGNvbmYgaXMgdmFsaWQsIHdlIHN0ZXJpbGl6ZSBhbmQgdmFsaWRhdGUgaXQgZHVyaW5nIHRoZSBidWlsZCBwcm9jZXNzLlxuXG4gICAgQHBhY2thZ2VzID0ge30gIyBTdG9yZXMgdGhlIHBhY2thZ2VzJyBwYWNrYWdlLXRhcC5pMThuIGpzb25zXG5cbiAgICBAbGFuZ3VhZ2VzX25hbWVzID0ge30gIyBTdG9yZXMgbGFuZ3VhZ2VzIHRoYXQgd2UndmUgZm91bmQgbGFuZ3VhZ2VzIGZpbGVzIGZvciBpbiB0aGUgcHJvamVjdCBkaXIuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIyBmb3JtYXQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIyAgICBsYW5nX3RhZzogW2xhbmdfbmFtZV9pbl9lbmdsaXNoLCBsYW5nX25hbWVfaW5fbG9jYWxfbGFuZ3VhZ2VdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIyB9XG5cbiAgICBAdHJhbnNsYXRpb25zID0ge30gIyBTdG9yZXMgdGhlIHBhY2thZ2VzL3Byb2plY3QgdHJhbnNsYXRpb25zIC0gU2VydmVyIHNpZGUgb25seVxuICAgICAgICAgICAgICAgICAgICAjIGZhbGxiYWNrX2xhbmd1YWdlIHRyYW5zbGF0aW9ucyBhcmUgbm90IHN0b3JlZCBoZXJlXG5cblxuICAgIGlmIE1ldGVvci5pc0NsaWVudFxuICAgICAgU2Vzc2lvbi5zZXQgQF9sb2FkZWRfbGFuZ19zZXNzaW9uX2tleSwgbnVsbFxuXG4gICAgICBAX2xhbmd1YWdlU3BlY2lmaWNUcmFuc2xhdG9ycyA9IHt9XG4gICAgICBAX2xhbmd1YWdlU3BlY2lmaWNUcmFuc2xhdG9yc1RyYWNrZXJzID0ge31cblxuICAgIGlmIE1ldGVvci5pc1NlcnZlclxuICAgICAgQHNlcnZlcl90cmFuc2xhdG9ycyA9IHt9XG5cbiAgICAgIE1ldGVvci5zdGFydHVwID0+XG4gICAgICAgICMgSWYgdGFwLWkxOG4gaXMgZW5hYmxlZCBmb3IgdGhhdCBwcm9qZWN0XG4gICAgICAgIGlmIEBfZW5hYmxlZCgpXG4gICAgICAgICAgQF9yZWdpc3RlckhUVFBNZXRob2QoKVxuXG4gICAgQF9fID0gQF9nZXRQYWNrYWdlSTE4bmV4dFByb3h5KGdsb2JhbHMucHJvamVjdF90cmFuc2xhdGlvbnNfZG9tYWluKVxuXG4gICAgVEFQaTE4bmV4dC5zZXRMbmcgZmFsbGJhY2tfbGFuZ3VhZ2VcblxuICBfZW5hYmxlOiAoY29uZikgLT5cbiAgICAjIHRhcDppMThuIGdldHMgZW5hYmxlZCBmb3IgYSBwcm9qZWN0IG9uY2UgYSBjb25mIGZpbGUgaXMgc2V0IGZvciBpdC5cbiAgICAjIEl0IGNhbiBiZSBlaXRoZXIgYSBjb25mIG9iamVjdCB0aGF0IHdhcyBzZXQgYnkgcHJvamVjdC10YXAuaTE4biBmaWxlIG9yXG4gICAgIyBhIGRlZmF1bHQgY29uZiwgd2hpY2ggaXMgYmVpbmcgYWRkZWQgaWYgdGhlIHByb2plY3QgaGFzIGxhbmcgZmlsZXNcbiAgICAjICgqLmkxOG4uanNvbikgYnV0IG5vdCBwcm9qZWN0LXRhcC5pMThuXG4gICAgQGNvbmYgPSBjb25mXG5cbiAgICBALl9vbmNlRW5hYmxlZCgpXG5cbiAgX29uY2VFbmFibGVkOiAoKSAtPlxuICAgICMgVGhlIGFyY2ggc3BlY2lmaWMgY29kZSBjYW4gdXNlIHRoaXMgZm9yIHByb2NlZHVyZXMgdGhhdCBzaG91bGQgYmUgcGVyZm9ybWVkIG9uY2VcbiAgICAjIHRhcDppMThuIGdldHMgZW5hYmxlZCAocHJvamVjdCBjb25mIGZpbGUgaXMgYmVpbmcgc2V0KVxuICAgIHJldHVyblxuXG4gIF9lbmFibGVkOiAtPlxuICAgICMgcmVhZCB0aGUgY29tbWVudCBvZiBAY29uZlxuICAgIEBjb25mP1xuXG4gIF9nZXRQYWNrYWdlRG9tYWluOiAocGFja2FnZV9uYW1lKSAtPlxuICAgIHBhY2thZ2VfbmFtZS5yZXBsYWNlKC86L2csIFwiLVwiKVxuXG4gIGFkZFJlc291cmNlQnVuZGxlOiAobGFuZ190YWcsIHBhY2thZ2VfbmFtZSwgdHJhbnNsYXRpb25zKSAtPlxuICAgIFRBUGkxOG5leHQuYWRkUmVzb3VyY2VCdW5kbGUobGFuZ190YWcsIEBfZ2V0UGFja2FnZURvbWFpbihwYWNrYWdlX25hbWUpLCB0cmFuc2xhdGlvbnMpXG5cbiAgX2dldFNwZWNpZmljTGFuZ1RyYW5zbGF0b3I6IChsYW5nKSAtPlxuICAgIGN1cnJlbnRfbGFuZyA9IFRBUGkxOG5leHQubG5nKClcblxuICAgIHRyYW5zbGF0b3IgPSBudWxsXG4gICAgVEFQaTE4bmV4dC5zZXRMbmcgbGFuZywge2ZpeExuZzogdHJ1ZX0sIChsYW5nX3RyYW5zbGF0b3IpID0+XG4gICAgICB0cmFuc2xhdG9yID0gbGFuZ190cmFuc2xhdG9yXG5cbiAgICAjIFJlc3RvcmUgaTE4bmV4dCBsYW5nIHRoYXQgaGFkIGJlZW4gY2hhbmdlZCBpbiB0aGUgcHJvY2VzcyBvZiBnZW5lcmF0aW5nXG4gICAgIyBsYW5nIHNwZWNpZmljIHRyYW5zbGF0b3JcbiAgICBUQVBpMThuZXh0LnNldExuZyBjdXJyZW50X2xhbmdcblxuICAgIHJldHVybiB0cmFuc2xhdG9yXG5cbiAgX2dldFByb2plY3RMYW5ndWFnZXM6ICgpIC0+XG4gICAgIyBSZXR1cm4gYW4gYXJyYXkgb2YgbGFuZ3VhZ2VzIGF2YWlsYWJsZSBmb3IgdGhlIGN1cnJlbnQgcHJvamVjdFxuICAgIGlmIEAuX2VuYWJsZWQoKVxuICAgICAgaWYgXy5pc0FycmF5IEAuY29uZi5zdXBwb3J0ZWRfbGFuZ3VhZ2VzXG4gICAgICAgIHJldHVybiBfLnVuaW9uKFtALl9mYWxsYmFja19sYW5ndWFnZV0sIEAuY29uZi5zdXBwb3J0ZWRfbGFuZ3VhZ2VzKVxuICAgICAgZWxzZVxuICAgICAgICAjIElmIHN1cHBvcnRlZF9sYW5ndWFnZXMgaXMgbnVsbCwgYWxsIHRoZSBsYW5ndWFnZXMgd2UgZm91bmRcbiAgICAgICAgIyB0cmFuc2xhdGlvbnMgZmlsZXMgdG8gaW4gdGhlIHByb2plY3QgbGV2ZWwgYXJlIGNvbnNpZGVyZWQgc3VwcG9ydGVkLlxuICAgICAgICAjIFdlIHVzZSB0aGUgQC5sYW5ndWFnZXNfbmFtZXMgYXJyYXkgdG8gdGVsbCB3aGljaCBsYW5ndWFnZXMgd2UgZm91bmRcbiAgICAgICAgIyBzaW5jZSBmb3IgZXZlcnkgaTE4bi5qc29uIGZpbGUgd2UgZm91bmQgaW4gdGhlIHByb2plY3QgbGV2ZWwgd2UgYWRkXG4gICAgICAgICMgYW4gZW50cnkgZm9yIGl0cyBsYW5ndWFnZSB0byBALmxhbmd1YWdlc19uYW1lcyBpbiB0aGUgYnVpbGQgcHJvY2Vzcy5cbiAgICAgICAgI1xuICAgICAgICAjIFdlIGFsc28ga25vdyBmb3IgY2VydGFpbiB0aGF0IHdoZW4gdGFwLWkxOG4gaXMgZW5hYmxlZCB0aGUgZmFsbGJhY2tcbiAgICAgICAgIyBsYW5nIGlzIGluIEAubGFuZ3VhZ2VzX25hbWVzXG4gICAgICAgIHJldHVybiBfLmtleXMgQC5sYW5ndWFnZXNfbmFtZXNcbiAgICBlbHNlXG4gICAgICByZXR1cm4gW0AuX2ZhbGxiYWNrX2xhbmd1YWdlXVxuXG4gIGdldExhbmd1YWdlczogLT5cbiAgICBpZiBub3QgQC5fZW5hYmxlZCgpXG4gICAgICByZXR1cm4gbnVsbFxuXG4gICAgbGFuZ3VhZ2VzID0ge31cbiAgICBmb3IgbGFuZ190YWcgaW4gQC5fZ2V0UHJvamVjdExhbmd1YWdlcygpXG4gICAgICBsYW5ndWFnZXNbbGFuZ190YWddID1cbiAgICAgICAgbmFtZTogQC5sYW5ndWFnZXNfbmFtZXNbbGFuZ190YWddWzFdXG4gICAgICAgIGVuOiBALmxhbmd1YWdlc19uYW1lc1tsYW5nX3RhZ11bMF1cblxuICAgIGxhbmd1YWdlc1xuXG4gIF9sb2FkTGFuZ0ZpbGVPYmplY3Q6IChsYW5ndWFnZV90YWcsIGRhdGEpIC0+XG4gICAgZm9yIHBhY2thZ2VfbmFtZSwgcGFja2FnZV9rZXlzIG9mIGRhdGFcbiAgICAgICMgVHJhbnNsYXRpb25zIHRoYXQgYXJlIGFkZGVkIGJ5IGxvYWRUcmFuc2xhdGlvbnMoKSBoYXZlIGhpZ2hlciBwcmlvcml0eVxuICAgICAgcGFja2FnZV9rZXlzID0gXy5leHRlbmQoe30sIHBhY2thZ2Vfa2V5cywgQF9sb2FkVHJhbnNsYXRpb25zX2NhY2hlW2xhbmd1YWdlX3RhZ10/W3BhY2thZ2VfbmFtZV0gb3Ige30pXG5cbiAgICAgIEBhZGRSZXNvdXJjZUJ1bmRsZShsYW5ndWFnZV90YWcsIHBhY2thZ2VfbmFtZSwgcGFja2FnZV9rZXlzKVxuXG4gIF9sb2FkVHJhbnNsYXRpb25zX2NhY2hlOiB7fVxuICBsb2FkVHJhbnNsYXRpb25zOiAodHJhbnNsYXRpb25zLCBuYW1lc3BhY2UpIC0+XG4gICAgcHJvamVjdF9sYW5ndWFnZXMgPSBAX2dldFByb2plY3RMYW5ndWFnZXMoKVxuXG4gICAgZm9yIGxhbmd1YWdlX3RhZywgdHJhbnNsYXRpb25fa2V5cyBvZiB0cmFuc2xhdGlvbnNcbiAgICAgIGlmIG5vdCBAX2xvYWRUcmFuc2xhdGlvbnNfY2FjaGVbbGFuZ3VhZ2VfdGFnXT9cbiAgICAgICAgQF9sb2FkVHJhbnNsYXRpb25zX2NhY2hlW2xhbmd1YWdlX3RhZ10gPSB7fVxuXG4gICAgICBpZiBub3QgQF9sb2FkVHJhbnNsYXRpb25zX2NhY2hlW2xhbmd1YWdlX3RhZ11bbmFtZXNwYWNlXT9cbiAgICAgICAgQF9sb2FkVHJhbnNsYXRpb25zX2NhY2hlW2xhbmd1YWdlX3RhZ11bbmFtZXNwYWNlXSA9IHt9XG5cbiAgICAgIF8uZXh0ZW5kKEBfbG9hZFRyYW5zbGF0aW9uc19jYWNoZVtsYW5ndWFnZV90YWddW25hbWVzcGFjZV0sIHRyYW5zbGF0aW9uX2tleXMpXG5cbiAgICAgIEBhZGRSZXNvdXJjZUJ1bmRsZShsYW5ndWFnZV90YWcsIG5hbWVzcGFjZSwgdHJhbnNsYXRpb25fa2V5cylcblxuICAgICAgaWYgTWV0ZW9yLmlzQ2xpZW50IGFuZCBAZ2V0TGFuZ3VhZ2UoKSA9PSBsYW5ndWFnZV90YWdcbiAgICAgICAgIyBSZXRyYW5zbGF0ZSBpZiBzZXNzaW9uIGxhbmd1YWdlIHVwZGF0ZWRcbiAgICAgICAgQF9sYW5ndWFnZV9jaGFuZ2VkX3RyYWNrZXIuY2hhbmdlZCgpXG4iLCJ2YXIgZmFsbGJhY2tfbGFuZ3VhZ2U7XG5cbmltcG9ydCBUQVBpMThuZXh0IGZyb20gJy4uL3RhcF9pMThuZXh0L3RhcF9pMThuZXh0LTEuNy4zLmpzJztcblxuaW1wb3J0IHtcbiAgZ2xvYmFsc1xufSBmcm9tICcuL2dsb2JhbHMnO1xuXG5mYWxsYmFja19sYW5ndWFnZSA9IGdsb2JhbHMuZmFsbGJhY2tfbGFuZ3VhZ2U7XG5cblRBUGkxOG5leHQuaW5pdCh7XG4gIHJlc1N0b3JlOiB7fSxcbiAgZmFsbGJhY2tMbmc6IGdsb2JhbHMuZmFsbGJhY2tfbGFuZ3VhZ2UsXG4gIHVzZUNvb2tpZTogZmFsc2Vcbn0pO1xuXG5leHBvcnQgdmFyIFRBUGkxOG5CYXNlID0gKGZ1bmN0aW9uKCkge1xuICBjbGFzcyBUQVBpMThuQmFzZSBleHRlbmRzIEV2ZW50RW1pdHRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuICAgICAgdGhpcy5fZmFsbGJhY2tfbGFuZ3VhZ2UgPSBmYWxsYmFja19sYW5ndWFnZTtcbiAgICAgIHRoaXMuX2xhbmd1YWdlX2NoYW5nZWRfdHJhY2tlciA9IG5ldyBUcmFja2VyLkRlcGVuZGVuY3k7XG4gICAgICB0aGlzLl9sb2FkZWRfbGFuZ3VhZ2VzID0gW2ZhbGxiYWNrX2xhbmd1YWdlXTsgLy8gc3RvcmVzIHRoZSBsb2FkZWQgbGFuZ3VhZ2VzLCB0aGUgZmFsbGJhY2sgbGFuZ3VhZ2UgaXMgbG9hZGVkIGF1dG9tYXRpY2FsbHlcbiAgICAgIHRoaXMuY29uZiA9IG51bGw7IC8vIElmIGNvbmYgaXNuJ3QgbnVsbCB3ZSBhc3N1bWUgdGhhdCB0YXA6aTE4biBpcyBlbmFibGVkIGZvciB0aGUgcHJvamVjdC5cbiAgICAgIC8vIFdlIGFzc3VtZSBjb25mIGlzIHZhbGlkLCB3ZSBzdGVyaWxpemUgYW5kIHZhbGlkYXRlIGl0IGR1cmluZyB0aGUgYnVpbGQgcHJvY2Vzcy5cbiAgICAgIHRoaXMucGFja2FnZXMgPSB7fTsgLy8gU3RvcmVzIHRoZSBwYWNrYWdlcycgcGFja2FnZS10YXAuaTE4biBqc29uc1xuICAgICAgdGhpcy5sYW5ndWFnZXNfbmFtZXMgPSB7fTsgLy8gU3RvcmVzIGxhbmd1YWdlcyB0aGF0IHdlJ3ZlIGZvdW5kIGxhbmd1YWdlcyBmaWxlcyBmb3IgaW4gdGhlIHByb2plY3QgZGlyLlxuICAgICAgLy8gZm9ybWF0OlxuICAgICAgLy8ge1xuICAgICAgLy8gICAgbGFuZ190YWc6IFtsYW5nX25hbWVfaW5fZW5nbGlzaCwgbGFuZ19uYW1lX2luX2xvY2FsX2xhbmd1YWdlXVxuICAgICAgLy8gfVxuICAgICAgdGhpcy50cmFuc2xhdGlvbnMgPSB7fTsgLy8gU3RvcmVzIHRoZSBwYWNrYWdlcy9wcm9qZWN0IHRyYW5zbGF0aW9ucyAtIFNlcnZlciBzaWRlIG9ubHlcbiAgICAgIC8vIGZhbGxiYWNrX2xhbmd1YWdlIHRyYW5zbGF0aW9ucyBhcmUgbm90IHN0b3JlZCBoZXJlXG4gICAgICBpZiAoTWV0ZW9yLmlzQ2xpZW50KSB7XG4gICAgICAgIFNlc3Npb24uc2V0KHRoaXMuX2xvYWRlZF9sYW5nX3Nlc3Npb25fa2V5LCBudWxsKTtcbiAgICAgICAgdGhpcy5fbGFuZ3VhZ2VTcGVjaWZpY1RyYW5zbGF0b3JzID0ge307XG4gICAgICAgIHRoaXMuX2xhbmd1YWdlU3BlY2lmaWNUcmFuc2xhdG9yc1RyYWNrZXJzID0ge307XG4gICAgICB9XG4gICAgICBpZiAoTWV0ZW9yLmlzU2VydmVyKSB7XG4gICAgICAgIHRoaXMuc2VydmVyX3RyYW5zbGF0b3JzID0ge307XG4gICAgICAgIE1ldGVvci5zdGFydHVwKCgpID0+IHtcbiAgICAgICAgICAvLyBJZiB0YXAtaTE4biBpcyBlbmFibGVkIGZvciB0aGF0IHByb2plY3RcbiAgICAgICAgICBpZiAodGhpcy5fZW5hYmxlZCgpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcmVnaXN0ZXJIVFRQTWV0aG9kKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX18gPSB0aGlzLl9nZXRQYWNrYWdlSTE4bmV4dFByb3h5KGdsb2JhbHMucHJvamVjdF90cmFuc2xhdGlvbnNfZG9tYWluKTtcbiAgICAgIFRBUGkxOG5leHQuc2V0TG5nKGZhbGxiYWNrX2xhbmd1YWdlKTtcbiAgICB9XG5cbiAgICBfZW5hYmxlKGNvbmYpIHtcbiAgICAgIC8vIHRhcDppMThuIGdldHMgZW5hYmxlZCBmb3IgYSBwcm9qZWN0IG9uY2UgYSBjb25mIGZpbGUgaXMgc2V0IGZvciBpdC5cbiAgICAgIC8vIEl0IGNhbiBiZSBlaXRoZXIgYSBjb25mIG9iamVjdCB0aGF0IHdhcyBzZXQgYnkgcHJvamVjdC10YXAuaTE4biBmaWxlIG9yXG4gICAgICAvLyBhIGRlZmF1bHQgY29uZiwgd2hpY2ggaXMgYmVpbmcgYWRkZWQgaWYgdGhlIHByb2plY3QgaGFzIGxhbmcgZmlsZXNcbiAgICAgIC8vICgqLmkxOG4uanNvbikgYnV0IG5vdCBwcm9qZWN0LXRhcC5pMThuXG4gICAgICB0aGlzLmNvbmYgPSBjb25mO1xuICAgICAgcmV0dXJuIHRoaXMuX29uY2VFbmFibGVkKCk7XG4gICAgfVxuXG4gICAgX29uY2VFbmFibGVkKCkge31cblxuICAgIC8vIFRoZSBhcmNoIHNwZWNpZmljIGNvZGUgY2FuIHVzZSB0aGlzIGZvciBwcm9jZWR1cmVzIHRoYXQgc2hvdWxkIGJlIHBlcmZvcm1lZCBvbmNlXG4gICAgLy8gdGFwOmkxOG4gZ2V0cyBlbmFibGVkIChwcm9qZWN0IGNvbmYgZmlsZSBpcyBiZWluZyBzZXQpXG4gICAgX2VuYWJsZWQoKSB7XG4gICAgICAvLyByZWFkIHRoZSBjb21tZW50IG9mIEBjb25mXG4gICAgICByZXR1cm4gdGhpcy5jb25mICE9IG51bGw7XG4gICAgfVxuXG4gICAgX2dldFBhY2thZ2VEb21haW4ocGFja2FnZV9uYW1lKSB7XG4gICAgICByZXR1cm4gcGFja2FnZV9uYW1lLnJlcGxhY2UoLzovZywgXCItXCIpO1xuICAgIH1cblxuICAgIGFkZFJlc291cmNlQnVuZGxlKGxhbmdfdGFnLCBwYWNrYWdlX25hbWUsIHRyYW5zbGF0aW9ucykge1xuICAgICAgcmV0dXJuIFRBUGkxOG5leHQuYWRkUmVzb3VyY2VCdW5kbGUobGFuZ190YWcsIHRoaXMuX2dldFBhY2thZ2VEb21haW4ocGFja2FnZV9uYW1lKSwgdHJhbnNsYXRpb25zKTtcbiAgICB9XG5cbiAgICBfZ2V0U3BlY2lmaWNMYW5nVHJhbnNsYXRvcihsYW5nKSB7XG4gICAgICB2YXIgY3VycmVudF9sYW5nLCB0cmFuc2xhdG9yO1xuICAgICAgY3VycmVudF9sYW5nID0gVEFQaTE4bmV4dC5sbmcoKTtcbiAgICAgIHRyYW5zbGF0b3IgPSBudWxsO1xuICAgICAgVEFQaTE4bmV4dC5zZXRMbmcobGFuZywge1xuICAgICAgICBmaXhMbmc6IHRydWVcbiAgICAgIH0sIChsYW5nX3RyYW5zbGF0b3IpID0+IHtcbiAgICAgICAgcmV0dXJuIHRyYW5zbGF0b3IgPSBsYW5nX3RyYW5zbGF0b3I7XG4gICAgICB9KTtcbiAgICAgIC8vIFJlc3RvcmUgaTE4bmV4dCBsYW5nIHRoYXQgaGFkIGJlZW4gY2hhbmdlZCBpbiB0aGUgcHJvY2VzcyBvZiBnZW5lcmF0aW5nXG4gICAgICAvLyBsYW5nIHNwZWNpZmljIHRyYW5zbGF0b3JcbiAgICAgIFRBUGkxOG5leHQuc2V0TG5nKGN1cnJlbnRfbGFuZyk7XG4gICAgICByZXR1cm4gdHJhbnNsYXRvcjtcbiAgICB9XG5cbiAgICBfZ2V0UHJvamVjdExhbmd1YWdlcygpIHtcbiAgICAgIC8vIFJldHVybiBhbiBhcnJheSBvZiBsYW5ndWFnZXMgYXZhaWxhYmxlIGZvciB0aGUgY3VycmVudCBwcm9qZWN0XG4gICAgICBpZiAodGhpcy5fZW5hYmxlZCgpKSB7XG4gICAgICAgIGlmIChfLmlzQXJyYXkodGhpcy5jb25mLnN1cHBvcnRlZF9sYW5ndWFnZXMpKSB7XG4gICAgICAgICAgcmV0dXJuIF8udW5pb24oW3RoaXMuX2ZhbGxiYWNrX2xhbmd1YWdlXSwgdGhpcy5jb25mLnN1cHBvcnRlZF9sYW5ndWFnZXMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIElmIHN1cHBvcnRlZF9sYW5ndWFnZXMgaXMgbnVsbCwgYWxsIHRoZSBsYW5ndWFnZXMgd2UgZm91bmRcbiAgICAgICAgICAvLyB0cmFuc2xhdGlvbnMgZmlsZXMgdG8gaW4gdGhlIHByb2plY3QgbGV2ZWwgYXJlIGNvbnNpZGVyZWQgc3VwcG9ydGVkLlxuICAgICAgICAgIC8vIFdlIHVzZSB0aGUgQC5sYW5ndWFnZXNfbmFtZXMgYXJyYXkgdG8gdGVsbCB3aGljaCBsYW5ndWFnZXMgd2UgZm91bmRcbiAgICAgICAgICAvLyBzaW5jZSBmb3IgZXZlcnkgaTE4bi5qc29uIGZpbGUgd2UgZm91bmQgaW4gdGhlIHByb2plY3QgbGV2ZWwgd2UgYWRkXG4gICAgICAgICAgLy8gYW4gZW50cnkgZm9yIGl0cyBsYW5ndWFnZSB0byBALmxhbmd1YWdlc19uYW1lcyBpbiB0aGUgYnVpbGQgcHJvY2Vzcy5cblxuICAgICAgICAgIC8vIFdlIGFsc28ga25vdyBmb3IgY2VydGFpbiB0aGF0IHdoZW4gdGFwLWkxOG4gaXMgZW5hYmxlZCB0aGUgZmFsbGJhY2tcbiAgICAgICAgICAvLyBsYW5nIGlzIGluIEAubGFuZ3VhZ2VzX25hbWVzXG4gICAgICAgICAgcmV0dXJuIF8ua2V5cyh0aGlzLmxhbmd1YWdlc19uYW1lcyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBbdGhpcy5fZmFsbGJhY2tfbGFuZ3VhZ2VdO1xuICAgICAgfVxuICAgIH1cblxuICAgIGdldExhbmd1YWdlcygpIHtcbiAgICAgIHZhciBpLCBsYW5nX3RhZywgbGFuZ3VhZ2VzLCBsZW4sIHJlZjtcbiAgICAgIGlmICghdGhpcy5fZW5hYmxlZCgpKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgbGFuZ3VhZ2VzID0ge307XG4gICAgICByZWYgPSB0aGlzLl9nZXRQcm9qZWN0TGFuZ3VhZ2VzKCk7XG4gICAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgbGFuZ190YWcgPSByZWZbaV07XG4gICAgICAgIGxhbmd1YWdlc1tsYW5nX3RhZ10gPSB7XG4gICAgICAgICAgbmFtZTogdGhpcy5sYW5ndWFnZXNfbmFtZXNbbGFuZ190YWddWzFdLFxuICAgICAgICAgIGVuOiB0aGlzLmxhbmd1YWdlc19uYW1lc1tsYW5nX3RhZ11bMF1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBsYW5ndWFnZXM7XG4gICAgfVxuXG4gICAgX2xvYWRMYW5nRmlsZU9iamVjdChsYW5ndWFnZV90YWcsIGRhdGEpIHtcbiAgICAgIHZhciBwYWNrYWdlX2tleXMsIHBhY2thZ2VfbmFtZSwgcmVmLCByZXN1bHRzO1xuICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgZm9yIChwYWNrYWdlX25hbWUgaW4gZGF0YSkge1xuICAgICAgICBwYWNrYWdlX2tleXMgPSBkYXRhW3BhY2thZ2VfbmFtZV07XG4gICAgICAgIC8vIFRyYW5zbGF0aW9ucyB0aGF0IGFyZSBhZGRlZCBieSBsb2FkVHJhbnNsYXRpb25zKCkgaGF2ZSBoaWdoZXIgcHJpb3JpdHlcbiAgICAgICAgcGFja2FnZV9rZXlzID0gXy5leHRlbmQoe30sIHBhY2thZ2Vfa2V5cywgKChyZWYgPSB0aGlzLl9sb2FkVHJhbnNsYXRpb25zX2NhY2hlW2xhbmd1YWdlX3RhZ10pICE9IG51bGwgPyByZWZbcGFja2FnZV9uYW1lXSA6IHZvaWQgMCkgfHwge30pO1xuICAgICAgICByZXN1bHRzLnB1c2godGhpcy5hZGRSZXNvdXJjZUJ1bmRsZShsYW5ndWFnZV90YWcsIHBhY2thZ2VfbmFtZSwgcGFja2FnZV9rZXlzKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG5cbiAgICBsb2FkVHJhbnNsYXRpb25zKHRyYW5zbGF0aW9ucywgbmFtZXNwYWNlKSB7XG4gICAgICB2YXIgbGFuZ3VhZ2VfdGFnLCBwcm9qZWN0X2xhbmd1YWdlcywgcmVzdWx0cywgdHJhbnNsYXRpb25fa2V5cztcbiAgICAgIHByb2plY3RfbGFuZ3VhZ2VzID0gdGhpcy5fZ2V0UHJvamVjdExhbmd1YWdlcygpO1xuICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgZm9yIChsYW5ndWFnZV90YWcgaW4gdHJhbnNsYXRpb25zKSB7XG4gICAgICAgIHRyYW5zbGF0aW9uX2tleXMgPSB0cmFuc2xhdGlvbnNbbGFuZ3VhZ2VfdGFnXTtcbiAgICAgICAgaWYgKHRoaXMuX2xvYWRUcmFuc2xhdGlvbnNfY2FjaGVbbGFuZ3VhZ2VfdGFnXSA9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5fbG9hZFRyYW5zbGF0aW9uc19jYWNoZVtsYW5ndWFnZV90YWddID0ge307XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2xvYWRUcmFuc2xhdGlvbnNfY2FjaGVbbGFuZ3VhZ2VfdGFnXVtuYW1lc3BhY2VdID09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLl9sb2FkVHJhbnNsYXRpb25zX2NhY2hlW2xhbmd1YWdlX3RhZ11bbmFtZXNwYWNlXSA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIF8uZXh0ZW5kKHRoaXMuX2xvYWRUcmFuc2xhdGlvbnNfY2FjaGVbbGFuZ3VhZ2VfdGFnXVtuYW1lc3BhY2VdLCB0cmFuc2xhdGlvbl9rZXlzKTtcbiAgICAgICAgdGhpcy5hZGRSZXNvdXJjZUJ1bmRsZShsYW5ndWFnZV90YWcsIG5hbWVzcGFjZSwgdHJhbnNsYXRpb25fa2V5cyk7XG4gICAgICAgIGlmIChNZXRlb3IuaXNDbGllbnQgJiYgdGhpcy5nZXRMYW5ndWFnZSgpID09PSBsYW5ndWFnZV90YWcpIHtcbiAgICAgICAgICAvLyBSZXRyYW5zbGF0ZSBpZiBzZXNzaW9uIGxhbmd1YWdlIHVwZGF0ZWRcbiAgICAgICAgICByZXN1bHRzLnB1c2godGhpcy5fbGFuZ3VhZ2VfY2hhbmdlZF90cmFja2VyLmNoYW5nZWQoKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKHZvaWQgMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH1cblxuICB9O1xuXG4gIFRBUGkxOG5CYXNlLnByb3RvdHlwZS5fbG9hZGVkX2xhbmdfc2Vzc2lvbl9rZXkgPSBcIlRBUGkxOG46OmxvYWRlZF9sYW5nXCI7XG5cbiAgVEFQaTE4bkJhc2UucHJvdG90eXBlLl9sb2FkVHJhbnNsYXRpb25zX2NhY2hlID0ge307XG5cbiAgcmV0dXJuIFRBUGkxOG5CYXNlO1xuXG59KS5jYWxsKHRoaXMpO1xuIiwiaW1wb3J0IHsgVEFQaTE4bkJhc2UgfSBmcm9tICcuL3RhcF9pMThuLWNvbW1vbic7XG5pbXBvcnQgeyBnbG9iYWxzIH0gZnJvbSAnLi9nbG9iYWxzJztcblxuZXhwb3J0IGNsYXNzIFRBUGkxOG5TZXJ2ZXIgZXh0ZW5kcyBUQVBpMThuQmFzZVxuICBzZXJ2ZXJfdHJhbnNsYXRvcnM6IG51bGxcblxuICBfcmVnaXN0ZXJTZXJ2ZXJUcmFuc2xhdG9yOiAobGFuZ190YWcsIHBhY2thZ2VfbmFtZSkgLT5cbiAgICBpZiBAX2VuYWJsZWQoKVxuICAgICAgaWYgbm90KGxhbmdfdGFnIG9mIEBzZXJ2ZXJfdHJhbnNsYXRvcnMpXG4gICAgICAgIEBzZXJ2ZXJfdHJhbnNsYXRvcnNbbGFuZ190YWddID0gQF9nZXRTcGVjaWZpY0xhbmdUcmFuc2xhdG9yKGxhbmdfdGFnKVxuXG4gICAgICAjIGZhbGxiYWNrIGxhbmd1YWdlIGlzIGludGVncmF0ZWQsIGFuZCBpc24ndCBwYXJ0IG9mIEB0cmFuc2xhdGlvbnNcbiAgICAgIGlmIGxhbmdfdGFnICE9IEBfZmFsbGJhY2tfbGFuZ3VhZ2VcbiAgICAgICAgQGFkZFJlc291cmNlQnVuZGxlKGxhbmdfdGFnLCBwYWNrYWdlX25hbWUsIEB0cmFuc2xhdGlvbnNbbGFuZ190YWddW3BhY2thZ2VfbmFtZV0pXG5cbiAgICBpZiBub3QoQF9mYWxsYmFja19sYW5ndWFnZSBvZiBAc2VydmVyX3RyYW5zbGF0b3JzKVxuICAgICAgQHNlcnZlcl90cmFuc2xhdG9yc1tAX2ZhbGxiYWNrX2xhbmd1YWdlXSA9IEBfZ2V0U3BlY2lmaWNMYW5nVHJhbnNsYXRvcihAX2ZhbGxiYWNrX2xhbmd1YWdlKVxuXG4gIF9yZWdpc3RlckFsbFNlcnZlclRyYW5zbGF0b3JzOiAoKSAtPlxuICAgIGZvciBsYW5nX3RhZyBpbiBAX2dldFByb2plY3RMYW5ndWFnZXMoKVxuICAgICAgZm9yIHBhY2thZ2VfbmFtZSBvZiBAdHJhbnNsYXRpb25zW2xhbmdfdGFnXVxuICAgICAgICBAX3JlZ2lzdGVyU2VydmVyVHJhbnNsYXRvcihsYW5nX3RhZywgcGFja2FnZV9uYW1lKVxuXG4gIF9nZXRQYWNrYWdlSTE4bmV4dFByb3h5OiAocGFja2FnZV9uYW1lKSAtPlxuICAgICMgQSBwcm94eSB0byBUQVBpMThuZXh0LnQgd2hlcmUgdGhlIG5hbWVzcGFjZSBpcyBwcmVzZXQgdG8gdGhlIHBhY2thZ2Unc1xuICAgIChrZXksIG9wdGlvbnMsIGxhbmdfdGFnPW51bGwpID0+XG4gICAgICBpZiBub3QgbGFuZ190YWc/XG4gICAgICAgICMgdHJhbnNsYXRlIHRvIGZhbGxiYWNrX2xhbmd1YWdlXG4gICAgICAgIHJldHVybiBAc2VydmVyX3RyYW5zbGF0b3JzW0BfZmFsbGJhY2tfbGFuZ3VhZ2VdIFwiI3tAX2dldFBhY2thZ2VEb21haW4ocGFja2FnZV9uYW1lKX06I3trZXl9XCIsIG9wdGlvbnNcbiAgICAgIGVsc2UgaWYgbm90KGxhbmdfdGFnIG9mIEBzZXJ2ZXJfdHJhbnNsYXRvcnMpXG4gICAgICAgIGNvbnNvbGUubG9nIFwiV2FybmluZzogbGFuZ3VhZ2UgI3tsYW5nX3RhZ30gaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIHByb2plY3QsIGZhbGxiYWNrIGxhbmd1YWdlICgje0BfZmFsbGJhY2tfbGFuZ3VhZ2V9KVwiXG4gICAgICAgIHJldHVybiBAc2VydmVyX3RyYW5zbGF0b3JzW0BfZmFsbGJhY2tfbGFuZ3VhZ2VdIFwiI3tAX2dldFBhY2thZ2VEb21haW4ocGFja2FnZV9uYW1lKX06I3trZXl9XCIsIG9wdGlvbnNcbiAgICAgIGVsc2VcbiAgICAgICAgcmV0dXJuIEBzZXJ2ZXJfdHJhbnNsYXRvcnNbbGFuZ190YWddIFwiI3tAX2dldFBhY2thZ2VEb21haW4ocGFja2FnZV9uYW1lKX06I3trZXl9XCIsIG9wdGlvbnNcblxuICBfcmVnaXN0ZXJIVFRQTWV0aG9kOiAtPlxuICAgIHNlbGYgPSBAXG5cbiAgICBtZXRob2RzID0ge31cblxuICAgIGlmIG5vdCBzZWxmLl9lbmFibGVkKClcbiAgICAgIHRocm93IG5ldyBNZXRlb3IuRXJyb3IgNTAwLCBcInRhcC1pMThuIGhhcyB0byBiZSBlbmFibGVkIGluIG9yZGVyIHRvIHJlZ2lzdGVyIHRoZSBIVFRQIG1ldGhvZFwiXG5cbiAgICBKc29uUm91dGVzLmFkZCAnZ2V0JywgXCIje3NlbGYuY29uZi5pMThuX2ZpbGVzX3JvdXRlLnJlcGxhY2UoL1xcLyQvLCBcIlwiKX0vbXVsdGkvOmxhbmdzXCIsIChyZXEsIHJlcywgbmV4dCkgLT5cbiAgICAgIGlmIG5vdCBSZWdFeHAoXCJeKCgje2dsb2JhbHMubGFuZ2F1Z2VzX3RhZ3NfcmVnZXh9LCkqI3tnbG9iYWxzLmxhbmdhdWdlc190YWdzX3JlZ2V4fXxhbGwpLmpzb24kXCIpLnRlc3QocmVxLnBhcmFtcy5sYW5ncylcbiAgICAgICAgcmV0dXJuIEpzb25Sb3V0ZXMuc2VuZFJlc3VsdCByZXMsXG4gICAgICAgICAgY29kZTogNDAxXG5cbiAgICAgIGxhbmdzID0gcmVxLnBhcmFtcy5sYW5ncy5yZXBsYWNlIFwiLmpzb25cIiwgXCJcIlxuXG4gICAgICBpZiBsYW5ncyA9PSBcImFsbFwiXG4gICAgICAgIG91dHB1dCA9IHNlbGYudHJhbnNsYXRpb25zXG4gICAgICBlbHNlXG4gICAgICAgIG91dHB1dCA9IHt9XG5cbiAgICAgICAgbGFuZ3MgPSBsYW5ncy5zcGxpdChcIixcIilcbiAgICAgICAgZm9yIGxhbmdfdGFnIGluIGxhbmdzXG4gICAgICAgICAgaWYgbGFuZ190YWcgaW4gc2VsZi5fZ2V0UHJvamVjdExhbmd1YWdlcygpIGFuZCBcXFxuICAgICAgICAgICAgICBsYW5nX3RhZyAhPSBzZWxmLl9mYWxsYmFja19sYW5ndWFnZSAjIGZhbGxiYWNrIGxhbmd1YWdlIGlzIGludGVncmF0ZWQgdG8gdGhlIGJ1bmRsZVxuICAgICAgICAgICAgbGFuZ3VhZ2VfdHJhbnNsYXRpb25zID0gc2VsZi50cmFuc2xhdGlvbnNbbGFuZ190YWddXG5cbiAgICAgICAgICAgIGlmIGxhbmd1YWdlX3RyYW5zbGF0aW9ucz9cbiAgICAgICAgICAgICAgb3V0cHV0W2xhbmdfdGFnXSA9IGxhbmd1YWdlX3RyYW5zbGF0aW9uc1xuXG4gICAgICByZXR1cm4gSnNvblJvdXRlcy5zZW5kUmVzdWx0IHJlcyxcbiAgICAgICAgZGF0YTogb3V0cHV0XG5cbiAgICBKc29uUm91dGVzLmFkZCAnZ2V0JywgXCIje3NlbGYuY29uZi5pMThuX2ZpbGVzX3JvdXRlLnJlcGxhY2UoL1xcLyQvLCBcIlwiKX0vOmxhbmdcIiwgIChyZXEsIHJlcywgbmV4dCkgLT5cbiAgICAgIGlmIG5vdCBSZWdFeHAoXCJeI3tnbG9iYWxzLmxhbmdhdWdlc190YWdzX3JlZ2V4fS5qc29uJFwiKS50ZXN0KHJlcS5wYXJhbXMubGFuZylcbiAgICAgICAgcmV0dXJuIEpzb25Sb3V0ZXMuc2VuZFJlc3VsdCByZXMsXG4gICAgICAgICAgY29kZTogNDAxXG5cbiAgICAgIGxhbmdfdGFnID0gcmVxLnBhcmFtcy5sYW5nLnJlcGxhY2UgXCIuanNvblwiLCBcIlwiXG5cbiAgICAgIGlmIGxhbmdfdGFnIG5vdCBpbiBzZWxmLl9nZXRQcm9qZWN0TGFuZ3VhZ2VzKCkgb3IgXFxcbiAgICAgICAgICBsYW5nX3RhZyA9PSBzZWxmLl9mYWxsYmFja19sYW5ndWFnZSAjIGZhbGxiYWNrIGxhbmd1YWdlIGlzIGludGVncmF0ZWQgdG8gdGhlIGJ1bmRsZVxuICAgICAgICByZXR1cm4gSnNvblJvdXRlcy5zZW5kUmVzdWx0IHJlcyxcbiAgICAgICAgICBjb2RlOiA0MDQgIyBub3QgZm91bmRcblxuICAgICAgbGFuZ3VhZ2VfdHJhbnNsYXRpb25zID0gc2VsZi50cmFuc2xhdGlvbnNbbGFuZ190YWddXG4gICAgICAjIHJldHVybmluZyB7fSBpZiBsYW5nX3RhZyBpcyBub3QgaW4gdHJhbnNsYXRpb25zIGFsbG93cyB0aGUgcHJvamVjdFxuICAgICAgIyBkZXZlbG9wZXIgdG8gZm9yY2UgYSBsYW5ndWFnZSBzdXBwb3J0ZSB3aXRoIHByb2plY3QtdGFwLmkxOG4nc1xuICAgICAgIyBzdXBwb3J0ZWRfbGFuZ3VhZ2VzIHByb3BlcnR5LCBldmVuIGlmIHRoYXQgbGFuZ3VhZ2UgaGFzIG5vIGxhbmdcbiAgICAgICMgZmlsZXMuXG4gICAgICByZXR1cm4gSnNvblJvdXRlcy5zZW5kUmVzdWx0IHJlcyxcbiAgICAgICAgZGF0YTogKGlmIGxhbmd1YWdlX3RyYW5zbGF0aW9ucz8gdGhlbiBsYW5ndWFnZV90cmFuc2xhdGlvbnMgZWxzZSB7fSlcblxuICBfb25jZUVuYWJsZWQ6IC0+XG4gICAgQF9yZWdpc3RlckFsbFNlcnZlclRyYW5zbGF0b3JzKClcbiIsInZhciBpbmRleE9mID0gW10uaW5kZXhPZjtcblxuaW1wb3J0IHtcbiAgVEFQaTE4bkJhc2Vcbn0gZnJvbSAnLi90YXBfaTE4bi1jb21tb24nO1xuXG5pbXBvcnQge1xuICBnbG9iYWxzXG59IGZyb20gJy4vZ2xvYmFscyc7XG5cbmV4cG9ydCB2YXIgVEFQaTE4blNlcnZlciA9IChmdW5jdGlvbigpIHtcbiAgY2xhc3MgVEFQaTE4blNlcnZlciBleHRlbmRzIFRBUGkxOG5CYXNlIHtcbiAgICBfcmVnaXN0ZXJTZXJ2ZXJUcmFuc2xhdG9yKGxhbmdfdGFnLCBwYWNrYWdlX25hbWUpIHtcbiAgICAgIGlmICh0aGlzLl9lbmFibGVkKCkpIHtcbiAgICAgICAgaWYgKCEobGFuZ190YWcgaW4gdGhpcy5zZXJ2ZXJfdHJhbnNsYXRvcnMpKSB7XG4gICAgICAgICAgdGhpcy5zZXJ2ZXJfdHJhbnNsYXRvcnNbbGFuZ190YWddID0gdGhpcy5fZ2V0U3BlY2lmaWNMYW5nVHJhbnNsYXRvcihsYW5nX3RhZyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gZmFsbGJhY2sgbGFuZ3VhZ2UgaXMgaW50ZWdyYXRlZCwgYW5kIGlzbid0IHBhcnQgb2YgQHRyYW5zbGF0aW9uc1xuICAgICAgICBpZiAobGFuZ190YWcgIT09IHRoaXMuX2ZhbGxiYWNrX2xhbmd1YWdlKSB7XG4gICAgICAgICAgdGhpcy5hZGRSZXNvdXJjZUJ1bmRsZShsYW5nX3RhZywgcGFja2FnZV9uYW1lLCB0aGlzLnRyYW5zbGF0aW9uc1tsYW5nX3RhZ11bcGFja2FnZV9uYW1lXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmICghKHRoaXMuX2ZhbGxiYWNrX2xhbmd1YWdlIGluIHRoaXMuc2VydmVyX3RyYW5zbGF0b3JzKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2ZXJfdHJhbnNsYXRvcnNbdGhpcy5fZmFsbGJhY2tfbGFuZ3VhZ2VdID0gdGhpcy5fZ2V0U3BlY2lmaWNMYW5nVHJhbnNsYXRvcih0aGlzLl9mYWxsYmFja19sYW5ndWFnZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgX3JlZ2lzdGVyQWxsU2VydmVyVHJhbnNsYXRvcnMoKSB7XG4gICAgICB2YXIgaSwgbGFuZ190YWcsIGxlbiwgcGFja2FnZV9uYW1lLCByZWYsIHJlc3VsdHM7XG4gICAgICByZWYgPSB0aGlzLl9nZXRQcm9qZWN0TGFuZ3VhZ2VzKCk7XG4gICAgICByZXN1bHRzID0gW107XG4gICAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgbGFuZ190YWcgPSByZWZbaV07XG4gICAgICAgIHJlc3VsdHMucHVzaCgoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIHJlc3VsdHMxO1xuICAgICAgICAgIHJlc3VsdHMxID0gW107XG4gICAgICAgICAgZm9yIChwYWNrYWdlX25hbWUgaW4gdGhpcy50cmFuc2xhdGlvbnNbbGFuZ190YWddKSB7XG4gICAgICAgICAgICByZXN1bHRzMS5wdXNoKHRoaXMuX3JlZ2lzdGVyU2VydmVyVHJhbnNsYXRvcihsYW5nX3RhZywgcGFja2FnZV9uYW1lKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiByZXN1bHRzMTtcbiAgICAgICAgfSkuY2FsbCh0aGlzKSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9XG5cbiAgICBfZ2V0UGFja2FnZUkxOG5leHRQcm94eShwYWNrYWdlX25hbWUpIHtcbiAgICAgIC8vIEEgcHJveHkgdG8gVEFQaTE4bmV4dC50IHdoZXJlIHRoZSBuYW1lc3BhY2UgaXMgcHJlc2V0IHRvIHRoZSBwYWNrYWdlJ3NcbiAgICAgIHJldHVybiAoa2V5LCBvcHRpb25zLCBsYW5nX3RhZyA9IG51bGwpID0+IHtcbiAgICAgICAgaWYgKGxhbmdfdGFnID09IG51bGwpIHtcbiAgICAgICAgICAvLyB0cmFuc2xhdGUgdG8gZmFsbGJhY2tfbGFuZ3VhZ2VcbiAgICAgICAgICByZXR1cm4gdGhpcy5zZXJ2ZXJfdHJhbnNsYXRvcnNbdGhpcy5fZmFsbGJhY2tfbGFuZ3VhZ2VdKGAke3RoaXMuX2dldFBhY2thZ2VEb21haW4ocGFja2FnZV9uYW1lKX06JHtrZXl9YCwgb3B0aW9ucyk7XG4gICAgICAgIH0gZWxzZSBpZiAoIShsYW5nX3RhZyBpbiB0aGlzLnNlcnZlcl90cmFuc2xhdG9ycykpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhgV2FybmluZzogbGFuZ3VhZ2UgJHtsYW5nX3RhZ30gaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIHByb2plY3QsIGZhbGxiYWNrIGxhbmd1YWdlICgke3RoaXMuX2ZhbGxiYWNrX2xhbmd1YWdlfSlgKTtcbiAgICAgICAgICByZXR1cm4gdGhpcy5zZXJ2ZXJfdHJhbnNsYXRvcnNbdGhpcy5fZmFsbGJhY2tfbGFuZ3VhZ2VdKGAke3RoaXMuX2dldFBhY2thZ2VEb21haW4ocGFja2FnZV9uYW1lKX06JHtrZXl9YCwgb3B0aW9ucyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuc2VydmVyX3RyYW5zbGF0b3JzW2xhbmdfdGFnXShgJHt0aGlzLl9nZXRQYWNrYWdlRG9tYWluKHBhY2thZ2VfbmFtZSl9OiR7a2V5fWAsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cblxuICAgIF9yZWdpc3RlckhUVFBNZXRob2QoKSB7XG4gICAgICB2YXIgbWV0aG9kcywgc2VsZjtcbiAgICAgIHNlbGYgPSB0aGlzO1xuICAgICAgbWV0aG9kcyA9IHt9O1xuICAgICAgaWYgKCFzZWxmLl9lbmFibGVkKCkpIHtcbiAgICAgICAgdGhyb3cgbmV3IE1ldGVvci5FcnJvcig1MDAsIFwidGFwLWkxOG4gaGFzIHRvIGJlIGVuYWJsZWQgaW4gb3JkZXIgdG8gcmVnaXN0ZXIgdGhlIEhUVFAgbWV0aG9kXCIpO1xuICAgICAgfVxuICAgICAgSnNvblJvdXRlcy5hZGQoJ2dldCcsIGAke3NlbGYuY29uZi5pMThuX2ZpbGVzX3JvdXRlLnJlcGxhY2UoL1xcLyQvLCBcIlwiKX0vbXVsdGkvOmxhbmdzYCwgZnVuY3Rpb24ocmVxLCByZXMsIG5leHQpIHtcbiAgICAgICAgdmFyIGksIGxhbmdfdGFnLCBsYW5ncywgbGFuZ3VhZ2VfdHJhbnNsYXRpb25zLCBsZW4sIG91dHB1dDtcbiAgICAgICAgaWYgKCFSZWdFeHAoYF4oKCR7Z2xvYmFscy5sYW5nYXVnZXNfdGFnc19yZWdleH0sKSoke2dsb2JhbHMubGFuZ2F1Z2VzX3RhZ3NfcmVnZXh9fGFsbCkuanNvbiRgKS50ZXN0KHJlcS5wYXJhbXMubGFuZ3MpKSB7XG4gICAgICAgICAgcmV0dXJuIEpzb25Sb3V0ZXMuc2VuZFJlc3VsdChyZXMsIHtcbiAgICAgICAgICAgIGNvZGU6IDQwMVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGxhbmdzID0gcmVxLnBhcmFtcy5sYW5ncy5yZXBsYWNlKFwiLmpzb25cIiwgXCJcIik7XG4gICAgICAgIGlmIChsYW5ncyA9PT0gXCJhbGxcIikge1xuICAgICAgICAgIG91dHB1dCA9IHNlbGYudHJhbnNsYXRpb25zO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG91dHB1dCA9IHt9O1xuICAgICAgICAgIGxhbmdzID0gbGFuZ3Muc3BsaXQoXCIsXCIpO1xuICAgICAgICAgIGZvciAoaSA9IDAsIGxlbiA9IGxhbmdzLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBsYW5nX3RhZyA9IGxhbmdzW2ldO1xuICAgICAgICAgICAgaWYgKGluZGV4T2YuY2FsbChzZWxmLl9nZXRQcm9qZWN0TGFuZ3VhZ2VzKCksIGxhbmdfdGFnKSA+PSAwICYmIGxhbmdfdGFnICE9PSBzZWxmLl9mYWxsYmFja19sYW5ndWFnZSkgeyAvLyBmYWxsYmFjayBsYW5ndWFnZSBpcyBpbnRlZ3JhdGVkIHRvIHRoZSBidW5kbGVcbiAgICAgICAgICAgICAgbGFuZ3VhZ2VfdHJhbnNsYXRpb25zID0gc2VsZi50cmFuc2xhdGlvbnNbbGFuZ190YWddO1xuICAgICAgICAgICAgICBpZiAobGFuZ3VhZ2VfdHJhbnNsYXRpb25zICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBvdXRwdXRbbGFuZ190YWddID0gbGFuZ3VhZ2VfdHJhbnNsYXRpb25zO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBKc29uUm91dGVzLnNlbmRSZXN1bHQocmVzLCB7XG4gICAgICAgICAgZGF0YTogb3V0cHV0XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gSnNvblJvdXRlcy5hZGQoJ2dldCcsIGAke3NlbGYuY29uZi5pMThuX2ZpbGVzX3JvdXRlLnJlcGxhY2UoL1xcLyQvLCBcIlwiKX0vOmxhbmdgLCBmdW5jdGlvbihyZXEsIHJlcywgbmV4dCkge1xuICAgICAgICB2YXIgbGFuZ190YWcsIGxhbmd1YWdlX3RyYW5zbGF0aW9ucztcbiAgICAgICAgaWYgKCFSZWdFeHAoYF4ke2dsb2JhbHMubGFuZ2F1Z2VzX3RhZ3NfcmVnZXh9Lmpzb24kYCkudGVzdChyZXEucGFyYW1zLmxhbmcpKSB7XG4gICAgICAgICAgcmV0dXJuIEpzb25Sb3V0ZXMuc2VuZFJlc3VsdChyZXMsIHtcbiAgICAgICAgICAgIGNvZGU6IDQwMVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGxhbmdfdGFnID0gcmVxLnBhcmFtcy5sYW5nLnJlcGxhY2UoXCIuanNvblwiLCBcIlwiKTtcbiAgICAgICAgaWYgKGluZGV4T2YuY2FsbChzZWxmLl9nZXRQcm9qZWN0TGFuZ3VhZ2VzKCksIGxhbmdfdGFnKSA8IDAgfHwgbGFuZ190YWcgPT09IHNlbGYuX2ZhbGxiYWNrX2xhbmd1YWdlKSB7IC8vIGZhbGxiYWNrIGxhbmd1YWdlIGlzIGludGVncmF0ZWQgdG8gdGhlIGJ1bmRsZVxuICAgICAgICAgIHJldHVybiBKc29uUm91dGVzLnNlbmRSZXN1bHQocmVzLCB7XG4gICAgICAgICAgICBjb2RlOiA0MDQgLy8gbm90IGZvdW5kXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgbGFuZ3VhZ2VfdHJhbnNsYXRpb25zID0gc2VsZi50cmFuc2xhdGlvbnNbbGFuZ190YWddO1xuICAgICAgICAvLyByZXR1cm5pbmcge30gaWYgbGFuZ190YWcgaXMgbm90IGluIHRyYW5zbGF0aW9ucyBhbGxvd3MgdGhlIHByb2plY3RcbiAgICAgICAgLy8gZGV2ZWxvcGVyIHRvIGZvcmNlIGEgbGFuZ3VhZ2Ugc3VwcG9ydGUgd2l0aCBwcm9qZWN0LXRhcC5pMThuJ3NcbiAgICAgICAgLy8gc3VwcG9ydGVkX2xhbmd1YWdlcyBwcm9wZXJ0eSwgZXZlbiBpZiB0aGF0IGxhbmd1YWdlIGhhcyBubyBsYW5nXG4gICAgICAgIC8vIGZpbGVzLlxuICAgICAgICByZXR1cm4gSnNvblJvdXRlcy5zZW5kUmVzdWx0KHJlcywge1xuICAgICAgICAgIGRhdGE6IChsYW5ndWFnZV90cmFuc2xhdGlvbnMgIT0gbnVsbCA/IGxhbmd1YWdlX3RyYW5zbGF0aW9ucyA6IHt9KVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIF9vbmNlRW5hYmxlZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9yZWdpc3RlckFsbFNlcnZlclRyYW5zbGF0b3JzKCk7XG4gICAgfVxuXG4gIH07XG5cbiAgVEFQaTE4blNlcnZlci5wcm90b3R5cGUuc2VydmVyX3RyYW5zbGF0b3JzID0gbnVsbDtcblxuICByZXR1cm4gVEFQaTE4blNlcnZlcjtcblxufSkuY2FsbCh0aGlzKTtcbiIsImltcG9ydCB7IFRBUGkxOG5TZXJ2ZXIgfSBmcm9tICcuL2xpYi90YXBfaTE4bi90YXBfaTE4bi1zZXJ2ZXInO1xuXG5leHBvcnQgY29uc3QgVEFQaTE4biA9IG5ldyBUQVBpMThuU2VydmVyKCk7XG4iXX0=
