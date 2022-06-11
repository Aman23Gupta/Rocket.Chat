function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/viewLogs/ansispan.ts                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
module.export({
  ansispan: function () {
    return ansispan;
  }
});
var foregroundColors = {
  30: 'gray',
  31: 'red',
  32: 'lime',
  33: 'yellow',
  34: '#6B98FF',
  35: '#FF00FF',
  36: 'cyan',
  37: 'white'
};

var ansispan = function (str) {
  str = str.replace(/\s/g, '&nbsp;').replace(/(\\n|\n)/g, '<br>').replace(/>/g, '&gt;').replace(/</g, '&lt;').replace(/(.\d{8}-\d\d:\d\d:\d\d\.\d\d\d\(?.{0,2}\)?)/, '<span>$1</span>').replace(/\033\[1m/g, '<strong>').replace(/\033\[22m/g, '</strong>').replace(/\033\[3m/g, '<em>').replace(/\033\[23m/g, '</em>').replace(/\033\[m/g, '</span>').replace(/\033\[0m/g, '</span>').replace(/\033\[39m/g, '</span>');
  return Object.entries(foregroundColors).reduce(function (str, _ref) {
    var _ref2 = _slicedToArray(_ref, 2),
        ansiCode = _ref2[0],
        color = _ref2[1];

    var span = "<span style=\"color: " + color + "\">";
    return str.replace(new RegExp("\\033\\[" + ansiCode + "m", 'g'), span).replace(new RegExp("\\033\\[0;" + ansiCode + "m", 'g'), span);
  }, str);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/viewLogs/999adf9b08e1d232175db792dea78a0b5c2aef13.map
