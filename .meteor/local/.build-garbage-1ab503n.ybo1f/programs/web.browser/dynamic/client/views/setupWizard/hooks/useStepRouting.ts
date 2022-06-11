function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/setupWizard/hooks/useStepRouting.ts                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  useStepRouting: () => useStepRouting
});
let useState, useEffect;
module.link("react", {
  useState(v) {
    useState = v;
  },

  useEffect(v) {
    useEffect = v;
  }

}, 0);
let useRouteParameter, useRoute;
module.link("../../../contexts/RouterContext", {
  useRouteParameter(v) {
    useRouteParameter = v;
  },

  useRoute(v) {
    useRoute = v;
  }

}, 1);
let useUserId;
module.link("../../../contexts/UserContext", {
  useUserId(v) {
    useUserId = v;
  }

}, 2);

const useStepRouting = () => {
  const param = useRouteParameter('step');
  const userId = useUserId();
  const setupWizardRoute = useRoute('setup-wizard');
  const [currentStep, setCurrentStep] = useState(() => {
    if (!param) {
      return 1;
    }

    const step = parseInt(param, 10);

    if (step && Number.isFinite(step) && step >= 1) {
      return step;
    }

    return 1;
  });
  useEffect(() => {
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
//# sourceMappingURL=/dynamic/client/views/setupWizard/hooks/6a34bda055d5eb1307b34158bbfa843f318004a6.map
