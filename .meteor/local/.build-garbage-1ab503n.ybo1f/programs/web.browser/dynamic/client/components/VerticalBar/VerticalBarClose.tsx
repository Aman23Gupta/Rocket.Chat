function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/VerticalBar/VerticalBarClose.tsx                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
let React, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  }

}, 0);
let useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 1);
let VerticalBarAction;
module.link("./VerticalBarAction", {
  default(v) {
    VerticalBarAction = v;
  }

}, 2);

const VerticalBarClose = props => {
  const t = useTranslation();
  return /*#__PURE__*/React.createElement(VerticalBarAction, _extends({}, props, {
    title: t('Close'),
    name: "cross"
  }));
};

module.exportDefault( /*#__PURE__*/memo(VerticalBarClose));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/VerticalBar/2cc5f6d9b0459c1c1eecf32d1a60027ac1ddbd09.map
