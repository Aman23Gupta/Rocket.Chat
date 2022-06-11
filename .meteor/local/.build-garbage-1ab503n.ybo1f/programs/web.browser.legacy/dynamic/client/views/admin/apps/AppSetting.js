function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/AppSetting.js                                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["appSetting", "onChange", "value"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 1);
var React, useMemo, useCallback;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useCallback: function (v) {
    useCallback = v;
  }
}, 0);
var MarkdownText;
module.link("../../../components/MarkdownText", {
  "default": function (v) {
    MarkdownText = v;
  }
}, 1);
var useRouteParameter;
module.link("../../../contexts/RouterContext", {
  useRouteParameter: function (v) {
    useRouteParameter = v;
  }
}, 2);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var MemoizedSetting;
module.link("../settings/MemoizedSetting", {
  "default": function (v) {
    MemoizedSetting = v;
  }
}, 4);

var useAppTranslation = function (appId) {
  var t = useTranslation();
  var tApp = useCallback(function (key) {
    if (!key) {
      return '';
    }

    var appKey = "project:apps-" + appId + "-" + key;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return t.apply(void 0, [t.has(appKey) ? appKey : key].concat(args));
  }, [t, appId]);
  tApp.has = useCallback(function (key) {
    if (!key) {
      return false;
    }

    return t.has("project:apps-" + appId + "-" + key) || t.has(key);
  }, [t, appId]);
  return tApp;
};

function AppSetting(_ref) {
  var appSetting = _ref.appSetting,
      onChange = _ref.onChange,
      value = _ref.value,
      props = _objectWithoutProperties(_ref, _excluded);

  var appId = useRouteParameter('id');
  var tApp = useAppTranslation(appId);
  var id = appSetting.id,
      type = appSetting.type,
      i18nLabel = appSetting.i18nLabel,
      i18nDescription = appSetting.i18nDescription,
      values = appSetting.values,
      required = appSetting.required;
  var label = (i18nLabel && tApp(i18nLabel)) + (required ? ' *' : '') || id || tApp(id);
  var hint = useMemo(function () {
    return i18nDescription && /*#__PURE__*/React.createElement(MarkdownText, {
      content: tApp(i18nDescription)
    });
  }, [i18nDescription, tApp]);
  var translatedValues;

  if (values !== null && values !== void 0 && values.length) {
    translatedValues = values.map(function (selectFieldEntry) {
      var key = selectFieldEntry.key,
          i18nLabel = selectFieldEntry.i18nLabel;

      if (!i18nLabel) {
        return selectFieldEntry;
      }

      return {
        key: key,
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
//# sourceMappingURL=/dynamic/client/views/admin/apps/a9a9843cb164680b1961000c50977fe7338746f8.map
