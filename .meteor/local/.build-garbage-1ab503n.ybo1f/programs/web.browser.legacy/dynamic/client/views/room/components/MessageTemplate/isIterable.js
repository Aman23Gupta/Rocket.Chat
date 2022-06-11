function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/components/MessageTemplate/isIterable.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  isIterable: function () {
    return isIterable;
  }
});

function isIterable(obj) {
  // checks for null and undefined
  if (obj == null) {
    return false;
  }

  return typeof obj[Symbol.iterator] === 'function';
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/components/MessageTemplate/ad74d091b4d4af482a7ccdaaf898fe0758d78a02.map
