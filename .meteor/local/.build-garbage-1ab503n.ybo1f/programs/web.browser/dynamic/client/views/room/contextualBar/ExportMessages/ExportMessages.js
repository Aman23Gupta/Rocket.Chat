function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/ExportMessages/ExportMessages.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Field, Select, FieldGroup;
module.link("@rocket.chat/fuselage", {
  Field(v) {
    Field = v;
  },

  Select(v) {
    Select = v;
  },

  FieldGroup(v) {
    FieldGroup = v;
  }

}, 0);
let React, useState, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 1);
let VerticalBar;
module.link("../../../../components/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 2);
let useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let useTabBarClose;
module.link("../../providers/ToolboxProvider", {
  useTabBarClose(v) {
    useTabBarClose = v;
  }

}, 4);
let FileExport;
module.link("./FileExport", {
  default(v) {
    FileExport = v;
  }

}, 5);
let MailExportForm;
module.link("./MailExportForm", {
  default(v) {
    MailExportForm = v;
  }

}, 6);

function ExportMessages(_ref) {
  let {
    rid
  } = _ref;
  const t = useTranslation();
  const close = useTabBarClose();
  const [type, setType] = useState('email');
  const exportOptions = useMemo(() => [['email', t('Send_via_email')], ['file', t('Export_as_file')]], [t]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VerticalBar.Header, null, t('Export_Messages'), /*#__PURE__*/React.createElement(VerticalBar.Close, {
    onClick: close
  })), /*#__PURE__*/React.createElement(VerticalBar.ScrollableContent, null, /*#__PURE__*/React.createElement(FieldGroup, null, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Method')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Select, {
    value: type,
    onChange: value => setType(value),
    placeholder: t('Type'),
    options: exportOptions
  })))), type && type === 'file' && /*#__PURE__*/React.createElement(FileExport, {
    rid: rid,
    onCancel: close
  }), type && type === 'email' && /*#__PURE__*/React.createElement(MailExportForm, {
    rid: rid,
    onCancel: close
  })));
}

module.exportDefault(ExportMessages);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/ExportMessages/05b93fac155c56ff7f8834a628eca65270422ca8.map
