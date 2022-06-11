function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/useFormatTime.ts                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useFormatTime: function () {
    return useFormatTime;
  }
});
var moment;
module.link("moment", {
  "default": function (v) {
    moment = v;
  }
}, 0);
var useCallback;
module.link("react", {
  useCallback: function (v) {
    useCallback = v;
  }
}, 1);
var useSetting;
module.link("../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 2);
var useUserPreference;
module.link("../contexts/UserContext", {
  useUserPreference: function (v) {
    useUserPreference = v;
  }
}, 3);
var dayFormat = ['h:mm A', 'H:mm'];

var useFormatTime = function () {
  var clockMode = useUserPreference('clockMode');
  var format = useSetting('Message_TimeFormat');
  var sameDay = clockMode !== undefined ? dayFormat[clockMode - 1] : format;
  return useCallback(function (time) {
    switch (clockMode) {
      case 1:
      case 2:
        return moment(time).format(sameDay);

      default:
        return moment(time).format(format);
    }
  }, [clockMode, format, sameDay]);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/bd100ecae7607225f921c73a243f0194b1babce6.map
