function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/minimongo/lookups.ts                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);

var _typeof;

module.link("@babel/runtime/helpers/typeof", {
  default: function (v) {
    _typeof = v;
  }
}, 1);
module.export({
  createLookupFunction: function () {
    return createLookupFunction;
  }
});
var isEmptyArray;
module.link("./comparisons", {
  isEmptyArray: function (v) {
    isEmptyArray = v;
  }
}, 0);

var isNullDocument = function (doc) {
  return doc === undefined || doc === null;
};

var isRecordDocument = function (doc) {
  return doc !== undefined && doc !== null && (_typeof(doc) === 'object' || typeof doc === 'function');
};

var isIndexedByNumber = function (value, isIndexedByNumber) {
  return Array.isArray(value) || isIndexedByNumber;
};

var createLookupFunction = function (key) {
  var _key$split = key.split(/\.(.+)/),
      _key$split2 = _slicedToArray(_key$split, 2),
      first = _key$split2[0],
      rest = _key$split2[1];

  if (!rest) {
    return function (doc) {
      if (isNullDocument(doc) || !isRecordDocument(doc)) {
        return [undefined];
      }

      return [doc[first]];
    };
  }

  var lookupRest = createLookupFunction(rest);
  var nextIsNumeric = /^\d+(\.|$)/.test(rest);
  return function (doc) {
    if (isNullDocument(doc) || !isRecordDocument(doc)) {
      return [undefined];
    }

    var firstLevel = doc[first];

    if (isEmptyArray(firstLevel)) {
      return [undefined];
    }

    var docs = isIndexedByNumber(firstLevel, nextIsNumeric) ? firstLevel : [firstLevel];
    return Array.prototype.concat.apply([], docs.map(lookupRest));
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/lib/minimongo/45020896d352dd015d11debe5f9260da087880f0.map
