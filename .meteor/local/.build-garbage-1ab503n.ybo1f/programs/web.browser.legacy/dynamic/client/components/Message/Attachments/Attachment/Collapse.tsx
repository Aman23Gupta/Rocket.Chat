function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/Attachment/Collapse.tsx                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["collapsed"];

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
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 1);
var Action;
module.link("./Action", {
  "default": function (v) {
    Action = v;
  }
}, 2);

var Collapse = function (_ref) {
  var _ref$collapsed = _ref.collapsed,
      collapsed = _ref$collapsed === void 0 ? false : _ref$collapsed,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  return /*#__PURE__*/React.createElement(Action, _extends({
    title: collapsed ? t('Uncollapse') : t('Collapse'),
    icon: !collapsed ? 'chevron-down' : 'chevron-left'
  }, props));
};

module.exportDefault(Collapse);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/Attachment/94353536ee820ce08113fc0d9129b5e5181292aa.map
