function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/minimongo/comparisons.ts                                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _typeof;

module.link("@babel/runtime/helpers/typeof", {
  default: function (v) {
    _typeof = v;
  }
}, 0);
module.export({
  equals: function () {
    return equals;
  },
  isObject: function () {
    return isObject;
  },
  flatSome: function () {
    return flatSome;
  },
  some: function () {
    return some;
  },
  isEmptyArray: function () {
    return isEmptyArray;
  }
});

var equals = function (a, b) {
  if (a === b) {
    return true;
  }

  if (!a || !b) {
    return false;
  }

  if (_typeof(a) !== 'object' || _typeof(b) !== 'object') {
    return false;
  }

  if (a instanceof Date && b instanceof Date) {
    return a.valueOf() === b.valueOf();
  }

  if (a instanceof Uint8Array && b instanceof Uint8Array) {
    if (a.length !== b.length) {
      return false;
    }

    for (var i = 0; i < a.length; i++) {
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

    for (var _i = 0; _i < a.length; _i++) {
      if (!equals(a[_i], b[_i])) {
        return false;
      }
    }

    return true;
  }

  if (Object.keys(b).length !== Object.keys(a).length) {
    return false;
  }

  for (var _i2 = 0, _Object$keys = Object.keys(a); _i2 < _Object$keys.length; _i2++) {
    var key = _Object$keys[_i2];

    if (!(key in b)) {
      return false;
    }

    if (!equals(a[key], b[key])) {
      return false;
    }
  }

  return true;
};

var isObject = function (value) {
  var type = _typeof(value);

  return !!value && (type === 'object' || type === 'function');
};

var flatSome = function (x, f) {
  if (Array.isArray(x)) {
    return x.some(f);
  }

  return f(x);
};

var some = function (x, f) {
  if (f(x)) {
    return true;
  }

  return Array.isArray(x) && x.some(f);
};

var isEmptyArray = function (value) {
  return Array.isArray(value) && value.length === 0;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/lib/minimongo/9a9a7ddb65e81c98570c7303994bca62a27a9503.map
