function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/customSounds/AdminSounds.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["onChange"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 1);
let Box, Table, Icon, Button;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Table(v) {
    Table = v;
  },

  Icon(v) {
    Icon = v;
  },

  Button(v) {
    Button = v;
  }

}, 0);
let React, useMemo, useCallback;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useCallback(v) {
    useCallback = v;
  }

}, 1);
let FilterByText;
module.link("../../../components/FilterByText", {
  default(v) {
    FilterByText = v;
  }

}, 2);
let GenericTable;
module.link("../../../components/GenericTable", {
  default(v) {
    GenericTable = v;
  }

}, 3);
let useCustomSound;
module.link("../../../contexts/CustomSoundContext", {
  useCustomSound(v) {
    useCustomSound = v;
  }

}, 4);
let useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation(v) {
    useTranslation = v;
  }

}, 5);

function AdminSounds(_ref) {
  var _data$sounds, _data$total;

  let {
    data,
    sort,
    onClick,
    onHeaderClick,
    setParams,
    params
  } = _ref;
  const t = useTranslation();
  const header = useMemo(() => [/*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    key: "name",
    direction: sort[1],
    active: sort[0] === 'name',
    onClick: onHeaderClick,
    sort: "name"
  }, t('Name')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
    w: "x40",
    key: "action"
  })], [onHeaderClick, sort, t]);
  const customSound = useCustomSound();
  const handlePlay = useCallback(sound => {
    customSound.play(sound);
  }, [customSound]);

  const renderRow = sound => {
    const {
      _id,
      name
    } = sound;
    return /*#__PURE__*/React.createElement(Table.Row, {
      key: _id,
      onKeyDown: onClick(_id, sound),
      onClick: onClick(_id, sound),
      tabIndex: 0,
      role: "link",
      action: true,
      "qa-user-id": _id
    }, /*#__PURE__*/React.createElement(Table.Cell, {
      fontScale: "p2",
      color: "default"
    }, /*#__PURE__*/React.createElement(Box, {
      withTruncatedText: true
    }, name)), /*#__PURE__*/React.createElement(Table.Cell, {
      alignItems: 'end'
    }, /*#__PURE__*/React.createElement(Button, {
      ghost: true,
      small: true,
      square: true,
      "aria-label": t('Play'),
      onClick: e => e.preventDefault() & e.stopPropagation() & handlePlay(_id)
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "play",
      size: "x20"
    }))));
  };

  return /*#__PURE__*/React.createElement(GenericTable, {
    header: header,
    renderRow: renderRow,
    results: (_data$sounds = data === null || data === void 0 ? void 0 : data.sounds) !== null && _data$sounds !== void 0 ? _data$sounds : [],
    total: (_data$total = data === null || data === void 0 ? void 0 : data.total) !== null && _data$total !== void 0 ? _data$total : 0,
    setParams: setParams,
    params: params,
    renderFilter: _ref2 => {
      let {
        onChange
      } = _ref2,
          props = _objectWithoutProperties(_ref2, _excluded);

      return /*#__PURE__*/React.createElement(FilterByText, _extends({
        onChange: onChange
      }, props));
    }
  });
}

module.exportDefault(AdminSounds);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/customSounds/b5a3e51da153a3bcf3f0222c9a876ff71ebb7fe3.map
