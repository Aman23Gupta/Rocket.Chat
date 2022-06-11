function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/Attachment/Download.tsx                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["title", "href"];

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
let useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 1);
let Action;
module.link("./Action", {
  default(v) {
    Action = v;
  }

}, 2);

const Download = _ref => {
  let {
    title,
    href
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  return /*#__PURE__*/React.createElement(Action, _extends({
    icon: "download",
    href: "".concat(href, "?download"),
    title: t('Download'),
    is: "a",
    target: "_blank",
    rel: "noopener noreferrer",
    download: title
  }, props));
};

module.exportDefault(Download);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/Attachment/e2cdfeb7436691cf9966fa5b2e82e87e88b0b1f5.map
