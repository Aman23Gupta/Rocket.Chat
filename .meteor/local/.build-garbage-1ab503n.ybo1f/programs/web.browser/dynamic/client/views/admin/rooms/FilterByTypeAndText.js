function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/rooms/FilterByTypeAndText.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["setFilter"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 1);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 2);
module.export({
  DEFAULT_TYPES: () => DEFAULT_TYPES,
  roomTypeI18nMap: () => roomTypeI18nMap
});
let Box, Icon, TextInput, Field, CheckBox, Margins;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Icon(v) {
    Icon = v;
  },

  TextInput(v) {
    TextInput = v;
  },

  Field(v) {
    Field = v;
  },

  CheckBox(v) {
    CheckBox = v;
  },

  Margins(v) {
    Margins = v;
  }

}, 0);
let useUniqueId;
module.link("@rocket.chat/fuselage-hooks", {
  useUniqueId(v) {
    useUniqueId = v;
  }

}, 1);
let React, useCallback, useState, useEffect;
module.link("react", {
  default(v) {
    React = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useState(v) {
    useState = v;
  },

  useEffect(v) {
    useEffect = v;
  }

}, 2);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 3);
const DEFAULT_TYPES = ['d', 'p', 'c', 'teams'];
const roomTypeI18nMap = {
  l: 'Omnichannel',
  c: 'Channel',
  d: 'Direct',
  p: 'Group',
  discussion: 'Discussion',
  team: 'Team'
};

const FilterByTypeAndText = _ref => {
  let {
    setFilter
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const [text, setText] = useState('');
  const [types, setTypes] = useState({
    d: false,
    c: false,
    p: false,
    l: false,
    discussions: false,
    teams: false
  });
  const t = useTranslation();
  const handleChange = useCallback(event => setText(event.currentTarget.value), []);
  const handleCheckBox = useCallback(type => setTypes(_objectSpread(_objectSpread({}, types), {}, {
    [type]: !types[type]
  })), [types]);
  useEffect(() => {
    if (Object.values(types).filter(Boolean).length === 0) {
      return setFilter({
        text,
        types: DEFAULT_TYPES
      });
    }

    const _types = Object.entries(types).filter(_ref2 => {
      let [, value] = _ref2;
      return Boolean(value);
    }).map(_ref3 => {
      let [key] = _ref3;
      return key;
    });

    setFilter({
      text,
      types: _types
    });
  }, [setFilter, text, types]);
  const idDirect = useUniqueId();
  const idDPublic = useUniqueId();
  const idPrivate = useUniqueId();
  const idOmnichannel = useUniqueId();
  const idDiscussions = useUniqueId();
  const idTeam = useUniqueId();
  return /*#__PURE__*/React.createElement(Box, _extends({
    mb: "x16",
    is: "form",
    onSubmit: useCallback(e => e.preventDefault(), []),
    display: "flex",
    flexDirection: "column"
  }, props), /*#__PURE__*/React.createElement(TextInput, {
    flexShrink: 0,
    placeholder: t('Search_Rooms'),
    addon: /*#__PURE__*/React.createElement(Icon, {
      name: "magnifier",
      size: "x20"
    }),
    onChange: handleChange,
    value: text
  }), /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Box, {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    mbs: "x8",
    mi: "neg-x8"
  }, /*#__PURE__*/React.createElement(Margins, {
    inline: "x8"
  }, /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(CheckBox, {
    checked: types.d,
    id: idDirect,
    onChange: () => handleCheckBox('d')
  }), /*#__PURE__*/React.createElement(Field.Label, {
    htmlFor: idDirect
  }, t('Direct'))), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(CheckBox, {
    checked: types.c,
    id: idDPublic,
    onChange: () => handleCheckBox('c')
  }), /*#__PURE__*/React.createElement(Field.Label, {
    htmlFor: idDPublic
  }, t('Public'))), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(CheckBox, {
    checked: types.p,
    id: idPrivate,
    onChange: () => handleCheckBox('p')
  }), /*#__PURE__*/React.createElement(Field.Label, {
    htmlFor: idPrivate
  }, t('Private'))), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(CheckBox, {
    checked: types.l,
    id: idOmnichannel,
    onChange: () => handleCheckBox('l')
  }), /*#__PURE__*/React.createElement(Field.Label, {
    htmlFor: idOmnichannel
  }, t('Omnichannel'))), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(CheckBox, {
    checked: types.discussions,
    id: idDiscussions,
    onChange: () => handleCheckBox('discussions')
  }), /*#__PURE__*/React.createElement(Field.Label, {
    htmlFor: idDiscussions
  }, t('Discussions'))), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(CheckBox, {
    checked: types.teams,
    id: idTeam,
    onChange: () => handleCheckBox('teams')
  }), /*#__PURE__*/React.createElement(Field.Label, {
    htmlFor: idTeam
  }, t('Teams')))))));
};

module.exportDefault(FilterByTypeAndText);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/rooms/9301f295694a5137545def048a68a4fd2481b1ad.map
