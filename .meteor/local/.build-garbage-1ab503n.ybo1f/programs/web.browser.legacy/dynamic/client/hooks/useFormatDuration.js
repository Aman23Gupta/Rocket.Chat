function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/hooks/useFormatDuration.js                                                                                   //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useFormatDuration: function () {
    return useFormatDuration;
  }
});
var useCallback;
module.link("react", {
  useCallback: function (v) {
    useCallback = v;
  }
}, 0);
var useTranslation;
module.link("../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 1);

var useFormatDuration = function () {
  var t = useTranslation();
  return useCallback(function (duration) {
    var days = Math.floor(duration / 86400);
    var hours = Math.floor(duration % 86400 / 3600);
    var minutes = Math.floor(duration % 86400 % 3600 / 60);
    var seconds = Math.floor(duration % 86400 % 3600 % 60);
    var out = '';

    if (days > 0) {
      out += days + " " + t('days') + ", ";
    }

    if (hours > 0) {
      out += hours + " " + t('hours') + ", ";
    }

    if (minutes > 0) {
      out += minutes + " " + t('minutes') + ", ";
    }

    if (seconds > 0) {
      out += seconds + " " + t('seconds');
    }

    return out;
  }, [t]);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/hooks/87cc5a8225ecb263c762123bcfac4ad88405caef.map
