function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/setupWizard/contexts/SetupWizardContext.tsx                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  SetupWizardContext: () => SetupWizardContext,
  useSetupWizardContext: () => useSetupWizardContext
});
let createContext, useContext;
module.link("react", {
  createContext(v) {
    createContext = v;
  },

  useContext(v) {
    useContext = v;
  }

}, 0);
const SetupWizardContext = /*#__PURE__*/createContext({
  setupWizardData: {
    adminData: {
      fullname: '',
      username: '',
      companyEmail: '',
      password: ''
    },
    organizationData: {
      organizationName: '',
      organizationType: '',
      organizationIndustry: '',
      organizationSize: '',
      country: ''
    },
    serverData: {
      agreement: false,
      email: '',
      registerType: 'registered',
      updates: false
    },
    // eslint-disable-next-line @typescript-eslint/camelcase
    registrationData: {
      cloudEmail: '',
      user_code: '',
      device_code: ''
    }
  },
  setSetupWizardData: data => data,
  loaded: false,
  settings: [],
  canDeclineServerRegistration: false,
  goToPreviousStep: () => undefined,
  goToNextStep: () => undefined,
  goToStep: () => undefined,
  registerAdminUser: async () => undefined,
  registerServer: async () => undefined,
  saveWorkspaceData: async () => undefined,
  saveOrganizationData: async () => undefined,
  validateEmail: () => true,
  currentStep: 1
});

const useSetupWizardContext = () => useContext(SetupWizardContext);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/setupWizard/contexts/4aa7d8f980765a627bf57c8a7a30d721a81cba1d.map
