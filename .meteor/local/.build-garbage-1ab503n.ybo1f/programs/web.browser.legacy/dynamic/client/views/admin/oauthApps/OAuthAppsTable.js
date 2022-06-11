function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/oauthApps/OAuthAppsTable.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  OAuthAppsTable: function () {
    return OAuthAppsTable;
  }
});
var Table;
module.link("@rocket.chat/fuselage", {
  Table: function (v) {
    Table = v;
  }
}, 0);
var React, useMemo, useCallback;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useCallback: function (v) {
    useCallback = v;
  }
}, 1);
var GenericTable;
module.link("../../../components/GenericTable", {
  "default": function (v) {
    GenericTable = v;
  }
}, 2);
var useRoute;
module.link("../../../contexts/RouterContext", {
  useRoute: function (v) {
    useRoute = v;
  }
}, 3);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 4);
var useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 5);
var useFormatDateAndTime;
module.link("../../../hooks/useFormatDateAndTime", {
  useFormatDateAndTime: function (v) {
    useFormatDateAndTime = v;
  }
}, 6);

function OAuthAppsTable() {
  var t = useTranslation();
  var formatDateAndTime = useFormatDateAndTime();

  var _useEndpointData = useEndpointData('oauth-apps.list', useMemo(function () {
    return {};
  }, [])),
      data = _useEndpointData.value;

  var router = useRoute('admin-oauth-apps');
  var onClick = useCallback(function (_id) {
    return function () {
      return router.push({
        context: 'edit',
        id: _id
      });
    };
  }, [router]);
  var header = useMemo(function () {
    return [/*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: 'name'
    }, t('Name')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: '_createdBy'
    }, t('Created_by')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: '_createdAt'
    }, t('Created_at'))];
  }, [t]);
  var renderRow = useCallback(function (_ref) {
    var _id = _ref._id,
        name = _ref.name,
        _createdAt = _ref._createdAt,
        createdBy = _ref._createdBy.username;
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
//# sourceMappingURL=/dynamic/client/views/admin/oauthApps/e8c756163ecce013459232ab173835524ab62e60.map
