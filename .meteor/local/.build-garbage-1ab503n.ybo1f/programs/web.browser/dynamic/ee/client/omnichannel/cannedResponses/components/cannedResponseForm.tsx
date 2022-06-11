function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/cannedResponses/components/cannedResponseForm.tsx                                             //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _templateObject;

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _taggedTemplateLiteral;

module.link("@babel/runtime/helpers/taggedTemplateLiteral", {
  default(v) {
    _taggedTemplateLiteral = v;
  }

}, 1);
let css;
module.link("@rocket.chat/css-in-js", {
  css(v) {
    css = v;
  }

}, 0);
let Box, Field, TextInput;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Field(v) {
    Field = v;
  },

  TextInput(v) {
    TextInput = v;
  }

}, 1);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 2);
let AutoCompleteDepartment;
module.link("../../../../../client/components/AutoCompleteDepartment", {
  default(v) {
    AutoCompleteDepartment = v;
  }

}, 3);
let Tags;
module.link("../../../../../client/components/Omnichannel/Tags", {
  default(v) {
    Tags = v;
  }

}, 4);
let useTranslation;
module.link("../../../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 5);
let MarkdownTextEditor;
module.link("../../components/CannedResponse/MarkdownTextEditor", {
  default(v) {
    MarkdownTextEditor = v;
  }

}, 6);
let PreviewText;
module.link("../../components/CannedResponse/modals/CreateCannedResponse/PreviewText", {
  default(v) {
    PreviewText = v;
  }

}, 7);
let SharingOptions;
module.link("../../components/CannedResponse/modals/CreateCannedResponse/SharingOptions", {
  default(v) {
    SharingOptions = v;
  }

}, 8);

const CannedResponseForm = _ref => {
  let {
    values,
    handlers,
    errors,
    radioHandlers,
    radioDescription,
    onPreview,
    previewState,
    isManager,
    isMonitor
  } = _ref;
  const {
    shortcut,
    text,
    scope,
    tags,
    departmentId
  } = values;
  const {
    handleShortcut,
    handleText,
    handleTags,
    handleDepartmentId
  } = handlers;
  const t = useTranslation();
  const clickable = css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t\tcursor: pointer;\n\t"])));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Field, {
    mbe: "x24"
  }, /*#__PURE__*/React.createElement(Field.Label, null, t('Shortcut')), /*#__PURE__*/React.createElement(TextInput, {
    error: errors.shortcut,
    name: 'shortcut',
    placeholder: "!".concat(t('shortcut_name')),
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
//# sourceMappingURL=/dynamic/ee/client/omnichannel/cannedResponses/components/f7e792479fc791b6c1e2b41972350668e938dfcd.map
