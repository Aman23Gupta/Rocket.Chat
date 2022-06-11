function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/SettingsDisplay.tsx                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 0);
var Box, Divider;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Divider: function (v) {
    Divider = v;
  }
}, 0);
var React, useMemo, useEffect;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useEffect: function (v) {
    useEffect = v;
  }
}, 1);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);
var useForm;
module.link("../../../hooks/useForm", {
  useForm: function (v) {
    useForm = v;
  }
}, 3);
var AppSettingsAssembler;
module.link("./AppSettingsAssembler", {
  "default": function (v) {
    AppSettingsAssembler = v;
  }
}, 4);

var SettingsDisplay = function (_ref) {
  var settings = _ref.settings,
      setHasUnsavedChanges = _ref.setHasUnsavedChanges,
      settingsRef = _ref.settingsRef;
  var t = useTranslation();
  var stringifiedSettings = JSON.stringify(settings);
  var reducedSettings = useMemo(function () {
    var settings = JSON.parse(stringifiedSettings);
    return Object.values(settings).reduce(function (ret, _ref2) {
      var _objectSpread2;

      var id = _ref2.id,
          value = _ref2.value,
          packageValue = _ref2.packageValue;
      return _objectSpread(_objectSpread({}, ret), {}, (_objectSpread2 = {}, _objectSpread2[id] = value !== null && value !== void 0 ? value : packageValue, _objectSpread2));
    }, {});
  }, [stringifiedSettings]);

  var _useForm = useForm(reducedSettings),
      values = _useForm.values,
      handlers = _useForm.handlers,
      hasUnsavedChanges = _useForm.hasUnsavedChanges;

  var stringifiedValues = JSON.stringify(values);
  useEffect(function () {
    var values = JSON.parse(stringifiedValues);
    setHasUnsavedChanges(hasUnsavedChanges);
    settingsRef.current = values;
  }, [hasUnsavedChanges, stringifiedValues, setHasUnsavedChanges, settingsRef]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Box, {
    fontScale: "h4",
    mb: "x12"
  }, t('Settings')), /*#__PURE__*/React.createElement(AppSettingsAssembler, {
    settings: settings,
    values: values,
    handlers: handlers
  })));
};

module.exportDefault(SettingsDisplay);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/f8eec459d6bee8f9484f9509aacedfd4bd0a760a.map
