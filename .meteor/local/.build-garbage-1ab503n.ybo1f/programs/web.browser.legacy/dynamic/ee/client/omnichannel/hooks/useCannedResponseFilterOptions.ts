function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/hooks/useCannedResponseFilterOptions.ts                                                       //
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
  useCannedResponseFilterOptions: function () {
    return useCannedResponseFilterOptions;
  }
});
var useEffect, useMemo, useState;
module.link("react", {
  useEffect: function (v) {
    useEffect = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 0);
var useEndpoint;
module.link("../../../../client/contexts/ServerContext", {
  useEndpoint: function (v) {
    useEndpoint = v;
  }
}, 1);
var useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);

var useCannedResponseFilterOptions = function () {
  var t = useTranslation();
  var getDepartments = useEndpoint('GET', 'livechat/department');
  var defaultOptions = useMemo(function () {
    return [['all', t('All')], ['global', t('Public')], ['user', t('Private')]];
  }, [t]);

  var _useState = useState(defaultOptions),
      _useState2 = _slicedToArray(_useState, 2),
      options = _useState2[0],
      setOptions = _useState2[1];

  useEffect(function () {
    var fetchData = function () {
      function _callee() {
        var _await$getDepartments, departments, newOptions;

        return _regeneratorRuntime.async(function () {
          function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return _regeneratorRuntime.awrap(getDepartments({
                    text: ''
                  }));

                case 2:
                  _await$getDepartments = _context.sent;
                  departments = _await$getDepartments.departments;
                  newOptions = departments.map(function (department) {
                    return [department._id, department.name];
                  });
                  setOptions(defaultOptions.concat(newOptions));

                case 6:
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

    fetchData();
  }, [defaultOptions, getDepartments]);
  return options;
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/hooks/44ca1fbd2e50305a24cdec2dd6795f4c50ae46d0.map
