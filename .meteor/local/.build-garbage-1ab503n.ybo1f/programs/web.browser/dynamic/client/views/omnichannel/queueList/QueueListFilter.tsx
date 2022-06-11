function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/queueList/QueueListFilter.tsx                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["setFilter"];

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
module.export({
  QueueListFilter: () => QueueListFilter
});
let Box, Select, Label;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Select(v) {
    Select = v;
  },

  Label(v) {
    Label = v;
  }

}, 0);
let useMutableCallback, useLocalStorage;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  },

  useLocalStorage(v) {
    useLocalStorage = v;
  }

}, 1);
let React, useEffect;
module.link("react", {
  default(v) {
    React = v;
  },

  useEffect(v) {
    useEffect = v;
  }

}, 2);
let AutoCompleteAgent;
module.link("../../../components/AutoCompleteAgent", {
  default(v) {
    AutoCompleteAgent = v;
  }

}, 3);
let AutoCompleteDepartment;
module.link("../../../components/AutoCompleteDepartment", {
  default(v) {
    AutoCompleteDepartment = v;
  }

}, 4);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 5);

const QueueListFilter = _ref => {
  let {
    setFilter
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const statusOptions = [['online', t('Online')], ['offline', t('Include_Offline_Agents')]];
  const [servedBy, setServedBy] = useLocalStorage('servedBy', 'all');
  const [status, setStatus] = useLocalStorage('status', 'online');
  const [department, setDepartment] = useLocalStorage('department', {
    value: 'all',
    label: t('All')
  });
  const handleServedBy = useMutableCallback(e => setServedBy(e));
  const handleStatus = useMutableCallback(e => setStatus(e));
  const handleDepartment = useMutableCallback(e => setDepartment(e));
  const onSubmit = useMutableCallback(e => e.preventDefault());
  useEffect(() => {
    const filters = {
      status
    };

    if (servedBy !== 'all') {
      filters.servedBy = servedBy;
    }

    if (department !== null && department !== void 0 && department.value && department.value !== 'all') {
      filters.departmentId = department.value;
    }

    setFilter(filters);
  }, [setFilter, servedBy, status, department]);
  return /*#__PURE__*/React.createElement(Box, _extends({
    mb: "x16",
    is: "form",
    onSubmit: onSubmit,
    display: "flex",
    flexDirection: "column"
  }, props), /*#__PURE__*/React.createElement(Box, _extends({
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap"
  }, props), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    mie: "x8",
    flexGrow: 1,
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Label, {
    mb: "x4"
  }, t('Served_By')), /*#__PURE__*/React.createElement(AutoCompleteAgent, {
    haveAll: true,
    value: servedBy,
    onChange: handleServedBy
  })), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    mie: "x8",
    flexGrow: 1,
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Label, {
    mb: "x4"
  }, t('Status')), /*#__PURE__*/React.createElement(Select, {
    flexShrink: 0,
    options: statusOptions,
    value: status,
    onChange: handleStatus,
    placeholder: t('Status')
  })), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    mie: "x8",
    flexGrow: 1,
    flexDirection: "column"
  }, /*#__PURE__*/React.createElement(Label, {
    mb: "x4"
  }, t('Department')), /*#__PURE__*/React.createElement(AutoCompleteDepartment, {
    haveAll: true,
    value: department,
    onChange: handleDepartment,
    label: t('All'),
    onlyMyDepartments: true
  }))));
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/queueList/8287a8d642e99649edf9afb716f66573e02b1516.map
