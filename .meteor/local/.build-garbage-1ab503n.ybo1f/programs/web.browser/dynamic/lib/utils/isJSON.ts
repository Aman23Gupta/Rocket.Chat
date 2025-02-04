function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// lib/utils/isJSON.ts                                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  isJSON: () => isJSON
});

const isJSON = value => {
  try {
    return !!JSON.parse(value);
  } catch (_unused) {
    return false;
  }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/lib/utils/96683312e150f462f67ebf3379220a8a131c78ce.map
