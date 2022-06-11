function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/businessHours/BusinessHoursRouter.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useIsSingleBusinessHours: () => useIsSingleBusinessHours
});
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 0);
let React, useEffect;
module.link("react", {
  default(v) {
    React = v;
  },

  useEffect(v) {
    useEffect = v;
  }

}, 1);
let businessHourManager;
module.link("../../../../app/livechat/client/views/app/business-hours/BusinessHours", {
  businessHourManager(v) {
    businessHourManager = v;
  }

}, 2);
let useRoute, useRouteParameter;
module.link("../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  },

  useRouteParameter(v) {
    useRouteParameter = v;
  }

}, 3);
let useReactiveValue;
module.link("../../../hooks/useReactiveValue", {
  useReactiveValue(v) {
    useReactiveValue = v;
  }

}, 4);
let BusinessHoursPage;
module.link("./BusinessHoursPage", {
  default(v) {
    BusinessHoursPage = v;
  }

}, 5);
let EditBusinessHoursPage;
module.link("./EditBusinessHoursPage", {
  default(v) {
    EditBusinessHoursPage = v;
  }

}, 6);
let NewBusinessHoursPage;
module.link("./NewBusinessHoursPage", {
  default(v) {
    NewBusinessHoursPage = v;
  }

}, 7);

const useIsSingleBusinessHours = () => useReactiveValue(useMutableCallback(() => businessHourManager.getTemplate())) === 'livechatBusinessHoursForm';

const BusinessHoursRouter = () => {
  const context = useRouteParameter('context');
  const id = useRouteParameter('id');
  const type = useRouteParameter('type');
  const isSingleBH = useIsSingleBusinessHours();
  const router = useRoute('omnichannel-businessHours');
  useEffect(() => {
    if (isSingleBH) {
      router.push({
        context: 'edit',
        type: 'default'
      });
    }
  }, [isSingleBH, router]);

  if (context === 'edit' || isSingleBH) {
    return type ? /*#__PURE__*/React.createElement(EditBusinessHoursPage, {
      type: type,
      id: id
    }) : null;
  }

  if (context === 'new') {
    return /*#__PURE__*/React.createElement(NewBusinessHoursPage, null);
  }

  return /*#__PURE__*/React.createElement(BusinessHoursPage, null);
};

module.exportDefault(BusinessHoursRouter);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/businessHours/2dd1fa5956fbe3a60a051147eac9e68ace196f41.map
