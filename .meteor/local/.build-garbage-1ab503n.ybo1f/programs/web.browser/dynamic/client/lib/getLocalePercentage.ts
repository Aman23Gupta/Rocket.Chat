function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/lib/getLocalePercentage.ts                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  getLocalePercentage: () => getLocalePercentage
});

const getLocalePercentage = function (locale, total, fraction) {
  let decimalCount = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 2;
  const option = {
    style: 'percent',
    minimumFractionDigits: decimalCount,
    maximumFractionDigits: decimalCount
  };
  return new Intl.NumberFormat(locale, option).format(fraction / total);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/lib/3dfbb00515f975b10ee619173639210af2f984f9.map
