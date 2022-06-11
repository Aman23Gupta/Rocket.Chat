function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/QuoteAttachment.tsx                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _templateObject;

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _taggedTemplateLiteral;

module.link("@babel/runtime/helpers/taggedTemplateLiteral", {
  default(v) {
    _taggedTemplateLiteral = v;
  }

}, 1);
module.export({
  QuoteAttachment: () => QuoteAttachment
});
let css;
module.link("@rocket.chat/css-in-js", {
  css(v) {
    css = v;
  }

}, 0);
let Box;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  }

}, 1);
let colors;
module.link("@rocket.chat/fuselage-tokens/colors", {
  default(v) {
    colors = v;
  }

}, 2);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 3);
let Attachments;
module.link(".", {
  default(v) {
    Attachments = v;
  }

}, 4);
let useTimeAgo;
module.link("../../../hooks/useTimeAgo", {
  useTimeAgo(v) {
    useTimeAgo = v;
  }

}, 5);
let MarkdownText;
module.link("../../MarkdownText", {
  default(v) {
    MarkdownText = v;
  }

}, 6);
let Attachment;
module.link("./Attachment", {
  default(v) {
    Attachment = v;
  }

}, 7);
const hover = css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t&:hover,\n\t&:focus {\n\t\t.rcx-attachment__details {\n\t\t\tbackground: ", " !important;\n\t\t\tborder-color: ", " !important;\n\t\t\tborder-inline-start-color: ", " !important;\n\t\t}\n\t}\n"])), colors.n200, colors.n300, colors.n600);

const QuoteAttachment = _ref => {
  let {
    author_icon: url,
    author_name: name,
    author_link: authorLink,
    message_link: messageLink,
    ts,
    text,
    attachments
  } = _ref;
  const format = useTimeAgo();
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Attachment.Content, {
    className: hover,
    width: "full"
  }, /*#__PURE__*/React.createElement(Attachment.Details, {
    is: "blockquote",
    borderRadius: "x2",
    borderWidth: "x2",
    borderStyle: "solid",
    borderColor: "neutral-200",
    borderInlineStartColor: "neutral-600"
  }, /*#__PURE__*/React.createElement(Attachment.Author, null, /*#__PURE__*/React.createElement(Attachment.AuthorAvatar, {
    url: url
  }), /*#__PURE__*/React.createElement(Attachment.AuthorName, authorLink && {
    is: 'a',
    href: authorLink,
    target: '_blank',
    color: undefined
  }, name), /*#__PURE__*/React.createElement(Box, _extends({
    fontScale: "c1"
  }, messageLink ? {
    is: 'a',
    href: messageLink
  } : {
    color: 'hint'
  }), format(ts))), /*#__PURE__*/React.createElement(MarkdownText, {
    parseEmoji: true,
    variant: "inline",
    content: text
  }), attachments && /*#__PURE__*/React.createElement(Attachment.Inner, {
    mbe: "-12px"
  }, /*#__PURE__*/React.createElement(Attachments, {
    attachments: attachments
  })))));
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/a699b8dfd7dc08121621cd437f4b9c81de50a38e.map
