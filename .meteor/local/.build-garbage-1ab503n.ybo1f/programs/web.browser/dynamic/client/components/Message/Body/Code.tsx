function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Body/Code.tsx                                                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let React, useEffect, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useState(v) {
    useState = v;
  }

}, 0);
let hljs, register;
module.link("../../../../app/markdown/lib/hljs", {
  default(v) {
    hljs = v;
  },

  register(v) {
    register = v;
  }

}, 1);
let CodeLine;
module.link("./CodeLine", {
  default(v) {
    CodeLine = v;
  }

}, 2);

const isHljsResult = result => result === null || result === void 0 ? void 0 : result.value;

const Code = _ref => {
  let {
    value = [],
    language
  } = _ref;
  const [code, setCode] = useState(() => value.map((block, index) => {
    switch (block.type) {
      case 'CODE_LINE':
        return /*#__PURE__*/React.createElement(CodeLine, {
          key: index,
          value: block.value
        });

      default:
        return null;
    }
  }));
  useEffect(() => {
    !language || language === 'none' ? setCode(hljs.highlightAuto(value.map(line => line.value.value).join('\n'))) : register(language).then(() => {
      setCode(hljs.highlight(language, value.map(line => line.value.value).join('\n')));
    });
  }, [language, value]);
  return /*#__PURE__*/React.createElement("code", {
    className: "code-colors hljs ".concat(language)
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
//# sourceMappingURL=/dynamic/client/components/Message/Body/c3b422dc8e9f3644cfc7665a8c3e59b35de5d8a2.map
