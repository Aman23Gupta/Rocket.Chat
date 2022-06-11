function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/businessHours/NewBusinessHoursPage.js                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["departments"];

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

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 2);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 3);
var Button, ButtonGroup;
module.link("@rocket.chat/fuselage", {
  Button: function (v) {
    Button = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React, useRef, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useRef: function (v) {
    useRef = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 2);
var Page;
module.link("../../../components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 3);
var useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 4);
var useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 5);
var useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 6);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 7);
var DAYS_OF_WEEK;
module.link("./BusinessHoursForm", {
  DAYS_OF_WEEK: function (v) {
    DAYS_OF_WEEK = v;
  }
}, 8);
var BusinessHoursFormContainer;
module.link("./BusinessHoursFormContainer", {
  "default": function (v) {
    BusinessHoursFormContainer = v;
  }
}, 9);
var mapBusinessHoursForm;
module.link("./mapBusinessHoursForm", {
  mapBusinessHoursForm: function (v) {
    mapBusinessHoursForm = v;
  }
}, 10);
var closedDays = ['Saturday', 'Sunday'];

var createDefaultBusinessHours = function () {
  return {
    name: '',
    workHours: DAYS_OF_WEEK.map(function (day) {
      return {
        day: day,
        start: {
          time: '00:00'
        },
        finish: {
          time: '00:00'
        },
        open: !closedDays.includes(day)
      };
    }),
    departments: [],
    timezoneName: 'America/Sao_Paulo',
    departmentsToApplyBusinessHour: ''
  };
};

var defaultBusinessHour = createDefaultBusinessHours();

var NewBusinessHoursPage = function () {
  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      hasChanges = _useState2[0],
      setHasChanges = _useState2[1];

  var saveData = useRef({
    form: {}
  });
  var save = useMethod('livechat:saveBusinessHour');
  var router = useRoute('omnichannel-businessHours');
  var handleSave = useMutableCallback(function () {
    function _callee() {
      var _saveData$current, form, _saveData$current$mul, departments, multiple, _saveData$current$tim, timezoneName, mappedForm, departmentsToApplyBusinessHour, payload;

      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _saveData$current = saveData.current, form = _saveData$current.form, _saveData$current$mul = _saveData$current.multiple;
                _saveData$current$mul = _saveData$current$mul === void 0 ? {} : _saveData$current$mul;
                departments = _saveData$current$mul.departments, multiple = _objectWithoutProperties(_saveData$current$mul, _excluded), _saveData$current$tim = _saveData$current.timezone;
                _saveData$current$tim = _saveData$current$tim === void 0 ? {} : _saveData$current$tim;
                timezoneName = _saveData$current$tim.name;

                if (!(multiple.name === '')) {
                  _context.next = 7;
                  break;
                }

                return _context.abrupt("return", dispatchToastMessage({
                  type: 'error',
                  message: t('error-the-field-is-required', {
                    field: t('Name')
                  })
                }));

              case 7:
                mappedForm = mapBusinessHoursForm(form, defaultBusinessHour);
                departmentsToApplyBusinessHour = (departments === null || departments === void 0 ? void 0 : departments.map(function (dep) {
                  return dep.value;
                }).join(',')) || '';
                _context.prev = 9;
                payload = _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, defaultBusinessHour), multiple), departmentsToApplyBusinessHour && {
                  departmentsToApplyBusinessHour: departmentsToApplyBusinessHour
                }), {}, {
                  timezoneName: timezoneName,
                  workHours: mappedForm,
                  type: 'custom'
                });
                _context.next = 13;
                return _regeneratorRuntime.awrap(save(payload));

              case 13:
                dispatchToastMessage({
                  type: 'success',
                  message: t('Saved')
                });
                router.push({});
                _context.next = 20;
                break;

              case 17:
                _context.prev = 17;
                _context.t0 = _context["catch"](9);
                dispatchToastMessage({
                  type: 'error',
                  message: _context.t0
                });

              case 20:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[9, 17]], Promise);
    }

    return _callee;
  }());
  var handleReturn = useMutableCallback(function () {
    router.push({});
  });
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Business_Hours')
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
    onClick: handleReturn
  }, t('Back')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: handleSave,
    disabled: !hasChanges
  }, t('Save')))), /*#__PURE__*/React.createElement(Page.ScrollableContentWithShadow, null, /*#__PURE__*/React.createElement(BusinessHoursFormContainer, {
    data: defaultBusinessHour,
    saveRef: saveData,
    onChange: setHasChanges
  })));
};

module.exportDefault(NewBusinessHoursPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/businessHours/3be6798b5419bacd5ff24b8ce9f9aece54952f69.map
