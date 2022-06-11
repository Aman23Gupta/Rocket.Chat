function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/minimongo/bson.ts                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _toConsumableArray;

module.link("@babel/runtime/helpers/toConsumableArray", {
  default: function (v) {
    _toConsumableArray = v;
  }
}, 0);
module.export({
  getBSONType: function () {
    return getBSONType;
  },
  compareBSONValues: function () {
    return compareBSONValues;
  }
});
var BSONType;
module.link("./types", {
  BSONType: function (v) {
    BSONType = v;
  }
}, 0);

var getBSONType = function (v) {
  if (typeof v === 'number') {
    return BSONType.Double;
  }

  if (typeof v === 'string') {
    return BSONType.String;
  }

  if (typeof v === 'boolean') {
    return BSONType.Boolean;
  }

  if (Array.isArray(v)) {
    return BSONType.Array;
  }

  if (v === null) {
    return BSONType.Null;
  }

  if (v instanceof RegExp) {
    return BSONType.Regex;
  }

  if (typeof v === 'function') {
    return BSONType.JavaScript;
  }

  if (v instanceof Date) {
    return BSONType.Date;
  }

  if (v instanceof Uint8Array) {
    return BSONType.BinData;
  }

  return BSONType.Object;
};

var getBSONTypeOrder = function (type) {
  switch (type) {
    case BSONType.Null:
      return 0;

    case BSONType.Double:
    case BSONType.Int:
    case BSONType.Long:
      return 1;

    case BSONType.String:
    case BSONType.Symbol:
      return 2;

    case BSONType.Object:
      return 3;

    case BSONType.Array:
      return 4;

    case BSONType.BinData:
      return 5;

    case BSONType.ObjectId:
      return 6;

    case BSONType.Boolean:
      return 7;

    case BSONType.Date:
    case BSONType.Timestamp:
      return 8;

    case BSONType.Regex:
      return 9;

    case BSONType.JavaScript:
    case BSONType.JavaScriptWithScope:
      return 100;

    default:
      return -1;
  }
};

var compareBSONValues = function (a, b) {
  var _Array$prototype$conc, _Array$prototype$conc2;

  if (a === undefined) {
    return b === undefined ? 0 : -1;
  }

  if (b === undefined) {
    return 1;
  }

  var ta = getBSONType(a);
  var oa = getBSONTypeOrder(ta);
  var tb = getBSONType(b);
  var ob = getBSONTypeOrder(tb);

  if (oa !== ob) {
    return oa < ob ? -1 : 1;
  }

  if (ta !== tb) {
    throw Error('Missing type coercion logic in compareBSONValues');
  }

  switch (ta) {
    case BSONType.Double:
      return a - b;

    case BSONType.String:
      return a.localeCompare(b);

    case BSONType.Object:
      return compareBSONValues((_Array$prototype$conc = Array.prototype.concat).call.apply(_Array$prototype$conc, [[]].concat(_toConsumableArray(Object.entries(a)))), (_Array$prototype$conc2 = Array.prototype.concat).call.apply(_Array$prototype$conc2, [[]].concat(_toConsumableArray(Object.entries(b)))));

    case BSONType.Array:
      {
        for (var i = 0;; i++) {
          if (i === a.length) {
            return i === b.length ? 0 : -1;
          }

          if (i === b.length) {
            return 1;
          }

          var s = compareBSONValues(a[i], b[i]);

          if (s !== 0) {
            return s;
          }
        }
      }

    case BSONType.BinData:
      {
        if (a.length !== b.length) {
          return a.length - b.length;
        }

        for (var _i = 0; _i < a.length; _i++) {
          if (a[_i] === b[_i]) {
            continue;
          }

          return a[_i] < b[_i] ? -1 : 1;
        }

        return 0;
      }

    case BSONType.Null:
    case BSONType.Undefined:
      return 0;

    case BSONType.ObjectId:
      return a.toHexString().localeCompare(b.toHexString());

    case BSONType.Boolean:
      return Number(a) - Number(b);

    case BSONType.Date:
      return a.getTime() - b.getTime();

    case BSONType.Regex:
      throw Error('Sorting not supported on regular expression');

    case BSONType.JavaScript:
    case BSONType.JavaScriptWithScope:
      throw Error('Sorting not supported on Javascript code');
  }

  throw Error('Unknown type to sort');
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/lib/minimongo/05f8ea7cfb25e379497cf34a93699d5c35f61cd3.map
