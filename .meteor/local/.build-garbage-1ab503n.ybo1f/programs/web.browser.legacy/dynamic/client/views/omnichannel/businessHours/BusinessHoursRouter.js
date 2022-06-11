function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/businessHours/BusinessHoursRouter.js                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useIsSingleBusinessHours: function () {
    return useIsSingleBusinessHours;
  }
});
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 0);
var React, useEffect;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useEffect: function (v) {
    useEffect = v;
  }
}, 1);
var businessHourManager;
module.link("../../../../app/livechat/client/views/app/business-hours/BusinessHours", {
  businessHourManager: function (v) {
    businessHourManager = v;
  }
}, 2);
var useRoute, useRouteParameter;
module.link("../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  },
  useRouteParameter: function (v) {
    useRouteParameter = v;
  }
}, 3);
var useReactiveValue;
module.link("../../../hooks/useReactiveValue", {
  useReactiveValue: function (v) {
    useReactiveValue = v;
  }
}, 4);
var BusinessHoursPage;
module.link("./BusinessHoursPage", {
  "default": function (v) {
    BusinessHoursPage = v;
  }
}, 5);
var EditBusinessHoursPage;
module.link("./EditBusinessHoursPage", {
  "default": function (v) {
    EditBusinessHoursPage = v;
  }
}, 6);
var NewBusinessHoursPage;
module.link("./NewBusinessHoursPage", {
  "default": function (v) {
    NewBusinessHoursPage = v;
  }
}, 7);

var useIsSingleBusinessHours = function () {
  return useReactiveValue(useMutableCallback(function () {
    return businessHourManager.getTemplate();
  })) === 'livechatBusinessHoursForm';
};

var BusinessHoursRouter = function () {
  var context = useRouteParameter('context');
  var id = useRouteParameter('id');
  var type = useRouteParameter('type');
  var isSingleBH = useIsSingleBusinessHours();
  var router = useRoute('omnichannel-businessHours');
  useEffect(function () {
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
//# sourceMappingURL=/dynamic/client/views/omnichannel/businessHours/0e79a1fb9905f14bdd2d2811a93b28d4773517a0.map
