function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/units/UnitEdit.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["title", "data", "unitId", "isNew", "unitMonitors", "unitDepartments", "reload"];

var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 1);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 2);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 3);
var Field, TextInput, Button, PaginatedMultiSelectFiltered, Select, ButtonGroup, Icon, FieldGroup;
module.link("@rocket.chat/fuselage", {
  Field: function (v) {
    Field = v;
  },
  TextInput: function (v) {
    TextInput = v;
  },
  Button: function (v) {
    Button = v;
  },
  PaginatedMultiSelectFiltered: function (v) {
    PaginatedMultiSelectFiltered = v;
  },
  Select: function (v) {
    Select = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  FieldGroup: function (v) {
    FieldGroup = v;
  }
}, 0);
var useMutableCallback, useDebouncedValue;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  },
  useDebouncedValue: function (v) {
    useDebouncedValue = v;
  }
}, 1);
var React, useMemo, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 2);
var Page;
module.link("../../../../client/components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 3);
var useRoute;
module.link("../../../../client/contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 4);
var useMethod;
module.link("../../../../client/contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 5);
var useToastMessageDispatch;
module.link("../../../../client/contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 6);
var useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 7);
var useRecordList;
module.link("../../../../client/hooks/lists/useRecordList", {
  useRecordList: function (v) {
    useRecordList = v;
  }
}, 8);
var AsyncStatePhase;
module.link("../../../../client/hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 9);
var useForm;
module.link("../../../../client/hooks/useForm", {
  useForm: function (v) {
    useForm = v;
  }
}, 10);
var useDepartmentsByUnitsList;
module.link("../../../../client/views/hooks/useDepartmentsByUnitsList", {
  useDepartmentsByUnitsList: function (v) {
    useDepartmentsByUnitsList = v;
  }
}, 11);
var useMonitorsList;
module.link("../../../../client/views/hooks/useMonitorsList", {
  useMonitorsList: function (v) {
    useMonitorsList = v;
  }
}, 12);

function UnitEdit(_ref) {
  var title = _ref.title,
      data = _ref.data,
      unitId = _ref.unitId,
      isNew = _ref.isNew,
      unitMonitors = _ref.unitMonitors,
      unitDepartments = _ref.unitDepartments,
      reload = _ref.reload,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var unitsRoute = useRoute('omnichannel-units');

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      monitorsFilter = _useState2[0],
      setMonitorsFilter = _useState2[1];

  var debouncedMonitorsFilter = useDebouncedValue(monitorsFilter, 500);

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      departmentsFilter = _useState4[0],
      setDepartmentsFilter = _useState4[1];

  var debouncedDepartmentsFilter = useDebouncedValue(departmentsFilter, 500);

  var _useMonitorsList = useMonitorsList(useMemo(function () {
    return {
      filter: debouncedMonitorsFilter
    };
  }, [debouncedMonitorsFilter])),
      monitorsList = _useMonitorsList.itemsList,
      loadMoreMonitors = _useMonitorsList.loadMoreItems;

  var _useRecordList = useRecordList(monitorsList),
      monitorsPhase = _useRecordList.phase,
      monitorsItems = _useRecordList.items,
      monitorsTotal = _useRecordList.itemCount;

  var _useDepartmentsByUnit = useDepartmentsByUnitsList(useMemo(function () {
    return {
      filter: debouncedDepartmentsFilter,
      unitId: unitId
    };
  }, [debouncedDepartmentsFilter, unitId])),
      departmentsList = _useDepartmentsByUnit.itemsList,
      loadMoreDepartments = _useDepartmentsByUnit.loadMoreItems;

  var _useRecordList2 = useRecordList(departmentsList),
      departmentsPhase = _useRecordList2.phase,
      departmentsItems = _useRecordList2.items,
      departmentsTotal = _useRecordList2.itemCount;

  var departmentsSortedByName = departmentsItems.sort(function (a, b) {
    if (a.name > b.name) {
      return 1;
    }

    if (a.name < b.name) {
      return -1;
    }

    return 0;
  });
  var unit = data || {};
  var currUnitMonitors = useMemo(function () {
    return unitMonitors && unitMonitors.monitors ? unitMonitors.monitors.map(function (_ref2) {
      var monitorId = _ref2.monitorId,
          username = _ref2.username;
      return {
        value: monitorId,
        label: username
      };
    }) : [];
  }, [unitMonitors]);
  var visibilityOpts = [['public', t('Public')], ['private', t('Private')]];
  var currUnitDepartments = useMemo(function () {
    return unitDepartments && unitDepartments.departments && unitId ? unitDepartments.departments.map(function (_ref3) {
      var _id = _ref3._id,
          name = _ref3.name;
      return {
        value: _id,
        label: name
      };
    }) : [];
  }, [unitDepartments, unitId]);

  var _useForm = useForm({
    name: unit.name,
    visibility: unit.visibility,
    departments: currUnitDepartments,
    monitors: currUnitMonitors
  }),
      values = _useForm.values,
      handlers = _useForm.handlers,
      hasUnsavedChanges = _useForm.hasUnsavedChanges;

  var handleName = handlers.handleName,
      handleVisibility = handlers.handleVisibility,
      handleDepartments = handlers.handleDepartments,
      handleMonitors = handlers.handleMonitors;
  var name = values.name,
      visibility = values.visibility,
      departments = values.departments,
      monitors = values.monitors;
  var nameError = useMemo(function () {
    return !name || name.length === 0 ? t('The_field_is_required', t('name')) : undefined;
  }, [name, t]);
  var visibilityError = useMemo(function () {
    return !visibility || visibility.length === 0 ? t('The_field_is_required', t('description')) : undefined;
  }, [visibility, t]);
  var departmentError = useMemo(function () {
    return !departments || departments.length === 0 ? t('The_field_is_required', t('departments')) : undefined;
  }, [departments, t]);
  var unitMonitorsError = useMemo(function () {
    return !monitors || monitors.length === 0 ? t('The_field_is_required', t('monitors')) : undefined;
  }, [monitors, t]);
  var saveUnit = useMethod('livechat:saveUnit');
  var dispatchToastMessage = useToastMessageDispatch();
  var handleReturn = useMutableCallback(function () {
    unitsRoute.push({});
  });
  var canSave = useMemo(function () {
    return !nameError && !visibilityError && !departmentError && !unitMonitorsError;
  }, [nameError, visibilityError, departmentError, unitMonitorsError]);
  var handleSave = useMutableCallback(function () {
    function _callee() {
      var unitData, departmentsData, monitorsData;
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                unitData = {
                  name: name,
                  visibility: visibility
                };
                departmentsData = departments.map(function (department) {
                  return {
                    departmentId: department.value
                  };
                });
                monitorsData = monitors.map(function (monitor) {
                  return {
                    monitorId: monitor.value,
                    username: monitor.label
                  };
                });

                if (canSave) {
                  _context.next = 5;
                  break;
                }

                return _context.abrupt("return", dispatchToastMessage({
                  type: 'error',
                  message: t('The_field_is_required')
                }));

              case 5:
                _context.prev = 5;
                _context.next = 8;
                return _regeneratorRuntime.awrap(saveUnit(unitId, unitData, monitorsData, departmentsData));

              case 8:
                dispatchToastMessage({
                  type: 'success',
                  message: t('Saved')
                });
                reload();
                unitsRoute.push({});
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](5);
                dispatchToastMessage({
                  type: 'error',
                  message: _context.t0
                });

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[5, 13]], Promise);
    }

    return _callee;
  }());
  return /*#__PURE__*/React.createElement(Page, {
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: title
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
    onClick: handleReturn
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "back"
  }), " ", t('Back')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    mie: "none",
    flexGrow: 1,
    disabled: !hasUnsavedChanges || !canSave,
    onClick: handleSave
  }, t('Save')))), /*#__PURE__*/React.createElement(Page.ScrollableContentWithShadow, null, /*#__PURE__*/React.createElement(FieldGroup, _extends({
    w: "full",
    alignSelf: "center",
    maxWidth: "x600",
    is: "form",
    autoComplete: "off"
  }, props), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Name'), "*"), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    placeholder: t('Name'),
    flexGrow: 1,
    value: name,
    onChange: handleName,
    error: hasUnsavedChanges && nameError
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Visibility'), "*"), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Select, {
    options: visibilityOpts,
    value: visibility,
    error: hasUnsavedChanges && visibilityError,
    placeholder: t('Select_an_option'),
    onChange: handleVisibility,
    flexGrow: 1
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Departments'), "*"), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(PaginatedMultiSelectFiltered, {
    withTitle: true,
    filter: departmentsFilter,
    setFilter: setDepartmentsFilter,
    options: departmentsSortedByName,
    value: departments,
    error: hasUnsavedChanges && departmentError,
    maxWidth: "100%",
    placeholder: t('Select_an_option'),
    onChange: handleDepartments,
    flexGrow: 1,
    endReached: departmentsPhase === AsyncStatePhase.LOADING ? function () {} : function (start) {
      return loadMoreDepartments(start, Math.min(50, departmentsTotal));
    }
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Monitors'), "*"), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(PaginatedMultiSelectFiltered, {
    withTitle: true,
    filter: monitorsFilter,
    setFilter: setMonitorsFilter,
    options: monitorsItems,
    value: monitors,
    error: hasUnsavedChanges && unitMonitorsError,
    maxWidth: "100%",
    placeholder: t('Select_an_option'),
    onChange: handleMonitors,
    flexGrow: 1,
    endReached: monitorsPhase === AsyncStatePhase.LOADING ? function () {} : function (start) {
      return loadMoreMonitors(start, Math.min(50, monitorsTotal));
    }
  })))))));
}

module.exportDefault(UnitEdit);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/units/ea43ced38aae96eb6ff2240d192947746f2591e1.map
