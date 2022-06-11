function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/oauthApps/OAuthAppsTable.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  OAuthAppsTable: () => OAuthAppsTable
});
let Table;
module.link("@rocket.chat/fuselage", {
  Table(v) {
    Table = v;
  }

}, 0);
let React, useMemo, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useCallback(v) {
    useCallback = v;
  }

}, 1);
let GenericTable;
module.link("../../../components/GenericTable", {
  default(v) {
    GenericTable = v;
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
let useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 5);
let useFormatDateAndTime;
module.link("../../../hooks/useFormatDateAndTime", {
  useFormatDateAndTime(v) {
    useFormatDateAndTime = v;
  }

}, 6);

function OAuthAppsTable() {
  const t = useTranslation();
  const formatDateAndTime = useFormatDateAndTime();
  const {
    value: data
  } = useEndpointData('oauth-apps.list', useMemo(() => ({}), []));
  const router = useRoute('admin-oauth-apps');
  const onClick = useCallback(_id => () => router.push({
    context: 'edit',
    id: _id
  }), [router]);
  const header = useMemo(() => [/*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: 'name'
  }, t('Name')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: '_createdBy'
  }, t('Created_by')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: '_createdAt'
  }, t('Created_at'))], [t]);
  const renderRow = useCallback(_ref => {
    let {
      _id,
      name,
      _createdAt,
      _createdBy: {
        username: createdBy
      }
    } = _ref;
    return /*#__PURE__*/React.createElement(Table.Row, {
      key: _id,
      onKeyDown: onClick(_id),
      onClick: onClick(_id),
      tabIndex: 0,
      role: "link",
      action: true,
      "qa-oauth-app-id": _id
    }, /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true,
      color: "default",
      fontScale: "p2m"
    }, name), /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, createdBy), /*#__PURE__*/React.createElement(Table.Cell, {
      withTruncatedText: true
    }, formatDateAndTime(_createdAt)));
  }, [formatDateAndTime, onClick]);
  return /*#__PURE__*/React.createElement(GenericTable, {
    header: header,
    renderRow: renderRow,
    results: data && data.oauthApps
  });
}

module.exportDefault(OAuthAppsTable);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/oauthApps/d895bdb103ab2794e250e6d5b59f81b7ec387410.map
