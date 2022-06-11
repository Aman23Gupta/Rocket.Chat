function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/minimongo/lookups.ts                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  createLookupFunction: () => createLookupFunction
});
let isEmptyArray;
module.link("./comparisons", {
  isEmptyArray(v) {
    isEmptyArray = v;
  }

}, 0);

const isNullDocument = doc => doc === undefined || doc === null;

const isRecordDocument = doc => doc !== undefined && doc !== null && (typeof doc === 'object' || typeof doc === 'function');

const isIndexedByNumber = (value, isIndexedByNumber) => Array.isArray(value) || isIndexedByNumber;

const createLookupFunction = key => {
  const [first, rest] = key.split(/\.(.+)/);

  if (!rest) {
    return doc => {
      if (isNullDocument(doc) || !isRecordDocument(doc)) {
        return [undefined];
      }

      return [doc[first]];
    };
  }

  const lookupRest = createLookupFunction(rest);
  const nextIsNumeric = /^\d+(\.|$)/.test(rest);
  return doc => {
    if (isNullDocument(doc) || !isRecordDocument(doc)) {
      return [undefined];
    }

    const firstLevel = doc[first];

    if (isEmptyArray(firstLevel)) {
      return [undefined];
    }

    const docs = isIndexedByNumber(firstLevel, nextIsNumeric) ? firstLevel : [firstLevel];
    return Array.prototype.concat.apply([], docs.map(lookupRest));
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/lib/minimongo/b497e019d80110135b56e939181abc0dd1260832.map
