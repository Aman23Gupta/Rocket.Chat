function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/useFormatDuration.js                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useFormatDuration: () => useFormatDuration
});
let useCallback;
module.link("react", {
  useCallback(v) {
    useCallback = v;
  }

}, 0);
let useTranslation;
module.link("../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 1);

const useFormatDuration = () => {
  const t = useTranslation();
  return useCallback(duration => {
    const days = Math.floor(duration / 86400);
    const hours = Math.floor(duration % 86400 / 3600);
    const minutes = Math.floor(duration % 86400 % 3600 / 60);
    const seconds = Math.floor(duration % 86400 % 3600 % 60);
    let out = '';

    if (days > 0) {
      out += "".concat(days, " ").concat(t('days'), ", ");
    }

    if (hours > 0) {
      out += "".concat(hours, " ").concat(t('hours'), ", ");
    }

    if (minutes > 0) {
      out += "".concat(minutes, " ").concat(t('minutes'), ", ");
    }

    if (seconds > 0) {
      out += "".concat(seconds, " ").concat(t('seconds'));
    }

    return out;
  }, [t]);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/9f80a891f166cb11514a65dbbb437daa91bed710.map
