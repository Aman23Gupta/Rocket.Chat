function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/useFormatDate.js                                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useFormatDate: () => useFormatDate
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

const useFormatDate = () => {
  const format = useSetting('Message_DateFormat');
  return useCallback(time => moment(time).format(format), [format]);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/a503717c9c58a4df2a4f1963ddb3d9fe74f338b4.map
