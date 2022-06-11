function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/setupWizard/SetupWizardRoute.tsx                                                                       //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  SetupWizardRoute: function () {
    return SetupWizardRoute;
  }
});
var useBreakpoints;
module.link("@rocket.chat/fuselage-hooks", {
  useBreakpoints: function (v) {
    useBreakpoints = v;
  }
}, 0);
var DarkModeProvider;
module.link("@rocket.chat/onboarding-ui", {
  DarkModeProvider: function (v) {
    DarkModeProvider = v;
  }
}, 1);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 2);
var SetupWizardPage;
module.link("./SetupWizardPage", {
  "default": function (v) {
    SetupWizardPage = v;
  }
}, 3);
var useBodyPosition;
module.link("./hooks/useBodyPosition", {
  useBodyPosition: function (v) {
    useBodyPosition = v;
  }
}, 4);
var useRouteLock;
module.link("./hooks/useRouteLock", {
  useRouteLock: function (v) {
    useRouteLock = v;
  }
}, 5);
var OnboardingI18nProvider;
module.link("./providers/OnboardingI18nProvider", {
  "default": function (v) {
    OnboardingI18nProvider = v;
  }
}, 6);
var SetupWizardProvider;
module.link("./providers/SetupWizardProvider", {
  "default": function (v) {
    SetupWizardProvider = v;
  }
}, 7);

var SetupWizardRoute = function () {
  var locked = useRouteLock();
  var breakpoints = useBreakpoints();
  var isMobile = !breakpoints.includes('md');
  useBodyPosition('relative', isMobile);

  if (locked) {
    return null;
  }

  return /*#__PURE__*/React.createElement(OnboardingI18nProvider, null, /*#__PURE__*/React.createElement(SetupWizardProvider, null, /*#__PURE__*/React.createElement(DarkModeProvider, null, /*#__PURE__*/React.createElement(SetupWizardPage, null))));
};

module.exportDefault(SetupWizardRoute);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/setupWizard/09c9e8feb8350671e32eb110b32eeccfba488ac3.map
