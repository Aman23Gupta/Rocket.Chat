function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/components/CannedResponse/MarkdownTextEditor/InsertPlaceholderDropdown.tsx                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _templateObject;

var _taggedTemplateLiteralLoose;

module.link("@babel/runtime/helpers/taggedTemplateLiteralLoose", {
  default: function (v) {
    _taggedTemplateLiteralLoose = v;
  }
}, 0);
var css;
module.link("@rocket.chat/css-in-js", {
  css: function (v) {
    css = v;
  }
}, 0);
var Box, Divider;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Divider: function (v) {
    Divider = v;
  }
}, 1);
var React, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 2);
var useTranslation;
module.link("../../../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);

var InsertPlaceholderDropdown = function (_ref) {
  var onChange = _ref.onChange,
      textAreaRef = _ref.textAreaRef,
      setVisible = _ref.setVisible;
  var t = useTranslation();
  var clickable = css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n\t\tcursor: pointer;\n\t"])));

  var setPlaceholder = function (name) {
    if (textAreaRef !== null && textAreaRef !== void 0 && textAreaRef.current) {
      var text = textAreaRef.current.value;
      var startPos = textAreaRef.current.selectionStart;
      var placeholder = "{{" + name + "}}";
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
    onClick: function () {
      return setPlaceholder('contact.name');
    }
  }, /*#__PURE__*/React.createElement(Box, {
    mb: "4px",
    style: {
      width: '100%'
    },
    fontScale: "p2"
  }, t('Name'))), /*#__PURE__*/React.createElement(Box, {
    className: clickable,
    is: "li",
    onClick: function () {
      return setPlaceholder('contact.email');
    }
  }, /*#__PURE__*/React.createElement(Box, {
    mb: "4px",
    style: {
      width: '100%'
    },
    fontScale: "p2"
  }, t('Email'))), /*#__PURE__*/React.createElement(Box, {
    className: clickable,
    is: "li",
    onClick: function () {
      return setPlaceholder('contact.phone');
    }
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
    onClick: function () {
      return setPlaceholder('agent.name');
    }
  }, /*#__PURE__*/React.createElement(Box, {
    mb: "4px",
    style: {
      width: '100%'
    },
    fontScale: "p2"
  }, t('Name'))), /*#__PURE__*/React.createElement(Box, {
    className: clickable,
    is: "li",
    onClick: function () {
      return setPlaceholder('agent.email');
    }
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
//# sourceMappingURL=/dynamic/ee/client/omnichannel/components/CannedResponse/MarkdownTextEditor/6419d0c556045afdf83083b348b414ac1fc9f13e.map
