function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/minimongo/query.ts                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  compileDocumentSelector: () => compileDocumentSelector
});
let compareBSONValues, getBSONType;
module.link("./bson", {
  compareBSONValues(v) {
    compareBSONValues = v;
  },

  getBSONType(v) {
    getBSONType = v;
  }

}, 0);
let equals, flatSome, isObject, some;
module.link("./comparisons", {
  equals(v) {
    equals = v;
  },

  flatSome(v) {
    flatSome = v;
  },

  isObject(v) {
    isObject = v;
  },

  some(v) {
    some = v;
  }

}, 1);
let createLookupFunction;
module.link("./lookups", {
  createLookupFunction(v) {
    createLookupFunction = v;
  }

}, 2);

const isArrayOfFields = values => values.every(value => ['number', 'string', 'symbol'].includes(typeof value));

const $in = (operand, _options) => {
  let index = null;

  if (isArrayOfFields(operand)) {
    index = {};

    for (const operandElement of operand) {
      index[operandElement] = operandElement;
    }
  }

  return value => some(value, x => {
    if (typeof x === 'string' && index !== null) {
      return !!index[x];
    }

    return operand.some(operandElement => equals(operandElement, x));
  });
};

const $nin = (operand, _options) => {
  const isIn = $in(operand, undefined);
  return value => {
    if (value === undefined) {
      return true;
    }

    return !isIn(value);
  };
};

const $all = (operand, _options) => value => {
  if (!Array.isArray(value)) {
    return false;
  }

  return operand.every(operandElement => value.some(valueElement => equals(operandElement, valueElement)));
};

const $lt = (operand, _options) => value => flatSome(value, x => compareBSONValues(x, operand) < 0);

const $lte = (operand, _options) => value => flatSome(value, x => compareBSONValues(x, operand) <= 0);

const $gt = (operand, _options) => value => flatSome(value, x => compareBSONValues(x, operand) > 0);

const $gte = (operand, _options) => value => flatSome(value, x => compareBSONValues(x, operand) >= 0);

const $ne = (operand, _options) => value => !some(value, x => equals(x, operand));

const $exists = (operand, _options) => value => operand === (value !== undefined);

const $mod = (_ref, _options) => {
  let [divisor, remainder] = _ref;
  return value => flatSome(value, x => Number(x) % divisor === remainder);
};

const $size = (operand, _options) => value => Array.isArray(value) && operand === value.length;

const $type = (operand, _options) => value => {
  if (value === undefined) {
    return false;
  }

  return flatSome(value, x => getBSONType(x) === operand);
};

const $regex = (operand, options) => {
  let regex;

  if (options !== undefined) {
    const regexSource = operand instanceof RegExp ? operand.source : operand;
    regex = new RegExp(regexSource, options);
  } else if (!(operand instanceof RegExp)) {
    regex = new RegExp(operand);
  }

  return value => {
    if (value === undefined) {
      return false;
    }

    return flatSome(value, x => regex.test(String(x)));
  };
};

const $elemMatch = (operand, _options) => {
  const matcher = compileDocumentSelector(operand);
  return value => {
    if (!Array.isArray(value)) {
      return false;
    }

    return value.some(x => matcher(x));
  };
};

const $not = (operand, _options) => {
  const matcher = compileValueSelector(operand);
  return value => !matcher(value);
};

const dummyOperator = (_operand, _options) => _value => true;

const $options = dummyOperator;
const $near = dummyOperator;
const $geoIntersects = dummyOperator;
const valueOperators = {
  $in,
  $nin,
  $all,
  $lt,
  $lte,
  $gt,
  $gte,
  $ne,
  $exists,
  $mod,
  $size,
  $type,
  $regex,
  $elemMatch,
  $not,
  $options,
  $near,
  $geoIntersects
};

const $and = subSelector => {
  const subSelectorFunctions = subSelector.map(compileDocumentSelector);
  return doc => subSelectorFunctions.every(f => f(doc));
};

const $or = subSelector => {
  const subSelectorFunctions = subSelector.map(compileDocumentSelector);
  return doc => subSelectorFunctions.some(f => f(doc));
};

const $nor = subSelector => {
  const subSelectorFunctions = subSelector.map(compileDocumentSelector);
  return doc => subSelectorFunctions.every(f => !f(doc));
};

const $where = selectorValue => {
  const fn = selectorValue instanceof Function ? selectorValue : Function("return ".concat(selectorValue));
  return doc => !!fn.call(doc);
};

const logicalOperators = {
  $and,
  $or,
  $nor,
  $where
};

const isValueOperator = operator => operator in valueOperators;

const isLogicalOperator = operator => operator in logicalOperators;

const hasValueOperators = valueSelector => Object.keys(valueSelector).every(key => key.slice(0, 1) === '$');

const compileUndefinedOrNullSelector = () => value => flatSome(value, x => x === undefined || x === null);

const compilePrimitiveSelector = primitive => value => flatSome(value, x => x === primitive);

const compileRegexSelector = regex => value => {
  if (value === undefined) {
    return false;
  }

  return flatSome(value, x => regex.test(String(x)));
};

const compileArraySelector = expected => value => {
  if (!Array.isArray(value)) {
    return false;
  }

  return some(value, x => equals(expected, x));
};

const compileValueOperatorsSelector = expression => {
  const operatorFunctions = [];

  for (const operator of Object.keys(expression)) {
    if (!isValueOperator(operator)) {
      continue;
    }

    const operand = expression[operator];
    const operation = valueOperators[operator];
    operatorFunctions.push(operation(operand, expression.$options));
  }

  return value => operatorFunctions.every(f => f(value));
};

const compileValueSelector = valueSelector => {
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

  return value => flatSome(value, x => equals(valueSelector, x));
};

const compileDocumentSelector = docSelector => {
  const perKeySelectors = Object.entries(docSelector).map(_ref2 => {
    let [key, subSelector] = _ref2;

    if (subSelector === undefined) {
      return () => true;
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

    const lookUpByIndex = createLookupFunction(key);
    const valueSelectorFunc = compileValueSelector(subSelector);
    return doc => {
      const branchValues = lookUpByIndex(doc);
      return branchValues.some(valueSelectorFunc);
    };
  });
  return doc => perKeySelectors.every(f => f(doc));
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/lib/minimongo/5611e2cd0ac298cf5d5e3ee6009712dc922b9f97.map
