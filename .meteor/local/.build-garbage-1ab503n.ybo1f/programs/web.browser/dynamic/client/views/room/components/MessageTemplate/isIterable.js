function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/components/MessageTemplate/isIterable.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  isIterable: () => isIterable
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
//# sourceMappingURL=/dynamic/client/views/room/components/MessageTemplate/20b39c0b1f68a3f940fd9e503c44920695a40857.map
