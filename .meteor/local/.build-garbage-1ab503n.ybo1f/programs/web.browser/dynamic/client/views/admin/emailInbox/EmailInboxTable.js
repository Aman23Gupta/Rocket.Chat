function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/emailInbox/EmailInboxTable.js                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let Table;
module.link("@rocket.chat/fuselage", {
  Table(v) {
    Table = v;
  }

}, 0);
let useDebouncedValue;
module.link("@rocket.chat/fuselage-hooks", {
  useDebouncedValue(v) {
    useDebouncedValue = v;
  }

}, 1);
let React, useMemo, useCallback, useState;
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
  }

}, 2);
let GenericTable;
module.link("../../../components/GenericTable", {
  default(v) {
    GenericTable = v;
  }

}, 3);
let useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 4);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 5);
let useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 6);
let SendTestButton;
module.link("./SendTestButton", {
  default(v) {
    SendTestButton = v;
  }

}, 7);

const useQuery = (_ref, _ref2) => {
  let {
    itemsPerPage,
    current
  } = _ref;
  let [column, direction] = _ref2;
  return useMemo(() => _objectSpread(_objectSpread({
    sort: JSON.stringify({
      [column]: direction === 'asc' ? 1 : -1
    })
  }, itemsPerPage && {
    count: itemsPerPage
  }), current && {
    offset: current
  }), [column, current, direction, itemsPerPage]);
};

function EmailInboxTable() {
  const t = useTranslation();
  const [params, setParams] = useState({
    current: 0,
    itemsPerPage: 25
  });
  const [sort] = useState(['name', 'asc']);
  const debouncedParams = useDebouncedValue(params, 500);
  const debouncedSort = useDebouncedValue(sort, 500);
  const query = useQuery(debouncedParams, debouncedSort);
  const router = useRoute('admin-email-inboxes');
  const onClick = useCallback(_id => () => router.push({
    context: 'edit',
    _id
  }), [router]);
  const header = useMemo(() => [/*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'name',
    direction: sort[1],
    active: sort[0] === 'name'
  }, t('Name')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'email',
    direction: sort[1],
    active: sort[0] === 'email'
  }, t('Email')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'active',
    direction: sort[1],
    active: sort[0] === 'active'
  }, t('Active')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'sendTest',
    w: "x60"
  })].filter(Boolean), [sort, t]);
  const {
    value: data
  } = useEndpointData('email-inbox.list', query);
  const renderRow = useCallback(_ref3 => {
    let {
      _id,
      name,
      email,
      active
    } = _ref3;
    return /*#__PURE__*/React.createElement(Table.Row, {
      action: true,
      key: _id,
      onKeyDown: onClick(_id),
      onClick: onClick(_id),
      tabIndex: 0,
      role: "link",
      "qa-room-id": _id
    }, /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, name), /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, email), /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, active ? t('Yes') : t('No')), /*#__PURE__*/React.createElement(SendTestButton, {
      id: _id
    }));
  }, [onClick, t]);
  return /*#__PURE__*/React.createElement(GenericTable, {
    header: header,
    renderRow: renderRow,
    results: data && data.emailInboxes,
    total: data && data.total,
    setParams: setParams,
    params: params
  });
}

module.exportDefault(EmailInboxTable);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/emailInbox/b5664d256dbcd3f99fe721d9af703ebc8ce1f157.map
