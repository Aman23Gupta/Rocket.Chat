function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/monitors/MonitorsPage.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 1);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 2);
var Button, Box, Callout, Field;
module.link("@rocket.chat/fuselage", {
  Button: function (v) {
    Button = v;
  },
  Box: function (v) {
    Box = v;
  },
  Callout: function (v) {
    Callout = v;
  },
  Field: function (v) {
    Field = v;
  }
}, 0);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 1);
var React, useState, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 2);
var Page;
module.link("../../../../client/components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 3);
var UserAutoComplete;
module.link("../../../../client/components/UserAutoComplete", {
  "default": function (v) {
    UserAutoComplete = v;
  }
}, 4);
var useMethod;
module.link("../../../../client/contexts/ServerContext", {
  useMethod: function (v) {
    useMethod = v;
  }
}, 5);
var useToastMessageDispatch;
module.link("../../../../client/contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 6);
var useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 7);
var AsyncStatePhase;
module.link("../../../../client/hooks/useAsyncState", {
  AsyncStatePhase: function (v) {
    AsyncStatePhase = v;
  }
}, 8);
var useEndpointData;
module.link("../../../../client/hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 9);
var MonitorsTable;
module.link("./MonitorsTable", {
  "default": function (v) {
    MonitorsTable = v;
  }
}, 10);

var sortDir = function (sortDir) {
  return sortDir === 'asc' ? 1 : -1;
};

var useQuery = function (_ref, _ref2) {
  var text = _ref.text,
      itemsPerPage = _ref.itemsPerPage,
      current = _ref.current;

  var _ref3 = _slicedToArray(_ref2, 2),
      column = _ref3[0],
      direction = _ref3[1];

  return useMemo(function () {
    var _JSON$stringify;

    return _objectSpread(_objectSpread({
      text: text,
      sort: JSON.stringify((_JSON$stringify = {}, _JSON$stringify[column] = sortDir(direction), _JSON$stringify))
    }, itemsPerPage && {
      count: itemsPerPage
    }), current && {
      offset: current
    });
  }, [text, itemsPerPage, current, column, direction]);
};

var MonitorsPage = function () {
  var t = useTranslation();
  var dispatchToastMessage = useToastMessageDispatch();

  var _useState = useState(function () {
    return {
      current: 0,
      itemsPerPage: 25,
      text: ''
    };
  }),
      _useState2 = _slicedToArray(_useState, 2),
      params = _useState2[0],
      setParams = _useState2[1];

  var _useState3 = useState(['name', 'asc']),
      _useState4 = _slicedToArray(_useState3, 2),
      sort = _useState4[0],
      setSort = _useState4[1];

  var _useState5 = useState(''),
      _useState6 = _slicedToArray(_useState5, 2),
      username = _useState6[0],
      setUsername = _useState6[1];

  var _useEndpointData = useEndpointData('livechat/monitors.list', useQuery(params, sort)),
      data = _useEndpointData.value,
      state = _useEndpointData.phase,
      reload = _useEndpointData.reload;

  var addMonitor = useMethod('livechat:addMonitor');
  var onHeaderClick = useMutableCallback(function (id) {
    var _sort = _slicedToArray(sort, 2),
        sortBy = _sort[0],
        sortDirection = _sort[1];

    if (sortBy === id) {
      setSort([id, sortDirection === 'asc' ? 'desc' : 'asc']);
      return;
    }

    setSort([id, 'asc']);
  });
  var handleAdd = useMutableCallback(function () {
    function _callee() {
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _regeneratorRuntime.awrap(addMonitor(username));

              case 3:
                reload();
                setUsername('');
                dispatchToastMessage({
                  type: 'success',
                  message: t('Monitor_added')
                });
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
  }());

  if (state === AsyncStatePhase.REJECTED) {
    return /*#__PURE__*/React.createElement(Callout, null, t('Error'));
  }

  return /*#__PURE__*/React.createElement(Page, {
    flexDirection: "row"
  }, /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Livechat_Monitors')
  }), /*#__PURE__*/React.createElement(Page.Content, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "1"
  }, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Username')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(UserAutoComplete, {
    value: username,
    onChange: setUsername
  }), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    disabled: !username,
    onClick: handleAdd,
    mis: "x8"
  }, t('Add'))))), /*#__PURE__*/React.createElement(MonitorsTable, {
    monitors: data === null || data === void 0 ? void 0 : data.monitors,
    totalMonitors: data === null || data === void 0 ? void 0 : data.total,
    params: params,
    onChangeParams: setParams,
    onHeaderClick: onHeaderClick,
    sort: sort,
    onDelete: reload
  }))));
};

module.exportDefault(MonitorsPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/monitors/8f0e82bdf51cdb193fdec5fa2279fa7bba3fbf86.map
