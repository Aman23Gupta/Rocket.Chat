function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/minimongo/sort.ts                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _toConsumableArray;

module.link("@babel/runtime/helpers/toConsumableArray", {
  default: function (v) {
    _toConsumableArray = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);
module.export({
  compileSort: function () {
    return compileSort;
  }
});
var compareBSONValues;
module.link("./bson", {
  compareBSONValues: function (v) {
    compareBSONValues = v;
  }
}, 0);
var isEmptyArray;
module.link("./comparisons", {
  isEmptyArray: function (v) {
    isEmptyArray = v;
  }
}, 1);
var createLookupFunction;
module.link("./lookups", {
  createLookupFunction: function (v) {
    createLookupFunction = v;
  }
}, 2);

var createSortSpecParts = function (spec) {
  if (Array.isArray(spec)) {
    return spec.map(function (value) {
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

  return Object.entries(spec).map(function (_ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];

    return {
      lookup: createLookupFunction(key),
      ascending: value >= 0
    };
  });
};

var reduceValue = function (branchValues, ascending) {
  var _ref3;

  return (_ref3 = []).concat.apply(_ref3, _toConsumableArray(branchValues.map(function (branchValue) {
    if (!Array.isArray(branchValue)) {
      return [branchValue];
    }

    if (isEmptyArray(branchValue)) {
      return [undefined];
    }

    return branchValue;
  }))).reduce(function (reduced, value) {
    var cmp = compareBSONValues(reduced, value);

    if (ascending && cmp > 0 || !ascending && cmp < 0) {
      return value;
    }

    return reduced;
  });
};

var compileSort = function (spec) {
  var sortSpecParts = createSortSpecParts(spec);

  if (sortSpecParts.length === 0) {
    return function () {
      return 0;
    };
  }

  return function (a, b) {
    for (var i = 0; i < sortSpecParts.length; ++i) {
      var specPart = sortSpecParts[i];
      var aValue = reduceValue(specPart.lookup(a), specPart.ascending);
      var bValue = reduceValue(specPart.lookup(b), specPart.ascending);
      var compare = compareBSONValues(aValue, bValue);

      if (compare !== 0) {
        return specPart.ascending ? compare : -compare;
      }
    }

    return 0;
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/lib/minimongo/ae47f728b56ab582c862a6762ed66127778c21ac.map
