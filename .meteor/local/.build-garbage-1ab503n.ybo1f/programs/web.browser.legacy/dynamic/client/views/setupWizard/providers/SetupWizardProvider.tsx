function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/setupWizard/providers/SetupWizardProvider.tsx                                                          //
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

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 2);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 0);
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 1);
var React, useCallback, useMemo, useState, useEffect;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useState: function (v) {
    useState = v;
  },
  useEffect: function (v) {
    useEffect = v;
  }
}, 2);
var callbacks;
module.link("../../../../lib/callbacks", {
  callbacks: function (v) {
    callbacks = v;
  }
}, 3);
var validateEmail;
module.link("../../../../lib/emailValidator", {
  validateEmail: function (v) {
    validateEmail = v;
  }
}, 4);
var useMethod, useEndpoint;
module.link("../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  },
  useEndpoint: function (v) {
    useEndpoint = v;
  }
}, 5);
var useSessionDispatch;
module.link("../../../contexts/SessionContext", {
  useSessionDispatch: function (v) {
    useSessionDispatch = v;
  }
}, 6);
var useSettingSetValue, useSetting, useSettingsDispatch;
module.link("../../../contexts/SettingsContext", {
  useSettingSetValue: function (v) {
    useSettingSetValue = v;
  },
  useSetting: function (v) {
    useSetting = v;
  },
  useSettingsDispatch: function (v) {
    useSettingsDispatch = v;
  }
}, 7);
var useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 8);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 9);
var useLoginWithPassword, useUserId;
module.link("../../../contexts/UserContext", {
  useLoginWithPassword: function (v) {
    useLoginWithPassword = v;
  },
  useUserId: function (v) {
    useUserId = v;
  }
}, 10);
var SetupWizardContext;
module.link("../contexts/SetupWizardContext", {
  SetupWizardContext: function (v) {
    SetupWizardContext = v;
  }
}, 11);
var useParameters;
module.link("../hooks/useParameters", {
  useParameters: function (v) {
    useParameters = v;
  }
}, 12);
var useStepRouting;
module.link("../hooks/useStepRouting", {
  useStepRouting: function (v) {
    useStepRouting = v;
  }
}, 13);
var initialData = {
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
    device_code: '',
    user_code: ''
  }
};

