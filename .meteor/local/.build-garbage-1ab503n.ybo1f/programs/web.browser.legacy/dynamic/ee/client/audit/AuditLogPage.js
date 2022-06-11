function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/audit/AuditLogPage.js                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
var Field;
module.link("@rocket.chat/fuselage", {
  Field: function (v) {
    Field = v;
  }
}, 0);
var React, useMemo, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 1);
var Page;
module.link("../../../client/components/Page", {
  "default": function (v) {
    Page = v;
  }
}, 2);
var useTranslation;
module.link("../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var useMethodData;
module.link("../../../client/hooks/useMethodData", {
  useMethodData: function (v) {
    useMethodData = v;
  }
}, 4);
var AuditLogTable;
module.link("./AuditLogTable", {
  "default": function (v) {
    AuditLogTable = v;
  }
}, 5);
var DateRangePicker;
module.link("./DateRangePicker", {
  "default": function (v) {
    DateRangePicker = v;
  }
}, 6);

var AuditLogPage = function () {
  var t = useTranslation();

  var _useState = useState({
    start: '',
    end: ''
  }),
      _useState2 = _slicedToArray(_useState, 2),
      dateRange = _useState2[0],
      setDateRange = _useState2[1];

  var start = dateRange.start,
      end = dateRange.end;
  var params = useMemo(function () {
    return [{
      startDate: new Date(start),
      endDate: new Date(end)
    }];
  }, [end, start]);

  var _useMethodData = useMethodData('auditGetAuditions', params),
      data = _useMethodData.value;

  return /*#__PURE__*/React.createElement(Page, null, /*#__PURE__*/React.createElement(Page.Header, {
    title: t('Message_auditing_log')
  }), /*#__PURE__*/React.createElement(Page.Content, null, /*#__PURE__*/React.createElement(Field, {
    alignSelf: "stretch"
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Date')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(DateRangePicker, {
    display: "flex",
    flexGrow: 1,
    onChange: setDateRange
  }))), /*#__PURE__*/React.createElement(AuditLogTable, {
    data: data
  })));
};

module.exportDefault(AuditLogPage);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/audit/16ed01a6b0e0d80c59d730b7eb9a3c56c0900afd.map
