function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/setupWizard/steps/AdminInfoStep.tsx                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let AdminInfoPage;
module.link("@rocket.chat/onboarding-ui", {
  AdminInfoPage(v) {
    AdminInfoPage = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let useSetting;
module.link("../../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 2);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let useSetupWizardContext;
module.link("../contexts/SetupWizardContext", {
  useSetupWizardContext(v) {
    useSetupWizardContext = v;
  }

}, 4);

const AdminInfoStep = () => {
  const t = useTranslation();
  const regexpForUsernameValidation = useSetting('UTF8_User_Names_Validation');
  const usernameRegExp = new RegExp("^".concat(regexpForUsernameValidation, "$"));
  const {
    setupWizardData: {
      adminData
    },
    setSetupWizardData,
    goToNextStep,
    currentStep,
    validateEmail
  } = useSetupWizardContext(); // TODO: check if username exists

  const validateUsername = username => {
    if (!usernameRegExp.test(username)) {
      return t('Invalid_username');
    }

    return true;
  };

  const handleSubmit = async data => {
    setSetupWizardData(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
      adminData: data
    }));
    goToNextStep();
  };

  return /*#__PURE__*/React.createElement(AdminInfoPage, {
    validatePassword: password => password.length > 0,
    passwordRulesHint: '',
    validateUsername: validateUsername,
    validateEmail: validateEmail,
    currentStep: currentStep,
    initialValues: adminData,
    stepCount: 4,
    onSubmit: handleSubmit
  });
};

module.exportDefault(AdminInfoStep);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/setupWizard/steps/87beafaf0e23e470bb8b496cde2a02786557c386.map
