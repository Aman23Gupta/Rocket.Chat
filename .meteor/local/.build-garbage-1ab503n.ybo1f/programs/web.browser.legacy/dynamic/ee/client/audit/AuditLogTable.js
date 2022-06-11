function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/audit/AuditLogTable.js                                                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var GenericTable;
module.link("../../../client/components/GenericTable", {
  "default": function (v) {
    GenericTable = v;
  }
}, 1);
var useTranslation;
module.link("../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 2);
var useFormatDate;
module.link("../../../client/hooks/useFormatDate", {
  useFormatDate: function (v) {
    useFormatDate = v;
  }
}, 3);
var useFormatDateAndTime;
module.link("../../../client/hooks/useFormatDateAndTime", {
  useFormatDateAndTime: function (v) {
    useFormatDateAndTime = v;
  }
}, 4);
var UserRow;
module.link("./UserRow", {
  "default": function (v) {
    UserRow = v;
  }
}, 5);

function AuditLogTable(_ref) {
  var data = _ref.data;
  var t = useTranslation();
  var formatDateAndTime = useFormatDateAndTime();
  var formatDate = useFormatDate();
  return /*#__PURE__*/React.createElement(GenericTable, {
    header: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(GenericTable.HeaderCell, null, t('Username')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, null, t('Looked_for')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, null, t('When')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      w: "x80"
    }, t('Results')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, null, t('Filters_applied'))),
    results: data
  }, function (props) {
    return /*#__PURE__*/React.createElement(UserRow, _extends({
      key: props._id,
      formatDateAndTime: formatDateAndTime,
      formatDate: formatDate
    }, props));
  });
}

module.exportDefault(AuditLogTable);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/audit/53ac65a7970355f990689bf57848f3248de5bfe2.map
