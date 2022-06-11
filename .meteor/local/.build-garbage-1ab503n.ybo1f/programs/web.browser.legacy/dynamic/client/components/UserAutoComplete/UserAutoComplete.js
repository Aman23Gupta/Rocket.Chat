function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/UserAutoComplete/UserAutoComplete.js                                                              //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["value"];

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

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 2);
var AutoComplete, Option, Box, Chip;
module.link("@rocket.chat/fuselage", {
  AutoComplete: function (v) {
    AutoComplete = v;
  },
  Option: function (v) {
    Option = v;
  },
  Box: function (v) {
    Box = v;
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
var React, memo, useMemo, useState;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  memo: function (v) {
    memo = v;
  },
  useMemo: function (v) {
    useMemo = v;
  },
  useState: function (v) {
    useState = v;
  }
}, 2);
var useEndpointData;
module.link("../../hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 3);
var UserAvatar;
module.link("../avatar/UserAvatar", {
  "default": function (v) {
    UserAvatar = v;
  }
}, 4);
var Avatar;
module.link("./Avatar", {
  "default": function (v) {
    Avatar = v;
  }
}, 5);

var query = function () {
  var term = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var conditions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  return {
    selector: JSON.stringify({
      term: term,
      conditions: conditions
    })
  };
};

var UserAutoComplete = function (props) {
  var _props$conditions = props.conditions,
      conditions = _props$conditions === void 0 ? {} : _props$conditions;

  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      filter = _useState2[0],
      setFilter = _useState2[1];

  var debouncedFilter = useDebouncedValue(filter, 1000);

  var _useEndpointData = useEndpointData('users.autocomplete', // eslint-disable-next-line react-hooks/exhaustive-deps
  useMemo(function () {
    return query(debouncedFilter, conditions);
  }, [filter])),
      data = _useEndpointData.value;

  var options = useMemo(function () {
    return data && data.items.map(function (user) {
      return {
        value: user.username,
        label: user.name
      };
    }) || [];
  }, [data]);
  return /*#__PURE__*/React.createElement(AutoComplete, _extends({}, props, {
    filter: filter,
    setFilter: setFilter,
    renderSelected: function (_ref) {
      var value = _ref.value,
          label = _ref.label;

      if (!value) {
        return '';
      }

      return /*#__PURE__*/React.createElement(Chip, {
        height: "x20",
        value: value,
        onClick: function () {
          return props.onChange();
        },
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
    renderItem: function (_ref2) {
      var value = _ref2.value,
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
//# sourceMappingURL=/dynamic/client/components/UserAutoComplete/e7c82d42308620a64fc7cca4aabceb39d81b8371.map
