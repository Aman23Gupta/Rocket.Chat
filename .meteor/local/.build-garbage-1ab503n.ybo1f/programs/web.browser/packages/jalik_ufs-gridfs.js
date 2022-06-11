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
var options;

var require = meteorInstall({"node_modules":{"meteor":{"jalik:ufs-gridfs":{"ufs-gridfs.js":function module(require,exports,module){

////////////////////////////////////////////////////////////////////////////////////////
//                                                                                    //
// packages/jalik_ufs-gridfs/ufs-gridfs.js                                            //
//                                                                                    //
////////////////////////////////////////////////////////////////////////////////////////
                                                                                      //
module.export({
  GridFSStore: () => GridFSStore
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

class GridFSStore extends UploadFS.Store {
  constructor(options) {
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

    super(options);
    this.chunkSize = parseInt(options.chunkSize);
    this.collectionName = options.collectionName;

    if (Meteor.isServer) {
      let mongo = Package.mongo.MongoInternals.NpmModule;
      let db = Package.mongo.MongoInternals.defaultRemoteCollectionDriver().mongo.db;
      let mongoStore = new mongo.GridFSBucket(db, {
        bucketName: options.collectionName,
        chunkSizeBytes: this.chunkSize
      });
      /**
       * Removes the file
       * @param fileId
       * @param callback
       */

      this.delete = function (fileId, callback) {
        if (typeof callback !== 'function') {
          callback = function (err) {
            if (err) {
              console.log('error');
            }
          };
        }

        const collectionName = options.collectionName + '.files';
        db.collection(collectionName).findOne({
          '_id': fileId
        }).then(file => {
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


      this.getReadStream = function (fileId, file, options) {
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


      this.getWriteStream = function (fileId, file, options) {
        let writeStream = mongoStore.openUploadStreamWithId(fileId, fileId, {
          chunkSizeBytes: this.chunkSize,
          contentType: file.type
        });
        writeStream.on('close', function () {
          writeStream.emit('finish');
        });
        return writeStream;
      };
    }
  }

}

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
