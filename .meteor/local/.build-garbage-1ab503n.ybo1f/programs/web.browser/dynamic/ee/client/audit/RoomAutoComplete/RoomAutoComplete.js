function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/audit/RoomAutoComplete/RoomAutoComplete.js                                                                //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
const _excluded = ["value", "label"];

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

let _objectSpread;

module.link("@babel/runtime/helpers/objectSpread2", {
  default(v) {
    _objectSpread = v;
  }

}, 2);
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
module.link("../../../../client/hooks/useEndpointData", {
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

const query = function () {
  let name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return {
    selector: JSON.stringify({
      name
    })
  };
};

const RoomAutoComplete = props => {
  const [filter, setFilter] = useState('');
  const {
    value: data
  } = useEndpointData('rooms.autocomplete.adminRooms', useMemo(() => query(filter), [filter]));
  const options = useMemo(() => data && data.items.map(_ref => {
    let {
      name,
      _id,
      fname,
      avatarETag,
      t
    } = _ref;
    return {
      value: _id,
      label: {
        name: fname || name,
        avatarETag,
        type: t
      }
    };
  }) || [], [data]);
  return /*#__PURE__*/React.createElement(AutoComplete, _extends({}, props, {
    filter: filter,
    setFilter: setFilter,
    renderSelected: _ref2 => {
      let {
        value,
        label
      } = _ref2;
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
//# sourceMappingURL=/dynamic/ee/client/audit/RoomAutoComplete/850fe9923e0274596f967e51aeceb3e7a4df83b0.map
