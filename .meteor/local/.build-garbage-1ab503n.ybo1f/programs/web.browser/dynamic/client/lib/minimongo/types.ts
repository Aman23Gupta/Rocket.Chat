function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/minimongo/types.ts                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  BSONType: () => BSONType
});
var BSONType;

(function (BSONType) {
  BSONType[BSONType["Double"] = 1] = "Double";
  BSONType[BSONType["String"] = 2] = "String";
  BSONType[BSONType["Object"] = 3] = "Object";
  BSONType[BSONType["Array"] = 4] = "Array";
  BSONType[BSONType["BinData"] = 5] = "BinData";
  /** @deprecated */

  BSONType[BSONType["Undefined"] = 6] = "Undefined";
  BSONType[BSONType["ObjectId"] = 7] = "ObjectId";
  BSONType[BSONType["Boolean"] = 8] = "Boolean";
  BSONType[BSONType["Date"] = 9] = "Date";
  BSONType[BSONType["Null"] = 10] = "Null";
  BSONType[BSONType["Regex"] = 11] = "Regex";
  /** @deprecated */

  BSONType[BSONType["DBPointer"] = 12] = "DBPointer";
  BSONType[BSONType["JavaScript"] = 13] = "JavaScript";
  /** @deprecated */

  BSONType[BSONType["Symbol"] = 14] = "Symbol";
  BSONType[BSONType["JavaScriptWithScope"] = 15] = "JavaScriptWithScope";
  BSONType[BSONType["Int"] = 16] = "Int";
  BSONType[BSONType["Timestamp"] = 17] = "Timestamp";
  BSONType[BSONType["Long"] = 18] = "Long";
  BSONType[BSONType["Decimal"] = 19] = "Decimal";
  BSONType[BSONType["MinKey"] = -1] = "MinKey";
  BSONType[BSONType["MaxKey"] = 127] = "MaxKey";
})(BSONType || module.runSetters(BSONType = {}, ["BSONType"]));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/lib/minimongo/9810730e685770385bf4417538ca9c949e51bcaa.map
