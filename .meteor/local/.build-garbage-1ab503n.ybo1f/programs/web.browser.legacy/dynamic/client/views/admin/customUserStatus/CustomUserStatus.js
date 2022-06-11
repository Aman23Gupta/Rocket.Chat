function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/customUserStatus/CustomUserStatus.js                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["onChange"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 1);
var Table;
module.link("@rocket.chat/fuselage", {
  Table: function (v) {
    Table = v;
  }
}, 0);
var React, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 1);
var FilterByText;
module.link("../../../components/FilterByText", {
  "default": function (v) {
    FilterByText = v;
  }
}, 2);
var GenericTable;
module.link("../../../components/GenericTable", {
  "default": function (v) {
    GenericTable = v;
  }
}, 3);
var MarkdownText;
module.link("../../../components/MarkdownText", {
  "default": function (v) {
    MarkdownText = v;
  }
}, 4);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 5);
var style = {
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden'
};

function CustomUserStatus(_ref) {
  var _data$statuses, _data$total;

  var data = _ref.data,
      sort = _ref.sort,
      onClick = _ref.onClick,
      onHeaderClick = _ref.onHeaderClick,
      setParams = _ref.setParams,
      params = _ref.params;
  var t = useTranslation();
  var header = useMemo(function () {
    return [/*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: "name",
      direction: sort[1],
      active: sort[0] === 'name',
      onClick: onHeaderClick,
      sort: "name"
    }, t('Name')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: "presence",
      direction: sort[1],
      active: sort[0] === 'statusType',
      onClick: onHeaderClick,
      sort: "statusType"
    }, t('Presence'))].filter(Boolean);
  }, [onHeaderClick, sort, t]);

  var renderRow = function (status) {
    var _id = status._id,
        name = status.name,
        statusType = status.statusType;
    return /*#__PURE__*/React.createElement(Table.Row, {
      key: _id,
      onKeyDown: onClick(_id, status),
      onClick: onClick(_id, status),
      tabIndex: 0,
      role: "link",
      action: true,
      "qa-user-id": _id
    }, /*#__PURE__*/React.createElement(Table.Cell, {
      fontScale: "p2",
      color: "default",
      style: style
    }, /*#__PURE__*/React.createElement(MarkdownText, {
      content: name,
      parseEmoji: true,
      variant: "inline"
    })), /*#__PURE__*/React.createElement(Table.Cell, {
      fontScale: "p2",
      color: "default",
      style: style
    }, statusType));
  };

  return /*#__PURE__*/React.createElement(GenericTable, {
    header: header,
    renderRow: renderRow,
    results: (_data$statuses = data === null || data === void 0 ? void 0 : data.statuses) !== null && _data$statuses !== void 0 ? _data$statuses : [],
    total: (_data$total = data === null || data === void 0 ? void 0 : data.total) !== null && _data$total !== void 0 ? _data$total : 0,
    setParams: setParams,
    params: params,
    renderFilter: function (_ref2) {
      var onChange = _ref2.onChange,
          props = _objectWithoutProperties(_ref2, _excluded);

      return /*#__PURE__*/React.createElement(FilterByText, _extends({
        onChange: onChange
      }, props));
    }
  });
}

module.exportDefault(CustomUserStatus);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/customUserStatus/e9d45f5b9f00998473451f8498cc4a4266081d8e.map
