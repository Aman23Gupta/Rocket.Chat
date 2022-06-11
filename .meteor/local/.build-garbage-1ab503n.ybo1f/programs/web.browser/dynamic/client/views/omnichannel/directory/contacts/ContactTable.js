function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/directory/contacts/ContactTable.js                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["onChange"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);

let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 2);
let Table;
module.link("@rocket.chat/fuselage", {
  Table(v) {
    Table = v;
  }

}, 0);
let useDebouncedValue, useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useDebouncedValue(v) {
    useDebouncedValue = v;
  },

  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 1);
let React, useState, useMemo, useCallback, useEffect;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useEffect(v) {
    useEffect = v;
  }

}, 2);
let FilterByText;
module.link("../../../../components/FilterByText", {
  default(v) {
    FilterByText = v;
  }

}, 3);
let GenericTable;
module.link("../../../../components/GenericTable", {
  default(v) {
    GenericTable = v;
  }

}, 4);
let useRoute;
module.link("../../../../contexts/RouterContext", {
  useRoute(v) {
    useRoute = v;
  }

}, 5);
let useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 6);
let useEndpointData;
module.link("../../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 7);
let useFormatDate;
module.link("../../../../hooks/useFormatDate", {
  useFormatDate(v) {
    useFormatDate = v;
  }

}, 8);

const useQuery = (_ref, _ref2) => {
  let {
    text,
    itemsPerPage,
    current
  } = _ref;
  let [column, direction] = _ref2;
  return useMemo(() => _objectSpread(_objectSpread({
    term: text,
    sort: JSON.stringify({
      [column]: direction === 'asc' ? 1 : -1
    })
  }, itemsPerPage && {
    count: itemsPerPage
  }), current && {
    offset: current
  }), [column, current, direction, itemsPerPage, text]);
};

function ContactTable(_ref3) {
  let {
    setContactReload
  } = _ref3;
  const [params, setParams] = useState({
    text: '',
    current: 0,
    itemsPerPage: 25
  });
  const [sort, setSort] = useState(['username', 'asc']);
  const t = useTranslation();
  const debouncedParams = useDebouncedValue(params, 500);
  const debouncedSort = useDebouncedValue(sort, 500);
  const query = useQuery(debouncedParams, debouncedSort);
  const directoryRoute = useRoute('omnichannel-directory');
  const formatDate = useFormatDate();
  const onHeaderClick = useMutableCallback(id => {
    const [sortBy, sortDirection] = sort;

    if (sortBy === id) {
      return setSort([id, sortDirection === 'asc' ? 'desc' : 'asc']);
    }

    setSort([id, 'asc']);
  });
  const onButtonNewClick = useMutableCallback(() => directoryRoute.push({
    page: 'contacts',
    bar: 'new'
  }));
  const onRowClick = useMutableCallback(id => () => directoryRoute.push({
    page: 'contacts',
    id,
    bar: 'info'
  }));
  const {
    value: data,
    reload
  } = useEndpointData('livechat/visitors.search', query);
  useEffect(() => {
    setContactReload(() => reload);
  }, [reload, setContactReload]);
  const header = useMemo(() => [/*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'username',
    direction: sort[1],
    active: sort[0] === 'username',
    onClick: onHeaderClick,
    sort: "username"
  }, t('Username')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'name',
    direction: sort[1],
    active: sort[0] === 'name',
    onClick: onHeaderClick,
    sort: "name"
  }, t('Name')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'phone',
    direction: sort[1],
    active: sort[0] === 'phone',
    onClick: onHeaderClick,
    sort: "phone"
  }, t('Phone')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'email',
    direction: sort[1],
    active: sort[0] === 'visitorEmails.address',
    onClick: onHeaderClick,
    sort: "visitorEmails.address"
  }, t('Email')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'lastchat',
    direction: sort[1],
    active: sort[0] === 'lastchat',
    onClick: onHeaderClick,
    sort: "visitorEmails.address"
  }, t('Last_Chat'))].filter(Boolean), [sort, onHeaderClick, t]);
  const renderRow = useCallback(_ref4 => {
    let {
      _id,
      username,
      name,
      visitorEmails,
      phone,
      lastChat
    } = _ref4;
    return /*#__PURE__*/React.createElement(Table.Row, {
      key: _id,
      tabIndex: 0,
      role: "link",
      onClick: onRowClick(_id),
      action: true,
      "qa-user-id": _id
    }, /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, username), /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, name), /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, phone && phone.length && phone[0].phoneNumber), /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, visitorEmails && visitorEmails.length && visitorEmails[0].address), /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, lastChat && formatDate(lastChat.ts)));
  }, [formatDate, onRowClick]);
  return /*#__PURE__*/React.createElement(GenericTable, {
    header: header,
    renderRow: renderRow,
    results: data && data.visitors,
    total: data && data.total,
    setParams: setParams,
    params: params,
    renderFilter: _ref5 => {
      let {
        onChange
      } = _ref5,
          props = _objectWithoutProperties(_ref5, _excluded);

      return /*#__PURE__*/React.createElement(FilterByText, _extends({
        displayButton: true,
        textButton: t('New_Contact'),
        onButtonClick: onButtonNewClick,
        onChange: onChange
      }, props));
    }
  });
}

module.exportDefault(ContactTable);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/directory/contacts/91485f1972209bbd3580f335cb45705f97513b94.map
