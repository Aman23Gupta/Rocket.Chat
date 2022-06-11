function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Omnichannel/modals/TranscriptModal.tsx                                                            //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["email", "room", "onRequest", "onSend", "onCancel", "onDiscard"];

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 1);
var Field, Button, TextInput, Icon, ButtonGroup, Modal;
module.link("@rocket.chat/fuselage", {
  Field: function (v) {
    Field = v;
  },
  Button: function (v) {
    Button = v;
  },
  TextInput: function (v) {
    TextInput = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Modal: function (v) {
    Modal = v;
  }
}, 0);
var useAutoFocus;
module.link("@rocket.chat/fuselage-hooks", {
  useAutoFocus: function (v) {
    useAutoFocus = v;
  }
}, 1);
var React, useCallback, useEffect, useState, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useState: function (v) {
    useState = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 2);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var useComponentDidUpdate;
module.link("../../../hooks/useComponentDidUpdate", {
  useComponentDidUpdate: function (v) {
    useComponentDidUpdate = v;
  }
}, 4);
var useForm;
module.link("../../../hooks/useForm", {
  useForm: function (v) {
    useForm = v;
  }
}, 5);

var TranscriptModal = function (_ref) {
  var _room$v;

  var _ref$email = _ref.email,
      emailDefault = _ref$email === void 0 ? '' : _ref$email,
      room = _ref.room,
      onRequest = _ref.onRequest,
      onSend = _ref.onSend,
      onCancel = _ref.onCancel,
      onDiscard = _ref.onDiscard,
      props = _objectWithoutProperties(_ref, _excluded);

  var t = useTranslation();
  var inputRef = useAutoFocus(true);

  var _useForm = useForm({
    email: emailDefault || '',
    subject: t('Transcript_of_your_livechat_conversation')
  }),
      values = _useForm.values,
      handlers = _useForm.handlers;

  var email = values.email,
      subject = values.subject;
  var handleEmail = handlers.handleEmail,
      handleSubject = handlers.handleSubject;

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      emailError = _useState2[0],
      setEmailError = _useState2[1];

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      subjectError = _useState4[0],
      setSubjectError = _useState4[1];

  var transcriptRequest = room.transcriptRequest;
  var roomOpen = room === null || room === void 0 ? void 0 : room.open;
  var token = room === null || room === void 0 ? void 0 : (_room$v = room.v) === null || _room$v === void 0 ? void 0 : _room$v.token;
  var handleRequest = useCallback(function () {
    onRequest(email, subject);
  }, [email, onRequest, subject]);
  var handleSend = useCallback(function () {
    onSend && token && onSend(email, subject, token);
  }, [email, onSend, subject, token]);
  var handleDiscard = useCallback(function () {
    return onDiscard();
  }, [onDiscard]);
  useComponentDidUpdate(function () {
    setEmailError(!email ? t('The_field_is_required', t('Email')) : '');
  }, [t, email]);
  useComponentDidUpdate(function () {
    setSubjectError(!subject ? t('The_field_is_required', t('Subject')) : '');
  }, [t, subject]);
  var canSave = useMemo(function () {
    return !!subject;
  }, [subject]);
  useEffect(function () {
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
//# sourceMappingURL=/dynamic/client/components/Omnichannel/modals/18735f6a862b16eb10f05ae91b119ea2a11e5da2.map
