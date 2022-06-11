function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/CreateTeamModal/UsersInput.tsx                                                                   //
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
var AutoComplete, Box, Option, Options, Chip;
module.link("@rocket.chat/fuselage", {
  AutoComplete: function (v) {
    AutoComplete = v;
  },
  Box: function (v) {
    Box = v;
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
var UserAvatar;
module.link("../../../components/avatar/UserAvatar", {
  "default": function (v) {
    UserAvatar = v;
  }
}, 3);
var useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 4);

var useUsersAutoComplete = function (term) {
  var params = useMemo(function () {
    return {
      selector: JSON.stringify({
        term: term
      })
    };
  }, [term]);

  var _useEndpointData = useEndpointData('users.autocomplete', params),
      data = _useEndpointData.value;

  return useMemo(function () {
    if (!data) {
      return [[], {}];
    }

    var options = data.items.map(function (user) {
      var _user$name, _user$_id;

      return {
        label: (_user$name = user.name) !== null && _user$name !== void 0 ? _user$name : '',
        value: (_user$_id = user._id) !== null && _user$_id !== void 0 ? _user$_id : ''
      };
    }) || [];
    var labelData = Object.fromEntries(data.items.map(function (user) {
      return [user._id, user.username];
    }) || []);
    return [options, labelData];
  }, [data]);
};

var UsersInput = function (_ref) {
  var onChange = _ref.onChange,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      filter = _useState2[0],
      setFilter = _useState2[1];

  var _useUsersAutoComplete = useUsersAutoComplete(useDebouncedValue(filter, 1000)),
      _useUsersAutoComplete2 = _slicedToArray(_useUsersAutoComplete, 2),
      options = _useUsersAutoComplete2[0],
      labelData = _useUsersAutoComplete2[1];

  var onClickSelected = useCallback(function (e) {
    e.stopPropagation();
    e.preventDefault();
    onChange(e.currentTarget.value, 'remove');
  }, [onChange]);
  var renderSelected = useCallback(function (_ref2) {
    var selected = _ref2.value;
    return /*#__PURE__*/React.createElement(React.Fragment, null, selected === null || selected === void 0 ? void 0 : selected.map(function (value) {
      return /*#__PURE__*/React.createElement(Chip, _extends({
        key: value
      }, props, {
        height: "x20",
        value: value,
        onClick: onClickSelected,
        mie: "x4"
      }), /*#__PURE__*/React.createElement(UserAvatar, {
        size: "x20",
        username: labelData[value]
      }), /*#__PURE__*/React.createElement(Box, {
        is: "span",
        margin: "none",
        mis: "x4"
      }, labelData[value]));
    }));
  }, [onClickSelected, props, labelData]);
  var renderItem = useCallback(function (_ref3) {
    var value = _ref3.value,
        props = _objectWithoutProperties(_ref3, _excluded2);

    return /*#__PURE__*/React.createElement(Option, _extends({
      key: value
    }, props, {
      avatar: /*#__PURE__*/React.createElement(UserAvatar, {
        size: Options.AvatarSize,
        username: labelData[value]
      })
    }));
  }, [labelData]);
  return /*#__PURE__*/React.createElement(AutoComplete, _extends({}, props, {
    filter: filter,
    options: options,
    renderSelected: renderSelected,
    renderItem: renderItem,
    setFilter: setFilter,
    onChange: onChange
  }));
};

module.exportDefault( /*#__PURE__*/memo(UsersInput));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/CreateTeamModal/ebe1b0142a932569ee2b741b2baf6f1de84df97e.map
