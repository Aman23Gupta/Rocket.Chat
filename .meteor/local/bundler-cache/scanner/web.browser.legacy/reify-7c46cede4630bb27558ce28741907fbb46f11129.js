module.export({default:function(){return isLastDayOfMonth}});var toDate;module.link("../toDate/index.js",{default:function(v){toDate=v}},0);var endOfDay;module.link("../endOfDay/index.js",{default:function(v){endOfDay=v}},1);var endOfMonth;module.link("../endOfMonth/index.js",{default:function(v){endOfMonth=v}},2);var requiredArgs;module.link("../_lib/requiredArgs/index.js",{default:function(v){requiredArgs=v}},3);



/**
 * @name isLastDayOfMonth
 * @category Month Helpers
 * @summary Is the given date the last day of a month?
 *
 * @description
 * Is the given date the last day of a month?
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is the last day of a month
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Is 28 February 2014 the last day of a month?
 * var result = isLastDayOfMonth(new Date(2014, 1, 28))
 * //=> true
 */

function isLastDayOfMonth(dirtyDate) {
  requiredArgs(1, arguments);
  var date = toDate(dirtyDate);
  return endOfDay(date).getTime() === endOfMonth(date).getTime();
}