var SetupWizardProvider = function (_ref) {
  var children = _ref.children;

  var _useState = useState(initialData),
      _useState2 = _slicedToArray(_useState, 2),
      setupWizardData = _useState2[0],
      setSetupWizardData = _useState2[1];

  var _useStepRouting = useStepRouting(),
      _useStepRouting2 = _slicedToArray(_useStepRouting, 2),
      currentStep = _useStepRouting2[0],
      setCurrentStep = _useStepRouting2[1];

  var _useParameters = useParameters(),
      loaded = _useParameters.loaded,
      settings = _useParameters.settings,
      canDeclineServerRegistration = _useParameters.canDeclineServerRegistration;

  var dispatchToastMessage = useToastMessageDispatch();
  var dispatchSettings = useSettingsDispatch();
  var setShowSetupWizard = useSettingSetValue('Show_Setup_Wizard');
  var cloudEmail = useSetting('Organization_mail');
  var t = useTranslation();
  var registerUser = useMethod('registerUser');
  var defineUsername = useMethod('setUsername');
  var userId = useUserId();
  var loginWithPassword = useLoginWithPassword();
  var setForceLogin = useSessionDispatch('forceLogin');
  var createRegistrationIntent = useEndpoint('POST', 'cloud.createRegistrationIntent');
  useEffect(function () {
    setSetupWizardData(function (prev) {
      return _objectSpread(_objectSpread({}, prev), {}, {
        registrationData: _objectSpread(_objectSpread({}, prev.registrationData), {}, {
          cloudEmail: cloudEmail
        })
      });
    });
  }, [cloudEmail]);
  var goToPreviousStep = useCallback(function () {
    return setCurrentStep(function (currentStep) {
      return currentStep - 1;
    });
  }, [setCurrentStep]);
  var goToNextStep = useCallback(function () {
    return setCurrentStep(function (currentStep) {
      return currentStep + 1;
    });
  }, [setCurrentStep]);
  var goToStep = useCallback(function (step) {
    return setCurrentStep(function () {
      return step;
    });
  }, [setCurrentStep]);

  var _validateEmail = useCallback(function (email) {
    if (!validateEmail(email)) {
      return t('Invalid_email');
    }

    return true;
  }, [t]);

  var registerAdminUser = useCallback(function () {
    function _callee() {
      var _setupWizardData$admi, fullname, username, companyEmail, password;

      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _setupWizardData$admi = setupWizardData.adminData, fullname = _setupWizardData$admi.fullname, username = _setupWizardData$admi.username, companyEmail = _setupWizardData$admi.companyEmail, password = _setupWizardData$admi.password;
                _context.next = 3;
                return _regeneratorRuntime.awrap(registerUser({
                  name: fullname,
                  username: username,
                  email: companyEmail,
                  pass: password
                }));

              case 3:
                callbacks.run('userRegistered', {});
                _context.prev = 4;
                _context.next = 7;
                return _regeneratorRuntime.awrap(loginWithPassword(companyEmail, password));

              case 7:
                _context.next = 16;
                break;

              case 9:
                _context.prev = 9;
                _context.t0 = _context["catch"](4);

                if (!(_context.t0 instanceof Meteor.Error && _context.t0.error === 'error-invalid-email')) {
                  _context.next = 14;
                  break;
                }

                dispatchToastMessage({
                  type: 'success',
                  message: t('We_have_sent_registration_email')
                });
                return _context.abrupt("return");

              case 14:
                if (_context.t0 instanceof Error || typeof _context.t0 === 'string') {
                  dispatchToastMessage({
                    type: 'error',
                    message: _context.t0
                  });
                }

                throw _context.t0;

              case 16:
                setForceLogin(false);
                _context.next = 19;
                return _regeneratorRuntime.awrap(defineUsername(username));

              case 19:
                _context.next = 21;
                return _regeneratorRuntime.awrap(dispatchSettings([{
                  _id: 'Organization_Email',
                  value: companyEmail
                }]));

              case 21:
                callbacks.run('usernameSet', {});

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[4, 9]], Promise);
    }

    return _callee;
  }(), [defineUsername, dispatchToastMessage, loginWithPassword, registerUser, setForceLogin, dispatchSettings, setupWizardData, t]);
  var saveWorkspaceData = useCallback(function () {
    function _callee2() {
      var _setupWizardData$serv, updates, agreement;

      return _regeneratorRuntime.async(function () {
        function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _setupWizardData$serv = setupWizardData.serverData, updates = _setupWizardData$serv.updates, agreement = _setupWizardData$serv.agreement;
                _context2.next = 3;
                return _regeneratorRuntime.awrap(dispatchSettings([{
                  _id: 'Statistics_reporting',
                  value: true
                }, {
                  _id: 'Apps_Framework_enabled',
                  value: true
                }, {
                  _id: 'Register_Server',
                  value: true
                }, {
                  _id: 'Allow_Marketing_Emails',
                  value: updates
                }, {
                  _id: 'Cloud_Service_Agree_PrivacyTerms',
                  value: agreement
                }]));

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }

        return _callee2$;
      }(), null, null, null, Promise);
    }

    return _callee2;
  }(), [dispatchSettings, setupWizardData]);
  var saveOrganizationData = useCallback(function () {
    function _callee3() {
      var _setupWizardData$orga, organizationName, organizationType, organizationIndustry, organizationSize, country;

      return _regeneratorRuntime.async(function () {
        function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _setupWizardData$orga = setupWizardData.organizationData, organizationName = _setupWizardData$orga.organizationName, organizationType = _setupWizardData$orga.organizationType, organizationIndustry = _setupWizardData$orga.organizationIndustry, organizationSize = _setupWizardData$orga.organizationSize, country = _setupWizardData$orga.country;
                _context3.next = 3;
                return _regeneratorRuntime.awrap(dispatchSettings([{
                  _id: 'Country',
                  value: country
                }, {
                  _id: 'Organization_Type',
                  value: organizationType
                }, {
                  _id: 'Industry',
                  value: organizationIndustry
                }, {
                  _id: 'Size',
                  value: organizationSize
                }, {
                  _id: 'Organization_Name',
                  value: organizationName
                }]));

              case 3:
              case "end":
                return _context3.stop();
            }
          }
        }

        return _callee3$;
      }(), null, null, null, Promise);
    }

    return _callee3;
  }(), [dispatchSettings, setupWizardData]);
  var registerServer = useMutableCallback(function () {
    function _callee4(_ref2) {
      var email, _ref2$resend, resend, _await$createRegistra, intentData;

      return _regeneratorRuntime.async(function () {
        function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                email = _ref2.email, _ref2$resend = _ref2.resend, resend = _ref2$resend === void 0 ? false : _ref2$resend;

                if (userId) {
                  _context4.next = 11;
                  break;
                }

                _context4.prev = 2;
                _context4.next = 5;
                return _regeneratorRuntime.awrap(registerAdminUser());

              case 5:
                _context4.next = 11;
                break;

              case 7:
                _context4.prev = 7;
                _context4.t0 = _context4["catch"](2);

                if (!(_context4.t0 instanceof Error || typeof _context4.t0 === 'string')) {
                  _context4.next = 11;
                  break;
                }

                return _context4.abrupt("return", dispatchToastMessage({
                  type: 'error',
                  message: _context4.t0
                }));

              case 11:
                _context4.prev = 11;
                _context4.next = 14;
                return _regeneratorRuntime.awrap(saveOrganizationData());

              case 14:
                _context4.next = 16;
                return _regeneratorRuntime.awrap(createRegistrationIntent({
                  resend: resend,
                  email: email
                }));

              case 16:
                _await$createRegistra = _context4.sent;
                intentData = _await$createRegistra.intentData;
                setSetupWizardData(function (prevState) {
                  return _objectSpread(_objectSpread({}, prevState), {}, {
                    registrationData: _objectSpread(_objectSpread({}, intentData), {}, {
                      cloudEmail: email
                    })
                  });
                });
                goToStep(5);
                setShowSetupWizard('in_progress');
                _context4.next = 26;
                break;

              case 23:
                _context4.prev = 23;
                _context4.t1 = _context4["catch"](11);
                console.log(_context4.t1);

              case 26:
              case "end":
                return _context4.stop();
            }
          }
        }

        return _callee4$;
      }(), null, null, [[2, 7], [11, 23]], Promise);
    }

    return _callee4;
  }());
  var value = useMemo(function () {
    return {
      setupWizardData: setupWizardData,
      setSetupWizardData: setSetupWizardData,
      currentStep: currentStep,
      loaded: loaded,
      settings: settings,
      canDeclineServerRegistration: canDeclineServerRegistration,
      goToPreviousStep: goToPreviousStep,
      goToNextStep: goToNextStep,
      goToStep: goToStep,
      registerAdminUser: registerAdminUser,
      validateEmail: _validateEmail,
      registerServer: registerServer,
      saveWorkspaceData: saveWorkspaceData,
      saveOrganizationData: saveOrganizationData
    };
  }, [setupWizardData, setSetupWizardData, currentStep, loaded, registerAdminUser, settings, canDeclineServerRegistration, goToPreviousStep, goToNextStep, goToStep, _validateEmail, registerServer, saveWorkspaceData, saveOrganizationData]);
  return /*#__PURE__*/React.createElement(SetupWizardContext.Provider, {
    value: value
  }, children);
};

module.exportDefault(SetupWizardProvider);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/setupWizard/providers/27e1dfef2826132fe74de06f06ac922d68c594a4.map
