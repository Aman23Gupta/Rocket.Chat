function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/import/ImportProgressPage.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Margins, Throbber;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Margins(v) {
    Margins = v;
  },

  Throbber(v) {
    Throbber = v;
  }

}, 0);
let useSafely;
module.link("@rocket.chat/fuselage-hooks", {
  useSafely(v) {
    useSafely = v;
  }

}, 1);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 2);
let React, useEffect, useState, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useState(v) {
    useState = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 3);
let s;
module.link("underscore.string", {
  default(v) {
    s = v;
  }

}, 4);
let ProgressStep, ImportingStartedStates;
module.link("../../../../app/importer/lib/ImporterProgressStep", {
  ProgressStep(v) {
    ProgressStep = v;
  },

  ImportingStartedStates(v) {
    ImportingStartedStates = v;
  }

}, 5);
let Page;
module.link("../../../components/Page", {
  default(v) {
    Page = v;
  }

}, 6);
let useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 7);
let useEndpoint;
module.link("../../../contexts/ServerContext", {
  useEndpoint(v) {
    useEndpoint = v;
  }

}, 8);
let useToastMessageDispatch;
module.link("../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 9);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 10);
let useErrorHandler;
module.link("./useErrorHandler", {
  useErrorHandler(v) {
    useErrorHandler = v;
  }

}, 11);

function ImportProgressPage() {
  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  const handleError = useErrorHandler();
  const [importerKey, setImporterKey] = useSafely(useState(null));
  const [step, setStep] = useSafely(useState('Loading...'));
  const [completed, setCompleted] = useSafely(useState(0));
  const [total, setTotal] = useSafely(useState(0));
  const getCurrentImportOperation = useEndpoint('GET', 'getCurrentImportOperation');
  const getImportProgress = useEndpoint('GET', 'getImportProgress');
  const importHistoryRoute = useRoute('admin-import');
  const prepareImportRoute = useRoute('admin-import-prepare');
  useEffect(() => {
    const loadCurrentOperation = async () => {
      try {
        const {
          operation
        } = await getCurrentImportOperation();

        if (!operation.valid) {
          importHistoryRoute.push();
          return;
        }

        if (!ImportingStartedStates.includes(operation.status)) {
          prepareImportRoute.push();
          return;
        }

        setImporterKey(operation.importerKey);
        setCompleted(operation.count.completed);
        setTotal(operation.count.total);
      } catch (error) {
        handleError(error, t('Failed_To_Load_Import_Data'));
        importHistoryRoute.push();
      }
    };

    loadCurrentOperation();
  }, [getCurrentImportOperation, handleError, importHistoryRoute, prepareImportRoute, setCompleted, setImporterKey, setTotal, t]);
  useEffect(() => {
    if (!importerKey) {
      return;
    }

    const handleProgressUpdated = _ref => {
      let {
        key,
        step,
        count: {
          completed = 0,
          total = 0
        } = {}
      } = _ref;

      if (key.toLowerCase() !== importerKey) {
        return;
      }

      switch (step) {
        case ProgressStep.DONE:
          dispatchToastMessage({
            type: 'success',
            message: t(step[0].toUpperCase() + step.slice(1))
          });
          importHistoryRoute.push();
          return;

        case ProgressStep.ERROR:
        case ProgressStep.CANCELLED:
          handleError(t(step[0].toUpperCase() + step.slice(1)));
          importHistoryRoute.push();
          return;

        default:
          setStep(step);
          setCompleted(completed);
          setTotal(total);
          break;
      }
    };

    const streamer = new Meteor.Streamer('importers');

    const loadImportProgress = async () => {
      try {
        const progress = await getImportProgress();

        if (!progress) {
          dispatchToastMessage({
            type: 'warning',
            message: t('Importer_not_in_progress')
          });
          prepareImportRoute.push();
          return;
        }

        streamer.on('progress', handleProgressUpdated);
        handleProgressUpdated(progress);
      } catch (error) {
        handleError(error, t('Failed_To_Load_Import_Data'));
        importHistoryRoute.push();
      }
    };

    loadImportProgress();
    return () => {
      streamer.removeListener('progress', handleProgressUpdated);
    };
  }, [dispatchToastMessage, getImportProgress, handleError, importHistoryRoute, importerKey, prepareImportRoute, setCompleted, setStep, setTotal, t]);
  const progressRate = useMemo(() => {
    if (total === 0) {
      return null;
    }

    return completed / total * 100;
  }, [completed, total]);
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Importing_Data')
  }), /*#__PURE__*/React.createElement(Page.ScrollableContentWithShadow, null, /*#__PURE__*/React.createElement(Box, {
    marginInline: "auto",
    marginBlock: "neg-x24",
    width: "full",
    maxWidth: "x580"
  }, /*#__PURE__*/React.createElement(Margins, {
    block: "x24"
  }, /*#__PURE__*/React.createElement(Box, {
    is: "p",
    fontScale: "p2"
  }, t(step[0].toUpperCase() + step.slice(1))), progressRate ? /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    justifyContent: "center"
  }, /*#__PURE__*/React.createElement(Box, {
    is: "progress",
    value: completed,
    max: total,
    marginInlineEnd: "x24"
  }), /*#__PURE__*/React.createElement(Box, {
    is: "span",
    fontScale: "p2"
  }, completed, "/", total, " (", s.numberFormat(progressRate, 0), "%)")) : /*#__PURE__*/React.createElement(Throbber, {
    justifyContent: "center"
  })))));
}

module.exportDefault(ImportProgressPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/import/ff793b2b61f007aae7eeef7f2d8dc3e5a0cc75d7.map
