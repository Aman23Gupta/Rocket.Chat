module.export({default:()=>sequentialQuantile});let ascending,bisect,quantile;module.link("d3-array",{ascending(v){ascending=v},bisect(v){bisect=v},quantile(v){quantile=v}},0);let identity;module.link("./continuous.js",{identity(v){identity=v}},1);let initInterpolator;module.link("./init.js",{initInterpolator(v){initInterpolator=v}},2);



function sequentialQuantile() {
  var domain = [],
      interpolator = identity;

  function scale(x) {
    if (x != null && !isNaN(x = +x)) return interpolator((bisect(domain, x, 1) - 1) / (domain.length - 1));
  }

  scale.domain = function(_) {
    if (!arguments.length) return domain.slice();
    domain = [];
    for (let d of _) if (d != null && !isNaN(d = +d)) domain.push(d);
    domain.sort(ascending);
    return scale;
  };

  scale.interpolator = function(_) {
    return arguments.length ? (interpolator = _, scale) : interpolator;
  };

  scale.range = function() {
    return domain.map((d, i) => interpolator(i / (domain.length - 1)));
  };

  scale.quantiles = function(n) {
    return Array.from({length: n + 1}, (_, i) => quantile(domain, i / n));
  };

  scale.copy = function() {
    return sequentialQuantile(interpolator).domain(domain);
  };

  return initInterpolator.apply(scale, arguments);
}
