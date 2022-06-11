function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/components/contextualBar/CannedResponse/CannedResponse.tsx                                    //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Button, ButtonGroup, Tag;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Button(v) {
    Button = v;
  },

  ButtonGroup(v) {
    ButtonGroup = v;
  },

  Tag(v) {
    Tag = v;
  }

}, 0);
let React, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  }

}, 1);
let VerticalBar;
module.link("../../../../../../client/components/VerticalBar", {
  default(v) {
    VerticalBar = v;
  }

}, 2);
let useTranslation;
module.link("../../../../../../client/contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
let useScopeDict;
module.link("../../../hooks/useScopeDict", {
  useScopeDict(v) {
    useScopeDict = v;
  }

}, 4);

const CannedResponse = _ref => {
  let {
    canEdit,
    data: {
      departmentName,
      shortcut,
      text,
      scope: dataScope,
      tags
    },
    onClickBack,
    onClickEdit,
    onClickUse
  } = _ref;
  const t = useTranslation();
  const scope = useScopeDict(dataScope, departmentName);
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
  }, tags.map((tag, idx) => /*#__PURE__*/React.createElement(Box, {
    key: idx,
    mie: "4px",
    mbe: "4px"
  }, /*#__PURE__*/React.createElement(Tag, null, tag)))) : '-')))), /*#__PURE__*/React.createElement(VerticalBar.Footer, null, /*#__PURE__*/React.createElement(ButtonGroup, {
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
//# sourceMappingURL=/dynamic/ee/client/omnichannel/components/contextualBar/CannedResponse/130100473214aa0122c80e9d745fc2ff7508a1e3.map
