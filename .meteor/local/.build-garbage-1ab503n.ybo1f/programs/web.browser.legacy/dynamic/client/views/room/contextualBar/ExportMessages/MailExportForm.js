function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/ExportMessages/MailExportForm.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _templateObject;

var _regeneratorRuntime;

module.link("@babel/runtime/regenerator", {
  default: function (v) {
    _regeneratorRuntime = v;
  }
}, 0);

var _toConsumableArray;

module.link("@babel/runtime/helpers/toConsumableArray", {
  default: function (v) {
    _toConsumableArray = v;
  }
}, 1);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 2);

var _taggedTemplateLiteralLoose;

module.link("@babel/runtime/helpers/taggedTemplateLiteralLoose", {
  default: function (v) {
    _taggedTemplateLiteralLoose = v;
  }
}, 3);
var css;
module.link("@rocket.chat/css-in-js", {
  css: function (v) {
    css = v;
  }
}, 0);
var Field, TextInput, ButtonGroup, Button, Box, Icon, Callout, FieldGroup;
module.link("@rocket.chat/fuselage", {
  Field: function (v) {
    Field = v;
  },
  TextInput: function (v) {
    TextInput = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Button: function (v) {
    Button = v;
  },
  Box: function (v) {
    Box = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  Callout: function (v) {
    Callout = v;
  },
  FieldGroup: function (v) {
    FieldGroup = v;
  }
}, 1);
var useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback: function (v) {
    useMutableCallback = v;
  }
}, 2);
var React, useState, useEffect;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useState: function (v) {
    useState = v;
  },
  useEffect: function (v) {
    useEffect = v;
  }
}, 3);
var roomTypes;
module.link("../../../../../app/utils/client", {
  roomTypes: function (v) {
    roomTypes = v;
  }
}, 4);
var validateEmail;
module.link("../../../../../lib/emailValidator", {
  validateEmail: function (v) {
    validateEmail = v;
  }
}, 5);
var UserAutoCompleteMultiple;
module.link("../../../../components/UserAutoCompleteMultiple", {
  "default": function (v) {
    UserAutoCompleteMultiple = v;
  }
}, 6);
var useEndpoint;
module.link("../../../../contexts/ServerContext", {
  useEndpoint: function (v) {
    useEndpoint = v;
  }
}, 7);
var useToastMessageDispatch;
module.link("../../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch: function (v) {
    useToastMessageDispatch = v;
  }
}, 8);
var useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 9);
var useForm;
module.link("../../../../hooks/useForm", {
  useForm: function (v) {
    useForm = v;
  }
}, 10);
var useUserRoom;
module.link("../../hooks/useUserRoom", {
  useUserRoom: function (v) {
    useUserRoom = v;
  }
}, 11);
var clickable = css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n\tcursor: pointer;\n"])));

