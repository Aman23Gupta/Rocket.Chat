function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/cannedResponses/components/cannedResponseForm.tsx                                             //
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
var css;
module.link("@rocket.chat/css-in-js", {
  css: function (v) {
    css = v;
  }
}, 0);
var Box, Field, TextInput;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Field: function (v) {
    Field = v;
  },
  TextInput: function (v) {
    TextInput = v;
  }
}, 1);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 2);
var AutoCompleteDepartment;
module.link("../../../../../client/components/AutoCompleteDepartment", {
  "default": function (v) {
    AutoCompleteDepartment = v;
  }
}, 3);
var Tags;
module.link("../../../../../client/components/Omnichannel/Tags", {
  "default": function (v) {
    Tags = v;
  }
}, 4);
var useTranslation;
module.link("../../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 5);
var MarkdownTextEditor;
module.link("../../components/CannedResponse/MarkdownTextEditor", {
  "default": function (v) {
    MarkdownTextEditor = v;
  }
}, 6);
var PreviewText;
module.link("../../components/CannedResponse/modals/CreateCannedResponse/PreviewText", {
  "default": function (v) {
    PreviewText = v;
  }
}, 7);
var SharingOptions;
module.link("../../components/CannedResponse/modals/CreateCannedResponse/SharingOptions", {
  "default": function (v) {
    SharingOptions = v;
  }
}, 8);

var CannedResponseForm = function (_ref) {
  var values = _ref.values,
      handlers = _ref.handlers,
      errors = _ref.errors,
      radioHandlers = _ref.radioHandlers,
      radioDescription = _ref.radioDescription,
      onPreview = _ref.onPreview,
      previewState = _ref.previewState,
      isManager = _ref.isManager,
      isMonitor = _ref.isMonitor;
  var shortcut = values.shortcut,
      text = values.text,
      scope = values.scope,
      tags = values.tags,
      departmentId = values.departmentId;
  var handleShortcut = handlers.handleShortcut,
      handleText = handlers.handleText,
      handleTags = handlers.handleTags,
      handleDepartmentId = handlers.handleDepartmentId;
  var t = useTranslation();
  var clickable = css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n\t\tcursor: pointer;\n\t"])));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field, {
    mbe: "x24"
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Shortcut')), /*#__PURE__*/React.createElement(TextInput, {
    error: errors.shortcut,
    name: 'shortcut',
    placeholder: "!" + t('shortcut_name'),
    onChange: handleShortcut,
    value: shortcut
  }), /*#__PURE__*/React.createElement(Field.Error, null, errors.shortcut)), /*#__PURE__*/React.createElement(Field, {
    mbe: "x24"
  }, /*#__PURE__*/React.createElement(Field.Label, {
    w: "full"
  }, /*#__PURE__*/React.createElement(Box, {
    w: "full",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between"
  }, t('Message'), /*#__PURE__*/React.createElement(Box, {
    className: clickable,
    color: "link",
    onClick: onPreview
  }, previewState ? t('Editor') : t('Preview')))), previewState ? /*#__PURE__*/React.createElement(PreviewText, {
    text: text
  }) : /*#__PURE__*/React.createElement(MarkdownTextEditor, {
    value: text,
    onChange: handleText
  })), /*#__PURE__*/React.createElement(Field, {
    mbe: "x24"
  }, /*#__PURE__*/React.createElement(Tags, {
    handler: handleTags,
    tags: tags
  })), (isManager || isMonitor) && /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field, {
    mbe: "x24"
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Sharing')), /*#__PURE__*/React.createElement(Field.Description, null, radioDescription), /*#__PURE__*/React.createElement(Field.Row, {
    mbs: "12px",
    justifyContent: "start"
  }, /*#__PURE__*/React.createElement(SharingOptions, {
    isMonitor: isMonitor,
    isManager: isManager,
    scope: scope,
    radioHandlers: radioHandlers
  }))), scope === 'department' && /*#__PURE__*/React.createElement(Field, {
    mbe: "x24"
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Department')), /*#__PURE__*/React.createElement(AutoCompleteDepartment, _extends({}, isMonitor && {
    onlyMyDepartments: isMonitor
  }, {
    value: departmentId,
    onChange: handleDepartmentId,
    error: errors.departmentId
  })), /*#__PURE__*/React.createElement(Field.Error, null, errors.departmentId))));
};

module.exportDefault(CannedResponseForm);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/cannedResponses/components/d1d79c813b12ac287778964d516e21a5b4fc4063.map
