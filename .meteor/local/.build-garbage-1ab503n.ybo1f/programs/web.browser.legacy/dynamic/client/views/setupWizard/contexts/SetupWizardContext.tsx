function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/setupWizard/contexts/SetupWizardContext.tsx                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);
module.export({
  SetupWizardContext: function () {
    return SetupWizardContext;
  },
  useSetupWizardContext: function () {
    return useSetupWizardContext;
  }
});
var createContext, useContext;
module.link("react", {
  createContext: function (v) {
    createContext = v;
  },
  useContext: function (v) {
    useContext = v;
  }
}, 0);
var SetupWizardContext = /*#__PURE__*/createContext({
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
  setSetupWizardData: function (data) {
    return data;
  },
  loaded: false,
  settings: [],
  canDeclineServerRegistration: false,
  goToPreviousStep: function () {
    return undefined;
  },
  goToNextStep: function () {
    return undefined;
  },
  goToStep: function () {
    return undefined;
  },
  registerAdminUser: function () {
    function _callee() {
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", undefined);

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, null, Promise);
    }

    return _callee;
  }(),
  registerServer: function () {
    function _callee2() {
      return _regeneratorRuntime.async(function () {
        function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", undefined);

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }

        return _callee2$;
      }(), null, null, null, Promise);
    }

    return _callee2;
  }(),
  saveWorkspaceData: function () {
    function _callee3() {
      return _regeneratorRuntime.async(function () {
        function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                return _context3.abrupt("return", undefined);

              case 1:
              case "end":
                return _context3.stop();
            }
          }
        }

        return _callee3$;
      }(), null, null, null, Promise);
    }

    return _callee3;
  }(),
  saveOrganizationData: function () {
    function _callee4() {
      return _regeneratorRuntime.async(function () {
        function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                return _context4.abrupt("return", undefined);

              case 1:
              case "end":
                return _context4.stop();
            }
          }
        }

        return _callee4$;
      }(), null, null, null, Promise);
    }

    return _callee4;
  }(),
  validateEmail: function () {
    return true;
  },
  currentStep: 1
});

var useSetupWizardContext = function () {
  return useContext(SetupWizardContext);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/setupWizard/contexts/edc66ac29e42c460b50e28b38cabbde705da1262.map
