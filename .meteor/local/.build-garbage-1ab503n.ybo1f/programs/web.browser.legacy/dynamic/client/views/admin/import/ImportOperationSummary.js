function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/import/ImportOperationSummary.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _toConsumableArray;

module.link("@babel/runtime/helpers/toConsumableArray", {
  default: function (v) {
    _toConsumableArray = v;
  }
}, 0);
var Table;
module.link("@rocket.chat/fuselage", {
  Table: function (v) {
    Table = v;
  }
}, 0);
var React, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 1);
var ImportWaitingStates, ImportFileReadyStates, ImportPreparingStartedStates, ImportingStartedStates, ProgressStep;
module.link("../../../../app/importer/lib/ImporterProgressStep", {
  ImportWaitingStates: function (v) {
    ImportWaitingStates = v;
  },
  ImportFileReadyStates: function (v) {
    ImportFileReadyStates = v;
  },
  ImportPreparingStartedStates: function (v) {
    ImportPreparingStartedStates = v;
  },
  ImportingStartedStates: function (v) {
    ImportingStartedStates = v;
  },
  ProgressStep: function (v) {
    ProgressStep = v;
  }
}, 2);
var useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 3);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 4);
var useFormatDateAndTime;
module.link("../../../hooks/useFormatDateAndTime", {
  useFormatDateAndTime: function (v) {
    useFormatDateAndTime = v;
  }
}, 5);
var ImportOperationSummarySkeleton;
module.link("./ImportOperationSummarySkeleton", {
  "default": function (v) {
    ImportOperationSummarySkeleton = v;
  }
}, 6);

function ImportOperationSummary(_ref) {
  var type = _ref.type,
      _updatedAt = _ref._updatedAt,
      status = _ref.status,
      file = _ref.file,
      user = _ref.user,
      small = _ref.small,
      _ref$count = _ref.count;
  _ref$count = _ref$count === void 0 ? {
    users: null,
    channels: null,
    messages: null,
    total: null
  } : _ref$count;
  var _ref$count$users = _ref$count.users,
      users = _ref$count$users === void 0 ? 0 : _ref$count$users,
      _ref$count$channels = _ref$count.channels,
      channels = _ref$count$channels === void 0 ? 0 : _ref$count$channels,
      _ref$count$messages = _ref$count.messages,
      messages = _ref$count$messages === void 0 ? 0 : _ref$count$messages,
      _ref$count$total = _ref$count.total,
      total = _ref$count$total === void 0 ? 0 : _ref$count$total,
      valid = _ref.valid;
  var t = useTranslation();
  var formatDateAndTime = useFormatDateAndTime();
  var fileName = useMemo(function () {
    if (!file) {
      return '';
    }

    var fileName = file;
    var userPattern = "_" + user + "_";
    var idx = fileName.indexOf(userPattern);

    if (idx >= 0) {
      return fileName.slice(idx + userPattern.length);
    }

    return fileName;
  }, [file, user]);
  var canContinue = useMemo(function () {
    return valid && [ProgressStep.USER_SELECTION].concat(_toConsumableArray(ImportWaitingStates), _toConsumableArray(ImportFileReadyStates), _toConsumableArray(ImportPreparingStartedStates)).includes(status);
  }, [valid, status]);
  var canCheckProgress = useMemo(function () {
    return valid && ImportingStartedStates.includes(status);
  }, [valid, status]);
  var prepareImportRoute = useRoute('admin-import-prepare');
  var importProgressRoute = useRoute('admin-import-progress');

  var handleClick = function () {
    if (canContinue) {
      prepareImportRoute.push();
      return;
    }

    if (canCheckProgress) {
      importProgressRoute.push();
    }
  };

  var hasAction = canContinue || canCheckProgress;
  var props = hasAction ? {
    tabIndex: 0,
    role: 'link',
    action: true,
    onClick: handleClick
  } : {};
  return /*#__PURE__*/React.createElement(Table.Row, props, /*#__PURE__*/React.createElement(Table.Cell, null, type), /*#__PURE__*/React.createElement(Table.Cell, null, formatDateAndTime(_updatedAt)), !small && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Table.Cell, null, status && t(status.replace('importer_', 'importer_status_'))), /*#__PURE__*/React.createElement(Table.Cell, null, fileName), /*#__PURE__*/React.createElement(Table.Cell, {
    align: "center"
  }, users), /*#__PURE__*/React.createElement(Table.Cell, {
    align: "center"
  }, channels), /*#__PURE__*/React.createElement(Table.Cell, {
    align: "center"
  }, messages), /*#__PURE__*/React.createElement(Table.Cell, {
    align: "center"
  }, total)));
}

module.exportDefault(Object.assign(ImportOperationSummary, {
  Skeleton: ImportOperationSummarySkeleton
}));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/import/6e904ea72fa86f6115b0533cdbc8a0512e4a962a.map
