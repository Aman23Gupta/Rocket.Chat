function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/CreateTeamModal/UsersInput.tsx                                                                   //
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
let AutoComplete, Box, Option, Options, Chip;
module.link("@rocket.chat/fuselage", {
  AutoComplete(v) {
    AutoComplete = v;
  },

  Box(v) {
    Box = v;
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
let UserAvatar;
module.link("../../../components/avatar/UserAvatar", {
  default(v) {
    UserAvatar = v;
  }

}, 3);
let useEndpointData;
module.link("../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 4);

const useUsersAutoComplete = term => {
  const params = useMemo(() => ({
    selector: JSON.stringify({
      term
    })
  }), [term]);
  const {
    value: data
  } = useEndpointData('users.autocomplete', params);
  return useMemo(() => {
    if (!data) {
      return [[], {}];
    }

    const options = data.items.map(user => {
      var _user$name, _user$_id;

      return {
        label: (_user$name = user.name) !== null && _user$name !== void 0 ? _user$name : '',
        value: (_user$_id = user._id) !== null && _user$_id !== void 0 ? _user$_id : ''
      };
    }) || [];
    const labelData = Object.fromEntries(data.items.map(user => [user._id, user.username]) || []);
    return [options, labelData];
  }, [data]);
};

const UsersInput = _ref => {
  let {
    onChange
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const [filter, setFilter] = useState('');
  const [options, labelData] = useUsersAutoComplete(useDebouncedValue(filter, 1000));
  const onClickSelected = useCallback(e => {
    e.stopPropagation();
    e.preventDefault();
    onChange(e.currentTarget.value, 'remove');
  }, [onChange]);
  const renderSelected = useCallback(_ref2 => {
    let {
      value: selected
    } = _ref2;
    return /*#__PURE__*/React.createElement(React.Fragment, null, selected === null || selected === void 0 ? void 0 : selected.map(value => /*#__PURE__*/React.createElement(Chip, _extends({
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
    }, labelData[value]))));
  }, [onClickSelected, props, labelData]);
  const renderItem = useCallback(_ref3 => {
    let {
      value
    } = _ref3,
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
//# sourceMappingURL=/dynamic/client/views/teams/CreateTeamModal/2e28b79b56fb6c8c1bb63639031d7fca2471bc4b.map
