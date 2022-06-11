function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/import/ImportHistoryPage.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
let Button, ButtonGroup, Table;
module.link("@rocket.chat/fuselage", {
  Button(v) {
    Button = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Table(v) {
    Table = v;
  }

}, 0);
let useMediaQuery, useSafely;
module.link("@rocket.chat/fuselage-hooks", {
  useMediaQuery(v) {
    useMediaQuery = v;
  },

  useSafely(v) {
    useSafely = v;
  }

}, 1);
let React, useState, useEffect, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 2);
let ProgressStep;
module.link("../../../../app/importer/lib/ImporterProgressStep", {
  ProgressStep(v) {
    ProgressStep = v;
  }

}, 3);
let Page;
module.link("../../../components/Page", {
  default(v) {
    Page = v;
  }

}, 4);
let useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 5);
let useEndpoint;
module.link("../../../contexts/ServerContext", {
  useEndpoint(v) {
    useEndpoint = v;
  }

}, 6);
let useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 7);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 8);
let ImportOperationSummary;
module.link("./ImportOperationSummary", {
  default(v) {
    ImportOperationSummary = v;
  }

}, 9);

function ImportHistoryPage() {
  var _latestOperations$fil;

  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  const [isLoading, setLoading] = useSafely(useState(true));
  const [currentOperation, setCurrentOperation] = useSafely(useState());
  const [latestOperations, setLatestOperations] = useSafely(useState([]));
  const getCurrentImportOperation = useEndpoint('GET', 'getCurrentImportOperation');
  const getLatestImportOperations = useEndpoint('GET', 'getLatestImportOperations');
  const downloadPendingFiles = useEndpoint('POST', 'downloadPendingFiles');
  const downloadPendingAvatars = useEndpoint('POST', 'downloadPendingAvatars');
  const newImportRoute = useRoute('admin-import-new');
  const importProgressRoute = useRoute('admin-import-progress');
  useEffect(() => {
    const loadData = async () => {
      setLoading(true);

      try {
        const {
          operation
        } = await getCurrentImportOperation();
        setCurrentOperation(operation);
      } catch (error) {
        dispatchToastMessage({
          type: 'error',
          message: t('Failed_To_Load_Import_Operation')
        });
      }

      try {
        const operations = await getLatestImportOperations();
        setLatestOperations(operations);
      } catch (error) {
        dispatchToastMessage({
          type: 'error',
          message: t('Failed_To_Load_Import_History')
        });
      }

      setLoading(false);
    };

    loadData();
  }, [dispatchToastMessage, getCurrentImportOperation, getLatestImportOperations, setCurrentOperation, setLatestOperations, setLoading, t]);
  const hasAnySuccessfulImport = useMemo(() => latestOperations === null || latestOperations === void 0 ? void 0 : latestOperations.some(_ref => {
    let {
      status
    } = _ref;
    return status === ProgressStep.DONE;
  }), [latestOperations]);

  const handleNewImportClick = () => {
    newImportRoute.push();
  };

  const handleDownloadPendingFilesClick = async () => {
    try {
      setLoading(true);
      const {
        count
      } = await downloadPendingFiles();

      if (!count) {
        dispatchToastMessage({
          type: 'info',
          message: t('No_files_left_to_download')
        });
        setLoading(false);
        return;
      }

      dispatchToastMessage({
        type: 'info',
        message: t('File_Downloads_Started')
      });
      importProgressRoute.push();
    } catch (error) {
      console.error(error);
      dispatchToastMessage({
        type: 'error',
        message: t('Failed_To_Download_Files')
      });
      setLoading(false);
    }
  };

  const handleDownloadPendingAvatarsClick = async () => {
    try {
      setLoading(true);
      const {
        count
      } = await downloadPendingAvatars();

      if (!count) {
        dispatchToastMessage({
          type: 'info',
          message: t('No_files_left_to_download')
        });
        setLoading(false);
        return;
      }

      dispatchToastMessage({
        type: 'info',
        message: t('File_Downloads_Started')
      });
      importProgressRoute.push();
    } catch (error) {
      console.error(error);
      dispatchToastMessage({
        type: 'error',
        message: t('Failed_To_Download_Files')
      });
      setLoading(false);
    }
  };

  const small = useMediaQuery('(max-width: 768px)');
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Import')
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
    primary: true,
    disabled: isLoading,
    onClick: handleNewImportClick
  }, t('Import_New_File')), hasAnySuccessfulImport && /*#__PURE__*/React.createElement(Button, {
    disabled: isLoading,
    onClick: handleDownloadPendingFilesClick
  }, t('Download_Pending_Files')), hasAnySuccessfulImport && /*#__PURE__*/React.createElement(Button, {
    disabled: isLoading,
    onClick: handleDownloadPendingAvatarsClick
  }, t('Download_Pending_Avatars')))), /*#__PURE__*/React.createElement(Page.ScrollableContentWithShadow, null, /*#__PURE__*/React.createElement(Table, {
    fixed: true
  }, /*#__PURE__*/React.createElement(Table.Head, null, /*#__PURE__*/React.createElement(Table.Row, null, /*#__PURE__*/React.createElement(Table.Cell, {
    is: "th",
    rowSpan: 2,
    width: "x140"
  }, t('Import_Type')), /*#__PURE__*/React.createElement(Table.Cell, {
    is: "th",
    rowSpan: 2
  }, t('Last_Updated')), !small && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Table.Cell, {
    is: "th",
    rowSpan: 2
  }, t('Last_Status')), /*#__PURE__*/React.createElement(Table.Cell, {
    is: "th",
    rowSpan: 2
  }, t('File')), /*#__PURE__*/React.createElement(Table.Cell, {
    is: "th",
    align: "center",
    colSpan: 4,
    width: "x320"
  }, t('Counters')))), !small && /*#__PURE__*/React.createElement(Table.Row, null, /*#__PURE__*/React.createElement(Table.Cell, {
    is: "th",
    align: "center"
  }, t('Users')), /*#__PURE__*/React.createElement(Table.Cell, {
    is: "th",
    align: "center"
  }, t('Channels')), /*#__PURE__*/React.createElement(Table.Cell, {
    is: "th",
    align: "center"
  }, t('Messages')), /*#__PURE__*/React.createElement(Table.Cell, {
    is: "th",
    align: "center"
  }, t('Total')))), /*#__PURE__*/React.createElement(Table.Body, null, isLoading ? Array.from({
    length: 20
  }, (_, i) => /*#__PURE__*/React.createElement(ImportOperationSummary.Skeleton, {
    small: small,
    key: i
  })) : /*#__PURE__*/React.createElement(React.Fragment, null, (currentOperation === null || currentOperation === void 0 ? void 0 : currentOperation.valid) && /*#__PURE__*/React.createElement(ImportOperationSummary, _extends({}, currentOperation, {
    small: small
  })), latestOperations === null || latestOperations === void 0 ? void 0 : (_latestOperations$fil = latestOperations.filter(_ref2 => {
    let {
      _id
    } = _ref2;
    return (currentOperation === null || currentOperation === void 0 ? void 0 : currentOperation._id) !== _id || !(currentOperation !== null && currentOperation !== void 0 && currentOperation.valid);
  }) // Forcing valid=false as the current API only accept preparation/progress over currentOperation
  ) === null || _latestOperations$fil === void 0 ? void 0 : _latestOperations$fil.map(operation => /*#__PURE__*/React.createElement(ImportOperationSummary, _extends({
    key: operation._id
  }, operation, {
    valid: false,
    small: small
  }))))))));
}

module.exportDefault(ImportHistoryPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/import/e88d44b07bf065787257bc8da3aa4a16efabf6d7.map
