function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/audit/RoomAutoComplete/RoomAutoComplete.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["value", "label"];

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

var _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default: function (v) {
    _objectSpread = v;
  }
}, 2);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 3);
var AutoComplete, Option;
module.link("@rocket.chat/fuselage", {
  AutoComplete: function (v) {
    AutoComplete = v;
  },
  Option: function (v) {
    Option = v;
  }
}, 0);
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
}, 1);
var useEndpointData;
module.link("../../../../client/hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 2);
var Avatar;
module.link("./Avatar", {
  "default": function (v) {
    Avatar = v;
  }
}, 3);

var query = function () {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return {
    selector: JSON.stringify({
      name: name
    })
  };
};

var RoomAutoComplete = function (props) {
  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      filter = _useState2[0],
      setFilter = _useState2[1];

  var _useEndpointData = useEndpointData('rooms.autocomplete.adminRooms', useMemo(function () {
    return query(filter);
  }, [filter])),
      data = _useEndpointData.value;

  var options = useMemo(function () {
    return data && data.items.map(function (_ref) {
      var name = _ref.name,
          _id = _ref._id,
          fname = _ref.fname,
          avatarETag = _ref.avatarETag,
          t = _ref.t;
      return {
        value: _id,
        label: {
          name: fname || name,
          avatarETag: avatarETag,
          type: t
        }
      };
    }) || [];
  }, [data]);
  return /*#__PURE__*/React.createElement(AutoComplete, _extends({}, props, {
    filter: filter,
    setFilter: setFilter,
    renderSelected: function (_ref2) {
      var value = _ref2.value,
          label = _ref2.label;
      return /*#__PURE__*/React.createElement(Option, {
        label: label.name,
        avatar: /*#__PURE__*/React.createElement(Avatar, {
          value: value,
          room: _objectSpread({
            _id: value
          }, label)
        })
      });
    },
    renderItem: function (_ref3) {
      var value = _ref3.value,
          label = _ref3.label,
          props = _objectWithoutProperties(_ref3, _excluded);

      return /*#__PURE__*/React.createElement(Option, _extends({
        key: value
      }, props, {
        label: label.name,
        avatar: /*#__PURE__*/React.createElement(Avatar, _extends({
          value: value
        }, label))
      }));
    },
    options: options
  }));
};

module.exportDefault( /*#__PURE__*/memo(RoomAutoComplete));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/audit/RoomAutoComplete/dff0efaae07e1610b818ce03d1835e498a398246.map
