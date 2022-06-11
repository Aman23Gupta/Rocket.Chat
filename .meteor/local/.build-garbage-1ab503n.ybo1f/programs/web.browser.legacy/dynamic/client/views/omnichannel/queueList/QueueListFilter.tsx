function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/queueList/QueueListFilter.tsx                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["setFilter"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 2);
module.export({
  QueueListFilter: function () {
    return QueueListFilter;
  }
});
var Box, Select, Label;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Select: function (v) {
    Select = v;
  },
  Label: function (v) {
    Label = v;
  }
}, 0);
var useMutableCallback, useLocalStorage;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  },
  useLocalStorage: function (v) {
    useLocalStorage = v;
  }
}, 1);
var React, useEffect;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useEffect: function (v) {
    useEffect = v;
  }
}, 2);
var AutoCompleteAgent;
module.link("../../../components/AutoCompleteAgent", {
  "default": function (v) {
    AutoCompleteAgent = v;
  }
}, 3);
var AutoCompleteDepartment;
module.link("../../../components/AutoCompleteDepartment", {
  "default": function (v) {
    AutoCompleteDepartment = v;
  }
}, 4);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 5);

var QueueListFilter = function (_ref) {
  var setFilter = _ref.setFilter,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var statusOptions = [['online', t('Online')], ['offline', t('Include_Offline_Agents')]];

  var _useLocalStorage = useLocalStorage('servedBy', 'all'),
      _useLocalStorage2 = _slicedToArray(_useLocalStorage, 2),
      servedBy = _useLocalStorage2[0],
      setServedBy = _useLocalStorage2[1];

  var _useLocalStorage3 = useLocalStorage('status', 'online'),
      _useLocalStorage4 = _slicedToArray(_useLocalStorage3, 2),
      status = _useLocalStorage4[0],
      setStatus = _useLocalStorage4[1];

  var _useLocalStorage5 = useLocalStorage('department', {
    value: 'all',
    label: t('All')
  }),
      _useLocalStorage6 = _slicedToArray(_useLocalStorage5, 2),
      department = _useLocalStorage6[0],
      setDepartment = _useLocalStorage6[1];

  var handleServedBy = useMutableCallback(function (e) {
    return setServedBy(e);
  });
  var handleStatus = useMutableCallback(function (e) {
    return setStatus(e);
  });
  var handleDepartment = useMutableCallback(function (e) {
    return setDepartment(e);
  });
  var onSubmit = useMutableCallback(function (e) {
    return e.preventDefault();
  });
  useEffect(function () {
    var filters = {
      status: status
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
//# sourceMappingURL=/dynamic/client/views/omnichannel/queueList/755420f7971fb81f18cb3c74a9b4afaadfcebc12.map
