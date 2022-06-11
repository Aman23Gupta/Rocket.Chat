function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/components/VerticalBarOldActions.js                                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["name", "icon", "tabBar", "title"];

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
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let VerticalBar;
module.link("../../../components/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 1);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);
let useTabBarClose;
module.link("../providers/ToolboxProvider", {
  useTabBarClose(v) {
    useTabBarClose = v;
  }

}, 3);
let BlazeTemplate;
module.link("./BlazeTemplate", {
  default(v) {
    BlazeTemplate = v;
  }

}, 4);

const VerticalBarOldActions = _ref => {
  let {
    name,
    icon,
    tabBar,
    title
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const close = useTabBarClose();
  const t = useTranslation();
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
//# sourceMappingURL=/dynamic/client/views/room/components/e3356cb51ad9fa614efd11e252ef4ff9f433d789.map
