function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// app/katex/client/index.js                                                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _toConsumableArray;

module.link("@babel/runtime/helpers/toConsumableArray", {
  default: function (v) {
    _toConsumableArray = v;
  }
}, 0);
module.export({
  createKatexMessageRendering: function () {
    return createKatexMessageRendering;
  }
});
var Random;
module.link("meteor/random", {
  Random: function (v) {
    Random = v;
  }
}, 0);
var katex;
module.link("katex", {
  "default": function (v) {
    katex = v;
  }
}, 1);
var unescapeHTML, escapeHTML;
module.link("@rocket.chat/string-helpers", {
  unescapeHTML: function (v) {
    unescapeHTML = v;
  },
  escapeHTML: function (v) {
    escapeHTML = v;
  }
}, 2);
module.link("katex/dist/katex.min.css");
module.link("./style.css");

var Boundary = /*#__PURE__*/function () {
  function Boundary() {}

  var _proto = Boundary.prototype;

  _proto.length = function () {
    function length() {
      return this.end - this.start;
    }

    return length;
  }();

  _proto.extract = function () {
    function extract(str) {
      return str.substr(this.start, this.length());
    }

    return extract;
  }();

  return Boundary;
}();

var Katex = /*#__PURE__*/function () {
  function Katex(katex, _ref) {
    var _this = this;

    var dollarSyntax = _ref.dollarSyntax,
        parenthesisSyntax = _ref.parenthesisSyntax;

    this.renderLatex = function (latex, displayMode) {
      try {
        return _this.katex.renderToString(latex, {
          displayMode: displayMode,
          macros: {
            '\\href': '\\@secondoftwo'
          }
        });
      } catch (_ref2) {
        var message = _ref2.message;
        return "<div class=\"katex-error katex-" + (displayMode ? 'block' : 'inline') + "-error\">" + escapeHTML(message) + "</div>";
      }
    };

    this.renderMessage = function (message) {
      var _message$html;

      if (typeof message === 'string') {
        return _this.render(message, _this.renderLatex);
      }

      if (!((_message$html = message.html) !== null && _message$html !== void 0 && _message$html.trim())) {
        return message;
      }

      if (!message.tokens) {
        message.tokens = [];
      }

      message.html = _this.render(message.html, function (latex, displayMode) {
        var token = "=!=" + Random.id() + "=!=";
        message.tokens.push({
          token: token,
          text: _this.renderLatex(latex, displayMode)
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
      enabled: function () {
        return parenthesisSyntax;
      }
    }, {
      opener: '\\(',
      closer: '\\)',
      displayMode: false,
      enabled: function () {
        return parenthesisSyntax;
      }
    }, {
      opener: '$$',
      closer: '$$',
      displayMode: true,
      enabled: function () {
        return dollarSyntax;
      }
    }, {
      opener: '$',
      closer: '$',
      displayMode: false,
      enabled: function () {
        return dollarSyntax;
      }
    }];
  }

  var _proto2 = Katex.prototype;

  _proto2.findOpeningDelimiter = function () {
    function findOpeningDelimiter(str, start) {
      var matches = this.delimitersMap.filter(function (options) {
        return options.enabled();
      }).map(function (options) {
        return {
          options: options,
          pos: str.indexOf(options.opener, start)
        };
      });
      var positions = matches.filter(function (_ref3) {
        var pos = _ref3.pos;
        return pos >= 0;
      }).map(function (_ref4) {
        var pos = _ref4.pos;
        return pos;
      }); // No opening delimiters were found

      if (positions.length === 0) {
        return null;
      } // Take the first delimiter found


      var minPos = Math.min.apply(Math, _toConsumableArray(positions));
      var matchIndex = matches.findIndex(function (_ref5) {
        var pos = _ref5.pos;
        return pos === minPos;
      });
      var match = matches[matchIndex];
      return match;
    }

    return findOpeningDelimiter;
  }();

  _proto2.getLatexBoundaries = function () {
    function getLatexBoundaries(str, _ref6) {
      var closer = _ref6.options.closer,
          pos = _ref6.pos;
      var closerIndex = str.substr(pos + closer.length).indexOf(closer);

      if (closerIndex < 0) {
        return null;
      }

      var inner = new Boundary();
      var outer = new Boundary();
      inner.start = pos + closer.length;
      inner.end = inner.start + closerIndex;
      outer.start = pos;
      outer.end = inner.end + closer.length;
      return {
        outer: outer,
        inner: inner
      };
    }

    return getLatexBoundaries;
  }() // Searches for the first latex block in the given string
  ;

  _proto2.findLatex = function () {
    function findLatex(str) {
      var start = 0;
      var openingDelimiterMatch;

      while ((openingDelimiterMatch = this.findOpeningDelimiter(str, start++)) != null) {
        var match = this.getLatexBoundaries(str, openingDelimiterMatch);

        if (match && match.inner.extract(str).trim().length) {
          match.options = openingDelimiterMatch.options;
          return match;
        }
      }

      return null;
    }

    return findLatex;
  }() // Breaks a message to what comes before, after and to the content of a
  // matched latex block
  ;

  _proto2.extractLatex = function () {
    function extractLatex(str, match) {
      var before = str.substr(0, match.outer.start);
      var after = str.substr(match.outer.end);
      var latex = match.inner.extract(str);
      latex = unescapeHTML(latex);
      return {
        before: before,
        latex: latex,
        after: after
      };
    }

    return extractLatex;
  }() // Takes a latex math string and the desired display mode and renders it
  // to HTML using the KaTeX library
  ;

  // Takes a string and renders all latex blocks inside it
  _proto2.render = function () {
    function render(str, renderFunction) {
      var result = '';

      while (this.findLatex(str) != null) {
        // Find the first latex block in the string
        var match = this.findLatex(str);
        var parts = this.extractLatex(str, match); // Add to the reuslt what comes before the latex block as well as
        // the rendered latex content

        var rendered = renderFunction(parts.latex, match.options.displayMode);
        result += parts.before + rendered; // Set what comes after the latex block to be examined next

        str = parts.after;
      }

      result += str;
      return result;
    }

    return render;
  }();

  return Katex;
}();

var createKatexMessageRendering = function (options) {
  var instance = new Katex(katex, options);
  return function (message) {
    return instance.renderMessage(message);
  };
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/app/katex/client/d9d6a7a22ea99f31f2d32940306c52b1f6e7fbc5.map
