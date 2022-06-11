function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Omnichannel/modals/CloseChatModal.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
var Field, Button, TextInput, Icon, ButtonGroup, Modal, Box;
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
  },
  Box: function (v) {
    Box = v;
  }
}, 0);
var useAutoFocus;
module.link("@rocket.chat/fuselage-hooks", {
  useAutoFocus: function (v) {
    useAutoFocus = v;
  }
}, 1);
var React, useCallback, useState, useMemo, useEffect;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useState: function (v) {
    useState = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useEffect: function (v) {
    useEffect = v;
  }
}, 2);
var useSetting;
module.link("../../../contexts/SettingsContext", {
  useSetting: function (v) {
    useSetting = v;
  }
}, 3);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 4);
var useComponentDidUpdate;
module.link("../../../hooks/useComponentDidUpdate", {
  useComponentDidUpdate: function (v) {
    useComponentDidUpdate = v;
  }
}, 5);
var useForm;
module.link("../../../hooks/useForm", {
  useForm: function (v) {
    useForm = v;
  }
}, 6);
var GenericModal;
module.link("../../GenericModal", {
  "default": function (v) {
    GenericModal = v;
  }
}, 7);
var Tags;
module.link("../Tags", {
  "default": function (v) {
    Tags = v;
  }
}, 8);

var CloseChatModal = function (_ref) {
  var _ref$department = _ref.department,
      department = _ref$department === void 0 ? {} : _ref$department,
      onCancel = _ref.onCancel,
      onConfirm = _ref.onConfirm;
  var t = useTranslation();
  var inputRef = useAutoFocus(true);

  var _useForm = useForm({
    comment: '',
    tags: []
  }),
      values = _useForm.values,
      handlers = _useForm.handlers;

  var commentRequired = useSetting('Livechat_request_comment_when_closing_conversation');
  var comment = values.comment,
      tags = values.tags;
  var handleComment = handlers.handleComment,
      handleTags = handlers.handleTags;

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      commentError = _useState2[0],
      setCommentError = _useState2[1];

  var _useState3 = useState(''),
      _useState4 = _slicedToArray(_useState3, 2),
      tagError = _useState4[0],
      setTagError = _useState4[1];

  var _useState5 = useState(false),
      _useState6 = _slicedToArray(_useState5, 2),
      tagRequired = _useState6[0],
      setTagRequired = _useState6[1];

  var handleConfirm = useCallback(function () {
    onConfirm(comment, tags);
  }, [comment, onConfirm, tags]);
  useComponentDidUpdate(function () {
    setCommentError(!comment && commentRequired ? t('The_field_is_required', t('Comment')) : '');
  }, [commentRequired, comment, t]);
  var canConfirm = useMemo(function () {
    var canConfirmTag = !tagError && (tagRequired ? tags.length > 0 : true);
    var canConfirmComment = !commentError && (commentRequired ? !!comment : true);
    return canConfirmTag && canConfirmComment;
  }, [comment, commentError, commentRequired, tagError, tagRequired, tags.length]);
  useEffect(function () {
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
//# sourceMappingURL=/dynamic/client/components/Omnichannel/modals/321d984eff948383fe8989c412d2a09bb6ab178d.map
