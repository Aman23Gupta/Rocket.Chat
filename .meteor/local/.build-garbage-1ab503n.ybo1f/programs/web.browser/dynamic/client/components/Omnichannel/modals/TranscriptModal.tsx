function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Omnichannel/modals/TranscriptModal.tsx                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["email", "room", "onRequest", "onSend", "onCancel", "onDiscard"];

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 0);
let Field, Button, TextInput, Icon, ButtonGroup, Modal;
module.link("@rocket.chat/fuselage", {
  Field(v) {
    Field = v;
  },

  Button(v) {
    Button = v;
  },

  TextInput(v) {
    TextInput = v;
  },

  Icon(v) {
    Icon = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Modal(v) {
    Modal = v;
  }

}, 0);
let useAutoFocus;
module.link("@rocket.chat/fuselage-hooks", {
  useAutoFocus(v) {
    useAutoFocus = v;
  }

}, 1);
let React, useCallback, useEffect, useState, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useState(v) {
    useState = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 2);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let useComponentDidUpdate;
module.link("../../../hooks/useComponentDidUpdate", {
  useComponentDidUpdate(v) {
    useComponentDidUpdate = v;
  }

}, 4);
let useForm;
module.link("../../../hooks/useForm", {
  useForm(v) {
    useForm = v;
  }

}, 5);

const TranscriptModal = _ref => {
  var _room$v;

  let {
    email: emailDefault = '',
    room,
    onRequest,
    onSend,
    onCancel,
    onDiscard
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const t = useTranslation();
  const inputRef = useAutoFocus(true);
  const {
    values,
    handlers
  } = useForm({
    email: emailDefault || '',
    subject: t('Transcript_of_your_livechat_conversation')
  });
  const {
    email,
    subject
  } = values;
  const {
    handleEmail,
    handleSubject
  } = handlers;
  const [emailError, setEmailError] = useState('');
  const [subjectError, setSubjectError] = useState('');
  const {
    transcriptRequest
  } = room;
  const roomOpen = room === null || room === void 0 ? void 0 : room.open;
  const token = room === null || room === void 0 ? void 0 : (_room$v = room.v) === null || _room$v === void 0 ? void 0 : _room$v.token;
  const handleRequest = useCallback(() => {
    onRequest(email, subject);
  }, [email, onRequest, subject]);
  const handleSend = useCallback(() => {
    onSend && token && onSend(email, subject, token);
  }, [email, onSend, subject, token]);
  const handleDiscard = useCallback(() => onDiscard(), [onDiscard]);
  useComponentDidUpdate(() => {
    setEmailError(!email ? t('The_field_is_required', t('Email')) : '');
  }, [t, email]);
  useComponentDidUpdate(() => {
    setSubjectError(!subject ? t('The_field_is_required', t('Subject')) : '');
  }, [t, subject]);
  const canSave = useMemo(() => !!subject, [subject]);
  useEffect(() => {
    if (transcriptRequest) {
      handleEmail(transcriptRequest.email);
      handleSubject(transcriptRequest.subject);
    }
  });
  return /*#__PURE__*/React.createElement(Modal, props, /*#__PURE__*/React.createElement(Modal.Header, null, /*#__PURE__*/React.createElement(Icon, {
    name: "mail-arrow-top-right",
    size: 20
  }), /*#__PURE__*/React.createElement(Modal.Title, null, t('Transcript')), /*#__PURE__*/React.createElement(Modal.Close, {
    onClick: onCancel
  })), /*#__PURE__*/React.createElement(Modal.Content, {
    fontScale: "p2"
  }, !!transcriptRequest && /*#__PURE__*/React.createElement("p", null, t('Livechat_transcript_already_requested_warning')), /*#__PURE__*/React.createElement(Field, {
    marginBlock: "x15"
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Email'), "*"), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    disabled: !!emailDefault || !!transcriptRequest,
    error: emailError,
    flexGrow: 1,
    value: email,
    onChange: handleEmail
  })), /*#__PURE__*/React.createElement(Field.Error, null, emailError)), /*#__PURE__*/React.createElement(Field, {
    marginBlock: "x15"
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Subject'), "*"), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    ref: inputRef,
    disabled: !!transcriptRequest,
    error: subjectError,
    flexGrow: 1,
    value: subject,
    onChange: handleSubject
  })), /*#__PURE__*/React.createElement(Field.Error, null, subjectError))), /*#__PURE__*/React.createElement(Modal.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    align: "end"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onCancel
  }, t('Cancel')), roomOpen && transcriptRequest ? /*#__PURE__*/React.createElement(Button, {
    primary: true,
    danger: true,
    onClick: handleDiscard
  }, t('Discard')) : /*#__PURE__*/React.createElement(Button, {
    disabled: !canSave,
    primary: true,
    onClick: handleRequest
  }, t('Request')), !roomOpen && /*#__PURE__*/React.createElement(Button, {
    disabled: !canSave,
    primary: true,
    onClick: handleSend
  }, t('Send')))));
};

module.exportDefault(TranscriptModal);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Omnichannel/modals/72e49834f09906a13bb91701ed1d3e24430cd0b9.map
