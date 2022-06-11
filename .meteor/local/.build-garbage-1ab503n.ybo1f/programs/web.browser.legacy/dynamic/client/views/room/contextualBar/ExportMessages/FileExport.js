function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/ExportMessages/FileExport.js                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 1);
var Field, TextInput, Select, ButtonGroup, Button, FieldGroup;
module.link("@rocket.chat/fuselage", {
  Field: function (v) {
    Field = v;
  },
  TextInput: function (v) {
    TextInput = v;
  },
  Select: function (v) {
    Select = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Button: function (v) {
    Button = v;
  },
  FieldGroup: function (v) {
    FieldGroup = v;
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
var useEndpoint;
module.link("../../../../contexts/ServerContext", {
  useEndpoint: function (v) {
    useEndpoint = v;
  }
}, 2);
var useToastMessageDispatch;
module.link("../../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 3);
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 4);
var useForm;
module.link("../../../../hooks/useForm", {
  useForm: function (v) {
    useForm = v;
  }
}, 5);

var FileExport = function (_ref) {
  var onCancel = _ref.onCancel,
      rid = _ref.rid;
  var t = useTranslation();

  var _useForm = useForm({
    dateFrom: '',
    dateTo: '',
    format: 'html'
  }),
      values = _useForm.values,
      handlers = _useForm.handlers;

  var dateFrom = values.dateFrom,
      dateTo = values.dateTo,
      format = values.format;
  var handleDateFrom = handlers.handleDateFrom,
      handleDateTo = handlers.handleDateTo,
      handleFormat = handlers.handleFormat;
  var outputOptions = useMemo(function () {
    return [['html', t('HTML')], ['json', t('JSON')]];
  }, [t]);
  var roomsExport = useEndpoint('POST', 'rooms.export');
  var dispatchToastMessage = useToastMessageDispatch();

  var handleSubmit = function () {
    function _callee() {
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _regeneratorRuntime.awrap(roomsExport(_objectSpread(_objectSpread(_objectSpread({
                  rid: rid,
                  type: 'file'
                }, dateFrom && {
                  dateFrom: new Date(dateFrom)
                }), dateTo && {
                  dateTo: new Date(dateTo)
                }), {}, {
                  format: format
                })));

              case 3:
                dispatchToastMessage({
                  type: 'success',
                  message: t('Your_email_has_been_queued_for_sending')
                });
                _context.next = 9;
                break;

              case 6:
                _context.prev = 6;
                _context.t0 = _context["catch"](0);
                dispatchToastMessage({
                  type: 'error',
                  message: _context.t0
                });

              case 9:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[0, 6]], Promise);
    }

    return _callee;
  }();

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
    onClick: function () {
      return handleSubmit();
    }
  }, t('Export'))));
};

module.exportDefault(FileExport);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/ExportMessages/1199b893a66b1ff1dfdf5a0d31405484516419cd.map
