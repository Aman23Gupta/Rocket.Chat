function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/components/CannedResponse/MarkdownTextEditor/InsertPlaceholderDropdown.tsx                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _templateObject;

let _taggedTemplateLiteral;

module.link("@babel/runtime/helpers/taggedTemplateLiteral", {
  default(v) {
    _taggedTemplateLiteral = v;
  }

}, 0);
let css;
module.link("@rocket.chat/css-in-js", {
  css(v) {
    css = v;
  }

}, 0);
let Box, Divider;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Divider(v) {
    Divider = v;
  }

}, 1);
let React, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  }

}, 2);
let useTranslation;
module.link("../../../../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);

const InsertPlaceholderDropdown = _ref => {
  let {
    onChange,
    textAreaRef,
    setVisible
  } = _ref;
  const t = useTranslation();
  const clickable = css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t\tcursor: pointer;\n\t"])));

  const setPlaceholder = name => {
    if (textAreaRef !== null && textAreaRef !== void 0 && textAreaRef.current) {
      const text = textAreaRef.current.value;
      const startPos = textAreaRef.current.selectionStart;
      const placeholder = "{{".concat(name, "}}");
      textAreaRef.current.value = text.slice(0, startPos) + placeholder + text.slice(startPos);
      textAreaRef.current.focus();
      textAreaRef.current.setSelectionRange(startPos + placeholder.length, startPos + placeholder.length);
      setVisible(false);
      onChange(textAreaRef.current.value);
    }
  };

  return /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Box, {
    textTransform: "uppercase",
    fontScale: "c1",
    fontSize: "10px"
  }, t('Contact')), /*#__PURE__*/React.createElement(Box, {
    is: "ul"
  }, /*#__PURE__*/React.createElement(Box, {
    className: clickable,
    is: "li",
    onClick: () => setPlaceholder('contact.name')
  }, /*#__PURE__*/React.createElement(Box, {
    mb: "4px",
    style: {
      width: '100%'
    },
    fontScale: "p2"
  }, t('Name'))), /*#__PURE__*/React.createElement(Box, {
    className: clickable,
    is: "li",
    onClick: () => setPlaceholder('contact.email')
  }, /*#__PURE__*/React.createElement(Box, {
    mb: "4px",
    style: {
      width: '100%'
    },
    fontScale: "p2"
  }, t('Email'))), /*#__PURE__*/React.createElement(Box, {
    className: clickable,
    is: "li",
    onClick: () => setPlaceholder('contact.phone')
  }, /*#__PURE__*/React.createElement(Box, {
    mb: "4px",
    style: {
      width: '100%'
    },
    fontScale: "p2"
  }, t('Phone')))), /*#__PURE__*/React.createElement(Divider, null), /*#__PURE__*/React.createElement(Box, {
    textTransform: "uppercase",
    fontScale: "c1",
    fontSize: "10px"
  }, t('Agent')), /*#__PURE__*/React.createElement(Box, {
    is: "ul"
  }, /*#__PURE__*/React.createElement(Box, {
    className: clickable,
    is: "li",
    onClick: () => setPlaceholder('agent.name')
  }, /*#__PURE__*/React.createElement(Box, {
    mb: "4px",
    style: {
      width: '100%'
    },
    fontScale: "p2"
  }, t('Name'))), /*#__PURE__*/React.createElement(Box, {
    className: clickable,
    is: "li",
    onClick: () => setPlaceholder('agent.email')
  }, /*#__PURE__*/React.createElement(Box, {
    mb: "4px",
    style: {
      width: '100%'
    },
    fontScale: "p2"
  }, t('Email')))));
};

module.exportDefault( /*#__PURE__*/memo(InsertPlaceholderDropdown));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/components/CannedResponse/MarkdownTextEditor/be53f360e00184c8e596024f39e919d9d34c2170.map
