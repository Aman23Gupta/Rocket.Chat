function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/components/VerticalBarOldActions.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["name", "icon", "tabBar", "title"];

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
var VerticalBar;
module.link("../../../components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 1);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);
var useTabBarClose;
module.link("../providers/ToolboxProvider", {
  useTabBarClose: function (v) {
    useTabBarClose = v;
  }
}, 3);
var BlazeTemplate;
module.link("./BlazeTemplate", {
  "default": function (v) {
    BlazeTemplate = v;
  }
}, 4);

var VerticalBarOldActions = function (_ref) {
  var name = _ref.name,
      icon = _ref.icon,
      tabBar = _ref.tabBar,
      title = _ref.title,
      props = _objectWithoutProperties(_ref, _excluded);

  var close = useTabBarClose();
  var t = useTranslation();
  return /*#__PURE__*/React.createElement(React.Fragment, null, ' ', /*#__PURE__*/React.createElement(VerticalBar.Header, null, /*#__PURE__*/React.createElement(VerticalBar.Icon, {
    name: icon
  }), /*#__PURE__*/React.createElement(VerticalBar.Text, null, t(title)), close && /*#__PURE__*/React.createElement(VerticalBar.Close, {
    onClick: close
  })), /*#__PURE__*/React.createElement(VerticalBar.Content, null, /*#__PURE__*/React.createElement(BlazeTemplate, _extends({
    flexShrink: 1,
    overflow: "hidden",
    name: name,
    tabBar: tabBar
  }, props))));
};

module.exportDefault(VerticalBarOldActions);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/components/09191d3aa1ee54de068486815ea4a2d1eb0eda8a.map
