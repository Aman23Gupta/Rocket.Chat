function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/minimongo/query.ts                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);

var _createForOfIteratorHelperLoose;

module.link("@babel/runtime/helpers/createForOfIteratorHelperLoose", {
  default: function (v) {
    _createForOfIteratorHelperLoose = v;
  }
}, 1);

var _typeof;

module.link("@babel/runtime/helpers/typeof", {
  default: function (v) {
    _typeof = v;
  }
}, 2);
module.export({
  compileDocumentSelector: function () {
    return compileDocumentSelector;
  }
});
var compareBSONValues, getBSONType;
module.link("./bson", {
  compareBSONValues: function (v) {
    compareBSONValues = v;
  },
  getBSONType: function (v) {
    getBSONType = v;
  }
}, 0);
var equals, flatSome, isObject, some;
module.link("./comparisons", {
  equals: function (v) {
    equals = v;
  },
  flatSome: function (v) {
    flatSome = v;
  },
  isObject: function (v) {
    isObject = v;
  },
  some: function (v) {
    some = v;
  }
}, 1);
var createLookupFunction;
module.link("./lookups", {
  createLookupFunction: function (v) {
    createLookupFunction = v;
  }
}, 2);

var isArrayOfFields = function (values) {
  return values.every(function (value) {
    return ['number', 'string', 'symbol'].includes(_typeof(value));
  });
};

var $in = function (operand, _options) {
  var index = null;

  if (isArrayOfFields(operand)) {
    index = {};

    for (var _iterator = _createForOfIteratorHelperLoose(operand), _step; !(_step = _iterator()).done;) {
      var operandElement = _step.value;
      index[operandElement] = operandElement;
    }
  }

  return function (value) {
    return some(value, function (x) {
      if (typeof x === 'string' && index !== null) {
        return !!index[x];
      }

      return operand.some(function (operandElement) {
        return equals(operandElement, x);
      });
    });
  };
};

var $nin = function (operand, _options) {
  var isIn = $in(operand, undefined);
  return function (value) {
    if (value === undefined) {
      return true;
    }

    return !isIn(value);
  };
};

var $all = function (operand, _options) {
  return function (value) {
    if (!Array.isArray(value)) {
      return false;
    }

    return operand.every(function (operandElement) {
      return value.some(function (valueElement) {
        return equals(operandElement, valueElement);
      });
    });
  };
};

var $lt = function (operand, _options) {
  return function (value) {
    return flatSome(value, function (x) {
      return compareBSONValues(x, operand) < 0;
    });
  };
};

var $lte = function (operand, _options) {
  return function (value) {
    return flatSome(value, function (x) {
      return compareBSONValues(x, operand) <= 0;
    });
  };
};

var $gt = function (operand, _options) {
  return function (value) {
    return flatSome(value, function (x) {
      return compareBSONValues(x, operand) > 0;
    });
  };
};

var $gte = function (operand, _options) {
  return function (value) {
    return flatSome(value, function (x) {
      return compareBSONValues(x, operand) >= 0;
    });
  };
};

var $ne = function (operand, _options) {
  return function (value) {
    return !some(value, function (x) {
      return equals(x, operand);
    });
  };
};

var $exists = function (operand, _options) {
  return function (value) {
    return operand === (value !== undefined);
  };
};

var $mod = function (_ref, _options) {
  var _ref2 = _slicedToArray(_ref, 2),
      divisor = _ref2[0],
      remainder = _ref2[1];

  return function (value) {
    return flatSome(value, function (x) {
      return Number(x) % divisor === remainder;
    });
  };
};

var $size = function (operand, _options) {
  return function (value) {
    return Array.isArray(value) && operand === value.length;
  };
};

var $type = function (operand, _options) {
  return function (value) {
    if (value === undefined) {
      return false;
    }

    return flatSome(value, function (x) {
      return getBSONType(x) === operand;
    });
  };
};

var $regex = function (operand, options) {
  var regex;

  if (options !== undefined) {
    var regexSource = operand instanceof RegExp ? operand.source : operand;
    regex = new RegExp(regexSource, options);
  } else if (!(operand instanceof RegExp)) {
    regex = new RegExp(operand);
  }

  return function (value) {
    if (value === undefined) {
      return false;
    }

    return flatSome(value, function (x) {
      return regex.test(String(x));
    });
  };
};

var $elemMatch = function (operand, _options) {
  var matcher = compileDocumentSelector(operand);
  return function (value) {
    if (!Array.isArray(value)) {
      return false;
    }

    return value.some(function (x) {
      return matcher(x);
    });
  };
};

var $not = function (operand, _options) {
  var matcher = compileValueSelector(operand);
  return function (value) {
    return !matcher(value);
  };
};

var dummyOperator = function (_operand, _options) {
  return function (_value) {
    return true;
  };
};

