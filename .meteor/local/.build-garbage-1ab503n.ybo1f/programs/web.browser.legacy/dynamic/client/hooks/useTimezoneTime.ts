function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/useTimezoneTime.ts                                                                                     //
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
  useTimezoneTime: function () {
    return useTimezoneTime;
  }
});
var moment;
module.link("moment", {
  "default": function (v) {
    moment = v;
  }
}, 0);
var useState, useEffect;
module.link("react", {
  useState: function (v) {
    useState = v;
  },
  useEffect: function (v) {
    useEffect = v;
  }
}, 1);
var useFormatTime;
module.link("./useFormatTime", {
  useFormatTime: function (v) {
    useFormatTime = v;
  }
}, 2);

var useTimezoneTime = function (offset) {
  var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;

  var _useState = useState(function () {
    return moment().utcOffset(offset);
  }),
      _useState2 = _slicedToArray(_useState, 2),
      time = _useState2[0],
      setTime = _useState2[1];

  var format = useFormatTime();
  useEffect(function () {
    if (offset === undefined) {
      return;
    }

    var update = function () {
      setTime(moment().utcOffset(offset));
    };

    var timer = setInterval(update, interval);
    update();
    return function () {
      clearInterval(timer);
    };
  }, [offset, interval]);
  return format(time);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/2d3b72164832238e9aa54db00bef087411bb6d0d.map
