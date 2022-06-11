function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/viewLogs/ansispan.ts                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  ansispan: () => ansispan
});
const foregroundColors = {
  30: 'gray',
  31: 'red',
  32: 'lime',
  33: 'yellow',
  34: '#6B98FF',
  35: '#FF00FF',
  36: 'cyan',
  37: 'white'
};

const ansispan = str => {
  str = str.replace(/\s/g, '&nbsp;').replace(/(\\n|\n)/g, '<br>').replace(/>/g, '&gt;').replace(/</g, '&lt;').replace(/(.\d{8}-\d\d:\d\d:\d\d\.\d\d\d\(?.{0,2}\)?)/, '<span>$1</span>').replace(/\033\[1m/g, '<strong>').replace(/\033\[22m/g, '</strong>').replace(/\033\[3m/g, '<em>').replace(/\033\[23m/g, '</em>').replace(/\033\[m/g, '</span>').replace(/\033\[0m/g, '</span>').replace(/\033\[39m/g, '</span>');
  return Object.entries(foregroundColors).reduce((str, _ref) => {
    let [ansiCode, color] = _ref;
    const span = "<span style=\"color: ".concat(color, "\">");
    return str.replace(new RegExp("\\033\\[".concat(ansiCode, "m"), 'g'), span).replace(new RegExp("\\033\\[0;".concat(ansiCode, "m"), 'g'), span);
  }, str);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/viewLogs/d2c7d90ed1863b70e01f5301f28d3a242d6ba7b0.map
