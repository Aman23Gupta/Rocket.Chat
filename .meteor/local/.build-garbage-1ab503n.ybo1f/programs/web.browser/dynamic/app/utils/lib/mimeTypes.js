function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/utils/lib/mimeTypes.js                                                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  mime: () => mime
});
let mime;
module.link("mime-type/with-db", {
  default(v) {
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
//# sourceMappingURL=/dynamic/app/utils/lib/84ac57d9d15757bfb1d11cb6bbb8c148effa6d74.map
