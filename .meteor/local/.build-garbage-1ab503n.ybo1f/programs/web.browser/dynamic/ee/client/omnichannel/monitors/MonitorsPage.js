function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/monitors/MonitorsPage.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let Button, Box, Callout, Field;
module.link("@rocket.chat/fuselage", {
  Button(v) {
    Button = v;
  },

  Box(v) {
    Box = v;
  },

  Callout(v) {
    Callout = v;
  },

  Field(v) {
    Field = v;
  }

}, 0);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React, useState, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 2);
let Page;
module.link("../../../../client/components/Page", {
  default(v) {
    Page = v;
  }

}, 3);
let UserAutoComplete;
module.link("../../../../client/components/UserAutoComplete", {
  default(v) {
    UserAutoComplete = v;
  }

}, 4);
let useMethod;
module.link("../../../../client/contexts/ServerContext", {
  useMethod(v) {
    useMethod = v;
  }

}, 5);
let useToastMessageDispatch;
module.link("../../../../client/contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 6);
let useTranslation;
module.link("../../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 7);
let AsyncStatePhase;
module.link("../../../../client/hooks/useAsyncState", {
  AsyncStatePhase(v) {
    AsyncStatePhase = v;
  }

}, 8);
let useEndpointData;
module.link("../../../../client/hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 9);
let MonitorsTable;
module.link("./MonitorsTable", {
  default(v) {
    MonitorsTable = v;
  }

}, 10);

const sortDir = sortDir => sortDir === 'asc' ? 1 : -1;

const useQuery = (_ref, _ref2) => {
  let {
    text,
    itemsPerPage,
    current
  } = _ref;
  let [column, direction] = _ref2;
  return useMemo(() => _objectSpread(_objectSpread({
    text,
    sort: JSON.stringify({
      [column]: sortDir(direction)
    })
  }, itemsPerPage && {
    count: itemsPerPage
  }), current && {
    offset: current
  }), [text, itemsPerPage, current, column, direction]);
};

const MonitorsPage = () => {
  const t = useTranslation();
  const dispatchToastMessage = useToastMessageDispatch();
  const [params, setParams] = useState(() => ({
    current: 0,
    itemsPerPage: 25,
    text: ''
  }));
  const [sort, setSort] = useState(['name', 'asc']);
  const [username, setUsername] = useState('');
  const {
    value: data,
    phase: state,
    reload
  } = useEndpointData('livechat/monitors.list', useQuery(params, sort));
  const addMonitor = useMethod('livechat:addMonitor');
  const onHeaderClick = useMutableCallback(id => {
    const [sortBy, sortDirection] = sort;

    if (sortBy === id) {
      setSort([id, sortDirection === 'asc' ? 'desc' : 'asc']);
      return;
    }

    setSort([id, 'asc']);
  });
  const handleAdd = useMutableCallback(async () => {
    try {
      await addMonitor(username);
      reload();
      setUsername('');
      dispatchToastMessage({
        type: 'success',
        message: t('Monitor_added')
      });
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }
  });

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
//# sourceMappingURL=/dynamic/ee/client/omnichannel/monitors/c4e91059907b6f42c962b0f44f540da3352bdeca.map
