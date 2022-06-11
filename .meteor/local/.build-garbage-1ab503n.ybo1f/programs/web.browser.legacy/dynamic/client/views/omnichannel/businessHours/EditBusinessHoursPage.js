function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/businessHours/EditBusinessHoursPage.js                                                     //
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
var Button, ButtonGroup, Callout;
module.link("@rocket.chat/fuselage", {
  Button: function (v) {
    Button = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Callout: function (v) {
    Callout = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React, useRef, useMemo, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useRef: function (v) {
    useRef = v;
  },
  useMemo: function (v) {
    useMemo = v;
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
var PageSkeleton;
module.link("../../../components/PageSkeleton", {
  "default": function (v) {
    PageSkeleton = v;
  }
}, 4);
var useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 5);
var useMethod;
module.link("../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 6);
var useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 7);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 8);
var AsyncStatePhase;
module.link("../../../hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 9);
var useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 10);
var BusinessHoursFormContainer;
module.link("./BusinessHoursFormContainer", {
  "default": function (v) {
    BusinessHoursFormContainer = v;
  }
}, 11);
var useIsSingleBusinessHours;
module.link("./BusinessHoursRouter", {
  useIsSingleBusinessHours: function (v) {
    useIsSingleBusinessHours = v;
  }
}, 12);
var mapBusinessHoursForm;
module.link("./mapBusinessHoursForm", {
  mapBusinessHoursForm: function (v) {
    mapBusinessHoursForm = v;
  }
}, 13);

var EditBusinessHoursPage = function (_ref) {
  var id = _ref.id,
      type = _ref.type;
  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();
  var isSingleBH = useIsSingleBusinessHours();

  var _useEndpointData = useEndpointData('livechat/business-hour', useMemo(function () {
    return {
      _id: id,
      type: type
    };
  }, [id, type])),
      data = _useEndpointData.value,
      state = _useEndpointData.phase;

  var saveData = useRef({
    form: {}
  });

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      hasChanges = _useState2[0],
      setHasChanges = _useState2[1];

  var save = useMethod('livechat:saveBusinessHour');
  var deleteBH = useMethod('livechat:removeBusinessHour');
  var router = useRoute('omnichannel-businessHours');
  var handleSave = useMutableCallback(function () {
    function _callee() {
      var _saveData$current, form, _saveData$current$mul, departments, multiple, _saveData$current$tim, timezoneName, mappedForm, departmentsToApplyBusinessHour, payload;

      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(state !== AsyncStatePhase.RESOLVED || !data.success)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                _saveData$current = saveData.current, form = _saveData$current.form, _saveData$current$mul = _saveData$current.multiple;
                _saveData$current$mul = _saveData$current$mul === void 0 ? {} : _saveData$current$mul;
                departments = _saveData$current$mul.departments, multiple = _objectWithoutProperties(_saveData$current$mul, _excluded), _saveData$current$tim = _saveData$current.timezone;
                _saveData$current$tim = _saveData$current$tim === void 0 ? {} : _saveData$current$tim;
                timezoneName = _saveData$current$tim.name;

                if (!(data.businessHour.type !== 'default' && multiple.name === '')) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt("return", dispatchToastMessage({
                  type: 'error',
                  message: t('error-the-field-is-required', {
                    field: t('Name')
                  })
                }));

              case 9:
                mappedForm = mapBusinessHoursForm(form, data.businessHour);
                departmentsToApplyBusinessHour = (departments === null || departments === void 0 ? void 0 : departments.map(function (dep) {
                  return dep.value;
                }).join(',')) || '';
                _context.prev = 11;
                payload = _objectSpread(_objectSpread(_objectSpread({}, data.businessHour), multiple), {}, {
                  departmentsToApplyBusinessHour: departmentsToApplyBusinessHour !== null && departmentsToApplyBusinessHour !== void 0 ? departmentsToApplyBusinessHour : '',
                  timezoneName: timezoneName || data.businessHour.timezone.name,
                  workHours: mappedForm
                });
                _context.next = 15;
                return _regeneratorRuntime.awrap(save(payload));

              case 15:
                dispatchToastMessage({
                  type: 'success',
                  message: t('Business_hours_updated')
                });
                router.push({});
                _context.next = 22;
                break;

              case 19:
                _context.prev = 19;
                _context.t0 = _context["catch"](11);
                dispatchToastMessage({
                  type: 'error',
                  message: _context.t0
                });

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[11, 19]], Promise);
    }

    return _callee;
  }());
  var handleDelete = useMutableCallback(function () {
    function _callee2() {
      return _regeneratorRuntime.async(function () {
        function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (!(type !== 'custom')) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                _context2.prev = 2;
                _context2.next = 5;
                return _regeneratorRuntime.awrap(deleteBH(id, type));

              case 5:
                dispatchToastMessage({
                  type: 'success',
                  message: t('Business_Hour_Removed')
                });
                router.push({});
                _context2.next = 12;
                break;

              case 9:
                _context2.prev = 9;
                _context2.t0 = _context2["catch"](2);
                dispatchToastMessage({
                  type: 'error',
                  message: _context2.t0
                });

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }

        return _callee2$;
      }(), null, null, [[2, 9]], Promise);
    }

    return _callee2;
  }());
  var handleReturn = useMutableCallback(function () {
    router.push({});
  });

  if (state === AsyncStatePhase.LOADING) {
    return /*#__PURE__*/React.createElement(PageSkeleton, null);
  }

  if (state === AsyncStatePhase.REJECTED || AsyncStatePhase.RESOLVED && !data.businessHour) {
    return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
      title: t('Business_Hours')
    }, /*#__PURE__*/React.createElement(Button, {
      onClick: handleReturn
    }, t('Back'))), /*#__PURE__*/React.createElement(Page.ScrollableContentWithShadow, null, /*#__PURE__*/React.createElement(Callout, {
      type: "danger"
    }, t('Error'))));
  }

  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Business_Hours')
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, !isSingleBH && /*#__PURE__*/React.createElement(Button, {
    onClick: handleReturn
  }, t('Back')), type === 'custom' && /*#__PURE__*/React.createElement(Button, {
    primary: true,
    danger: true,
    onClick: handleDelete
  }, t('Delete')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: handleSave,
    disabled: !hasChanges
  }, t('Save')))), /*#__PURE__*/React.createElement(Page.ScrollableContentWithShadow, null, /*#__PURE__*/React.createElement(BusinessHoursFormContainer, {
    data: data.businessHour,
    saveRef: saveData,
    onChange: setHasChanges
  })));
};

module.exportDefault(EditBusinessHoursPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/businessHours/f298198077edbf7b091d5652b2ebd6b1149d9fc4.map
