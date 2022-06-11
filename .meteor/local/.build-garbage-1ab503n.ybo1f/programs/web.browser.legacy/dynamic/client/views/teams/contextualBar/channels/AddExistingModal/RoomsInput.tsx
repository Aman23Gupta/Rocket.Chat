function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/channels/AddExistingModal/RoomsInput.tsx                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["onChange"],
    _excluded2 = ["value"];

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 1);

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 2);
var AutoComplete, Box, Icon, Option, Options, Chip;
module.link("@rocket.chat/fuselage", {
  AutoComplete: function (v) {
    AutoComplete = v;
  },
  Box: function (v) {
    Box = v;
  },
  Icon: function (v) {
    Icon = v;
  },
  Option: function (v) {
    Option = v;
  },
  Options: function (v) {
    Options = v;
  },
  Chip: function (v) {
    Chip = v;
  }
}, 0);
var useDebouncedValue;
module.link("@rocket.chat/fuselage-hooks", {
  useDebouncedValue: function (v) {
    useDebouncedValue = v;
  }
}, 1);
var React, memo, useCallback, useMemo, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  },
  useCallback: function (v) {
    useCallback = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 2);
var roomTypes;
module.link("../../../../../../app/utils/client", {
  roomTypes: function (v) {
    roomTypes = v;
  }
}, 3);
var RoomAvatar;
module.link("../../../../../components/avatar/RoomAvatar", {
  "default": function (v) {
    RoomAvatar = v;
  }
}, 4);
var useEndpointData;
module.link("../../../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 5);

// TODO: Make AutoComplete accept arbitrary kinds of values
var useRoomsAutoComplete = function (name) {
  var params = useMemo(function () {
    return {
      name: name
    };
  }, [name]);

  var _useEndpointData = useEndpointData('rooms.autocomplete.availableForTeams', params),
      data = _useEndpointData.value;

  var options = useMemo(function () {
    if (!data) {
      return [];
    }

    return data.items.map(function (room) {
      return {
        label: roomTypes.getRoomName(room.t, room),
        value: room._id
      };
    });
  }, [data]);
  var rooms = useMemo(function () {
    var _data$items$reduce;

    return (_data$items$reduce = data === null || data === void 0 ? void 0 : data.items.reduce(function (obj, room) {
      obj[room._id] = room;
      return obj;
    }, {})) !== null && _data$items$reduce !== void 0 ? _data$items$reduce : {};
  }, [data]);
  return {
    options: options,
    rooms: rooms
  };
};

var RoomsInput = function (_ref) {
  var onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      filter = _useState2[0],
      setFilter = _useState2[1];

  var _useRoomsAutoComplete = useRoomsAutoComplete(useDebouncedValue(filter, 1000)),
      rooms = _useRoomsAutoComplete.rooms,
      options = _useRoomsAutoComplete.options;

  var onClickSelected = useCallback(function (e) {
    e.stopPropagation();
    e.preventDefault();
    onChange(rooms[e.currentTarget.value], 'remove');
  }, [onChange, rooms]);
  var handleChange = useCallback(function (value, action) {
    onChange(rooms[value], action);
  }, [onChange, rooms]);
  var renderSelected = useCallback(function (_ref2) {
    var selected = _ref2.value;
    return /*#__PURE__*/React.createElement(React.Fragment, null, selected === null || selected === void 0 ? void 0 : selected.map(function (room) {
      return /*#__PURE__*/React.createElement(Chip, {
        key: room._id,
        height: "x20",
        value: room._id,
        onClick: onClickSelected,
        mie: "x4"
      }, /*#__PURE__*/React.createElement(Icon, {
        name: room.t === 'c' ? 'hash' : 'hashtag-lock',
        size: "x12"
      }), /*#__PURE__*/React.createElement(Box, {
        is: "span",
        margin: "none",
        mis: "x4"
      }, room.name));
    }));
  }, [onClickSelected]);
  var renderItem = useCallback(function (_ref3) {
    var rid = _ref3.value,
        props = _objectWithoutProperties(_ref3, _excluded2);

    return /*#__PURE__*/React.createElement(Option, _extends({
      key: rooms[rid]._id
    }, props, {
      avatar: /*#__PURE__*/React.createElement(RoomAvatar, {
        room: rooms[rid],
        size: Options.AvatarSize
      })
    }));
  }, [rooms]);
  return /*#__PURE__*/React.createElement(AutoComplete, _extends({}, props, {
    filter: filter,
    options: options,
    renderSelected: renderSelected,
    renderItem: renderItem,
    setFilter: setFilter,
    onChange: handleChange
  }));
};

module.exportDefault( /*#__PURE__*/memo(RoomsInput));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/channels/AddExistingModal/b6c4928c8ee3bfbd387f92f50d54fd44f30055d2.map
