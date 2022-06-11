function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/minimongo/sort.ts                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  compileSort: () => compileSort
});
let compareBSONValues;
module.link("./bson", {
  compareBSONValues(v) {
    compareBSONValues = v;
  }

}, 0);
let isEmptyArray;
module.link("./comparisons", {
  isEmptyArray(v) {
    isEmptyArray = v;
  }

}, 1);
let createLookupFunction;
module.link("./lookups", {
  createLookupFunction(v) {
    createLookupFunction = v;
  }

}, 2);

const createSortSpecParts = spec => {
  if (Array.isArray(spec)) {
    return spec.map(value => {
      if (typeof value === 'string') {
        return {
          lookup: createLookupFunction(value),
          ascending: true
        };
      }

      return {
        lookup: createLookupFunction(value[0]),
        ascending: value[1] !== 'desc'
      };
    });
  }

  return Object.entries(spec).map(_ref => {
    let [key, value] = _ref;
    return {
      lookup: createLookupFunction(key),
      ascending: value >= 0
    };
  });
};

const reduceValue = (branchValues, ascending) => [].concat(...branchValues.map(branchValue => {
  if (!Array.isArray(branchValue)) {
    return [branchValue];
  }

  if (isEmptyArray(branchValue)) {
    return [undefined];
  }

  return branchValue;
})).reduce((reduced, value) => {
  const cmp = compareBSONValues(reduced, value);

  if (ascending && cmp > 0 || !ascending && cmp < 0) {
    return value;
  }

  return reduced;
});

const compileSort = spec => {
  const sortSpecParts = createSortSpecParts(spec);

  if (sortSpecParts.length === 0) {
    return () => 0;
  }

  return (a, b) => {
    for (let i = 0; i < sortSpecParts.length; ++i) {
      const specPart = sortSpecParts[i];
      const aValue = reduceValue(specPart.lookup(a), specPart.ascending);
      const bValue = reduceValue(specPart.lookup(b), specPart.ascending);
      const compare = compareBSONValues(aValue, bValue);

      if (compare !== 0) {
        return specPart.ascending ? compare : -compare;
      }
    }

    return 0;
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/lib/minimongo/47d2d2bef48744bdc80331dd9a428167e1634f2e.map
