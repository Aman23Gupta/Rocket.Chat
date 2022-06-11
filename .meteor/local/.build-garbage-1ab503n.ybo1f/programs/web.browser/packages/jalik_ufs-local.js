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
var Mongo = Package.mongo.Mongo;
var meteorInstall = Package.modules.meteorInstall;
var Promise = Package.promise.Promise;

/* Package-scope variables */
var options, file;

var require = meteorInstall({"node_modules":{"meteor":{"jalik:ufs-local":{"ufs-local.js":function module(require,exports,module){

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                              //
// packages/jalik_ufs-local/ufs-local.js                                                                        //
//                                                                                                              //
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                //
module.export({
  LocalStore: () => LocalStore
});
let UploadFS;
module.link("meteor/jalik:ufs", {
  UploadFS(v) {
    UploadFS = v;
  }

}, 0);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 1);

class LocalStore extends UploadFS.Store {
  constructor(options) {
    // Default options
    options = Object.assign({
      mode: '0744',
      path: 'ufs/uploads',
      writeMode: '0744'
    }, options); // Check options

    if (typeof options.mode !== 'string') {
      throw new TypeError('LocalStore: mode is not a string');
    }

    if (typeof options.path !== 'string') {
      throw new TypeError('LocalStore: path is not a string');
    }

    if (typeof options.writeMode !== 'string') {
      throw new TypeError('LocalStore: writeMode is not a string');
    }

    super(options);
    let self = this; // Private attributes

    let mode = options.mode;
    let path = options.path;
    let writeMode = options.writeMode;

    if (Meteor.isServer) {
      const fs = Npm.require('fs');

      fs.stat(path, function (err) {
        if (err) {
          const mkdirp = Npm.require('mkdirp'); // Create the directory


          mkdirp(path, {
            mode: mode
          }, function (err) {
            if (err) {
              console.error("LocalStore: cannot create store at ".concat(path, " (").concat(err.message, ")"));
            } else {
              console.info("LocalStore: store created at ".concat(path));
            }
          });
        } else {
          // Set directory permissions
          fs.chmod(path, mode, function (err) {
            err && console.error("LocalStore: cannot set store permissions ".concat(mode, " (").concat(err.message, ")"));
          });
        }
      });
    }
    /**
     * Returns the path or sub path
     * @param file
     * @return {string}
     */


    this.getPath = function (file) {
      return path + (file ? "/".concat(file) : '');
    };

    if (Meteor.isServer) {
      /**
       * Removes the file
       * @param fileId
       * @param callback
       */
      this.delete = function (fileId, callback) {
        let path = this.getFilePath(fileId);

        if (typeof callback !== 'function') {
          callback = function (err) {
            err && console.error("LocalStore: cannot delete file \"".concat(fileId, "\" at ").concat(path, " (").concat(err.message, ")"));
          };
        }

        const fs = Npm.require('fs');

        fs.stat(path, Meteor.bindEnvironment(function (err, stat) {
          if (!err && stat && stat.isFile()) {
            fs.unlink(path, Meteor.bindEnvironment(function () {
              self.getCollection().remove(fileId);
              callback.call(self);
            }));
          }
        }));
      };
      /**
       * Returns the file read stream
       * @param fileId
       * @param file
       * @param options
       * @return {*}
       */


      this.getReadStream = function (fileId, file, options) {
        const fs = Npm.require('fs');

        options = Object.assign({}, options);
        return fs.createReadStream(self.getFilePath(fileId, file), {
          flags: 'r',
          encoding: null,
          autoClose: true,
          start: options.start,
          end: options.end
        });
      };
      /**
       * Returns the file write stream
       * @param fileId
       * @param file
       * @param options
       * @return {*}
       */


      this.getWriteStream = function (fileId, file, options) {
        const fs = Npm.require('fs');

        options = Object.assign({}, options);
        return fs.createWriteStream(self.getFilePath(fileId, file), {
          flags: 'a',
          encoding: null,
          mode: writeMode,
          start: options.start
        });
      };
    }
  }
  /**
   * Returns the file path
   * @param fileId
   * @param file
   * @return {string}
   */


  getFilePath(fileId, file) {
    file = file || this.getCollection().findOne(fileId, {
      fields: {
        extension: 1
      }
    });
    return file && this.getPath(fileId + (file.extension ? ".".concat(file.extension) : ''));
  }

}

// Add store to UFS namespace
UploadFS.store.Local = LocalStore;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});

var exports = require("/node_modules/meteor/jalik:ufs-local/ufs-local.js");

/* Exports */
Package._define("jalik:ufs-local", exports);

})();
