function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/setupWizard/SetupWizardRoute.tsx                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  SetupWizardRoute: () => SetupWizardRoute
});
let useBreakpoints;
module.link("@rocket.chat/fuselage-hooks", {
  useBreakpoints(v) {
    useBreakpoints = v;
  }

}, 0);
let DarkModeProvider;
module.link("@rocket.chat/onboarding-ui", {
  DarkModeProvider(v) {
    DarkModeProvider = v;
  }

}, 1);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 2);
let SetupWizardPage;
module.link("./SetupWizardPage", {
  default(v) {
    SetupWizardPage = v;
  }

}, 3);
let useBodyPosition;
module.link("./hooks/useBodyPosition", {
  useBodyPosition(v) {
    useBodyPosition = v;
  }

}, 4);
let useRouteLock;
module.link("./hooks/useRouteLock", {
  useRouteLock(v) {
    useRouteLock = v;
  }

}, 5);
let OnboardingI18nProvider;
module.link("./providers/OnboardingI18nProvider", {
  default(v) {
    OnboardingI18nProvider = v;
  }

}, 6);
let SetupWizardProvider;
module.link("./providers/SetupWizardProvider", {
  default(v) {
    SetupWizardProvider = v;
  }

}, 7);

const SetupWizardRoute = () => {
  const locked = useRouteLock();
  const breakpoints = useBreakpoints();
  const isMobile = !breakpoints.includes('md');
  useBodyPosition('relative', isMobile);

  if (locked) {
    return null;
  }

  return /*#__PURE__*/React.createElement(OnboardingI18nProvider, null, /*#__PURE__*/React.createElement(SetupWizardProvider, null, /*#__PURE__*/React.createElement(DarkModeProvider, null, /*#__PURE__*/React.createElement(SetupWizardPage, null))));
};

module.exportDefault(SetupWizardRoute);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/setupWizard/6deef5b0abb377d545e45693dcf03bdb1499ec54.map
