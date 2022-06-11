function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/AppSetting.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["appSetting", "onChange", "value"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
let React, useMemo, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useCallback(v) {
    useCallback = v;
  }

}, 0);
let MarkdownText;
module.link("../../../components/MarkdownText", {
  default(v) {
    MarkdownText = v;
  }

}, 1);
let useRouteParameter;
module.link("../../../contexts/RouterContext", {
  useRouteParameter(v) {
    useRouteParameter = v;
  }

}, 2);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let MemoizedSetting;
module.link("../settings/MemoizedSetting", {
  default(v) {
    MemoizedSetting = v;
  }

}, 4);

const useAppTranslation = appId => {
  const t = useTranslation();
  const tApp = useCallback(function (key) {
    if (!key) {
      return '';
    }

    const appKey = "project:apps-".concat(appId, "-").concat(key);

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return t(t.has(appKey) ? appKey : key, ...args);
  }, [t, appId]);
  tApp.has = useCallback(key => {
    if (!key) {
      return false;
    }

    return t.has("project:apps-".concat(appId, "-").concat(key)) || t.has(key);
  }, [t, appId]);
  return tApp;
};

function AppSetting(_ref) {
  let {
    appSetting,
    onChange,
    value
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const appId = useRouteParameter('id');
  const tApp = useAppTranslation(appId);
  const {
    id,
    type,
    i18nLabel,
    i18nDescription,
    values,
    required
  } = appSetting;
  const label = (i18nLabel && tApp(i18nLabel)) + (required ? ' *' : '') || id || tApp(id);
  const hint = useMemo(() => i18nDescription && /*#__PURE__*/React.createElement(MarkdownText, {
    content: tApp(i18nDescription)
  }), [i18nDescription, tApp]);
  let translatedValues;

  if (values !== null && values !== void 0 && values.length) {
    translatedValues = values.map(selectFieldEntry => {
      const {
        key,
        i18nLabel
      } = selectFieldEntry;

      if (!i18nLabel) {
        return selectFieldEntry;
      }

      return {
        key,
        i18nLabel: tApp(i18nLabel)
      };
    });
  }

  return /*#__PURE__*/React.createElement(MemoizedSetting, _extends({
    type: type,
    label: label,
    hint: hint,
    value: value,
    onChangeValue: onChange,
    _id: id,
    values: translatedValues
  }, props));
}

module.exportDefault(AppSetting);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/3cde0b1f797a988f5a725ab6831548b3915aefbd.map
