function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/VerticalBar/VerticalBarClose.tsx                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);
var React, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 0);
var useTranslation;
module.link("../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 1);
var VerticalBarAction;
module.link("./VerticalBarAction", {
  "default": function (v) {
    VerticalBarAction = v;
  }
}, 2);

var VerticalBarClose = function (props) {
  var t = useTranslation();
  return /*#__PURE__*/React.createElement(VerticalBarAction, _extends({}, props, {
    title: t('Close'),
    name: "cross"
  }));
};

module.exportDefault( /*#__PURE__*/memo(VerticalBarClose));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/VerticalBar/99fc69a8a9b36e16e84b80f2069349ba03d34e5e.map
