function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/components/contextualBar/CannedResponse/CannedResponse.tsx                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box, Button, ButtonGroup, Tag;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Button: function (v) {
    Button = v;
  },
  ButtonGroup: function (v) {
    ButtonGroup = v;
  },
  Tag: function (v) {
    Tag = v;
  }
}, 0);
var React, memo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  }
}, 1);
var VerticalBar;
module.link("../../../../../../client/components/VerticalBar", {
  "default": function (v) {
    VerticalBar = v;
  }
}, 2);
var useTranslation;
module.link("../../../../../../client/contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var useScopeDict;
module.link("../../../hooks/useScopeDict", {
  useScopeDict: function (v) {
    useScopeDict = v;
  }
}, 4);

var CannedResponse = function (_ref) {
  var canEdit = _ref.canEdit,
      _ref$data = _ref.data,
      departmentName = _ref$data.departmentName,
      shortcut = _ref$data.shortcut,
      text = _ref$data.text,
      dataScope = _ref$data.scope,
      tags = _ref$data.tags,
      onClickBack = _ref.onClickBack,
      onClickEdit = _ref.onClickEdit,
      onClickUse = _ref.onClickUse;
  var t = useTranslation();
  var scope = useScopeDict(dataScope, departmentName);
  return /*#__PURE__*/React.createElement(VerticalBar, {
    display: "flex",
    flexDirection: "column",
    width: 'full',
    overflow: "hidden",
    zIndex: 100,
    insetBlock: 0
  }, /*#__PURE__*/React.createElement(VerticalBar.Header, null, onClickBack && /*#__PURE__*/React.createElement(VerticalBar.Action, {
    onClick: onClickBack,
    title: t('Back_to_threads'),
    name: "arrow-back"
  }), /*#__PURE__*/React.createElement(VerticalBar.Text, null, "!", shortcut)), /*#__PURE__*/React.createElement(VerticalBar.Content, null, /*#__PURE__*/React.createElement(Box, {
    pb: "24px"
  }, /*#__PURE__*/React.createElement(Box, {
    mbe: "16px"
  }, /*#__PURE__*/React.createElement(Box, {
    fontScale: "p2m",
    mbe: "8px"
  }, t('Shortcut'), ":"), /*#__PURE__*/React.createElement(Box, {
    fontScale: "c1",
    color: "info"
  }, "!", shortcut)), /*#__PURE__*/React.createElement(Box, {
    mbe: "16px"
  }, /*#__PURE__*/React.createElement(Box, {
    fontScale: "p2m",
    mbe: "8px"
  }, t('Content'), ":"), /*#__PURE__*/React.createElement(Box, {
    fontScale: "c1",
    color: "info"
  }, "\"", text, "\"")), /*#__PURE__*/React.createElement(Box, {
    mbe: "16px"
  }, /*#__PURE__*/React.createElement(Box, {
    fontScale: "p2m",
    mbe: "8px"
  }, t('Sharing'), ":"), /*#__PURE__*/React.createElement(Box, {
    fontScale: "c1",
    color: "info"
  }, scope)), /*#__PURE__*/React.createElement(Box, {
    mbe: "16px"
  }, /*#__PURE__*/React.createElement(Box, {
    fontScale: "p2m",
    mbe: "8px"
  }, t('Tags'), ":"), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row"
  }, tags && tags.length > 0 ? /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    w: "full",
    flexDirection: "row",
    mbs: "8px",
    flexWrap: "wrap"
  }, tags.map(function (tag, idx) {
    return /*#__PURE__*/React.createElement(Box, {
      key: idx,
      mie: "4px",
      mbe: "4px"
    }, /*#__PURE__*/React.createElement(Tag, null, tag));
  })) : '-')))), /*#__PURE__*/React.createElement(VerticalBar.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, {
    stretch: true
  }, canEdit && /*#__PURE__*/React.createElement(Button, {
    onClick: onClickEdit
  }, t('Edit')), /*#__PURE__*/React.createElement(Button, {
    primary: true,
    onClick: onClickUse
  }, t('Use')))));
};

module.exportDefault( /*#__PURE__*/memo(CannedResponse));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/components/contextualBar/CannedResponse/297b690e1c03356a26db1ec6125a53b08304fa02.map
