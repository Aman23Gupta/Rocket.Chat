function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/integrations/edit/OutgoingWebhookHistoryPage.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
let Button, ButtonGroup, Icon, Pagination;
module.link("@rocket.chat/fuselage", {
  Button(v) {
    Button = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Icon(v) {
    Icon = v;
  },

  Pagination(v) {
    Pagination = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React, useMemo, useCallback, useState, useEffect;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useState(v) {
    useState = v;
  },

  useEffect(v) {
    useEffect = v;
  }

}, 2);
let integrationHistoryStreamer;
module.link("../../../../../app/integrations/client/streamer", {
  integrationHistoryStreamer(v) {
    integrationHistoryStreamer = v;
  }

}, 3);
let Page;
module.link("../../../../components/Page", {
  default(v) {
    Page = v;
  }

}, 4);
let useRoute, useRouteParameter;
module.link("../../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  },

  useRouteParameter(v) {
    useRouteParameter = v;
  }

}, 5);
let useMethod;
module.link("../../../../contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 6);
let useToastMessageDispatch;
module.link("../../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 7);
let useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 8);
let AsyncStatePhase;
module.link("../../../../hooks/useAsyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 9);
let useEndpointData;
module.link("../../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 10);
let HistoryContent;
module.link("./HistoryContent", {
  default(v) {
    HistoryContent = v;
  }

}, 11);

function OutgoingWebhookHistoryPage(props) {
  const dispatchToastMessage = useToastMessageDispatch();
  const t = useTranslation();
  const [currentData, setCurrentData] = useState();
  const [current, setCurrent] = useState();
  const [itemsPerPage, setItemsPerPage] = useState();
  const [mounted, setMounted] = useState(false);
  const [total, setTotal] = useState(0);
  const router = useRoute('admin-integrations');
  const clearHistory = useMethod('clearIntegrationHistory');
  const id = useRouteParameter('id');
  const query = useMemo(() => ({
    id,
    count: itemsPerPage,
    offset: current
  }), [id, itemsPerPage, current]);
  const {
    value: data,
    phase: state,
    reload
  } = useEndpointData('integrations.history', query);

  const handleClearHistory = async () => {
    try {
      await clearHistory();
      dispatchToastMessage({
        type: 'success',
        message: t('Integration_History_Cleared')
      });
      reload();
      setMounted(false);
    } catch (e) {
      dispatchToastMessage({
        type: 'error',
        message: e
      });
    }
  };

  const handleClickReturn = () => {
    router.push({});
  };

  const handleDataChange = useMutableCallback(_ref => {
    let {
      type,
      id,
      diff,
      data
    } = _ref;

    if (type === 'inserted') {
      setTotal(total => total + 1);
      setCurrentData(state => [data].concat(state));
      return;
    }

    if (type === 'updated') {
      setCurrentData(state => {
        const index = state.findIndex(_ref2 => {
          let {
            _id
          } = _ref2;
          return _id === id;
        });
        Object.assign(state[index], diff);
        return state;
      });
      return;
    }

    if (type === 'removed') {
      setCurrentData([]);
    }
  });
  useEffect(() => {
    if (state === AsyncStatePhase.RESOLVED && !mounted) {
      setCurrentData(data.history);
      setTotal(data.total);
      setMounted(true);
    }
  }, [data, mounted, state]);
  useEffect(() => {
    if (mounted) {
      integrationHistoryStreamer.on(id, handleDataChange);
    }

    return () => integrationHistoryStreamer.removeListener(id, handleDataChange);
  }, [handleDataChange, id, mounted]);
  const showingResultsLabel = useCallback(_ref3 => {
    let {
      count,
      current,
      itemsPerPage
    } = _ref3;
    return t('Showing_results_of', current + 1, Math.min(current + itemsPerPage, count), count);
  }, [t]);
  return /*#__PURE__*/React.createElement(Page, _extends({
    flexDirection: "column"
  }, props), /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Integration_Outgoing_WebHook_History')
  }, /*#__PURE__*/React.createElement(ButtonGroup, null, /*#__PURE__*/React.createElement(Button, {
    onClick: handleClickReturn
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "back",
    size: "x16"
  }), " ", t('Back')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    danger: true,
    onClick: handleClearHistory,
    disabled: total === 0
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "trash"
  }), " ", t('clear_history')))), /*#__PURE__*/React.createElement(Page.ScrollableContentWithShadow, null, /*#__PURE__*/React.createElement(HistoryContent, {
    key: "historyContent",
    data: currentData,
    state: state
  }), /*#__PURE__*/React.createElement(Pagination, {
    current: current,
    itemsPerPage: itemsPerPage,
    itemsPerPageLabel: t('Items_per_page:'),
    showingResultsLabel: showingResultsLabel,
    count: total,
    onSetItemsPerPage: setItemsPerPage,
    onSetCurrent: setCurrent
  })));
}

module.exportDefault(OutgoingWebhookHistoryPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/integrations/edit/c547af54838d364704dbaec679f93bae5a65777a.map
