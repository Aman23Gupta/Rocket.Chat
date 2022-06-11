function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/components/contextualBar/CannedResponse/Item.tsx                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _templateObject;

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
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
var Box, Button, Icon, Tag;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Button: function (v) {
    Button = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  Tag: function (v) {
    Tag = v;
  }
}, 1);
var React, memo, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  },
  useState: function (v) {
    useState = v;
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

var Item = function (_ref) {
  var data = _ref.data,
      onClickItem = _ref.onClickItem,
      onClickUse = _ref.onClickUse;
  var t = useTranslation();
  var scope = useScopeDict(data.scope, data.departmentName);
  var clickable = css(_templateObject || (_templateObject = _taggedTemplateLiteralLoose(["\n\t\tcursor: pointer;\n\t"])));

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      visibility = _useState2[0],
      setVisibility = _useState2[1];

  return /*#__PURE__*/React.createElement(Box, {
    pbs: 16,
    pbe: 12,
    pi: 24,
    borderBlockEndWidth: "2px",
    borderBlockEndColor: "neutral-200",
    borderBlockEndStyle: "solid",
    onClick: onClickItem,
    className: clickable,
    onMouseEnter: function () {
      return setVisibility(true);
    },
    onMouseLeave: function () {
      return setVisibility(false);
    }
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
    onClick: function (e) {
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
  }, data.tags.map(function (tag, idx) {
    return /*#__PURE__*/React.createElement(Box, {
      key: idx,
      mie: "4px",
      mbe: "4px"
    }, /*#__PURE__*/React.createElement(Tag, null, tag));
  })));
};

module.exportDefault( /*#__PURE__*/memo(Item));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/components/contextualBar/CannedResponse/d743119ea4750d6cb26b363f6164986959c0de4f.map
