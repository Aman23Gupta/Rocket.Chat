function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/SettingsDisplay.tsx                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let Box, Divider;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Divider(v) {
    Divider = v;
  }

}, 0);
let React, useMemo, useEffect;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useEffect(v) {
    useEffect = v;
  }

}, 1);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);
let useForm;
module.link("../../../hooks/useForm", {
  useForm(v) {
    useForm = v;
  }

}, 3);
let AppSettingsAssembler;
module.link("./AppSettingsAssembler", {
  default(v) {
    AppSettingsAssembler = v;
  }

}, 4);

const SettingsDisplay = _ref => {
  let {
    settings,
    setHasUnsavedChanges,
    settingsRef
  } = _ref;
  const t = useTranslation();
  const stringifiedSettings = JSON.stringify(settings);
  const reducedSettings = useMemo(() => {
    const settings = JSON.parse(stringifiedSettings);
    return Object.values(settings).reduce((ret, _ref2) => {
      let {
        id,
        value,
        packageValue
      } = _ref2;
      return _objectSpread(_objectSpread({}, ret), {}, {
        [id]: value !== null && value !== void 0 ? value : packageValue
      });
    }, {});
  }, [stringifiedSettings]);
  const {
    values,
    handlers,
    hasUnsavedChanges
  } = useForm(reducedSettings);
  const stringifiedValues = JSON.stringify(values);
  useEffect(() => {
    const values = JSON.parse(stringifiedValues);
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
//# sourceMappingURL=/dynamic/client/views/admin/apps/587630931c4478146f4bceaf7ae735ddb18b34f3.map
