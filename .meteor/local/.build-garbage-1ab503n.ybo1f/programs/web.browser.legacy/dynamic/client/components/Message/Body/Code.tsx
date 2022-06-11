function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Body/Code.tsx                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 0);
var React, useEffect, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 0);
var hljs, register;
module.link("../../../../app/markdown/lib/hljs", {
  "default": function (v) {
    hljs = v;
  },
  register: function (v) {
    register = v;
  }
}, 1);
var CodeLine;
module.link("./CodeLine", {
  "default": function (v) {
    CodeLine = v;
  }
}, 2);

var isHljsResult = function (result) {
  return result === null || result === void 0 ? void 0 : result.value;
};

var Code = function (_ref) {
  var _ref$value = _ref.value,
      value = _ref$value === void 0 ? [] : _ref$value,
      language = _ref.language;

  var _useState = useState(function () {
    return value.map(function (block, index) {
      switch (block.type) {
        case 'CODE_LINE':
          return /*#__PURE__*/React.createElement(CodeLine, {
            key: index,
            value: block.value
          });

        default:
          return null;
      }
    });
  }),
      _useState2 = _slicedToArray(_useState, 2),
      code = _useState2[0],
      setCode = _useState2[1];

  useEffect(function () {
    !language || language === 'none' ? setCode(hljs.highlightAuto(value.map(function (line) {
      return line.value.value;
    }).join('\n'))) : register(language).then(function () {
      setCode(hljs.highlight(language, value.map(function (line) {
        return line.value.value;
      }).join('\n')));
    });
  }, [language, value]);
  return /*#__PURE__*/React.createElement("code", {
    className: "code-colors hljs " + language
  }, /*#__PURE__*/React.createElement("span", {
    className: "copyonly"
  }, "\\`\\`\\`", /*#__PURE__*/React.createElement("br", null)), isHljsResult(code) ? /*#__PURE__*/React.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: code.code || code.value
    }
  }) : code, /*#__PURE__*/React.createElement("span", {
    className: "copyonly"
  }, /*#__PURE__*/React.createElement("br", null), "\\`\\`\\`"));
};

module.exportDefault(Code);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Body/379b4795063b8e9dae7c6128ac204fbbf497d5cd.map
