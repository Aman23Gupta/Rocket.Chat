function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/audit/VisitorAutoComplete.js                                                                              //
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
let AutoComplete, Option;
module.link("@rocket.chat/fuselage", {
  AutoComplete(v) {
    AutoComplete = v;
  },

  Option(v) {
    Option = v;
  }

}, 0);
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

}, 1);
let useEndpointData;
module.link("../../../client/hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 2);

const query = function () {
  let term = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return {
    selector: JSON.stringify({
      term
    })
  };
};

const VisitorAutoComplete = props => {
  const [filter, setFilter] = useState('');
  const {
    value: data
  } = useEndpointData('livechat/visitors.autocomplete', useMemo(() => query(filter), [filter]));
  const options = useMemo(() => data && data.items.map(user => ({
    value: user._id,
    label: user.name
  })) || [], [data]);
  return /*#__PURE__*/React.createElement(AutoComplete, _extends({}, props, {
    filter: filter,
    setFilter: setFilter,
    renderSelected: _ref => {
      let {
        label
      } = _ref;
      return /*#__PURE__*/React.createElement(React.Fragment, null, label);
    },
    renderItem: _ref2 => {
      let {
        value
      } = _ref2,
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
//# sourceMappingURL=/dynamic/ee/client/audit/7b070d8a5b3c70b20defe97705f0443a6c7b25a5.map
