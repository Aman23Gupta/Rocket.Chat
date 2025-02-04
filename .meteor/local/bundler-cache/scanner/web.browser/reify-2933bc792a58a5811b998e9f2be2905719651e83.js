let group;module.link('./_group.js',{default(v){group=v}},0);let has;module.link('./_has.js',{default(v){has=v}},1);


// Counts instances of an object that group by a certain criterion. Pass
// either a string attribute to count by, or a function that returns the
// criterion.
module.exportDefault(group(function(result, value, key) {
  if (has(result, key)) result[key]++; else result[key] = 1;
}));
