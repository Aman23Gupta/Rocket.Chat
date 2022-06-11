function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/utils/lib/mimeTypes.js                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  mime: function () {
    return mime;
  }
});
var mime;
module.link("mime-type/with-db", {
  "default": function (v) {
    mime = v;
  }
}, 0);
mime.types.wav = 'audio/wav';
mime.define('image/vnd.microsoft.icon', {
  extensions: ['ico']
}, mime.dupAppend);
mime.define('image/x-icon', {
  extensions: ['ico']
}, mime.dupAppend);
mime.types.ico = 'image/x-icon';
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/utils/lib/c1ca72a1be7a320ad09eec562f20a15958d31ccf.map
