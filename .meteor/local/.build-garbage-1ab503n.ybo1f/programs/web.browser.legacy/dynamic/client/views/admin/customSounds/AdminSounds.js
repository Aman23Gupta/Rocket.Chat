function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/customSounds/AdminSounds.js                                                                      //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["onChange"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 1);
var Box, Table, Icon, Button;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Table: function (v) {
    Table = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  Button: function (v) {
    Button = v;
  }
}, 0);
var React, useMemo, useCallback;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useCallback: function (v) {
    useCallback = v;
  }
}, 1);
var FilterByText;
module.link("../../../components/FilterByText", {
  "default": function (v) {
    FilterByText = v;
  }
}, 2);
var GenericTable;
module.link("../../../components/GenericTable", {
  "default": function (v) {
    GenericTable = v;
  }
}, 3);
var useCustomSound;
module.link("../../../contexts/CustomSoundContext", {
  useCustomSound: function (v) {
    useCustomSound = v;
  }
}, 4);
var useTranslation;
module.link("../../../contexts/TranslationContext", {
  useTranslation: function (v) {
    useTranslation = v;
  }
}, 5);

function AdminSounds(_ref) {
  var _data$sounds, _data$total;

  var data = _ref.data,
      sort = _ref.sort,
      onClick = _ref.onClick,
      onHeaderClick = _ref.onHeaderClick,
      setParams = _ref.setParams,
      params = _ref.params;
  var t = useTranslation();
  var header = useMemo(function () {
    return [/*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      key: "name",
      direction: sort[1],
      active: sort[0] === 'name',
      onClick: onHeaderClick,
      sort: "name"
    }, t('Name')), /*#__PURE__*/React.createElement(GenericTable.HeaderCell, {
      w: "x40",
      key: "action"
    })];
  }, [onHeaderClick, sort, t]);
  var customSound = useCustomSound();
  var handlePlay = useCallback(function (sound) {
    customSound.play(sound);
  }, [customSound]);

  var renderRow = function (sound) {
    var _id = sound._id,
        name = sound.name;
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
      onClick: function (e) {
        return e.preventDefault() & e.stopPropagation() & handlePlay(_id);
      }
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
    renderFilter: function (_ref2) {
      var onChange = _ref2.onChange,
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
//# sourceMappingURL=/dynamic/client/views/admin/customSounds/8245e0feff4d443e8f5d18f7b2cd46c5cacdbd2e.map
