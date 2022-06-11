function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/customUserStatus/CustomUserStatus.js                                                             //
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
let Table;
module.link("@rocket.chat/fuselage", {
  Table(v) {
    Table = v;
  }

}, 0);
let React, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 1);
let FilterByText;
module.link("../../../components/FilterByText", {
  default(v) {
    FilterByText = v;
  }

}, 2);
let GenericTable;
module.link("../../../components/GenericTable", {
  default(v) {
    GenericTable = v;
  }

}, 3);
let MarkdownText;
module.link("../../../components/MarkdownText", {
  default(v) {
    MarkdownText = v;
  }

}, 4);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 5);
const style = {
  whiteSpace: 'nowrap',
  textOverflow: 'ellipsis',
  overflow: 'hidden'
};

function CustomUserStatus(_ref) {
  var _data$statuses, _data$total;

  let {
    data,
    sort,
    onClick,
    onHeaderClick,
    setParams,
    params
  } = _ref;
  const t = useTranslation();
  const header = useMemo(() => [/*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
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
  }, t('Presence'))].filter(Boolean), [onHeaderClick, sort, t]);

  const renderRow = status => {
    const {
      _id,
      name,
      statusType
    } = status;
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
    renderFilter: _ref2 => {
      let {
        onChange
      } = _ref2,
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
//# sourceMappingURL=/dynamic/client/views/admin/customUserStatus/999c2d09a5f15fada2fecef47289bc434a768ee4.map
