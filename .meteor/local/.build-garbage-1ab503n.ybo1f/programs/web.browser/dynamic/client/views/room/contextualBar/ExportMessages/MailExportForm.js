function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/room/contextualBar/ExportMessages/MailExportForm.js                                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _templateObject;

let _taggedTemplateLiteral;

module.link("@babel/runtime/helpers/taggedTemplateLiteral", {
  default(v) {
    _taggedTemplateLiteral = v;
  }

}, 0);
let css;
module.link("@rocket.chat/css-in-js", {
  css(v) {
    css = v;
  }

}, 0);
let Field, TextInput, ButtonGroup, Button, Box, Icon, Callout, FieldGroup;
module.link("@rocket.chat/fuselage", {
  Field(v) {
    Field = v;
  },

  TextInput(v) {
    TextInput = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Button(v) {
    Button = v;
  },

  Box(v) {
    Box = v;
  },

  Icon(v) {
    Icon = v;
  },

  Callout(v) {
    Callout = v;
  },

  FieldGroup(v) {
    FieldGroup = v;
  }

}, 1);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 2);
let React, useState, useEffect;
module.link("react", {
  default(v) {
    React = v;
  },

  useState(v) {
    useState = v;
  },

  useEffect(v) {
    useEffect = v;
  }

}, 3);
let roomTypes;
module.link("../../../../../app/utils/client", {
  roomTypes(v) {
    roomTypes = v;
  }

}, 4);
let validateEmail;
module.link("../../../../../lib/emailValidator", {
  validateEmail(v) {
    validateEmail = v;
  }

}, 5);
let UserAutoCompleteMultiple;
module.link("../../../../components/UserAutoCompleteMultiple", {
  default(v) {
    UserAutoCompleteMultiple = v;
  }

}, 6);
let useEndpoint;
module.link("../../../../contexts/ServerContext", {
  useEndpoint(v) {
    useEndpoint = v;
  }

}, 7);
let useToastMessageDispatch;
module.link("../../../../contexts/ToastMessagesContext", {
  useToastMessageDispatch(v) {
    useToastMessageDispatch = v;
  }

}, 8);
let useTranslation;
module.link("../../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 9);
let useForm;
module.link("../../../../hooks/useForm", {
  useForm(v) {
    useForm = v;
  }

}, 10);
let useUserRoom;
module.link("../../hooks/useUserRoom", {
  useUserRoom(v) {
    useUserRoom = v;
  }

}, 11);
const clickable = css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\tcursor: pointer;\n"])));

const MailExportForm = _ref => {
  let {
    onCancel,
    rid
  } = _ref;
  const t = useTranslation();
  const room = useUserRoom(rid);
  const roomName = room && room.t && roomTypes.getRoomName(room.t, room);
  const [selectedMessages, setSelected] = useState([]);
  const [errorMessage, setErrorMessage] = useState();
  const {
    values,
    handlers
  } = useForm({
    dateFrom: '',
    dateTo: '',
    toUsers: [],
    additionalEmails: '',
    subject: t('Mail_Messages_Subject', roomName)
  });
  const dispatchToastMessage = useToastMessageDispatch();
  const {
    toUsers,
    additionalEmails,
    subject
  } = values;
  const reset = useMutableCallback(() => {
    setSelected([]);
    $('.messages-box .message', $("#chat-window-".concat(rid))).removeClass('selected');
  });
  useEffect(() => {
    const $root = $("#chat-window-".concat(rid));
    $('.messages-box', $root).addClass('selectable');

    const handler = function () {
      const {
        id
      } = this;

      if (this.classList.contains('selected')) {
        this.classList.remove('selected');
        setSelected(selectedMessages => selectedMessages.filter(message => message !== id));
      } else {
        this.classList.add('selected');
        setSelected(selectedMessages => selectedMessages.concat(id));
      }
    };

    $('.messages-box .message', $root).on('click', handler);
    return () => {
      $('.messages-box', $root).removeClass('selectable');
      $('.messages-box .message', $root).off('click', handler).filter('.selected').removeClass('selected');
    };
  }, [rid]);
  const {
    handleToUsers,
    handleAdditionalEmails,
    handleSubject
  } = handlers;
  const onChangeUsers = useMutableCallback((value, action) => {
    if (!action) {
      if (toUsers.includes(value)) {
        return;
      }

      return handleToUsers([...toUsers, value]);
    }

    handleToUsers(toUsers.filter(current => current !== value));
  });
  const roomsExport = useEndpoint('POST', 'rooms.export');

  const handleSubmit = async () => {
    if (toUsers.length === 0 && additionalEmails === '') {
      setErrorMessage(t('Mail_Message_Missing_to'));
      return;
    }

    if (additionalEmails !== '' && !validateEmail(additionalEmails)) {
      setErrorMessage(t('Mail_Message_Invalid_emails', additionalEmails));
      return;
    }

    if (selectedMessages.length === 0) {
      setErrorMessage(t('Mail_Message_No_messages_selected_select_all'));
      return;
    }

    setErrorMessage(null);

    try {
      await roomsExport({
        rid,
        type: 'email',
        toUsers,
        toEmails: additionalEmails.split(','),
        subject,
        messages: selectedMessages
      });
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

  return /*#__PURE__*/React.createElement(FieldGroup, null, /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Callout, {
    onClick: reset,
    title: t('Messages selected'),
    type: selectedMessages.length > 0 ? 'success' : 'info'
  }, /*#__PURE__*/React.createElement("p", null, "".concat(selectedMessages.length, " Messages selected")), selectedMessages.length > 0 && /*#__PURE__*/React.createElement(Box, {
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
    onClick: () => handleSubmit()
  }, t('Send'))));
};

module.exportDefault(MailExportForm);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/room/contextualBar/ExportMessages/c0a7f5964b373b10c1264ad325e0284fbe1333f2.map
