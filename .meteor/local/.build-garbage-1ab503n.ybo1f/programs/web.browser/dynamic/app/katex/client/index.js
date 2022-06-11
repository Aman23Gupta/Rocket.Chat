function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/katex/client/index.js                                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  createKatexMessageRendering: () => createKatexMessageRendering
});
let Random;
module.link("meteor/random", {
  Random(v) {
    Random = v;
  }

}, 0);
let katex;
module.link("katex", {
  default(v) {
    katex = v;
  }

}, 1);
let unescapeHTML, escapeHTML;
module.link("@rocket.chat/string-helpers", {
  unescapeHTML(v) {
    unescapeHTML = v;
  },

  escapeHTML(v) {
    escapeHTML = v;
  }

}, 2);
module.link("katex/dist/katex.min.css");
module.link("./style.css");

class Boundary {
  length() {
    return this.end - this.start;
  }

  extract(str) {
    return str.substr(this.start, this.length());
  }

}

class Katex {
  constructor(katex, _ref) {
    let {
      dollarSyntax,
      parenthesisSyntax
    } = _ref;

    this.renderLatex = (latex, displayMode) => {
      try {
        return this.katex.renderToString(latex, {
          displayMode,
          macros: {
            '\\href': '\\@secondoftwo'
          }
        });
      } catch ({
        message
      }) {
        return "<div class=\"katex-error katex-".concat(displayMode ? 'block' : 'inline', "-error\">").concat(escapeHTML(message), "</div>");
      }
    };

    this.renderMessage = message => {
      var _message$html;

      if (typeof message === 'string') {
        return this.render(message, this.renderLatex);
      }

      if (!((_message$html = message.html) !== null && _message$html !== void 0 && _message$html.trim())) {
        return message;
      }

      if (!message.tokens) {
        message.tokens = [];
      }

      message.html = this.render(message.html, (latex, displayMode) => {
        const token = "=!=".concat(Random.id(), "=!=");
        message.tokens.push({
          token,
          text: this.renderLatex(latex, displayMode)
        });
        return token;
      });
      return message;
    };

    this.katex = katex;
    this.delimitersMap = [{
      opener: '\\[',
      closer: '\\]',
      displayMode: true,
      enabled: () => parenthesisSyntax
    }, {
      opener: '\\(',
      closer: '\\)',
      displayMode: false,
      enabled: () => parenthesisSyntax
    }, {
      opener: '$$',
      closer: '$$',
      displayMode: true,
      enabled: () => dollarSyntax
    }, {
      opener: '$',
      closer: '$',
      displayMode: false,
      enabled: () => dollarSyntax
    }];
  }

  findOpeningDelimiter(str, start) {
    const matches = this.delimitersMap.filter(options => options.enabled()).map(options => ({
      options,
      pos: str.indexOf(options.opener, start)
    }));
    const positions = matches.filter(_ref2 => {
      let {
        pos
      } = _ref2;
      return pos >= 0;
    }).map(_ref3 => {
      let {
        pos
      } = _ref3;
      return pos;
    }); // No opening delimiters were found

    if (positions.length === 0) {
      return null;
    } // Take the first delimiter found


    const minPos = Math.min(...positions);
    const matchIndex = matches.findIndex(_ref4 => {
      let {
        pos
      } = _ref4;
      return pos === minPos;
    });
    const match = matches[matchIndex];
    return match;
  }

  getLatexBoundaries(str, _ref5) {
    let {
      options: {
        closer
      },
      pos
    } = _ref5;
    const closerIndex = str.substr(pos + closer.length).indexOf(closer);

    if (closerIndex < 0) {
      return null;
    }

    const inner = new Boundary();
    const outer = new Boundary();
    inner.start = pos + closer.length;
    inner.end = inner.start + closerIndex;
    outer.start = pos;
    outer.end = inner.end + closer.length;
    return {
      outer,
      inner
    };
  } // Searches for the first latex block in the given string


  findLatex(str) {
    let start = 0;
    let openingDelimiterMatch;

    while ((openingDelimiterMatch = this.findOpeningDelimiter(str, start++)) != null) {
      const match = this.getLatexBoundaries(str, openingDelimiterMatch);

      if (match && match.inner.extract(str).trim().length) {
        match.options = openingDelimiterMatch.options;
        return match;
      }
    }

    return null;
  } // Breaks a message to what comes before, after and to the content of a
  // matched latex block


  extractLatex(str, match) {
    const before = str.substr(0, match.outer.start);
    const after = str.substr(match.outer.end);
    let latex = match.inner.extract(str);
    latex = unescapeHTML(latex);
    return {
      before,
      latex,
      after
    };
  } // Takes a latex math string and the desired display mode and renders it
  // to HTML using the KaTeX library


  // Takes a string and renders all latex blocks inside it
  render(str, renderFunction) {
    let result = '';

    while (this.findLatex(str) != null) {
      // Find the first latex block in the string
      const match = this.findLatex(str);
      const parts = this.extractLatex(str, match); // Add to the reuslt what comes before the latex block as well as
      // the rendered latex content

      const rendered = renderFunction(parts.latex, match.options.displayMode);
      result += parts.before + rendered; // Set what comes after the latex block to be examined next

      str = parts.after;
    }

    result += str;
    return result;
  }

}

const createKatexMessageRendering = options => {
  const instance = new Katex(katex, options);
  return message => instance.renderMessage(message);
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/katex/client/e0d5f53b44d09b58d03df6b909f7f24c2a45b379.map
