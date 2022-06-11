function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/UserAutoComplete/UserAutoComplete.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["value"];

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
let AutoComplete, Option, Box, Chip;
module.link("@rocket.chat/fuselage", {
  AutoComplete(v) {
    AutoComplete = v;
  },

  Option(v) {
    Option = v;
  },

  Box(v) {
    Box = v;
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
let React, memo, useMemo, useState;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  },

  useMemo(v) {
    useMemo = v;
  },

  useState(v) {
    useState = v;
  }

}, 2);
let useEndpointData;
module.link("../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 3);
let UserAvatar;
module.link("../avatar/UserAvatar", {
  default(v) {
    UserAvatar = v;
  }

}, 4);
let Avatar;
module.link("./Avatar", {
  default(v) {
    Avatar = v;
  }

}, 5);

const query = function () {
  let term = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  let conditions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return {
    selector: JSON.stringify({
      term,
      conditions
    })
  };
};

const UserAutoComplete = props => {
  const {
    conditions = {}
  } = props;
  const [filter, setFilter] = useState('');
  const debouncedFilter = useDebouncedValue(filter, 1000);
  const {
    value: data
  } = useEndpointData('users.autocomplete', // eslint-disable-next-line react-hooks/exhaustive-deps
  useMemo(() => query(debouncedFilter, conditions), [filter]));
  const options = useMemo(() => data && data.items.map(user => ({
    value: user.username,
    label: user.name
  })) || [], [data]);
  return /*#__PURE__*/React.createElement(AutoComplete, _extends({}, props, {
    filter: filter,
    setFilter: setFilter,
    renderSelected: _ref => {
      let {
        value,
        label
      } = _ref;

      if (!value) {
        return '';
      }

      return /*#__PURE__*/React.createElement(Chip, {
        height: "x20",
        value: value,
        onClick: () => props.onChange(),
        mie: "x4"
      }, /*#__PURE__*/React.createElement(UserAvatar, {
        size: "x20",
        username: value
      }), /*#__PURE__*/React.createElement(Box, {
        verticalAlign: "middle",
        is: "span",
        margin: "none",
        mi: "x4"
      }, label));
    },
    renderItem: _ref2 => {
      let {
        value
      } = _ref2,
          props = _objectWithoutProperties(_ref2, _excluded);

      return /*#__PURE__*/React.createElement(Option, _extends({
        key: value
      }, props, {
        avatar: /*#__PURE__*/React.createElement(Avatar, {
          value: value
        })
      }));
    },
    options: options
  }));
};

module.exportDefault( /*#__PURE__*/memo(UserAutoComplete));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/UserAutoComplete/21e5c6346d6f3c35fd9e931f879dc5ef8d4929dd.map
