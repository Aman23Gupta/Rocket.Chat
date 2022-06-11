function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/teams/contextualBar/TeamAutocomplete/TeamAutocomplete.js                                               //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["value", "label"];

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 0);

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
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
module.link("../../../../hooks/useEndpointData", {
  useEndpointData(v) {
    useEndpointData = v;
  }

}, 2);
let Avatar;
module.link("./Avatar", {
  default(v) {
    Avatar = v;
  }

}, 3);

const TeamAutocomplete = props => {
  const [filter, setFilter] = useState('');
  const {
    value: data
  } = useEndpointData('teams.autocomplete', useMemo(() => ({
    name: filter
  }), [filter]));
  const options = useMemo(() => data && data.teams.map(_ref => {
    let {
      name,
      teamId,
      _id,
      avatarETag,
      t
    } = _ref;
    return {
      value: teamId,
      label: {
        name,
        avatarETag,
        type: t,
        _id
      }
    };
  }) || [], [data]);
  return /*#__PURE__*/React.createElement(AutoComplete, _extends({}, props, {
    filter: filter,
    setFilter: setFilter,
    renderSelected: _ref2 => {
      let {
        label
      } = _ref2;
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Avatar, _extends({
        size: "x20"
      }, label, {
        test: "selected"
      })), " ", label.name);
    },
    renderItem: _ref3 => {
      let {
        value,
        label
      } = _ref3,
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
//# sourceMappingURL=/dynamic/client/views/teams/contextualBar/TeamAutocomplete/2717007a51edc3130fe19851bc6a17eec4fcad1a.map
