function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/Header/Omnichannel/BackButton.tsx                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
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

}, 1);
let Header;
module.link("../../../../components/Header", {
  default(v) {
    Header = v;
  }

}, 2);
let useCurrentRoute, useRoute;
module.link("../../../../contexts/RouterContext", {
  useCurrentRoute(v) {
    useCurrentRoute = v;
  },

  useRoute(v) {
    useRoute = v;
  }

}, 3);
let useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 4);

const BackButton = () => {
  const t = useTranslation();
  const [route = '', params] = useCurrentRoute();
  const router = useRoute(route);
  const back = useMutableCallback(() => {
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
//# sourceMappingURL=/dynamic/client/views/room/Header/Omnichannel/e68feb3635c02983dd2bf0aa3a20d56170cfd658.map
