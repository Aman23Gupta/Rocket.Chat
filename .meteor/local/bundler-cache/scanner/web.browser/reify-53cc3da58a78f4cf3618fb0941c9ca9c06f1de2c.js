module.export({months:()=>months});let interval;module.link("./interval.js",{default(v){interval=v}},0);

var month = interval(function(date) {
  date.setDate(1);
  date.setHours(0, 0, 0, 0);
}, function(date, step) {
  date.setMonth(date.getMonth() + step);
}, function(start, end) {
  return end.getMonth() - start.getMonth() + (end.getFullYear() - start.getFullYear()) * 12;
}, function(date) {
  return date.getMonth();
});

module.exportDefault(month);
var months = month.range;
