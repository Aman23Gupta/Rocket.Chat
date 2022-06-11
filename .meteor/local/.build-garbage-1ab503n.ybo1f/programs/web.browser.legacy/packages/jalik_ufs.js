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
var _ = Package.underscore._;
var CollectionHooks = Package['matb33:collection-hooks'].CollectionHooks;
var Mongo = Package.mongo.Mongo;
var meteorInstall = Package.modules.meteorInstall;
var meteorBabelHelpers = Package.modules.meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;

var require = meteorInstall({"node_modules":{"meteor":{"jalik:ufs":{"ufs.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/jalik_ufs/ufs.js                                                                                     //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
!function (module1) {
  var _typeof;

  module1.link("@babel/runtime/helpers/typeof", {
    default: function (v) {
      _typeof = v;
    }
  }, 0);
  module1.export({
    UploadFS: function () {
      return UploadFS;
    }
  });
  var Meteor;
  module1.link("meteor/meteor", {
    Meteor: function (v) {
      Meteor = v;
    }
  }, 0);
  var Random;
  module1.link("meteor/random", {
    Random: function (v) {
      Random = v;
    }
  }, 1);
  var Config;
  module1.link("./ufs-config", {
    Config: function (v) {
      Config = v;
    }
  }, 2);
  var Filter;
  module1.link("./ufs-filter", {
    Filter: function (v) {
      Filter = v;
    }
  }, 3);
  var MIME;
  module1.link("./ufs-mime", {
    MIME: function (v) {
      MIME = v;
    }
  }, 4);
  var Store;
  module1.link("./ufs-store", {
    Store: function (v) {
      Store = v;
    }
  }, 5);
  var StorePermissions;
  module1.link("./ufs-store-permissions", {
    StorePermissions: function (v) {
      StorePermissions = v;
    }
  }, 6);
  var Tokens;
  module1.link("./ufs-tokens", {
    Tokens: function (v) {
      Tokens = v;
    }
  }, 7);
  var Uploader;
  module1.link("./ufs-uploader", {
    Uploader: function (v) {
      Uploader = v;
    }
  }, 8);
  var stores = {};
  var UploadFS = {
    /**
     * Contains all stores
     */
    store: {},

    /**
     * Collection of tokens
     */
    tokens: Tokens,

    /**
     * Adds the "etag" attribute to files
     * @param where
     */
    addETagAttributeToFiles: function (where) {
      var _this = this;

      this.getStores().forEach(function (store) {
        var files = store.getCollection(); // By default update only files with no path set

        files.find(where || {
          etag: null
        }, {
          fields: {
            _id: 1
          }
        }).forEach(function (file) {
          files.direct.update(file._id, {
            $set: {
              etag: _this.generateEtag()
            }
          });
        });
      });
    },

    /**
     * Adds the MIME type for an extension
     * @param extension
     * @param mime
     */
    addMimeType: function (extension, mime) {
      MIME[extension.toLowerCase()] = mime;
    },

    /**
     * Adds the "path" attribute to files
     * @param where
     */
    addPathAttributeToFiles: function (where) {
      this.getStores().forEach(function (store) {
        var files = store.getCollection(); // By default update only files with no path set

        files.find(where || {
          path: null
        }, {
          fields: {
            _id: 1
          }
        }).forEach(function (file) {
          files.direct.update(file._id, {
            $set: {
              path: store.getFileRelativeURL(file._id)
            }
          });
        });
      });
    },

    /**
     * Registers the store
     * @param store
     */
    addStore: function (store) {
      if (!(store instanceof Store)) {
        throw new TypeError('ufs: store is not an instance of UploadFS.Store.');
      }

      stores[store.getName()] = store;
    },

    /**
     * Generates a unique ETag
     * @return {string}
     */
    generateEtag: function () {
      return Random.id();
    },

    /**
     * Returns the MIME type of the extension
     * @param extension
     * @returns {*}
     */
    getMimeType: function (extension) {
      extension = extension.toLowerCase();
      return MIME[extension];
    },

    /**
     * Returns all MIME types
     */
    getMimeTypes: function () {
      return MIME;
    },

    /**
     * Returns the store by its name
     * @param name
     * @return {UploadFS.Store}
     */
    getStore: function (name) {
      return stores[name];
    },

    /**
     * Returns all stores
     * @return {object}
     */
    getStores: function () {
      return stores;
    },

    /**
     * Returns the temporary file path
     * @param fileId
     * @return {string}
     */
    getTempFilePath: function (fileId) {
      return this.config.tmpDir + "/" + fileId;
    },

    /**
     * Imports a file from a URL
     * @param url
     * @param file
     * @param store
     * @param callback
     */
    importFromURL: function (url, file, store, callback) {
      if (typeof store === 'string') {
        Meteor.call('ufsImportURL', url, file, store, callback);
      } else if (_typeof(store) === 'object') {
        store.importFromURL(url, file, callback);
      }
    },

    /**
     * Returns file and data as ArrayBuffer for each files in the event
     * @deprecated
     * @param event
     * @param callback
     */
    readAsArrayBuffer: function () {
      console.error('UploadFS.readAsArrayBuffer is deprecated, see https://github.com/jalik/jalik-ufs#uploading-from-a-file');
    },

    /**
     * Opens a dialog to select a single file
     * @param callback
     */
    selectFile: function (callback) {
      var input = document.createElement('input');
      input.type = 'file';
      input.multiple = false;

      input.onchange = function (ev) {
        var files = ev.target.files;
        callback.call(UploadFS, files[0]);
      }; // Fix for iOS/Safari


      var div = document.createElement('div');
      div.className = 'ufs-file-selector';
      div.style = 'display:none; height:0; width:0; overflow: hidden;';
      div.appendChild(input);
      document.body.appendChild(div); // Trigger file selection

      input.click();
    },

    /**
     * Opens a dialog to select multiple files
     * @param callback
     */
    selectFiles: function (callback) {
      var input = document.createElement('input');
      input.type = 'file';
      input.multiple = true;

      input.onchange = function (ev) {
        var files = ev.target.files;

        for (var i = 0; i < files.length; i += 1) {
          callback.call(UploadFS, files[i]);
        }
      }; // Fix for iOS/Safari


      var div = document.createElement('div');
      div.className = 'ufs-file-selector';
      div.style = 'display:none; height:0; width:0; overflow: hidden;';
      div.appendChild(input);
      document.body.appendChild(div); // Trigger file selection

      input.click();
    }
  };

  if (Meteor.isServer) {
    require('./ufs-methods');

    require('./ufs-server');
  }
  /**
   * UploadFS Configuration
   * @type {Config}
   */


  UploadFS.config = new Config(); // Add classes to global namespace

  UploadFS.Config = Config;
  UploadFS.Filter = Filter;
  UploadFS.Store = Store;
  UploadFS.StorePermissions = StorePermissions;
  UploadFS.Uploader = Uploader;

  if (Meteor.isServer) {
    // Expose the module globally
    if (typeof global !== 'undefined') {
      global.UploadFS = UploadFS;
    }
  } else if (Meteor.isClient) {
    // Expose the module globally
    if (typeof window !== 'undefined') {
      window.UploadFS = UploadFS;
    }
  }
}.call(this, module);
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ufs-config.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/jalik_ufs/ufs-config.js                                                                              //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
module.export({
  Config: function () {
    return Config;
  }
});

var _;

module.link("meteor/underscore", {
  _: function (v) {
    _ = v;
  }
}, 0);
var StorePermissions;
module.link("./ufs-store-permissions", {
  StorePermissions: function (v) {
    StorePermissions = v;
  }
}, 1);

var Config = function () {
  function Config(options) {
    // Default options
    options = _.extend({
      defaultStorePermissions: null,
      https: false,
      simulateReadDelay: 0,
      simulateUploadSpeed: 0,
      simulateWriteDelay: 0,
      storesPath: 'ufs',
      tmpDir: '/tmp/ufs',
      tmpDirPermissions: '0700'
    }, options); // Check options

    if (options.defaultStorePermissions && !(options.defaultStorePermissions instanceof StorePermissions)) {
      throw new TypeError('Config: defaultStorePermissions is not an instance of StorePermissions');
    }

    if (typeof options.https !== 'boolean') {
      throw new TypeError('Config: https is not a function');
    }

    if (typeof options.simulateReadDelay !== 'number') {
      throw new TypeError('Config: simulateReadDelay is not a number');
    }

    if (typeof options.simulateUploadSpeed !== 'number') {
      throw new TypeError('Config: simulateUploadSpeed is not a number');
    }

    if (typeof options.simulateWriteDelay !== 'number') {
      throw new TypeError('Config: simulateWriteDelay is not a number');
    }

    if (typeof options.storesPath !== 'string') {
      throw new TypeError('Config: storesPath is not a string');
    }

    if (typeof options.tmpDir !== 'string') {
      throw new TypeError('Config: tmpDir is not a string');
    }

    if (typeof options.tmpDirPermissions !== 'string') {
      throw new TypeError('Config: tmpDirPermissions is not a string');
    }
    /**
     * Default store permissions
     * @type {UploadFS.StorePermissions}
     */


    this.defaultStorePermissions = options.defaultStorePermissions;
    /**
     * Use or not secured protocol in URLS
     * @type {boolean}
     */

    this.https = options.https;
    /**
     * The simulation read delay
     * @type {Number}
     */

    this.simulateReadDelay = parseInt(options.simulateReadDelay);
    /**
     * The simulation upload speed
     * @type {Number}
     */

    this.simulateUploadSpeed = parseInt(options.simulateUploadSpeed);
    /**
     * The simulation write delay
     * @type {Number}
     */

    this.simulateWriteDelay = parseInt(options.simulateWriteDelay);
    /**
     * The URL root path of stores
     * @type {string}
     */

    this.storesPath = options.storesPath;
    /**
     * The temporary directory of uploading files
     * @type {string}
     */

    this.tmpDir = options.tmpDir;
    /**
     * The permissions of the temporary directory
     * @type {string}
     */

    this.tmpDirPermissions = options.tmpDirPermissions;
  }

  return Config;
}();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ufs-filter.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/jalik_ufs/ufs-filter.js                                                                              //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var _typeof;

module.link("@babel/runtime/helpers/typeof", {
  default: function (v) {
    _typeof = v;
  }
}, 0);
module.export({
  Filter: function () {
    return Filter;
  }
});
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);

var _;

module.link("meteor/underscore", {
  _: function (v) {
    _ = v;
  }
}, 1);

var Filter = /*#__PURE__*/function () {
  function Filter(options) {
    var self = this; // Default options

    options = _.extend({
      contentTypes: null,
      extensions: null,
      minSize: 1,
      maxSize: 0,
      invalidFileError: function () {
        return new Meteor.Error('invalid-file', 'File is not valid');
      },
      fileTooSmallError: function (fileSize, minFileSize) {
        return new Meteor.Error('file-too-small', "File size (size = " + fileSize + ") is too small (min = " + minFileSize + ")");
      },
      fileTooLargeError: function (fileSize, maxFileSize) {
        return new Meteor.Error('file-too-large', "File size (size = " + fileSize + ") is too large (max = " + maxFileSize + ")");
      },
      invalidFileExtension: function (fileExtension, allowedExtensions) {
        return new Meteor.Error('invalid-file-extension', "File extension \"" + fileExtension + "\" is not accepted (" + allowedExtensions + ")");
      },
      invalidFileType: function (fileType, allowedContentTypes) {
        return new Meteor.Error('invalid-file-type', "File type \"" + fileType + "\" is not accepted (" + allowedContentTypes + ")");
      },
      onCheck: this.onCheck
    }, options); // Check options

    if (options.contentTypes && !(options.contentTypes instanceof Array)) {
      throw new TypeError('Filter: contentTypes is not an Array');
    }

    if (options.extensions && !(options.extensions instanceof Array)) {
      throw new TypeError('Filter: extensions is not an Array');
    }

    if (typeof options.minSize !== 'number') {
      throw new TypeError('Filter: minSize is not a number');
    }

    if (typeof options.maxSize !== 'number') {
      throw new TypeError('Filter: maxSize is not a number');
    }

    if (options.onCheck && typeof options.onCheck !== 'function') {
      throw new TypeError('Filter: onCheck is not a function');
    } // Public attributes


    self.options = options;
    ['onCheck'].forEach(function (method) {
      if (typeof options[method] === 'function') {
        self[method] = options[method];
      }
    });
  }
  /**
   * Checks the file
   * @param file
   */


  var _proto = Filter.prototype;

  _proto.check = function () {
    function check(file) {
      var error = null;

      if (_typeof(file) !== 'object' || !file) {
        error = this.options.invalidFileError();
      } // Check size


      var fileSize = file.size;
      var minSize = this.getMinSize();

      if (fileSize <= 0 || fileSize < minSize) {
        error = this.options.fileTooSmallError(fileSize, minSize);
      }

      var maxSize = this.getMaxSize();

      if (maxSize > 0 && fileSize > maxSize) {
        error = this.options.fileTooLargeError(fileSize, maxSize);
      } // Check extension


      var allowedExtensions = this.getExtensions();
      var fileExtension = file.extension;

      if (allowedExtensions && !allowedExtensions.includes(fileExtension)) {
        error = this.options.invalidFileExtension(fileExtension, allowedExtensions);
      } // Check content type


      var allowedContentTypes = this.getContentTypes();
      var fileTypes = file.type;

      if (allowedContentTypes && !this.isContentTypeInList(fileTypes, allowedContentTypes)) {
        error = this.options.invalidFileType(fileTypes, allowedContentTypes);
      } // Apply custom check


      if (typeof this.onCheck === 'function' && !this.onCheck(file)) {
        error = new Meteor.Error('invalid-file', 'File does not match filter');
      }

      if (error) {
        throw error;
      }
    }

    return check;
  }()
  /**
   * Returns the allowed content types
   * @return {Array}
   */
  ;

  _proto.getContentTypes = function () {
    function getContentTypes() {
      return this.options.contentTypes;
    }

    return getContentTypes;
  }()
  /**
   * Returns the allowed extensions
   * @return {Array}
   */
  ;

  _proto.getExtensions = function () {
    function getExtensions() {
      return this.options.extensions;
    }

    return getExtensions;
  }()
  /**
   * Returns the maximum file size
   * @return {Number}
   */
  ;

  _proto.getMaxSize = function () {
    function getMaxSize() {
      return this.options.maxSize;
    }

    return getMaxSize;
  }()
  /**
   * Returns the minimum file size
   * @return {Number}
   */
  ;

  _proto.getMinSize = function () {
    function getMinSize() {
      return this.options.minSize;
    }

    return getMinSize;
  }()
  /**
   * Checks if content type is in the given list
   * @param type
   * @param list
   * @return {boolean}
   */
  ;

  _proto.isContentTypeInList = function () {
    function isContentTypeInList(type, list) {
      if (typeof type === 'string' && list instanceof Array) {
        if (list.includes(type)) {
          return true;
        }

        var wildCardGlob = '/*';
        var wildcards = list.filter(function (item) {
          return item.indexOf(wildCardGlob) > 0;
        });

        if (wildcards.includes(type.replace(/(\/.*)$/, wildCardGlob))) {
          return true;
        }
      }

      return false;
    }

    return isContentTypeInList;
  }()
  /**
   * Checks if the file matches filter
   * @param file
   * @return {boolean}
   */
  ;

  _proto.isValid = function () {
    function isValid(file) {
      var result = true;

      try {
        this.check(file);
      } catch (err) {
        result = false;
      }

      return result;
    }

    return isValid;
  }()
  /**
   * Executes custom checks
   * @param file
   * @return {boolean}
   */
  // eslint-disable-next-line no-unused-vars
  ;

  _proto.onCheck = function () {
    function onCheck(file) {
      return true;
    }

    return onCheck;
  }();

  return Filter;
}();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ufs-methods.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/jalik_ufs/ufs-methods.js                                                                             //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var _typeof;

module.link("@babel/runtime/helpers/typeof", {
  default: function (v) {
    _typeof = v;
  }
}, 0);
var check;
module.link("meteor/check", {
  check: function (v) {
    check = v;
  }
}, 0);
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 1);
var UploadFS;
module.link("./ufs", {
  UploadFS: function (v) {
    UploadFS = v;
  }
}, 2);
var Filter;
module.link("./ufs-filter", {
  Filter: function (v) {
    Filter = v;
  }
}, 3);
var Tokens;
module.link("./ufs-tokens", {
  Tokens: function (v) {
    Tokens = v;
  }
}, 4);

var fs = Npm.require('fs');

var http = Npm.require('http');

var https = Npm.require('https');

var Future = Npm.require('fibers/future');

if (Meteor.isServer) {
  Meteor.methods({
    /**
     * Completes the file transfer
     * @param fileId
     * @param storeName
     * @param token
     */
    ufsComplete: function (fileId, storeName, token) {
      check(fileId, String);
      check(storeName, String);
      check(token, String); // Get store

      var store = UploadFS.getStore(storeName);

      if (!store) {
        throw new Meteor.Error('invalid-store', 'Store not found');
      } // Check token


      if (!store.checkToken(token, fileId)) {
        throw new Meteor.Error('invalid-token', 'Token is not valid');
      }

      var fut = new Future();
      var tmpFile = UploadFS.getTempFilePath(fileId);

      var removeTempFile = function () {
        fs.unlink(tmpFile, function (err) {
          err && console.error("ufs: cannot delete temp file \"" + tmpFile + "\" (" + err.message + ")");
        });
      };

      try {
        // todo check if temp file exists
        // Get file
        var file = store.getCollection().findOne({
          _id: fileId
        }); // Validate file before moving to the store

        store.validate(file); // Get the temp file

        var rs = fs.createReadStream(tmpFile, {
          flags: 'r',
          encoding: null,
          autoClose: true
        }); // Clean upload if error occurs

        rs.on('error', Meteor.bindEnvironment(function (err) {
          console.error(err);
          store.getCollection().remove({
            _id: fileId
          });
          fut.throw(err);
        })); // Save file in the store

        store.write(rs, fileId, Meteor.bindEnvironment(function (err, file) {
          removeTempFile();

          if (err) {
            fut.throw(err);
          } else {
            // File has been fully uploaded
            // so we don't need to keep the token anymore.
            // Also this ensure that the file cannot be modified with extra chunks later.
            Tokens.remove({
              fileId: fileId
            });
            fut.return(file);
          }
        })); // catch will not work if fut.wait() is outside try/catch

        return fut.wait();
      } catch (err) {
        // If write failed, remove the file
        store.getCollection().remove({
          _id: fileId
        }); // removeTempFile(); // todo remove temp file on error or try again ?

        throw new Meteor.Error('ufs: cannot upload file', err);
      }
    },

    /**
     * Creates the file and returns the file upload token
     * @param file
     * @return {{fileId: string, token: *, url: *}}
     */
    ufsCreate: function (file) {
      check(file, Object);

      if (typeof file.name !== 'string' || !file.name.length) {
        throw new Meteor.Error('invalid-file-name', 'file name is not valid');
      }

      if (typeof file.store !== 'string' || !file.store.length) {
        throw new Meteor.Error('invalid-store', 'store is not valid');
      } // Get store


      var store = UploadFS.getStore(file.store);

      if (!store) {
        throw new Meteor.Error('invalid-store', 'Store not found');
      } // Set default info


      file.complete = false;
      file.uploading = false;
      file.extension = file.name && file.name.substr((~-file.name.lastIndexOf('.') >>> 0) + 2).toLowerCase(); // Assign file MIME type based on the extension

      if (file.extension && !file.type) {
        file.type = UploadFS.getMimeType(file.extension) || 'application/octet-stream';
      }

      file.progress = 0;
      file.size = parseInt(file.size) || 0;
      file.userId = file.userId || this.userId; // Check if the file matches store filter

      var filter = store.getFilter();

      if (filter instanceof Filter) {
        filter.check(file);
      } // Create the file


      var fileId = store.create(file);
      var token = store.createToken(fileId);
      var uploadUrl = store.getURL(fileId + "?token=" + token);
      return {
        fileId: fileId,
        token: token,
        url: uploadUrl
      };
    },

    /**
     * Deletes a file
     * @param fileId
     * @param storeName
     * @param token
     * @returns {*}
     */
    ufsDelete: function (fileId, storeName, token) {
      check(fileId, String);
      check(storeName, String);
      check(token, String); // Check store

      var store = UploadFS.getStore(storeName);

      if (!store) {
        throw new Meteor.Error('invalid-store', 'Store not found');
      } // Ignore files that does not exist


      if (store.getCollection().find({
        _id: fileId
      }).count() === 0) {
        return 1;
      } // Check token


      if (!store.checkToken(token, fileId)) {
        throw new Meteor.Error('invalid-token', 'Token is not valid');
      }

      return store.getCollection().remove({
        _id: fileId
      });
    },

    /**
     * Imports a file from the URL
     * @param url
     * @param file
     * @param storeName
     * @return {*}
     */
    ufsImportURL: function (url, file, storeName) {
      check(url, String);
      check(file, Object);
      check(storeName, String); // Check URL

      if (typeof url !== 'string' || url.length <= 0) {
        throw new Meteor.Error('invalid-url', 'The url is not valid');
      } // Check file


      if (_typeof(file) !== 'object' || file === null) {
        throw new Meteor.Error('invalid-file', 'The file is not valid');
      } // Check store


      var store = UploadFS.getStore(storeName);

      if (!store) {
        throw new Meteor.Error('invalid-store', 'The store does not exist');
      }

      var parsedUrl;

      try {
        parsedUrl = new URL(url);
      } catch (e) {
        throw new Meteor.Error('invalid-url', 'The url is not valid');
      }

      if (['localhost', '127.0.0.1', '0.0.0.0'].includes(parsedUrl.hostname)) {
        throw new Meteor.Error('invalid-url', 'URL cannot reference localhost');
      } // Extract file info


      if (!file.name) {
        file.name = url.replace(/\?.*$/, '').split('/').pop();
      }

      if (file.name && !file.extension) {
        file.extension = file.name && file.name.substr((~-file.name.lastIndexOf('.') >>> 0) + 2).toLowerCase();
      }

      if (file.extension && !file.type) {
        // Assign file MIME type based on the extension
        file.type = UploadFS.getMimeType(file.extension) || 'application/octet-stream';
      } // Check if file is valid


      if (store.getFilter() instanceof Filter) {
        store.getFilter().check(file);
      }

      if (file.originalUrl) {
        console.warn('ufs: The "originalUrl" attribute is automatically set when importing a file from a URL');
      } // Add original URL


      file.originalUrl = url; // Create the file

      file.complete = false;
      file.uploading = true;
      file.progress = 0;
      file._id = store.create(file);
      var fut = new Future();
      var proto; // Detect protocol to use

      if (/http:\/\//i.test(url)) {
        proto = http;
      } else if (/https:\/\//i.test(url)) {
        proto = https;
      }

      this.unblock(); // Download file

      proto.get(url, Meteor.bindEnvironment(function (res) {
        // Save the file in the store
        store.write(res, file._id, function (err, file) {
          if (err) {
            fut.throw(err);
          } else {
            fut.return(file);
          }
        });
      })).on('error', function (err) {
        fut.throw(err);
      });
      return fut.wait();
    },

    /**
     * Marks the file uploading as stopped
     * @param fileId
     * @param storeName
     * @param token
     * @returns {*}
     */
    ufsStop: function (fileId, storeName, token) {
      check(fileId, String);
      check(storeName, String);
      check(token, String); // Check store

      var store = UploadFS.getStore(storeName);

      if (!store) {
        throw new Meteor.Error('invalid-store', 'Store not found');
      } // Check file


      var file = store.getCollection().find({
        _id: fileId
      }, {
        fields: {
          userId: 1
        }
      });

      if (!file) {
        throw new Meteor.Error('invalid-file', 'File not found');
      } // Check token


      if (!store.checkToken(token, fileId)) {
        throw new Meteor.Error('invalid-token', 'Token is not valid');
      }

      return store.getCollection().update({
        _id: fileId
      }, {
        $set: {
          uploading: false
        }
      });
    }
  });
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ufs-mime.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/jalik_ufs/ufs-mime.js                                                                                //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
module.export({
  MIME: function () {
    return MIME;
  }
});
var MIME = {
  // application
  '7z': 'application/x-7z-compressed',
  'arc': 'application/octet-stream',
  'ai': 'application/postscript',
  'bin': 'application/octet-stream',
  'bz': 'application/x-bzip',
  'bz2': 'application/x-bzip2',
  'eps': 'application/postscript',
  'exe': 'application/octet-stream',
  'gz': 'application/x-gzip',
  'gzip': 'application/x-gzip',
  'js': 'application/javascript',
  'json': 'application/json',
  'ogx': 'application/ogg',
  'pdf': 'application/pdf',
  'ps': 'application/postscript',
  'psd': 'application/octet-stream',
  'rar': 'application/x-rar-compressed',
  'rev': 'application/x-rar-compressed',
  'swf': 'application/x-shockwave-flash',
  'tar': 'application/x-tar',
  'xhtml': 'application/xhtml+xml',
  'xml': 'application/xml',
  'zip': 'application/zip',
  // audio
  'aif': 'audio/aiff',
  'aifc': 'audio/aiff',
  'aiff': 'audio/aiff',
  'au': 'audio/basic',
  'flac': 'audio/flac',
  'midi': 'audio/midi',
  'mp2': 'audio/mpeg',
  'mp3': 'audio/mpeg',
  'mpa': 'audio/mpeg',
  'oga': 'audio/ogg',
  'ogg': 'audio/ogg',
  'opus': 'audio/ogg',
  'ra': 'audio/vnd.rn-realaudio',
  'spx': 'audio/ogg',
  'wav': 'audio/x-wav',
  'weba': 'audio/webm',
  'wma': 'audio/x-ms-wma',
  // image
  'avs': 'image/avs-video',
  'bmp': 'image/x-windows-bmp',
  'gif': 'image/gif',
  'ico': 'image/vnd.microsoft.icon',
  'jpeg': 'image/jpeg',
  'jpg': 'image/jpg',
  'mjpg': 'image/x-motion-jpeg',
  'pic': 'image/pic',
  'png': 'image/png',
  'svg': 'image/svg+xml',
  'tif': 'image/tiff',
  'tiff': 'image/tiff',
  // text
  'css': 'text/css',
  'csv': 'text/csv',
  'html': 'text/html',
  'txt': 'text/plain',
  // video
  'avi': 'video/avi',
  'dv': 'video/x-dv',
  'flv': 'video/x-flv',
  'mov': 'video/quicktime',
  'mp4': 'video/mp4',
  'mpeg': 'video/mpeg',
  'mpg': 'video/mpg',
  'ogv': 'video/ogg',
  'vdo': 'video/vdo',
  'webm': 'video/webm',
  'wmv': 'video/x-ms-wmv',
  // specific to vendors
  'doc': 'application/msword',
  'docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  'odb': 'application/vnd.oasis.opendocument.database',
  'odc': 'application/vnd.oasis.opendocument.chart',
  'odf': 'application/vnd.oasis.opendocument.formula',
  'odg': 'application/vnd.oasis.opendocument.graphics',
  'odi': 'application/vnd.oasis.opendocument.image',
  'odm': 'application/vnd.oasis.opendocument.text-master',
  'odp': 'application/vnd.oasis.opendocument.presentation',
  'ods': 'application/vnd.oasis.opendocument.spreadsheet',
  'odt': 'application/vnd.oasis.opendocument.text',
  'otg': 'application/vnd.oasis.opendocument.graphics-template',
  'otp': 'application/vnd.oasis.opendocument.presentation-template',
  'ots': 'application/vnd.oasis.opendocument.spreadsheet-template',
  'ott': 'application/vnd.oasis.opendocument.text-template',
  'ppt': 'application/vnd.ms-powerpoint',
  'pptx': 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  'xls': 'application/vnd.ms-excel',
  'xlsx': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
};
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ufs-server.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/jalik_ufs/ufs-server.js                                                                              //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var _typeof;

module.link("@babel/runtime/helpers/typeof", {
  default: function (v) {
    _typeof = v;
  }
}, 0);
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);
var WebApp;
module.link("meteor/webapp", {
  WebApp: function (v) {
    WebApp = v;
  }
}, 1);
var SparkMD5;
module.link("spark-md5", {
  "default": function (v) {
    SparkMD5 = v;
  }
}, 2);
var UploadFS;
module.link("./ufs", {
  UploadFS: function (v) {
    UploadFS = v;
  }
}, 3);

if (Meteor.isServer) {
  var domain = Npm.require('domain');

  var fs = Npm.require('fs'); // eslint-disable-next-line no-unused-vars


  var http = Npm.require('http'); // eslint-disable-next-line no-unused-vars


  var https = Npm.require('https');

  var mkdirp = Npm.require('mkdirp');

  var stream = Npm.require('stream');

  var URL = Npm.require('url');

  var zlib = Npm.require('zlib');

  Meteor.startup(function () {
    var path = UploadFS.config.tmpDir;
    var mode = UploadFS.config.tmpDirPermissions;
    fs.stat(path, function (err) {
      if (err) {
        // Create the temp directory
        mkdirp(path, {
          mode: mode
        }, function (err) {
          if (err) {
            console.error("ufs: cannot create temp directory at \"" + path + "\" (" + err.message + ")");
          } else {
            console.log("ufs: temp directory created at \"" + path + "\"");
          }
        });
      } else {
        // Set directory permissions
        fs.chmod(path, mode, function (err) {
          err && console.error("ufs: cannot set temp directory permissions " + mode + " (" + err.message + ")");
        });
      }
    });
  }); // Create domain to handle errors
  // and possibly avoid server crashes.

  var d = domain.create();
  d.on('error', function (err) {
    console.error("ufs: " + err.message);
  }); // Listen HTTP requests to serve files

  WebApp.connectHandlers.use(function (req, res, next) {
    // Quick check to see if request should be caught
    if (!req.url.includes("/" + UploadFS.config.storesPath + "/")) {
      next();
      return;
    } // Remove store path


    var parsedUrl = URL.parse(req.url);
    var path = parsedUrl.pathname.substr(UploadFS.config.storesPath.length + 1);

    var allowCORS = function () {
      // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
      res.setHeader('Access-Control-Allow-Methods', 'POST');
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    };

    if (req.method === 'OPTIONS') {
      var regExp = new RegExp('^/([^/?]+)/([^/?]+)$');
      var match = regExp.exec(path); // Request is not valid

      if (match === null) {
        res.writeHead(400);
        res.end();
        return;
      } // Get store


      var store = UploadFS.getStore(match[1]);

      if (!store) {
        res.writeHead(404);
        res.end();
        return;
      } // If a store is found, go ahead and allow the origin


      allowCORS();
      next();
    } else if (req.method === 'POST') {
      // Get store
      var _regExp = new RegExp('^/([^/?]+)/([^/?]+)$');

      var _match = _regExp.exec(path); // Request is not valid


      if (_match === null) {
        res.writeHead(400);
        res.end();
        return;
      } // Get store


      var _store = UploadFS.getStore(_match[1]);

      if (!_store) {
        res.writeHead(404);
        res.end();
        return;
      } // If a store is found, go ahead and allow the origin


      allowCORS(); // Get file

      var fileId = _match[2];

      if (_store.getCollection().find({
        _id: fileId
      }).count() === 0) {
        res.writeHead(404);
        res.end();
        return;
      } // Check upload token


      if (!_store.checkToken(req.query.token, fileId)) {
        res.writeHead(403);
        res.end();
        return;
      } // Check if duplicate


      var unique = function (hash) {
        var originalId = _store.getCollection().findOne({
          hash: hash,
          _id: {
            $ne: fileId
          }
        });

        return originalId ? originalId._id : false;
      };

      var spark = new SparkMD5.ArrayBuffer();
      var tmpFile = UploadFS.getTempFilePath(fileId);
      var ws = fs.createWriteStream(tmpFile, {
        flags: 'a'
      });
      var fields = {
        uploading: true
      };
      var progress = parseFloat(req.query.progress);

      if (!isNaN(progress) && progress > 0) {
        fields.progress = Math.min(progress, 1);
      }

      req.on('data', function (chunk) {
        ws.write(chunk);
        spark.append(chunk);
      }); // eslint-disable-next-line no-unused-vars

      req.on('error', function (err) {
        res.writeHead(500);
        res.end();
      });
      req.on('end', Meteor.bindEnvironment(function () {
        // Update completed state without triggering hooks
        fields.hash = spark.end();
        fields.originalId = unique(fields.hash);

        _store.getCollection().direct.update({
          _id: fileId
        }, {
          $set: fields
        });

        ws.end();
      }));
      ws.on('error', function (err) {
        console.error("ufs: cannot write chunk of file \"" + fileId + "\" (" + err.message + ")");
        fs.unlink(tmpFile, function (err) {
          err && console.error("ufs: cannot delete temp file \"" + tmpFile + "\" (" + err.message + ")");
        });
        res.writeHead(500);
        res.end();
      });
      ws.on('finish', function () {
        res.writeHead(204, {
          'Content-Type': 'text/plain'
        });
        res.end();
      });
    } else if (req.method === 'GET') {
      // Get store, file Id and file name
      var _regExp2 = new RegExp('^/([^/?]+)/([^/?]+)(?:/([^/?]+))?$');

      var _match2 = _regExp2.exec(path); // Avoid 504 Gateway timeout error
      // if file is not handled by UploadFS.


      if (_match2 === null) {
        next();
        return;
      } // Get store


      var storeName = _match2[1];

      var _store2 = UploadFS.getStore(storeName);

      if (!_store2) {
        res.writeHead(404);
        res.end();
        return;
      }

      if (_store2.onRead !== null && _store2.onRead !== undefined && typeof _store2.onRead !== 'function') {
        console.error("ufs: Store.onRead is not a function in store \"" + storeName + "\"");
        res.writeHead(500);
        res.end();
        return;
      } // Remove file extension from file Id


      var index = _match2[2].indexOf('.');

      var _fileId = index !== -1 ? _match2[2].substr(0, index) : _match2[2]; // Get file from database


      var file = _store2.getCollection().findOne({
        _id: _fileId
      });

      if (!file) {
        res.writeHead(404);
        res.end();
        return;
      } // Simulate read speed


      if (UploadFS.config.simulateReadDelay) {
        Meteor._sleepForMs(UploadFS.config.simulateReadDelay);
      }

      d.run(function () {
        // Check if the file can be accessed
        if (_store2.onRead.call(_store2, _fileId, file, req, res) !== false) {
          var options = {};
          var status = 200; // Prepare response headers

          var headers = {
            'Content-Type': file.type,
            'Content-Length': file.size
          }; // Add ETag header

          if (typeof file.etag === 'string') {
            headers.ETag = file.etag;
          } // Add Last-Modified header


          if (file.modifiedAt instanceof Date) {
            headers['Last-Modified'] = file.modifiedAt.toUTCString();
          } else if (file.uploadedAt instanceof Date) {
            headers['Last-Modified'] = file.uploadedAt.toUTCString();
          } // Parse request headers


          if (_typeof(req.headers) === 'object') {
            // Compare ETag
            if (req.headers['if-none-match']) {
              if (file.etag === req.headers['if-none-match']) {
                res.writeHead(304); // Not Modified

                res.end();
                return;
              }
            } // Compare file modification date


            if (req.headers['if-modified-since']) {
              var modifiedSince = new Date(req.headers['if-modified-since']);

              if (file.modifiedAt instanceof Date && file.modifiedAt > modifiedSince || // eslint-disable-next-line no-mixed-operators
              file.uploadedAt instanceof Date && file.uploadedAt > modifiedSince) {
                res.writeHead(304); // Not Modified

                res.end();
                return;
              }
            } // Support range request


            if (typeof req.headers.range === 'string') {
              var range = req.headers.range; // Range is not valid

              if (!range) {
                res.writeHead(416);
                res.end();
                return;
              }

              var total = file.size;
              var unit = range.substr(0, range.indexOf('='));

              if (unit !== 'bytes') {
                res.writeHead(416);
                res.end();
                return;
              }

              var ranges = range.substr(unit.length).replace(/[^0-9\-,]/, '').split(',');

              if (ranges.length > 1) {// todo: support multipart ranges: https://developer.mozilla.org/en-US/docs/Web/HTTP/Range_requests
              } else {
                var r = ranges[0].split('-');
                var start = parseInt(r[0], 10);
                var end = r[1] ? parseInt(r[1], 10) : total - 1; // Range is not valid

                if (start < 0 || end >= total || start > end) {
                  res.writeHead(416);
                  res.end();
                  return;
                } // Update headers


                headers['Content-Range'] = "bytes " + start + "-" + end + "/" + total;
                headers['Content-Length'] = end - start + 1;
                options.start = start;
                options.end = end;
              }

              status = 206; // partial content
            }
          } else {
            headers['Accept-Ranges'] = 'bytes';
          } // Open the file stream


          var rs = _store2.getReadStream(_fileId, file, options);

          var _ws = new stream.PassThrough();

          rs.on('error', Meteor.bindEnvironment(function (err) {
            _store2.onReadError.call(_store2, err, _fileId, file);

            res.end();
          }));

          _ws.on('error', Meteor.bindEnvironment(function (err) {
            _store2.onReadError.call(_store2, err, _fileId, file);

            res.end();
          }));

          _ws.on('close', function () {
            // Close output stream at the end
            _ws.emit('end');
          }); // Transform stream


          _store2.transformRead(rs, _ws, _fileId, file, req, headers); // Parse request headers


          if (_typeof(req.headers) === 'object') {
            // Compress data using if needed (ignore audio/video as they are already compressed)
            if (typeof req.headers['accept-encoding'] === 'string' && !/^(audio|video)/.test(file.type)) {
              var accept = req.headers['accept-encoding']; // Compress with gzip

              if (accept.match(/\bgzip\b/)) {
                headers['Content-Encoding'] = 'gzip';
                delete headers['Content-Length'];
                res.writeHead(status, headers);

                _ws.pipe(zlib.createGzip()).pipe(res);

                return;
              } // Compress with deflate


              if (accept.match(/\bdeflate\b/)) {
                headers['Content-Encoding'] = 'deflate';
                delete headers['Content-Length'];
                res.writeHead(status, headers);

                _ws.pipe(zlib.createDeflate()).pipe(res);

                return;
              }
            }
          } // Send raw data


          if (!headers['Content-Encoding']) {
            res.writeHead(status, headers);

            _ws.pipe(res);
          }
        } else {
          res.end();
        }
      });
    } else {
      next();
    }
  });
}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ufs-store-permissions.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/jalik_ufs/ufs-store-permissions.js                                                                   //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
module.export({
  StorePermissions: function () {
    return StorePermissions;
  }
});

var _;

module.link("meteor/underscore", {
  _: function (v) {
    _ = v;
  }
}, 0);

var StorePermissions = /*#__PURE__*/function () {
  function StorePermissions(options) {
    // Default options
    options = _.extend({
      insert: null,
      remove: null,
      update: null
    }, options); // Check options

    if (options.insert && typeof options.insert !== 'function') {
      throw new TypeError('StorePermissions: insert is not a function');
    }

    if (options.remove && typeof options.remove !== 'function') {
      throw new TypeError('StorePermissions: remove is not a function');
    }

    if (options.update && typeof options.update !== 'function') {
      throw new TypeError('StorePermissions: update is not a function');
    } // Public attributes


    this.actions = {
      insert: options.insert,
      remove: options.remove,
      update: options.update
    };
  }
  /**
   * Checks the permission for the action
   * @param action
   * @param userId
   * @param file
   * @param fields
   * @param modifiers
   * @return {*}
   */


  var _proto = StorePermissions.prototype;

  _proto.check = function () {
    function check(action, userId, file, fields, modifiers) {
      if (typeof this.actions[action] === 'function') {
        return this.actions[action](userId, file, fields, modifiers);
      }

      return true; // by default allow all
    }

    return check;
  }()
  /**
   * Checks the insert permission
   * @param userId
   * @param file
   * @returns {*}
   */
  ;

  _proto.checkInsert = function () {
    function checkInsert(userId, file) {
      return this.check('insert', userId, file);
    }

    return checkInsert;
  }()
  /**
   * Checks the remove permission
   * @param userId
   * @param file
   * @returns {*}
   */
  ;

  _proto.checkRemove = function () {
    function checkRemove(userId, file) {
      return this.check('remove', userId, file);
    }

    return checkRemove;
  }()
  /**
   * Checks the update permission
   * @param userId
   * @param file
   * @param fields
   * @param modifiers
   * @returns {*}
   */
  ;

  _proto.checkUpdate = function () {
    function checkUpdate(userId, file, fields, modifiers) {
      return this.check('update', userId, file, fields, modifiers);
    }

    return checkUpdate;
  }();

  return StorePermissions;
}();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ufs-store.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/jalik_ufs/ufs-store.js                                                                               //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var _excluded = ["_id", "url"];

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 0);
module.export({
  Store: function () {
    return Store;
  }
});
var check;
module.link("meteor/check", {
  check: function (v) {
    check = v;
  }
}, 0);
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 1);
var Mongo;
module.link("meteor/mongo", {
  Mongo: function (v) {
    Mongo = v;
  }
}, 2);

var _;

module.link("meteor/underscore", {
  _: function (v) {
    _ = v;
  }
}, 3);
var UploadFS;
module.link("./ufs", {
  UploadFS: function (v) {
    UploadFS = v;
  }
}, 4);
var Filter;
module.link("./ufs-filter", {
  Filter: function (v) {
    Filter = v;
  }
}, 5);
var StorePermissions;
module.link("./ufs-store-permissions", {
  StorePermissions: function (v) {
    StorePermissions = v;
  }
}, 6);
var Tokens;
module.link("./ufs-tokens", {
  Tokens: function (v) {
    Tokens = v;
  }
}, 7);

var Store = /*#__PURE__*/function () {
  function Store(options) {
    var self = this; // Default options

    options = _.extend({
      collection: null,
      filter: null,
      name: null,
      onCopyError: this.onCopyError,
      onFinishUpload: this.onFinishUpload,
      onRead: this.onRead,
      onReadError: this.onReadError,
      onValidate: this.onValidate,
      onWriteError: this.onWriteError,
      permissions: null,
      transformRead: null,
      transformWrite: null
    }, options); // Check options

    if (!(options.collection instanceof Mongo.Collection)) {
      throw new TypeError('Store: collection is not a Mongo.Collection');
    }

    if (options.filter && !(options.filter instanceof Filter)) {
      throw new TypeError('Store: filter is not a UploadFS.Filter');
    }

    if (typeof options.name !== 'string') {
      throw new TypeError('Store: name is not a string');
    }

    if (UploadFS.getStore(options.name)) {
      throw new TypeError('Store: name already exists');
    }

    if (options.onCopyError && typeof options.onCopyError !== 'function') {
      throw new TypeError('Store: onCopyError is not a function');
    }

    if (options.onFinishUpload && typeof options.onFinishUpload !== 'function') {
      throw new TypeError('Store: onFinishUpload is not a function');
    }

    if (options.onRead && typeof options.onRead !== 'function') {
      throw new TypeError('Store: onRead is not a function');
    }

    if (options.onReadError && typeof options.onReadError !== 'function') {
      throw new TypeError('Store: onReadError is not a function');
    }

    if (options.onWriteError && typeof options.onWriteError !== 'function') {
      throw new TypeError('Store: onWriteError is not a function');
    }

    if (options.permissions && !(options.permissions instanceof StorePermissions)) {
      throw new TypeError('Store: permissions is not a UploadFS.StorePermissions');
    }

    if (options.transformRead && typeof options.transformRead !== 'function') {
      throw new TypeError('Store: transformRead is not a function');
    }

    if (options.transformWrite && typeof options.transformWrite !== 'function') {
      throw new TypeError('Store: transformWrite is not a function');
    }

    if (options.onValidate && typeof options.onValidate !== 'function') {
      throw new TypeError('Store: onValidate is not a function');
    } // Public attributes


    self.options = options;
    self.permissions = options.permissions;
    ['onCopyError', 'onFinishUpload', 'onRead', 'onReadError', 'onWriteError', 'onValidate'].forEach(function (method) {
      if (typeof options[method] === 'function') {
        self[method] = options[method];
      }
    }); // Add the store to the list

    UploadFS.addStore(self); // Set default permissions

    if (!(self.permissions instanceof StorePermissions)) {
      // Uses custom default permissions or UFS default permissions
      if (UploadFS.config.defaultStorePermissions instanceof StorePermissions) {
        self.permissions = UploadFS.config.defaultStorePermissions;
      } else {
        self.permissions = new StorePermissions();
        console.warn("ufs: permissions are not defined for store \"" + options.name + "\"");
      }
    }

    if (Meteor.isServer) {
      /**
       * Checks token validity
       * @param token
       * @param fileId
       * @returns {boolean}
       */
      self.checkToken = function (token, fileId) {
        check(token, String);
        check(fileId, String);
        return Tokens.find({
          value: token,
          fileId: fileId
        }).count() === 1;
      };
      /**
       * Copies the file to a store
       * @param fileId
       * @param store
       * @param callback
       */


      self.copy = function (fileId, store, callback) {
        check(fileId, String);

        if (!(store instanceof Store)) {
          throw new TypeError('store is not an instance of UploadFS.Store');
        } // Get original file


        var file = self.getCollection().findOne({
          _id: fileId
        });

        if (!file) {
          throw new Meteor.Error('file-not-found', 'File not found');
        } // Silently ignore the file if it does not match filter


        var filter = store.getFilter();

        if (filter instanceof Filter && !filter.isValid(file)) {
          return;
        } // Prepare copy


        var _id = file._id,
            url = file.url,
            copy = _objectWithoutProperties(file, _excluded);

        copy.originalStore = self.getName();
        copy.originalId = fileId; // Create the copy

        var copyId = store.create(copy); // Get original stream

        var rs = self.getReadStream(fileId, file); // Catch errors to avoid app crashing

        rs.on('error', Meteor.bindEnvironment(function (err) {
          callback.call(self, err, null);
        })); // Copy file data

        store.write(rs, copyId, Meteor.bindEnvironment(function (err) {
          if (err) {
            self.getCollection().remove({
              _id: copyId
            });
            self.onCopyError.call(self, err, fileId, file);
          }

          if (typeof callback === 'function') {
            callback.call(self, err, copyId, copy, store);
          }
        }));
      };
      /**
       * Creates the file in the collection
       * @param file
       * @param callback
       * @return {string}
       */


      self.create = function (file, callback) {
        check(file, Object);
        file.store = self.options.name; // assign store to file

        return self.getCollection().insert(file, callback);
      };
      /**
       * Creates a token for the file (only needed for client side upload)
       * @param fileId
       * @returns {*}
       */


      self.createToken = function (fileId) {
        var token = self.generateToken(); // Check if token exists

        if (Tokens.find({
          fileId: fileId
        }).count()) {
          Tokens.update({
            fileId: fileId
          }, {
            $set: {
              createdAt: new Date(),
              value: token
            }
          });
        } else {
          Tokens.insert({
            createdAt: new Date(),
            fileId: fileId,
            value: token
          });
        }

        return token;
      };
      /**
       * Writes the file to the store
       * @param rs
       * @param fileId
       * @param callback
       */


      self.write = function (rs, fileId, callback) {
        var file = self.getCollection().findOne({
          _id: fileId
        });
        var errorHandler = Meteor.bindEnvironment(function (err) {
          self.onWriteError.call(self, err, fileId, file);
          callback.call(self, err);
        });
        var finishHandler = Meteor.bindEnvironment(function () {
          var size = 0;
          var readStream = self.getReadStream(fileId, file);
          readStream.on('error', Meteor.bindEnvironment(function (error) {
            callback.call(self, error, null);
          }));
          readStream.on('data', Meteor.bindEnvironment(function (data) {
            size += data.length;
          }));
          readStream.on('end', Meteor.bindEnvironment(function () {
            if (file.complete) {
              return;
            } // Set file attribute


            file.complete = true;
            file.etag = UploadFS.generateEtag();
            file.path = self.getFileRelativeURL(fileId);
            file.progress = 1;
            file.size = size;
            file.token = self.generateToken();
            file.uploading = false;
            file.uploadedAt = new Date();
            file.url = self.getFileURL(fileId); // Execute callback

            if (typeof self.onFinishUpload === 'function') {
              self.onFinishUpload.call(self, file);
            } // Sets the file URL when file transfer is complete,
            // this way, the image will loads entirely.


            self.getCollection().direct.update({
              _id: fileId
            }, {
              $set: {
                complete: file.complete,
                etag: file.etag,
                path: file.path,
                progress: file.progress,
                size: file.size,
                token: file.token,
                uploading: file.uploading,
                uploadedAt: file.uploadedAt,
                url: file.url
              }
            }); // Return file info

            callback.call(self, null, file); // Simulate write speed

            if (UploadFS.config.simulateWriteDelay) {
              Meteor._sleepForMs(UploadFS.config.simulateWriteDelay);
            } // Copy file to other stores


            if (self.options.copyTo instanceof Array) {
              for (var i = 0; i < self.options.copyTo.length; i += 1) {
                var store = self.options.copyTo[i];

                if (!store.getFilter() || store.getFilter().isValid(file)) {
                  self.copy(fileId, store);
                }
              }
            }
          }));
        });
        var ws = self.getWriteStream(fileId, file);
        ws.on('error', errorHandler);
        ws.once('finish', finishHandler); // Execute transformation

        self.transformWrite(rs, ws, fileId, file);
      };
    }

    if (Meteor.isServer) {
      // eslint-disable-next-line no-undef
      var fs = Npm.require('fs');

      var collection = self.getCollection(); // Code executed after removing file

      collection.after.remove(function (userId, file) {
        // Remove associated tokens
        Tokens.remove({
          fileId: file._id
        });

        if (self.options.copyTo instanceof Array) {
          for (var i = 0; i < self.options.copyTo.length; i += 1) {
            // Remove copies in stores
            self.options.copyTo[i].getCollection().remove({
              originalId: file._id
            });
          }
        }
      }); // Code executed before inserting file

      collection.before.insert(function (userId, file) {
        if (!self.permissions.checkInsert(userId, file)) {
          throw new Meteor.Error('forbidden', 'Forbidden');
        }
      }); // Code executed before updating file

      collection.before.update(function (userId, file, fields, modifiers) {
        if (!self.permissions.checkUpdate(userId, file, fields, modifiers)) {
          throw new Meteor.Error('forbidden', 'Forbidden');
        }
      }); // Code executed before removing file

      collection.before.remove(function (userId, file) {
        if (!self.permissions.checkRemove(userId, file)) {
          throw new Meteor.Error('forbidden', 'Forbidden');
        } // Delete the physical file in the store


        self.delete(file._id);
        var tmpFile = UploadFS.getTempFilePath(file._id); // Delete the temp file

        fs.stat(tmpFile, function (err) {
          !err && fs.unlink(tmpFile, function (err) {
            err && console.error("ufs: cannot delete temp file at " + tmpFile + " (" + err.message + ")");
          });
        });
      });
    }
  }
  /**
   * Deletes a file async
   * @param fileId
   * @param callback
   */
  // eslint-disable-next-line no-unused-vars


  var _proto = Store.prototype;

  _proto.delete = function () {
    function _delete(fileId, callback) {
      throw new Error('delete is not implemented');
    }

    return _delete;
  }()
  /**
   * Generates a random token
   * @param pattern
   * @return {string}
   */
  ;

  _proto.generateToken = function () {
    function generateToken(pattern) {
      return (pattern || 'xyxyxyxyxy').replace(/[xy]/g, function (c) {
        // eslint-disable-next-line no-mixed-operators
        var r = Math.random() * 16 | 0;
        var v = c === 'x' ? r : r & 0x3 | 0x8;
        var s = v.toString(16);
        return Math.round(Math.random()) ? s.toUpperCase() : s;
      });
    }

    return generateToken;
  }()
  /**
   * Returns the collection
   * @return {Mongo.Collection}
   */
  ;

  _proto.getCollection = function () {
    function getCollection() {
      return this.options.collection;
    }

    return getCollection;
  }()
  /**
   * Returns the file URL
   * @param fileId
   * @return {string|null}
   */
  ;

  _proto.getFileRelativeURL = function () {
    function getFileRelativeURL(fileId) {
      var file = this.getCollection().findOne(fileId, {
        fields: {
          name: 1
        }
      });
      return file ? this.getRelativeURL(fileId + "/" + file.name) : null;
    }

    return getFileRelativeURL;
  }()
  /**
   * Returns the file URL
   * @param fileId
   * @return {string|null}
   */
  ;

  _proto.getFileURL = function () {
    function getFileURL(fileId) {
      var file = this.getCollection().findOne(fileId, {
        fields: {
          name: 1
        }
      });
      return file ? this.getURL(fileId + "/" + file.name) : null;
    }

    return getFileURL;
  }()
  /**
   * Returns the file filter
   * @return {UploadFS.Filter}
   */
  ;

  _proto.getFilter = function () {
    function getFilter() {
      return this.options.filter;
    }

    return getFilter;
  }()
  /**
   * Returns the store name
   * @return {string}
   */
  ;

  _proto.getName = function () {
    function getName() {
      return this.options.name;
    }

    return getName;
  }()
  /**
   * Returns the file read stream
   * @param fileId
   * @param file
   */
  // eslint-disable-next-line no-unused-vars
  ;

  _proto.getReadStream = function () {
    function getReadStream(fileId, file) {
      throw new Error('Store.getReadStream is not implemented');
    }

    return getReadStream;
  }()
  /**
   * Returns the store relative URL
   * @param path
   * @return {string}
   */
  ;

  _proto.getRelativeURL = function () {
    function getRelativeURL(path) {
      var rootUrl = Meteor.absoluteUrl().replace(/\/+$/, '');
      var rootPath = rootUrl.replace(/^[a-z]+:\/\/[^/]+\/*/gi, '');
      var storeName = this.getName();
      path = String(path).replace(/\/$/, '').trim();
      return encodeURI(rootPath + "/" + UploadFS.config.storesPath + "/" + storeName + "/" + path);
    }

    return getRelativeURL;
  }()
  /**
   * Returns the store absolute URL
   * @param path
   * @return {string}
   */
  ;

  _proto.getURL = function () {
    function getURL(path) {
      var rootUrl = Meteor.absoluteUrl({
        secure: UploadFS.config.https
      }).replace(/\/+$/, '');
      var storeName = this.getName();
      path = String(path).replace(/\/$/, '').trim();
      return encodeURI(rootUrl + "/" + UploadFS.config.storesPath + "/" + storeName + "/" + path);
    }

    return getURL;
  }()
  /**
   * Returns the file write stream
   * @param fileId
   * @param file
   */
  // eslint-disable-next-line no-unused-vars
  ;

  _proto.getWriteStream = function () {
    function getWriteStream(fileId, file) {
      throw new Error('getWriteStream is not implemented');
    }

    return getWriteStream;
  }()
  /**
   * Completes the file upload
   * @param url
   * @param file
   * @param callback
   */
  ;

  _proto.importFromURL = function () {
    function importFromURL(url, file, callback) {
      Meteor.call('ufsImportURL', url, file, this.getName(), callback);
    }

    return importFromURL;
  }()
  /**
   * Called when a copy error happened
   * @param err
   * @param fileId
   * @param file
   */
  // eslint-disable-next-line no-unused-vars
  ;

  _proto.onCopyError = function () {
    function onCopyError(err, fileId, file) {
      console.error("ufs: cannot copy file \"" + fileId + "\" (" + err.message + ")", err);
    }

    return onCopyError;
  }()
  /**
   * Called when a file has been uploaded
   * @param file
   */
  // eslint-disable-next-line no-unused-vars
  ;

  _proto.onFinishUpload = function () {
    function onFinishUpload(file) {}

    return onFinishUpload;
  }()
  /**
   * Called when a file is read from the store
   * @param fileId
   * @param file
   * @param request
   * @param response
   * @return boolean
   */
  // eslint-disable-next-line no-unused-vars
  ;

  _proto.onRead = function () {
    function onRead(fileId, file, request, response) {
      return true;
    }

    return onRead;
  }()
  /**
   * Called when a read error happened
   * @param err
   * @param fileId
   * @param file
   * @return boolean
   */
  // eslint-disable-next-line no-unused-vars
  ;

  _proto.onReadError = function () {
    function onReadError(err, fileId, file) {
      console.error("ufs: cannot read file \"" + fileId + "\" (" + err.message + ")", err);
    }

    return onReadError;
  }()
  /**
   * Called when file is being validated
   * @param file
   */
  // eslint-disable-next-line no-unused-vars
  ;

  _proto.onValidate = function () {
    function onValidate(file) {}

    return onValidate;
  }()
  /**
   * Called when a write error happened
   * @param err
   * @param fileId
   * @param file
   * @return boolean
   */
  // eslint-disable-next-line no-unused-vars
  ;

  _proto.onWriteError = function () {
    function onWriteError(err, fileId, file) {
      console.error("ufs: cannot write file \"" + fileId + "\" (" + err.message + ")", err);
    }

    return onWriteError;
  }()
  /**
   * Sets the store permissions
   * @param permissions
   */
  ;

  _proto.setPermissions = function () {
    function setPermissions(permissions) {
      if (!(permissions instanceof StorePermissions)) {
        throw new TypeError('Permissions is not an instance of UploadFS.StorePermissions');
      }

      this.permissions = permissions;
    }

    return setPermissions;
  }()
  /**
   * Transforms the file on reading
   * @param readStream
   * @param writeStream
   * @param fileId
   * @param file
   * @param request
   * @param headers
   */
  ;

  _proto.transformRead = function () {
    function transformRead(readStream, writeStream, fileId, file, request, headers) {
      if (typeof this.options.transformRead === 'function') {
        this.options.transformRead.call(this, readStream, writeStream, fileId, file, request, headers);
      } else {
        readStream.pipe(writeStream);
      }
    }

    return transformRead;
  }()
  /**
   * Transforms the file on writing
   * @param readStream
   * @param writeStream
   * @param fileId
   * @param file
   */
  ;

  _proto.transformWrite = function () {
    function transformWrite(readStream, writeStream, fileId, file) {
      if (typeof this.options.transformWrite === 'function') {
        this.options.transformWrite.call(this, readStream, writeStream, fileId, file);
      } else {
        readStream.pipe(writeStream);
      }
    }

    return transformWrite;
  }()
  /**
   * Validates the file
   * @param file
   */
  ;

  _proto.validate = function () {
    function validate(file) {
      if (typeof this.onValidate === 'function') {
        this.onValidate(file);
      }
    }

    return validate;
  }();

  return Store;
}();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ufs-tokens.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/jalik_ufs/ufs-tokens.js                                                                              //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
module.export({
  Tokens: function () {
    return Tokens;
  }
});
var Mongo;
module.link("meteor/mongo", {
  Mongo: function (v) {
    Mongo = v;
  }
}, 0);
var Tokens = new Mongo.Collection('ufsTokens');
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ufs-uploader.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/jalik_ufs/ufs-uploader.js                                                                            //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var _typeof;

module.link("@babel/runtime/helpers/typeof", {
  default: function (v) {
    _typeof = v;
  }
}, 0);
module.export({
  Uploader: function () {
    return Uploader;
  }
});
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);

var _;

module.link("meteor/underscore", {
  _: function (v) {
    _ = v;
  }
}, 1);
var Store;
module.link("./ufs-store", {
  Store: function (v) {
    Store = v;
  }
}, 2);

var Uploader = /*#__PURE__*/function () {
  function Uploader(options) {
    var self = this; // Set default options

    options = _.extend({
      adaptive: true,
      capacity: 0.9,
      chunkSize: 16 * 1024,
      data: null,
      file: null,
      maxChunkSize: 4 * 1024 * 1000,
      maxTries: 5,
      onAbort: this.onAbort,
      onComplete: this.onComplete,
      onCreate: this.onCreate,
      onError: this.onError,
      onProgress: this.onProgress,
      onStart: this.onStart,
      onStop: this.onStop,
      retryDelay: 2000,
      store: null,
      transferDelay: 100
    }, options); // Check options

    if (typeof options.adaptive !== 'boolean') {
      throw new TypeError('adaptive is not a number');
    }

    if (typeof options.capacity !== 'number') {
      throw new TypeError('capacity is not a number');
    }

    if (options.capacity <= 0 || options.capacity > 1) {
      throw new RangeError('capacity must be a float between 0.1 and 1.0');
    }

    if (typeof options.chunkSize !== 'number') {
      throw new TypeError('chunkSize is not a number');
    }

    if (!(options.data instanceof Blob) && !(options.data instanceof File)) {
      throw new TypeError('data is not an Blob or File');
    }

    if (options.file === null || _typeof(options.file) !== 'object') {
      throw new TypeError('file is not an object');
    }

    if (typeof options.maxChunkSize !== 'number') {
      throw new TypeError('maxChunkSize is not a number');
    }

    if (typeof options.maxTries !== 'number') {
      throw new TypeError('maxTries is not a number');
    }

    if (typeof options.retryDelay !== 'number') {
      throw new TypeError('retryDelay is not a number');
    }

    if (typeof options.transferDelay !== 'number') {
      throw new TypeError('transferDelay is not a number');
    }

    if (typeof options.onAbort !== 'function') {
      throw new TypeError('onAbort is not a function');
    }

    if (typeof options.onComplete !== 'function') {
      throw new TypeError('onComplete is not a function');
    }

    if (typeof options.onCreate !== 'function') {
      throw new TypeError('onCreate is not a function');
    }

    if (typeof options.onError !== 'function') {
      throw new TypeError('onError is not a function');
    }

    if (typeof options.onProgress !== 'function') {
      throw new TypeError('onProgress is not a function');
    }

    if (typeof options.onStart !== 'function') {
      throw new TypeError('onStart is not a function');
    }

    if (typeof options.onStop !== 'function') {
      throw new TypeError('onStop is not a function');
    }

    if (typeof options.store !== 'string' && !(options.store instanceof Store)) {
      throw new TypeError('store must be the name of the store or an instance of UploadFS.Store');
    } // Public attributes


    self.adaptive = options.adaptive;
    self.capacity = parseFloat(options.capacity);
    self.chunkSize = parseInt(options.chunkSize);
    self.maxChunkSize = parseInt(options.maxChunkSize);
    self.maxTries = parseInt(options.maxTries);
    self.retryDelay = parseInt(options.retryDelay);
    self.transferDelay = parseInt(options.transferDelay);
    self.onAbort = options.onAbort;
    self.onComplete = options.onComplete;
    self.onCreate = options.onCreate;
    self.onError = options.onError;
    self.onProgress = options.onProgress;
    self.onStart = options.onStart;
    self.onStop = options.onStop; // Private attributes

    var _options = options,
        store = _options.store;
    var _options2 = options,
        data = _options2.data;
    var capacityMargin = 0.1;
    var _options3 = options,
        file = _options3.file;
    var fileId = null;
    var offset = 0;
    var loaded = 0;
    var total = data.size;
    var tries = 0;
    var postUrl = null;
    var token = null;
    var complete = false;
    var uploading = false;
    var timeA = null;
    var timeB = null;
    var elapsedTime = 0;
    var startTime = 0; // Keep only the name of the store

    if (store instanceof Store) {
      store = store.getName();
    } // Assign file to store


    file.store = store;

    function finish() {
      // Finish the upload by telling the store the upload is complete
      Meteor.call('ufsComplete', fileId, store, token, function (err, uploadedFile) {
        if (err) {
          self.onError(err, file);
          self.abort();
        } else if (uploadedFile) {
          uploading = false;
          complete = true;
          file = uploadedFile;
          self.onComplete(uploadedFile);
        }
      });
    }
    /**
     * Aborts the current transfer
     */


    self.abort = function () {
      // Remove the file from database
      // eslint-disable-next-line no-unused-vars
      Meteor.call('ufsDelete', fileId, store, token, function (err, result) {
        if (err) {
          self.onError(err, file);
        }
      }); // Reset uploader status

      uploading = false;
      fileId = null;
      offset = 0;
      tries = 0;
      loaded = 0;
      complete = false;
      startTime = null;
      self.onAbort(file);
    };
    /**
     * Returns the average speed in bytes per second
     * @returns {number}
     */


    self.getAverageSpeed = function () {
      var seconds = self.getElapsedTime() / 1000;
      return self.getLoaded() / seconds;
    };
    /**
     * Returns the elapsed time in milliseconds
     * @returns {number}
     */


    self.getElapsedTime = function () {
      if (startTime && self.isUploading()) {
        return elapsedTime + (Date.now() - startTime);
      }

      return elapsedTime;
    };
    /**
     * Returns the file
     * @return {object}
     */


    self.getFile = function () {
      return file;
    };
    /**
     * Returns the loaded bytes
     * @return {number}
     */


    self.getLoaded = function () {
      return loaded;
    };
    /**
     * Returns current progress
     * @return {number}
     */


    self.getProgress = function () {
      return Math.min(loaded / total * 100 / 100, 1.0);
    };
    /**
     * Returns the remaining time in milliseconds
     * @returns {number}
     */


    self.getRemainingTime = function () {
      var averageSpeed = self.getAverageSpeed();
      var remainingBytes = total - self.getLoaded();
      return averageSpeed && remainingBytes ? Math.max(remainingBytes / averageSpeed, 0) : 0;
    };
    /**
     * Returns the upload speed in bytes per second
     * @returns {number}
     */


    self.getSpeed = function () {
      if (timeA && timeB && self.isUploading()) {
        var seconds = (timeB - timeA) / 1000;
        return self.chunkSize / seconds;
      }

      return 0;
    };
    /**
     * Returns the total bytes
     * @return {number}
     */


    self.getTotal = function () {
      return total;
    };
    /**
     * Checks if the transfer is complete
     * @return {boolean}
     */


    self.isComplete = function () {
      return complete;
    };
    /**
     * Checks if the transfer is active
     * @return {boolean}
     */


    self.isUploading = function () {
      return uploading;
    };
    /**
     * Reads a portion of file
     * @param start
     * @param length
     * @param callback
     * @returns {Blob}
     */


    self.readChunk = function (start, length, callback) {
      if (typeof callback !== 'function') {
        throw new Error('readChunk is missing callback');
      }

      try {
        var end; // Calculate the chunk size

        if (length && start + length > total) {
          end = total;
        } else {
          end = start + length;
        } // Get chunk


        var chunk = data.slice(start, end); // Pass chunk to callback

        callback.call(self, null, chunk);
      } catch (err) {
        console.error('read error', err); // Retry to read chunk

        Meteor.setTimeout(function () {
          if (tries < self.maxTries) {
            tries += 1;
            self.readChunk(start, length, callback);
          }
        }, self.retryDelay);
      }
    };
    /**
     * Sends a file chunk to the store
     */


    self.sendChunk = function () {
      if (!complete && startTime !== null) {
        if (offset < total) {
          var chunkSize = self.chunkSize; // Use adaptive length

          if (self.adaptive && timeA && timeB && timeB > timeA) {
            var duration = (timeB - timeA) / 1000;
            var max = self.capacity * (1 + capacityMargin);
            var min = self.capacity * (1 - capacityMargin);

            if (duration >= max) {
              chunkSize = Math.abs(Math.round(chunkSize * (max - duration)));
            } else if (duration < min) {
              chunkSize = Math.round(chunkSize * (min / duration));
            } // Limit to max chunk size


            if (self.maxChunkSize > 0 && chunkSize > self.maxChunkSize) {
              chunkSize = self.maxChunkSize;
            }
          } // Reduce chunk size to fit total


          if (offset + chunkSize > total) {
            chunkSize = total - offset;
          } // Prepare the chunk


          self.readChunk(offset, chunkSize, function (err, chunk) {
            if (err) {
              self.onError(err, file);
              return;
            }

            var xhr = new XMLHttpRequest();

            xhr.onreadystatechange = function () {
              if (xhr.readyState === 4) {
                if ([200, 201, 202, 204].includes(xhr.status)) {
                  timeB = Date.now();
                  offset += chunkSize;
                  loaded += chunkSize; // Send next chunk

                  self.onProgress(file, self.getProgress()); // Finish upload

                  if (loaded >= total) {
                    elapsedTime = Date.now() - startTime;
                    finish();
                  } else {
                    Meteor.setTimeout(self.sendChunk, self.transferDelay);
                  }
                } else if (![402, 403, 404, 500].includes(xhr.status)) {
                  // Retry until max tries is reach
                  // But don't retry if these errors occur
                  if (tries <= self.maxTries) {
                    tries += 1; // Wait before retrying

                    Meteor.setTimeout(self.sendChunk, self.retryDelay);
                  } else {
                    self.abort();
                  }
                } else {
                  self.abort();
                }
              }
            }; // Calculate upload progress


            var progress = (offset + chunkSize) / total; // let formData = new FormData();
            // formData.append('progress', progress);
            // formData.append('chunk', chunk);

            var url = postUrl + "&progress=" + progress;
            timeA = Date.now();
            timeB = null;
            uploading = true; // Send chunk to the store

            xhr.open('POST', url, true);
            xhr.send(chunk);
          });
        }
      }
    };
    /**
     * Starts or resumes the transfer
     */


    self.start = function () {
      if (!fileId) {
        // Create the file document and get the token
        // that allows the user to send chunks to the store.
        Meteor.call('ufsCreate', _.extend({}, file), function (err, result) {
          if (err) {
            self.onError(err, file);
          } else if (result) {
            token = result.token;
            postUrl = result.url;
            fileId = result.fileId;
            file._id = result.fileId;
            self.onCreate(file);
            tries = 0;
            startTime = Date.now();
            self.onStart(file);
            self.sendChunk();
          }
        });
      } else if (!uploading && !complete) {
        // Resume uploading
        tries = 0;
        startTime = Date.now();
        self.onStart(file);
        self.sendChunk();
      }
    };
    /**
     * Stops the transfer
     */


    self.stop = function () {
      if (uploading) {
        // Update elapsed time
        elapsedTime = Date.now() - startTime;
        startTime = null;
        uploading = false;
        self.onStop(file); // eslint-disable-next-line no-unused-vars

        Meteor.call('ufsStop', fileId, store, token, function (err, result) {
          if (err) {
            self.onError(err, file);
          }
        });
      }
    };
  }
  /**
   * Called when the file upload is aborted
   * @param file
   */
  // eslint-disable-next-line no-unused-vars


  var _proto = Uploader.prototype;

  _proto.onAbort = function () {
    function onAbort(file) {}

    return onAbort;
  }()
  /**
   * Called when the file upload is complete
   * @param file
   */
  // eslint-disable-next-line no-unused-vars
  ;

  _proto.onComplete = function () {
    function onComplete(file) {}

    return onComplete;
  }()
  /**
   * Called when the file is created in the collection
   * @param file
   */
  // eslint-disable-next-line no-unused-vars
  ;

  _proto.onCreate = function () {
    function onCreate(file) {}

    return onCreate;
  }()
  /**
   * Called when an error occurs during file upload
   * @param err
   * @param file
   */
  // eslint-disable-next-line no-unused-vars
  ;

  _proto.onError = function () {
    function onError(err, file) {
      console.error("ufs: " + err.message);
    }

    return onError;
  }()
  /**
   * Called when a file chunk has been sent
   * @param file
   * @param progress is a float from 0.0 to 1.0
   */
  // eslint-disable-next-line no-unused-vars
  ;

  _proto.onProgress = function () {
    function onProgress(file, progress) {}

    return onProgress;
  }()
  /**
   * Called when the file upload starts
   * @param file
   */
  // eslint-disable-next-line no-unused-vars
  ;

  _proto.onStart = function () {
    function onStart(file) {}

    return onStart;
  }()
  /**
   * Called when the file upload stops
   * @param file
   */
  // eslint-disable-next-line no-unused-vars
  ;

  _proto.onStop = function () {
    function onStop(file) {}

    return onStop;
  }();

  return Uploader;
}();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"node_modules":{"spark-md5":{"package.json":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// node_modules/meteor/jalik_ufs/node_modules/spark-md5/package.json                                             //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
module.exports = {
  "name": "spark-md5",
  "version": "3.0.0",
  "main": "spark-md5.js"
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"spark-md5.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// node_modules/meteor/jalik_ufs/node_modules/spark-md5/spark-md5.js                                             //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
(function (factory) {
    if (typeof exports === 'object') {
        // Node/CommonJS
        module.exports = factory();
    } else if (typeof define === 'function' && define.amd) {
        // AMD
        define(factory);
    } else {
        // Browser globals (with support for web workers)
        var glob;

        try {
            glob = window;
        } catch (e) {
            glob = self;
        }

        glob.SparkMD5 = factory();
    }
}(function (undefined) {

    'use strict';

    /*
     * Fastest md5 implementation around (JKM md5).
     * Credits: Joseph Myers
     *
     * @see http://www.myersdaily.org/joseph/javascript/md5-text.html
     * @see http://jsperf.com/md5-shootout/7
     */

    /* this function is much faster,
      so if possible we use it. Some IEs
      are the only ones I know of that
      need the idiotic second function,
      generated by an if clause.  */
    var add32 = function (a, b) {
        return (a + b) & 0xFFFFFFFF;
    },
        hex_chr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];


    function cmn(q, a, b, x, s, t) {
        a = add32(add32(a, q), add32(x, t));
        return add32((a << s) | (a >>> (32 - s)), b);
    }

    function md5cycle(x, k) {
        var a = x[0],
            b = x[1],
            c = x[2],
            d = x[3];

        a += (b & c | ~b & d) + k[0] - 680876936 | 0;
        a  = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[1] - 389564586 | 0;
        d  = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[2] + 606105819 | 0;
        c  = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[3] - 1044525330 | 0;
        b  = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[4] - 176418897 | 0;
        a  = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[5] + 1200080426 | 0;
        d  = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[6] - 1473231341 | 0;
        c  = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[7] - 45705983 | 0;
        b  = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[8] + 1770035416 | 0;
        a  = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[9] - 1958414417 | 0;
        d  = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[10] - 42063 | 0;
        c  = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[11] - 1990404162 | 0;
        b  = (b << 22 | b >>> 10) + c | 0;
        a += (b & c | ~b & d) + k[12] + 1804603682 | 0;
        a  = (a << 7 | a >>> 25) + b | 0;
        d += (a & b | ~a & c) + k[13] - 40341101 | 0;
        d  = (d << 12 | d >>> 20) + a | 0;
        c += (d & a | ~d & b) + k[14] - 1502002290 | 0;
        c  = (c << 17 | c >>> 15) + d | 0;
        b += (c & d | ~c & a) + k[15] + 1236535329 | 0;
        b  = (b << 22 | b >>> 10) + c | 0;

        a += (b & d | c & ~d) + k[1] - 165796510 | 0;
        a  = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[6] - 1069501632 | 0;
        d  = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[11] + 643717713 | 0;
        c  = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[0] - 373897302 | 0;
        b  = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[5] - 701558691 | 0;
        a  = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[10] + 38016083 | 0;
        d  = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[15] - 660478335 | 0;
        c  = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[4] - 405537848 | 0;
        b  = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[9] + 568446438 | 0;
        a  = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[14] - 1019803690 | 0;
        d  = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[3] - 187363961 | 0;
        c  = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[8] + 1163531501 | 0;
        b  = (b << 20 | b >>> 12) + c | 0;
        a += (b & d | c & ~d) + k[13] - 1444681467 | 0;
        a  = (a << 5 | a >>> 27) + b | 0;
        d += (a & c | b & ~c) + k[2] - 51403784 | 0;
        d  = (d << 9 | d >>> 23) + a | 0;
        c += (d & b | a & ~b) + k[7] + 1735328473 | 0;
        c  = (c << 14 | c >>> 18) + d | 0;
        b += (c & a | d & ~a) + k[12] - 1926607734 | 0;
        b  = (b << 20 | b >>> 12) + c | 0;

        a += (b ^ c ^ d) + k[5] - 378558 | 0;
        a  = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[8] - 2022574463 | 0;
        d  = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[11] + 1839030562 | 0;
        c  = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[14] - 35309556 | 0;
        b  = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[1] - 1530992060 | 0;
        a  = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[4] + 1272893353 | 0;
        d  = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[7] - 155497632 | 0;
        c  = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[10] - 1094730640 | 0;
        b  = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[13] + 681279174 | 0;
        a  = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[0] - 358537222 | 0;
        d  = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[3] - 722521979 | 0;
        c  = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[6] + 76029189 | 0;
        b  = (b << 23 | b >>> 9) + c | 0;
        a += (b ^ c ^ d) + k[9] - 640364487 | 0;
        a  = (a << 4 | a >>> 28) + b | 0;
        d += (a ^ b ^ c) + k[12] - 421815835 | 0;
        d  = (d << 11 | d >>> 21) + a | 0;
        c += (d ^ a ^ b) + k[15] + 530742520 | 0;
        c  = (c << 16 | c >>> 16) + d | 0;
        b += (c ^ d ^ a) + k[2] - 995338651 | 0;
        b  = (b << 23 | b >>> 9) + c | 0;

        a += (c ^ (b | ~d)) + k[0] - 198630844 | 0;
        a  = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0;
        d  = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0;
        c  = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[5] - 57434055 | 0;
        b  = (b << 21 |b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0;
        a  = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0;
        d  = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[10] - 1051523 | 0;
        c  = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0;
        b  = (b << 21 |b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0;
        a  = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[15] - 30611744 | 0;
        d  = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0;
        c  = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0;
        b  = (b << 21 |b >>> 11) + c | 0;
        a += (c ^ (b | ~d)) + k[4] - 145523070 | 0;
        a  = (a << 6 | a >>> 26) + b | 0;
        d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0;
        d  = (d << 10 | d >>> 22) + a | 0;
        c += (a ^ (d | ~b)) + k[2] + 718787259 | 0;
        c  = (c << 15 | c >>> 17) + d | 0;
        b += (d ^ (c | ~a)) + k[9] - 343485551 | 0;
        b  = (b << 21 | b >>> 11) + c | 0;

        x[0] = a + x[0] | 0;
        x[1] = b + x[1] | 0;
        x[2] = c + x[2] | 0;
        x[3] = d + x[3] | 0;
    }

    function md5blk(s) {
        var md5blks = [],
            i; /* Andy King said do it this way. */

        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
        }
        return md5blks;
    }

    function md5blk_array(a) {
        var md5blks = [],
            i; /* Andy King said do it this way. */

        for (i = 0; i < 64; i += 4) {
            md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
        }
        return md5blks;
    }

    function md51(s) {
        var n = s.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk(s.substring(i - 64, i)));
        }
        s = s.substring(i - 64);
        length = s.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= s.charCodeAt(i) << ((i % 4) << 3);
        }
        tail[i >> 2] |= 0x80 << ((i % 4) << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0;
            }
        }

        // Beware that the final length might not fit in 32 bits so we take care of that
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;

        tail[14] = lo;
        tail[15] = hi;

        md5cycle(state, tail);
        return state;
    }

    function md51_array(a) {
        var n = a.length,
            state = [1732584193, -271733879, -1732584194, 271733878],
            i,
            length,
            tail,
            tmp,
            lo,
            hi;

        for (i = 64; i <= n; i += 64) {
            md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
        }

        // Not sure if it is a bug, however IE10 will always produce a sub array of length 1
        // containing the last element of the parent array if the sub array specified starts
        // beyond the length of the parent array - weird.
        // https://connect.microsoft.com/IE/feedback/details/771452/typed-array-subarray-issue
        a = (i - 64) < n ? a.subarray(i - 64) : new Uint8Array(0);

        length = a.length;
        tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= a[i] << ((i % 4) << 3);
        }

        tail[i >> 2] |= 0x80 << ((i % 4) << 3);
        if (i > 55) {
            md5cycle(state, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0;
            }
        }

        // Beware that the final length might not fit in 32 bits so we take care of that
        tmp = n * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;

        tail[14] = lo;
        tail[15] = hi;

        md5cycle(state, tail);

        return state;
    }

    function rhex(n) {
        var s = '',
            j;
        for (j = 0; j < 4; j += 1) {
            s += hex_chr[(n >> (j * 8 + 4)) & 0x0F] + hex_chr[(n >> (j * 8)) & 0x0F];
        }
        return s;
    }

    function hex(x) {
        var i;
        for (i = 0; i < x.length; i += 1) {
            x[i] = rhex(x[i]);
        }
        return x.join('');
    }

    // In some cases the fast add32 function cannot be used..
    if (hex(md51('hello')) !== '5d41402abc4b2a76b9719d911017c592') {
        add32 = function (x, y) {
            var lsw = (x & 0xFFFF) + (y & 0xFFFF),
                msw = (x >> 16) + (y >> 16) + (lsw >> 16);
            return (msw << 16) | (lsw & 0xFFFF);
        };
    }

    // ---------------------------------------------------

    /**
     * ArrayBuffer slice polyfill.
     *
     * @see https://github.com/ttaubert/node-arraybuffer-slice
     */

    if (typeof ArrayBuffer !== 'undefined' && !ArrayBuffer.prototype.slice) {
        (function () {
            function clamp(val, length) {
                val = (val | 0) || 0;

                if (val < 0) {
                    return Math.max(val + length, 0);
                }

                return Math.min(val, length);
            }

            ArrayBuffer.prototype.slice = function (from, to) {
                var length = this.byteLength,
                    begin = clamp(from, length),
                    end = length,
                    num,
                    target,
                    targetArray,
                    sourceArray;

                if (to !== undefined) {
                    end = clamp(to, length);
                }

                if (begin > end) {
                    return new ArrayBuffer(0);
                }

                num = end - begin;
                target = new ArrayBuffer(num);
                targetArray = new Uint8Array(target);

                sourceArray = new Uint8Array(this, begin, num);
                targetArray.set(sourceArray);

                return target;
            };
        })();
    }

    // ---------------------------------------------------

    /**
     * Helpers.
     */

    function toUtf8(str) {
        if (/[\u0080-\uFFFF]/.test(str)) {
            str = unescape(encodeURIComponent(str));
        }

        return str;
    }

    function utf8Str2ArrayBuffer(str, returnUInt8Array) {
        var length = str.length,
           buff = new ArrayBuffer(length),
           arr = new Uint8Array(buff),
           i;

        for (i = 0; i < length; i += 1) {
            arr[i] = str.charCodeAt(i);
        }

        return returnUInt8Array ? arr : buff;
    }

    function arrayBuffer2Utf8Str(buff) {
        return String.fromCharCode.apply(null, new Uint8Array(buff));
    }

    function concatenateArrayBuffers(first, second, returnUInt8Array) {
        var result = new Uint8Array(first.byteLength + second.byteLength);

        result.set(new Uint8Array(first));
        result.set(new Uint8Array(second), first.byteLength);

        return returnUInt8Array ? result : result.buffer;
    }

    function hexToBinaryString(hex) {
        var bytes = [],
            length = hex.length,
            x;

        for (x = 0; x < length - 1; x += 2) {
            bytes.push(parseInt(hex.substr(x, 2), 16));
        }

        return String.fromCharCode.apply(String, bytes);
    }

    // ---------------------------------------------------

    /**
     * SparkMD5 OOP implementation.
     *
     * Use this class to perform an incremental md5, otherwise use the
     * static methods instead.
     */

    function SparkMD5() {
        // call reset to init the instance
        this.reset();
    }

    /**
     * Appends a string.
     * A conversion will be applied if an utf8 string is detected.
     *
     * @param {String} str The string to be appended
     *
     * @return {SparkMD5} The instance itself
     */
    SparkMD5.prototype.append = function (str) {
        // Converts the string to utf8 bytes if necessary
        // Then append as binary
        this.appendBinary(toUtf8(str));

        return this;
    };

    /**
     * Appends a binary string.
     *
     * @param {String} contents The binary string to be appended
     *
     * @return {SparkMD5} The instance itself
     */
    SparkMD5.prototype.appendBinary = function (contents) {
        this._buff += contents;
        this._length += contents.length;

        var length = this._buff.length,
            i;

        for (i = 64; i <= length; i += 64) {
            md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
        }

        this._buff = this._buff.substring(i - 64);

        return this;
    };

    /**
     * Finishes the incremental computation, reseting the internal state and
     * returning the result.
     *
     * @param {Boolean} raw True to get the raw string, false to get the hex string
     *
     * @return {String} The result
     */
    SparkMD5.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            i,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            ret;

        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff.charCodeAt(i) << ((i % 4) << 3);
        }

        this._finish(tail, length);
        ret = hex(this._hash);

        if (raw) {
            ret = hexToBinaryString(ret);
        }

        this.reset();

        return ret;
    };

    /**
     * Resets the internal state of the computation.
     *
     * @return {SparkMD5} The instance itself
     */
    SparkMD5.prototype.reset = function () {
        this._buff = '';
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];

        return this;
    };

    /**
     * Gets the internal state of the computation.
     *
     * @return {Object} The state
     */
    SparkMD5.prototype.getState = function () {
        return {
            buff: this._buff,
            length: this._length,
            hash: this._hash
        };
    };

    /**
     * Gets the internal state of the computation.
     *
     * @param {Object} state The state
     *
     * @return {SparkMD5} The instance itself
     */
    SparkMD5.prototype.setState = function (state) {
        this._buff = state.buff;
        this._length = state.length;
        this._hash = state.hash;

        return this;
    };

    /**
     * Releases memory used by the incremental buffer and other additional
     * resources. If you plan to use the instance again, use reset instead.
     */
    SparkMD5.prototype.destroy = function () {
        delete this._hash;
        delete this._buff;
        delete this._length;
    };

    /**
     * Finish the final calculation based on the tail.
     *
     * @param {Array}  tail   The tail (will be modified)
     * @param {Number} length The length of the remaining buffer
     */
    SparkMD5.prototype._finish = function (tail, length) {
        var i = length,
            tmp,
            lo,
            hi;

        tail[i >> 2] |= 0x80 << ((i % 4) << 3);
        if (i > 55) {
            md5cycle(this._hash, tail);
            for (i = 0; i < 16; i += 1) {
                tail[i] = 0;
            }
        }

        // Do the final computation based on the tail and length
        // Beware that the final length may not fit in 32 bits so we take care of that
        tmp = this._length * 8;
        tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/);
        lo = parseInt(tmp[2], 16);
        hi = parseInt(tmp[1], 16) || 0;

        tail[14] = lo;
        tail[15] = hi;
        md5cycle(this._hash, tail);
    };

    /**
     * Performs the md5 hash on a string.
     * A conversion will be applied if utf8 string is detected.
     *
     * @param {String}  str The string
     * @param {Boolean} raw True to get the raw string, false to get the hex string
     *
     * @return {String} The result
     */
    SparkMD5.hash = function (str, raw) {
        // Converts the string to utf8 bytes if necessary
        // Then compute it using the binary function
        return SparkMD5.hashBinary(toUtf8(str), raw);
    };

    /**
     * Performs the md5 hash on a binary string.
     *
     * @param {String}  content The binary string
     * @param {Boolean} raw     True to get the raw string, false to get the hex string
     *
     * @return {String} The result
     */
    SparkMD5.hashBinary = function (content, raw) {
        var hash = md51(content),
            ret = hex(hash);

        return raw ? hexToBinaryString(ret) : ret;
    };

    // ---------------------------------------------------

    /**
     * SparkMD5 OOP implementation for array buffers.
     *
     * Use this class to perform an incremental md5 ONLY for array buffers.
     */
    SparkMD5.ArrayBuffer = function () {
        // call reset to init the instance
        this.reset();
    };

    /**
     * Appends an array buffer.
     *
     * @param {ArrayBuffer} arr The array to be appended
     *
     * @return {SparkMD5.ArrayBuffer} The instance itself
     */
    SparkMD5.ArrayBuffer.prototype.append = function (arr) {
        var buff = concatenateArrayBuffers(this._buff.buffer, arr, true),
            length = buff.length,
            i;

        this._length += arr.byteLength;

        for (i = 64; i <= length; i += 64) {
            md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
        }

        this._buff = (i - 64) < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0);

        return this;
    };

    /**
     * Finishes the incremental computation, reseting the internal state and
     * returning the result.
     *
     * @param {Boolean} raw True to get the raw string, false to get the hex string
     *
     * @return {String} The result
     */
    SparkMD5.ArrayBuffer.prototype.end = function (raw) {
        var buff = this._buff,
            length = buff.length,
            tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            i,
            ret;

        for (i = 0; i < length; i += 1) {
            tail[i >> 2] |= buff[i] << ((i % 4) << 3);
        }

        this._finish(tail, length);
        ret = hex(this._hash);

        if (raw) {
            ret = hexToBinaryString(ret);
        }

        this.reset();

        return ret;
    };

    /**
     * Resets the internal state of the computation.
     *
     * @return {SparkMD5.ArrayBuffer} The instance itself
     */
    SparkMD5.ArrayBuffer.prototype.reset = function () {
        this._buff = new Uint8Array(0);
        this._length = 0;
        this._hash = [1732584193, -271733879, -1732584194, 271733878];

        return this;
    };

    /**
     * Gets the internal state of the computation.
     *
     * @return {Object} The state
     */
    SparkMD5.ArrayBuffer.prototype.getState = function () {
        var state = SparkMD5.prototype.getState.call(this);

        // Convert buffer to a string
        state.buff = arrayBuffer2Utf8Str(state.buff);

        return state;
    };

    /**
     * Gets the internal state of the computation.
     *
     * @param {Object} state The state
     *
     * @return {SparkMD5.ArrayBuffer} The instance itself
     */
    SparkMD5.ArrayBuffer.prototype.setState = function (state) {
        // Convert string to buffer
        state.buff = utf8Str2ArrayBuffer(state.buff, true);

        return SparkMD5.prototype.setState.call(this, state);
    };

    SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;

    SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;

    /**
     * Performs the md5 hash on an array buffer.
     *
     * @param {ArrayBuffer} arr The array buffer
     * @param {Boolean}     raw True to get the raw string, false to get the hex one
     *
     * @return {String} The result
     */
    SparkMD5.ArrayBuffer.hash = function (arr, raw) {
        var hash = md51_array(new Uint8Array(arr)),
            ret = hex(hash);

        return raw ? hexToBinaryString(ret) : ret;
    };

    return SparkMD5;
}));

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});

var exports = require("/node_modules/meteor/jalik:ufs/ufs.js");

/* Exports */
Package._define("jalik:ufs", exports);

})();
