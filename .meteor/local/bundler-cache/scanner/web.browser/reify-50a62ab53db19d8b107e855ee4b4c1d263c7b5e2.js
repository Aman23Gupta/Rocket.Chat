module.exportDefault(function(a, b) {
  return b < a ? -1 : b > a ? 1 : b >= a ? 0 : NaN;
});
