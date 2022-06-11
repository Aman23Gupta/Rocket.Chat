function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/rooms/FilterByTypeAndText.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["setFilter"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 1);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 2);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 3);
module.export({
  DEFAULT_TYPES: function () {
    return DEFAULT_TYPES;
  },
  roomTypeI18nMap: function () {
    return roomTypeI18nMap;
  }
});
var Box, Icon, TextInput, Field, CheckBox, Margins;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  TextInput: function (v) {
    TextInput = v;
  },
  Field: function (v) {
    Field = v;
  },
  CheckBox: function (v) {
    CheckBox = v;
  },
  Margins: function (v) {
    Margins = v;
  }
}, 0);
var useUniqueId;
module.link("@rocket.chat/fuselage-hooks", {
  useUniqueId: function (v) {
    useUniqueId = v;
  }
}, 1);
var React, useCallback, useState, useEffect;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useState: function (v) {
    useState = v;
  },
  useEffect: function (v) {
    useEffect = v;
  }
}, 2);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 3);
var DEFAULT_TYPES = ['d', 'p', 'c', 'teams'];
var roomTypeI18nMap = {
  l: 'Omnichannel',
  c: 'Channel',
  d: 'Direct',
  p: 'Group',
  discussion: 'Discussion',
  team: 'Team'
};

var FilterByTypeAndText = function (_ref) {
  var setFilter = _ref.setFilter,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      text = _useState2[0],
      setText = _useState2[1];

  var _useState3 = useState({
    d: false,
    c: false,
    p: false,
    l: false,
    discussions: false,
    teams: false
  }),
      _useState4 = _slicedToArray(_useState3, 2),
      types = _useState4[0],
      setTypes = _useState4[1];

  var t = useTranslation();
  var handleChange = useCallback(function (event) {
    return setText(event.currentTarget.value);
  }, []);
  var handleCheckBox = useCallback(function (type) {
    var _objectSpread2;

    return setTypes(_objectSpread(_objectSpread({}, types), {}, (_objectSpread2 = {}, _objectSpread2[type] = !types[type], _objectSpread2)));
  }, [types]);
  useEffect(function () {
    if (Object.values(types).filter(Boolean).length === 0) {
      return setFilter({
        text: text,
        types: DEFAULT_TYPES
      });
    }

    var _types = Object.entries(types).filter(function (_ref2) {
      var _ref3 = _slicedToArray(_ref2, 2),
          value = _ref3[1];

      return Boolean(value);
    }).map(function (_ref4) {
      var _ref5 = _slicedToArray(_ref4, 1),
          key = _ref5[0];

      return key;
    });

    setFilter({
      text: text,
      types: _types
    });
  }, [setFilter, text, types]);
  var idDirect = useUniqueId();
  var idDPublic = useUniqueId();
  var idPrivate = useUniqueId();
  var idOmnichannel = useUniqueId();
  var idDiscussions = useUniqueId();
  var idTeam = useUniqueId();
  return /*#__PURE__*/React.createElement(Box, _extends({
    mb: "x16",
    is: "form",
    onSubmit: useCallback(function (e) {
      return e.preventDefault();
    }, []),
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
    onChange: function () {
      return handleCheckBox('d');
    }
  }), /*#__PURE__*/React.createElement(Field.Label, {
    htmlFor: idDirect
  }, t('Direct'))), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(CheckBox, {
    checked: types.c,
    id: idDPublic,
    onChange: function () {
      return handleCheckBox('c');
    }
  }), /*#__PURE__*/React.createElement(Field.Label, {
    htmlFor: idDPublic
  }, t('Public'))), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(CheckBox, {
    checked: types.p,
    id: idPrivate,
    onChange: function () {
      return handleCheckBox('p');
    }
  }), /*#__PURE__*/React.createElement(Field.Label, {
    htmlFor: idPrivate
  }, t('Private'))), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(CheckBox, {
    checked: types.l,
    id: idOmnichannel,
    onChange: function () {
      return handleCheckBox('l');
    }
  }), /*#__PURE__*/React.createElement(Field.Label, {
    htmlFor: idOmnichannel
  }, t('Omnichannel'))), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(CheckBox, {
    checked: types.discussions,
    id: idDiscussions,
    onChange: function () {
      return handleCheckBox('discussions');
    }
  }), /*#__PURE__*/React.createElement(Field.Label, {
    htmlFor: idDiscussions
  }, t('Discussions'))), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(CheckBox, {
    checked: types.teams,
    id: idTeam,
    onChange: function () {
      return handleCheckBox('teams');
    }
  }), /*#__PURE__*/React.createElement(Field.Label, {
    htmlFor: idTeam
  }, t('Teams')))))));
};

module.exportDefault(FilterByTypeAndText);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/rooms/045333441de154d43d319be490ba270a017825ae.map
