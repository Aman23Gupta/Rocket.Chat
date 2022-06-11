function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/minimongo/comparisons.ts                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  equals: () => equals,
  isObject: () => isObject,
  flatSome: () => flatSome,
  some: () => some,
  isEmptyArray: () => isEmptyArray
});

const equals = (a, b) => {
  if (a === b) {
    return true;
  }

  if (!a || !b) {
    return false;
  }

  if (typeof a !== 'object' || typeof b !== 'object') {
    return false;
  }

  if (a instanceof Date && b instanceof Date) {
    return a.valueOf() === b.valueOf();
  }

  if (a instanceof Uint8Array && b instanceof Uint8Array) {
    if (a.length !== b.length) {
      return false;
    }

    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) {
        return false;
      }
    }

    return true;
  }

  if (Array.isArray(a)) {
    if (!Array.isArray(b)) {
      return false;
    }

    if (a.length !== b.length) {
      return false;
    }

    for (let i = 0; i < a.length; i++) {
      if (!equals(a[i], b[i])) {
        return false;
      }
    }

    return true;
  }

  if (Object.keys(b).length !== Object.keys(a).length) {
    return false;
  }

  for (const key of Object.keys(a)) {
    if (!(key in b)) {
      return false;
    }

    if (!equals(a[key], b[key])) {
      return false;
    }
  }

  return true;
};

const isObject = value => {
  const type = typeof value;
  return !!value && (type === 'object' || type === 'function');
};

const flatSome = (x, f) => {
  if (Array.isArray(x)) {
    return x.some(f);
  }

  return f(x);
};

const some = (x, f) => {
  if (f(x)) {
    return true;
  }

  return Array.isArray(x) && x.some(f);
};

const isEmptyArray = value => Array.isArray(value) && value.length === 0;
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/lib/minimongo/5516b074298e306e9dd6bb27e4c2c7ffbf4cae4c.map
