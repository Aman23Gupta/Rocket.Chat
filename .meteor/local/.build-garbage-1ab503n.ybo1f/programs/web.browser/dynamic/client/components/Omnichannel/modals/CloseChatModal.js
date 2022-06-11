function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Omnichannel/modals/CloseChatModal.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Field, Button, TextInput, Icon, ButtonGroup, Modal, Box;
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
  },

  Box(v) {
    Box = v;
  }

}, 0);
let useAutoFocus;
module.link("@rocket.chat/fuselage-hooks", {
  useAutoFocus(v) {
    useAutoFocus = v;
  }

}, 1);
let React, useCallback, useState, useMemo, useEffect;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useState(v) {
    useState = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useEffect(v) {
    useEffect = v;
  }

}, 2);
let useSetting;
module.link("../../../contexts/SettingsContext", {
  useSetting(v) {
    useSetting = v;
  }

}, 3);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 4);
let useComponentDidUpdate;
module.link("../../../hooks/useComponentDidUpdate", {
  useComponentDidUpdate(v) {
    useComponentDidUpdate = v;
  }

}, 5);
let useForm;
module.link("../../../hooks/useForm", {
  useForm(v) {
    useForm = v;
  }

}, 6);
let GenericModal;
module.link("../../GenericModal", {
  default(v) {
    GenericModal = v;
  }

}, 7);
let Tags;
module.link("../Tags", {
  default(v) {
    Tags = v;
  }

}, 8);

const CloseChatModal = _ref => {
  let {
    department = {},
    onCancel,
    onConfirm
  } = _ref;
  const t = useTranslation();
  const inputRef = useAutoFocus(true);
  const {
    values,
    handlers
  } = useForm({
    comment: '',
    tags: []
  });
  const commentRequired = useSetting('Livechat_request_comment_when_closing_conversation');
  const {
    comment,
    tags
  } = values;
  const {
    handleComment,
    handleTags
  } = handlers;
  const [commentError, setCommentError] = useState('');
  const [tagError, setTagError] = useState('');
  const [tagRequired, setTagRequired] = useState(false);
  const handleConfirm = useCallback(() => {
    onConfirm(comment, tags);
  }, [comment, onConfirm, tags]);
  useComponentDidUpdate(() => {
    setCommentError(!comment && commentRequired ? t('The_field_is_required', t('Comment')) : '');
  }, [commentRequired, comment, t]);
  const canConfirm = useMemo(() => {
    const canConfirmTag = !tagError && (tagRequired ? tags.length > 0 : true);
    const canConfirmComment = !commentError && (commentRequired ? !!comment : true);
    return canConfirmTag && canConfirmComment;
  }, [comment, commentError, commentRequired, tagError, tagRequired, tags.length]);
  useEffect(() => {
    (department === null || department === void 0 ? void 0 : department.requestTagBeforeClosingChat) && setTagRequired(true);
    setTagError(tagRequired && (!tags || tags.length === 0) ? t('error-tags-must-be-assigned-before-closing-chat') : '');
  }, [department, tagRequired, t, tags]);

  if (!commentRequired && !tagRequired) {
    return /*#__PURE__*/React.createElement(GenericModal, {
      variant: "warning",
      title: t('Are_you_sure_you_want_to_close_this_chat'),
      onConfirm: handleConfirm,
      onCancel: onCancel,
      onClose: onCancel,
      confirmText: t('Confirm')
    });
  }

  return /*#__PURE__*/React.createElement(Modal, null, /*#__PURE__*/React.createElement(Modal.Header, null, /*#__PURE__*/React.createElement(Icon, {
    name: "baloon-close-top-right",
    size: 20
  }), /*#__PURE__*/React.createElement(Modal.Title, null, t('Closing_chat')), /*#__PURE__*/React.createElement(Modal.Close, {
    onClick: onCancel
  })), /*#__PURE__*/React.createElement(Modal.Content, {
    fontScale: "p2"
  }, /*#__PURE__*/React.createElement(Box, {
    color: "neutral-600"
  }, t('Close_room_description')), /*#__PURE__*/React.createElement(Field, {
    marginBlock: "x15"
  }, /*#__PURE__*/React.createElement(Field.Label, {
    required: commentRequired
  }, t('Comment')), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(TextInput, {
    ref: inputRef,
    error: commentError,
    flexGrow: 1,
    value: comment,
    onChange: handleComment,
    placeholder: t('Please_add_a_comment')
  })), /*#__PURE__*/React.createElement(Field.Error, null, commentError)), Tags && /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Tags, {
    tagRequired: tagRequired,
    tags: tags,
    handler: handleTags,
    error: tagError
  }), /*#__PURE__*/React.createElement(Field.Error, null, tagError))), /*#__PURE__*/React.createElement(Modal.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    align: "end"
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: onCancel
  }, t('Cancel')), /*#__PURE__*/React.createElement(Button, {
    disabled: !canConfirm,
    primary: true,
    onClick: handleConfirm
  }, t('Confirm')))));
};

module.exportDefault(CloseChatModal);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Omnichannel/modals/29d68f265cee37b43c01d5b88a24cc01e3bf772f.map
