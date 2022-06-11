function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/channels/AddExistingModal/RoomsInput.tsx                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["onChange"],
      _excluded2 = ["value"];

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
let AutoComplete, Box, Icon, Option, Options, Chip;
module.link("@rocket.chat/fuselage", {
  AutoComplete(v) {
    AutoComplete = v;
  },

  Box(v) {
    Box = v;
  },

  Icon(v) {
    Icon = v;
  },

  Option(v) {
    Option = v;
  },

  Options(v) {
    Options = v;
  },

  Chip(v) {
    Chip = v;
  }

}, 0);
let useDebouncedValue;
module.link("@rocket.chat/fuselage-hooks", {
  useDebouncedValue(v) {
    useDebouncedValue = v;
  }

}, 1);
let React, memo, useCallback, useMemo, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  },

  useCallback(v) {
    useCallback = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useState(v) {
    useState = v;
  }

}, 2);
let roomTypes;
module.link("../../../../../../app/utils/client", {
  roomTypes(v) {
    roomTypes = v;
  }

}, 3);
let RoomAvatar;
module.link("../../../../../components/avatar/RoomAvatar", {
  default(v) {
    RoomAvatar = v;
  }

}, 4);
let useEndpointData;
module.link("../../../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 5);

// TODO: Make AutoComplete accept arbitrary kinds of values
const useRoomsAutoComplete = name => {
  const params = useMemo(() => ({
    name
  }), [name]);
  const {
    value: data
  } = useEndpointData('rooms.autocomplete.availableForTeams', params);
  const options = useMemo(() => {
    if (!data) {
      return [];
    }

    return data.items.map(room => ({
      label: roomTypes.getRoomName(room.t, room),
      value: room._id
    }));
  }, [data]);
  const rooms = useMemo(() => {
    var _data$items$reduce;

    return (_data$items$reduce = data === null || data === void 0 ? void 0 : data.items.reduce((obj, room) => {
      obj[room._id] = room;
      return obj;
    }, {})) !== null && _data$items$reduce !== void 0 ? _data$items$reduce : {};
  }, [data]);
  return {
    options,
    rooms
  };
};

const RoomsInput = _ref => {
  let {
    onChange
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const [filter, setFilter] = useState('');
  const {
    rooms,
    options
  } = useRoomsAutoComplete(useDebouncedValue(filter, 1000));
  const onClickSelected = useCallback(e => {
    e.stopPropagation();
    e.preventDefault();
    onChange(rooms[e.currentTarget.value], 'remove');
  }, [onChange, rooms]);
  const handleChange = useCallback((value, action) => {
    onChange(rooms[value], action);
  }, [onChange, rooms]);
  const renderSelected = useCallback(_ref2 => {
    let {
      value: selected
    } = _ref2;
    return /*#__PURE__*/React.createElement(React.Fragment, null, selected === null || selected === void 0 ? void 0 : selected.map(room => /*#__PURE__*/React.createElement(Chip, {
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
    }, room.name))));
  }, [onClickSelected]);
  const renderItem = useCallback(_ref3 => {
    let {
      value: rid
    } = _ref3,
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
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/channels/AddExistingModal/9c44a2ddef69e6041ce13dba4a39e3fb5bb55163.map
