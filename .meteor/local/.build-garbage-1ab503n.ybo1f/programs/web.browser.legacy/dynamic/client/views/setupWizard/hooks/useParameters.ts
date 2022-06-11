function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/setupWizard/hooks/useParameters.ts                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);
module.export({
  useParameters: function () {
    return useParameters;
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
var useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 1);

var useParameters = function () {
  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      loaded = _useState2[0],
      setLoaded = _useState2[1];

  var _useState3 = useState([]),
      _useState4 = _slicedToArray(_useState3, 2),
      settings = _useState4[0],
      setSettings = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      canDeclineServerRegistration = _useState6[0],
      setCapableOfDeclineServerRegistration = _useState6[1];

  var getSetupWizardParameters = useMethod('getSetupWizardParameters');
  useEffect(function () {
    var mounted = true;

    var requestParameters = function () {
      function _callee() {
        var _ref, _ref$settings, _settings, _ref$allowStandaloneS, allowStandaloneServer;

        return _regeneratorRuntime.async(function () {
          function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return _regeneratorRuntime.awrap(getSetupWizardParameters());

                case 3:
                  _context.t0 = _context.sent;

                  if (_context.t0) {
                    _context.next = 6;
                    break;
                  }

                  _context.t0 = {};

                case 6:
                  _ref = _context.t0;
                  _ref$settings = _ref.settings;
                  _settings = _ref$settings === void 0 ? [] : _ref$settings;
                  _ref$allowStandaloneS = _ref.allowStandaloneServer;
                  allowStandaloneServer = _ref$allowStandaloneS === void 0 ? false : _ref$allowStandaloneS;

                  if (mounted) {
                    _context.next = 13;
                    break;
                  }

                  return _context.abrupt("return");

                case 13:
                  setLoaded(true);
                  setSettings(_settings);
                  setCapableOfDeclineServerRegistration(allowStandaloneServer);
                  _context.next = 23;
                  break;

                case 18:
                  _context.prev = 18;
                  _context.t1 = _context["catch"](0);
                  setLoaded(false);
                  setSettings([]);
                  setCapableOfDeclineServerRegistration(false);

                case 23:
                case "end":
                  return _context.stop();
              }
            }
          }

          return _callee$;
        }(), null, null, [[0, 18]], Promise);
      }

      return _callee;
    }();

    requestParameters();
    return function () {
      mounted = false;
    };
  }, [getSetupWizardParameters]);
  return {
    loaded: loaded,
    settings: settings,
    canDeclineServerRegistration: canDeclineServerRegistration
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/setupWizard/hooks/4bae73f6f36d45e846101272cefe3d60204924db.map
