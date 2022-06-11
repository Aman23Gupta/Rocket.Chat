function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/ExportMessages/ExportMessages.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
var Field, Select, FieldGroup;
module.link("@rocket.chat/fuselage", {
  Field: function (v) {
    Field = v;
  },
  Select: function (v) {
    Select = v;
  },
  FieldGroup: function (v) {
    FieldGroup = v;
  }
}, 0);
var React, useState, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 1);
var VerticalBar;
module.link("../../../../components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 2);
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var useTabBarClose;
module.link("../../providers/ToolboxProvider", {
  useTabBarClose: function (v) {
    useTabBarClose = v;
  }
}, 4);
var FileExport;
module.link("./FileExport", {
  "default": function (v) {
    FileExport = v;
  }
}, 5);
var MailExportForm;
module.link("./MailExportForm", {
  "default": function (v) {
    MailExportForm = v;
  }
}, 6);

function ExportMessages(_ref) {
  var rid = _ref.rid;
  var t = useTranslation();
  var close = useTabBarClose();

  var _useState = useState('email'),
      _useState2 = _slicedToArray(_useState, 2),
      type = _useState2[0],
      setType = _useState2[1];

  var exportOptions = useMemo(function () {
    return [['email', t('Send_via_email')], ['file', t('Export_as_file')]];
  }, [t]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(VerticalBar.Header, null, t('Export_Messages'), /*#__PURE__*/React.createElement(VerticalBar.Close, {
    onClick: close
  })), /*#__PURE__*/React.createElement(VerticalBar.ScrollableContent, null, /*#__PURE__*/React.createElement(FieldGroup, null, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Method')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Select, {
    value: type,
    onChange: function (value) {
      return setType(value);
    },
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
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/ExportMessages/b503a78dc413a85d6f29b90e530f61330068c468.map
