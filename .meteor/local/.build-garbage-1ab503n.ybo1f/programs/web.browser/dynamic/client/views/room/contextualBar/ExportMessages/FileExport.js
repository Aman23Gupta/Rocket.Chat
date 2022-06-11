function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/ExportMessages/FileExport.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 0);
let Field, TextInput, Select, ButtonGroup, Button, FieldGroup;
module.link("@rocket.chat/fuselage", {
  Field(v) {
    Field = v;
  },

  TextInput(v) {
    TextInput = v;
  },

  Select(v) {
    Select = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Button(v) {
    Button = v;
  },

  FieldGroup(v) {
    FieldGroup = v;
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
let useEndpoint;
module.link("../../../../contexts/ServerContext", {
  useEndpoint(v) {
    useEndpoint = v;
  }

}, 2);
let useToastMessageDispatch;
module.link("../../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 3);
let useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 4);
let useForm;
module.link("../../../../hooks/useForm", {
  useForm(v) {
    useForm = v;
  }

}, 5);

const FileExport = _ref => {
  let {
    onCancel,
    rid
  } = _ref;
  const t = useTranslation();
  const {
    values,
    handlers
  } = useForm({
    dateFrom: '',
    dateTo: '',
    format: 'html'
  });
  const {
    dateFrom,
    dateTo,
    format
  } = values;
  const {
    handleDateFrom,
    handleDateTo,
    handleFormat
  } = handlers;
  const outputOptions = useMemo(() => [['html', t('HTML')], ['json', t('JSON')]], [t]);
  const roomsExport = useEndpoint('POST', 'rooms.export');
  const dispatchToastMessage = useToastMessageDispatch();

  const handleSubmit = async () => {
    try {
      await roomsExport(_objectSpread(_objectSpread(_objectSpread({
        rid,
        type: 'file'
      }, dateFrom && {
        dateFrom: new Date(dateFrom)
      }), dateTo && {
        dateTo: new Date(dateTo)
      }), {}, {
        format
      }));
      dispatchToastMessage({
        type: 'success',
        message: t('Your_email_has_been_queued_for_sending')
      });
    } catch (error) {
      dispatchToastMessage({
        type: 'error',
        message: error
      });
    }
  };

  return /*#__PURE__*/React.createElement(FieldGroup, null, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Date_From')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    type: "date",
    value: dateFrom,
    onChange: handleDateFrom
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Date_to')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    type: "date",
    value: dateTo,
    onChange: handleDateTo
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Output_format')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Select, {
    value: format,
    onChange: handleFormat,
    placeholder: t('Format'),
    options: outputOptions
  }))), /*#__PURE__*/React.createElement(ButtonGroup, {
    stretch: true,
    mb: "x12"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onCancel
  }, t('Cancel')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: () => handleSubmit()
  }, t('Export'))));
};

module.exportDefault(FileExport);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/ExportMessages/b548cefac94e1d87ec066695a2f35c115c56be73.map
