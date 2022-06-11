function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/getLocalePercentage.ts                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  getLocalePercentage: function () {
    return getLocalePercentage;
  }
});

var getLocalePercentage = function (locale, total, fraction) {
  var decimalCount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2;
  var option = {
    style: 'percent',
    minimumFractionDigits: decimalCount,
    maximumFractionDigits: decimalCount
  };
  return new Intl.NumberFormat(locale, option).format(fraction / total);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/lib/2bc9beffce20c6a4ba44ff0f5f110f61a3920199.map
