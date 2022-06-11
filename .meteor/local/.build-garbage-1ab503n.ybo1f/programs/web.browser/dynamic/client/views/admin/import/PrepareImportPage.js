function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/import/PrepareImportPage.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let Badge, Box, Button, ButtonGroup, Icon, Margins, Throbber, Tabs;
module.link("@rocket.chat/fuselage", {
  Badge(v) {
    Badge = v;
  },

  Box(v) {
    Box = v;
  },

  Button(v) {
    Button = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Icon(v) {
    Icon = v;
  },

  Margins(v) {
    Margins = v;
  },

  Throbber(v) {
    Throbber = v;
  },

  Tabs(v) {
    Tabs = v;
  }

}, 0);
let useDebouncedValue, useSafely;
module.link("@rocket.chat/fuselage-hooks", {
  useDebouncedValue(v) {
    useDebouncedValue = v;
  },

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
let ProgressStep, ImportWaitingStates, ImportFileReadyStates, ImportPreparingStartedStates, ImportingStartedStates, ImportingErrorStates;
module.link("../../../../app/importer/lib/ImporterProgressStep", {
  ProgressStep(v) {
    ProgressStep = v;
  },

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

  ImportingErrorStates(v) {
    ImportingErrorStates = v;
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
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 9);
let PrepareChannels;
module.link("./PrepareChannels", {
  default(v) {
    PrepareChannels = v;
  }

}, 10);
let PrepareUsers;
module.link("./PrepareUsers", {
  default(v) {
    PrepareUsers = v;
  }

}, 11);
let useErrorHandler;
module.link("./useErrorHandler", {
  useErrorHandler(v) {
    useErrorHandler = v;
  }

}, 12);

const waitFor = (fn, predicate) => new Promise((resolve, reject) => {
  const callPromise = () => {
    fn().then(result => {
      if (predicate(result)) {
        resolve(result);
        return;
      }

      setTimeout(callPromise, 1000);
    }, reject);
  };

  callPromise();
});

function PrepareImportPage() {
  const t = useTranslation();
  const handleError = useErrorHandler();
  const [isPreparing, setPreparing] = useSafely(useState(true));
  const [progressRate, setProgressRate] = useSafely(useState(null));
  const [status, setStatus] = useSafely(useState(null));
  const [messageCount, setMessageCount] = useSafely(useState(0));
  const [users, setUsers] = useState([]);
  const [channels, setChannels] = useState([]);
  const [isImporting, setImporting] = useSafely(useState(false));
  const usersCount = useMemo(() => users.filter(_ref => {
    let {
      do_import
    } = _ref;
    return do_import;
  }).length, [users]);
  const channelsCount = useMemo(() => channels.filter(_ref2 => {
    let {
      do_import
    } = _ref2;
    return do_import;
  }).length, [channels]);
  const importHistoryRoute = useRoute('admin-import');
  const newImportRoute = useRoute('admin-import-new');
  const importProgressRoute = useRoute('admin-import-progress');
  const getImportFileData = useEndpoint('GET', 'getImportFileData');
  const getCurrentImportOperation = useEndpoint('GET', 'getCurrentImportOperation');
  const startImport = useEndpoint('POST', 'startImport');
  useEffect(() => {
    const streamer = new Meteor.Streamer('importers');

    const handleProgressUpdated = _ref3 => {
      let {
        rate
      } = _ref3;
      setProgressRate(rate);
    };

    streamer.on('progress', handleProgressUpdated);
    return () => {
      streamer.removeListener('progress', handleProgressUpdated);
    };
  }, [setProgressRate]);
  useEffect(() => {
    const loadImportFileData = async () => {
      try {
        const data = await waitFor(getImportFileData, data => data && !data.waiting);

        if (!data) {
          handleError(t('Importer_not_setup'));
          importHistoryRoute.push();
          return;
        }

        if (data.step) {
          handleError(t('Failed_To_Load_Import_Data'));
          importHistoryRoute.push();
          return;
        }

        setMessageCount(data.message_count);
        setUsers(data.users.map(user => _objectSpread(_objectSpread({}, user), {}, {
          do_import: true
        })));
        setChannels(data.channels.map(channel => _objectSpread(_objectSpread({}, channel), {}, {
          do_import: true
        })));
        setPreparing(false);
        setProgressRate(null);
      } catch (error) {
        handleError(error, t('Failed_To_Load_Import_Data'));
        importHistoryRoute.push();
      }
    };

    const loadCurrentOperation = async () => {
      try {
        const {
          operation
        } = await waitFor(getCurrentImportOperation, _ref4 => {
          let {
            operation
          } = _ref4;
          return operation.valid && !ImportWaitingStates.includes(operation.status);
        });

        if (!operation.valid) {
          newImportRoute.push();
          return;
        }

        if (ImportingStartedStates.includes(operation.status)) {
          importProgressRoute.push();
          return;
        }

        if (operation.status === ProgressStep.USER_SELECTION || ImportPreparingStartedStates.includes(operation.status) || ImportFileReadyStates.includes(operation.status)) {
          setStatus(operation.status);
          loadImportFileData();
          return;
        }

        if (ImportingErrorStates.includes(operation.status)) {
          handleError(t('Import_Operation_Failed'));
          importHistoryRoute.push();
          return;
        }

        if (operation.status === ProgressStep.DONE) {
          importHistoryRoute.push();
          return;
        }

        handleError(t('Unknown_Import_State'));
        importHistoryRoute.push();
      } catch (error) {
        handleError(t('Failed_To_Load_Import_Data'));
        importHistoryRoute.push();
      }
    };

    loadCurrentOperation();
  }, [getCurrentImportOperation, getImportFileData, handleError, importHistoryRoute, importProgressRoute, newImportRoute, setMessageCount, setPreparing, setProgressRate, setStatus, t]);

  const handleBackToImportsButtonClick = () => {
    importHistoryRoute.push();
  };

  const handleStartButtonClick = async () => {
    setImporting(true);

    try {
      await startImport({
        input: {
          users,
          channels
        }
      });
      importProgressRoute.push();
    } catch (error) {
      handleError(error, t('Failed_To_Start_Import'));
      importHistoryRoute.push();
    }
  };

  const [tab, setTab] = useState('users');
  const handleTabClick = useMemo(() => tab => () => setTab(tab), []);
  const statusDebounced = useDebouncedValue(status, 100);
  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Importing_Data')
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
    ghost: true,
    onClick: handleBackToImportsButtonClick
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "back"
  }), " ", t('Back_to_imports')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    disabled: isImporting,
    onClick: handleStartButtonClick
  }, t('Importer_Prepare_Start_Import')))), /*#__PURE__*/React.createElement(Page.ScrollableContentWithShadow, null, /*#__PURE__*/React.createElement(Box, {
    marginInline: "auto",
    marginBlock: "x24",
    width: "full",
    maxWidth: "590px"
  }, /*#__PURE__*/React.createElement(Box, {
    is: "h2",
    fontScale: "p2m"
  }, statusDebounced && t(statusDebounced.replace('importer_', 'importer_status_'))), !isPreparing && /*#__PURE__*/React.createElement(Tabs, {
    flexShrink: 0
  }, /*#__PURE__*/React.createElement(Tabs.Item, {
    disabled: usersCount === 0,
    selected: tab === 'users',
    onClick: handleTabClick('users')
  }, t('Users'), " ", /*#__PURE__*/React.createElement(Badge, null, usersCount)), /*#__PURE__*/React.createElement(Tabs.Item, {
    selected: tab === 'channels',
    onClick: handleTabClick('channels')
  }, t('Channels'), " ", /*#__PURE__*/React.createElement(Badge, null, channelsCount)), /*#__PURE__*/React.createElement(Tabs.Item, {
    disabled: true
  }, t('Messages'), /*#__PURE__*/React.createElement(Badge, null, messageCount))), /*#__PURE__*/React.createElement(Margins, {
    block: "x24"
  }, isPreparing && /*#__PURE__*/React.createElement(React.Fragment, null, progressRate ? /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    justifyContent: "center",
    fontScale: "p2"
  }, /*#__PURE__*/React.createElement(Box, {
    is: "progress",
    value: (progressRate * 10).toFixed(0),
    max: "1000",
    marginInlineEnd: "x24"
  }), /*#__PURE__*/React.createElement(Box, {
    is: "span"
  }, s.numberFormat(progressRate, 0), "%")) : /*#__PURE__*/React.createElement(Throbber, {
    justifyContent: "center"
  })), !isPreparing && tab === 'users' && /*#__PURE__*/React.createElement(PrepareUsers, {
    usersCount: usersCount,
    users: users,
    setUsers: setUsers
  }), !isPreparing && tab === 'channels' && /*#__PURE__*/React.createElement(PrepareChannels, {
    channels: channels,
    channelsCount: channelsCount,
    setChannels: setChannels
  })))));
}

module.exportDefault(PrepareImportPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/import/19a26e828b912c761068117a84660c3467672e7b.map
