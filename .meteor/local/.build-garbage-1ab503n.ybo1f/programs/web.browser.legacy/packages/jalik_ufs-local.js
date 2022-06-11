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
var meteorBabelHelpers = Package.modules.meteorBabelHelpers;
var Promise = Package.promise.Promise;
var Symbol = Package['ecmascript-runtime-client'].Symbol;
var Map = Package['ecmascript-runtime-client'].Map;
var Set = Package['ecmascript-runtime-client'].Set;

var require = meteorInstall({"node_modules":{"meteor":{"jalik:ufs-local":{"ufs-local.js":function module(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                               //
// packages/jalik_ufs-local/ufs-local.js                                                                         //
//                                                                                                               //
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                 //
var _assertThisInitialized;

module.link("@babel/runtime/helpers/assertThisInitialized", {
  default: function (v) {
    _assertThisInitialized = v;
  }
}, 0);

var _inheritsLoose;

module.link("@babel/runtime/helpers/inheritsLoose", {
  default: function (v) {
    _inheritsLoose = v;
  }
}, 1);
module.export({
  LocalStore: function () {
    return LocalStore;
  }
});
var UploadFS;
module.link("meteor/jalik:ufs", {
  UploadFS: function (v) {
    UploadFS = v;
  }
}, 0);
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 1);

var LocalStore = /*#__PURE__*/function (_UploadFS$Store) {
  _inheritsLoose(LocalStore, _UploadFS$Store);

  function LocalStore(options) {
    var _this;

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

    _this = _UploadFS$Store.call(this, options) || this;

    var self = _assertThisInitialized(_this); // Private attributes


    var mode = options.mode;
    var path = options.path;
    var writeMode = options.writeMode;

    if (Meteor.isServer) {
      var fs = Npm.require('fs');

      fs.stat(path, function (err) {
        if (err) {
          var mkdirp = Npm.require('mkdirp'); // Create the directory


          mkdirp(path, {
            mode: mode
          }, function (err) {
            if (err) {
              console.error("LocalStore: cannot create store at " + path + " (" + err.message + ")");
            } else {
              console.info("LocalStore: store created at " + path);
            }
          });
        } else {
          // Set directory permissions
          fs.chmod(path, mode, function (err) {
            err && console.error("LocalStore: cannot set store permissions " + mode + " (" + err.message + ")");
          });
        }
      });
    }
    /**
     * Returns the path or sub path
     * @param file
     * @return {string}
     */


    _this.getPath = function (file) {
      return path + (file ? "/" + file : '');
    };

    if (Meteor.isServer) {
      /**
       * Removes the file
       * @param fileId
       * @param callback
       */
      _this.delete = function (fileId, callback) {
        var path = this.getFilePath(fileId);

        if (typeof callback !== 'function') {
          callback = function (err) {
            err && console.error("LocalStore: cannot delete file \"" + fileId + "\" at " + path + " (" + err.message + ")");
          };
        }

        var fs = Npm.require('fs');

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


      _this.getReadStream = function (fileId, file, options) {
        var fs = Npm.require('fs');

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


      _this.getWriteStream = function (fileId, file, options) {
        var fs = Npm.require('fs');

        options = Object.assign({}, options);
        return fs.createWriteStream(self.getFilePath(fileId, file), {
          flags: 'a',
          encoding: null,
          mode: writeMode,
          start: options.start
        });
      };
    }

    return _this;
  }
  /**
   * Returns the file path
   * @param fileId
   * @param file
   * @return {string}
   */


  var _proto = LocalStore.prototype;

  _proto.getFilePath = function () {
    function getFilePath(fileId, file) {
      file = file || this.getCollection().findOne(fileId, {
        fields: {
          extension: 1
        }
      });
      return file && this.getPath(fileId + (file.extension ? "." + file.extension : ''));
    }

    return getFilePath;
  }();

  return LocalStore;
}(UploadFS.Store);

// Add store to UFS namespace
UploadFS.store.Local = LocalStore;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

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
