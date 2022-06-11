function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/TeamAutocomplete/TeamAutocomplete.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _excluded = ["value", "label"];

var _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default: function (v) {
    _objectWithoutProperties = v;
  }
}, 0);

var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 1);

var _slicedToArray;

module.link("@babel/runtime/helpers/slicedToArray", {
  default: function (v) {
    _slicedToArray = v;
  }
}, 2);
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
module.link("../../../../hooks/useEndpointData", {
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

var TeamAutocomplete = function (props) {
  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      filter = _useState2[0],
      setFilter = _useState2[1];

  var _useEndpointData = useEndpointData('teams.autocomplete', useMemo(function () {
    return {
      name: filter
    };
  }, [filter])),
      data = _useEndpointData.value;

  var options = useMemo(function () {
    return data && data.teams.map(function (_ref) {
      var name = _ref.name,
          teamId = _ref.teamId,
          _id = _ref._id,
          avatarETag = _ref.avatarETag,
          t = _ref.t;
      return {
        value: teamId,
        label: {
          name: name,
          avatarETag: avatarETag,
          type: t,
          _id: _id
        }
      };
    }) || [];
  }, [data]);
  return /*#__PURE__*/React.createElement(AutoComplete, _extends({}, props, {
    filter: filter,
    setFilter: setFilter,
    renderSelected: function (_ref2) {
      var label = _ref2.label;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Avatar, _extends({
        size: "x20"
      }, label, {
        test: "selected"
      })), " ", label.name);
    },
    renderItem: function (_ref3) {
      var value = _ref3.value,
          label = _ref3.label,
          props = _objectWithoutProperties(_ref3, _excluded);

      return /*#__PURE__*/React.createElement(Option, _extends({
        key: value
      }, props, {
        label: label.name,
        avatar: /*#__PURE__*/React.createElement(Avatar, label)
      }));
    },
    options: options
  }));
};

module.exportDefault( /*#__PURE__*/memo(TeamAutocomplete));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/TeamAutocomplete/1803cdfbd571b173020c4f3c4d9d95bd88da4de7.map
