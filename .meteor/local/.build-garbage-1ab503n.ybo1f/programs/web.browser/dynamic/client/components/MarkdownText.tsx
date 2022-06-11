function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/MarkdownText.tsx                                                                                  //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["content", "variant", "withTruncatedText", "preserveHtml", "parseEmoji"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);

let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 2);
let Box;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  }

}, 0);
let dompurify;
module.link("dompurify", {
  default(v) {
    dompurify = v;
  }

}, 1);
let marked;
module.link("marked", {
  default(v) {
    marked = v;
  }

}, 2);
let React, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 3);
let renderMessageEmoji;
module.link("../lib/utils/renderMessageEmoji", {
  renderMessageEmoji(v) {
    renderMessageEmoji = v;
  }

}, 4);
const documentRenderer = new marked.Renderer();
const inlineRenderer = new marked.Renderer();
const inlineWithoutBreaks = new marked.Renderer();
marked.InlineLexer.rules.gfm = _objectSpread(_objectSpread({}, marked.InlineLexer.rules.gfm), {}, {
  strong: /^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
  em: /^__(?=\S)([\s\S]*?\S)__(?!_)|^_(?=\S)([\s\S]*?\S)_(?!_)/
});

const linkMarked = (href, _title, text) => "<a href=\"".concat(href, "\" target=\"_blank\" rel=\"nofollow\">").concat(text, "</a> ");

const paragraphMarked = text => text;

const brMarked = () => ' ';

const listItemMarked = text => {
  const cleanText = text.replace(/<p.*?>|<\/p>/gi, '');
  return "<li>".concat(cleanText, "</li>");
};

const horizontalRuleMarked = () => '';

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
const defaultOptions = {
  gfm: true,
  headerIds: false
};

const options = _objectSpread(_objectSpread({}, defaultOptions), {}, {
  renderer: documentRenderer
});

const inlineOptions = _objectSpread(_objectSpread({}, defaultOptions), {}, {
  renderer: inlineRenderer
});

const inlineWithoutBreaksOptions = _objectSpread(_objectSpread({}, defaultOptions), {}, {
  renderer: inlineWithoutBreaks
});

const MarkdownText = _ref => {
  let {
    content,
    variant = 'document',
    withTruncatedText = false,
    preserveHtml = false,
    parseEmoji = false
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const sanitizer = dompurify.sanitize;
  let markedOptions;
  const withRichContent = variant;

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

  const __html = useMemo(() => {
    const html = (() => {
      if (content && typeof content === 'string') {
        const markedHtml = marked(new Option(content).innerHTML, markedOptions);

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
    })();

    return preserveHtml ? html : html && sanitizer(html, {
      ADD_ATTR: ['target']
    });
  }, [content, preserveHtml, sanitizer, markedOptions, parseEmoji]);

  return __html ? /*#__PURE__*/React.createElement(Box, _extends({
    dangerouslySetInnerHTML: {
      __html
    },
    withTruncatedText: withTruncatedText,
    withRichContent: withRichContent
  }, props)) : null;
};

module.exportDefault(MarkdownText);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/650de4d0833c52b4e541f8bfba0aae2bfe5a03d9.map
