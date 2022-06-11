function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/audit/AuditLogPage.js                                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Field;
module.link("@rocket.chat/fuselage", {
  Field(v) {
    Field = v;
  }

}, 0);
let React, useMemo, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useState(v) {
    useState = v;
  }

}, 1);
let Page;
module.link("../../../client/components/Page", {
  default(v) {
    Page = v;
  }

}, 2);
let useTranslation;
module.link("../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let useMethodData;
module.link("../../../client/hooks/useMethodData", {
  useMethodData(v) {
    useMethodData = v;
  }

}, 4);
let AuditLogTable;
module.link("./AuditLogTable", {
  default(v) {
    AuditLogTable = v;
  }

}, 5);
let DateRangePicker;
module.link("./DateRangePicker", {
  default(v) {
    DateRangePicker = v;
  }

}, 6);

const AuditLogPage = () => {
  const t = useTranslation();
  const [dateRange, setDateRange] = useState({
    start: '',
    end: ''
  });
  const {
    start,
    end
  } = dateRange;
  const params = useMemo(() => [{
    startDate: new Date(start),
    endDate: new Date(end)
  }], [end, start]);
  const {
    value: data
  } = useMethodData('auditGetAuditions', params);
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
//# sourceMappingURL=/dynamic/ee/client/audit/f8f806006d38d42f92fd85a8c9a2b8dbb849901b.map
