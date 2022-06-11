function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/useFormatTime.ts                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useFormatTime: () => useFormatTime
});
let moment;
module.link("moment", {
  default(v) {
    moment = v;
  }

}, 0);
let useCallback;
module.link("react", {
  useCallback(v) {
    useCallback = v;
  }

}, 1);
let useSetting;
module.link("../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 2);
let useUserPreference;
module.link("../contexts/UserContext", {
  useUserPreference(v) {
    useUserPreference = v;
  }

}, 3);
const dayFormat = ['h:mm A', 'H:mm'];

const useFormatTime = () => {
  const clockMode = useUserPreference('clockMode');
  const format = useSetting('Message_TimeFormat');
  const sameDay = clockMode !== undefined ? dayFormat[clockMode - 1] : format;
  return useCallback(time => {
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
//# sourceMappingURL=/dynamic/client/hooks/132facba03f9fd6b33eb756cb14f6536942f09a0.map