var $options = dummyOperator;
var $near = dummyOperator;
var $geoIntersects = dummyOperator;
var valueOperators = {
  $in: $in,
  $nin: $nin,
  $all: $all,
  $lt: $lt,
  $lte: $lte,
  $gt: $gt,
  $gte: $gte,
  $ne: $ne,
  $exists: $exists,
  $mod: $mod,
  $size: $size,
  $type: $type,
  $regex: $regex,
  $elemMatch: $elemMatch,
  $not: $not,
  $options: $options,
  $near: $near,
  $geoIntersects: $geoIntersects
};

var $and = function (subSelector) {
  var subSelectorFunctions = subSelector.map(compileDocumentSelector);
  return function (doc) {
    return subSelectorFunctions.every(function (f) {
      return f(doc);
    });
  };
};

var $or = function (subSelector) {
  var subSelectorFunctions = subSelector.map(compileDocumentSelector);
  return function (doc) {
    return subSelectorFunctions.some(function (f) {
      return f(doc);
    });
  };
};

var $nor = function (subSelector) {
  var subSelectorFunctions = subSelector.map(compileDocumentSelector);
  return function (doc) {
    return subSelectorFunctions.every(function (f) {
      return !f(doc);
    });
  };
};

var $where = function (selectorValue) {
  var fn = selectorValue instanceof Function ? selectorValue : Function("return " + selectorValue);
  return function (doc) {
    return !!fn.call(doc);
  };
};

var logicalOperators = {
  $and: $and,
  $or: $or,
  $nor: $nor,
  $where: $where
};

var isValueOperator = function (operator) {
  return operator in valueOperators;
};

var isLogicalOperator = function (operator) {
  return operator in logicalOperators;
};

var hasValueOperators = function (valueSelector) {
  return Object.keys(valueSelector).every(function (key) {
    return key.slice(0, 1) === '$';
  });
};

var compileUndefinedOrNullSelector = function () {
  return function (value) {
    return flatSome(value, function (x) {
      return x === undefined || x === null;
    });
  };
};

var compilePrimitiveSelector = function (primitive) {
  return function (value) {
    return flatSome(value, function (x) {
      return x === primitive;
    });
  };
};

var compileRegexSelector = function (regex) {
  return function (value) {
    if (value === undefined) {
      return false;
    }

    return flatSome(value, function (x) {
      return regex.test(String(x));
    });
  };
};

var compileArraySelector = function (expected) {
  return function (value) {
    if (!Array.isArray(value)) {
      return false;
    }

    return some(value, function (x) {
      return equals(expected, x);
    });
  };
};

var compileValueOperatorsSelector = function (expression) {
  var operatorFunctions = [];

  for (var _i = 0, _Object$keys = Object.keys(expression); _i < _Object$keys.length; _i++) {
    var operator = _Object$keys[_i];

    if (!isValueOperator(operator)) {
      continue;
    }

    var operand = expression[operator];
    var operation = valueOperators[operator];
    operatorFunctions.push(operation(operand, expression.$options));
  }

  return function (value) {
    return operatorFunctions.every(function (f) {
      return f(value);
    });
  };
};

var compileValueSelector = function (valueSelector) {
  if (valueSelector === undefined || valueSelector === null) {
    return compileUndefinedOrNullSelector();
  }

  if (!isObject(valueSelector)) {
    return compilePrimitiveSelector(valueSelector);
  }

  if (valueSelector instanceof RegExp) {
    return compileRegexSelector(valueSelector);
  }

  if (Array.isArray(valueSelector)) {
    return compileArraySelector(valueSelector);
  }

  if (hasValueOperators(valueSelector)) {
    return compileValueOperatorsSelector(valueSelector);
  }

  return function (value) {
    return flatSome(value, function (x) {
      return equals(valueSelector, x);
    });
  };
};

var compileDocumentSelector = function (docSelector) {
  var perKeySelectors = Object.entries(docSelector).map(function (_ref3) {
    var _ref4 = _slicedToArray(_ref3, 2),
        key = _ref4[0],
        subSelector = _ref4[1];

    if (subSelector === undefined) {
      return function () {
        return true;
      };
    }

    if (isLogicalOperator(key)) {
      switch (key) {
        case '$and':
          return $and(subSelector);

        case '$or':
          return $or(subSelector);

        case '$nor':
          return $nor(subSelector);

        case '$where':
          return $where(subSelector);
      }
    }

    var lookUpByIndex = createLookupFunction(key);
    var valueSelectorFunc = compileValueSelector(subSelector);
    return function (doc) {
      var branchValues = lookUpByIndex(doc);
      return branchValues.some(valueSelectorFunc);
    };
  });
  return function (doc) {
    return perKeySelectors.every(function (f) {
      return f(doc);
    });
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/lib/minimongo/738d025734c2c6163392531026b3d3a048f2cbe6.map
