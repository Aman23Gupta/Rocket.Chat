function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/audit/VisitorAutoComplete.js                                                                              //
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
module.link("../../../client/hooks/useEndpointData", {
  useEndpointData: function (v) {
    useEndpointData = v;
  }
}, 2);

var query = function () {
  var term = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return {
    selector: JSON.stringify({
      term: term
    })
  };
};

var VisitorAutoComplete = function (props) {
  var _useState = useState(''),
      _useState2 = _slicedToArray(_useState, 2),
      filter = _useState2[0],
      setFilter = _useState2[1];

  var _useEndpointData = useEndpointData('livechat/visitors.autocomplete', useMemo(function () {
    return query(filter);
  }, [filter])),
      data = _useEndpointData.value;

  var options = useMemo(function () {
    return data && data.items.map(function (user) {
      return {
        value: user._id,
        label: user.name
      };
    }) || [];
  }, [data]);
  return /*#__PURE__*/React.createElement(AutoComplete, _extends({}, props, {
    filter: filter,
    setFilter: setFilter,
    renderSelected: function (_ref) {
      var label = _ref.label;
      return /*#__PURE__*/React.createElement(React.Fragment, null, label);
    },
    renderItem: function (_ref2) {
      var value = _ref2.value,
          props = _objectWithoutProperties(_ref2, _excluded);

      return /*#__PURE__*/React.createElement(Option, _extends({
        key: value
      }, props));
    },
    options: options
  }));
};

module.exportDefault( /*#__PURE__*/memo(VisitorAutoComplete));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/audit/6ec8851b587dc8eb3116543533f4312a5d1341a3.map
