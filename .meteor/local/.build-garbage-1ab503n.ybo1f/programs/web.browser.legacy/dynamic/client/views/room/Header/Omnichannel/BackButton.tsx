function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/Header/Omnichannel/BackButton.tsx                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
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
}, 1);
var Header;
module.link("../../../../components/Header", {
  "default": function (v) {
    Header = v;
  }
}, 2);
var useCurrentRoute, useRoute;
module.link("../../../../contexts/RouterContext", {
  useCurrentRoute: function (v) {
    useCurrentRoute = v;
  },
  useRoute: function (v) {
    useRoute = v;
  }
}, 3);
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 4);

var BackButton = function () {
  var t = useTranslation();

  var _useCurrentRoute = useCurrentRoute(),
      _useCurrentRoute2 = _slicedToArray(_useCurrentRoute, 2),
      _useCurrentRoute2$ = _useCurrentRoute2[0],
      route = _useCurrentRoute2$ === void 0 ? '' : _useCurrentRoute2$,
      params = _useCurrentRoute2[1];

  var router = useRoute(route);
  var back = useMutableCallback(function () {
    router.replace(_objectSpread(_objectSpread({}, params), {}, {
      bar: 'info'
    }));
  });
  return /*#__PURE__*/React.createElement(Header.ToolBoxAction, {
    title: t('Back'),
    icon: "back",
    onClick: back
  });
};

module.exportDefault( /*#__PURE__*/memo(BackButton));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/Header/Omnichannel/cf21000fc01e326b9a0ebd286ed3f5bfd98d9fbe.map
