function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/minimongo/bson.ts                                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  getBSONType: () => getBSONType,
  compareBSONValues: () => compareBSONValues
});
let BSONType;
module.link("./types", {
  BSONType(v) {
    BSONType = v;
  }

}, 0);

const getBSONType = v => {
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

const getBSONTypeOrder = type => {
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

const compareBSONValues = (a, b) => {
  if (a === undefined) {
    return b === undefined ? 0 : -1;
  }

  if (b === undefined) {
    return 1;
  }

  const ta = getBSONType(a);
  const oa = getBSONTypeOrder(ta);
  const tb = getBSONType(b);
  const ob = getBSONTypeOrder(tb);

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
      return compareBSONValues(Array.prototype.concat.call([], ...Object.entries(a)), Array.prototype.concat.call([], ...Object.entries(b)));

    case BSONType.Array:
      {
        for (let i = 0;; i++) {
          if (i === a.length) {
            return i === b.length ? 0 : -1;
          }

          if (i === b.length) {
            return 1;
          }

          const s = compareBSONValues(a[i], b[i]);

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

        for (let i = 0; i < a.length; i++) {
          if (a[i] === b[i]) {
            continue;
          }

          return a[i] < b[i] ? -1 : 1;
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
//# sourceMappingURL=/dynamic/client/lib/minimongo/f24bdc75a179cebfccc66f92a2f8a720acff3087.map
