function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Attachments/QuoteAttachment.tsx                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _templateObject;

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _taggedTemplateLiteralLoose;

module.link("@babel/runtime/helpers/taggedTemplateLiteralLoose", {
  default: function (v) {
    _taggedTemplateLiteralLoose = v;
  }
}, 1);
module.export({
  QuoteAttachment: function () {
    return QuoteAttachment;
  }
});
var css;
module.link("@rocket.chat/css-in-js", {
  css: function (v) {
    css = v;
  }
}, 0);
var Box;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  }
}, 1);
var colors;
module.link("@rocket.chat/fuselage-tokens/colors", {
  "default": function (v) {
    colors = v;
  }
}, 2);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 3);
var Attachments;
module.link(".", {
  "default": function (v) {
    Attachments = v;
  }
}, 4);
var useTimeAgo;
module.link("../../../hooks/useTimeAgo", {
  useTimeAgo: function (v) {
    useTimeAgo = v;
  }
}, 5);
var MarkdownText;
module.link("../../MarkdownText", {
  "default": function (v) {
    MarkdownText = v;
  }
}, 6);
var Attachment;
module.link("./Attachment", {
  "default": function (v) {
    Attachment = v;
  }
}, 7);
var hover = css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n\t&:hover,\n\t&:focus {\n\t\t.rcx-attachment__details {\n\t\t\tbackground: ", " !important;\n\t\t\tborder-color: ", " !important;\n\t\t\tborder-inline-start-color: ", " !important;\n\t\t}\n\t}\n"])), colors.n200, colors.n300, colors.n600);

var QuoteAttachment = function (_ref) {
  var url = _ref.author_icon,
      name = _ref.author_name,
      authorLink = _ref.author_link,
      messageLink = _ref.message_link,
      ts = _ref.ts,
      text = _ref.text,
      attachments = _ref.attachments;
  var format = useTimeAgo();
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
//# sourceMappingURL=/dynamic/client/components/Message/Attachments/9b87ea047f085a0d80f212917068c5a8eea075b3.map
