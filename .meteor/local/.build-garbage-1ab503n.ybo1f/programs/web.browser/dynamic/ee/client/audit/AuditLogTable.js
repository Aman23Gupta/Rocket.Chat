function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/audit/AuditLogTable.js                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let GenericTable;
module.link("../../../client/components/GenericTable", {
  default(v) {
    GenericTable = v;
  }

}, 1);
let useTranslation;
module.link("../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 2);
let useFormatDate;
module.link("../../../client/hooks/useFormatDate", {
  useFormatDate(v) {
    useFormatDate = v;
  }

}, 3);
let useFormatDateAndTime;
module.link("../../../client/hooks/useFormatDateAndTime", {
  useFormatDateAndTime(v) {
    useFormatDateAndTime = v;
  }

}, 4);
let UserRow;
module.link("./UserRow", {
  default(v) {
    UserRow = v;
  }

}, 5);

function AuditLogTable(_ref) {
  let {
    data
  } = _ref;
  const t = useTranslation();
  const formatDateAndTime = useFormatDateAndTime();
  const formatDate = useFormatDate();
  return /*#__PURE__*/React.createElement(GenericTable, {
    header: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(GenericTable.HeaderCell, null, t('Username')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, null, t('Looked_for')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, null, t('When')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      w: "x80"
    }, t('Results')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, null, t('Filters_applied'))),
    results: data
  }, props => /*#__PURE__*/React.createElement(UserRow, _extends({
    key: props._id,
    formatDateAndTime: formatDateAndTime,
    formatDate: formatDate
  }, props)));
}

module.exportDefault(AuditLogTable);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/audit/c37e938a20361474c001dabe02852c6a58a1feca.map
