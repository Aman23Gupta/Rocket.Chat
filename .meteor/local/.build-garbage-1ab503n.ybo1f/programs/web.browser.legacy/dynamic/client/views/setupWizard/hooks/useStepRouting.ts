function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/setupWizard/hooks/useStepRouting.ts                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
module.export({
  useStepRouting: function () {
    return useStepRouting;
  }
});
var useState, useEffect;
module.link("react", {
  useState: function (v) {
    useState = v;
  },
  useEffect: function (v) {
    useEffect = v;
  }
}, 0);
var useRouteParameter, useRoute;
module.link("../../../contexts/RouterContext", {
  useRouteParameter: function (v) {
    useRouteParameter = v;
  },
  useRoute: function (v) {
    useRoute = v;
  }
}, 1);
var useUserId;
module.link("../../../contexts/UserContext", {
  useUserId: function (v) {
    useUserId = v;
  }
}, 2);

var useStepRouting = function () {
  var param = useRouteParameter('step');
  var userId = useUserId();
  var setupWizardRoute = useRoute('setup-wizard');

  var _useState = useState(function () {
    if (!param) {
      return 1;
    }

    var step = parseInt(param, 10);

    if (step && Number.isFinite(step) && step >= 1) {
      return step;
    }

    return 1;
  }),
      _useState2 = _slicedToArray(_useState, 2),
      currentStep = _useState2[0],
      setCurrentStep = _useState2[1];

  useEffect(function () {
    // if (!userId) {
    // 	setCurrentStep(1);
    // } else if (currentStep === 1) {
    // 	setCurrentStep(2);
    // }
    setupWizardRoute.replace({
      step: String(currentStep)
    });
  }, [setupWizardRoute, userId, currentStep]);
  return [currentStep, setCurrentStep];
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/setupWizard/hooks/2d88616d27da2c965b282470272a17df55236d6e.map
