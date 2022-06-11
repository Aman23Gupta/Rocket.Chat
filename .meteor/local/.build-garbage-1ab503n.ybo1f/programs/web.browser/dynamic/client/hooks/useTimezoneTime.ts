function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/useTimezoneTime.ts                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useTimezoneTime: () => useTimezoneTime
});
let moment;
module.link("moment", {
  default(v) {
    moment = v;
  }

}, 0);
let useState, useEffect;
module.link("react", {
  useState(v) {
    useState = v;
  },

  useEffect(v) {
    useEffect = v;
  }

}, 1);
let useFormatTime;
module.link("./useFormatTime", {
  useFormatTime(v) {
    useFormatTime = v;
  }

}, 2);

const useTimezoneTime = function (offset) {
  let interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;
  const [time, setTime] = useState(() => moment().utcOffset(offset));
  const format = useFormatTime();
  useEffect(() => {
    if (offset === undefined) {
      return;
    }

    const update = () => {
      setTime(moment().utcOffset(offset));
    };

    const timer = setInterval(update, interval);
    update();
    return () => {
      clearInterval(timer);
    };
  }, [offset, interval]);
  return format(time);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/d17a9cd93e512ff9ddd1517adfa7883f63a42e88.map
