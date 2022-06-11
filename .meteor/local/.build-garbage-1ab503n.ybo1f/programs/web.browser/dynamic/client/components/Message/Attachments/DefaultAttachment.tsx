function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/DefaultAttachment.tsx                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["value", "title"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 1);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 2);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let isActionAttachment;
module.link("../../../../definition/IMessage/MessageAttachment/MessageAttachmentAction", {
  isActionAttachment(v) {
    isActionAttachment = v;
  }

}, 1);
let MarkdownText;
module.link("../../MarkdownText", {
  default(v) {
    MarkdownText = v;
  }

}, 2);
let ActionAttachment;
module.link("./ActionAttachtment", {
  ActionAttachment(v) {
    ActionAttachment = v;
  }

}, 3);
let Attachment;
module.link("./Attachment", {
  default(v) {
    Attachment = v;
  }

}, 4);
let FieldsAttachment;
module.link("./FieldsAttachment", {
  default(v) {
    FieldsAttachment = v;
  }

}, 5);
let useCollapse;
module.link("./hooks/useCollapse", {
  useCollapse(v) {
    useCollapse = v;
  }

}, 6);

const applyMarkdownIfRequires = function () {
  let list = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : ['text', 'pretext'];
  let key = arguments.length > 1 ? arguments[1] : undefined;
  let text = arguments.length > 2 ? arguments[2] : undefined;
  return list !== null && list !== void 0 && list.includes(key) ? /*#__PURE__*/React.createElement(MarkdownText, {
    parseEmoji: true,
    variant: "inline",
    content: text
  }) : text;
};

const DefaultAttachment = attachment => {
  const [collapsed, collapse] = useCollapse(!!attachment.collapsed);
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
    fields: attachment.fields.map(field => {
      if (!field.value) {
        return field;
      }

      const {
        value,
        title
      } = field,
            rest = _objectWithoutProperties(field, _excluded);

      return _objectSpread(_objectSpread({}, rest), {}, {
        title: /*#__PURE__*/React.createElement(MarkdownText, {
          variant: "inline",
          parseEmoji: true,
          content: title.replace(/(.*)/g, line => "".concat(line, "  "))
        }),
        value: /*#__PURE__*/React.createElement(MarkdownText, {
          variant: "inline",
          parseEmoji: true,
          content: value.replace(/(.*)/g, line => "".concat(line, "  "))
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
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/f291a8bd72d7e1e743a9ee6ae49b499933f21921.map
