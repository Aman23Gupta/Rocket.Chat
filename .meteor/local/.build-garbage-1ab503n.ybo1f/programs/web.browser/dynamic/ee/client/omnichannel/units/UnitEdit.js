function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/units/UnitEdit.js                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["title", "data", "unitId", "isNew", "unitMonitors", "unitDepartments", "reload"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
let Field, TextInput, Button, PaginatedMultiSelectFiltered, Select, ButtonGroup, Icon, FieldGroup;
module.link("@rocket.chat/fuselage", {
  Field(v) {
    Field = v;
  },

  TextInput(v) {
    TextInput = v;
  },

  Button(v) {
    Button = v;
  },

  PaginatedMultiSelectFiltered(v) {
    PaginatedMultiSelectFiltered = v;
  },

  Select(v) {
    Select = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Icon(v) {
    Icon = v;
  },

  FieldGroup(v) {
    FieldGroup = v;
  }

}, 0);
let useMutableCallback, useDebouncedValue;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  },

  useDebouncedValue(v) {
    useDebouncedValue = v;
  }

}, 1);
let React, useMemo, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useState(v) {
    useState = v;
  }

}, 2);
let Page;
module.link("../../../../client/components/Page", {
  default(v) {
    Page = v;
  }

}, 3);
let useRoute;
module.link("../../../../client/contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 4);
let useMethod;
module.link("../../../../client/contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 5);
let useToastMessageDispatch;
module.link("../../../../client/contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 6);
let useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 7);
let useRecordList;
module.link("../../../../client/hooks/lists/useRecordList", {
  useRecordList(v) {
    useRecordList = v;
  }

}, 8);
let AsyncStatePhase;
module.link("../../../../client/hooks/useAsyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 9);
let useForm;
module.link("../../../../client/hooks/useForm", {
  useForm(v) {
    useForm = v;
  }

}, 10);
let useDepartmentsByUnitsList;
module.link("../../../../client/views/hooks/useDepartmentsByUnitsList", {
  useDepartmentsByUnitsList(v) {
    useDepartmentsByUnitsList = v;
  }

}, 11);
let useMonitorsList;
module.link("../../../../client/views/hooks/useMonitorsList", {
  useMonitorsList(v) {
    useMonitorsList = v;
  }

}, 12);

function UnitEdit(_ref) {
  let {
    title,
    data,
    unitId,
    isNew,
    unitMonitors,
    unitDepartments,
    reload
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const unitsRoute = useRoute('omnichannel-units');
  const [monitorsFilter, setMonitorsFilter] = useState('');
  const debouncedMonitorsFilter = useDebouncedValue(monitorsFilter, 500);
  const [departmentsFilter, setDepartmentsFilter] = useState('');
  const debouncedDepartmentsFilter = useDebouncedValue(departmentsFilter, 500);
  const {
    itemsList: monitorsList,
    loadMoreItems: loadMoreMonitors
  } = useMonitorsList(useMemo(() => ({
    filter: debouncedMonitorsFilter
  }), [debouncedMonitorsFilter]));
  const {
    phase: monitorsPhase,
    items: monitorsItems,
    itemCount: monitorsTotal
  } = useRecordList(monitorsList);
  const {
    itemsList: departmentsList,
    loadMoreItems: loadMoreDepartments
  } = useDepartmentsByUnitsList(useMemo(() => ({
    filter: debouncedDepartmentsFilter,
    unitId
  }), [debouncedDepartmentsFilter, unitId]));
  const {
    phase: departmentsPhase,
    items: departmentsItems,
    itemCount: departmentsTotal
  } = useRecordList(departmentsList);
  const departmentsSortedByName = departmentsItems.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    }

    if (a.name < b.name) {
      return -1;
    }

    return 0;
  });
  const unit = data || {};
  const currUnitMonitors = useMemo(() => unitMonitors && unitMonitors.monitors ? unitMonitors.monitors.map(_ref2 => {
    let {
      monitorId,
      username
    } = _ref2;
    return {
      value: monitorId,
      label: username
    };
  }) : [], [unitMonitors]);
  const visibilityOpts = [['public', t('Public')], ['private', t('Private')]];
  const currUnitDepartments = useMemo(() => unitDepartments && unitDepartments.departments && unitId ? unitDepartments.departments.map(_ref3 => {
    let {
      _id,
      name
    } = _ref3;
    return {
      value: _id,
      label: name
    };
  }) : [], [unitDepartments, unitId]);
  const {
    values,
    handlers,
    hasUnsavedChanges
  } = useForm({
    name: unit.name,
    visibility: unit.visibility,
    departments: currUnitDepartments,
    monitors: currUnitMonitors
  });
  const {
    handleName,
    handleVisibility,
    handleDepartments,
    handleMonitors
  } = handlers;
  const {
    name,
    visibility,
    departments,
    monitors
  } = values;
  const nameError = useMemo(() => !name || name.length === 0 ? t('The_field_is_required', t('name')) : undefined, [name, t]);
  const visibilityError = useMemo(() => !visibility || visibility.length === 0 ? t('The_field_is_required', t('description')) : undefined, [visibility, t]);
  const departmentError = useMemo(() => !departments || departments.length === 0 ? t('The_field_is_required', t('departments')) : undefined, [departments, t]);
  const unitMonitorsError = useMemo(() => !monitors || monitors.length === 0 ? t('The_field_is_required', t('monitors')) : undefined, [monitors, t]);
  const saveUnit = useMethod('livechat:saveUnit');
  const dispatchToastMessage = useToastMessageDispatch();
  const handleReturn = useMutableCallback(() => {
    unitsRoute.push({});
  });
  const canSave = useMemo(() => !nameError && !visibilityError && !departmentError && !unitMonitorsError, [nameError, visibilityError, departmentError, unitMonitorsError]);
  const handleSave = useMutableCallback(async () => {
    const unitData = {
      name,
      visibility
    };
    const departmentsData = departments.map(department => ({
      departmentId: department.value
    }));
    const monitorsData = monitors.map(monitor => ({
      monitorId: monitor.value,
      username: monitor.label
    }));

    if (!canSave) {
      return dispatchToastMessage({
        type: 'error',
        message: t('The_field_is_required')
      });
    }

    try {
      await saveUnit(unitId, unitData, monitorsData, departmentsData);
      dispatchToastMessage({
        type: 'success',
        message: t('Saved')
      });
      reload();
      unitsRoute.push({});
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }
  });
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
    endReached: departmentsPhase === AsyncStatePhase.LOADING ? () => {} : start => loadMoreDepartments(start, Math.min(50, departmentsTotal))
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
    endReached: monitorsPhase === AsyncStatePhase.LOADING ? () => {} : start => loadMoreMonitors(start, Math.min(50, monitorsTotal))
  })))))));
}

module.exportDefault(UnitEdit);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/units/ff81b541fac784d440a70a1b810c21854e4f6dd1.map
