(function () {

/* Imports */
var Meteor = Package.meteor.Meteor;
var global = Package.meteor.global;
var meteorEnv = Package.meteor.meteorEnv;
var check = Package.check.check;
var Match = Package.check.Match;
var ECMAScript = Package.ecmascript.ECMAScript;
var _ = Package.underscore._;
var CollectionHooks = Package['matb33:collection-hooks'].CollectionHooks;
var MongoInternals = Package.mongo.MongoInternals;
var Mongo = Package.mongo.Mongo;
var WebApp = Package.webapp.WebApp;
var WebAppInternals = Package.webapp.WebAppInternals;
var main = Package.webapp.main;
var meteorInstall = Package.modules.meteorInstall;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var extension, options, path;

var require = meteorInstall({"node_modules":{"meteor":{"jalik:ufs":{"ufs.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/jalik_ufs/ufs.js                                                                                         //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
!function (module1) {
  module1.export({
    UploadFS: () => UploadFS
  });
  let Meteor;
  module1.link("meteor/meteor", {
    Meteor(v) {
      Meteor = v;
    }

  }, 0);
  let Random;
  module1.link("meteor/random", {
    Random(v) {
      Random = v;
    }

  }, 1);
  let Config;
  module1.link("./ufs-config", {
    Config(v) {
      Config = v;
    }

  }, 2);
  let Filter;
  module1.link("./ufs-filter", {
    Filter(v) {
      Filter = v;
    }

  }, 3);
  let MIME;
  module1.link("./ufs-mime", {
    MIME(v) {
      MIME = v;
    }

  }, 4);
  let Store;
  module1.link("./ufs-store", {
    Store(v) {
      Store = v;
    }

  }, 5);
  let StorePermissions;
  module1.link("./ufs-store-permissions", {
    StorePermissions(v) {
      StorePermissions = v;
    }

  }, 6);
  let Tokens;
  module1.link("./ufs-tokens", {
    Tokens(v) {
      Tokens = v;
    }

  }, 7);
  let Uploader;
  module1.link("./ufs-uploader", {
    Uploader(v) {
      Uploader = v;
    }

  }, 8);
  const stores = {};
  const UploadFS = {
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
    addETagAttributeToFiles(where) {
      this.getStores().forEach(store => {
        const files = store.getCollection(); // By default update only files with no path set

        files.find(where || {
          etag: null
        }, {
          fields: {
            _id: 1
          }
        }).forEach(file => {
          files.direct.update(file._id, {
            $set: {
              etag: this.generateEtag()
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
    addMimeType(extension, mime) {
      MIME[extension.toLowerCase()] = mime;
    },

    /**
     * Adds the "path" attribute to files
     * @param where
     */
    addPathAttributeToFiles(where) {
      this.getStores().forEach(store => {
        const files = store.getCollection(); // By default update only files with no path set

        files.find(where || {
          path: null
        }, {
          fields: {
            _id: 1
          }
        }).forEach(file => {
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
    addStore(store) {
      if (!(store instanceof Store)) {
        throw new TypeError('ufs: store is not an instance of UploadFS.Store.');
      }

      stores[store.getName()] = store;
    },

    /**
     * Generates a unique ETag
     * @return {string}
     */
    generateEtag() {
      return Random.id();
    },

    /**
     * Returns the MIME type of the extension
     * @param extension
     * @returns {*}
     */
    getMimeType(extension) {
      extension = extension.toLowerCase();
      return MIME[extension];
    },

    /**
     * Returns all MIME types
     */
    getMimeTypes() {
      return MIME;
    },

    /**
     * Returns the store by its name
     * @param name
     * @return {UploadFS.Store}
     */
    getStore(name) {
      return stores[name];
    },

    /**
     * Returns all stores
     * @return {object}
     */
    getStores() {
      return stores;
    },

    /**
     * Returns the temporary file path
     * @param fileId
     * @return {string}
     */
    getTempFilePath(fileId) {
      return "".concat(this.config.tmpDir, "/").concat(fileId);
    },

    /**
     * Imports a file from a URL
     * @param url
     * @param file
     * @param store
     * @param callback
     */
    importFromURL(url, file, store, callback) {
      if (typeof store === 'string') {
        Meteor.call('ufsImportURL', url, file, store, callback);
      } else if (typeof store === 'object') {
        store.importFromURL(url, file, callback);
      }
    },

    /**
     * Returns file and data as ArrayBuffer for each files in the event
     * @deprecated
     * @param event
     * @param callback
     */
    readAsArrayBuffer() {
      console.error('UploadFS.readAsArrayBuffer is deprecated, see https://github.com/jalik/jalik-ufs#uploading-from-a-file');
    },

    /**
     * Opens a dialog to select a single file
     * @param callback
     */
    selectFile(callback) {
      const input = document.createElement('input');
      input.type = 'file';
      input.multiple = false;

      input.onchange = ev => {
        const {
          files
        } = ev.target;
        callback.call(UploadFS, files[0]);
      }; // Fix for iOS/Safari


      const div = document.createElement('div');
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
    selectFiles(callback) {
      const input = document.createElement('input');
      input.type = 'file';
      input.multiple = true;

      input.onchange = ev => {
        const {
          files
        } = ev.target;

        for (let i = 0; i < files.length; i += 1) {
          callback.call(UploadFS, files[i]);
        }
      }; // Fix for iOS/Safari


      const div = document.createElement('div');
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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ufs-config.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/jalik_ufs/ufs-config.js                                                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({
  Config: () => Config
});

let _;

module.link("meteor/underscore", {
  _(v) {
    _ = v;
  }

}, 0);
let StorePermissions;
module.link("./ufs-store-permissions", {
  StorePermissions(v) {
    StorePermissions = v;
  }

}, 1);

class Config {
  constructor(options) {
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

}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ufs-filter.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/jalik_ufs/ufs-filter.js                                                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({
  Filter: () => Filter
});
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);

let _;

module.link("meteor/underscore", {
  _(v) {
    _ = v;
  }

}, 1);

class Filter {
  constructor(options) {
    const self = this; // Default options

    options = _.extend({
      contentTypes: null,
      extensions: null,
      minSize: 1,
      maxSize: 0,
      invalidFileError: () => new Meteor.Error('invalid-file', 'File is not valid'),
      fileTooSmallError: (fileSize, minFileSize) => new Meteor.Error('file-too-small', "File size (size = ".concat(fileSize, ") is too small (min = ").concat(minFileSize, ")")),
      fileTooLargeError: (fileSize, maxFileSize) => new Meteor.Error('file-too-large', "File size (size = ".concat(fileSize, ") is too large (max = ").concat(maxFileSize, ")")),
      invalidFileExtension: (fileExtension, allowedExtensions) => new Meteor.Error('invalid-file-extension', "File extension \"".concat(fileExtension, "\" is not accepted (").concat(allowedExtensions, ")")),
      invalidFileType: (fileType, allowedContentTypes) => new Meteor.Error('invalid-file-type', "File type \"".concat(fileType, "\" is not accepted (").concat(allowedContentTypes, ")")),
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
    ['onCheck'].forEach(method => {
      if (typeof options[method] === 'function') {
        self[method] = options[method];
      }
    });
  }
  /**
   * Checks the file
   * @param file
   */


  check(file) {
    let error = null;

    if (typeof file !== 'object' || !file) {
      error = this.options.invalidFileError();
    } // Check size


    const fileSize = file.size;
    const minSize = this.getMinSize();

    if (fileSize <= 0 || fileSize < minSize) {
      error = this.options.fileTooSmallError(fileSize, minSize);
    }

    const maxSize = this.getMaxSize();

    if (maxSize > 0 && fileSize > maxSize) {
      error = this.options.fileTooLargeError(fileSize, maxSize);
    } // Check extension


    const allowedExtensions = this.getExtensions();
    const fileExtension = file.extension;

    if (allowedExtensions && !allowedExtensions.includes(fileExtension)) {
      error = this.options.invalidFileExtension(fileExtension, allowedExtensions);
    } // Check content type


    const allowedContentTypes = this.getContentTypes();
    const fileTypes = file.type;

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
  /**
   * Returns the allowed content types
   * @return {Array}
   */


  getContentTypes() {
    return this.options.contentTypes;
  }
  /**
   * Returns the allowed extensions
   * @return {Array}
   */


  getExtensions() {
    return this.options.extensions;
  }
  /**
   * Returns the maximum file size
   * @return {Number}
   */


  getMaxSize() {
    return this.options.maxSize;
  }
  /**
   * Returns the minimum file size
   * @return {Number}
   */


  getMinSize() {
    return this.options.minSize;
  }
  /**
   * Checks if content type is in the given list
   * @param type
   * @param list
   * @return {boolean}
   */


  isContentTypeInList(type, list) {
    if (typeof type === 'string' && list instanceof Array) {
      if (list.includes(type)) {
        return true;
      }

      const wildCardGlob = '/*';
      const wildcards = list.filter(item => item.indexOf(wildCardGlob) > 0);

      if (wildcards.includes(type.replace(/(\/.*)$/, wildCardGlob))) {
        return true;
      }
    }

    return false;
  }
  /**
   * Checks if the file matches filter
   * @param file
   * @return {boolean}
   */


  isValid(file) {
    let result = true;

    try {
      this.check(file);
    } catch (err) {
      result = false;
    }

    return result;
  }
  /**
   * Executes custom checks
   * @param file
   * @return {boolean}
   */
  // eslint-disable-next-line no-unused-vars


  onCheck(file) {
    return true;
  }

}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ufs-methods.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/jalik_ufs/ufs-methods.js                                                                                 //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
let check;
module.link("meteor/check", {
  check(v) {
    check = v;
  }

}, 0);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
let UploadFS;
module.link("./ufs", {
  UploadFS(v) {
    UploadFS = v;
  }

}, 2);
let Filter;
module.link("./ufs-filter", {
  Filter(v) {
    Filter = v;
  }

}, 3);
let Tokens;
module.link("./ufs-tokens", {
  Tokens(v) {
    Tokens = v;
  }

}, 4);

const fs = Npm.require('fs');

const http = Npm.require('http');

const https = Npm.require('https');

const Future = Npm.require('fibers/future');

if (Meteor.isServer) {
  Meteor.methods({
    /**
     * Completes the file transfer
     * @param fileId
     * @param storeName
     * @param token
     */
    ufsComplete(fileId, storeName, token) {
      check(fileId, String);
      check(storeName, String);
      check(token, String); // Get store

      const store = UploadFS.getStore(storeName);

      if (!store) {
        throw new Meteor.Error('invalid-store', 'Store not found');
      } // Check token


      if (!store.checkToken(token, fileId)) {
        throw new Meteor.Error('invalid-token', 'Token is not valid');
      }

      const fut = new Future();
      const tmpFile = UploadFS.getTempFilePath(fileId);

      const removeTempFile = function () {
        fs.unlink(tmpFile, function (err) {
          err && console.error("ufs: cannot delete temp file \"".concat(tmpFile, "\" (").concat(err.message, ")"));
        });
      };

      try {
        // todo check if temp file exists
        // Get file
        const file = store.getCollection().findOne({
          _id: fileId
        }); // Validate file before moving to the store

        store.validate(file); // Get the temp file

        const rs = fs.createReadStream(tmpFile, {
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
              fileId
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
    ufsCreate(file) {
      check(file, Object);

      if (typeof file.name !== 'string' || !file.name.length) {
        throw new Meteor.Error('invalid-file-name', 'file name is not valid');
      }

      if (typeof file.store !== 'string' || !file.store.length) {
        throw new Meteor.Error('invalid-store', 'store is not valid');
      } // Get store


      const store = UploadFS.getStore(file.store);

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

      const filter = store.getFilter();

      if (filter instanceof Filter) {
        filter.check(file);
      } // Create the file


      const fileId = store.create(file);
      const token = store.createToken(fileId);
      const uploadUrl = store.getURL("".concat(fileId, "?token=").concat(token));
      return {
        fileId,
        token,
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
    ufsDelete(fileId, storeName, token) {
      check(fileId, String);
      check(storeName, String);
      check(token, String); // Check store

      const store = UploadFS.getStore(storeName);

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
    ufsImportURL(url, file, storeName) {
      check(url, String);
      check(file, Object);
      check(storeName, String); // Check URL

      if (typeof url !== 'string' || url.length <= 0) {
        throw new Meteor.Error('invalid-url', 'The url is not valid');
      } // Check file


      if (typeof file !== 'object' || file === null) {
        throw new Meteor.Error('invalid-file', 'The file is not valid');
      } // Check store


      const store = UploadFS.getStore(storeName);

      if (!store) {
        throw new Meteor.Error('invalid-store', 'The store does not exist');
      }

      let parsedUrl;

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
      const fut = new Future();
      let proto; // Detect protocol to use

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
    ufsStop(fileId, storeName, token) {
      check(fileId, String);
      check(storeName, String);
      check(token, String); // Check store

      const store = UploadFS.getStore(storeName);

      if (!store) {
        throw new Meteor.Error('invalid-store', 'Store not found');
      } // Check file


      const file = store.getCollection().find({
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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ufs-mime.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/jalik_ufs/ufs-mime.js                                                                                    //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({
  MIME: () => MIME
});
const MIME = {
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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ufs-server.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/jalik_ufs/ufs-server.js                                                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);
let WebApp;
module.link("meteor/webapp", {
  WebApp(v) {
    WebApp = v;
  }

}, 1);
let SparkMD5;
module.link("spark-md5", {
  default(v) {
    SparkMD5 = v;
  }

}, 2);
let UploadFS;
module.link("./ufs", {
  UploadFS(v) {
    UploadFS = v;
  }

}, 3);

if (Meteor.isServer) {
  const domain = Npm.require('domain');

  const fs = Npm.require('fs'); // eslint-disable-next-line no-unused-vars


  const http = Npm.require('http'); // eslint-disable-next-line no-unused-vars


  const https = Npm.require('https');

  const mkdirp = Npm.require('mkdirp');

  const stream = Npm.require('stream');

  const URL = Npm.require('url');

  const zlib = Npm.require('zlib');

  Meteor.startup(() => {
    const path = UploadFS.config.tmpDir;
    const mode = UploadFS.config.tmpDirPermissions;
    fs.stat(path, err => {
      if (err) {
        // Create the temp directory
        mkdirp(path, {
          mode
        }, err => {
          if (err) {
            console.error("ufs: cannot create temp directory at \"".concat(path, "\" (").concat(err.message, ")"));
          } else {
            console.log("ufs: temp directory created at \"".concat(path, "\""));
          }
        });
      } else {
        // Set directory permissions
        fs.chmod(path, mode, err => {
          err && console.error("ufs: cannot set temp directory permissions ".concat(mode, " (").concat(err.message, ")"));
        });
      }
    });
  }); // Create domain to handle errors
  // and possibly avoid server crashes.

  const d = domain.create();
  d.on('error', err => {
    console.error("ufs: ".concat(err.message));
  }); // Listen HTTP requests to serve files

  WebApp.connectHandlers.use((req, res, next) => {
    // Quick check to see if request should be caught
    if (!req.url.includes("/".concat(UploadFS.config.storesPath, "/"))) {
      next();
      return;
    } // Remove store path


    const parsedUrl = URL.parse(req.url);
    const path = parsedUrl.pathname.substr(UploadFS.config.storesPath.length + 1);

    const allowCORS = () => {
      // res.setHeader('Access-Control-Allow-Origin', req.headers.origin);
      res.setHeader('Access-Control-Allow-Methods', 'POST');
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    };

    if (req.method === 'OPTIONS') {
      const regExp = new RegExp('^/([^/?]+)/([^/?]+)$');
      const match = regExp.exec(path); // Request is not valid

      if (match === null) {
        res.writeHead(400);
        res.end();
        return;
      } // Get store


      const store = UploadFS.getStore(match[1]);

      if (!store) {
        res.writeHead(404);
        res.end();
        return;
      } // If a store is found, go ahead and allow the origin


      allowCORS();
      next();
    } else if (req.method === 'POST') {
      // Get store
      const regExp = new RegExp('^/([^/?]+)/([^/?]+)$');
      const match = regExp.exec(path); // Request is not valid

      if (match === null) {
        res.writeHead(400);
        res.end();
        return;
      } // Get store


      const store = UploadFS.getStore(match[1]);

      if (!store) {
        res.writeHead(404);
        res.end();
        return;
      } // If a store is found, go ahead and allow the origin


      allowCORS(); // Get file

      const fileId = match[2];

      if (store.getCollection().find({
        _id: fileId
      }).count() === 0) {
        res.writeHead(404);
        res.end();
        return;
      } // Check upload token


      if (!store.checkToken(req.query.token, fileId)) {
        res.writeHead(403);
        res.end();
        return;
      } // Check if duplicate


      const unique = function (hash) {
        const originalId = store.getCollection().findOne({
          hash,
          _id: {
            $ne: fileId
          }
        });
        return originalId ? originalId._id : false;
      };

      const spark = new SparkMD5.ArrayBuffer();
      const tmpFile = UploadFS.getTempFilePath(fileId);
      const ws = fs.createWriteStream(tmpFile, {
        flags: 'a'
      });
      const fields = {
        uploading: true
      };
      const progress = parseFloat(req.query.progress);

      if (!isNaN(progress) && progress > 0) {
        fields.progress = Math.min(progress, 1);
      }

      req.on('data', chunk => {
        ws.write(chunk);
        spark.append(chunk);
      }); // eslint-disable-next-line no-unused-vars

      req.on('error', err => {
        res.writeHead(500);
        res.end();
      });
      req.on('end', Meteor.bindEnvironment(() => {
        // Update completed state without triggering hooks
        fields.hash = spark.end();
        fields.originalId = unique(fields.hash);
        store.getCollection().direct.update({
          _id: fileId
        }, {
          $set: fields
        });
        ws.end();
      }));
      ws.on('error', err => {
        console.error("ufs: cannot write chunk of file \"".concat(fileId, "\" (").concat(err.message, ")"));
        fs.unlink(tmpFile, err => {
          err && console.error("ufs: cannot delete temp file \"".concat(tmpFile, "\" (").concat(err.message, ")"));
        });
        res.writeHead(500);
        res.end();
      });
      ws.on('finish', () => {
        res.writeHead(204, {
          'Content-Type': 'text/plain'
        });
        res.end();
      });
    } else if (req.method === 'GET') {
      // Get store, file Id and file name
      const regExp = new RegExp('^/([^/?]+)/([^/?]+)(?:/([^/?]+))?$');
      const match = regExp.exec(path); // Avoid 504 Gateway timeout error
      // if file is not handled by UploadFS.

      if (match === null) {
        next();
        return;
      } // Get store


      const storeName = match[1];
      const store = UploadFS.getStore(storeName);

      if (!store) {
        res.writeHead(404);
        res.end();
        return;
      }

      if (store.onRead !== null && store.onRead !== undefined && typeof store.onRead !== 'function') {
        console.error("ufs: Store.onRead is not a function in store \"".concat(storeName, "\""));
        res.writeHead(500);
        res.end();
        return;
      } // Remove file extension from file Id


      const index = match[2].indexOf('.');
      const fileId = index !== -1 ? match[2].substr(0, index) : match[2]; // Get file from database

      const file = store.getCollection().findOne({
        _id: fileId
      });

      if (!file) {
        res.writeHead(404);
        res.end();
        return;
      } // Simulate read speed


      if (UploadFS.config.simulateReadDelay) {
        Meteor._sleepForMs(UploadFS.config.simulateReadDelay);
      }

      d.run(() => {
        // Check if the file can be accessed
        if (store.onRead.call(store, fileId, file, req, res) !== false) {
          const options = {};
          let status = 200; // Prepare response headers

          const headers = {
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


          if (typeof req.headers === 'object') {
            // Compare ETag
            if (req.headers['if-none-match']) {
              if (file.etag === req.headers['if-none-match']) {
                res.writeHead(304); // Not Modified

                res.end();
                return;
              }
            } // Compare file modification date


            if (req.headers['if-modified-since']) {
              const modifiedSince = new Date(req.headers['if-modified-since']);

              if (file.modifiedAt instanceof Date && file.modifiedAt > modifiedSince || // eslint-disable-next-line no-mixed-operators
              file.uploadedAt instanceof Date && file.uploadedAt > modifiedSince) {
                res.writeHead(304); // Not Modified

                res.end();
                return;
              }
            } // Support range request


            if (typeof req.headers.range === 'string') {
              const {
                range
              } = req.headers; // Range is not valid

              if (!range) {
                res.writeHead(416);
                res.end();
                return;
              }

              const total = file.size;
              const unit = range.substr(0, range.indexOf('='));

              if (unit !== 'bytes') {
                res.writeHead(416);
                res.end();
                return;
              }

              const ranges = range.substr(unit.length).replace(/[^0-9\-,]/, '').split(',');

              if (ranges.length > 1) {// todo: support multipart ranges: https://developer.mozilla.org/en-US/docs/Web/HTTP/Range_requests
              } else {
                const r = ranges[0].split('-');
                const start = parseInt(r[0], 10);
                const end = r[1] ? parseInt(r[1], 10) : total - 1; // Range is not valid

                if (start < 0 || end >= total || start > end) {
                  res.writeHead(416);
                  res.end();
                  return;
                } // Update headers


                headers['Content-Range'] = "bytes ".concat(start, "-").concat(end, "/").concat(total);
                headers['Content-Length'] = end - start + 1;
                options.start = start;
                options.end = end;
              }

              status = 206; // partial content
            }
          } else {
            headers['Accept-Ranges'] = 'bytes';
          } // Open the file stream


          const rs = store.getReadStream(fileId, file, options);
          const ws = new stream.PassThrough();
          rs.on('error', Meteor.bindEnvironment(err => {
            store.onReadError.call(store, err, fileId, file);
            res.end();
          }));
          ws.on('error', Meteor.bindEnvironment(err => {
            store.onReadError.call(store, err, fileId, file);
            res.end();
          }));
          ws.on('close', () => {
            // Close output stream at the end
            ws.emit('end');
          }); // Transform stream

          store.transformRead(rs, ws, fileId, file, req, headers); // Parse request headers

          if (typeof req.headers === 'object') {
            // Compress data using if needed (ignore audio/video as they are already compressed)
            if (typeof req.headers['accept-encoding'] === 'string' && !/^(audio|video)/.test(file.type)) {
              const accept = req.headers['accept-encoding']; // Compress with gzip

              if (accept.match(/\bgzip\b/)) {
                headers['Content-Encoding'] = 'gzip';
                delete headers['Content-Length'];
                res.writeHead(status, headers);
                ws.pipe(zlib.createGzip()).pipe(res);
                return;
              } // Compress with deflate


              if (accept.match(/\bdeflate\b/)) {
                headers['Content-Encoding'] = 'deflate';
                delete headers['Content-Length'];
                res.writeHead(status, headers);
                ws.pipe(zlib.createDeflate()).pipe(res);
                return;
              }
            }
          } // Send raw data


          if (!headers['Content-Encoding']) {
            res.writeHead(status, headers);
            ws.pipe(res);
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
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ufs-store-permissions.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/jalik_ufs/ufs-store-permissions.js                                                                       //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({
  StorePermissions: () => StorePermissions
});

let _;

module.link("meteor/underscore", {
  _(v) {
    _ = v;
  }

}, 0);

class StorePermissions {
  constructor(options) {
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


  check(action, userId, file, fields, modifiers) {
    if (typeof this.actions[action] === 'function') {
      return this.actions[action](userId, file, fields, modifiers);
    }

    return true; // by default allow all
  }
  /**
   * Checks the insert permission
   * @param userId
   * @param file
   * @returns {*}
   */


  checkInsert(userId, file) {
    return this.check('insert', userId, file);
  }
  /**
   * Checks the remove permission
   * @param userId
   * @param file
   * @returns {*}
   */


  checkRemove(userId, file) {
    return this.check('remove', userId, file);
  }
  /**
   * Checks the update permission
   * @param userId
   * @param file
   * @param fields
   * @param modifiers
   * @returns {*}
   */


  checkUpdate(userId, file, fields, modifiers) {
    return this.check('update', userId, file, fields, modifiers);
  }

}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ufs-store.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/jalik_ufs/ufs-store.js                                                                                   //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
const _excluded = ["_id", "url"];

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 0);
module.export({
  Store: () => Store
});
let check;
module.link("meteor/check", {
  check(v) {
    check = v;
  }

}, 0);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 2);

let _;

module.link("meteor/underscore", {
  _(v) {
    _ = v;
  }

}, 3);
let UploadFS;
module.link("./ufs", {
  UploadFS(v) {
    UploadFS = v;
  }

}, 4);
let Filter;
module.link("./ufs-filter", {
  Filter(v) {
    Filter = v;
  }

}, 5);
let StorePermissions;
module.link("./ufs-store-permissions", {
  StorePermissions(v) {
    StorePermissions = v;
  }

}, 6);
let Tokens;
module.link("./ufs-tokens", {
  Tokens(v) {
    Tokens = v;
  }

}, 7);

class Store {
  constructor(options) {
    const self = this; // Default options

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
    ['onCopyError', 'onFinishUpload', 'onRead', 'onReadError', 'onWriteError', 'onValidate'].forEach(method => {
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
        console.warn("ufs: permissions are not defined for store \"".concat(options.name, "\""));
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
          fileId
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


        const file = self.getCollection().findOne({
          _id: fileId
        });

        if (!file) {
          throw new Meteor.Error('file-not-found', 'File not found');
        } // Silently ignore the file if it does not match filter


        const filter = store.getFilter();

        if (filter instanceof Filter && !filter.isValid(file)) {
          return;
        } // Prepare copy


        const {
          _id,
          url
        } = file,
              copy = _objectWithoutProperties(file, _excluded);

        copy.originalStore = self.getName();
        copy.originalId = fileId; // Create the copy

        const copyId = store.create(copy); // Get original stream

        const rs = self.getReadStream(fileId, file); // Catch errors to avoid app crashing

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
        const token = self.generateToken(); // Check if token exists

        if (Tokens.find({
          fileId
        }).count()) {
          Tokens.update({
            fileId
          }, {
            $set: {
              createdAt: new Date(),
              value: token
            }
          });
        } else {
          Tokens.insert({
            createdAt: new Date(),
            fileId,
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
        const file = self.getCollection().findOne({
          _id: fileId
        });
        const errorHandler = Meteor.bindEnvironment(function (err) {
          self.onWriteError.call(self, err, fileId, file);
          callback.call(self, err);
        });
        const finishHandler = Meteor.bindEnvironment(function () {
          let size = 0;
          const readStream = self.getReadStream(fileId, file);
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
              for (let i = 0; i < self.options.copyTo.length; i += 1) {
                const store = self.options.copyTo[i];

                if (!store.getFilter() || store.getFilter().isValid(file)) {
                  self.copy(fileId, store);
                }
              }
            }
          }));
        });
        const ws = self.getWriteStream(fileId, file);
        ws.on('error', errorHandler);
        ws.once('finish', finishHandler); // Execute transformation

        self.transformWrite(rs, ws, fileId, file);
      };
    }

    if (Meteor.isServer) {
      // eslint-disable-next-line no-undef
      const fs = Npm.require('fs');

      const collection = self.getCollection(); // Code executed after removing file

      collection.after.remove(function (userId, file) {
        // Remove associated tokens
        Tokens.remove({
          fileId: file._id
        });

        if (self.options.copyTo instanceof Array) {
          for (let i = 0; i < self.options.copyTo.length; i += 1) {
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
        const tmpFile = UploadFS.getTempFilePath(file._id); // Delete the temp file

        fs.stat(tmpFile, function (err) {
          !err && fs.unlink(tmpFile, function (err) {
            err && console.error("ufs: cannot delete temp file at ".concat(tmpFile, " (").concat(err.message, ")"));
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


  delete(fileId, callback) {
    throw new Error('delete is not implemented');
  }
  /**
   * Generates a random token
   * @param pattern
   * @return {string}
   */


  generateToken(pattern) {
    return (pattern || 'xyxyxyxyxy').replace(/[xy]/g, c => {
      // eslint-disable-next-line no-mixed-operators
      const r = Math.random() * 16 | 0;
      const v = c === 'x' ? r : r & 0x3 | 0x8;
      const s = v.toString(16);
      return Math.round(Math.random()) ? s.toUpperCase() : s;
    });
  }
  /**
   * Returns the collection
   * @return {Mongo.Collection}
   */


  getCollection() {
    return this.options.collection;
  }
  /**
   * Returns the file URL
   * @param fileId
   * @return {string|null}
   */


  getFileRelativeURL(fileId) {
    const file = this.getCollection().findOne(fileId, {
      fields: {
        name: 1
      }
    });
    return file ? this.getRelativeURL("".concat(fileId, "/").concat(file.name)) : null;
  }
  /**
   * Returns the file URL
   * @param fileId
   * @return {string|null}
   */


  getFileURL(fileId) {
    const file = this.getCollection().findOne(fileId, {
      fields: {
        name: 1
      }
    });
    return file ? this.getURL("".concat(fileId, "/").concat(file.name)) : null;
  }
  /**
   * Returns the file filter
   * @return {UploadFS.Filter}
   */


  getFilter() {
    return this.options.filter;
  }
  /**
   * Returns the store name
   * @return {string}
   */


  getName() {
    return this.options.name;
  }
  /**
   * Returns the file read stream
   * @param fileId
   * @param file
   */
  // eslint-disable-next-line no-unused-vars


  getReadStream(fileId, file) {
    throw new Error('Store.getReadStream is not implemented');
  }
  /**
   * Returns the store relative URL
   * @param path
   * @return {string}
   */


  getRelativeURL(path) {
    const rootUrl = Meteor.absoluteUrl().replace(/\/+$/, '');
    const rootPath = rootUrl.replace(/^[a-z]+:\/\/[^/]+\/*/gi, '');
    const storeName = this.getName();
    path = String(path).replace(/\/$/, '').trim();
    return encodeURI("".concat(rootPath, "/").concat(UploadFS.config.storesPath, "/").concat(storeName, "/").concat(path));
  }
  /**
   * Returns the store absolute URL
   * @param path
   * @return {string}
   */


  getURL(path) {
    const rootUrl = Meteor.absoluteUrl({
      secure: UploadFS.config.https
    }).replace(/\/+$/, '');
    const storeName = this.getName();
    path = String(path).replace(/\/$/, '').trim();
    return encodeURI("".concat(rootUrl, "/").concat(UploadFS.config.storesPath, "/").concat(storeName, "/").concat(path));
  }
  /**
   * Returns the file write stream
   * @param fileId
   * @param file
   */
  // eslint-disable-next-line no-unused-vars


  getWriteStream(fileId, file) {
    throw new Error('getWriteStream is not implemented');
  }
  /**
   * Completes the file upload
   * @param url
   * @param file
   * @param callback
   */


  importFromURL(url, file, callback) {
    Meteor.call('ufsImportURL', url, file, this.getName(), callback);
  }
  /**
   * Called when a copy error happened
   * @param err
   * @param fileId
   * @param file
   */
  // eslint-disable-next-line no-unused-vars


  onCopyError(err, fileId, file) {
    console.error("ufs: cannot copy file \"".concat(fileId, "\" (").concat(err.message, ")"), err);
  }
  /**
   * Called when a file has been uploaded
   * @param file
   */
  // eslint-disable-next-line no-unused-vars


  onFinishUpload(file) {}
  /**
   * Called when a file is read from the store
   * @param fileId
   * @param file
   * @param request
   * @param response
   * @return boolean
   */
  // eslint-disable-next-line no-unused-vars


  onRead(fileId, file, request, response) {
    return true;
  }
  /**
   * Called when a read error happened
   * @param err
   * @param fileId
   * @param file
   * @return boolean
   */
  // eslint-disable-next-line no-unused-vars


  onReadError(err, fileId, file) {
    console.error("ufs: cannot read file \"".concat(fileId, "\" (").concat(err.message, ")"), err);
  }
  /**
   * Called when file is being validated
   * @param file
   */
  // eslint-disable-next-line no-unused-vars


  onValidate(file) {}
  /**
   * Called when a write error happened
   * @param err
   * @param fileId
   * @param file
   * @return boolean
   */
  // eslint-disable-next-line no-unused-vars


  onWriteError(err, fileId, file) {
    console.error("ufs: cannot write file \"".concat(fileId, "\" (").concat(err.message, ")"), err);
  }
  /**
   * Sets the store permissions
   * @param permissions
   */


  setPermissions(permissions) {
    if (!(permissions instanceof StorePermissions)) {
      throw new TypeError('Permissions is not an instance of UploadFS.StorePermissions');
    }

    this.permissions = permissions;
  }
  /**
   * Transforms the file on reading
   * @param readStream
   * @param writeStream
   * @param fileId
   * @param file
   * @param request
   * @param headers
   */


  transformRead(readStream, writeStream, fileId, file, request, headers) {
    if (typeof this.options.transformRead === 'function') {
      this.options.transformRead.call(this, readStream, writeStream, fileId, file, request, headers);
    } else {
      readStream.pipe(writeStream);
    }
  }
  /**
   * Transforms the file on writing
   * @param readStream
   * @param writeStream
   * @param fileId
   * @param file
   */


  transformWrite(readStream, writeStream, fileId, file) {
    if (typeof this.options.transformWrite === 'function') {
      this.options.transformWrite.call(this, readStream, writeStream, fileId, file);
    } else {
      readStream.pipe(writeStream);
    }
  }
  /**
   * Validates the file
   * @param file
   */


  validate(file) {
    if (typeof this.onValidate === 'function') {
      this.onValidate(file);
    }
  }

}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ufs-tokens.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/jalik_ufs/ufs-tokens.js                                                                                  //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({
  Tokens: () => Tokens
});
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 0);
const Tokens = new Mongo.Collection('ufsTokens');
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"ufs-uploader.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// packages/jalik_ufs/ufs-uploader.js                                                                                //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.export({
  Uploader: () => Uploader
});
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 0);

let _;

module.link("meteor/underscore", {
  _(v) {
    _ = v;
  }

}, 1);
let Store;
module.link("./ufs-store", {
  Store(v) {
    Store = v;
  }

}, 2);

class Uploader {
  constructor(options) {
    const self = this; // Set default options

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

    if (options.file === null || typeof options.file !== 'object') {
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

    let {
      store
    } = options;
    const {
      data
    } = options;
    const capacityMargin = 0.1;
    let {
      file
    } = options;
    let fileId = null;
    let offset = 0;
    let loaded = 0;
    const total = data.size;
    let tries = 0;
    let postUrl = null;
    let token = null;
    let complete = false;
    let uploading = false;
    let timeA = null;
    let timeB = null;
    let elapsedTime = 0;
    let startTime = 0; // Keep only the name of the store

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
      const seconds = self.getElapsedTime() / 1000;
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
      const averageSpeed = self.getAverageSpeed();
      const remainingBytes = total - self.getLoaded();
      return averageSpeed && remainingBytes ? Math.max(remainingBytes / averageSpeed, 0) : 0;
    };
    /**
     * Returns the upload speed in bytes per second
     * @returns {number}
     */


    self.getSpeed = function () {
      if (timeA && timeB && self.isUploading()) {
        const seconds = (timeB - timeA) / 1000;
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
        let end; // Calculate the chunk size

        if (length && start + length > total) {
          end = total;
        } else {
          end = start + length;
        } // Get chunk


        const chunk = data.slice(start, end); // Pass chunk to callback

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
          let {
            chunkSize
          } = self; // Use adaptive length

          if (self.adaptive && timeA && timeB && timeB > timeA) {
            const duration = (timeB - timeA) / 1000;
            const max = self.capacity * (1 + capacityMargin);
            const min = self.capacity * (1 - capacityMargin);

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

            const xhr = new XMLHttpRequest();

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


            const progress = (offset + chunkSize) / total; // let formData = new FormData();
            // formData.append('progress', progress);
            // formData.append('chunk', chunk);

            const url = "".concat(postUrl, "&progress=").concat(progress);
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


  onAbort(file) {}
  /**
   * Called when the file upload is complete
   * @param file
   */
  // eslint-disable-next-line no-unused-vars


  onComplete(file) {}
  /**
   * Called when the file is created in the collection
   * @param file
   */
  // eslint-disable-next-line no-unused-vars


  onCreate(file) {}
  /**
   * Called when an error occurs during file upload
   * @param err
   * @param file
   */
  // eslint-disable-next-line no-unused-vars


  onError(err, file) {
    console.error("ufs: ".concat(err.message));
  }
  /**
   * Called when a file chunk has been sent
   * @param file
   * @param progress is a float from 0.0 to 1.0
   */
  // eslint-disable-next-line no-unused-vars


  onProgress(file, progress) {}
  /**
   * Called when the file upload starts
   * @param file
   */
  // eslint-disable-next-line no-unused-vars


  onStart(file) {}
  /**
   * Called when the file upload stops
   * @param file
   */
  // eslint-disable-next-line no-unused-vars


  onStop(file) {}

}
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"node_modules":{"spark-md5":{"package.json":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// node_modules/meteor/jalik_ufs/node_modules/spark-md5/package.json                                                 //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.exports = {
  "name": "spark-md5",
  "version": "3.0.0",
  "main": "spark-md5.js"
};

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

},"spark-md5.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                   //
// node_modules/meteor/jalik_ufs/node_modules/spark-md5/spark-md5.js                                                 //
//                                                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                     //
module.useNode();
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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

//# sourceURL=meteor://💻app/packages/jalik_ufs.js
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvamFsaWs6dWZzL3Vmcy5qcyIsIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvamFsaWs6dWZzL3Vmcy1jb25maWcuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3BhY2thZ2VzL2phbGlrOnVmcy91ZnMtZmlsdGVyLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9wYWNrYWdlcy9qYWxpazp1ZnMvdWZzLW1ldGhvZHMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3BhY2thZ2VzL2phbGlrOnVmcy91ZnMtbWltZS5qcyIsIm1ldGVvcjovL/CfkrthcHAvcGFja2FnZXMvamFsaWs6dWZzL3Vmcy1zZXJ2ZXIuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3BhY2thZ2VzL2phbGlrOnVmcy91ZnMtc3RvcmUtcGVybWlzc2lvbnMuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3BhY2thZ2VzL2phbGlrOnVmcy91ZnMtc3RvcmUuanMiLCJtZXRlb3I6Ly/wn5K7YXBwL3BhY2thZ2VzL2phbGlrOnVmcy91ZnMtdG9rZW5zLmpzIiwibWV0ZW9yOi8v8J+Su2FwcC9wYWNrYWdlcy9qYWxpazp1ZnMvdWZzLXVwbG9hZGVyLmpzIl0sIm5hbWVzIjpbIm1vZHVsZTEiLCJleHBvcnQiLCJVcGxvYWRGUyIsIk1ldGVvciIsImxpbmsiLCJ2IiwiUmFuZG9tIiwiQ29uZmlnIiwiRmlsdGVyIiwiTUlNRSIsIlN0b3JlIiwiU3RvcmVQZXJtaXNzaW9ucyIsIlRva2VucyIsIlVwbG9hZGVyIiwic3RvcmVzIiwic3RvcmUiLCJ0b2tlbnMiLCJhZGRFVGFnQXR0cmlidXRlVG9GaWxlcyIsIndoZXJlIiwiZ2V0U3RvcmVzIiwiZm9yRWFjaCIsImZpbGVzIiwiZ2V0Q29sbGVjdGlvbiIsImZpbmQiLCJldGFnIiwiZmllbGRzIiwiX2lkIiwiZmlsZSIsImRpcmVjdCIsInVwZGF0ZSIsIiRzZXQiLCJnZW5lcmF0ZUV0YWciLCJhZGRNaW1lVHlwZSIsImV4dGVuc2lvbiIsIm1pbWUiLCJ0b0xvd2VyQ2FzZSIsImFkZFBhdGhBdHRyaWJ1dGVUb0ZpbGVzIiwicGF0aCIsImdldEZpbGVSZWxhdGl2ZVVSTCIsImFkZFN0b3JlIiwiVHlwZUVycm9yIiwiZ2V0TmFtZSIsImlkIiwiZ2V0TWltZVR5cGUiLCJnZXRNaW1lVHlwZXMiLCJnZXRTdG9yZSIsIm5hbWUiLCJnZXRUZW1wRmlsZVBhdGgiLCJmaWxlSWQiLCJjb25maWciLCJ0bXBEaXIiLCJpbXBvcnRGcm9tVVJMIiwidXJsIiwiY2FsbGJhY2siLCJjYWxsIiwicmVhZEFzQXJyYXlCdWZmZXIiLCJjb25zb2xlIiwiZXJyb3IiLCJzZWxlY3RGaWxlIiwiaW5wdXQiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJ0eXBlIiwibXVsdGlwbGUiLCJvbmNoYW5nZSIsImV2IiwidGFyZ2V0IiwiZGl2IiwiY2xhc3NOYW1lIiwic3R5bGUiLCJhcHBlbmRDaGlsZCIsImJvZHkiLCJjbGljayIsInNlbGVjdEZpbGVzIiwiaSIsImxlbmd0aCIsImlzU2VydmVyIiwicmVxdWlyZSIsImdsb2JhbCIsImlzQ2xpZW50Iiwid2luZG93IiwibW9kdWxlIiwiXyIsImNvbnN0cnVjdG9yIiwib3B0aW9ucyIsImV4dGVuZCIsImRlZmF1bHRTdG9yZVBlcm1pc3Npb25zIiwiaHR0cHMiLCJzaW11bGF0ZVJlYWREZWxheSIsInNpbXVsYXRlVXBsb2FkU3BlZWQiLCJzaW11bGF0ZVdyaXRlRGVsYXkiLCJzdG9yZXNQYXRoIiwidG1wRGlyUGVybWlzc2lvbnMiLCJwYXJzZUludCIsInNlbGYiLCJjb250ZW50VHlwZXMiLCJleHRlbnNpb25zIiwibWluU2l6ZSIsIm1heFNpemUiLCJpbnZhbGlkRmlsZUVycm9yIiwiRXJyb3IiLCJmaWxlVG9vU21hbGxFcnJvciIsImZpbGVTaXplIiwibWluRmlsZVNpemUiLCJmaWxlVG9vTGFyZ2VFcnJvciIsIm1heEZpbGVTaXplIiwiaW52YWxpZEZpbGVFeHRlbnNpb24iLCJmaWxlRXh0ZW5zaW9uIiwiYWxsb3dlZEV4dGVuc2lvbnMiLCJpbnZhbGlkRmlsZVR5cGUiLCJmaWxlVHlwZSIsImFsbG93ZWRDb250ZW50VHlwZXMiLCJvbkNoZWNrIiwiQXJyYXkiLCJtZXRob2QiLCJjaGVjayIsInNpemUiLCJnZXRNaW5TaXplIiwiZ2V0TWF4U2l6ZSIsImdldEV4dGVuc2lvbnMiLCJpbmNsdWRlcyIsImdldENvbnRlbnRUeXBlcyIsImZpbGVUeXBlcyIsImlzQ29udGVudFR5cGVJbkxpc3QiLCJsaXN0Iiwid2lsZENhcmRHbG9iIiwid2lsZGNhcmRzIiwiZmlsdGVyIiwiaXRlbSIsImluZGV4T2YiLCJyZXBsYWNlIiwiaXNWYWxpZCIsInJlc3VsdCIsImVyciIsImZzIiwiTnBtIiwiaHR0cCIsIkZ1dHVyZSIsIm1ldGhvZHMiLCJ1ZnNDb21wbGV0ZSIsInN0b3JlTmFtZSIsInRva2VuIiwiU3RyaW5nIiwiY2hlY2tUb2tlbiIsImZ1dCIsInRtcEZpbGUiLCJyZW1vdmVUZW1wRmlsZSIsInVubGluayIsIm1lc3NhZ2UiLCJmaW5kT25lIiwidmFsaWRhdGUiLCJycyIsImNyZWF0ZVJlYWRTdHJlYW0iLCJmbGFncyIsImVuY29kaW5nIiwiYXV0b0Nsb3NlIiwib24iLCJiaW5kRW52aXJvbm1lbnQiLCJyZW1vdmUiLCJ0aHJvdyIsIndyaXRlIiwicmV0dXJuIiwid2FpdCIsInVmc0NyZWF0ZSIsIk9iamVjdCIsImNvbXBsZXRlIiwidXBsb2FkaW5nIiwic3Vic3RyIiwibGFzdEluZGV4T2YiLCJwcm9ncmVzcyIsInVzZXJJZCIsImdldEZpbHRlciIsImNyZWF0ZSIsImNyZWF0ZVRva2VuIiwidXBsb2FkVXJsIiwiZ2V0VVJMIiwidWZzRGVsZXRlIiwiY291bnQiLCJ1ZnNJbXBvcnRVUkwiLCJwYXJzZWRVcmwiLCJVUkwiLCJlIiwiaG9zdG5hbWUiLCJzcGxpdCIsInBvcCIsIm9yaWdpbmFsVXJsIiwid2FybiIsInByb3RvIiwidGVzdCIsInVuYmxvY2siLCJnZXQiLCJyZXMiLCJ1ZnNTdG9wIiwiV2ViQXBwIiwiU3BhcmtNRDUiLCJkZWZhdWx0IiwiZG9tYWluIiwibWtkaXJwIiwic3RyZWFtIiwiemxpYiIsInN0YXJ0dXAiLCJtb2RlIiwic3RhdCIsImxvZyIsImNobW9kIiwiZCIsImNvbm5lY3RIYW5kbGVycyIsInVzZSIsInJlcSIsIm5leHQiLCJwYXJzZSIsInBhdGhuYW1lIiwiYWxsb3dDT1JTIiwic2V0SGVhZGVyIiwicmVnRXhwIiwiUmVnRXhwIiwibWF0Y2giLCJleGVjIiwid3JpdGVIZWFkIiwiZW5kIiwicXVlcnkiLCJ1bmlxdWUiLCJoYXNoIiwib3JpZ2luYWxJZCIsIiRuZSIsInNwYXJrIiwiQXJyYXlCdWZmZXIiLCJ3cyIsImNyZWF0ZVdyaXRlU3RyZWFtIiwicGFyc2VGbG9hdCIsImlzTmFOIiwiTWF0aCIsIm1pbiIsImNodW5rIiwiYXBwZW5kIiwib25SZWFkIiwidW5kZWZpbmVkIiwiaW5kZXgiLCJfc2xlZXBGb3JNcyIsInJ1biIsInN0YXR1cyIsImhlYWRlcnMiLCJFVGFnIiwibW9kaWZpZWRBdCIsIkRhdGUiLCJ0b1VUQ1N0cmluZyIsInVwbG9hZGVkQXQiLCJtb2RpZmllZFNpbmNlIiwicmFuZ2UiLCJ0b3RhbCIsInVuaXQiLCJyYW5nZXMiLCJyIiwic3RhcnQiLCJnZXRSZWFkU3RyZWFtIiwiUGFzc1Rocm91Z2giLCJvblJlYWRFcnJvciIsImVtaXQiLCJ0cmFuc2Zvcm1SZWFkIiwiYWNjZXB0IiwicGlwZSIsImNyZWF0ZUd6aXAiLCJjcmVhdGVEZWZsYXRlIiwiaW5zZXJ0IiwiYWN0aW9ucyIsImFjdGlvbiIsIm1vZGlmaWVycyIsImNoZWNrSW5zZXJ0IiwiY2hlY2tSZW1vdmUiLCJjaGVja1VwZGF0ZSIsIl9vYmplY3RXaXRob3V0UHJvcGVydGllcyIsIk1vbmdvIiwiY29sbGVjdGlvbiIsIm9uQ29weUVycm9yIiwib25GaW5pc2hVcGxvYWQiLCJvblZhbGlkYXRlIiwib25Xcml0ZUVycm9yIiwicGVybWlzc2lvbnMiLCJ0cmFuc2Zvcm1Xcml0ZSIsIkNvbGxlY3Rpb24iLCJ2YWx1ZSIsImNvcHkiLCJvcmlnaW5hbFN0b3JlIiwiY29weUlkIiwiZ2VuZXJhdGVUb2tlbiIsImNyZWF0ZWRBdCIsImVycm9ySGFuZGxlciIsImZpbmlzaEhhbmRsZXIiLCJyZWFkU3RyZWFtIiwiZGF0YSIsImdldEZpbGVVUkwiLCJjb3B5VG8iLCJnZXRXcml0ZVN0cmVhbSIsIm9uY2UiLCJhZnRlciIsImJlZm9yZSIsImRlbGV0ZSIsInBhdHRlcm4iLCJjIiwicmFuZG9tIiwicyIsInRvU3RyaW5nIiwicm91bmQiLCJ0b1VwcGVyQ2FzZSIsImdldFJlbGF0aXZlVVJMIiwicm9vdFVybCIsImFic29sdXRlVXJsIiwicm9vdFBhdGgiLCJ0cmltIiwiZW5jb2RlVVJJIiwic2VjdXJlIiwicmVxdWVzdCIsInJlc3BvbnNlIiwic2V0UGVybWlzc2lvbnMiLCJ3cml0ZVN0cmVhbSIsImFkYXB0aXZlIiwiY2FwYWNpdHkiLCJjaHVua1NpemUiLCJtYXhDaHVua1NpemUiLCJtYXhUcmllcyIsIm9uQWJvcnQiLCJvbkNvbXBsZXRlIiwib25DcmVhdGUiLCJvbkVycm9yIiwib25Qcm9ncmVzcyIsIm9uU3RhcnQiLCJvblN0b3AiLCJyZXRyeURlbGF5IiwidHJhbnNmZXJEZWxheSIsIlJhbmdlRXJyb3IiLCJCbG9iIiwiRmlsZSIsImNhcGFjaXR5TWFyZ2luIiwib2Zmc2V0IiwibG9hZGVkIiwidHJpZXMiLCJwb3N0VXJsIiwidGltZUEiLCJ0aW1lQiIsImVsYXBzZWRUaW1lIiwic3RhcnRUaW1lIiwiZmluaXNoIiwidXBsb2FkZWRGaWxlIiwiYWJvcnQiLCJnZXRBdmVyYWdlU3BlZWQiLCJzZWNvbmRzIiwiZ2V0RWxhcHNlZFRpbWUiLCJnZXRMb2FkZWQiLCJpc1VwbG9hZGluZyIsIm5vdyIsImdldEZpbGUiLCJnZXRQcm9ncmVzcyIsImdldFJlbWFpbmluZ1RpbWUiLCJhdmVyYWdlU3BlZWQiLCJyZW1haW5pbmdCeXRlcyIsIm1heCIsImdldFNwZWVkIiwiZ2V0VG90YWwiLCJpc0NvbXBsZXRlIiwicmVhZENodW5rIiwic2xpY2UiLCJzZXRUaW1lb3V0Iiwic2VuZENodW5rIiwiZHVyYXRpb24iLCJhYnMiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJvcGVuIiwic2VuZCIsInN0b3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsU0FBTyxDQUFDQyxNQUFSLENBQWU7QUFBQ0MsWUFBUSxFQUFDLE1BQUlBO0FBQWQsR0FBZjtBQUF3QyxNQUFJQyxNQUFKO0FBQVdILFNBQU8sQ0FBQ0ksSUFBUixDQUFhLGVBQWIsRUFBNkI7QUFBQ0QsVUFBTSxDQUFDRSxDQUFELEVBQUc7QUFBQ0YsWUFBTSxHQUFDRSxDQUFQO0FBQVM7O0FBQXBCLEdBQTdCLEVBQW1ELENBQW5EO0FBQXNELE1BQUlDLE1BQUo7QUFBV04sU0FBTyxDQUFDSSxJQUFSLENBQWEsZUFBYixFQUE2QjtBQUFDRSxVQUFNLENBQUNELENBQUQsRUFBRztBQUFDQyxZQUFNLEdBQUNELENBQVA7QUFBUzs7QUFBcEIsR0FBN0IsRUFBbUQsQ0FBbkQ7QUFBc0QsTUFBSUUsTUFBSjtBQUFXUCxTQUFPLENBQUNJLElBQVIsQ0FBYSxjQUFiLEVBQTRCO0FBQUNHLFVBQU0sQ0FBQ0YsQ0FBRCxFQUFHO0FBQUNFLFlBQU0sR0FBQ0YsQ0FBUDtBQUFTOztBQUFwQixHQUE1QixFQUFrRCxDQUFsRDtBQUFxRCxNQUFJRyxNQUFKO0FBQVdSLFNBQU8sQ0FBQ0ksSUFBUixDQUFhLGNBQWIsRUFBNEI7QUFBQ0ksVUFBTSxDQUFDSCxDQUFELEVBQUc7QUFBQ0csWUFBTSxHQUFDSCxDQUFQO0FBQVM7O0FBQXBCLEdBQTVCLEVBQWtELENBQWxEO0FBQXFELE1BQUlJLElBQUo7QUFBU1QsU0FBTyxDQUFDSSxJQUFSLENBQWEsWUFBYixFQUEwQjtBQUFDSyxRQUFJLENBQUNKLENBQUQsRUFBRztBQUFDSSxVQUFJLEdBQUNKLENBQUw7QUFBTzs7QUFBaEIsR0FBMUIsRUFBNEMsQ0FBNUM7QUFBK0Ms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QXVTLFVBQVEsQ0FBQ3ZTLElBQUQsRUFBTyxDQUFFO0FBRWpCO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQzs7O0FBQ0F3UyxTQUFPLENBQUM5TCxHQUFELEVBQU0xRyxJQUFOLEVBQVk7QUFDbEI2QixXQUFPLENBQUNDLEtBQVIsZ0JBQXNCNEUsR0FBRyxDQUFDZSxPQUExQjtBQUNBO0FBRUQ7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNDOzs7QUFDQWdMLFlBQVUsQ0FBQ3pTLElBQUQsRUFBTzhJLFFBQVAsRUFBaUIsQ0FBRTtBQUU3QjtBQUNEO0FBQ0E7QUFDQTtBQUNDOzs7QUFDQTRKLFNBQU8sQ0FBQzFTLElBQUQsRUFBTyxDQUFFO0FBRWhCO0FBQ0Q7QUFDQTtBQUNBO0FBQ0M7OztBQUNBMlMsUUFBTSxDQUFDM1MsSUFBRCxFQUFPLENBQUU7O0FBdGVNLEMiLCJmaWxlIjoiL3BhY2thZ2VzL2phbGlrX3Vmcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgS2FybCBTVEVJTlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogU09GVFdBUkUuXG4gKlxuICovXG5pbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcbmltcG9ydCB7IFJhbmRvbSB9IGZyb20gJ21ldGVvci9yYW5kb20nO1xuXG5pbXBvcnQgeyBDb25maWcgfSBmcm9tICcuL3Vmcy1jb25maWcnO1xuaW1wb3J0IHsgRmlsdGVyIH0gZnJvbSAnLi91ZnMtZmlsdGVyJztcbmltcG9ydCB7IE1JTUUgfSBmcm9tICcuL3Vmcy1taW1lJztcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSAnLi91ZnMtc3RvcmUnO1xuaW1wb3J0IHsgU3RvcmVQZXJtaXNzaW9ucyB9IGZyb20gJy4vdWZzLXN0b3JlLXBlcm1pc3Npb25zJztcbmltcG9ydCB7IFRva2VucyB9IGZyb20gJy4vdWZzLXRva2Vucyc7XG5pbXBvcnQgeyBVcGxvYWRlciB9IGZyb20gJy4vdWZzLXVwbG9hZGVyJztcblxuY29uc3Qgc3RvcmVzID0ge307XG5cbmV4cG9ydCBjb25zdCBVcGxvYWRGUyA9IHtcblx0LyoqXG5cdCAqIENvbnRhaW5zIGFsbCBzdG9yZXNcblx0ICovXG5cdHN0b3JlOiB7fSxcblxuXHQvKipcblx0ICogQ29sbGVjdGlvbiBvZiB0b2tlbnNcblx0ICovXG5cdHRva2VuczogVG9rZW5zLFxuXG5cdC8qKlxuXHQgKiBBZGRzIHRoZSBcImV0YWdcIiBhdHRyaWJ1dGUgdG8gZmlsZXNcblx0ICogQHBhcmFtIHdoZXJlXG5cdCAqL1xuXHRhZGRFVGFnQXR0cmlidXRlVG9GaWxlcyh3aGVyZSkge1xuXHRcdHRoaXMuZ2V0U3RvcmVzKCkuZm9yRWFjaCgoc3RvcmUpID0+IHtcblx0XHRcdGNvbnN0IGZpbGVzID0gc3RvcmUuZ2V0Q29sbGVjdGlvbigpO1xuXG5cdFx0XHQvLyBCeSBkZWZhdWx0IHVwZGF0ZSBvbmx5IGZpbGVzIHdpdGggbm8gcGF0aCBzZXRcblx0XHRcdGZpbGVzLmZpbmQod2hlcmUgfHwgeyBldGFnOiBudWxsIH0sIHsgZmllbGRzOiB7IF9pZDogMSB9IH0pLmZvckVhY2goKGZpbGUpID0+IHtcblx0XHRcdFx0ZmlsZXMuZGlyZWN0LnVwZGF0ZShmaWxlLl9pZCwgeyAkc2V0OiB7IGV0YWc6IHRoaXMuZ2VuZXJhdGVFdGFnKCkgfSB9KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBBZGRzIHRoZSBNSU1FIHR5cGUgZm9yIGFuIGV4dGVuc2lvblxuXHQgKiBAcGFyYW0gZXh0ZW5zaW9uXG5cdCAqIEBwYXJhbSBtaW1lXG5cdCAqL1xuXHRhZGRNaW1lVHlwZShleHRlbnNpb24sIG1pbWUpIHtcblx0XHRNSU1FW2V4dGVuc2lvbi50b0xvd2VyQ2FzZSgpXSA9IG1pbWU7XG5cdH0sXG5cblx0LyoqXG5cdCAqIEFkZHMgdGhlIFwicGF0aFwiIGF0dHJpYnV0ZSB0byBmaWxlc1xuXHQgKiBAcGFyYW0gd2hlcmVcblx0ICovXG5cdGFkZFBhdGhBdHRyaWJ1dGVUb0ZpbGVzKHdoZXJlKSB7XG5cdFx0dGhpcy5nZXRTdG9yZXMoKS5mb3JFYWNoKChzdG9yZSkgPT4ge1xuXHRcdFx0Y29uc3QgZmlsZXMgPSBzdG9yZS5nZXRDb2xsZWN0aW9uKCk7XG5cblx0XHRcdC8vIEJ5IGRlZmF1bHQgdXBkYXRlIG9ubHkgZmlsZXMgd2l0aCBubyBwYXRoIHNldFxuXHRcdFx0ZmlsZXMuZmluZCh3aGVyZSB8fCB7IHBhdGg6IG51bGwgfSwgeyBmaWVsZHM6IHsgX2lkOiAxIH0gfSkuZm9yRWFjaCgoZmlsZSkgPT4ge1xuXHRcdFx0XHRmaWxlcy5kaXJlY3QudXBkYXRlKGZpbGUuX2lkLCB7ICRzZXQ6IHsgcGF0aDogc3RvcmUuZ2V0RmlsZVJlbGF0aXZlVVJMKGZpbGUuX2lkKSB9IH0pO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH0sXG5cblx0LyoqXG5cdCAqIFJlZ2lzdGVycyB0aGUgc3RvcmVcblx0ICogQHBhcmFtIHN0b3JlXG5cdCAqL1xuXHRhZGRTdG9yZShzdG9yZSkge1xuXHRcdGlmICghKHN0b3JlIGluc3RhbmNlb2YgU3RvcmUpKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCd1ZnM6IHN0b3JlIGlzIG5vdCBhbiBpbnN0YW5jZSBvZiBVcGxvYWRGUy5TdG9yZS4nKTtcblx0XHR9XG5cdFx0c3RvcmVzW3N0b3JlLmdldE5hbWUoKV0gPSBzdG9yZTtcblx0fSxcblxuXHQvKipcblx0ICogR2VuZXJhdGVzIGEgdW5pcXVlIEVUYWdcblx0ICogQHJldHVybiB7c3RyaW5nfVxuXHQgKi9cblx0Z2VuZXJhdGVFdGFnKCkge1xuXHRcdHJldHVybiBSYW5kb20uaWQoKTtcblx0fSxcblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgTUlNRSB0eXBlIG9mIHRoZSBleHRlbnNpb25cblx0ICogQHBhcmFtIGV4dGVuc2lvblxuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdGdldE1pbWVUeXBlKGV4dGVuc2lvbikge1xuXHRcdGV4dGVuc2lvbiA9IGV4dGVuc2lvbi50b0xvd2VyQ2FzZSgpO1xuXHRcdHJldHVybiBNSU1FW2V4dGVuc2lvbl07XG5cdH0sXG5cblx0LyoqXG5cdCAqIFJldHVybnMgYWxsIE1JTUUgdHlwZXNcblx0ICovXG5cdGdldE1pbWVUeXBlcygpIHtcblx0XHRyZXR1cm4gTUlNRTtcblx0fSxcblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgc3RvcmUgYnkgaXRzIG5hbWVcblx0ICogQHBhcmFtIG5hbWVcblx0ICogQHJldHVybiB7VXBsb2FkRlMuU3RvcmV9XG5cdCAqL1xuXHRnZXRTdG9yZShuYW1lKSB7XG5cdFx0cmV0dXJuIHN0b3Jlc1tuYW1lXTtcblx0fSxcblxuXHQvKipcblx0ICogUmV0dXJucyBhbGwgc3RvcmVzXG5cdCAqIEByZXR1cm4ge29iamVjdH1cblx0ICovXG5cdGdldFN0b3JlcygpIHtcblx0XHRyZXR1cm4gc3RvcmVzO1xuXHR9LFxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSB0ZW1wb3JhcnkgZmlsZSBwYXRoXG5cdCAqIEBwYXJhbSBmaWxlSWRcblx0ICogQHJldHVybiB7c3RyaW5nfVxuXHQgKi9cblx0Z2V0VGVtcEZpbGVQYXRoKGZpbGVJZCkge1xuXHRcdHJldHVybiBgJHt0aGlzLmNvbmZpZy50bXBEaXJ9LyR7ZmlsZUlkfWA7XG5cdH0sXG5cblx0LyoqXG5cdCAqIEltcG9ydHMgYSBmaWxlIGZyb20gYSBVUkxcblx0ICogQHBhcmFtIHVybFxuXHQgKiBAcGFyYW0gZmlsZVxuXHQgKiBAcGFyYW0gc3RvcmVcblx0ICogQHBhcmFtIGNhbGxiYWNrXG5cdCAqL1xuXHRpbXBvcnRGcm9tVVJMKHVybCwgZmlsZSwgc3RvcmUsIGNhbGxiYWNrKSB7XG5cdFx0aWYgKHR5cGVvZiBzdG9yZSA9PT0gJ3N0cmluZycpIHtcblx0XHRcdE1ldGVvci5jYWxsKCd1ZnNJbXBvcnRVUkwnLCB1cmwsIGZpbGUsIHN0b3JlLCBjYWxsYmFjayk7XG5cdFx0fSBlbHNlIGlmICh0eXBlb2Ygc3RvcmUgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRzdG9yZS5pbXBvcnRGcm9tVVJMKHVybCwgZmlsZSwgY2FsbGJhY2spO1xuXHRcdH1cblx0fSxcblxuXHQvKipcblx0ICogUmV0dXJucyBmaWxlIGFuZCBkYXRhIGFzIEFycmF5QnVmZmVyIGZvciBlYWNoIGZpbGVzIGluIHRoZSBldmVudFxuXHQgKiBAZGVwcmVjYXRlZFxuXHQgKiBAcGFyYW0gZXZlbnRcblx0ICogQHBhcmFtIGNhbGxiYWNrXG5cdCAqL1xuXHRyZWFkQXNBcnJheUJ1ZmZlcigpIHtcblx0XHRjb25zb2xlLmVycm9yKCdVcGxvYWRGUy5yZWFkQXNBcnJheUJ1ZmZlciBpcyBkZXByZWNhdGVkLCBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2phbGlrL2phbGlrLXVmcyN1cGxvYWRpbmctZnJvbS1hLWZpbGUnKTtcblx0fSxcblxuXHQvKipcblx0ICogT3BlbnMgYSBkaWFsb2cgdG8gc2VsZWN0IGEgc2luZ2xlIGZpbGVcblx0ICogQHBhcmFtIGNhbGxiYWNrXG5cdCAqL1xuXHRzZWxlY3RGaWxlKGNhbGxiYWNrKSB7XG5cdFx0Y29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuXHRcdGlucHV0LnR5cGUgPSAnZmlsZSc7XG5cdFx0aW5wdXQubXVsdGlwbGUgPSBmYWxzZTtcblx0XHRpbnB1dC5vbmNoYW5nZSA9IChldikgPT4ge1xuXHRcdFx0Y29uc3QgeyBmaWxlcyB9ID0gZXYudGFyZ2V0O1xuXHRcdFx0Y2FsbGJhY2suY2FsbChVcGxvYWRGUywgZmlsZXNbMF0pO1xuXHRcdH07XG5cdFx0Ly8gRml4IGZvciBpT1MvU2FmYXJpXG5cdFx0Y29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdFx0ZGl2LmNsYXNzTmFtZSA9ICd1ZnMtZmlsZS1zZWxlY3Rvcic7XG5cdFx0ZGl2LnN0eWxlID0gJ2Rpc3BsYXk6bm9uZTsgaGVpZ2h0OjA7IHdpZHRoOjA7IG92ZXJmbG93OiBoaWRkZW47Jztcblx0XHRkaXYuYXBwZW5kQ2hpbGQoaW5wdXQpO1xuXHRcdGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZGl2KTtcblx0XHQvLyBUcmlnZ2VyIGZpbGUgc2VsZWN0aW9uXG5cdFx0aW5wdXQuY2xpY2soKTtcblx0fSxcblxuXHQvKipcblx0ICogT3BlbnMgYSBkaWFsb2cgdG8gc2VsZWN0IG11bHRpcGxlIGZpbGVzXG5cdCAqIEBwYXJhbSBjYWxsYmFja1xuXHQgKi9cblx0c2VsZWN0RmlsZXMoY2FsbGJhY2spIHtcblx0XHRjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG5cdFx0aW5wdXQudHlwZSA9ICdmaWxlJztcblx0XHRpbnB1dC5tdWx0aXBsZSA9IHRydWU7XG5cdFx0aW5wdXQub25jaGFuZ2UgPSAoZXYpID0+IHtcblx0XHRcdGNvbnN0IHsgZmlsZXMgfSA9IGV2LnRhcmdldDtcblxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBmaWxlcy5sZW5ndGg7IGkgKz0gMSkge1xuXHRcdFx0XHRjYWxsYmFjay5jYWxsKFVwbG9hZEZTLCBmaWxlc1tpXSk7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHQvLyBGaXggZm9yIGlPUy9TYWZhcmlcblx0XHRjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblx0XHRkaXYuY2xhc3NOYW1lID0gJ3Vmcy1maWxlLXNlbGVjdG9yJztcblx0XHRkaXYuc3R5bGUgPSAnZGlzcGxheTpub25lOyBoZWlnaHQ6MDsgd2lkdGg6MDsgb3ZlcmZsb3c6IGhpZGRlbjsnO1xuXHRcdGRpdi5hcHBlbmRDaGlsZChpbnB1dCk7XG5cdFx0ZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChkaXYpO1xuXHRcdC8vIFRyaWdnZXIgZmlsZSBzZWxlY3Rpb25cblx0XHRpbnB1dC5jbGljaygpO1xuXHR9LFxufTtcblxuaWYgKE1ldGVvci5pc1NlcnZlcikge1xuXHRyZXF1aXJlKCcuL3Vmcy1tZXRob2RzJyk7XG5cdHJlcXVpcmUoJy4vdWZzLXNlcnZlcicpO1xufVxuXG4vKipcbiAqIFVwbG9hZEZTIENvbmZpZ3VyYXRpb25cbiAqIEB0eXBlIHtDb25maWd9XG4gKi9cblVwbG9hZEZTLmNvbmZpZyA9IG5ldyBDb25maWcoKTtcblxuLy8gQWRkIGNsYXNzZXMgdG8gZ2xvYmFsIG5hbWVzcGFjZVxuVXBsb2FkRlMuQ29uZmlnID0gQ29uZmlnO1xuVXBsb2FkRlMuRmlsdGVyID0gRmlsdGVyO1xuVXBsb2FkRlMuU3RvcmUgPSBTdG9yZTtcblVwbG9hZEZTLlN0b3JlUGVybWlzc2lvbnMgPSBTdG9yZVBlcm1pc3Npb25zO1xuVXBsb2FkRlMuVXBsb2FkZXIgPSBVcGxvYWRlcjtcblxuaWYgKE1ldGVvci5pc1NlcnZlcikge1xuXHQvLyBFeHBvc2UgdGhlIG1vZHVsZSBnbG9iYWxseVxuXHRpZiAodHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRnbG9iYWwuVXBsb2FkRlMgPSBVcGxvYWRGUztcblx0fVxufSBlbHNlIGlmIChNZXRlb3IuaXNDbGllbnQpIHtcblx0Ly8gRXhwb3NlIHRoZSBtb2R1bGUgZ2xvYmFsbHlcblx0aWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnKSB7XG5cdFx0d2luZG93LlVwbG9hZEZTID0gVXBsb2FkRlM7XG5cdH1cbn1cbiIsIi8qXG4gKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgS2FybCBTVEVJTlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogU09GVFdBUkUuXG4gKlxuICovXG5cbmltcG9ydCB7IF8gfSBmcm9tICdtZXRlb3IvdW5kZXJzY29yZSc7XG5cbmltcG9ydCB7IFN0b3JlUGVybWlzc2lvbnMgfSBmcm9tICcuL3Vmcy1zdG9yZS1wZXJtaXNzaW9ucyc7XG5cbi8qKlxuICogVXBsb2FkRlMgY29uZmlndXJhdGlvblxuICovXG5leHBvcnQgY2xhc3MgQ29uZmlnIHtcblx0Y29uc3RydWN0b3Iob3B0aW9ucykge1xuXHRcdC8vIERlZmF1bHQgb3B0aW9uc1xuXHRcdG9wdGlvbnMgPSBfLmV4dGVuZChcblx0XHRcdHtcblx0XHRcdFx0ZGVmYXVsdFN0b3JlUGVybWlzc2lvbnM6IG51bGwsXG5cdFx0XHRcdGh0dHBzOiBmYWxzZSxcblx0XHRcdFx0c2ltdWxhdGVSZWFkRGVsYXk6IDAsXG5cdFx0XHRcdHNpbXVsYXRlVXBsb2FkU3BlZWQ6IDAsXG5cdFx0XHRcdHNpbXVsYXRlV3JpdGVEZWxheTogMCxcblx0XHRcdFx0c3RvcmVzUGF0aDogJ3VmcycsXG5cdFx0XHRcdHRtcERpcjogJy90bXAvdWZzJyxcblx0XHRcdFx0dG1wRGlyUGVybWlzc2lvbnM6ICcwNzAwJyxcblx0XHRcdH0sXG5cdFx0XHRvcHRpb25zLFxuXHRcdCk7XG5cblx0XHQvLyBDaGVjayBvcHRpb25zXG5cdFx0aWYgKG9wdGlvbnMuZGVmYXVsdFN0b3JlUGVybWlzc2lvbnMgJiYgIShvcHRpb25zLmRlZmF1bHRTdG9yZVBlcm1pc3Npb25zIGluc3RhbmNlb2YgU3RvcmVQZXJtaXNzaW9ucykpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0NvbmZpZzogZGVmYXVsdFN0b3JlUGVybWlzc2lvbnMgaXMgbm90IGFuIGluc3RhbmNlIG9mIFN0b3JlUGVybWlzc2lvbnMnKTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiBvcHRpb25zLmh0dHBzICE9PSAnYm9vbGVhbicpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0NvbmZpZzogaHR0cHMgaXMgbm90IGEgZnVuY3Rpb24nKTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbXVsYXRlUmVhZERlbGF5ICE9PSAnbnVtYmVyJykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQ29uZmlnOiBzaW11bGF0ZVJlYWREZWxheSBpcyBub3QgYSBudW1iZXInKTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiBvcHRpb25zLnNpbXVsYXRlVXBsb2FkU3BlZWQgIT09ICdudW1iZXInKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdDb25maWc6IHNpbXVsYXRlVXBsb2FkU3BlZWQgaXMgbm90IGEgbnVtYmVyJyk7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW11bGF0ZVdyaXRlRGVsYXkgIT09ICdudW1iZXInKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdDb25maWc6IHNpbXVsYXRlV3JpdGVEZWxheSBpcyBub3QgYSBudW1iZXInKTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiBvcHRpb25zLnN0b3Jlc1BhdGggIT09ICdzdHJpbmcnKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdDb25maWc6IHN0b3Jlc1BhdGggaXMgbm90IGEgc3RyaW5nJyk7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2Ygb3B0aW9ucy50bXBEaXIgIT09ICdzdHJpbmcnKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdDb25maWc6IHRtcERpciBpcyBub3QgYSBzdHJpbmcnKTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiBvcHRpb25zLnRtcERpclBlcm1pc3Npb25zICE9PSAnc3RyaW5nJykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignQ29uZmlnOiB0bXBEaXJQZXJtaXNzaW9ucyBpcyBub3QgYSBzdHJpbmcnKTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBEZWZhdWx0IHN0b3JlIHBlcm1pc3Npb25zXG5cdFx0ICogQHR5cGUge1VwbG9hZEZTLlN0b3JlUGVybWlzc2lvbnN9XG5cdFx0ICovXG5cdFx0dGhpcy5kZWZhdWx0U3RvcmVQZXJtaXNzaW9ucyA9IG9wdGlvbnMuZGVmYXVsdFN0b3JlUGVybWlzc2lvbnM7XG5cdFx0LyoqXG5cdFx0ICogVXNlIG9yIG5vdCBzZWN1cmVkIHByb3RvY29sIGluIFVSTFNcblx0XHQgKiBAdHlwZSB7Ym9vbGVhbn1cblx0XHQgKi9cblx0XHR0aGlzLmh0dHBzID0gb3B0aW9ucy5odHRwcztcblx0XHQvKipcblx0XHQgKiBUaGUgc2ltdWxhdGlvbiByZWFkIGRlbGF5XG5cdFx0ICogQHR5cGUge051bWJlcn1cblx0XHQgKi9cblx0XHR0aGlzLnNpbXVsYXRlUmVhZERlbGF5ID0gcGFyc2VJbnQob3B0aW9ucy5zaW11bGF0ZVJlYWREZWxheSk7XG5cdFx0LyoqXG5cdFx0ICogVGhlIHNpbXVsYXRpb24gdXBsb2FkIHNwZWVkXG5cdFx0ICogQHR5cGUge051bWJlcn1cblx0XHQgKi9cblx0XHR0aGlzLnNpbXVsYXRlVXBsb2FkU3BlZWQgPSBwYXJzZUludChvcHRpb25zLnNpbXVsYXRlVXBsb2FkU3BlZWQpO1xuXHRcdC8qKlxuXHRcdCAqIFRoZSBzaW11bGF0aW9uIHdyaXRlIGRlbGF5XG5cdFx0ICogQHR5cGUge051bWJlcn1cblx0XHQgKi9cblx0XHR0aGlzLnNpbXVsYXRlV3JpdGVEZWxheSA9IHBhcnNlSW50KG9wdGlvbnMuc2ltdWxhdGVXcml0ZURlbGF5KTtcblx0XHQvKipcblx0XHQgKiBUaGUgVVJMIHJvb3QgcGF0aCBvZiBzdG9yZXNcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMuc3RvcmVzUGF0aCA9IG9wdGlvbnMuc3RvcmVzUGF0aDtcblx0XHQvKipcblx0XHQgKiBUaGUgdGVtcG9yYXJ5IGRpcmVjdG9yeSBvZiB1cGxvYWRpbmcgZmlsZXNcblx0XHQgKiBAdHlwZSB7c3RyaW5nfVxuXHRcdCAqL1xuXHRcdHRoaXMudG1wRGlyID0gb3B0aW9ucy50bXBEaXI7XG5cdFx0LyoqXG5cdFx0ICogVGhlIHBlcm1pc3Npb25zIG9mIHRoZSB0ZW1wb3JhcnkgZGlyZWN0b3J5XG5cdFx0ICogQHR5cGUge3N0cmluZ31cblx0XHQgKi9cblx0XHR0aGlzLnRtcERpclBlcm1pc3Npb25zID0gb3B0aW9ucy50bXBEaXJQZXJtaXNzaW9ucztcblx0fVxufVxuIiwiLypcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNyBLYXJsIFNURUlOXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiBTT0ZUV0FSRS5cbiAqXG4gKi9cbmltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuaW1wb3J0IHsgXyB9IGZyb20gJ21ldGVvci91bmRlcnNjb3JlJztcblxuLyoqXG4gKiBGaWxlIGZpbHRlclxuICovXG5leHBvcnQgY2xhc3MgRmlsdGVyIHtcblx0Y29uc3RydWN0b3Iob3B0aW9ucykge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXG5cdFx0Ly8gRGVmYXVsdCBvcHRpb25zXG5cdFx0b3B0aW9ucyA9IF8uZXh0ZW5kKFxuXHRcdFx0e1xuXHRcdFx0XHRjb250ZW50VHlwZXM6IG51bGwsXG5cdFx0XHRcdGV4dGVuc2lvbnM6IG51bGwsXG5cdFx0XHRcdG1pblNpemU6IDEsXG5cdFx0XHRcdG1heFNpemU6IDAsXG5cdFx0XHRcdGludmFsaWRGaWxlRXJyb3I6ICgpID0+IG5ldyBNZXRlb3IuRXJyb3IoJ2ludmFsaWQtZmlsZScsICdGaWxlIGlzIG5vdCB2YWxpZCcpLFxuXHRcdFx0XHRmaWxlVG9vU21hbGxFcnJvcjogKGZpbGVTaXplLCBtaW5GaWxlU2l6ZSkgPT5cblx0XHRcdFx0XHRuZXcgTWV0ZW9yLkVycm9yKCdmaWxlLXRvby1zbWFsbCcsIGBGaWxlIHNpemUgKHNpemUgPSAke2ZpbGVTaXplfSkgaXMgdG9vIHNtYWxsIChtaW4gPSAke21pbkZpbGVTaXplfSlgKSxcblx0XHRcdFx0ZmlsZVRvb0xhcmdlRXJyb3I6IChmaWxlU2l6ZSwgbWF4RmlsZVNpemUpID0+XG5cdFx0XHRcdFx0bmV3IE1ldGVvci5FcnJvcignZmlsZS10b28tbGFyZ2UnLCBgRmlsZSBzaXplIChzaXplID0gJHtmaWxlU2l6ZX0pIGlzIHRvbyBsYXJnZSAobWF4ID0gJHttYXhGaWxlU2l6ZX0pYCksXG5cdFx0XHRcdGludmFsaWRGaWxlRXh0ZW5zaW9uOiAoZmlsZUV4dGVuc2lvbiwgYWxsb3dlZEV4dGVuc2lvbnMpID0+XG5cdFx0XHRcdFx0bmV3IE1ldGVvci5FcnJvcignaW52YWxpZC1maWxlLWV4dGVuc2lvbicsIGBGaWxlIGV4dGVuc2lvbiBcIiR7ZmlsZUV4dGVuc2lvbn1cIiBpcyBub3QgYWNjZXB0ZWQgKCR7YWxsb3dlZEV4dGVuc2lvbnN9KWApLFxuXHRcdFx0XHRpbnZhbGlkRmlsZVR5cGU6IChmaWxlVHlwZSwgYWxsb3dlZENvbnRlbnRUeXBlcykgPT5cblx0XHRcdFx0XHRuZXcgTWV0ZW9yLkVycm9yKCdpbnZhbGlkLWZpbGUtdHlwZScsIGBGaWxlIHR5cGUgXCIke2ZpbGVUeXBlfVwiIGlzIG5vdCBhY2NlcHRlZCAoJHthbGxvd2VkQ29udGVudFR5cGVzfSlgKSxcblx0XHRcdFx0b25DaGVjazogdGhpcy5vbkNoZWNrLFxuXHRcdFx0fSxcblx0XHRcdG9wdGlvbnMsXG5cdFx0KTtcblxuXHRcdC8vIENoZWNrIG9wdGlvbnNcblx0XHRpZiAob3B0aW9ucy5jb250ZW50VHlwZXMgJiYgIShvcHRpb25zLmNvbnRlbnRUeXBlcyBpbnN0YW5jZW9mIEFycmF5KSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignRmlsdGVyOiBjb250ZW50VHlwZXMgaXMgbm90IGFuIEFycmF5Jyk7XG5cdFx0fVxuXHRcdGlmIChvcHRpb25zLmV4dGVuc2lvbnMgJiYgIShvcHRpb25zLmV4dGVuc2lvbnMgaW5zdGFuY2VvZiBBcnJheSkpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZpbHRlcjogZXh0ZW5zaW9ucyBpcyBub3QgYW4gQXJyYXknKTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiBvcHRpb25zLm1pblNpemUgIT09ICdudW1iZXInKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdGaWx0ZXI6IG1pblNpemUgaXMgbm90IGEgbnVtYmVyJyk7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2Ygb3B0aW9ucy5tYXhTaXplICE9PSAnbnVtYmVyJykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignRmlsdGVyOiBtYXhTaXplIGlzIG5vdCBhIG51bWJlcicpO1xuXHRcdH1cblx0XHRpZiAob3B0aW9ucy5vbkNoZWNrICYmIHR5cGVvZiBvcHRpb25zLm9uQ2hlY2sgIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ0ZpbHRlcjogb25DaGVjayBpcyBub3QgYSBmdW5jdGlvbicpO1xuXHRcdH1cblxuXHRcdC8vIFB1YmxpYyBhdHRyaWJ1dGVzXG5cdFx0c2VsZi5vcHRpb25zID0gb3B0aW9ucztcblx0XHRbJ29uQ2hlY2snXS5mb3JFYWNoKChtZXRob2QpID0+IHtcblx0XHRcdGlmICh0eXBlb2Ygb3B0aW9uc1ttZXRob2RdID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdHNlbGZbbWV0aG9kXSA9IG9wdGlvbnNbbWV0aG9kXTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDaGVja3MgdGhlIGZpbGVcblx0ICogQHBhcmFtIGZpbGVcblx0ICovXG5cdGNoZWNrKGZpbGUpIHtcblx0XHRsZXQgZXJyb3IgPSBudWxsO1xuXHRcdGlmICh0eXBlb2YgZmlsZSAhPT0gJ29iamVjdCcgfHwgIWZpbGUpIHtcblx0XHRcdGVycm9yID0gdGhpcy5vcHRpb25zLmludmFsaWRGaWxlRXJyb3IoKTtcblx0XHR9XG5cdFx0Ly8gQ2hlY2sgc2l6ZVxuXHRcdGNvbnN0IGZpbGVTaXplID0gZmlsZS5zaXplO1xuXHRcdGNvbnN0IG1pblNpemUgPSB0aGlzLmdldE1pblNpemUoKTtcblx0XHRpZiAoZmlsZVNpemUgPD0gMCB8fCBmaWxlU2l6ZSA8IG1pblNpemUpIHtcblx0XHRcdGVycm9yID0gdGhpcy5vcHRpb25zLmZpbGVUb29TbWFsbEVycm9yKGZpbGVTaXplLCBtaW5TaXplKTtcblx0XHR9XG5cdFx0Y29uc3QgbWF4U2l6ZSA9IHRoaXMuZ2V0TWF4U2l6ZSgpO1xuXHRcdGlmIChtYXhTaXplID4gMCAmJiBmaWxlU2l6ZSA+IG1heFNpemUpIHtcblx0XHRcdGVycm9yID0gdGhpcy5vcHRpb25zLmZpbGVUb29MYXJnZUVycm9yKGZpbGVTaXplLCBtYXhTaXplKTtcblx0XHR9XG5cdFx0Ly8gQ2hlY2sgZXh0ZW5zaW9uXG5cdFx0Y29uc3QgYWxsb3dlZEV4dGVuc2lvbnMgPSB0aGlzLmdldEV4dGVuc2lvbnMoKTtcblx0XHRjb25zdCBmaWxlRXh0ZW5zaW9uID0gZmlsZS5leHRlbnNpb247XG5cdFx0aWYgKGFsbG93ZWRFeHRlbnNpb25zICYmICFhbGxvd2VkRXh0ZW5zaW9ucy5pbmNsdWRlcyhmaWxlRXh0ZW5zaW9uKSkge1xuXHRcdFx0ZXJyb3IgPSB0aGlzLm9wdGlvbnMuaW52YWxpZEZpbGVFeHRlbnNpb24oZmlsZUV4dGVuc2lvbiwgYWxsb3dlZEV4dGVuc2lvbnMpO1xuXHRcdH1cblx0XHQvLyBDaGVjayBjb250ZW50IHR5cGVcblx0XHRjb25zdCBhbGxvd2VkQ29udGVudFR5cGVzID0gdGhpcy5nZXRDb250ZW50VHlwZXMoKTtcblx0XHRjb25zdCBmaWxlVHlwZXMgPSBmaWxlLnR5cGU7XG5cdFx0aWYgKGFsbG93ZWRDb250ZW50VHlwZXMgJiYgIXRoaXMuaXNDb250ZW50VHlwZUluTGlzdChmaWxlVHlwZXMsIGFsbG93ZWRDb250ZW50VHlwZXMpKSB7XG5cdFx0XHRlcnJvciA9IHRoaXMub3B0aW9ucy5pbnZhbGlkRmlsZVR5cGUoZmlsZVR5cGVzLCBhbGxvd2VkQ29udGVudFR5cGVzKTtcblx0XHR9XG5cdFx0Ly8gQXBwbHkgY3VzdG9tIGNoZWNrXG5cdFx0aWYgKHR5cGVvZiB0aGlzLm9uQ2hlY2sgPT09ICdmdW5jdGlvbicgJiYgIXRoaXMub25DaGVjayhmaWxlKSkge1xuXHRcdFx0ZXJyb3IgPSBuZXcgTWV0ZW9yLkVycm9yKCdpbnZhbGlkLWZpbGUnLCAnRmlsZSBkb2VzIG5vdCBtYXRjaCBmaWx0ZXInKTtcblx0XHR9XG5cblx0XHRpZiAoZXJyb3IpIHtcblx0XHRcdHRocm93IGVycm9yO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBhbGxvd2VkIGNvbnRlbnQgdHlwZXNcblx0ICogQHJldHVybiB7QXJyYXl9XG5cdCAqL1xuXHRnZXRDb250ZW50VHlwZXMoKSB7XG5cdFx0cmV0dXJuIHRoaXMub3B0aW9ucy5jb250ZW50VHlwZXM7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgYWxsb3dlZCBleHRlbnNpb25zXG5cdCAqIEByZXR1cm4ge0FycmF5fVxuXHQgKi9cblx0Z2V0RXh0ZW5zaW9ucygpIHtcblx0XHRyZXR1cm4gdGhpcy5vcHRpb25zLmV4dGVuc2lvbnM7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgbWF4aW11bSBmaWxlIHNpemVcblx0ICogQHJldHVybiB7TnVtYmVyfVxuXHQgKi9cblx0Z2V0TWF4U2l6ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5vcHRpb25zLm1heFNpemU7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgbWluaW11bSBmaWxlIHNpemVcblx0ICogQHJldHVybiB7TnVtYmVyfVxuXHQgKi9cblx0Z2V0TWluU2l6ZSgpIHtcblx0XHRyZXR1cm4gdGhpcy5vcHRpb25zLm1pblNpemU7XG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2tzIGlmIGNvbnRlbnQgdHlwZSBpcyBpbiB0aGUgZ2l2ZW4gbGlzdFxuXHQgKiBAcGFyYW0gdHlwZVxuXHQgKiBAcGFyYW0gbGlzdFxuXHQgKiBAcmV0dXJuIHtib29sZWFufVxuXHQgKi9cblx0aXNDb250ZW50VHlwZUluTGlzdCh0eXBlLCBsaXN0KSB7XG5cdFx0aWYgKHR5cGVvZiB0eXBlID09PSAnc3RyaW5nJyAmJiBsaXN0IGluc3RhbmNlb2YgQXJyYXkpIHtcblx0XHRcdGlmIChsaXN0LmluY2x1ZGVzKHR5cGUpKSB7XG5cdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3Qgd2lsZENhcmRHbG9iID0gJy8qJztcblx0XHRcdGNvbnN0IHdpbGRjYXJkcyA9IGxpc3QuZmlsdGVyKChpdGVtKSA9PiBpdGVtLmluZGV4T2Yod2lsZENhcmRHbG9iKSA+IDApO1xuXG5cdFx0XHRpZiAod2lsZGNhcmRzLmluY2x1ZGVzKHR5cGUucmVwbGFjZSgvKFxcLy4qKSQvLCB3aWxkQ2FyZEdsb2IpKSkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0LyoqXG5cdCAqIENoZWNrcyBpZiB0aGUgZmlsZSBtYXRjaGVzIGZpbHRlclxuXHQgKiBAcGFyYW0gZmlsZVxuXHQgKiBAcmV0dXJuIHtib29sZWFufVxuXHQgKi9cblx0aXNWYWxpZChmaWxlKSB7XG5cdFx0bGV0IHJlc3VsdCA9IHRydWU7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuY2hlY2soZmlsZSk7XG5cdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRyZXN1bHQgPSBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlc3VsdDtcblx0fVxuXG5cdC8qKlxuXHQgKiBFeGVjdXRlcyBjdXN0b20gY2hlY2tzXG5cdCAqIEBwYXJhbSBmaWxlXG5cdCAqIEByZXR1cm4ge2Jvb2xlYW59XG5cdCAqL1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcblx0b25DaGVjayhmaWxlKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG4vKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE3IEthcmwgU1RFSU5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqIFNPRlRXQVJFLlxuICpcbiAqL1xuXG5pbXBvcnQgeyBjaGVjayB9IGZyb20gJ21ldGVvci9jaGVjayc7XG5pbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcblxuaW1wb3J0IHsgVXBsb2FkRlMgfSBmcm9tICcuL3Vmcyc7XG5pbXBvcnQgeyBGaWx0ZXIgfSBmcm9tICcuL3Vmcy1maWx0ZXInO1xuaW1wb3J0IHsgVG9rZW5zIH0gZnJvbSAnLi91ZnMtdG9rZW5zJztcblxuY29uc3QgZnMgPSBOcG0ucmVxdWlyZSgnZnMnKTtcbmNvbnN0IGh0dHAgPSBOcG0ucmVxdWlyZSgnaHR0cCcpO1xuY29uc3QgaHR0cHMgPSBOcG0ucmVxdWlyZSgnaHR0cHMnKTtcbmNvbnN0IEZ1dHVyZSA9IE5wbS5yZXF1aXJlKCdmaWJlcnMvZnV0dXJlJyk7XG5cbmlmIChNZXRlb3IuaXNTZXJ2ZXIpIHtcblx0TWV0ZW9yLm1ldGhvZHMoe1xuXHRcdC8qKlxuXHRcdCAqIENvbXBsZXRlcyB0aGUgZmlsZSB0cmFuc2ZlclxuXHRcdCAqIEBwYXJhbSBmaWxlSWRcblx0XHQgKiBAcGFyYW0gc3RvcmVOYW1lXG5cdFx0ICogQHBhcmFtIHRva2VuXG5cdFx0ICovXG5cdFx0dWZzQ29tcGxldGUoZmlsZUlkLCBzdG9yZU5hbWUsIHRva2VuKSB7XG5cdFx0XHRjaGVjayhmaWxlSWQsIFN0cmluZyk7XG5cdFx0XHRjaGVjayhzdG9yZU5hbWUsIFN0cmluZyk7XG5cdFx0XHRjaGVjayh0b2tlbiwgU3RyaW5nKTtcblxuXHRcdFx0Ly8gR2V0IHN0b3JlXG5cdFx0XHRjb25zdCBzdG9yZSA9IFVwbG9hZEZTLmdldFN0b3JlKHN0b3JlTmFtZSk7XG5cdFx0XHRpZiAoIXN0b3JlKSB7XG5cdFx0XHRcdHRocm93IG5ldyBNZXRlb3IuRXJyb3IoJ2ludmFsaWQtc3RvcmUnLCAnU3RvcmUgbm90IGZvdW5kJyk7XG5cdFx0XHR9XG5cdFx0XHQvLyBDaGVjayB0b2tlblxuXHRcdFx0aWYgKCFzdG9yZS5jaGVja1Rva2VuKHRva2VuLCBmaWxlSWQpKSB7XG5cdFx0XHRcdHRocm93IG5ldyBNZXRlb3IuRXJyb3IoJ2ludmFsaWQtdG9rZW4nLCAnVG9rZW4gaXMgbm90IHZhbGlkJyk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGZ1dCA9IG5ldyBGdXR1cmUoKTtcblx0XHRcdGNvbnN0IHRtcEZpbGUgPSBVcGxvYWRGUy5nZXRUZW1wRmlsZVBhdGgoZmlsZUlkKTtcblxuXHRcdFx0Y29uc3QgcmVtb3ZlVGVtcEZpbGUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdGZzLnVubGluayh0bXBGaWxlLCBmdW5jdGlvbiAoZXJyKSB7XG5cdFx0XHRcdFx0ZXJyICYmIGNvbnNvbGUuZXJyb3IoYHVmczogY2Fubm90IGRlbGV0ZSB0ZW1wIGZpbGUgXCIke3RtcEZpbGV9XCIgKCR7ZXJyLm1lc3NhZ2V9KWApO1xuXHRcdFx0XHR9KTtcblx0XHRcdH07XG5cblx0XHRcdHRyeSB7XG5cdFx0XHRcdC8vIHRvZG8gY2hlY2sgaWYgdGVtcCBmaWxlIGV4aXN0c1xuXG5cdFx0XHRcdC8vIEdldCBmaWxlXG5cdFx0XHRcdGNvbnN0IGZpbGUgPSBzdG9yZS5nZXRDb2xsZWN0aW9uKCkuZmluZE9uZSh7IF9pZDogZmlsZUlkIH0pO1xuXG5cdFx0XHRcdC8vIFZhbGlkYXRlIGZpbGUgYmVmb3JlIG1vdmluZyB0byB0aGUgc3RvcmVcblx0XHRcdFx0c3RvcmUudmFsaWRhdGUoZmlsZSk7XG5cblx0XHRcdFx0Ly8gR2V0IHRoZSB0ZW1wIGZpbGVcblx0XHRcdFx0Y29uc3QgcnMgPSBmcy5jcmVhdGVSZWFkU3RyZWFtKHRtcEZpbGUsIHtcblx0XHRcdFx0XHRmbGFnczogJ3InLFxuXHRcdFx0XHRcdGVuY29kaW5nOiBudWxsLFxuXHRcdFx0XHRcdGF1dG9DbG9zZTogdHJ1ZSxcblx0XHRcdFx0fSk7XG5cblx0XHRcdFx0Ly8gQ2xlYW4gdXBsb2FkIGlmIGVycm9yIG9jY3Vyc1xuXHRcdFx0XHRycy5vbihcblx0XHRcdFx0XHQnZXJyb3InLFxuXHRcdFx0XHRcdE1ldGVvci5iaW5kRW52aXJvbm1lbnQoZnVuY3Rpb24gKGVycikge1xuXHRcdFx0XHRcdFx0Y29uc29sZS5lcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0c3RvcmUuZ2V0Q29sbGVjdGlvbigpLnJlbW92ZSh7IF9pZDogZmlsZUlkIH0pO1xuXHRcdFx0XHRcdFx0ZnV0LnRocm93KGVycik7XG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0Ly8gU2F2ZSBmaWxlIGluIHRoZSBzdG9yZVxuXHRcdFx0XHRzdG9yZS53cml0ZShcblx0XHRcdFx0XHRycyxcblx0XHRcdFx0XHRmaWxlSWQsXG5cdFx0XHRcdFx0TWV0ZW9yLmJpbmRFbnZpcm9ubWVudChmdW5jdGlvbiAoZXJyLCBmaWxlKSB7XG5cdFx0XHRcdFx0XHRyZW1vdmVUZW1wRmlsZSgpO1xuXG5cdFx0XHRcdFx0XHRpZiAoZXJyKSB7XG5cdFx0XHRcdFx0XHRcdGZ1dC50aHJvdyhlcnIpO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Ly8gRmlsZSBoYXMgYmVlbiBmdWxseSB1cGxvYWRlZFxuXHRcdFx0XHRcdFx0XHQvLyBzbyB3ZSBkb24ndCBuZWVkIHRvIGtlZXAgdGhlIHRva2VuIGFueW1vcmUuXG5cdFx0XHRcdFx0XHRcdC8vIEFsc28gdGhpcyBlbnN1cmUgdGhhdCB0aGUgZmlsZSBjYW5ub3QgYmUgbW9kaWZpZWQgd2l0aCBleHRyYSBjaHVua3MgbGF0ZXIuXG5cdFx0XHRcdFx0XHRcdFRva2Vucy5yZW1vdmUoeyBmaWxlSWQgfSk7XG5cdFx0XHRcdFx0XHRcdGZ1dC5yZXR1cm4oZmlsZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdCk7XG5cblx0XHRcdFx0Ly8gY2F0Y2ggd2lsbCBub3Qgd29yayBpZiBmdXQud2FpdCgpIGlzIG91dHNpZGUgdHJ5L2NhdGNoXG5cdFx0XHRcdHJldHVybiBmdXQud2FpdCgpO1xuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdC8vIElmIHdyaXRlIGZhaWxlZCwgcmVtb3ZlIHRoZSBmaWxlXG5cdFx0XHRcdHN0b3JlLmdldENvbGxlY3Rpb24oKS5yZW1vdmUoeyBfaWQ6IGZpbGVJZCB9KTtcblx0XHRcdFx0Ly8gcmVtb3ZlVGVtcEZpbGUoKTsgLy8gdG9kbyByZW1vdmUgdGVtcCBmaWxlIG9uIGVycm9yIG9yIHRyeSBhZ2FpbiA/XG5cdFx0XHRcdHRocm93IG5ldyBNZXRlb3IuRXJyb3IoJ3VmczogY2Fubm90IHVwbG9hZCBmaWxlJywgZXJyKTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogQ3JlYXRlcyB0aGUgZmlsZSBhbmQgcmV0dXJucyB0aGUgZmlsZSB1cGxvYWQgdG9rZW5cblx0XHQgKiBAcGFyYW0gZmlsZVxuXHRcdCAqIEByZXR1cm4ge3tmaWxlSWQ6IHN0cmluZywgdG9rZW46ICosIHVybDogKn19XG5cdFx0ICovXG5cdFx0dWZzQ3JlYXRlKGZpbGUpIHtcblx0XHRcdGNoZWNrKGZpbGUsIE9iamVjdCk7XG5cblx0XHRcdGlmICh0eXBlb2YgZmlsZS5uYW1lICE9PSAnc3RyaW5nJyB8fCAhZmlsZS5uYW1lLmxlbmd0aCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKCdpbnZhbGlkLWZpbGUtbmFtZScsICdmaWxlIG5hbWUgaXMgbm90IHZhbGlkJyk7XG5cdFx0XHR9XG5cdFx0XHRpZiAodHlwZW9mIGZpbGUuc3RvcmUgIT09ICdzdHJpbmcnIHx8ICFmaWxlLnN0b3JlLmxlbmd0aCkge1xuXHRcdFx0XHR0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKCdpbnZhbGlkLXN0b3JlJywgJ3N0b3JlIGlzIG5vdCB2YWxpZCcpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gR2V0IHN0b3JlXG5cdFx0XHRjb25zdCBzdG9yZSA9IFVwbG9hZEZTLmdldFN0b3JlKGZpbGUuc3RvcmUpO1xuXHRcdFx0aWYgKCFzdG9yZSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKCdpbnZhbGlkLXN0b3JlJywgJ1N0b3JlIG5vdCBmb3VuZCcpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTZXQgZGVmYXVsdCBpbmZvXG5cdFx0XHRmaWxlLmNvbXBsZXRlID0gZmFsc2U7XG5cdFx0XHRmaWxlLnVwbG9hZGluZyA9IGZhbHNlO1xuXHRcdFx0ZmlsZS5leHRlbnNpb24gPSBmaWxlLm5hbWUgJiYgZmlsZS5uYW1lLnN1YnN0cigofi1maWxlLm5hbWUubGFzdEluZGV4T2YoJy4nKSA+Pj4gMCkgKyAyKS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0Ly8gQXNzaWduIGZpbGUgTUlNRSB0eXBlIGJhc2VkIG9uIHRoZSBleHRlbnNpb25cblx0XHRcdGlmIChmaWxlLmV4dGVuc2lvbiAmJiAhZmlsZS50eXBlKSB7XG5cdFx0XHRcdGZpbGUudHlwZSA9IFVwbG9hZEZTLmdldE1pbWVUeXBlKGZpbGUuZXh0ZW5zaW9uKSB8fCAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJztcblx0XHRcdH1cblx0XHRcdGZpbGUucHJvZ3Jlc3MgPSAwO1xuXHRcdFx0ZmlsZS5zaXplID0gcGFyc2VJbnQoZmlsZS5zaXplKSB8fCAwO1xuXHRcdFx0ZmlsZS51c2VySWQgPSBmaWxlLnVzZXJJZCB8fCB0aGlzLnVzZXJJZDtcblxuXHRcdFx0Ly8gQ2hlY2sgaWYgdGhlIGZpbGUgbWF0Y2hlcyBzdG9yZSBmaWx0ZXJcblx0XHRcdGNvbnN0IGZpbHRlciA9IHN0b3JlLmdldEZpbHRlcigpO1xuXHRcdFx0aWYgKGZpbHRlciBpbnN0YW5jZW9mIEZpbHRlcikge1xuXHRcdFx0XHRmaWx0ZXIuY2hlY2soZmlsZSk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIENyZWF0ZSB0aGUgZmlsZVxuXHRcdFx0Y29uc3QgZmlsZUlkID0gc3RvcmUuY3JlYXRlKGZpbGUpO1xuXHRcdFx0Y29uc3QgdG9rZW4gPSBzdG9yZS5jcmVhdGVUb2tlbihmaWxlSWQpO1xuXHRcdFx0Y29uc3QgdXBsb2FkVXJsID0gc3RvcmUuZ2V0VVJMKGAke2ZpbGVJZH0/dG9rZW49JHt0b2tlbn1gKTtcblxuXHRcdFx0cmV0dXJuIHtcblx0XHRcdFx0ZmlsZUlkLFxuXHRcdFx0XHR0b2tlbixcblx0XHRcdFx0dXJsOiB1cGxvYWRVcmwsXG5cdFx0XHR9O1xuXHRcdH0sXG5cblx0XHQvKipcblx0XHQgKiBEZWxldGVzIGEgZmlsZVxuXHRcdCAqIEBwYXJhbSBmaWxlSWRcblx0XHQgKiBAcGFyYW0gc3RvcmVOYW1lXG5cdFx0ICogQHBhcmFtIHRva2VuXG5cdFx0ICogQHJldHVybnMgeyp9XG5cdFx0ICovXG5cdFx0dWZzRGVsZXRlKGZpbGVJZCwgc3RvcmVOYW1lLCB0b2tlbikge1xuXHRcdFx0Y2hlY2soZmlsZUlkLCBTdHJpbmcpO1xuXHRcdFx0Y2hlY2soc3RvcmVOYW1lLCBTdHJpbmcpO1xuXHRcdFx0Y2hlY2sodG9rZW4sIFN0cmluZyk7XG5cblx0XHRcdC8vIENoZWNrIHN0b3JlXG5cdFx0XHRjb25zdCBzdG9yZSA9IFVwbG9hZEZTLmdldFN0b3JlKHN0b3JlTmFtZSk7XG5cdFx0XHRpZiAoIXN0b3JlKSB7XG5cdFx0XHRcdHRocm93IG5ldyBNZXRlb3IuRXJyb3IoJ2ludmFsaWQtc3RvcmUnLCAnU3RvcmUgbm90IGZvdW5kJyk7XG5cdFx0XHR9XG5cdFx0XHQvLyBJZ25vcmUgZmlsZXMgdGhhdCBkb2VzIG5vdCBleGlzdFxuXHRcdFx0aWYgKHN0b3JlLmdldENvbGxlY3Rpb24oKS5maW5kKHsgX2lkOiBmaWxlSWQgfSkuY291bnQoKSA9PT0gMCkge1xuXHRcdFx0XHRyZXR1cm4gMTtcblx0XHRcdH1cblx0XHRcdC8vIENoZWNrIHRva2VuXG5cdFx0XHRpZiAoIXN0b3JlLmNoZWNrVG9rZW4odG9rZW4sIGZpbGVJZCkpIHtcblx0XHRcdFx0dGhyb3cgbmV3IE1ldGVvci5FcnJvcignaW52YWxpZC10b2tlbicsICdUb2tlbiBpcyBub3QgdmFsaWQnKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBzdG9yZS5nZXRDb2xsZWN0aW9uKCkucmVtb3ZlKHsgX2lkOiBmaWxlSWQgfSk7XG5cdFx0fSxcblxuXHRcdC8qKlxuXHRcdCAqIEltcG9ydHMgYSBmaWxlIGZyb20gdGhlIFVSTFxuXHRcdCAqIEBwYXJhbSB1cmxcblx0XHQgKiBAcGFyYW0gZmlsZVxuXHRcdCAqIEBwYXJhbSBzdG9yZU5hbWVcblx0XHQgKiBAcmV0dXJuIHsqfVxuXHRcdCAqL1xuXHRcdHVmc0ltcG9ydFVSTCh1cmwsIGZpbGUsIHN0b3JlTmFtZSkge1xuXHRcdFx0Y2hlY2sodXJsLCBTdHJpbmcpO1xuXHRcdFx0Y2hlY2soZmlsZSwgT2JqZWN0KTtcblx0XHRcdGNoZWNrKHN0b3JlTmFtZSwgU3RyaW5nKTtcblxuXHRcdFx0Ly8gQ2hlY2sgVVJMXG5cdFx0XHRpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycgfHwgdXJsLmxlbmd0aCA8PSAwKSB7XG5cdFx0XHRcdHRocm93IG5ldyBNZXRlb3IuRXJyb3IoJ2ludmFsaWQtdXJsJywgJ1RoZSB1cmwgaXMgbm90IHZhbGlkJyk7XG5cdFx0XHR9XG5cdFx0XHQvLyBDaGVjayBmaWxlXG5cdFx0XHRpZiAodHlwZW9mIGZpbGUgIT09ICdvYmplY3QnIHx8IGZpbGUgPT09IG51bGwpIHtcblx0XHRcdFx0dGhyb3cgbmV3IE1ldGVvci5FcnJvcignaW52YWxpZC1maWxlJywgJ1RoZSBmaWxlIGlzIG5vdCB2YWxpZCcpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gQ2hlY2sgc3RvcmVcblx0XHRcdGNvbnN0IHN0b3JlID0gVXBsb2FkRlMuZ2V0U3RvcmUoc3RvcmVOYW1lKTtcblx0XHRcdGlmICghc3RvcmUpIHtcblx0XHRcdFx0dGhyb3cgbmV3IE1ldGVvci5FcnJvcignaW52YWxpZC1zdG9yZScsICdUaGUgc3RvcmUgZG9lcyBub3QgZXhpc3QnKTtcblx0XHRcdH1cblxuXHRcdFx0bGV0IHBhcnNlZFVybDtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHBhcnNlZFVybCA9IG5ldyBVUkwodXJsKTtcblx0XHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdFx0dGhyb3cgbmV3IE1ldGVvci5FcnJvcignaW52YWxpZC11cmwnLCAnVGhlIHVybCBpcyBub3QgdmFsaWQnKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKFsnbG9jYWxob3N0JywgJzEyNy4wLjAuMScsICcwLjAuMC4wJ10uaW5jbHVkZXMocGFyc2VkVXJsLmhvc3RuYW1lKSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKCdpbnZhbGlkLXVybCcsICdVUkwgY2Fubm90IHJlZmVyZW5jZSBsb2NhbGhvc3QnKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gRXh0cmFjdCBmaWxlIGluZm9cblx0XHRcdGlmICghZmlsZS5uYW1lKSB7XG5cdFx0XHRcdGZpbGUubmFtZSA9IHVybC5yZXBsYWNlKC9cXD8uKiQvLCAnJykuc3BsaXQoJy8nKS5wb3AoKTtcblx0XHRcdH1cblx0XHRcdGlmIChmaWxlLm5hbWUgJiYgIWZpbGUuZXh0ZW5zaW9uKSB7XG5cdFx0XHRcdGZpbGUuZXh0ZW5zaW9uID0gZmlsZS5uYW1lICYmIGZpbGUubmFtZS5zdWJzdHIoKH4tZmlsZS5uYW1lLmxhc3RJbmRleE9mKCcuJykgPj4+IDApICsgMikudG9Mb3dlckNhc2UoKTtcblx0XHRcdH1cblx0XHRcdGlmIChmaWxlLmV4dGVuc2lvbiAmJiAhZmlsZS50eXBlKSB7XG5cdFx0XHRcdC8vIEFzc2lnbiBmaWxlIE1JTUUgdHlwZSBiYXNlZCBvbiB0aGUgZXh0ZW5zaW9uXG5cdFx0XHRcdGZpbGUudHlwZSA9IFVwbG9hZEZTLmdldE1pbWVUeXBlKGZpbGUuZXh0ZW5zaW9uKSB8fCAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJztcblx0XHRcdH1cblx0XHRcdC8vIENoZWNrIGlmIGZpbGUgaXMgdmFsaWRcblx0XHRcdGlmIChzdG9yZS5nZXRGaWx0ZXIoKSBpbnN0YW5jZW9mIEZpbHRlcikge1xuXHRcdFx0XHRzdG9yZS5nZXRGaWx0ZXIoKS5jaGVjayhmaWxlKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKGZpbGUub3JpZ2luYWxVcmwpIHtcblx0XHRcdFx0Y29uc29sZS53YXJuKCd1ZnM6IFRoZSBcIm9yaWdpbmFsVXJsXCIgYXR0cmlidXRlIGlzIGF1dG9tYXRpY2FsbHkgc2V0IHdoZW4gaW1wb3J0aW5nIGEgZmlsZSBmcm9tIGEgVVJMJyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFkZCBvcmlnaW5hbCBVUkxcblx0XHRcdGZpbGUub3JpZ2luYWxVcmwgPSB1cmw7XG5cblx0XHRcdC8vIENyZWF0ZSB0aGUgZmlsZVxuXHRcdFx0ZmlsZS5jb21wbGV0ZSA9IGZhbHNlO1xuXHRcdFx0ZmlsZS51cGxvYWRpbmcgPSB0cnVlO1xuXHRcdFx0ZmlsZS5wcm9ncmVzcyA9IDA7XG5cdFx0XHRmaWxlLl9pZCA9IHN0b3JlLmNyZWF0ZShmaWxlKTtcblxuXHRcdFx0Y29uc3QgZnV0ID0gbmV3IEZ1dHVyZSgpO1xuXHRcdFx0bGV0IHByb3RvO1xuXG5cdFx0XHQvLyBEZXRlY3QgcHJvdG9jb2wgdG8gdXNlXG5cdFx0XHRpZiAoL2h0dHA6XFwvXFwvL2kudGVzdCh1cmwpKSB7XG5cdFx0XHRcdHByb3RvID0gaHR0cDtcblx0XHRcdH0gZWxzZSBpZiAoL2h0dHBzOlxcL1xcLy9pLnRlc3QodXJsKSkge1xuXHRcdFx0XHRwcm90byA9IGh0dHBzO1xuXHRcdFx0fVxuXG5cdFx0XHR0aGlzLnVuYmxvY2soKTtcblxuXHRcdFx0Ly8gRG93bmxvYWQgZmlsZVxuXHRcdFx0cHJvdG9cblx0XHRcdFx0LmdldChcblx0XHRcdFx0XHR1cmwsXG5cdFx0XHRcdFx0TWV0ZW9yLmJpbmRFbnZpcm9ubWVudChmdW5jdGlvbiAocmVzKSB7XG5cdFx0XHRcdFx0XHQvLyBTYXZlIHRoZSBmaWxlIGluIHRoZSBzdG9yZVxuXHRcdFx0XHRcdFx0c3RvcmUud3JpdGUocmVzLCBmaWxlLl9pZCwgZnVuY3Rpb24gKGVyciwgZmlsZSkge1xuXHRcdFx0XHRcdFx0XHRpZiAoZXJyKSB7XG5cdFx0XHRcdFx0XHRcdFx0ZnV0LnRocm93KGVycik7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0ZnV0LnJldHVybihmaWxlKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdClcblx0XHRcdFx0Lm9uKCdlcnJvcicsIGZ1bmN0aW9uIChlcnIpIHtcblx0XHRcdFx0XHRmdXQudGhyb3coZXJyKTtcblx0XHRcdFx0fSk7XG5cdFx0XHRyZXR1cm4gZnV0LndhaXQoKTtcblx0XHR9LFxuXG5cdFx0LyoqXG5cdFx0ICogTWFya3MgdGhlIGZpbGUgdXBsb2FkaW5nIGFzIHN0b3BwZWRcblx0XHQgKiBAcGFyYW0gZmlsZUlkXG5cdFx0ICogQHBhcmFtIHN0b3JlTmFtZVxuXHRcdCAqIEBwYXJhbSB0b2tlblxuXHRcdCAqIEByZXR1cm5zIHsqfVxuXHRcdCAqL1xuXHRcdHVmc1N0b3AoZmlsZUlkLCBzdG9yZU5hbWUsIHRva2VuKSB7XG5cdFx0XHRjaGVjayhmaWxlSWQsIFN0cmluZyk7XG5cdFx0XHRjaGVjayhzdG9yZU5hbWUsIFN0cmluZyk7XG5cdFx0XHRjaGVjayh0b2tlbiwgU3RyaW5nKTtcblxuXHRcdFx0Ly8gQ2hlY2sgc3RvcmVcblx0XHRcdGNvbnN0IHN0b3JlID0gVXBsb2FkRlMuZ2V0U3RvcmUoc3RvcmVOYW1lKTtcblx0XHRcdGlmICghc3RvcmUpIHtcblx0XHRcdFx0dGhyb3cgbmV3IE1ldGVvci5FcnJvcignaW52YWxpZC1zdG9yZScsICdTdG9yZSBub3QgZm91bmQnKTtcblx0XHRcdH1cblx0XHRcdC8vIENoZWNrIGZpbGVcblx0XHRcdGNvbnN0IGZpbGUgPSBzdG9yZS5nZXRDb2xsZWN0aW9uKCkuZmluZCh7IF9pZDogZmlsZUlkIH0sIHsgZmllbGRzOiB7IHVzZXJJZDogMSB9IH0pO1xuXHRcdFx0aWYgKCFmaWxlKSB7XG5cdFx0XHRcdHRocm93IG5ldyBNZXRlb3IuRXJyb3IoJ2ludmFsaWQtZmlsZScsICdGaWxlIG5vdCBmb3VuZCcpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gQ2hlY2sgdG9rZW5cblx0XHRcdGlmICghc3RvcmUuY2hlY2tUb2tlbih0b2tlbiwgZmlsZUlkKSkge1xuXHRcdFx0XHR0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKCdpbnZhbGlkLXRva2VuJywgJ1Rva2VuIGlzIG5vdCB2YWxpZCcpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gc3RvcmUuZ2V0Q29sbGVjdGlvbigpLnVwZGF0ZShcblx0XHRcdFx0eyBfaWQ6IGZpbGVJZCB9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0JHNldDogeyB1cGxvYWRpbmc6IGZhbHNlIH0sXG5cdFx0XHRcdH0sXG5cdFx0XHQpO1xuXHRcdH0sXG5cdH0pO1xufVxuIiwiLypcbiAqIFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuICpcbiAqIENvcHlyaWdodCAoYykgMjAxNyBLYXJsIFNURUlOXG4gKlxuICogUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuICogb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuICogaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xuICogdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuICogY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG4gKiBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxuICpcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuICogY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqXG4gKiBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG4gKiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcbiAqIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuICogQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuICogTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcbiAqIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG4gKiBTT0ZUV0FSRS5cbiAqXG4gKi9cblxuLyoqXG4gKiBNSU1FIHR5cGVzIGFuZCBleHRlbnNpb25zXG4gKi9cbmV4cG9ydCBjb25zdCBNSU1FID0ge1xuXHQvLyBhcHBsaWNhdGlvblxuXHQnN3onOiAnYXBwbGljYXRpb24veC03ei1jb21wcmVzc2VkJyxcblx0J2FyYyc6ICdhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW0nLFxuXHQnYWknOiAnYXBwbGljYXRpb24vcG9zdHNjcmlwdCcsXG5cdCdiaW4nOiAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJyxcblx0J2J6JzogJ2FwcGxpY2F0aW9uL3gtYnppcCcsXG5cdCdiejInOiAnYXBwbGljYXRpb24veC1iemlwMicsXG5cdCdlcHMnOiAnYXBwbGljYXRpb24vcG9zdHNjcmlwdCcsXG5cdCdleGUnOiAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJyxcblx0J2d6JzogJ2FwcGxpY2F0aW9uL3gtZ3ppcCcsXG5cdCdnemlwJzogJ2FwcGxpY2F0aW9uL3gtZ3ppcCcsXG5cdCdqcyc6ICdhcHBsaWNhdGlvbi9qYXZhc2NyaXB0Jyxcblx0J2pzb24nOiAnYXBwbGljYXRpb24vanNvbicsXG5cdCdvZ3gnOiAnYXBwbGljYXRpb24vb2dnJyxcblx0J3BkZic6ICdhcHBsaWNhdGlvbi9wZGYnLFxuXHQncHMnOiAnYXBwbGljYXRpb24vcG9zdHNjcmlwdCcsXG5cdCdwc2QnOiAnYXBwbGljYXRpb24vb2N0ZXQtc3RyZWFtJyxcblx0J3Jhcic6ICdhcHBsaWNhdGlvbi94LXJhci1jb21wcmVzc2VkJyxcblx0J3Jldic6ICdhcHBsaWNhdGlvbi94LXJhci1jb21wcmVzc2VkJyxcblx0J3N3Zic6ICdhcHBsaWNhdGlvbi94LXNob2Nrd2F2ZS1mbGFzaCcsXG5cdCd0YXInOiAnYXBwbGljYXRpb24veC10YXInLFxuXHQneGh0bWwnOiAnYXBwbGljYXRpb24veGh0bWwreG1sJyxcblx0J3htbCc6ICdhcHBsaWNhdGlvbi94bWwnLFxuXHQnemlwJzogJ2FwcGxpY2F0aW9uL3ppcCcsXG5cblx0Ly8gYXVkaW9cblx0J2FpZic6ICdhdWRpby9haWZmJyxcblx0J2FpZmMnOiAnYXVkaW8vYWlmZicsXG5cdCdhaWZmJzogJ2F1ZGlvL2FpZmYnLFxuXHQnYXUnOiAnYXVkaW8vYmFzaWMnLFxuXHQnZmxhYyc6ICdhdWRpby9mbGFjJyxcblx0J21pZGknOiAnYXVkaW8vbWlkaScsXG5cdCdtcDInOiAnYXVkaW8vbXBlZycsXG5cdCdtcDMnOiAnYXVkaW8vbXBlZycsXG5cdCdtcGEnOiAnYXVkaW8vbXBlZycsXG5cdCdvZ2EnOiAnYXVkaW8vb2dnJyxcblx0J29nZyc6ICdhdWRpby9vZ2cnLFxuXHQnb3B1cyc6ICdhdWRpby9vZ2cnLFxuXHQncmEnOiAnYXVkaW8vdm5kLnJuLXJlYWxhdWRpbycsXG5cdCdzcHgnOiAnYXVkaW8vb2dnJyxcblx0J3dhdic6ICdhdWRpby94LXdhdicsXG5cdCd3ZWJhJzogJ2F1ZGlvL3dlYm0nLFxuXHQnd21hJzogJ2F1ZGlvL3gtbXMtd21hJyxcblxuXHQvLyBpbWFnZVxuXHQnYXZzJzogJ2ltYWdlL2F2cy12aWRlbycsXG5cdCdibXAnOiAnaW1hZ2UveC13aW5kb3dzLWJtcCcsXG5cdCdnaWYnOiAnaW1hZ2UvZ2lmJyxcblx0J2ljbyc6ICdpbWFnZS92bmQubWljcm9zb2Z0Lmljb24nLFxuXHQnanBlZyc6ICdpbWFnZS9qcGVnJyxcblx0J2pwZyc6ICdpbWFnZS9qcGcnLFxuXHQnbWpwZyc6ICdpbWFnZS94LW1vdGlvbi1qcGVnJyxcblx0J3BpYyc6ICdpbWFnZS9waWMnLFxuXHQncG5nJzogJ2ltYWdlL3BuZycsXG5cdCdzdmcnOiAnaW1hZ2Uvc3ZnK3htbCcsXG5cdCd0aWYnOiAnaW1hZ2UvdGlmZicsXG5cdCd0aWZmJzogJ2ltYWdlL3RpZmYnLFxuXG5cdC8vIHRleHRcblx0J2Nzcyc6ICd0ZXh0L2NzcycsXG5cdCdjc3YnOiAndGV4dC9jc3YnLFxuXHQnaHRtbCc6ICd0ZXh0L2h0bWwnLFxuXHQndHh0JzogJ3RleHQvcGxhaW4nLFxuXG5cdC8vIHZpZGVvXG5cdCdhdmknOiAndmlkZW8vYXZpJyxcblx0J2R2JzogJ3ZpZGVvL3gtZHYnLFxuXHQnZmx2JzogJ3ZpZGVvL3gtZmx2Jyxcblx0J21vdic6ICd2aWRlby9xdWlja3RpbWUnLFxuXHQnbXA0JzogJ3ZpZGVvL21wNCcsXG5cdCdtcGVnJzogJ3ZpZGVvL21wZWcnLFxuXHQnbXBnJzogJ3ZpZGVvL21wZycsXG5cdCdvZ3YnOiAndmlkZW8vb2dnJyxcblx0J3Zkbyc6ICd2aWRlby92ZG8nLFxuXHQnd2VibSc6ICd2aWRlby93ZWJtJyxcblx0J3dtdic6ICd2aWRlby94LW1zLXdtdicsXG5cblx0Ly8gc3BlY2lmaWMgdG8gdmVuZG9yc1xuXHQnZG9jJzogJ2FwcGxpY2F0aW9uL21zd29yZCcsXG5cdCdkb2N4JzogJ2FwcGxpY2F0aW9uL3ZuZC5vcGVueG1sZm9ybWF0cy1vZmZpY2Vkb2N1bWVudC53b3JkcHJvY2Vzc2luZ21sLmRvY3VtZW50Jyxcblx0J29kYic6ICdhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LmRhdGFiYXNlJyxcblx0J29kYyc6ICdhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LmNoYXJ0Jyxcblx0J29kZic6ICdhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LmZvcm11bGEnLFxuXHQnb2RnJzogJ2FwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQuZ3JhcGhpY3MnLFxuXHQnb2RpJzogJ2FwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQuaW1hZ2UnLFxuXHQnb2RtJzogJ2FwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQudGV4dC1tYXN0ZXInLFxuXHQnb2RwJzogJ2FwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQucHJlc2VudGF0aW9uJyxcblx0J29kcyc6ICdhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LnNwcmVhZHNoZWV0Jyxcblx0J29kdCc6ICdhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LnRleHQnLFxuXHQnb3RnJzogJ2FwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQuZ3JhcGhpY3MtdGVtcGxhdGUnLFxuXHQnb3RwJzogJ2FwcGxpY2F0aW9uL3ZuZC5vYXNpcy5vcGVuZG9jdW1lbnQucHJlc2VudGF0aW9uLXRlbXBsYXRlJyxcblx0J290cyc6ICdhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LnNwcmVhZHNoZWV0LXRlbXBsYXRlJyxcblx0J290dCc6ICdhcHBsaWNhdGlvbi92bmQub2FzaXMub3BlbmRvY3VtZW50LnRleHQtdGVtcGxhdGUnLFxuXHQncHB0JzogJ2FwcGxpY2F0aW9uL3ZuZC5tcy1wb3dlcnBvaW50Jyxcblx0J3BwdHgnOiAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnByZXNlbnRhdGlvbm1sLnByZXNlbnRhdGlvbicsXG5cdCd4bHMnOiAnYXBwbGljYXRpb24vdm5kLm1zLWV4Y2VsJyxcblx0J3hsc3gnOiAnYXBwbGljYXRpb24vdm5kLm9wZW54bWxmb3JtYXRzLW9mZmljZWRvY3VtZW50LnNwcmVhZHNoZWV0bWwuc2hlZXQnLFxufTtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG4vKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE3IEthcmwgU1RFSU5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqIFNPRlRXQVJFLlxuICpcbiAqL1xuaW1wb3J0IHsgTWV0ZW9yIH0gZnJvbSAnbWV0ZW9yL21ldGVvcic7XG5pbXBvcnQgeyBXZWJBcHAgfSBmcm9tICdtZXRlb3Ivd2ViYXBwJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tdW5yZXNvbHZlZFxuaW1wb3J0IFNwYXJrTUQ1IGZyb20gJ3NwYXJrLW1kNSc7XG5cbmltcG9ydCB7IFVwbG9hZEZTIH0gZnJvbSAnLi91ZnMnO1xuXG5pZiAoTWV0ZW9yLmlzU2VydmVyKSB7XG5cdGNvbnN0IGRvbWFpbiA9IE5wbS5yZXF1aXJlKCdkb21haW4nKTtcblx0Y29uc3QgZnMgPSBOcG0ucmVxdWlyZSgnZnMnKTtcblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5cdGNvbnN0IGh0dHAgPSBOcG0ucmVxdWlyZSgnaHR0cCcpO1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcblx0Y29uc3QgaHR0cHMgPSBOcG0ucmVxdWlyZSgnaHR0cHMnKTtcblx0Y29uc3QgbWtkaXJwID0gTnBtLnJlcXVpcmUoJ21rZGlycCcpO1xuXHRjb25zdCBzdHJlYW0gPSBOcG0ucmVxdWlyZSgnc3RyZWFtJyk7XG5cdGNvbnN0IFVSTCA9IE5wbS5yZXF1aXJlKCd1cmwnKTtcblx0Y29uc3QgemxpYiA9IE5wbS5yZXF1aXJlKCd6bGliJyk7XG5cblx0TWV0ZW9yLnN0YXJ0dXAoKCkgPT4ge1xuXHRcdGNvbnN0IHBhdGggPSBVcGxvYWRGUy5jb25maWcudG1wRGlyO1xuXHRcdGNvbnN0IG1vZGUgPSBVcGxvYWRGUy5jb25maWcudG1wRGlyUGVybWlzc2lvbnM7XG5cblx0XHRmcy5zdGF0KHBhdGgsIChlcnIpID0+IHtcblx0XHRcdGlmIChlcnIpIHtcblx0XHRcdFx0Ly8gQ3JlYXRlIHRoZSB0ZW1wIGRpcmVjdG9yeVxuXHRcdFx0XHRta2RpcnAocGF0aCwgeyBtb2RlIH0sIChlcnIpID0+IHtcblx0XHRcdFx0XHRpZiAoZXJyKSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmVycm9yKGB1ZnM6IGNhbm5vdCBjcmVhdGUgdGVtcCBkaXJlY3RvcnkgYXQgXCIke3BhdGh9XCIgKCR7ZXJyLm1lc3NhZ2V9KWApO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhgdWZzOiB0ZW1wIGRpcmVjdG9yeSBjcmVhdGVkIGF0IFwiJHtwYXRofVwiYCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIFNldCBkaXJlY3RvcnkgcGVybWlzc2lvbnNcblx0XHRcdFx0ZnMuY2htb2QocGF0aCwgbW9kZSwgKGVycikgPT4ge1xuXHRcdFx0XHRcdGVyciAmJiBjb25zb2xlLmVycm9yKGB1ZnM6IGNhbm5vdCBzZXQgdGVtcCBkaXJlY3RvcnkgcGVybWlzc2lvbnMgJHttb2RlfSAoJHtlcnIubWVzc2FnZX0pYCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcblxuXHQvLyBDcmVhdGUgZG9tYWluIHRvIGhhbmRsZSBlcnJvcnNcblx0Ly8gYW5kIHBvc3NpYmx5IGF2b2lkIHNlcnZlciBjcmFzaGVzLlxuXHRjb25zdCBkID0gZG9tYWluLmNyZWF0ZSgpO1xuXG5cdGQub24oJ2Vycm9yJywgKGVycikgPT4ge1xuXHRcdGNvbnNvbGUuZXJyb3IoYHVmczogJHtlcnIubWVzc2FnZX1gKTtcblx0fSk7XG5cblx0Ly8gTGlzdGVuIEhUVFAgcmVxdWVzdHMgdG8gc2VydmUgZmlsZXNcblx0V2ViQXBwLmNvbm5lY3RIYW5kbGVycy51c2UoKHJlcSwgcmVzLCBuZXh0KSA9PiB7XG5cdFx0Ly8gUXVpY2sgY2hlY2sgdG8gc2VlIGlmIHJlcXVlc3Qgc2hvdWxkIGJlIGNhdWdodFxuXHRcdGlmICghcmVxLnVybC5pbmNsdWRlcyhgLyR7VXBsb2FkRlMuY29uZmlnLnN0b3Jlc1BhdGh9L2ApKSB7XG5cdFx0XHRuZXh0KCk7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gUmVtb3ZlIHN0b3JlIHBhdGhcblx0XHRjb25zdCBwYXJzZWRVcmwgPSBVUkwucGFyc2UocmVxLnVybCk7XG5cdFx0Y29uc3QgcGF0aCA9IHBhcnNlZFVybC5wYXRobmFtZS5zdWJzdHIoVXBsb2FkRlMuY29uZmlnLnN0b3Jlc1BhdGgubGVuZ3RoICsgMSk7XG5cblx0XHRjb25zdCBhbGxvd0NPUlMgPSAoKSA9PiB7XG5cdFx0XHQvLyByZXMuc2V0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCByZXEuaGVhZGVycy5vcmlnaW4pO1xuXHRcdFx0cmVzLnNldEhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctTWV0aG9kcycsICdQT1NUJyk7XG5cdFx0XHRyZXMuc2V0SGVhZGVyKCdBY2Nlc3MtQ29udHJvbC1BbGxvdy1PcmlnaW4nLCAnKicpO1xuXHRcdFx0cmVzLnNldEhlYWRlcignQWNjZXNzLUNvbnRyb2wtQWxsb3ctSGVhZGVycycsICdDb250ZW50LVR5cGUnKTtcblx0XHR9O1xuXG5cdFx0aWYgKHJlcS5tZXRob2QgPT09ICdPUFRJT05TJykge1xuXHRcdFx0Y29uc3QgcmVnRXhwID0gbmV3IFJlZ0V4cCgnXi8oW14vP10rKS8oW14vP10rKSQnKTtcblx0XHRcdGNvbnN0IG1hdGNoID0gcmVnRXhwLmV4ZWMocGF0aCk7XG5cblx0XHRcdC8vIFJlcXVlc3QgaXMgbm90IHZhbGlkXG5cdFx0XHRpZiAobWF0Y2ggPT09IG51bGwpIHtcblx0XHRcdFx0cmVzLndyaXRlSGVhZCg0MDApO1xuXHRcdFx0XHRyZXMuZW5kKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gR2V0IHN0b3JlXG5cdFx0XHRjb25zdCBzdG9yZSA9IFVwbG9hZEZTLmdldFN0b3JlKG1hdGNoWzFdKTtcblx0XHRcdGlmICghc3RvcmUpIHtcblx0XHRcdFx0cmVzLndyaXRlSGVhZCg0MDQpO1xuXHRcdFx0XHRyZXMuZW5kKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgYSBzdG9yZSBpcyBmb3VuZCwgZ28gYWhlYWQgYW5kIGFsbG93IHRoZSBvcmlnaW5cblx0XHRcdGFsbG93Q09SUygpO1xuXG5cdFx0XHRuZXh0KCk7XG5cdFx0fSBlbHNlIGlmIChyZXEubWV0aG9kID09PSAnUE9TVCcpIHtcblx0XHRcdC8vIEdldCBzdG9yZVxuXHRcdFx0Y29uc3QgcmVnRXhwID0gbmV3IFJlZ0V4cCgnXi8oW14vP10rKS8oW14vP10rKSQnKTtcblx0XHRcdGNvbnN0IG1hdGNoID0gcmVnRXhwLmV4ZWMocGF0aCk7XG5cblx0XHRcdC8vIFJlcXVlc3QgaXMgbm90IHZhbGlkXG5cdFx0XHRpZiAobWF0Y2ggPT09IG51bGwpIHtcblx0XHRcdFx0cmVzLndyaXRlSGVhZCg0MDApO1xuXHRcdFx0XHRyZXMuZW5kKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gR2V0IHN0b3JlXG5cdFx0XHRjb25zdCBzdG9yZSA9IFVwbG9hZEZTLmdldFN0b3JlKG1hdGNoWzFdKTtcblx0XHRcdGlmICghc3RvcmUpIHtcblx0XHRcdFx0cmVzLndyaXRlSGVhZCg0MDQpO1xuXHRcdFx0XHRyZXMuZW5kKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgYSBzdG9yZSBpcyBmb3VuZCwgZ28gYWhlYWQgYW5kIGFsbG93IHRoZSBvcmlnaW5cblx0XHRcdGFsbG93Q09SUygpO1xuXG5cdFx0XHQvLyBHZXQgZmlsZVxuXHRcdFx0Y29uc3QgZmlsZUlkID0gbWF0Y2hbMl07XG5cdFx0XHRpZiAoc3RvcmUuZ2V0Q29sbGVjdGlvbigpLmZpbmQoeyBfaWQ6IGZpbGVJZCB9KS5jb3VudCgpID09PSAwKSB7XG5cdFx0XHRcdHJlcy53cml0ZUhlYWQoNDA0KTtcblx0XHRcdFx0cmVzLmVuZCgpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIENoZWNrIHVwbG9hZCB0b2tlblxuXHRcdFx0aWYgKCFzdG9yZS5jaGVja1Rva2VuKHJlcS5xdWVyeS50b2tlbiwgZmlsZUlkKSkge1xuXHRcdFx0XHRyZXMud3JpdGVIZWFkKDQwMyk7XG5cdFx0XHRcdHJlcy5lbmQoKTtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDaGVjayBpZiBkdXBsaWNhdGVcblx0XHRcdGNvbnN0IHVuaXF1ZSA9IGZ1bmN0aW9uIChoYXNoKSB7XG5cdFx0XHRcdGNvbnN0IG9yaWdpbmFsSWQgPSBzdG9yZS5nZXRDb2xsZWN0aW9uKCkuZmluZE9uZSh7IGhhc2gsIF9pZDogeyAkbmU6IGZpbGVJZCB9IH0pO1xuXHRcdFx0XHRyZXR1cm4gb3JpZ2luYWxJZCA/IG9yaWdpbmFsSWQuX2lkIDogZmFsc2U7XG5cdFx0XHR9O1xuXG5cdFx0XHRjb25zdCBzcGFyayA9IG5ldyBTcGFya01ENS5BcnJheUJ1ZmZlcigpO1xuXHRcdFx0Y29uc3QgdG1wRmlsZSA9IFVwbG9hZEZTLmdldFRlbXBGaWxlUGF0aChmaWxlSWQpO1xuXHRcdFx0Y29uc3Qgd3MgPSBmcy5jcmVhdGVXcml0ZVN0cmVhbSh0bXBGaWxlLCB7IGZsYWdzOiAnYScgfSk7XG5cdFx0XHRjb25zdCBmaWVsZHMgPSB7IHVwbG9hZGluZzogdHJ1ZSB9O1xuXHRcdFx0Y29uc3QgcHJvZ3Jlc3MgPSBwYXJzZUZsb2F0KHJlcS5xdWVyeS5wcm9ncmVzcyk7XG5cdFx0XHRpZiAoIWlzTmFOKHByb2dyZXNzKSAmJiBwcm9ncmVzcyA+IDApIHtcblx0XHRcdFx0ZmllbGRzLnByb2dyZXNzID0gTWF0aC5taW4ocHJvZ3Jlc3MsIDEpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXEub24oJ2RhdGEnLCAoY2h1bmspID0+IHtcblx0XHRcdFx0d3Mud3JpdGUoY2h1bmspO1xuXHRcdFx0XHRzcGFyay5hcHBlbmQoY2h1bmspO1xuXHRcdFx0fSk7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcblx0XHRcdHJlcS5vbignZXJyb3InLCAoZXJyKSA9PiB7XG5cdFx0XHRcdHJlcy53cml0ZUhlYWQoNTAwKTtcblx0XHRcdFx0cmVzLmVuZCgpO1xuXHRcdFx0fSk7XG5cdFx0XHRyZXEub24oXG5cdFx0XHRcdCdlbmQnLFxuXHRcdFx0XHRNZXRlb3IuYmluZEVudmlyb25tZW50KCgpID0+IHtcblx0XHRcdFx0XHQvLyBVcGRhdGUgY29tcGxldGVkIHN0YXRlIHdpdGhvdXQgdHJpZ2dlcmluZyBob29rc1xuXHRcdFx0XHRcdGZpZWxkcy5oYXNoID0gc3BhcmsuZW5kKCk7XG5cdFx0XHRcdFx0ZmllbGRzLm9yaWdpbmFsSWQgPSB1bmlxdWUoZmllbGRzLmhhc2gpO1xuXHRcdFx0XHRcdHN0b3JlLmdldENvbGxlY3Rpb24oKS5kaXJlY3QudXBkYXRlKHsgX2lkOiBmaWxlSWQgfSwgeyAkc2V0OiBmaWVsZHMgfSk7XG5cdFx0XHRcdFx0d3MuZW5kKCk7XG5cdFx0XHRcdH0pLFxuXHRcdFx0KTtcblx0XHRcdHdzLm9uKCdlcnJvcicsIChlcnIpID0+IHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcihgdWZzOiBjYW5ub3Qgd3JpdGUgY2h1bmsgb2YgZmlsZSBcIiR7ZmlsZUlkfVwiICgke2Vyci5tZXNzYWdlfSlgKTtcblx0XHRcdFx0ZnMudW5saW5rKHRtcEZpbGUsIChlcnIpID0+IHtcblx0XHRcdFx0XHRlcnIgJiYgY29uc29sZS5lcnJvcihgdWZzOiBjYW5ub3QgZGVsZXRlIHRlbXAgZmlsZSBcIiR7dG1wRmlsZX1cIiAoJHtlcnIubWVzc2FnZX0pYCk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRyZXMud3JpdGVIZWFkKDUwMCk7XG5cdFx0XHRcdHJlcy5lbmQoKTtcblx0XHRcdH0pO1xuXHRcdFx0d3Mub24oJ2ZpbmlzaCcsICgpID0+IHtcblx0XHRcdFx0cmVzLndyaXRlSGVhZCgyMDQsIHsgJ0NvbnRlbnQtVHlwZSc6ICd0ZXh0L3BsYWluJyB9KTtcblx0XHRcdFx0cmVzLmVuZCgpO1xuXHRcdFx0fSk7XG5cdFx0fSBlbHNlIGlmIChyZXEubWV0aG9kID09PSAnR0VUJykge1xuXHRcdFx0Ly8gR2V0IHN0b3JlLCBmaWxlIElkIGFuZCBmaWxlIG5hbWVcblx0XHRcdGNvbnN0IHJlZ0V4cCA9IG5ldyBSZWdFeHAoJ14vKFteLz9dKykvKFteLz9dKykoPzovKFteLz9dKykpPyQnKTtcblx0XHRcdGNvbnN0IG1hdGNoID0gcmVnRXhwLmV4ZWMocGF0aCk7XG5cblx0XHRcdC8vIEF2b2lkIDUwNCBHYXRld2F5IHRpbWVvdXQgZXJyb3Jcblx0XHRcdC8vIGlmIGZpbGUgaXMgbm90IGhhbmRsZWQgYnkgVXBsb2FkRlMuXG5cdFx0XHRpZiAobWF0Y2ggPT09IG51bGwpIHtcblx0XHRcdFx0bmV4dCgpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIEdldCBzdG9yZVxuXHRcdFx0Y29uc3Qgc3RvcmVOYW1lID0gbWF0Y2hbMV07XG5cdFx0XHRjb25zdCBzdG9yZSA9IFVwbG9hZEZTLmdldFN0b3JlKHN0b3JlTmFtZSk7XG5cblx0XHRcdGlmICghc3RvcmUpIHtcblx0XHRcdFx0cmVzLndyaXRlSGVhZCg0MDQpO1xuXHRcdFx0XHRyZXMuZW5kKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHN0b3JlLm9uUmVhZCAhPT0gbnVsbCAmJiBzdG9yZS5vblJlYWQgIT09IHVuZGVmaW5lZCAmJiB0eXBlb2Ygc3RvcmUub25SZWFkICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoYHVmczogU3RvcmUub25SZWFkIGlzIG5vdCBhIGZ1bmN0aW9uIGluIHN0b3JlIFwiJHtzdG9yZU5hbWV9XCJgKTtcblx0XHRcdFx0cmVzLndyaXRlSGVhZCg1MDApO1xuXHRcdFx0XHRyZXMuZW5kKCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUmVtb3ZlIGZpbGUgZXh0ZW5zaW9uIGZyb20gZmlsZSBJZFxuXHRcdFx0Y29uc3QgaW5kZXggPSBtYXRjaFsyXS5pbmRleE9mKCcuJyk7XG5cdFx0XHRjb25zdCBmaWxlSWQgPSBpbmRleCAhPT0gLTEgPyBtYXRjaFsyXS5zdWJzdHIoMCwgaW5kZXgpIDogbWF0Y2hbMl07XG5cblx0XHRcdC8vIEdldCBmaWxlIGZyb20gZGF0YWJhc2Vcblx0XHRcdGNvbnN0IGZpbGUgPSBzdG9yZS5nZXRDb2xsZWN0aW9uKCkuZmluZE9uZSh7IF9pZDogZmlsZUlkIH0pO1xuXHRcdFx0aWYgKCFmaWxlKSB7XG5cdFx0XHRcdHJlcy53cml0ZUhlYWQoNDA0KTtcblx0XHRcdFx0cmVzLmVuZCgpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIFNpbXVsYXRlIHJlYWQgc3BlZWRcblx0XHRcdGlmIChVcGxvYWRGUy5jb25maWcuc2ltdWxhdGVSZWFkRGVsYXkpIHtcblx0XHRcdFx0TWV0ZW9yLl9zbGVlcEZvck1zKFVwbG9hZEZTLmNvbmZpZy5zaW11bGF0ZVJlYWREZWxheSk7XG5cdFx0XHR9XG5cblx0XHRcdGQucnVuKCgpID0+IHtcblx0XHRcdFx0Ly8gQ2hlY2sgaWYgdGhlIGZpbGUgY2FuIGJlIGFjY2Vzc2VkXG5cdFx0XHRcdGlmIChzdG9yZS5vblJlYWQuY2FsbChzdG9yZSwgZmlsZUlkLCBmaWxlLCByZXEsIHJlcykgIT09IGZhbHNlKSB7XG5cdFx0XHRcdFx0Y29uc3Qgb3B0aW9ucyA9IHt9O1xuXHRcdFx0XHRcdGxldCBzdGF0dXMgPSAyMDA7XG5cblx0XHRcdFx0XHQvLyBQcmVwYXJlIHJlc3BvbnNlIGhlYWRlcnNcblx0XHRcdFx0XHRjb25zdCBoZWFkZXJzID0ge1xuXHRcdFx0XHRcdFx0J0NvbnRlbnQtVHlwZSc6IGZpbGUudHlwZSxcblx0XHRcdFx0XHRcdCdDb250ZW50LUxlbmd0aCc6IGZpbGUuc2l6ZSxcblx0XHRcdFx0XHR9O1xuXG5cdFx0XHRcdFx0Ly8gQWRkIEVUYWcgaGVhZGVyXG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBmaWxlLmV0YWcgPT09ICdzdHJpbmcnKSB7XG5cdFx0XHRcdFx0XHRoZWFkZXJzLkVUYWcgPSBmaWxlLmV0YWc7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gQWRkIExhc3QtTW9kaWZpZWQgaGVhZGVyXG5cdFx0XHRcdFx0aWYgKGZpbGUubW9kaWZpZWRBdCBpbnN0YW5jZW9mIERhdGUpIHtcblx0XHRcdFx0XHRcdGhlYWRlcnNbJ0xhc3QtTW9kaWZpZWQnXSA9IGZpbGUubW9kaWZpZWRBdC50b1VUQ1N0cmluZygpO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoZmlsZS51cGxvYWRlZEF0IGluc3RhbmNlb2YgRGF0ZSkge1xuXHRcdFx0XHRcdFx0aGVhZGVyc1snTGFzdC1Nb2RpZmllZCddID0gZmlsZS51cGxvYWRlZEF0LnRvVVRDU3RyaW5nKCk7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gUGFyc2UgcmVxdWVzdCBoZWFkZXJzXG5cdFx0XHRcdFx0aWYgKHR5cGVvZiByZXEuaGVhZGVycyA9PT0gJ29iamVjdCcpIHtcblx0XHRcdFx0XHRcdC8vIENvbXBhcmUgRVRhZ1xuXHRcdFx0XHRcdFx0aWYgKHJlcS5oZWFkZXJzWydpZi1ub25lLW1hdGNoJ10pIHtcblx0XHRcdFx0XHRcdFx0aWYgKGZpbGUuZXRhZyA9PT0gcmVxLmhlYWRlcnNbJ2lmLW5vbmUtbWF0Y2gnXSkge1xuXHRcdFx0XHRcdFx0XHRcdHJlcy53cml0ZUhlYWQoMzA0KTsgLy8gTm90IE1vZGlmaWVkXG5cdFx0XHRcdFx0XHRcdFx0cmVzLmVuZCgpO1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBDb21wYXJlIGZpbGUgbW9kaWZpY2F0aW9uIGRhdGVcblx0XHRcdFx0XHRcdGlmIChyZXEuaGVhZGVyc1snaWYtbW9kaWZpZWQtc2luY2UnXSkge1xuXHRcdFx0XHRcdFx0XHRjb25zdCBtb2RpZmllZFNpbmNlID0gbmV3IERhdGUocmVxLmhlYWRlcnNbJ2lmLW1vZGlmaWVkLXNpbmNlJ10pO1xuXG5cdFx0XHRcdFx0XHRcdGlmIChcblx0XHRcdFx0XHRcdFx0XHQoZmlsZS5tb2RpZmllZEF0IGluc3RhbmNlb2YgRGF0ZSAmJiBmaWxlLm1vZGlmaWVkQXQgPiBtb2RpZmllZFNpbmNlKSB8fFxuXHRcdFx0XHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1taXhlZC1vcGVyYXRvcnNcblx0XHRcdFx0XHRcdFx0XHQoZmlsZS51cGxvYWRlZEF0IGluc3RhbmNlb2YgRGF0ZSAmJiBmaWxlLnVwbG9hZGVkQXQgPiBtb2RpZmllZFNpbmNlKVxuXHRcdFx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXMud3JpdGVIZWFkKDMwNCk7IC8vIE5vdCBNb2RpZmllZFxuXHRcdFx0XHRcdFx0XHRcdHJlcy5lbmQoKTtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gU3VwcG9ydCByYW5nZSByZXF1ZXN0XG5cdFx0XHRcdFx0XHRpZiAodHlwZW9mIHJlcS5oZWFkZXJzLnJhbmdlID09PSAnc3RyaW5nJykge1xuXHRcdFx0XHRcdFx0XHRjb25zdCB7IHJhbmdlIH0gPSByZXEuaGVhZGVycztcblxuXHRcdFx0XHRcdFx0XHQvLyBSYW5nZSBpcyBub3QgdmFsaWRcblx0XHRcdFx0XHRcdFx0aWYgKCFyYW5nZSkge1xuXHRcdFx0XHRcdFx0XHRcdHJlcy53cml0ZUhlYWQoNDE2KTtcblx0XHRcdFx0XHRcdFx0XHRyZXMuZW5kKCk7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0Y29uc3QgdG90YWwgPSBmaWxlLnNpemU7XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHVuaXQgPSByYW5nZS5zdWJzdHIoMCwgcmFuZ2UuaW5kZXhPZignPScpKTtcblxuXHRcdFx0XHRcdFx0XHRpZiAodW5pdCAhPT0gJ2J5dGVzJykge1xuXHRcdFx0XHRcdFx0XHRcdHJlcy53cml0ZUhlYWQoNDE2KTtcblx0XHRcdFx0XHRcdFx0XHRyZXMuZW5kKCk7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0Y29uc3QgcmFuZ2VzID0gcmFuZ2Vcblx0XHRcdFx0XHRcdFx0XHQuc3Vic3RyKHVuaXQubGVuZ3RoKVxuXHRcdFx0XHRcdFx0XHRcdC5yZXBsYWNlKC9bXjAtOVxcLSxdLywgJycpXG5cdFx0XHRcdFx0XHRcdFx0LnNwbGl0KCcsJyk7XG5cblx0XHRcdFx0XHRcdFx0aWYgKHJhbmdlcy5sZW5ndGggPiAxKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gdG9kbzogc3VwcG9ydCBtdWx0aXBhcnQgcmFuZ2VzOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9IVFRQL1JhbmdlX3JlcXVlc3RzXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgciA9IHJhbmdlc1swXS5zcGxpdCgnLScpO1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHN0YXJ0ID0gcGFyc2VJbnQoclswXSwgMTApO1xuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IGVuZCA9IHJbMV0gPyBwYXJzZUludChyWzFdLCAxMCkgOiB0b3RhbCAtIDE7XG5cblx0XHRcdFx0XHRcdFx0XHQvLyBSYW5nZSBpcyBub3QgdmFsaWRcblx0XHRcdFx0XHRcdFx0XHRpZiAoc3RhcnQgPCAwIHx8IGVuZCA+PSB0b3RhbCB8fCBzdGFydCA+IGVuZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmVzLndyaXRlSGVhZCg0MTYpO1xuXHRcdFx0XHRcdFx0XHRcdFx0cmVzLmVuZCgpO1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdC8vIFVwZGF0ZSBoZWFkZXJzXG5cdFx0XHRcdFx0XHRcdFx0aGVhZGVyc1snQ29udGVudC1SYW5nZSddID0gYGJ5dGVzICR7c3RhcnR9LSR7ZW5kfS8ke3RvdGFsfWA7XG5cdFx0XHRcdFx0XHRcdFx0aGVhZGVyc1snQ29udGVudC1MZW5ndGgnXSA9IGVuZCAtIHN0YXJ0ICsgMTtcblx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLnN0YXJ0ID0gc3RhcnQ7XG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5lbmQgPSBlbmQ7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0c3RhdHVzID0gMjA2OyAvLyBwYXJ0aWFsIGNvbnRlbnRcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0aGVhZGVyc1snQWNjZXB0LVJhbmdlcyddID0gJ2J5dGVzJztcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBPcGVuIHRoZSBmaWxlIHN0cmVhbVxuXHRcdFx0XHRcdGNvbnN0IHJzID0gc3RvcmUuZ2V0UmVhZFN0cmVhbShmaWxlSWQsIGZpbGUsIG9wdGlvbnMpO1xuXHRcdFx0XHRcdGNvbnN0IHdzID0gbmV3IHN0cmVhbS5QYXNzVGhyb3VnaCgpO1xuXG5cdFx0XHRcdFx0cnMub24oXG5cdFx0XHRcdFx0XHQnZXJyb3InLFxuXHRcdFx0XHRcdFx0TWV0ZW9yLmJpbmRFbnZpcm9ubWVudCgoZXJyKSA9PiB7XG5cdFx0XHRcdFx0XHRcdHN0b3JlLm9uUmVhZEVycm9yLmNhbGwoc3RvcmUsIGVyciwgZmlsZUlkLCBmaWxlKTtcblx0XHRcdFx0XHRcdFx0cmVzLmVuZCgpO1xuXHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR3cy5vbihcblx0XHRcdFx0XHRcdCdlcnJvcicsXG5cdFx0XHRcdFx0XHRNZXRlb3IuYmluZEVudmlyb25tZW50KChlcnIpID0+IHtcblx0XHRcdFx0XHRcdFx0c3RvcmUub25SZWFkRXJyb3IuY2FsbChzdG9yZSwgZXJyLCBmaWxlSWQsIGZpbGUpO1xuXHRcdFx0XHRcdFx0XHRyZXMuZW5kKCk7XG5cdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdHdzLm9uKCdjbG9zZScsICgpID0+IHtcblx0XHRcdFx0XHRcdC8vIENsb3NlIG91dHB1dCBzdHJlYW0gYXQgdGhlIGVuZFxuXHRcdFx0XHRcdFx0d3MuZW1pdCgnZW5kJyk7XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0XHQvLyBUcmFuc2Zvcm0gc3RyZWFtXG5cdFx0XHRcdFx0c3RvcmUudHJhbnNmb3JtUmVhZChycywgd3MsIGZpbGVJZCwgZmlsZSwgcmVxLCBoZWFkZXJzKTtcblxuXHRcdFx0XHRcdC8vIFBhcnNlIHJlcXVlc3QgaGVhZGVyc1xuXHRcdFx0XHRcdGlmICh0eXBlb2YgcmVxLmhlYWRlcnMgPT09ICdvYmplY3QnKSB7XG5cdFx0XHRcdFx0XHQvLyBDb21wcmVzcyBkYXRhIHVzaW5nIGlmIG5lZWRlZCAoaWdub3JlIGF1ZGlvL3ZpZGVvIGFzIHRoZXkgYXJlIGFscmVhZHkgY29tcHJlc3NlZClcblx0XHRcdFx0XHRcdGlmICh0eXBlb2YgcmVxLmhlYWRlcnNbJ2FjY2VwdC1lbmNvZGluZyddID09PSAnc3RyaW5nJyAmJiAhL14oYXVkaW98dmlkZW8pLy50ZXN0KGZpbGUudHlwZSkpIHtcblx0XHRcdFx0XHRcdFx0Y29uc3QgYWNjZXB0ID0gcmVxLmhlYWRlcnNbJ2FjY2VwdC1lbmNvZGluZyddO1xuXG5cdFx0XHRcdFx0XHRcdC8vIENvbXByZXNzIHdpdGggZ3ppcFxuXHRcdFx0XHRcdFx0XHRpZiAoYWNjZXB0Lm1hdGNoKC9cXGJnemlwXFxiLykpIHtcblx0XHRcdFx0XHRcdFx0XHRoZWFkZXJzWydDb250ZW50LUVuY29kaW5nJ10gPSAnZ3ppcCc7XG5cdFx0XHRcdFx0XHRcdFx0ZGVsZXRlIGhlYWRlcnNbJ0NvbnRlbnQtTGVuZ3RoJ107XG5cdFx0XHRcdFx0XHRcdFx0cmVzLndyaXRlSGVhZChzdGF0dXMsIGhlYWRlcnMpO1xuXHRcdFx0XHRcdFx0XHRcdHdzLnBpcGUoemxpYi5jcmVhdGVHemlwKCkpLnBpcGUocmVzKTtcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0Ly8gQ29tcHJlc3Mgd2l0aCBkZWZsYXRlXG5cdFx0XHRcdFx0XHRcdGlmIChhY2NlcHQubWF0Y2goL1xcYmRlZmxhdGVcXGIvKSkge1xuXHRcdFx0XHRcdFx0XHRcdGhlYWRlcnNbJ0NvbnRlbnQtRW5jb2RpbmcnXSA9ICdkZWZsYXRlJztcblx0XHRcdFx0XHRcdFx0XHRkZWxldGUgaGVhZGVyc1snQ29udGVudC1MZW5ndGgnXTtcblx0XHRcdFx0XHRcdFx0XHRyZXMud3JpdGVIZWFkKHN0YXR1cywgaGVhZGVycyk7XG5cdFx0XHRcdFx0XHRcdFx0d3MucGlwZSh6bGliLmNyZWF0ZURlZmxhdGUoKSkucGlwZShyZXMpO1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIFNlbmQgcmF3IGRhdGFcblx0XHRcdFx0XHRpZiAoIWhlYWRlcnNbJ0NvbnRlbnQtRW5jb2RpbmcnXSkge1xuXHRcdFx0XHRcdFx0cmVzLndyaXRlSGVhZChzdGF0dXMsIGhlYWRlcnMpO1xuXHRcdFx0XHRcdFx0d3MucGlwZShyZXMpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXMuZW5kKCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRuZXh0KCk7XG5cdFx0fVxuXHR9KTtcbn1cbiIsIi8qXG4gKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgS2FybCBTVEVJTlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogU09GVFdBUkUuXG4gKlxuICovXG5cbmltcG9ydCB7IF8gfSBmcm9tICdtZXRlb3IvdW5kZXJzY29yZSc7XG5cbi8qKlxuICogU3RvcmUgcGVybWlzc2lvbnNcbiAqL1xuZXhwb3J0IGNsYXNzIFN0b3JlUGVybWlzc2lvbnMge1xuXHRjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG5cdFx0Ly8gRGVmYXVsdCBvcHRpb25zXG5cdFx0b3B0aW9ucyA9IF8uZXh0ZW5kKFxuXHRcdFx0e1xuXHRcdFx0XHRpbnNlcnQ6IG51bGwsXG5cdFx0XHRcdHJlbW92ZTogbnVsbCxcblx0XHRcdFx0dXBkYXRlOiBudWxsLFxuXHRcdFx0fSxcblx0XHRcdG9wdGlvbnMsXG5cdFx0KTtcblxuXHRcdC8vIENoZWNrIG9wdGlvbnNcblx0XHRpZiAob3B0aW9ucy5pbnNlcnQgJiYgdHlwZW9mIG9wdGlvbnMuaW5zZXJ0ICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdTdG9yZVBlcm1pc3Npb25zOiBpbnNlcnQgaXMgbm90IGEgZnVuY3Rpb24nKTtcblx0XHR9XG5cdFx0aWYgKG9wdGlvbnMucmVtb3ZlICYmIHR5cGVvZiBvcHRpb25zLnJlbW92ZSAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignU3RvcmVQZXJtaXNzaW9uczogcmVtb3ZlIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG5cdFx0fVxuXHRcdGlmIChvcHRpb25zLnVwZGF0ZSAmJiB0eXBlb2Ygb3B0aW9ucy51cGRhdGUgIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1N0b3JlUGVybWlzc2lvbnM6IHVwZGF0ZSBpcyBub3QgYSBmdW5jdGlvbicpO1xuXHRcdH1cblxuXHRcdC8vIFB1YmxpYyBhdHRyaWJ1dGVzXG5cdFx0dGhpcy5hY3Rpb25zID0ge1xuXHRcdFx0aW5zZXJ0OiBvcHRpb25zLmluc2VydCxcblx0XHRcdHJlbW92ZTogb3B0aW9ucy5yZW1vdmUsXG5cdFx0XHR1cGRhdGU6IG9wdGlvbnMudXBkYXRlLFxuXHRcdH07XG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2tzIHRoZSBwZXJtaXNzaW9uIGZvciB0aGUgYWN0aW9uXG5cdCAqIEBwYXJhbSBhY3Rpb25cblx0ICogQHBhcmFtIHVzZXJJZFxuXHQgKiBAcGFyYW0gZmlsZVxuXHQgKiBAcGFyYW0gZmllbGRzXG5cdCAqIEBwYXJhbSBtb2RpZmllcnNcblx0ICogQHJldHVybiB7Kn1cblx0ICovXG5cdGNoZWNrKGFjdGlvbiwgdXNlcklkLCBmaWxlLCBmaWVsZHMsIG1vZGlmaWVycykge1xuXHRcdGlmICh0eXBlb2YgdGhpcy5hY3Rpb25zW2FjdGlvbl0gPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHJldHVybiB0aGlzLmFjdGlvbnNbYWN0aW9uXSh1c2VySWQsIGZpbGUsIGZpZWxkcywgbW9kaWZpZXJzKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7IC8vIGJ5IGRlZmF1bHQgYWxsb3cgYWxsXG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2tzIHRoZSBpbnNlcnQgcGVybWlzc2lvblxuXHQgKiBAcGFyYW0gdXNlcklkXG5cdCAqIEBwYXJhbSBmaWxlXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0Y2hlY2tJbnNlcnQodXNlcklkLCBmaWxlKSB7XG5cdFx0cmV0dXJuIHRoaXMuY2hlY2soJ2luc2VydCcsIHVzZXJJZCwgZmlsZSk7XG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2tzIHRoZSByZW1vdmUgcGVybWlzc2lvblxuXHQgKiBAcGFyYW0gdXNlcklkXG5cdCAqIEBwYXJhbSBmaWxlXG5cdCAqIEByZXR1cm5zIHsqfVxuXHQgKi9cblx0Y2hlY2tSZW1vdmUodXNlcklkLCBmaWxlKSB7XG5cdFx0cmV0dXJuIHRoaXMuY2hlY2soJ3JlbW92ZScsIHVzZXJJZCwgZmlsZSk7XG5cdH1cblxuXHQvKipcblx0ICogQ2hlY2tzIHRoZSB1cGRhdGUgcGVybWlzc2lvblxuXHQgKiBAcGFyYW0gdXNlcklkXG5cdCAqIEBwYXJhbSBmaWxlXG5cdCAqIEBwYXJhbSBmaWVsZHNcblx0ICogQHBhcmFtIG1vZGlmaWVyc1xuXHQgKiBAcmV0dXJucyB7Kn1cblx0ICovXG5cdGNoZWNrVXBkYXRlKHVzZXJJZCwgZmlsZSwgZmllbGRzLCBtb2RpZmllcnMpIHtcblx0XHRyZXR1cm4gdGhpcy5jaGVjaygndXBkYXRlJywgdXNlcklkLCBmaWxlLCBmaWVsZHMsIG1vZGlmaWVycyk7XG5cdH1cbn1cbiIsIi8qXG4gKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgS2FybCBTVEVJTlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogU09GVFdBUkUuXG4gKlxuICovXG5pbXBvcnQgeyBjaGVjayB9IGZyb20gJ21ldGVvci9jaGVjayc7XG5pbXBvcnQgeyBNZXRlb3IgfSBmcm9tICdtZXRlb3IvbWV0ZW9yJztcbmltcG9ydCB7IE1vbmdvIH0gZnJvbSAnbWV0ZW9yL21vbmdvJztcbmltcG9ydCB7IF8gfSBmcm9tICdtZXRlb3IvdW5kZXJzY29yZSc7XG5cbmltcG9ydCB7IFVwbG9hZEZTIH0gZnJvbSAnLi91ZnMnO1xuaW1wb3J0IHsgRmlsdGVyIH0gZnJvbSAnLi91ZnMtZmlsdGVyJztcbmltcG9ydCB7IFN0b3JlUGVybWlzc2lvbnMgfSBmcm9tICcuL3Vmcy1zdG9yZS1wZXJtaXNzaW9ucyc7XG5pbXBvcnQgeyBUb2tlbnMgfSBmcm9tICcuL3Vmcy10b2tlbnMnO1xuXG4vKipcbiAqIEZpbGUgc3RvcmVcbiAqL1xuZXhwb3J0IGNsYXNzIFN0b3JlIHtcblx0Y29uc3RydWN0b3Iob3B0aW9ucykge1xuXHRcdGNvbnN0IHNlbGYgPSB0aGlzO1xuXG5cdFx0Ly8gRGVmYXVsdCBvcHRpb25zXG5cdFx0b3B0aW9ucyA9IF8uZXh0ZW5kKFxuXHRcdFx0e1xuXHRcdFx0XHRjb2xsZWN0aW9uOiBudWxsLFxuXHRcdFx0XHRmaWx0ZXI6IG51bGwsXG5cdFx0XHRcdG5hbWU6IG51bGwsXG5cdFx0XHRcdG9uQ29weUVycm9yOiB0aGlzLm9uQ29weUVycm9yLFxuXHRcdFx0XHRvbkZpbmlzaFVwbG9hZDogdGhpcy5vbkZpbmlzaFVwbG9hZCxcblx0XHRcdFx0b25SZWFkOiB0aGlzLm9uUmVhZCxcblx0XHRcdFx0b25SZWFkRXJyb3I6IHRoaXMub25SZWFkRXJyb3IsXG5cdFx0XHRcdG9uVmFsaWRhdGU6IHRoaXMub25WYWxpZGF0ZSxcblx0XHRcdFx0b25Xcml0ZUVycm9yOiB0aGlzLm9uV3JpdGVFcnJvcixcblx0XHRcdFx0cGVybWlzc2lvbnM6IG51bGwsXG5cdFx0XHRcdHRyYW5zZm9ybVJlYWQ6IG51bGwsXG5cdFx0XHRcdHRyYW5zZm9ybVdyaXRlOiBudWxsLFxuXHRcdFx0fSxcblx0XHRcdG9wdGlvbnMsXG5cdFx0KTtcblxuXHRcdC8vIENoZWNrIG9wdGlvbnNcblx0XHRpZiAoIShvcHRpb25zLmNvbGxlY3Rpb24gaW5zdGFuY2VvZiBNb25nby5Db2xsZWN0aW9uKSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignU3RvcmU6IGNvbGxlY3Rpb24gaXMgbm90IGEgTW9uZ28uQ29sbGVjdGlvbicpO1xuXHRcdH1cblx0XHRpZiAob3B0aW9ucy5maWx0ZXIgJiYgIShvcHRpb25zLmZpbHRlciBpbnN0YW5jZW9mIEZpbHRlcikpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1N0b3JlOiBmaWx0ZXIgaXMgbm90IGEgVXBsb2FkRlMuRmlsdGVyJyk7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2Ygb3B0aW9ucy5uYW1lICE9PSAnc3RyaW5nJykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignU3RvcmU6IG5hbWUgaXMgbm90IGEgc3RyaW5nJyk7XG5cdFx0fVxuXHRcdGlmIChVcGxvYWRGUy5nZXRTdG9yZShvcHRpb25zLm5hbWUpKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdTdG9yZTogbmFtZSBhbHJlYWR5IGV4aXN0cycpO1xuXHRcdH1cblx0XHRpZiAob3B0aW9ucy5vbkNvcHlFcnJvciAmJiB0eXBlb2Ygb3B0aW9ucy5vbkNvcHlFcnJvciAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignU3RvcmU6IG9uQ29weUVycm9yIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG5cdFx0fVxuXHRcdGlmIChvcHRpb25zLm9uRmluaXNoVXBsb2FkICYmIHR5cGVvZiBvcHRpb25zLm9uRmluaXNoVXBsb2FkICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdTdG9yZTogb25GaW5pc2hVcGxvYWQgaXMgbm90IGEgZnVuY3Rpb24nKTtcblx0XHR9XG5cdFx0aWYgKG9wdGlvbnMub25SZWFkICYmIHR5cGVvZiBvcHRpb25zLm9uUmVhZCAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignU3RvcmU6IG9uUmVhZCBpcyBub3QgYSBmdW5jdGlvbicpO1xuXHRcdH1cblx0XHRpZiAob3B0aW9ucy5vblJlYWRFcnJvciAmJiB0eXBlb2Ygb3B0aW9ucy5vblJlYWRFcnJvciAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignU3RvcmU6IG9uUmVhZEVycm9yIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG5cdFx0fVxuXHRcdGlmIChvcHRpb25zLm9uV3JpdGVFcnJvciAmJiB0eXBlb2Ygb3B0aW9ucy5vbldyaXRlRXJyb3IgIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1N0b3JlOiBvbldyaXRlRXJyb3IgaXMgbm90IGEgZnVuY3Rpb24nKTtcblx0XHR9XG5cdFx0aWYgKG9wdGlvbnMucGVybWlzc2lvbnMgJiYgIShvcHRpb25zLnBlcm1pc3Npb25zIGluc3RhbmNlb2YgU3RvcmVQZXJtaXNzaW9ucykpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1N0b3JlOiBwZXJtaXNzaW9ucyBpcyBub3QgYSBVcGxvYWRGUy5TdG9yZVBlcm1pc3Npb25zJyk7XG5cdFx0fVxuXHRcdGlmIChvcHRpb25zLnRyYW5zZm9ybVJlYWQgJiYgdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtUmVhZCAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignU3RvcmU6IHRyYW5zZm9ybVJlYWQgaXMgbm90IGEgZnVuY3Rpb24nKTtcblx0XHR9XG5cdFx0aWYgKG9wdGlvbnMudHJhbnNmb3JtV3JpdGUgJiYgdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtV3JpdGUgIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1N0b3JlOiB0cmFuc2Zvcm1Xcml0ZSBpcyBub3QgYSBmdW5jdGlvbicpO1xuXHRcdH1cblx0XHRpZiAob3B0aW9ucy5vblZhbGlkYXRlICYmIHR5cGVvZiBvcHRpb25zLm9uVmFsaWRhdGUgIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ1N0b3JlOiBvblZhbGlkYXRlIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG5cdFx0fVxuXG5cdFx0Ly8gUHVibGljIGF0dHJpYnV0ZXNcblx0XHRzZWxmLm9wdGlvbnMgPSBvcHRpb25zO1xuXHRcdHNlbGYucGVybWlzc2lvbnMgPSBvcHRpb25zLnBlcm1pc3Npb25zO1xuXHRcdFsnb25Db3B5RXJyb3InLCAnb25GaW5pc2hVcGxvYWQnLCAnb25SZWFkJywgJ29uUmVhZEVycm9yJywgJ29uV3JpdGVFcnJvcicsICdvblZhbGlkYXRlJ10uZm9yRWFjaCgobWV0aG9kKSA9PiB7XG5cdFx0XHRpZiAodHlwZW9mIG9wdGlvbnNbbWV0aG9kXSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRzZWxmW21ldGhvZF0gPSBvcHRpb25zW21ldGhvZF07XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHQvLyBBZGQgdGhlIHN0b3JlIHRvIHRoZSBsaXN0XG5cdFx0VXBsb2FkRlMuYWRkU3RvcmUoc2VsZik7XG5cblx0XHQvLyBTZXQgZGVmYXVsdCBwZXJtaXNzaW9uc1xuXHRcdGlmICghKHNlbGYucGVybWlzc2lvbnMgaW5zdGFuY2VvZiBTdG9yZVBlcm1pc3Npb25zKSkge1xuXHRcdFx0Ly8gVXNlcyBjdXN0b20gZGVmYXVsdCBwZXJtaXNzaW9ucyBvciBVRlMgZGVmYXVsdCBwZXJtaXNzaW9uc1xuXHRcdFx0aWYgKFVwbG9hZEZTLmNvbmZpZy5kZWZhdWx0U3RvcmVQZXJtaXNzaW9ucyBpbnN0YW5jZW9mIFN0b3JlUGVybWlzc2lvbnMpIHtcblx0XHRcdFx0c2VsZi5wZXJtaXNzaW9ucyA9IFVwbG9hZEZTLmNvbmZpZy5kZWZhdWx0U3RvcmVQZXJtaXNzaW9ucztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHNlbGYucGVybWlzc2lvbnMgPSBuZXcgU3RvcmVQZXJtaXNzaW9ucygpO1xuXHRcdFx0XHRjb25zb2xlLndhcm4oYHVmczogcGVybWlzc2lvbnMgYXJlIG5vdCBkZWZpbmVkIGZvciBzdG9yZSBcIiR7b3B0aW9ucy5uYW1lfVwiYCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKE1ldGVvci5pc1NlcnZlcikge1xuXHRcdFx0LyoqXG5cdFx0XHQgKiBDaGVja3MgdG9rZW4gdmFsaWRpdHlcblx0XHRcdCAqIEBwYXJhbSB0b2tlblxuXHRcdFx0ICogQHBhcmFtIGZpbGVJZFxuXHRcdFx0ICogQHJldHVybnMge2Jvb2xlYW59XG5cdFx0XHQgKi9cblx0XHRcdHNlbGYuY2hlY2tUb2tlbiA9IGZ1bmN0aW9uICh0b2tlbiwgZmlsZUlkKSB7XG5cdFx0XHRcdGNoZWNrKHRva2VuLCBTdHJpbmcpO1xuXHRcdFx0XHRjaGVjayhmaWxlSWQsIFN0cmluZyk7XG5cdFx0XHRcdHJldHVybiBUb2tlbnMuZmluZCh7IHZhbHVlOiB0b2tlbiwgZmlsZUlkIH0pLmNvdW50KCkgPT09IDE7XG5cdFx0XHR9O1xuXG5cdFx0XHQvKipcblx0XHRcdCAqIENvcGllcyB0aGUgZmlsZSB0byBhIHN0b3JlXG5cdFx0XHQgKiBAcGFyYW0gZmlsZUlkXG5cdFx0XHQgKiBAcGFyYW0gc3RvcmVcblx0XHRcdCAqIEBwYXJhbSBjYWxsYmFja1xuXHRcdFx0ICovXG5cdFx0XHRzZWxmLmNvcHkgPSBmdW5jdGlvbiAoZmlsZUlkLCBzdG9yZSwgY2FsbGJhY2spIHtcblx0XHRcdFx0Y2hlY2soZmlsZUlkLCBTdHJpbmcpO1xuXG5cdFx0XHRcdGlmICghKHN0b3JlIGluc3RhbmNlb2YgU3RvcmUpKSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignc3RvcmUgaXMgbm90IGFuIGluc3RhbmNlIG9mIFVwbG9hZEZTLlN0b3JlJyk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gR2V0IG9yaWdpbmFsIGZpbGVcblx0XHRcdFx0Y29uc3QgZmlsZSA9IHNlbGYuZ2V0Q29sbGVjdGlvbigpLmZpbmRPbmUoeyBfaWQ6IGZpbGVJZCB9KTtcblx0XHRcdFx0aWYgKCFmaWxlKSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IE1ldGVvci5FcnJvcignZmlsZS1ub3QtZm91bmQnLCAnRmlsZSBub3QgZm91bmQnKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBTaWxlbnRseSBpZ25vcmUgdGhlIGZpbGUgaWYgaXQgZG9lcyBub3QgbWF0Y2ggZmlsdGVyXG5cdFx0XHRcdGNvbnN0IGZpbHRlciA9IHN0b3JlLmdldEZpbHRlcigpO1xuXHRcdFx0XHRpZiAoZmlsdGVyIGluc3RhbmNlb2YgRmlsdGVyICYmICFmaWx0ZXIuaXNWYWxpZChmaWxlKSkge1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFByZXBhcmUgY29weVxuXHRcdFx0XHRjb25zdCB7IF9pZCwgdXJsLCAuLi5jb3B5IH0gPSBmaWxlO1xuXHRcdFx0XHRjb3B5Lm9yaWdpbmFsU3RvcmUgPSBzZWxmLmdldE5hbWUoKTtcblx0XHRcdFx0Y29weS5vcmlnaW5hbElkID0gZmlsZUlkO1xuXG5cdFx0XHRcdC8vIENyZWF0ZSB0aGUgY29weVxuXHRcdFx0XHRjb25zdCBjb3B5SWQgPSBzdG9yZS5jcmVhdGUoY29weSk7XG5cblx0XHRcdFx0Ly8gR2V0IG9yaWdpbmFsIHN0cmVhbVxuXHRcdFx0XHRjb25zdCBycyA9IHNlbGYuZ2V0UmVhZFN0cmVhbShmaWxlSWQsIGZpbGUpO1xuXG5cdFx0XHRcdC8vIENhdGNoIGVycm9ycyB0byBhdm9pZCBhcHAgY3Jhc2hpbmdcblx0XHRcdFx0cnMub24oXG5cdFx0XHRcdFx0J2Vycm9yJyxcblx0XHRcdFx0XHRNZXRlb3IuYmluZEVudmlyb25tZW50KGZ1bmN0aW9uIChlcnIpIHtcblx0XHRcdFx0XHRcdGNhbGxiYWNrLmNhbGwoc2VsZiwgZXJyLCBudWxsKTtcblx0XHRcdFx0XHR9KSxcblx0XHRcdFx0KTtcblxuXHRcdFx0XHQvLyBDb3B5IGZpbGUgZGF0YVxuXHRcdFx0XHRzdG9yZS53cml0ZShcblx0XHRcdFx0XHRycyxcblx0XHRcdFx0XHRjb3B5SWQsXG5cdFx0XHRcdFx0TWV0ZW9yLmJpbmRFbnZpcm9ubWVudChmdW5jdGlvbiAoZXJyKSB7XG5cdFx0XHRcdFx0XHRpZiAoZXJyKSB7XG5cdFx0XHRcdFx0XHRcdHNlbGYuZ2V0Q29sbGVjdGlvbigpLnJlbW92ZSh7IF9pZDogY29weUlkIH0pO1xuXHRcdFx0XHRcdFx0XHRzZWxmLm9uQ29weUVycm9yLmNhbGwoc2VsZiwgZXJyLCBmaWxlSWQsIGZpbGUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKHR5cGVvZiBjYWxsYmFjayA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHRcdFx0XHRjYWxsYmFjay5jYWxsKHNlbGYsIGVyciwgY29weUlkLCBjb3B5LCBzdG9yZSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSksXG5cdFx0XHRcdCk7XG5cdFx0XHR9O1xuXG5cdFx0XHQvKipcblx0XHRcdCAqIENyZWF0ZXMgdGhlIGZpbGUgaW4gdGhlIGNvbGxlY3Rpb25cblx0XHRcdCAqIEBwYXJhbSBmaWxlXG5cdFx0XHQgKiBAcGFyYW0gY2FsbGJhY2tcblx0XHRcdCAqIEByZXR1cm4ge3N0cmluZ31cblx0XHRcdCAqL1xuXHRcdFx0c2VsZi5jcmVhdGUgPSBmdW5jdGlvbiAoZmlsZSwgY2FsbGJhY2spIHtcblx0XHRcdFx0Y2hlY2soZmlsZSwgT2JqZWN0KTtcblx0XHRcdFx0ZmlsZS5zdG9yZSA9IHNlbGYub3B0aW9ucy5uYW1lOyAvLyBhc3NpZ24gc3RvcmUgdG8gZmlsZVxuXHRcdFx0XHRyZXR1cm4gc2VsZi5nZXRDb2xsZWN0aW9uKCkuaW5zZXJ0KGZpbGUsIGNhbGxiYWNrKTtcblx0XHRcdH07XG5cblx0XHRcdC8qKlxuXHRcdFx0ICogQ3JlYXRlcyBhIHRva2VuIGZvciB0aGUgZmlsZSAob25seSBuZWVkZWQgZm9yIGNsaWVudCBzaWRlIHVwbG9hZClcblx0XHRcdCAqIEBwYXJhbSBmaWxlSWRcblx0XHRcdCAqIEByZXR1cm5zIHsqfVxuXHRcdFx0ICovXG5cdFx0XHRzZWxmLmNyZWF0ZVRva2VuID0gZnVuY3Rpb24gKGZpbGVJZCkge1xuXHRcdFx0XHRjb25zdCB0b2tlbiA9IHNlbGYuZ2VuZXJhdGVUb2tlbigpO1xuXG5cdFx0XHRcdC8vIENoZWNrIGlmIHRva2VuIGV4aXN0c1xuXHRcdFx0XHRpZiAoVG9rZW5zLmZpbmQoeyBmaWxlSWQgfSkuY291bnQoKSkge1xuXHRcdFx0XHRcdFRva2Vucy51cGRhdGUoXG5cdFx0XHRcdFx0XHR7IGZpbGVJZCB9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHQkc2V0OiB7XG5cdFx0XHRcdFx0XHRcdFx0Y3JlYXRlZEF0OiBuZXcgRGF0ZSgpLFxuXHRcdFx0XHRcdFx0XHRcdHZhbHVlOiB0b2tlbixcblx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRUb2tlbnMuaW5zZXJ0KHtcblx0XHRcdFx0XHRcdGNyZWF0ZWRBdDogbmV3IERhdGUoKSxcblx0XHRcdFx0XHRcdGZpbGVJZCxcblx0XHRcdFx0XHRcdHZhbHVlOiB0b2tlbixcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdG9rZW47XG5cdFx0XHR9O1xuXG5cdFx0XHQvKipcblx0XHRcdCAqIFdyaXRlcyB0aGUgZmlsZSB0byB0aGUgc3RvcmVcblx0XHRcdCAqIEBwYXJhbSByc1xuXHRcdFx0ICogQHBhcmFtIGZpbGVJZFxuXHRcdFx0ICogQHBhcmFtIGNhbGxiYWNrXG5cdFx0XHQgKi9cblx0XHRcdHNlbGYud3JpdGUgPSBmdW5jdGlvbiAocnMsIGZpbGVJZCwgY2FsbGJhY2spIHtcblx0XHRcdFx0Y29uc3QgZmlsZSA9IHNlbGYuZ2V0Q29sbGVjdGlvbigpLmZpbmRPbmUoeyBfaWQ6IGZpbGVJZCB9KTtcblxuXHRcdFx0XHRjb25zdCBlcnJvckhhbmRsZXIgPSBNZXRlb3IuYmluZEVudmlyb25tZW50KGZ1bmN0aW9uIChlcnIpIHtcblx0XHRcdFx0XHRzZWxmLm9uV3JpdGVFcnJvci5jYWxsKHNlbGYsIGVyciwgZmlsZUlkLCBmaWxlKTtcblx0XHRcdFx0XHRjYWxsYmFjay5jYWxsKHNlbGYsIGVycik7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRcdGNvbnN0IGZpbmlzaEhhbmRsZXIgPSBNZXRlb3IuYmluZEVudmlyb25tZW50KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRsZXQgc2l6ZSA9IDA7XG5cdFx0XHRcdFx0Y29uc3QgcmVhZFN0cmVhbSA9IHNlbGYuZ2V0UmVhZFN0cmVhbShmaWxlSWQsIGZpbGUpO1xuXG5cdFx0XHRcdFx0cmVhZFN0cmVhbS5vbihcblx0XHRcdFx0XHRcdCdlcnJvcicsXG5cdFx0XHRcdFx0XHRNZXRlb3IuYmluZEVudmlyb25tZW50KGZ1bmN0aW9uIChlcnJvcikge1xuXHRcdFx0XHRcdFx0XHRjYWxsYmFjay5jYWxsKHNlbGYsIGVycm9yLCBudWxsKTtcblx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0cmVhZFN0cmVhbS5vbihcblx0XHRcdFx0XHRcdCdkYXRhJyxcblx0XHRcdFx0XHRcdE1ldGVvci5iaW5kRW52aXJvbm1lbnQoZnVuY3Rpb24gKGRhdGEpIHtcblx0XHRcdFx0XHRcdFx0c2l6ZSArPSBkYXRhLmxlbmd0aDtcblx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0cmVhZFN0cmVhbS5vbihcblx0XHRcdFx0XHRcdCdlbmQnLFxuXHRcdFx0XHRcdFx0TWV0ZW9yLmJpbmRFbnZpcm9ubWVudChmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRcdGlmIChmaWxlLmNvbXBsZXRlKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdC8vIFNldCBmaWxlIGF0dHJpYnV0ZVxuXHRcdFx0XHRcdFx0XHRmaWxlLmNvbXBsZXRlID0gdHJ1ZTtcblx0XHRcdFx0XHRcdFx0ZmlsZS5ldGFnID0gVXBsb2FkRlMuZ2VuZXJhdGVFdGFnKCk7XG5cdFx0XHRcdFx0XHRcdGZpbGUucGF0aCA9IHNlbGYuZ2V0RmlsZVJlbGF0aXZlVVJMKGZpbGVJZCk7XG5cdFx0XHRcdFx0XHRcdGZpbGUucHJvZ3Jlc3MgPSAxO1xuXHRcdFx0XHRcdFx0XHRmaWxlLnNpemUgPSBzaXplO1xuXHRcdFx0XHRcdFx0XHRmaWxlLnRva2VuID0gc2VsZi5nZW5lcmF0ZVRva2VuKCk7XG5cdFx0XHRcdFx0XHRcdGZpbGUudXBsb2FkaW5nID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdGZpbGUudXBsb2FkZWRBdCA9IG5ldyBEYXRlKCk7XG5cdFx0XHRcdFx0XHRcdGZpbGUudXJsID0gc2VsZi5nZXRGaWxlVVJMKGZpbGVJZCk7XG5cblx0XHRcdFx0XHRcdFx0Ly8gRXhlY3V0ZSBjYWxsYmFja1xuXHRcdFx0XHRcdFx0XHRpZiAodHlwZW9mIHNlbGYub25GaW5pc2hVcGxvYWQgPT09ICdmdW5jdGlvbicpIHtcblx0XHRcdFx0XHRcdFx0XHRzZWxmLm9uRmluaXNoVXBsb2FkLmNhbGwoc2VsZiwgZmlsZSk7XG5cdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHQvLyBTZXRzIHRoZSBmaWxlIFVSTCB3aGVuIGZpbGUgdHJhbnNmZXIgaXMgY29tcGxldGUsXG5cdFx0XHRcdFx0XHRcdC8vIHRoaXMgd2F5LCB0aGUgaW1hZ2Ugd2lsbCBsb2FkcyBlbnRpcmVseS5cblx0XHRcdFx0XHRcdFx0c2VsZi5nZXRDb2xsZWN0aW9uKCkuZGlyZWN0LnVwZGF0ZShcblx0XHRcdFx0XHRcdFx0XHR7IF9pZDogZmlsZUlkIH0sXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0JHNldDoge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZTogZmlsZS5jb21wbGV0ZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZXRhZzogZmlsZS5ldGFnLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRwYXRoOiBmaWxlLnBhdGgsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHByb2dyZXNzOiBmaWxlLnByb2dyZXNzLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRzaXplOiBmaWxlLnNpemUsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRva2VuOiBmaWxlLnRva2VuLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR1cGxvYWRpbmc6IGZpbGUudXBsb2FkaW5nLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR1cGxvYWRlZEF0OiBmaWxlLnVwbG9hZGVkQXQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHVybDogZmlsZS51cmwsXG5cdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdCk7XG5cblx0XHRcdFx0XHRcdFx0Ly8gUmV0dXJuIGZpbGUgaW5mb1xuXHRcdFx0XHRcdFx0XHRjYWxsYmFjay5jYWxsKHNlbGYsIG51bGwsIGZpbGUpO1xuXG5cdFx0XHRcdFx0XHRcdC8vIFNpbXVsYXRlIHdyaXRlIHNwZWVkXG5cdFx0XHRcdFx0XHRcdGlmIChVcGxvYWRGUy5jb25maWcuc2ltdWxhdGVXcml0ZURlbGF5KSB7XG5cdFx0XHRcdFx0XHRcdFx0TWV0ZW9yLl9zbGVlcEZvck1zKFVwbG9hZEZTLmNvbmZpZy5zaW11bGF0ZVdyaXRlRGVsYXkpO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0Ly8gQ29weSBmaWxlIHRvIG90aGVyIHN0b3Jlc1xuXHRcdFx0XHRcdFx0XHRpZiAoc2VsZi5vcHRpb25zLmNvcHlUbyBpbnN0YW5jZW9mIEFycmF5KSB7XG5cdFx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBzZWxmLm9wdGlvbnMuY29weVRvLmxlbmd0aDsgaSArPSAxKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjb25zdCBzdG9yZSA9IHNlbGYub3B0aW9ucy5jb3B5VG9baV07XG5cblx0XHRcdFx0XHRcdFx0XHRcdGlmICghc3RvcmUuZ2V0RmlsdGVyKCkgfHwgc3RvcmUuZ2V0RmlsdGVyKCkuaXNWYWxpZChmaWxlKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRzZWxmLmNvcHkoZmlsZUlkLCBzdG9yZSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9KTtcblxuXHRcdFx0XHRjb25zdCB3cyA9IHNlbGYuZ2V0V3JpdGVTdHJlYW0oZmlsZUlkLCBmaWxlKTtcblx0XHRcdFx0d3Mub24oJ2Vycm9yJywgZXJyb3JIYW5kbGVyKTtcblx0XHRcdFx0d3Mub25jZSgnZmluaXNoJywgZmluaXNoSGFuZGxlcik7XG5cblx0XHRcdFx0Ly8gRXhlY3V0ZSB0cmFuc2Zvcm1hdGlvblxuXHRcdFx0XHRzZWxmLnRyYW5zZm9ybVdyaXRlKHJzLCB3cywgZmlsZUlkLCBmaWxlKTtcblx0XHRcdH07XG5cdFx0fVxuXG5cdFx0aWYgKE1ldGVvci5pc1NlcnZlcikge1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG5cdFx0XHRjb25zdCBmcyA9IE5wbS5yZXF1aXJlKCdmcycpO1xuXHRcdFx0Y29uc3QgY29sbGVjdGlvbiA9IHNlbGYuZ2V0Q29sbGVjdGlvbigpO1xuXG5cdFx0XHQvLyBDb2RlIGV4ZWN1dGVkIGFmdGVyIHJlbW92aW5nIGZpbGVcblx0XHRcdGNvbGxlY3Rpb24uYWZ0ZXIucmVtb3ZlKGZ1bmN0aW9uICh1c2VySWQsIGZpbGUpIHtcblx0XHRcdFx0Ly8gUmVtb3ZlIGFzc29jaWF0ZWQgdG9rZW5zXG5cdFx0XHRcdFRva2Vucy5yZW1vdmUoeyBmaWxlSWQ6IGZpbGUuX2lkIH0pO1xuXG5cdFx0XHRcdGlmIChzZWxmLm9wdGlvbnMuY29weVRvIGluc3RhbmNlb2YgQXJyYXkpIHtcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHNlbGYub3B0aW9ucy5jb3B5VG8ubGVuZ3RoOyBpICs9IDEpIHtcblx0XHRcdFx0XHRcdC8vIFJlbW92ZSBjb3BpZXMgaW4gc3RvcmVzXG5cdFx0XHRcdFx0XHRzZWxmLm9wdGlvbnMuY29weVRvW2ldLmdldENvbGxlY3Rpb24oKS5yZW1vdmUoeyBvcmlnaW5hbElkOiBmaWxlLl9pZCB9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBDb2RlIGV4ZWN1dGVkIGJlZm9yZSBpbnNlcnRpbmcgZmlsZVxuXHRcdFx0Y29sbGVjdGlvbi5iZWZvcmUuaW5zZXJ0KGZ1bmN0aW9uICh1c2VySWQsIGZpbGUpIHtcblx0XHRcdFx0aWYgKCFzZWxmLnBlcm1pc3Npb25zLmNoZWNrSW5zZXJ0KHVzZXJJZCwgZmlsZSkpIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKCdmb3JiaWRkZW4nLCAnRm9yYmlkZGVuJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXG5cdFx0XHQvLyBDb2RlIGV4ZWN1dGVkIGJlZm9yZSB1cGRhdGluZyBmaWxlXG5cdFx0XHRjb2xsZWN0aW9uLmJlZm9yZS51cGRhdGUoZnVuY3Rpb24gKHVzZXJJZCwgZmlsZSwgZmllbGRzLCBtb2RpZmllcnMpIHtcblx0XHRcdFx0aWYgKCFzZWxmLnBlcm1pc3Npb25zLmNoZWNrVXBkYXRlKHVzZXJJZCwgZmlsZSwgZmllbGRzLCBtb2RpZmllcnMpKSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IE1ldGVvci5FcnJvcignZm9yYmlkZGVuJywgJ0ZvcmJpZGRlbicpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gQ29kZSBleGVjdXRlZCBiZWZvcmUgcmVtb3ZpbmcgZmlsZVxuXHRcdFx0Y29sbGVjdGlvbi5iZWZvcmUucmVtb3ZlKGZ1bmN0aW9uICh1c2VySWQsIGZpbGUpIHtcblx0XHRcdFx0aWYgKCFzZWxmLnBlcm1pc3Npb25zLmNoZWNrUmVtb3ZlKHVzZXJJZCwgZmlsZSkpIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgTWV0ZW9yLkVycm9yKCdmb3JiaWRkZW4nLCAnRm9yYmlkZGVuJyk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBEZWxldGUgdGhlIHBoeXNpY2FsIGZpbGUgaW4gdGhlIHN0b3JlXG5cdFx0XHRcdHNlbGYuZGVsZXRlKGZpbGUuX2lkKTtcblxuXHRcdFx0XHRjb25zdCB0bXBGaWxlID0gVXBsb2FkRlMuZ2V0VGVtcEZpbGVQYXRoKGZpbGUuX2lkKTtcblxuXHRcdFx0XHQvLyBEZWxldGUgdGhlIHRlbXAgZmlsZVxuXHRcdFx0XHRmcy5zdGF0KHRtcEZpbGUsIGZ1bmN0aW9uIChlcnIpIHtcblx0XHRcdFx0XHQhZXJyICYmXG5cdFx0XHRcdFx0XHRmcy51bmxpbmsodG1wRmlsZSwgZnVuY3Rpb24gKGVycikge1xuXHRcdFx0XHRcdFx0XHRlcnIgJiYgY29uc29sZS5lcnJvcihgdWZzOiBjYW5ub3QgZGVsZXRlIHRlbXAgZmlsZSBhdCAke3RtcEZpbGV9ICgke2Vyci5tZXNzYWdlfSlgKTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHR9KTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBEZWxldGVzIGEgZmlsZSBhc3luY1xuXHQgKiBAcGFyYW0gZmlsZUlkXG5cdCAqIEBwYXJhbSBjYWxsYmFja1xuXHQgKi9cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5cdGRlbGV0ZShmaWxlSWQsIGNhbGxiYWNrKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdkZWxldGUgaXMgbm90IGltcGxlbWVudGVkJyk7XG5cdH1cblxuXHQvKipcblx0ICogR2VuZXJhdGVzIGEgcmFuZG9tIHRva2VuXG5cdCAqIEBwYXJhbSBwYXR0ZXJuXG5cdCAqIEByZXR1cm4ge3N0cmluZ31cblx0ICovXG5cdGdlbmVyYXRlVG9rZW4ocGF0dGVybikge1xuXHRcdHJldHVybiAocGF0dGVybiB8fCAneHl4eXh5eHl4eScpLnJlcGxhY2UoL1t4eV0vZywgKGMpID0+IHtcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1taXhlZC1vcGVyYXRvcnNcblx0XHRcdGNvbnN0IHIgPSAoTWF0aC5yYW5kb20oKSAqIDE2KSB8IDA7XG5cdFx0XHRjb25zdCB2ID0gYyA9PT0gJ3gnID8gciA6IChyICYgMHgzKSB8IDB4ODtcblx0XHRcdGNvbnN0IHMgPSB2LnRvU3RyaW5nKDE2KTtcblx0XHRcdHJldHVybiBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpID8gcy50b1VwcGVyQ2FzZSgpIDogcztcblx0XHR9KTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBjb2xsZWN0aW9uXG5cdCAqIEByZXR1cm4ge01vbmdvLkNvbGxlY3Rpb259XG5cdCAqL1xuXHRnZXRDb2xsZWN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLm9wdGlvbnMuY29sbGVjdGlvbjtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBmaWxlIFVSTFxuXHQgKiBAcGFyYW0gZmlsZUlkXG5cdCAqIEByZXR1cm4ge3N0cmluZ3xudWxsfVxuXHQgKi9cblx0Z2V0RmlsZVJlbGF0aXZlVVJMKGZpbGVJZCkge1xuXHRcdGNvbnN0IGZpbGUgPSB0aGlzLmdldENvbGxlY3Rpb24oKS5maW5kT25lKGZpbGVJZCwgeyBmaWVsZHM6IHsgbmFtZTogMSB9IH0pO1xuXHRcdHJldHVybiBmaWxlID8gdGhpcy5nZXRSZWxhdGl2ZVVSTChgJHtmaWxlSWR9LyR7ZmlsZS5uYW1lfWApIDogbnVsbDtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBmaWxlIFVSTFxuXHQgKiBAcGFyYW0gZmlsZUlkXG5cdCAqIEByZXR1cm4ge3N0cmluZ3xudWxsfVxuXHQgKi9cblx0Z2V0RmlsZVVSTChmaWxlSWQpIHtcblx0XHRjb25zdCBmaWxlID0gdGhpcy5nZXRDb2xsZWN0aW9uKCkuZmluZE9uZShmaWxlSWQsIHsgZmllbGRzOiB7IG5hbWU6IDEgfSB9KTtcblx0XHRyZXR1cm4gZmlsZSA/IHRoaXMuZ2V0VVJMKGAke2ZpbGVJZH0vJHtmaWxlLm5hbWV9YCkgOiBudWxsO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIGZpbGUgZmlsdGVyXG5cdCAqIEByZXR1cm4ge1VwbG9hZEZTLkZpbHRlcn1cblx0ICovXG5cdGdldEZpbHRlcigpIHtcblx0XHRyZXR1cm4gdGhpcy5vcHRpb25zLmZpbHRlcjtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBzdG9yZSBuYW1lXG5cdCAqIEByZXR1cm4ge3N0cmluZ31cblx0ICovXG5cdGdldE5hbWUoKSB7XG5cdFx0cmV0dXJuIHRoaXMub3B0aW9ucy5uYW1lO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIGZpbGUgcmVhZCBzdHJlYW1cblx0ICogQHBhcmFtIGZpbGVJZFxuXHQgKiBAcGFyYW0gZmlsZVxuXHQgKi9cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5cdGdldFJlYWRTdHJlYW0oZmlsZUlkLCBmaWxlKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCdTdG9yZS5nZXRSZWFkU3RyZWFtIGlzIG5vdCBpbXBsZW1lbnRlZCcpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFJldHVybnMgdGhlIHN0b3JlIHJlbGF0aXZlIFVSTFxuXHQgKiBAcGFyYW0gcGF0aFxuXHQgKiBAcmV0dXJuIHtzdHJpbmd9XG5cdCAqL1xuXHRnZXRSZWxhdGl2ZVVSTChwYXRoKSB7XG5cdFx0Y29uc3Qgcm9vdFVybCA9IE1ldGVvci5hYnNvbHV0ZVVybCgpLnJlcGxhY2UoL1xcLyskLywgJycpO1xuXHRcdGNvbnN0IHJvb3RQYXRoID0gcm9vdFVybC5yZXBsYWNlKC9eW2Etel0rOlxcL1xcL1teL10rXFwvKi9naSwgJycpO1xuXHRcdGNvbnN0IHN0b3JlTmFtZSA9IHRoaXMuZ2V0TmFtZSgpO1xuXHRcdHBhdGggPSBTdHJpbmcocGF0aCkucmVwbGFjZSgvXFwvJC8sICcnKS50cmltKCk7XG5cdFx0cmV0dXJuIGVuY29kZVVSSShgJHtyb290UGF0aH0vJHtVcGxvYWRGUy5jb25maWcuc3RvcmVzUGF0aH0vJHtzdG9yZU5hbWV9LyR7cGF0aH1gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBSZXR1cm5zIHRoZSBzdG9yZSBhYnNvbHV0ZSBVUkxcblx0ICogQHBhcmFtIHBhdGhcblx0ICogQHJldHVybiB7c3RyaW5nfVxuXHQgKi9cblx0Z2V0VVJMKHBhdGgpIHtcblx0XHRjb25zdCByb290VXJsID0gTWV0ZW9yLmFic29sdXRlVXJsKHsgc2VjdXJlOiBVcGxvYWRGUy5jb25maWcuaHR0cHMgfSkucmVwbGFjZSgvXFwvKyQvLCAnJyk7XG5cdFx0Y29uc3Qgc3RvcmVOYW1lID0gdGhpcy5nZXROYW1lKCk7XG5cdFx0cGF0aCA9IFN0cmluZyhwYXRoKS5yZXBsYWNlKC9cXC8kLywgJycpLnRyaW0oKTtcblx0XHRyZXR1cm4gZW5jb2RlVVJJKGAke3Jvb3RVcmx9LyR7VXBsb2FkRlMuY29uZmlnLnN0b3Jlc1BhdGh9LyR7c3RvcmVOYW1lfS8ke3BhdGh9YCk7XG5cdH1cblxuXHQvKipcblx0ICogUmV0dXJucyB0aGUgZmlsZSB3cml0ZSBzdHJlYW1cblx0ICogQHBhcmFtIGZpbGVJZFxuXHQgKiBAcGFyYW0gZmlsZVxuXHQgKi9cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5cdGdldFdyaXRlU3RyZWFtKGZpbGVJZCwgZmlsZSkge1xuXHRcdHRocm93IG5ldyBFcnJvcignZ2V0V3JpdGVTdHJlYW0gaXMgbm90IGltcGxlbWVudGVkJyk7XG5cdH1cblxuXHQvKipcblx0ICogQ29tcGxldGVzIHRoZSBmaWxlIHVwbG9hZFxuXHQgKiBAcGFyYW0gdXJsXG5cdCAqIEBwYXJhbSBmaWxlXG5cdCAqIEBwYXJhbSBjYWxsYmFja1xuXHQgKi9cblx0aW1wb3J0RnJvbVVSTCh1cmwsIGZpbGUsIGNhbGxiYWNrKSB7XG5cdFx0TWV0ZW9yLmNhbGwoJ3Vmc0ltcG9ydFVSTCcsIHVybCwgZmlsZSwgdGhpcy5nZXROYW1lKCksIGNhbGxiYWNrKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDYWxsZWQgd2hlbiBhIGNvcHkgZXJyb3IgaGFwcGVuZWRcblx0ICogQHBhcmFtIGVyclxuXHQgKiBAcGFyYW0gZmlsZUlkXG5cdCAqIEBwYXJhbSBmaWxlXG5cdCAqL1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcblx0b25Db3B5RXJyb3IoZXJyLCBmaWxlSWQsIGZpbGUpIHtcblx0XHRjb25zb2xlLmVycm9yKGB1ZnM6IGNhbm5vdCBjb3B5IGZpbGUgXCIke2ZpbGVJZH1cIiAoJHtlcnIubWVzc2FnZX0pYCwgZXJyKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDYWxsZWQgd2hlbiBhIGZpbGUgaGFzIGJlZW4gdXBsb2FkZWRcblx0ICogQHBhcmFtIGZpbGVcblx0ICovXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuXHRvbkZpbmlzaFVwbG9hZChmaWxlKSB7fVxuXG5cdC8qKlxuXHQgKiBDYWxsZWQgd2hlbiBhIGZpbGUgaXMgcmVhZCBmcm9tIHRoZSBzdG9yZVxuXHQgKiBAcGFyYW0gZmlsZUlkXG5cdCAqIEBwYXJhbSBmaWxlXG5cdCAqIEBwYXJhbSByZXF1ZXN0XG5cdCAqIEBwYXJhbSByZXNwb25zZVxuXHQgKiBAcmV0dXJuIGJvb2xlYW5cblx0ICovXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuXHRvblJlYWQoZmlsZUlkLCBmaWxlLCByZXF1ZXN0LCByZXNwb25zZSkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0LyoqXG5cdCAqIENhbGxlZCB3aGVuIGEgcmVhZCBlcnJvciBoYXBwZW5lZFxuXHQgKiBAcGFyYW0gZXJyXG5cdCAqIEBwYXJhbSBmaWxlSWRcblx0ICogQHBhcmFtIGZpbGVcblx0ICogQHJldHVybiBib29sZWFuXG5cdCAqL1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcblx0b25SZWFkRXJyb3IoZXJyLCBmaWxlSWQsIGZpbGUpIHtcblx0XHRjb25zb2xlLmVycm9yKGB1ZnM6IGNhbm5vdCByZWFkIGZpbGUgXCIke2ZpbGVJZH1cIiAoJHtlcnIubWVzc2FnZX0pYCwgZXJyKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDYWxsZWQgd2hlbiBmaWxlIGlzIGJlaW5nIHZhbGlkYXRlZFxuXHQgKiBAcGFyYW0gZmlsZVxuXHQgKi9cblx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5cdG9uVmFsaWRhdGUoZmlsZSkge31cblxuXHQvKipcblx0ICogQ2FsbGVkIHdoZW4gYSB3cml0ZSBlcnJvciBoYXBwZW5lZFxuXHQgKiBAcGFyYW0gZXJyXG5cdCAqIEBwYXJhbSBmaWxlSWRcblx0ICogQHBhcmFtIGZpbGVcblx0ICogQHJldHVybiBib29sZWFuXG5cdCAqL1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcblx0b25Xcml0ZUVycm9yKGVyciwgZmlsZUlkLCBmaWxlKSB7XG5cdFx0Y29uc29sZS5lcnJvcihgdWZzOiBjYW5ub3Qgd3JpdGUgZmlsZSBcIiR7ZmlsZUlkfVwiICgke2Vyci5tZXNzYWdlfSlgLCBlcnIpO1xuXHR9XG5cblx0LyoqXG5cdCAqIFNldHMgdGhlIHN0b3JlIHBlcm1pc3Npb25zXG5cdCAqIEBwYXJhbSBwZXJtaXNzaW9uc1xuXHQgKi9cblx0c2V0UGVybWlzc2lvbnMocGVybWlzc2lvbnMpIHtcblx0XHRpZiAoIShwZXJtaXNzaW9ucyBpbnN0YW5jZW9mIFN0b3JlUGVybWlzc2lvbnMpKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdQZXJtaXNzaW9ucyBpcyBub3QgYW4gaW5zdGFuY2Ugb2YgVXBsb2FkRlMuU3RvcmVQZXJtaXNzaW9ucycpO1xuXHRcdH1cblx0XHR0aGlzLnBlcm1pc3Npb25zID0gcGVybWlzc2lvbnM7XG5cdH1cblxuXHQvKipcblx0ICogVHJhbnNmb3JtcyB0aGUgZmlsZSBvbiByZWFkaW5nXG5cdCAqIEBwYXJhbSByZWFkU3RyZWFtXG5cdCAqIEBwYXJhbSB3cml0ZVN0cmVhbVxuXHQgKiBAcGFyYW0gZmlsZUlkXG5cdCAqIEBwYXJhbSBmaWxlXG5cdCAqIEBwYXJhbSByZXF1ZXN0XG5cdCAqIEBwYXJhbSBoZWFkZXJzXG5cdCAqL1xuXHR0cmFuc2Zvcm1SZWFkKHJlYWRTdHJlYW0sIHdyaXRlU3RyZWFtLCBmaWxlSWQsIGZpbGUsIHJlcXVlc3QsIGhlYWRlcnMpIHtcblx0XHRpZiAodHlwZW9mIHRoaXMub3B0aW9ucy50cmFuc2Zvcm1SZWFkID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHR0aGlzLm9wdGlvbnMudHJhbnNmb3JtUmVhZC5jYWxsKHRoaXMsIHJlYWRTdHJlYW0sIHdyaXRlU3RyZWFtLCBmaWxlSWQsIGZpbGUsIHJlcXVlc3QsIGhlYWRlcnMpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZWFkU3RyZWFtLnBpcGUod3JpdGVTdHJlYW0pO1xuXHRcdH1cblx0fVxuXG5cdC8qKlxuXHQgKiBUcmFuc2Zvcm1zIHRoZSBmaWxlIG9uIHdyaXRpbmdcblx0ICogQHBhcmFtIHJlYWRTdHJlYW1cblx0ICogQHBhcmFtIHdyaXRlU3RyZWFtXG5cdCAqIEBwYXJhbSBmaWxlSWRcblx0ICogQHBhcmFtIGZpbGVcblx0ICovXG5cdHRyYW5zZm9ybVdyaXRlKHJlYWRTdHJlYW0sIHdyaXRlU3RyZWFtLCBmaWxlSWQsIGZpbGUpIHtcblx0XHRpZiAodHlwZW9mIHRoaXMub3B0aW9ucy50cmFuc2Zvcm1Xcml0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0dGhpcy5vcHRpb25zLnRyYW5zZm9ybVdyaXRlLmNhbGwodGhpcywgcmVhZFN0cmVhbSwgd3JpdGVTdHJlYW0sIGZpbGVJZCwgZmlsZSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlYWRTdHJlYW0ucGlwZSh3cml0ZVN0cmVhbSk7XG5cdFx0fVxuXHR9XG5cblx0LyoqXG5cdCAqIFZhbGlkYXRlcyB0aGUgZmlsZVxuXHQgKiBAcGFyYW0gZmlsZVxuXHQgKi9cblx0dmFsaWRhdGUoZmlsZSkge1xuXHRcdGlmICh0eXBlb2YgdGhpcy5vblZhbGlkYXRlID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHR0aGlzLm9uVmFsaWRhdGUoZmlsZSk7XG5cdFx0fVxuXHR9XG59XG4iLCIvKlxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKlxuICogQ29weXJpZ2h0IChjKSAyMDE3IEthcmwgU1RFSU5cbiAqXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKlxuICogVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXG4gKiBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuICpcbiAqIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcbiAqIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuICogRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG4gKiBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXG4gKiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuICogT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcbiAqIFNPRlRXQVJFLlxuICpcbiAqL1xuXG5pbXBvcnQgeyBNb25nbyB9IGZyb20gJ21ldGVvci9tb25nbyc7XG5cbi8qKlxuICogQ29sbGVjdGlvbiBvZiB1cGxvYWQgdG9rZW5zXG4gKiBAdHlwZSB7TW9uZ28uQ29sbGVjdGlvbn1cbiAqL1xuZXhwb3J0IGNvbnN0IFRva2VucyA9IG5ldyBNb25nby5Db2xsZWN0aW9uKCd1ZnNUb2tlbnMnKTtcbiIsIi8qXG4gKiBUaGUgTUlUIExpY2Vuc2UgKE1JVClcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTcgS2FybCBTVEVJTlxuICpcbiAqIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhIGNvcHlcbiAqIG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcbiAqIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcbiAqIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCwgZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGxcbiAqIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuICogZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAqXG4gKiBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcbiAqIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4gKlxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRVxuICogU09GVFdBUkUuXG4gKlxuICovXG5cbmltcG9ydCB7IE1ldGVvciB9IGZyb20gJ21ldGVvci9tZXRlb3InO1xuaW1wb3J0IHsgXyB9IGZyb20gJ21ldGVvci91bmRlcnNjb3JlJztcblxuaW1wb3J0IHsgU3RvcmUgfSBmcm9tICcuL3Vmcy1zdG9yZSc7XG5cbi8qKlxuICogRmlsZSB1cGxvYWRlclxuICovXG5leHBvcnQgY2xhc3MgVXBsb2FkZXIge1xuXHRjb25zdHJ1Y3RvcihvcHRpb25zKSB7XG5cdFx0Y29uc3Qgc2VsZiA9IHRoaXM7XG5cblx0XHQvLyBTZXQgZGVmYXVsdCBvcHRpb25zXG5cdFx0b3B0aW9ucyA9IF8uZXh0ZW5kKFxuXHRcdFx0e1xuXHRcdFx0XHRhZGFwdGl2ZTogdHJ1ZSxcblx0XHRcdFx0Y2FwYWNpdHk6IDAuOSxcblx0XHRcdFx0Y2h1bmtTaXplOiAxNiAqIDEwMjQsXG5cdFx0XHRcdGRhdGE6IG51bGwsXG5cdFx0XHRcdGZpbGU6IG51bGwsXG5cdFx0XHRcdG1heENodW5rU2l6ZTogNCAqIDEwMjQgKiAxMDAwLFxuXHRcdFx0XHRtYXhUcmllczogNSxcblx0XHRcdFx0b25BYm9ydDogdGhpcy5vbkFib3J0LFxuXHRcdFx0XHRvbkNvbXBsZXRlOiB0aGlzLm9uQ29tcGxldGUsXG5cdFx0XHRcdG9uQ3JlYXRlOiB0aGlzLm9uQ3JlYXRlLFxuXHRcdFx0XHRvbkVycm9yOiB0aGlzLm9uRXJyb3IsXG5cdFx0XHRcdG9uUHJvZ3Jlc3M6IHRoaXMub25Qcm9ncmVzcyxcblx0XHRcdFx0b25TdGFydDogdGhpcy5vblN0YXJ0LFxuXHRcdFx0XHRvblN0b3A6IHRoaXMub25TdG9wLFxuXHRcdFx0XHRyZXRyeURlbGF5OiAyMDAwLFxuXHRcdFx0XHRzdG9yZTogbnVsbCxcblx0XHRcdFx0dHJhbnNmZXJEZWxheTogMTAwLFxuXHRcdFx0fSxcblx0XHRcdG9wdGlvbnMsXG5cdFx0KTtcblxuXHRcdC8vIENoZWNrIG9wdGlvbnNcblx0XHRpZiAodHlwZW9mIG9wdGlvbnMuYWRhcHRpdmUgIT09ICdib29sZWFuJykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignYWRhcHRpdmUgaXMgbm90IGEgbnVtYmVyJyk7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2Ygb3B0aW9ucy5jYXBhY2l0eSAhPT0gJ251bWJlcicpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ2NhcGFjaXR5IGlzIG5vdCBhIG51bWJlcicpO1xuXHRcdH1cblx0XHRpZiAob3B0aW9ucy5jYXBhY2l0eSA8PSAwIHx8IG9wdGlvbnMuY2FwYWNpdHkgPiAxKSB7XG5cdFx0XHR0aHJvdyBuZXcgUmFuZ2VFcnJvcignY2FwYWNpdHkgbXVzdCBiZSBhIGZsb2F0IGJldHdlZW4gMC4xIGFuZCAxLjAnKTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiBvcHRpb25zLmNodW5rU2l6ZSAhPT0gJ251bWJlcicpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ2NodW5rU2l6ZSBpcyBub3QgYSBudW1iZXInKTtcblx0XHR9XG5cdFx0aWYgKCEob3B0aW9ucy5kYXRhIGluc3RhbmNlb2YgQmxvYikgJiYgIShvcHRpb25zLmRhdGEgaW5zdGFuY2VvZiBGaWxlKSkge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignZGF0YSBpcyBub3QgYW4gQmxvYiBvciBGaWxlJyk7XG5cdFx0fVxuXHRcdGlmIChvcHRpb25zLmZpbGUgPT09IG51bGwgfHwgdHlwZW9mIG9wdGlvbnMuZmlsZSAhPT0gJ29iamVjdCcpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ2ZpbGUgaXMgbm90IGFuIG9iamVjdCcpO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIG9wdGlvbnMubWF4Q2h1bmtTaXplICE9PSAnbnVtYmVyJykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignbWF4Q2h1bmtTaXplIGlzIG5vdCBhIG51bWJlcicpO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIG9wdGlvbnMubWF4VHJpZXMgIT09ICdudW1iZXInKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdtYXhUcmllcyBpcyBub3QgYSBudW1iZXInKTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiBvcHRpb25zLnJldHJ5RGVsYXkgIT09ICdudW1iZXInKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdyZXRyeURlbGF5IGlzIG5vdCBhIG51bWJlcicpO1xuXHRcdH1cblx0XHRpZiAodHlwZW9mIG9wdGlvbnMudHJhbnNmZXJEZWxheSAhPT0gJ251bWJlcicpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ3RyYW5zZmVyRGVsYXkgaXMgbm90IGEgbnVtYmVyJyk7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2Ygb3B0aW9ucy5vbkFib3J0ICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdvbkFib3J0IGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2Ygb3B0aW9ucy5vbkNvbXBsZXRlICE9PSAnZnVuY3Rpb24nKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdvbkNvbXBsZXRlIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2Ygb3B0aW9ucy5vbkNyZWF0ZSAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignb25DcmVhdGUgaXMgbm90IGEgZnVuY3Rpb24nKTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiBvcHRpb25zLm9uRXJyb3IgIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ29uRXJyb3IgaXMgbm90IGEgZnVuY3Rpb24nKTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiBvcHRpb25zLm9uUHJvZ3Jlc3MgIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ29uUHJvZ3Jlc3MgaXMgbm90IGEgZnVuY3Rpb24nKTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiBvcHRpb25zLm9uU3RhcnQgIT09ICdmdW5jdGlvbicpIHtcblx0XHRcdHRocm93IG5ldyBUeXBlRXJyb3IoJ29uU3RhcnQgaXMgbm90IGEgZnVuY3Rpb24nKTtcblx0XHR9XG5cdFx0aWYgKHR5cGVvZiBvcHRpb25zLm9uU3RvcCAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignb25TdG9wIGlzIG5vdCBhIGZ1bmN0aW9uJyk7XG5cdFx0fVxuXHRcdGlmICh0eXBlb2Ygb3B0aW9ucy5zdG9yZSAhPT0gJ3N0cmluZycgJiYgIShvcHRpb25zLnN0b3JlIGluc3RhbmNlb2YgU3RvcmUpKSB7XG5cdFx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKCdzdG9yZSBtdXN0IGJlIHRoZSBuYW1lIG9mIHRoZSBzdG9yZSBvciBhbiBpbnN0YW5jZSBvZiBVcGxvYWRGUy5TdG9yZScpO1xuXHRcdH1cblxuXHRcdC8vIFB1YmxpYyBhdHRyaWJ1dGVzXG5cdFx0c2VsZi5hZGFwdGl2ZSA9IG9wdGlvbnMuYWRhcHRpdmU7XG5cdFx0c2VsZi5jYXBhY2l0eSA9IHBhcnNlRmxvYXQob3B0aW9ucy5jYXBhY2l0eSk7XG5cdFx0c2VsZi5jaHVua1NpemUgPSBwYXJzZUludChvcHRpb25zLmNodW5rU2l6ZSk7XG5cdFx0c2VsZi5tYXhDaHVua1NpemUgPSBwYXJzZUludChvcHRpb25zLm1heENodW5rU2l6ZSk7XG5cdFx0c2VsZi5tYXhUcmllcyA9IHBhcnNlSW50KG9wdGlvbnMubWF4VHJpZXMpO1xuXHRcdHNlbGYucmV0cnlEZWxheSA9IHBhcnNlSW50KG9wdGlvbnMucmV0cnlEZWxheSk7XG5cdFx0c2VsZi50cmFuc2ZlckRlbGF5ID0gcGFyc2VJbnQob3B0aW9ucy50cmFuc2ZlckRlbGF5KTtcblx0XHRzZWxmLm9uQWJvcnQgPSBvcHRpb25zLm9uQWJvcnQ7XG5cdFx0c2VsZi5vbkNvbXBsZXRlID0gb3B0aW9ucy5vbkNvbXBsZXRlO1xuXHRcdHNlbGYub25DcmVhdGUgPSBvcHRpb25zLm9uQ3JlYXRlO1xuXHRcdHNlbGYub25FcnJvciA9IG9wdGlvbnMub25FcnJvcjtcblx0XHRzZWxmLm9uUHJvZ3Jlc3MgPSBvcHRpb25zLm9uUHJvZ3Jlc3M7XG5cdFx0c2VsZi5vblN0YXJ0ID0gb3B0aW9ucy5vblN0YXJ0O1xuXHRcdHNlbGYub25TdG9wID0gb3B0aW9ucy5vblN0b3A7XG5cblx0XHQvLyBQcml2YXRlIGF0dHJpYnV0ZXNcblx0XHRsZXQgeyBzdG9yZSB9ID0gb3B0aW9ucztcblx0XHRjb25zdCB7IGRhdGEgfSA9IG9wdGlvbnM7XG5cdFx0Y29uc3QgY2FwYWNpdHlNYXJnaW4gPSAwLjE7XG5cdFx0bGV0IHsgZmlsZSB9ID0gb3B0aW9ucztcblx0XHRsZXQgZmlsZUlkID0gbnVsbDtcblx0XHRsZXQgb2Zmc2V0ID0gMDtcblx0XHRsZXQgbG9hZGVkID0gMDtcblx0XHRjb25zdCB0b3RhbCA9IGRhdGEuc2l6ZTtcblx0XHRsZXQgdHJpZXMgPSAwO1xuXHRcdGxldCBwb3N0VXJsID0gbnVsbDtcblx0XHRsZXQgdG9rZW4gPSBudWxsO1xuXHRcdGxldCBjb21wbGV0ZSA9IGZhbHNlO1xuXHRcdGxldCB1cGxvYWRpbmcgPSBmYWxzZTtcblxuXHRcdGxldCB0aW1lQSA9IG51bGw7XG5cdFx0bGV0IHRpbWVCID0gbnVsbDtcblxuXHRcdGxldCBlbGFwc2VkVGltZSA9IDA7XG5cdFx0bGV0IHN0YXJ0VGltZSA9IDA7XG5cblx0XHQvLyBLZWVwIG9ubHkgdGhlIG5hbWUgb2YgdGhlIHN0b3JlXG5cdFx0aWYgKHN0b3JlIGluc3RhbmNlb2YgU3RvcmUpIHtcblx0XHRcdHN0b3JlID0gc3RvcmUuZ2V0TmFtZSgpO1xuXHRcdH1cblxuXHRcdC8vIEFzc2lnbiBmaWxlIHRvIHN0b3JlXG5cdFx0ZmlsZS5zdG9yZSA9IHN0b3JlO1xuXG5cdFx0ZnVuY3Rpb24gZmluaXNoKCkge1xuXHRcdFx0Ly8gRmluaXNoIHRoZSB1cGxvYWQgYnkgdGVsbGluZyB0aGUgc3RvcmUgdGhlIHVwbG9hZCBpcyBjb21wbGV0ZVxuXHRcdFx0TWV0ZW9yLmNhbGwoJ3Vmc0NvbXBsZXRlJywgZmlsZUlkLCBzdG9yZSwgdG9rZW4sIGZ1bmN0aW9uIChlcnIsIHVwbG9hZGVkRmlsZSkge1xuXHRcdFx0XHRpZiAoZXJyKSB7XG5cdFx0XHRcdFx0c2VsZi5vbkVycm9yKGVyciwgZmlsZSk7XG5cdFx0XHRcdFx0c2VsZi5hYm9ydCgpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHVwbG9hZGVkRmlsZSkge1xuXHRcdFx0XHRcdHVwbG9hZGluZyA9IGZhbHNlO1xuXHRcdFx0XHRcdGNvbXBsZXRlID0gdHJ1ZTtcblx0XHRcdFx0XHRmaWxlID0gdXBsb2FkZWRGaWxlO1xuXHRcdFx0XHRcdHNlbGYub25Db21wbGV0ZSh1cGxvYWRlZEZpbGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHQvKipcblx0XHQgKiBBYm9ydHMgdGhlIGN1cnJlbnQgdHJhbnNmZXJcblx0XHQgKi9cblx0XHRzZWxmLmFib3J0ID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Ly8gUmVtb3ZlIHRoZSBmaWxlIGZyb20gZGF0YWJhc2Vcblx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuXHRcdFx0TWV0ZW9yLmNhbGwoJ3Vmc0RlbGV0ZScsIGZpbGVJZCwgc3RvcmUsIHRva2VuLCBmdW5jdGlvbiAoZXJyLCByZXN1bHQpIHtcblx0XHRcdFx0aWYgKGVycikge1xuXHRcdFx0XHRcdHNlbGYub25FcnJvcihlcnIsIGZpbGUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblxuXHRcdFx0Ly8gUmVzZXQgdXBsb2FkZXIgc3RhdHVzXG5cdFx0XHR1cGxvYWRpbmcgPSBmYWxzZTtcblx0XHRcdGZpbGVJZCA9IG51bGw7XG5cdFx0XHRvZmZzZXQgPSAwO1xuXHRcdFx0dHJpZXMgPSAwO1xuXHRcdFx0bG9hZGVkID0gMDtcblx0XHRcdGNvbXBsZXRlID0gZmFsc2U7XG5cdFx0XHRzdGFydFRpbWUgPSBudWxsO1xuXHRcdFx0c2VsZi5vbkFib3J0KGZpbGUpO1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBSZXR1cm5zIHRoZSBhdmVyYWdlIHNwZWVkIGluIGJ5dGVzIHBlciBzZWNvbmRcblx0XHQgKiBAcmV0dXJucyB7bnVtYmVyfVxuXHRcdCAqL1xuXHRcdHNlbGYuZ2V0QXZlcmFnZVNwZWVkID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0Y29uc3Qgc2Vjb25kcyA9IHNlbGYuZ2V0RWxhcHNlZFRpbWUoKSAvIDEwMDA7XG5cdFx0XHRyZXR1cm4gc2VsZi5nZXRMb2FkZWQoKSAvIHNlY29uZHM7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIFJldHVybnMgdGhlIGVsYXBzZWQgdGltZSBpbiBtaWxsaXNlY29uZHNcblx0XHQgKiBAcmV0dXJucyB7bnVtYmVyfVxuXHRcdCAqL1xuXHRcdHNlbGYuZ2V0RWxhcHNlZFRpbWUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoc3RhcnRUaW1lICYmIHNlbGYuaXNVcGxvYWRpbmcoKSkge1xuXHRcdFx0XHRyZXR1cm4gZWxhcHNlZFRpbWUgKyAoRGF0ZS5ub3coKSAtIHN0YXJ0VGltZSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZWxhcHNlZFRpbWU7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIFJldHVybnMgdGhlIGZpbGVcblx0XHQgKiBAcmV0dXJuIHtvYmplY3R9XG5cdFx0ICovXG5cdFx0c2VsZi5nZXRGaWxlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIGZpbGU7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIFJldHVybnMgdGhlIGxvYWRlZCBieXRlc1xuXHRcdCAqIEByZXR1cm4ge251bWJlcn1cblx0XHQgKi9cblx0XHRzZWxmLmdldExvYWRlZCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBsb2FkZWQ7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIFJldHVybnMgY3VycmVudCBwcm9ncmVzc1xuXHRcdCAqIEByZXR1cm4ge251bWJlcn1cblx0XHQgKi9cblx0XHRzZWxmLmdldFByb2dyZXNzID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmV0dXJuIE1hdGgubWluKCgobG9hZGVkIC8gdG90YWwpICogMTAwKSAvIDEwMCwgMS4wKTtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogUmV0dXJucyB0aGUgcmVtYWluaW5nIHRpbWUgaW4gbWlsbGlzZWNvbmRzXG5cdFx0ICogQHJldHVybnMge251bWJlcn1cblx0XHQgKi9cblx0XHRzZWxmLmdldFJlbWFpbmluZ1RpbWUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjb25zdCBhdmVyYWdlU3BlZWQgPSBzZWxmLmdldEF2ZXJhZ2VTcGVlZCgpO1xuXHRcdFx0Y29uc3QgcmVtYWluaW5nQnl0ZXMgPSB0b3RhbCAtIHNlbGYuZ2V0TG9hZGVkKCk7XG5cdFx0XHRyZXR1cm4gYXZlcmFnZVNwZWVkICYmIHJlbWFpbmluZ0J5dGVzID8gTWF0aC5tYXgocmVtYWluaW5nQnl0ZXMgLyBhdmVyYWdlU3BlZWQsIDApIDogMDtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogUmV0dXJucyB0aGUgdXBsb2FkIHNwZWVkIGluIGJ5dGVzIHBlciBzZWNvbmRcblx0XHQgKiBAcmV0dXJucyB7bnVtYmVyfVxuXHRcdCAqL1xuXHRcdHNlbGYuZ2V0U3BlZWQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAodGltZUEgJiYgdGltZUIgJiYgc2VsZi5pc1VwbG9hZGluZygpKSB7XG5cdFx0XHRcdGNvbnN0IHNlY29uZHMgPSAodGltZUIgLSB0aW1lQSkgLyAxMDAwO1xuXHRcdFx0XHRyZXR1cm4gc2VsZi5jaHVua1NpemUgLyBzZWNvbmRzO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIFJldHVybnMgdGhlIHRvdGFsIGJ5dGVzXG5cdFx0ICogQHJldHVybiB7bnVtYmVyfVxuXHRcdCAqL1xuXHRcdHNlbGYuZ2V0VG90YWwgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gdG90YWw7XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIENoZWNrcyBpZiB0aGUgdHJhbnNmZXIgaXMgY29tcGxldGVcblx0XHQgKiBAcmV0dXJuIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdHNlbGYuaXNDb21wbGV0ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJldHVybiBjb21wbGV0ZTtcblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogQ2hlY2tzIGlmIHRoZSB0cmFuc2ZlciBpcyBhY3RpdmVcblx0XHQgKiBAcmV0dXJuIHtib29sZWFufVxuXHRcdCAqL1xuXHRcdHNlbGYuaXNVcGxvYWRpbmcgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZXR1cm4gdXBsb2FkaW5nO1xuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBSZWFkcyBhIHBvcnRpb24gb2YgZmlsZVxuXHRcdCAqIEBwYXJhbSBzdGFydFxuXHRcdCAqIEBwYXJhbSBsZW5ndGhcblx0XHQgKiBAcGFyYW0gY2FsbGJhY2tcblx0XHQgKiBAcmV0dXJucyB7QmxvYn1cblx0XHQgKi9cblx0XHRzZWxmLnJlYWRDaHVuayA9IGZ1bmN0aW9uIChzdGFydCwgbGVuZ3RoLCBjYWxsYmFjaykge1xuXHRcdFx0aWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ3JlYWRDaHVuayBpcyBtaXNzaW5nIGNhbGxiYWNrJyk7XG5cdFx0XHR9XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRsZXQgZW5kO1xuXG5cdFx0XHRcdC8vIENhbGN1bGF0ZSB0aGUgY2h1bmsgc2l6ZVxuXHRcdFx0XHRpZiAobGVuZ3RoICYmIHN0YXJ0ICsgbGVuZ3RoID4gdG90YWwpIHtcblx0XHRcdFx0XHRlbmQgPSB0b3RhbDtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRlbmQgPSBzdGFydCArIGxlbmd0aDtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBHZXQgY2h1bmtcblx0XHRcdFx0Y29uc3QgY2h1bmsgPSBkYXRhLnNsaWNlKHN0YXJ0LCBlbmQpO1xuXHRcdFx0XHQvLyBQYXNzIGNodW5rIHRvIGNhbGxiYWNrXG5cdFx0XHRcdGNhbGxiYWNrLmNhbGwoc2VsZiwgbnVsbCwgY2h1bmspO1xuXHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ3JlYWQgZXJyb3InLCBlcnIpO1xuXHRcdFx0XHQvLyBSZXRyeSB0byByZWFkIGNodW5rXG5cdFx0XHRcdE1ldGVvci5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRpZiAodHJpZXMgPCBzZWxmLm1heFRyaWVzKSB7XG5cdFx0XHRcdFx0XHR0cmllcyArPSAxO1xuXHRcdFx0XHRcdFx0c2VsZi5yZWFkQ2h1bmsoc3RhcnQsIGxlbmd0aCwgY2FsbGJhY2spO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSwgc2VsZi5yZXRyeURlbGF5KTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0LyoqXG5cdFx0ICogU2VuZHMgYSBmaWxlIGNodW5rIHRvIHRoZSBzdG9yZVxuXHRcdCAqL1xuXHRcdHNlbGYuc2VuZENodW5rID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKCFjb21wbGV0ZSAmJiBzdGFydFRpbWUgIT09IG51bGwpIHtcblx0XHRcdFx0aWYgKG9mZnNldCA8IHRvdGFsKSB7XG5cdFx0XHRcdFx0bGV0IHsgY2h1bmtTaXplIH0gPSBzZWxmO1xuXG5cdFx0XHRcdFx0Ly8gVXNlIGFkYXB0aXZlIGxlbmd0aFxuXHRcdFx0XHRcdGlmIChzZWxmLmFkYXB0aXZlICYmIHRpbWVBICYmIHRpbWVCICYmIHRpbWVCID4gdGltZUEpIHtcblx0XHRcdFx0XHRcdGNvbnN0IGR1cmF0aW9uID0gKHRpbWVCIC0gdGltZUEpIC8gMTAwMDtcblx0XHRcdFx0XHRcdGNvbnN0IG1heCA9IHNlbGYuY2FwYWNpdHkgKiAoMSArIGNhcGFjaXR5TWFyZ2luKTtcblx0XHRcdFx0XHRcdGNvbnN0IG1pbiA9IHNlbGYuY2FwYWNpdHkgKiAoMSAtIGNhcGFjaXR5TWFyZ2luKTtcblxuXHRcdFx0XHRcdFx0aWYgKGR1cmF0aW9uID49IG1heCkge1xuXHRcdFx0XHRcdFx0XHRjaHVua1NpemUgPSBNYXRoLmFicyhNYXRoLnJvdW5kKGNodW5rU2l6ZSAqIChtYXggLSBkdXJhdGlvbikpKTtcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoZHVyYXRpb24gPCBtaW4pIHtcblx0XHRcdFx0XHRcdFx0Y2h1bmtTaXplID0gTWF0aC5yb3VuZChjaHVua1NpemUgKiAobWluIC8gZHVyYXRpb24pKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdC8vIExpbWl0IHRvIG1heCBjaHVuayBzaXplXG5cdFx0XHRcdFx0XHRpZiAoc2VsZi5tYXhDaHVua1NpemUgPiAwICYmIGNodW5rU2l6ZSA+IHNlbGYubWF4Q2h1bmtTaXplKSB7XG5cdFx0XHRcdFx0XHRcdGNodW5rU2l6ZSA9IHNlbGYubWF4Q2h1bmtTaXplO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIFJlZHVjZSBjaHVuayBzaXplIHRvIGZpdCB0b3RhbFxuXHRcdFx0XHRcdGlmIChvZmZzZXQgKyBjaHVua1NpemUgPiB0b3RhbCkge1xuXHRcdFx0XHRcdFx0Y2h1bmtTaXplID0gdG90YWwgLSBvZmZzZXQ7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gUHJlcGFyZSB0aGUgY2h1bmtcblx0XHRcdFx0XHRzZWxmLnJlYWRDaHVuayhvZmZzZXQsIGNodW5rU2l6ZSwgZnVuY3Rpb24gKGVyciwgY2h1bmspIHtcblx0XHRcdFx0XHRcdGlmIChlcnIpIHtcblx0XHRcdFx0XHRcdFx0c2VsZi5vbkVycm9yKGVyciwgZmlsZSk7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Y29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG5cdFx0XHRcdFx0XHR4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoWzIwMCwgMjAxLCAyMDIsIDIwNF0uaW5jbHVkZXMoeGhyLnN0YXR1cykpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRpbWVCID0gRGF0ZS5ub3coKTtcblx0XHRcdFx0XHRcdFx0XHRcdG9mZnNldCArPSBjaHVua1NpemU7XG5cdFx0XHRcdFx0XHRcdFx0XHRsb2FkZWQgKz0gY2h1bmtTaXplO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBTZW5kIG5leHQgY2h1bmtcblx0XHRcdFx0XHRcdFx0XHRcdHNlbGYub25Qcm9ncmVzcyhmaWxlLCBzZWxmLmdldFByb2dyZXNzKCkpO1xuXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBGaW5pc2ggdXBsb2FkXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAobG9hZGVkID49IHRvdGFsKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVsYXBzZWRUaW1lID0gRGF0ZS5ub3coKSAtIHN0YXJ0VGltZTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZmluaXNoKCk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRNZXRlb3Iuc2V0VGltZW91dChzZWxmLnNlbmRDaHVuaywgc2VsZi50cmFuc2ZlckRlbGF5KTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9IGVsc2UgaWYgKCFbNDAyLCA0MDMsIDQwNCwgNTAwXS5pbmNsdWRlcyh4aHIuc3RhdHVzKSkge1xuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gUmV0cnkgdW50aWwgbWF4IHRyaWVzIGlzIHJlYWNoXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBCdXQgZG9uJ3QgcmV0cnkgaWYgdGhlc2UgZXJyb3JzIG9jY3VyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAodHJpZXMgPD0gc2VsZi5tYXhUcmllcykge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0cmllcyArPSAxO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBXYWl0IGJlZm9yZSByZXRyeWluZ1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRNZXRlb3Iuc2V0VGltZW91dChzZWxmLnNlbmRDaHVuaywgc2VsZi5yZXRyeURlbGF5KTtcblx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHNlbGYuYWJvcnQoKTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0c2VsZi5hYm9ydCgpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fTtcblxuXHRcdFx0XHRcdFx0Ly8gQ2FsY3VsYXRlIHVwbG9hZCBwcm9ncmVzc1xuXHRcdFx0XHRcdFx0Y29uc3QgcHJvZ3Jlc3MgPSAob2Zmc2V0ICsgY2h1bmtTaXplKSAvIHRvdGFsO1xuXHRcdFx0XHRcdFx0Ly8gbGV0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cdFx0XHRcdFx0XHQvLyBmb3JtRGF0YS5hcHBlbmQoJ3Byb2dyZXNzJywgcHJvZ3Jlc3MpO1xuXHRcdFx0XHRcdFx0Ly8gZm9ybURhdGEuYXBwZW5kKCdjaHVuaycsIGNodW5rKTtcblx0XHRcdFx0XHRcdGNvbnN0IHVybCA9IGAke3Bvc3RVcmx9JnByb2dyZXNzPSR7cHJvZ3Jlc3N9YDtcblxuXHRcdFx0XHRcdFx0dGltZUEgPSBEYXRlLm5vdygpO1xuXHRcdFx0XHRcdFx0dGltZUIgPSBudWxsO1xuXHRcdFx0XHRcdFx0dXBsb2FkaW5nID0gdHJ1ZTtcblxuXHRcdFx0XHRcdFx0Ly8gU2VuZCBjaHVuayB0byB0aGUgc3RvcmVcblx0XHRcdFx0XHRcdHhoci5vcGVuKCdQT1NUJywgdXJsLCB0cnVlKTtcblx0XHRcdFx0XHRcdHhoci5zZW5kKGNodW5rKTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cblx0XHQvKipcblx0XHQgKiBTdGFydHMgb3IgcmVzdW1lcyB0aGUgdHJhbnNmZXJcblx0XHQgKi9cblx0XHRzZWxmLnN0YXJ0ID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0aWYgKCFmaWxlSWQpIHtcblx0XHRcdFx0Ly8gQ3JlYXRlIHRoZSBmaWxlIGRvY3VtZW50IGFuZCBnZXQgdGhlIHRva2VuXG5cdFx0XHRcdC8vIHRoYXQgYWxsb3dzIHRoZSB1c2VyIHRvIHNlbmQgY2h1bmtzIHRvIHRoZSBzdG9yZS5cblx0XHRcdFx0TWV0ZW9yLmNhbGwoJ3Vmc0NyZWF0ZScsIF8uZXh0ZW5kKHt9LCBmaWxlKSwgZnVuY3Rpb24gKGVyciwgcmVzdWx0KSB7XG5cdFx0XHRcdFx0aWYgKGVycikge1xuXHRcdFx0XHRcdFx0c2VsZi5vbkVycm9yKGVyciwgZmlsZSk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChyZXN1bHQpIHtcblx0XHRcdFx0XHRcdHRva2VuID0gcmVzdWx0LnRva2VuO1xuXHRcdFx0XHRcdFx0cG9zdFVybCA9IHJlc3VsdC51cmw7XG5cdFx0XHRcdFx0XHRmaWxlSWQgPSByZXN1bHQuZmlsZUlkO1xuXHRcdFx0XHRcdFx0ZmlsZS5faWQgPSByZXN1bHQuZmlsZUlkO1xuXHRcdFx0XHRcdFx0c2VsZi5vbkNyZWF0ZShmaWxlKTtcblx0XHRcdFx0XHRcdHRyaWVzID0gMDtcblx0XHRcdFx0XHRcdHN0YXJ0VGltZSA9IERhdGUubm93KCk7XG5cdFx0XHRcdFx0XHRzZWxmLm9uU3RhcnQoZmlsZSk7XG5cdFx0XHRcdFx0XHRzZWxmLnNlbmRDaHVuaygpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9IGVsc2UgaWYgKCF1cGxvYWRpbmcgJiYgIWNvbXBsZXRlKSB7XG5cdFx0XHRcdC8vIFJlc3VtZSB1cGxvYWRpbmdcblx0XHRcdFx0dHJpZXMgPSAwO1xuXHRcdFx0XHRzdGFydFRpbWUgPSBEYXRlLm5vdygpO1xuXHRcdFx0XHRzZWxmLm9uU3RhcnQoZmlsZSk7XG5cdFx0XHRcdHNlbGYuc2VuZENodW5rKCk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdC8qKlxuXHRcdCAqIFN0b3BzIHRoZSB0cmFuc2ZlclxuXHRcdCAqL1xuXHRcdHNlbGYuc3RvcCA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmICh1cGxvYWRpbmcpIHtcblx0XHRcdFx0Ly8gVXBkYXRlIGVsYXBzZWQgdGltZVxuXHRcdFx0XHRlbGFwc2VkVGltZSA9IERhdGUubm93KCkgLSBzdGFydFRpbWU7XG5cdFx0XHRcdHN0YXJ0VGltZSA9IG51bGw7XG5cdFx0XHRcdHVwbG9hZGluZyA9IGZhbHNlO1xuXHRcdFx0XHRzZWxmLm9uU3RvcChmaWxlKTtcblxuXHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcblx0XHRcdFx0TWV0ZW9yLmNhbGwoJ3Vmc1N0b3AnLCBmaWxlSWQsIHN0b3JlLCB0b2tlbiwgZnVuY3Rpb24gKGVyciwgcmVzdWx0KSB7XG5cdFx0XHRcdFx0aWYgKGVycikge1xuXHRcdFx0XHRcdFx0c2VsZi5vbkVycm9yKGVyciwgZmlsZSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9O1xuXHR9XG5cblx0LyoqXG5cdCAqIENhbGxlZCB3aGVuIHRoZSBmaWxlIHVwbG9hZCBpcyBhYm9ydGVkXG5cdCAqIEBwYXJhbSBmaWxlXG5cdCAqL1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcblx0b25BYm9ydChmaWxlKSB7fVxuXG5cdC8qKlxuXHQgKiBDYWxsZWQgd2hlbiB0aGUgZmlsZSB1cGxvYWQgaXMgY29tcGxldGVcblx0ICogQHBhcmFtIGZpbGVcblx0ICovXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuXHRvbkNvbXBsZXRlKGZpbGUpIHt9XG5cblx0LyoqXG5cdCAqIENhbGxlZCB3aGVuIHRoZSBmaWxlIGlzIGNyZWF0ZWQgaW4gdGhlIGNvbGxlY3Rpb25cblx0ICogQHBhcmFtIGZpbGVcblx0ICovXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuXHRvbkNyZWF0ZShmaWxlKSB7fVxuXG5cdC8qKlxuXHQgKiBDYWxsZWQgd2hlbiBhbiBlcnJvciBvY2N1cnMgZHVyaW5nIGZpbGUgdXBsb2FkXG5cdCAqIEBwYXJhbSBlcnJcblx0ICogQHBhcmFtIGZpbGVcblx0ICovXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuXHRvbkVycm9yKGVyciwgZmlsZSkge1xuXHRcdGNvbnNvbGUuZXJyb3IoYHVmczogJHtlcnIubWVzc2FnZX1gKTtcblx0fVxuXG5cdC8qKlxuXHQgKiBDYWxsZWQgd2hlbiBhIGZpbGUgY2h1bmsgaGFzIGJlZW4gc2VudFxuXHQgKiBAcGFyYW0gZmlsZVxuXHQgKiBAcGFyYW0gcHJvZ3Jlc3MgaXMgYSBmbG9hdCBmcm9tIDAuMCB0byAxLjBcblx0ICovXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuXHRvblByb2dyZXNzKGZpbGUsIHByb2dyZXNzKSB7fVxuXG5cdC8qKlxuXHQgKiBDYWxsZWQgd2hlbiB0aGUgZmlsZSB1cGxvYWQgc3RhcnRzXG5cdCAqIEBwYXJhbSBmaWxlXG5cdCAqL1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcblx0b25TdGFydChmaWxlKSB7fVxuXG5cdC8qKlxuXHQgKiBDYWxsZWQgd2hlbiB0aGUgZmlsZSB1cGxvYWQgc3RvcHNcblx0ICogQHBhcmFtIGZpbGVcblx0ICovXG5cdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuXHRvblN0b3AoZmlsZSkge31cbn1cbiJdfQ==
