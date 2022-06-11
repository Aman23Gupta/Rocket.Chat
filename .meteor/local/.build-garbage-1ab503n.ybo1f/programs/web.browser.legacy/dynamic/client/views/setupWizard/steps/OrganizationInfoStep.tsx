function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/setupWizard/steps/OrganizationInfoStep.tsx                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 1);
var OrganizationInfoPage;
module.link("@rocket.chat/onboarding-ui", {
  OrganizationInfoPage: function (v) {
    OrganizationInfoPage = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);
var useSetupWizardContext;
module.link("../contexts/SetupWizardContext", {
  useSetupWizardContext: function (v) {
    useSetupWizardContext = v;
  }
}, 3);

var getSettingOptions = function (settings, settingId, t) {
  if (!settings) {
    return [];
  }

  var setting = settings.find(function (_ref) {
    var _id = _ref._id;
    return _id === settingId;
  });

  if (!setting || !setting.values) {
    return [];
  }

  return setting.values.map(function (_ref2) {
    var i18nLabel = _ref2.i18nLabel,
        key = _ref2.key;
    return [String(key), t(i18nLabel)];
  });
};

var OrganizationInfoStep = function () {
  var t = useTranslation();

  var _useSetupWizardContex = useSetupWizardContext(),
      organizationData = _useSetupWizardContex.setupWizardData.organizationData,
      setSetupWizardData = _useSetupWizardContex.setSetupWizardData,
      settings = _useSetupWizardContex.settings,
      goToPreviousStep = _useSetupWizardContex.goToPreviousStep,
      goToNextStep = _useSetupWizardContex.goToNextStep,
      currentStep = _useSetupWizardContex.currentStep;

  var countryOptions = getSettingOptions(settings, 'Country', t);
  var organizationTypeOptions = getSettingOptions(settings, 'Organization_Type', t);
  var organizationIndustryOptions = getSettingOptions(settings, 'Industry', t);
  var organizationSizeOptions = getSettingOptions(settings, 'Size', t);

  var handleSubmit = function () {
    function _callee(data) {
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                setSetupWizardData(function (prevState) {
                  return _objectSpread(_objectSpread({}, prevState), {}, {
                    organizationData: data
                  });
                });
                goToNextStep();

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, null, Promise);
    }

    return _callee;
  }();

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
//# sourceMappingURL=/dynamic/client/views/setupWizard/steps/0f71fe073252409957252d55d551a89db04c3026.map
