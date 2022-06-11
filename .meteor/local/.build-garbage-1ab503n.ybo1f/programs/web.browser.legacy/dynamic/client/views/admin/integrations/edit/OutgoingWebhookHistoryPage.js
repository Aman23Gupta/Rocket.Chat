function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/integrations/edit/OutgoingWebhookHistoryPage.js                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
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
var Button, ButtonGroup, Icon, Pagination;
module.link("@rocket.chat/fuselage", {
  Button: function (v) {
    Button = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  Pagination: function (v) {
    Pagination = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React, useMemo, useCallback, useState, useEffect;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useState: function (v) {
    useState = v;
  },
  useEffect: function (v) {
    useEffect = v;
  }
}, 2);
var integrationHistoryStreamer;
module.link("../../../../../app/integrations/client/streamer", {
  integrationHistoryStreamer: function (v) {
    integrationHistoryStreamer = v;
  }
}, 3);
var Page;
module.link("../../../../components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 4);
var useRoute, useRouteParameter;
module.link("../../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  },
  useRouteParameter: function (v) {
    useRouteParameter = v;
  }
}, 5);
var useMethod;
module.link("../../../../contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 6);
var useToastMessageDispatch;
module.link("../../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 7);
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 8);
var AsyncStatePhase;
module.link("../../../../hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 9);
var useEndpointData;
module.link("../../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 10);
var HistoryContent;
module.link("./HistoryContent", {
  "default": function (v) {
    HistoryContent = v;
  }
}, 11);

function OutgoingWebhookHistoryPage(props) {
  var dispatchToastMessage = useToastMessageDispatch();
  var t = useTranslation();

  var _useState = useState(),
      _useState2 = _slicedToArray(_useState, 2),
      currentData = _useState2[0],
      setCurrentData = _useState2[1];

  var _useState3 = useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      current = _useState4[0],
      setCurrent = _useState4[1];

  var _useState5 = useState(),
      _useState6 = _slicedToArray(_useState5, 2),
      itemsPerPage = _useState6[0],
      setItemsPerPage = _useState6[1];

  var _useState7 = useState(false),
      _useState8 = _slicedToArray(_useState7, 2),
      mounted = _useState8[0],
      setMounted = _useState8[1];

  var _useState9 = useState(0),
      _useState10 = _slicedToArray(_useState9, 2),
      total = _useState10[0],
      setTotal = _useState10[1];

  var router = useRoute('admin-integrations');
  var clearHistory = useMethod('clearIntegrationHistory');
  var id = useRouteParameter('id');
  var query = useMemo(function () {
    return {
      id: id,
      count: itemsPerPage,
      offset: current
    };
  }, [id, itemsPerPage, current]);

  var _useEndpointData = useEndpointData('integrations.history', query),
      data = _useEndpointData.value,
      state = _useEndpointData.phase,
      reload = _useEndpointData.reload;

  var handleClearHistory = function () {
    function _callee() {
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _regeneratorRuntime.awrap(clearHistory());

              case 3:
                dispatchToastMessage({
                  type: 'success',
                  message: t('Integration_History_Cleared')
                });
                reload();
                setMounted(false);
                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                dispatchToastMessage({
                  type: 'error',
                  message: _context.t0
                });

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[0, 8]], Promise);
    }

    return _callee;
  }();

  var handleClickReturn = function () {
    router.push({});
  };

  var handleDataChange = useMutableCallback(function (_ref) {
    var type = _ref.type,
        id = _ref.id,
        diff = _ref.diff,
        data = _ref.data;

    if (type === 'inserted') {
      setTotal(function (total) {
        return total + 1;
      });
      setCurrentData(function (state) {
        return [data].concat(state);
      });
      return;
    }

    if (type === 'updated') {
      setCurrentData(function (state) {
        var index = state.findIndex(function (_ref2) {
          var _id = _ref2._id;
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
  useEffect(function () {
    if (state === AsyncStatePhase.RESOLVED && !mounted) {
      setCurrentData(data.history);
      setTotal(data.total);
      setMounted(true);
    }
  }, [data, mounted, state]);
  useEffect(function () {
    if (mounted) {
      integrationHistoryStreamer.on(id, handleDataChange);
    }

    return function () {
      return integrationHistoryStreamer.removeListener(id, handleDataChange);
    };
  }, [handleDataChange, id, mounted]);
  var showingResultsLabel = useCallback(function (_ref3) {
    var count = _ref3.count,
        current = _ref3.current,
        itemsPerPage = _ref3.itemsPerPage;
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
//# sourceMappingURL=/dynamic/client/views/admin/integrations/edit/204f4dcd694b98fa3023a53cec4fa4f1acbed228.map
