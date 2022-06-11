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

var require = meteorInstall({"node_modules":{"meteor":{"jalik:ufs-gridfs":{"ufs-gridfs.js":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// packages/jalik_ufs-gridfs/ufs-gridfs.js                                            //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
var _inheritsLoose;

module.link("@babel/runtime/helpers/inheritsLoose", {
  default: function (v) {
    _inheritsLoose = v;
  }
}, 0);
module.export({
  GridFSStore: function () {
    return GridFSStore;
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

var GridFSStore = /*#__PURE__*/function (_UploadFS$Store) {
  _inheritsLoose(GridFSStore, _UploadFS$Store);

  function GridFSStore(options) {
    var _this;

    // Default options
    options = Object.assign({
      chunkSize: 1024 * 255,
      collectionName: 'uploadfs'
    }, options); // Check options

    if (typeof options.chunkSize !== 'number') {
      throw new TypeError('GridFSStore: chunkSize is not a number');
    }

    if (typeof options.collectionName !== 'string') {
      throw new TypeError('GridFSStore: collectionName is not a string');
    }

    _this = _UploadFS$Store.call(this, options) || this;
    _this.chunkSize = parseInt(options.chunkSize);
    _this.collectionName = options.collectionName;

    if (Meteor.isServer) {
      var mongo = Package.mongo.MongoInternals.NpmModule;
      var db = Package.mongo.MongoInternals.defaultRemoteCollectionDriver().mongo.db;
      var mongoStore = new mongo.GridFSBucket(db, {
        bucketName: options.collectionName,
        chunkSizeBytes: _this.chunkSize
      });
      /**
       * Removes the file
       * @param fileId
       * @param callback
       */

      _this.delete = function (fileId, callback) {
        if (typeof callback !== 'function') {
          callback = function (err) {
            if (err) {
              console.log('error');
            }
          };
        }

        var collectionName = options.collectionName + '.files';
        db.collection(collectionName).findOne({
          '_id': fileId
        }).then(function (file) {
          if (file) {
            mongoStore.delete(fileId, callback);
          }
        });
      };
      /**
       * Returns the file read stream
       * @param fileId
       * @param file
       * @param options
       * @return {*}
       */


      _this.getReadStream = function (fileId, file, options) {
        options = Object.assign({}, options);
        return mongoStore.openDownloadStream(fileId, {
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
        var writeStream = mongoStore.openUploadStreamWithId(fileId, fileId, {
          chunkSizeBytes: this.chunkSize,
          contentType: file.type
        });
        writeStream.on('close', function () {
          writeStream.emit('finish');
        });
        return writeStream;
      };
    }

    return _this;
  }

  return GridFSStore;
}(UploadFS.Store);

// Add store to UFS namespace
UploadFS.store.GridFS = GridFSStore;
////////////////////////////////////////////////////////////////////////////////////////

}}}}},{
  "extensions": [
    ".js",
    ".json"
  ]
});

var exports = require("/node_modules/meteor/jalik:ufs-gridfs/ufs-gridfs.js");

/* Exports */
Package._define("jalik:ufs-gridfs", exports);

})();
