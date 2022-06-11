function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/MarkdownText.tsx                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["content", "variant", "withTruncatedText", "preserveHtml", "parseEmoji"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 1);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 2);
var Box;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  }
}, 0);
var dompurify;
module.link("dompurify", {
  "default": function (v) {
    dompurify = v;
  }
}, 1);
var marked;
module.link("marked", {
  "default": function (v) {
    marked = v;
  }
}, 2);
var React, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 3);
var renderMessageEmoji;
module.link("../lib/utils/renderMessageEmoji", {
  renderMessageEmoji: function (v) {
    renderMessageEmoji = v;
  }
}, 4);
var documentRenderer = new marked.Renderer();
var inlineRenderer = new marked.Renderer();
var inlineWithoutBreaks = new marked.Renderer();
marked.InlineLexer.rules.gfm = _objectSpread(_objectSpread({}, marked.InlineLexer.rules.gfm), {}, {
  strong: /^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
  em: /^__(?=\S)([\s\S]*?\S)__(?!_)|^_(?=\S)([\s\S]*?\S)_(?!_)/
});

var linkMarked = function (href, _title, text) {
  return "<a href=\"" + href + "\" target=\"_blank\" rel=\"nofollow\">" + text + "</a> ";
};

var paragraphMarked = function (text) {
  return text;
};

var brMarked = function () {
  return ' ';
};

var listItemMarked = function (text) {
  var cleanText = text.replace(/<p.*?>|<\/p>/gi, '');
  return "<li>" + cleanText + "</li>";
};

var horizontalRuleMarked = function () {
  return '';
};

documentRenderer.link = linkMarked;
documentRenderer.listitem = listItemMarked;
inlineRenderer.link = linkMarked;
inlineRenderer.paragraph = paragraphMarked;
inlineRenderer.listitem = listItemMarked;
inlineRenderer.hr = horizontalRuleMarked;
inlineWithoutBreaks.link = linkMarked;
inlineWithoutBreaks.paragraph = paragraphMarked;
inlineWithoutBreaks.br = brMarked;
inlineWithoutBreaks.listitem = listItemMarked;
inlineWithoutBreaks.hr = horizontalRuleMarked;
var defaultOptions = {
  gfm: true,
  headerIds: false
};

var options = _objectSpread(_objectSpread({}, defaultOptions), {}, {
  renderer: documentRenderer
});

var inlineOptions = _objectSpread(_objectSpread({}, defaultOptions), {}, {
  renderer: inlineRenderer
});

var inlineWithoutBreaksOptions = _objectSpread(_objectSpread({}, defaultOptions), {}, {
  renderer: inlineWithoutBreaks
});

var MarkdownText = function (_ref) {
  var content = _ref.content,
      _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'document' : _ref$variant,
      _ref$withTruncatedTex = _ref.withTruncatedText,
      withTruncatedText = _ref$withTruncatedTex === void 0 ? false : _ref$withTruncatedTex,
      _ref$preserveHtml = _ref.preserveHtml,
      preserveHtml = _ref$preserveHtml === void 0 ? false : _ref$preserveHtml,
      _ref$parseEmoji = _ref.parseEmoji,
      parseEmoji = _ref$parseEmoji === void 0 ? false : _ref$parseEmoji,
      props = _objectWithoutProperties(_ref, _excluded);

  var sanitizer = dompurify.sanitize;
  var markedOptions;
  var withRichContent = variant;

  switch (variant) {
    case 'inline':
      markedOptions = inlineOptions;
      break;

    case 'inlineWithoutBreaks':
      markedOptions = inlineWithoutBreaksOptions;
      break;

    case 'document':
    default:
      markedOptions = options;
  }

  var __html = useMemo(function () {
    var html = function () {
      if (content && typeof content === 'string') {
        var markedHtml = marked(new Option(content).innerHTML, markedOptions);

        if (parseEmoji) {
          // We are using the old emoji parser here. This could come
          // with additional processing use, but is the workaround available right now.
          // Should be replaced in the future with the new parser.
          return renderMessageEmoji({
            html: markedHtml
          });
        }

        return markedHtml;
      }
    }();

    return preserveHtml ? html : html && sanitizer(html, {
      ADD_ATTR: ['target']
    });
  }, [content, preserveHtml, sanitizer, markedOptions, parseEmoji]);

  return __html ? /*#__PURE__*/React.createElement(Box, _extends({
    dangerouslySetInnerHTML: {
      __html: __html
    },
    withTruncatedText: withTruncatedText,
    withRichContent: withRichContent
  }, props)) : null;
};

module.exportDefault(MarkdownText);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/3df7c7f6e5882917dbf139d2e476724f8bcefcdf.map
