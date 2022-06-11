function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/DefaultAttachment.tsx                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["value", "title"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 1);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 2);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 3);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var isActionAttachment;
module.link("../../../../definition/IMessage/MessageAttachment/MessageAttachmentAction", {
  isActionAttachment: function (v) {
    isActionAttachment = v;
  }
}, 1);
var MarkdownText;
module.link("../../MarkdownText", {
  "default": function (v) {
    MarkdownText = v;
  }
}, 2);
var ActionAttachment;
module.link("./ActionAttachtment", {
  ActionAttachment: function (v) {
    ActionAttachment = v;
  }
}, 3);
var Attachment;
module.link("./Attachment", {
  "default": function (v) {
    Attachment = v;
  }
}, 4);
var FieldsAttachment;
module.link("./FieldsAttachment", {
  "default": function (v) {
    FieldsAttachment = v;
  }
}, 5);
var useCollapse;
module.link("./hooks/useCollapse", {
  useCollapse: function (v) {
    useCollapse = v;
  }
}, 6);

var applyMarkdownIfRequires = function () {
  var list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['text', 'pretext'];
  var key = arguments.length > 1 ? arguments[1] : undefined;
  var text = arguments.length > 2 ? arguments[2] : undefined;
  return list !== null && list !== void 0 && list.includes(key) ? /*#__PURE__*/React.createElement(MarkdownText, {
    parseEmoji: true,
    variant: "inline",
    content: text
  }) : text;
};

var DefaultAttachment = function (attachment) {
  var _useCollapse = useCollapse(!!attachment.collapsed),
      _useCollapse2 = _slicedToArray(_useCollapse, 2),
      collapsed = _useCollapse2[0],
      collapse = _useCollapse2[1];

  return /*#__PURE__*/React.createElement(Attachment.Block, {
    color: attachment.color,
    pre: attachment.pretext && /*#__PURE__*/React.createElement(Attachment.Text, null, applyMarkdownIfRequires(attachment.mrkdwn_in, 'pretext', attachment.pretext))
  }, /*#__PURE__*/React.createElement(Attachment.Content, null, attachment.author_name && /*#__PURE__*/React.createElement(Attachment.Author, null, attachment.author_icon && /*#__PURE__*/React.createElement(Attachment.AuthorAvatar, {
    url: attachment.author_icon
  }), /*#__PURE__*/React.createElement(Attachment.AuthorName, attachment.author_link && {
    is: 'a',
    href: attachment.author_link,
    target: '_blank',
    color: undefined
  }, attachment.author_name)), attachment.title && /*#__PURE__*/React.createElement(Attachment.Row, null, /*#__PURE__*/React.createElement(Attachment.Title, attachment.title_link && {
    is: 'a',
    href: attachment.title_link,
    target: '_blank',
    color: undefined
  }, attachment.title), ' ', collapse), !collapsed && /*#__PURE__*/React.createElement(React.Fragment, null, attachment.text && /*#__PURE__*/React.createElement(Attachment.Text, null, applyMarkdownIfRequires(attachment.mrkdwn_in, 'text', attachment.text)), attachment.fields && /*#__PURE__*/React.createElement(FieldsAttachment, {
    fields: attachment.fields.map(function (field) {
      if (!field.value) {
        return field;
      }

      var value = field.value,
          title = field.title,
          rest = _objectWithoutProperties(field, _excluded);

      return _objectSpread(_objectSpread({}, rest), {}, {
        title: /*#__PURE__*/React.createElement(MarkdownText, {
          variant: "inline",
          parseEmoji: true,
          content: title.replace(/(.*)/g, function (line) {
            return line + "  ";
          })
        }),
        value: /*#__PURE__*/React.createElement(MarkdownText, {
          variant: "inline",
          parseEmoji: true,
          content: value.replace(/(.*)/g, function (line) {
            return line + "  ";
          })
        })
      });
    })
  }), attachment.image_url && /*#__PURE__*/React.createElement(Attachment.Image, _extends({}, attachment.image_dimensions, {
    src: attachment.image_url
  })), isActionAttachment(attachment) && /*#__PURE__*/React.createElement(ActionAttachment, attachment))), attachment.thumb_url && /*#__PURE__*/React.createElement(Attachment.Thumb, {
    url: attachment.thumb_url
  }));
};

module.exportDefault(DefaultAttachment);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/1a494b327e8992f8e153db4d5ff7610dcd4a5c11.map
