function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/import/ImportOperationSummary.js                                                                 //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Table;
module.link("@rocket.chat/fuselage", {
  Table(v) {
    Table = v;
  }

}, 0);
let React, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 1);
let ImportWaitingStates, ImportFileReadyStates, ImportPreparingStartedStates, ImportingStartedStates, ProgressStep;
module.link("../../../../app/importer/lib/ImporterProgressStep", {
  ImportWaitingStates(v) {
    ImportWaitingStates = v;
  },

  ImportFileReadyStates(v) {
    ImportFileReadyStates = v;
  },

  ImportPreparingStartedStates(v) {
    ImportPreparingStartedStates = v;
  },

  ImportingStartedStates(v) {
    ImportingStartedStates = v;
  },

  ProgressStep(v) {
    ProgressStep = v;
  }

}, 2);
let useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 3);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 4);
let useFormatDateAndTime;
module.link("../../../hooks/useFormatDateAndTime", {
  useFormatDateAndTime(v) {
    useFormatDateAndTime = v;
  }

}, 5);
let ImportOperationSummarySkeleton;
module.link("./ImportOperationSummarySkeleton", {
  default(v) {
    ImportOperationSummarySkeleton = v;
  }

}, 6);

function ImportOperationSummary(_ref) {
  let {
    type,
    _updatedAt,
    status,
    file,
    user,
    small,
    count: {
      users = 0,
      channels = 0,
      messages = 0,
      total = 0
    } = {
      users: null,
      channels: null,
      messages: null,
      total: null
    },
    valid
  } = _ref;
  const t = useTranslation();
  const formatDateAndTime = useFormatDateAndTime();
  const fileName = useMemo(() => {
    if (!file) {
      return '';
    }

    const fileName = file;
    const userPattern = "_".concat(user, "_");
    const idx = fileName.indexOf(userPattern);

    if (idx >= 0) {
      return fileName.slice(idx + userPattern.length);
    }

    return fileName;
  }, [file, user]);
  const canContinue = useMemo(() => valid && [ProgressStep.USER_SELECTION, ...ImportWaitingStates, ...ImportFileReadyStates, ...ImportPreparingStartedStates].includes(status), [valid, status]);
  const canCheckProgress = useMemo(() => valid && ImportingStartedStates.includes(status), [valid, status]);
  const prepareImportRoute = useRoute('admin-import-prepare');
  const importProgressRoute = useRoute('admin-import-progress');

  const handleClick = () => {
    if (canContinue) {
      prepareImportRoute.push();
      return;
    }

    if (canCheckProgress) {
      importProgressRoute.push();
    }
  };

  const hasAction = canContinue || canCheckProgress;
  const props = hasAction ? {
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
//# sourceMappingURL=/dynamic/client/views/admin/import/5ddf74add3726f2cfe4332abb1181eae6ad86d9d.map