var MailExportForm = function (_ref) {
  var onCancel = _ref.onCancel,
      rid = _ref.rid;
  var t = useTranslation();
  var room = useUserRoom(rid);
  var roomName = room && room.t && roomTypes.getRoomName(room.t, room);

  var _useState = useState([]),
      _useState2 = _slicedToArray(_useState, 2),
      selectedMessages = _useState2[0],
      setSelected = _useState2[1];

  var _useState3 = useState(),
      _useState4 = _slicedToArray(_useState3, 2),
      errorMessage = _useState4[0],
      setErrorMessage = _useState4[1];

  var _useForm = useForm({
    dateFrom: '',
    dateTo: '',
    toUsers: [],
    additionalEmails: '',
    subject: t('Mail_Messages_Subject', roomName)
  }),
      values = _useForm.values,
      handlers = _useForm.handlers;

  var dispatchToastMessage = useToastMessageDispatch();
  var toUsers = values.toUsers,
      additionalEmails = values.additionalEmails,
      subject = values.subject;
  var reset = useMutableCallback(function () {
    setSelected([]);
    $('.messages-box .message', $("#chat-window-" + rid)).removeClass('selected');
  });
  useEffect(function () {
    var $root = $("#chat-window-" + rid);
    $('.messages-box', $root).addClass('selectable');

    var handler = function () {
      var id = this.id;

      if (this.classList.contains('selected')) {
        this.classList.remove('selected');
        setSelected(function (selectedMessages) {
          return selectedMessages.filter(function (message) {
            return message !== id;
          });
        });
      } else {
        this.classList.add('selected');
        setSelected(function (selectedMessages) {
          return selectedMessages.concat(id);
        });
      }
    };

    $('.messages-box .message', $root).on('click', handler);
    return function () {
      $('.messages-box', $root).removeClass('selectable');
      $('.messages-box .message', $root).off('click', handler).filter('.selected').removeClass('selected');
    };
  }, [rid]);
  var handleToUsers = handlers.handleToUsers,
      handleAdditionalEmails = handlers.handleAdditionalEmails,
      handleSubject = handlers.handleSubject;
  var onChangeUsers = useMutableCallback(function (value, action) {
    if (!action) {
      if (toUsers.includes(value)) {
        return;
      }

      return handleToUsers([].concat(_toConsumableArray(toUsers), [value]));
    }

    handleToUsers(toUsers.filter(function (current) {
      return current !== value;
    }));
  });
  var roomsExport = useEndpoint('POST', 'rooms.export');

  var handleSubmit = function () {
    function _callee() {
      return _regeneratorRuntime.async(function () {
        function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(toUsers.length === 0 && additionalEmails === '')) {
                  _context.next = 3;
                  break;
                }

                setErrorMessage(t('Mail_Message_Missing_to'));
                return _context.abrupt("return");

              case 3:
                if (!(additionalEmails !== '' && !validateEmail(additionalEmails))) {
                  _context.next = 6;
                  break;
                }

                setErrorMessage(t('Mail_Message_Invalid_emails', additionalEmails));
                return _context.abrupt("return");

              case 6:
                if (!(selectedMessages.length === 0)) {
                  _context.next = 9;
                  break;
                }

                setErrorMessage(t('Mail_Message_No_messages_selected_select_all'));
                return _context.abrupt("return");

              case 9:
                setErrorMessage(null);
                _context.prev = 10;
                _context.next = 13;
                return _regeneratorRuntime.awrap(roomsExport({
                  rid: rid,
                  type: 'email',
                  toUsers: toUsers,
                  toEmails: additionalEmails.split(','),
                  subject: subject,
                  messages: selectedMessages
                }));

              case 13:
                dispatchToastMessage({
                  type: 'success',
                  message: t('Your_email_has_been_queued_for_sending')
                });
                _context.next = 19;
                break;

              case 16:
                _context.prev = 16;
                _context.t0 = _context["catch"](10);
                dispatchToastMessage({
                  type: 'error',
                  message: _context.t0
                });

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }

        return _callee$;
      }(), null, null, [[10, 16]], Promise);
    }

    return _callee;
  }();

  return /*#__PURE__*/React.createElement(FieldGroup, null, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Callout, {
    onClick: reset,
    title: t('Messages selected'),
    type: selectedMessages.length > 0 ? 'success' : 'info'
  }, /*#__PURE__*/React.createElement("p", null, selectedMessages.length + " Messages selected"), selectedMessages.length > 0 && /*#__PURE__*/React.createElement(Box, {
    is: "p",
    className: clickable
  }, t('Click here to clear the selection')), selectedMessages.length === 0 && /*#__PURE__*/React.createElement(Box, {
    is: "p"
  }, t('Click_the_messages_you_would_like_to_send_by_email')))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('To_users')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(UserAutoCompleteMultiple, {
    value: toUsers,
    onChange: onChangeUsers
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('To_additional_emails')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    placeholder: t('Email_Placeholder_any'),
    value: additionalEmails,
    onChange: handleAdditionalEmails,
    addon: /*#__PURE__*/React.createElement(Icon, {
      name: "mail",
      size: "x20"
    })
  }))), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, t('Subject')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    value: subject,
    onChange: handleSubject,
    addon: /*#__PURE__*/React.createElement(Icon, {
      name: "edit",
      size: "x20"
    })
  }))), errorMessage && /*#__PURE__*/React.createElement(Callout, {
    type: 'danger',
    title: errorMessage
  }), /*#__PURE__*/React.createElement(ButtonGroup, {
    stretch: true,
    mb: "x12"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onCancel
  }, t('Cancel')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: function () {
      return handleSubmit();
    }
  }, t('Send'))));
};

module.exportDefault(MailExportForm);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/ExportMessages/6731bdc66d564b25da677a5a1dfca7941b3dee8f.map
