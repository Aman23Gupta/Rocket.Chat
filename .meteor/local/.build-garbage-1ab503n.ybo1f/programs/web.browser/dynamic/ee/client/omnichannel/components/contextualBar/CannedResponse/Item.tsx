function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/components/contextualBar/CannedResponse/Item.tsx                                              //
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
let Box, Button, Icon, Tag;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Button(v) {
    Button = v;
  },

  Icon(v) {
    Icon = v;
  },

  Tag(v) {
    Tag = v;
  }

}, 1);
let React, memo, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  },

  useState(v) {
    useState = v;
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

const Item = _ref => {
  let {
    data,
    onClickItem,
    onClickUse
  } = _ref;
  const t = useTranslation();
  const scope = useScopeDict(data.scope, data.departmentName);
  const clickable = css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t\tcursor: pointer;\n\t"])));
  const [visibility, setVisibility] = useState(false);
  return /*#__PURE__*/React.createElement(Box, {
    pbs: 16,
    pbe: 12,
    pi: 24,
    borderBlockEndWidth: "2px",
    borderBlockEndColor: "neutral-200",
    borderBlockEndStyle: "solid",
    onClick: onClickItem,
    className: clickable,
    onMouseEnter: () => setVisibility(true),
    onMouseLeave: () => setVisibility(false)
  }, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }, /*#__PURE__*/React.createElement(Box, {
    w: "full",
    minWidth: 0
  }, /*#__PURE__*/React.createElement(Box, {
    fontScale: "p2m",
    withTruncatedText: true
  }, "!", data.shortcut), /*#__PURE__*/React.createElement(Box, {
    fontScale: "c1",
    color: "info",
    withTruncatedText: true
  }, scope)), /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  }, /*#__PURE__*/React.createElement(Button, {
    display: visibility ? 'block' : 'none',
    small: true,
    onClick: e => {
      onClickUse(e, data.text);
    }
  }, t('Use')), /*#__PURE__*/React.createElement(Icon, {
    name: "chevron-left",
    size: 24,
    color: "neutral-700"
  }))), /*#__PURE__*/React.createElement(Box, {
    fontScale: "p2",
    mbs: "8px",
    color: "info",
    withTruncatedText: true
  }, "\"", data.text, "\""), data.tags && data.tags.length > 0 && /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    w: "full",
    flexDirection: "row",
    mbs: "8px",
    flexWrap: "wrap"
  }, data.tags.map((tag, idx) => /*#__PURE__*/React.createElement(Box, {
    key: idx,
    mie: "4px",
    mbe: "4px"
  }, /*#__PURE__*/React.createElement(Tag, null, tag)))));
};

module.exportDefault( /*#__PURE__*/memo(Item));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/components/contextualBar/CannedResponse/3743b5cc23597e016083a52917671b28133113fa.map
