function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/setupWizard/steps/OrganizationInfoStep.tsx                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let OrganizationInfoPage;
module.link("@rocket.chat/onboarding-ui", {
  OrganizationInfoPage(v) {
    OrganizationInfoPage = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);
let useSetupWizardContext;
module.link("../contexts/SetupWizardContext", {
  useSetupWizardContext(v) {
    useSetupWizardContext = v;
  }

}, 3);

const getSettingOptions = (settings, settingId, t) => {
  if (!settings) {
    return [];
  }

  const setting = settings.find(_ref => {
    let {
      _id
    } = _ref;
    return _id === settingId;
  });

  if (!setting || !setting.values) {
    return [];
  }

  return setting.values.map(_ref2 => {
    let {
      i18nLabel,
      key
    } = _ref2;
    return [String(key), t(i18nLabel)];
  });
};

const OrganizationInfoStep = () => {
  const t = useTranslation();
  const {
    setupWizardData: {
      organizationData
    },
    setSetupWizardData,
    settings,
    goToPreviousStep,
    goToNextStep,
    currentStep
  } = useSetupWizardContext();
  const countryOptions = getSettingOptions(settings, 'Country', t);
  const organizationTypeOptions = getSettingOptions(settings, 'Organization_Type', t);
  const organizationIndustryOptions = getSettingOptions(settings, 'Industry', t);
  const organizationSizeOptions = getSettingOptions(settings, 'Size', t);

  const handleSubmit = async data => {
    setSetupWizardData(prevState => _objectSpread(_objectSpread({}, prevState), {}, {
      organizationData: data
    }));
    goToNextStep();
  };

  return /*#__PURE__*/React.createElement(OrganizationInfoPage, {
    initialValues: organizationData,
    onSubmit: handleSubmit,
    onBackButtonClick: goToPreviousStep,
    currentStep: currentStep,
    stepCount: 4,
    organizationTypeOptions: organizationTypeOptions,
    organizationIndustryOptions: organizationIndustryOptions,
    organizationSizeOptions: organizationSizeOptions,
    countryOptions: countryOptions
  });
};

module.exportDefault(OrganizationInfoStep);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/setupWizard/steps/c7eda3199336fb583f9f6bd5c36803f26ec65570.map
