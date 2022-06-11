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

/* Package-scope variables */
var ReactiveStore;

(function(){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// packages/mrt_reactive-store/packages/mrt_reactive-store.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/mrt:reactive-store/store.js/store.js                                                                  //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
;(function(win){                                                                                                  // 1
	var store = {},                                                                                                  // 2
		doc = win.document,                                                                                             // 3
		localStorageName = 'localStorage',                                                                              // 4
		scriptTag = 'script',                                                                                           // 5
		storage                                                                                                         // 6
                                                                                                                  // 7
	store.disabled = false                                                                                           // 8
	store.set = function(key, value) {}                                                                              // 9
	store.get = function(key) {}                                                                                     // 10
	store.remove = function(key) {}                                                                                  // 11
	store.clear = function() {}                                                                                      // 12
	store.transact = function(key, defaultVal, transactionFn) {                                                      // 13
		var val = store.get(key)                                                                                        // 14
		if (transactionFn == null) {                                                                                    // 15
			transactionFn = defaultVal                                                                                     // 16
			defaultVal = null                                                                                              // 17
		}                                                                                                               // 18
		if (typeof val == 'undefined') { val = defaultVal || {} }                                                       // 19
		transactionFn(val)                                                                                              // 20
		store.set(key, val)                                                                                             // 21
	}                                                                                                                // 22
	store.getAll = function() {}                                                                                     // 23
	store.forEach = function() {}                                                                                    // 24
                                                                                                                  // 25
	store.serialize = function(value) {                                                                              // 26
		return JSON.stringify(value)                                                                                    // 27
	}                                                                                                                // 28
	store.deserialize = function(value) {                                                                            // 29
		if (typeof value != 'string') { return undefined }                                                              // 30
		try { return JSON.parse(value) }                                                                                // 31
		catch(e) { return value || undefined }                                                                          // 32
	}                                                                                                                // 33
                                                                                                                  // 34
	// Functions to encapsulate questionable FireFox 3.6.13 behavior                                                 // 35
	// when about.config::dom.storage.enabled === false                                                              // 36
	// See https://github.com/marcuswestin/store.js/issues#issue/13                                                  // 37
	function isLocalStorageNameSupported() {                                                                         // 38
		try { return (localStorageName in win && win[localStorageName]) }                                               // 39
		catch(err) { return false }                                                                                     // 40
	}                                                                                                                // 41
                                                                                                                  // 42
	if (isLocalStorageNameSupported()) {                                                                             // 43
		storage = win[localStorageName]                                                                                 // 44
		store.set = function(key, val) {                                                                                // 45
			if (val === undefined) { return store.remove(key) }                                                            // 46
			storage.setItem(key, store.serialize(val))                                                                     // 47
			return val                                                                                                     // 48
		}                                                                                                               // 49
		store.get = function(key) { return store.deserialize(storage.getItem(key)) }                                    // 50
		store.remove = function(key) { storage.removeItem(key) }                                                        // 51
		store.clear = function() { storage.clear() }                                                                    // 52
		store.getAll = function() {                                                                                     // 53
			var ret = {}                                                                                                   // 54
			store.forEach(function(key, val) {                                                                             // 55
				ret[key] = val                                                                                                // 56
			})                                                                                                             // 57
			return ret                                                                                                     // 58
		}                                                                                                               // 59
		store.forEach = function(callback) {                                                                            // 60
			for (var i=0; i<storage.length; i++) {                                                                         // 61
				var key = storage.key(i)                                                                                      // 62
				callback(key, store.get(key))                                                                                 // 63
			}                                                                                                              // 64
		}                                                                                                               // 65
	} else if (doc.documentElement.addBehavior) {                                                                    // 66
		var storageOwner,                                                                                               // 67
			storageContainer                                                                                               // 68
		// Since #userData storage applies only to specific paths, we need to                                           // 69
		// somehow link our data to a specific path.  We choose /favicon.ico                                            // 70
		// as a pretty safe option, since all browsers already make a request to                                        // 71
		// this URL anyway and being a 404 will not hurt us here.  We wrap an                                           // 72
		// iframe pointing to the favicon in an ActiveXObject(htmlfile) object                                          // 73
		// (see: http://msdn.microsoft.com/en-us/library/aa752574(v=VS.85).aspx)                                        // 74
		// since the iframe access rules appear to allow direct access and                                              // 75
		// manipulation of the document element, even for a 404 page.  This                                             // 76
		// document can be used instead of the current document (which would                                            // 77
		// have been limited to the current path) to perform #userData storage.                                         // 78
		try {                                                                                                           // 79
			storageContainer = new ActiveXObject('htmlfile')                                                               // 80
			storageContainer.open()                                                                                        // 81
			storageContainer.write('<'+scriptTag+'>document.w=window</'+scriptTag+'><iframe src="/favicon.ico"></iframe>') // 82
			storageContainer.close()                                                                                       // 83
			storageOwner = storageContainer.w.frames[0].document                                                           // 84
			storage = storageOwner.createElement('div')                                                                    // 85
		} catch(e) {                                                                                                    // 86
			// somehow ActiveXObject instantiation failed (perhaps some special                                            // 87
			// security settings or otherwse), fall back to per-path storage                                               // 88
			storage = doc.createElement('div')                                                                             // 89
			storageOwner = doc.body                                                                                        // 90
		}                                                                                                               // 91
		function withIEStorage(storeFunction) {                                                                         // 92
			return function() {                                                                                            // 93
				var args = Array.prototype.slice.call(arguments, 0)                                                           // 94
				args.unshift(storage)                                                                                         // 95
				// See http://msdn.microsoft.com/en-us/library/ms531081(v=VS.85).aspx                                         // 96
				// and http://msdn.microsoft.com/en-us/library/ms531424(v=VS.85).aspx                                         // 97
				storageOwner.appendChild(storage)                                                                             // 98
				storage.addBehavior('#default#userData')                                                                      // 99
				storage.load(localStorageName)                                                                                // 100
				var result = storeFunction.apply(store, args)                                                                 // 101
				storageOwner.removeChild(storage)                                                                             // 102
				return result                                                                                                 // 103
			}                                                                                                              // 104
		}                                                                                                               // 105
                                                                                                                  // 106
		// In IE7, keys cannot start with a digit or contain certain chars.                                             // 107
		// See https://github.com/marcuswestin/store.js/issues/40                                                       // 108
		// See https://github.com/marcuswestin/store.js/issues/83                                                       // 109
		var forbiddenCharsRegex = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g")                              // 110
		function ieKeyFix(key) {                                                                                        // 111
			return key.replace(/^d/, '___$&').replace(forbiddenCharsRegex, '___')                                          // 112
		}                                                                                                               // 113
		store.set = withIEStorage(function(storage, key, val) {                                                         // 114
			key = ieKeyFix(key)                                                                                            // 115
			if (val === undefined) { return store.remove(key) }                                                            // 116
			storage.setAttribute(key, store.serialize(val))                                                                // 117
			storage.save(localStorageName)                                                                                 // 118
			return val                                                                                                     // 119
		})                                                                                                              // 120
		store.get = withIEStorage(function(storage, key) {                                                              // 121
			key = ieKeyFix(key)                                                                                            // 122
			return store.deserialize(storage.getAttribute(key))                                                            // 123
		})                                                                                                              // 124
		store.remove = withIEStorage(function(storage, key) {                                                           // 125
			key = ieKeyFix(key)                                                                                            // 126
			storage.removeAttribute(key)                                                                                   // 127
			storage.save(localStorageName)                                                                                 // 128
		})                                                                                                              // 129
		store.clear = withIEStorage(function(storage) {                                                                 // 130
			var attributes = storage.XMLDocument.documentElement.attributes                                                // 131
			storage.load(localStorageName)                                                                                 // 132
			for (var i=0, attr; attr=attributes[i]; i++) {                                                                 // 133
				storage.removeAttribute(attr.name)                                                                            // 134
			}                                                                                                              // 135
			storage.save(localStorageName)                                                                                 // 136
		})                                                                                                              // 137
		store.getAll = function(storage) {                                                                              // 138
			var ret = {}                                                                                                   // 139
			store.forEach(function(key, val) {                                                                             // 140
				ret[key] = val                                                                                                // 141
			})                                                                                                             // 142
			return ret                                                                                                     // 143
		}                                                                                                               // 144
		store.forEach = withIEStorage(function(storage, callback) {                                                     // 145
			var attributes = storage.XMLDocument.documentElement.attributes                                                // 146
			for (var i=0, attr; attr=attributes[i]; ++i) {                                                                 // 147
				callback(attr.name, store.deserialize(storage.getAttribute(attr.name)))                                       // 148
			}                                                                                                              // 149
		})                                                                                                              // 150
	}                                                                                                                // 151
                                                                                                                  // 152
	try {                                                                                                            // 153
		var testKey = '__storejs__'                                                                                     // 154
		store.set(testKey, testKey)                                                                                     // 155
		if (store.get(testKey) != testKey) { store.disabled = true }                                                    // 156
		store.remove(testKey)                                                                                           // 157
	} catch(e) {                                                                                                     // 158
		store.disabled = true                                                                                           // 159
	}                                                                                                                // 160
	store.enabled = !store.disabled                                                                                  // 161
                                                                                                                  // 162
	if (typeof module != 'undefined' && module.exports && this.module !== module) { module.exports = store }         // 163
	else if (typeof define === 'function' && define.amd) { define(store) }                                           // 164
	else { win.store = store }                                                                                       // 165
                                                                                                                  // 166
})(Function('return this')());                                                                                    // 167
                                                                                                                  // 168
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);






(function () {

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                //
// packages/mrt:reactive-store/reactivestore.js                                                                   //
//                                                                                                                //
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                  //
ReactiveStore = {};                                                                                               // 1
                                                                                                                  // 2
ReactiveStore._deps = {};                                                                                         // 3
ReactiveStore._dep = new Deps.Dependency();                                                                       // 4
                                                                                                                  // 5
ReactiveStore.get = function(name) {                                                                              // 6
  var _dep = ReactiveStore._deps[name];                                                                           // 7
  if(!_dep) {                                                                                                     // 8
    ReactiveStore._deps[name] = new Deps.Dependency();                                                            // 9
    _dep = ReactiveStore._deps[name];                                                                             // 10
  }                                                                                                               // 11
  _dep.depend();                                                                                                  // 12
                                                                                                                  // 13
  return store.get(name)                                                                                          // 14
};                                                                                                                // 15
                                                                                                                  // 16
ReactiveStore.set = function(name, value) {                                                                       // 17
                                                                                                                  // 18
  store.set(name, value)                                                                                          // 19
                                                                                                                  // 20
  var _dep = ReactiveStore._deps[name];                                                                           // 21
  if(!_dep) {                                                                                                     // 22
    ReactiveStore._deps[name] = new Deps.Dependency();                                                            // 23
    _dep = ReactiveStore._deps[name];                                                                             // 24
  }                                                                                                               // 25
  _dep.changed();                                                                                                 // 26
  ReactiveStore._dep.changed();                                                                                   // 27
};                                                                                                                // 28
                                                                                                                  // 29
                                                                                                                  // 30
ReactiveStore.getAll = function() {                                                                               // 31
  ReactiveStore._dep.depend();                                                                                    // 32
                                                                                                                  // 33
  return store.getAll();                                                                                          // 34
};                                                                                                                // 35
                                                                                                                  // 36
                                                                                                                  // 37
ReactiveStore.remove = function(name) {                                                                           // 38
  store.remove(name)                                                                                              // 39
};                                                                                                                // 40
                                                                                                                  // 41
                                                                                                                  // 42
ReactiveStore.clearAll = function() {                                                                             // 43
  store.clearAll();                                                                                               // 44
                                                                                                                  // 45
  ReactiveStore._dep.changed();                                                                                   // 46
};                                                                                                                // 47
                                                                                                                  // 48
                                                                                                                  // 49
                                                                                                                  // 50
                                                                                                                  // 51
                                                                                                                  // 52
                                                                                                                  // 53
                                                                                                                  // 54
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}).call(this);


/* Exports */
Package._define("mrt:reactive-store", {
  ReactiveStore: ReactiveStore
});

})();
