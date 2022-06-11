function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/settings/inputs/RoomPickSettingInput.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _toConsumableArray;

module.link("@babel/runtime/helpers/toConsumableArray", {
  default: function (v) {
    _toConsumableArray = v;
  }
}, 0);
var Box, Field, Flex, Icon;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  },
  Field: function (v) {
    Field = v;
  },
  Flex: function (v) {
    Flex = v;
  },
  Icon: function (v) {
    Icon = v;
  }
}, 0);
var Blaze;
module.link("meteor/blaze", {
  Blaze: function (v) {
    Blaze = v;
  }
}, 1);
var Template;
module.link("meteor/templating", {
  Template: function (v) {
    Template = v;
  }
}, 2);
var React, useRef, useEffect, useLayoutEffect;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useRef: function (v) {
    useRef = v;
  },
  useEffect: function (v) {
    useEffect = v;
  },
  useLayoutEffect: function (v) {
    useLayoutEffect = v;
  }
}, 3);
var ResetSettingButton;
module.link("../ResetSettingButton", {
  "default": function (v) {
    ResetSettingButton = v;
  }
}, 4);

function RoomPickSettingInput(_ref) {
  var _id = _ref._id,
      label = _ref.label,
      value = _ref.value,
      placeholder = _ref.placeholder,
      readonly = _ref.readonly,
      autocomplete = _ref.autocomplete,
      disabled = _ref.disabled,
      hasResetButton = _ref.hasResetButton,
      onChangeValue = _ref.onChangeValue,
      onResetButtonClick = _ref.onResetButtonClick;
  value = value || [];
  var wrapperRef = useRef();
  var valueRef = useRef(value);

  var handleRemoveRoomButtonClick = function (rid) {
    return function () {
      onChangeValue(value.filter(function (_ref2) {
        var _id = _ref2._id;
        return _id !== rid;
      }));
    };
  };

  useLayoutEffect(function () {
    valueRef.current = value;
  });
  useEffect(function () {
    var view = Blaze.renderWithData(Template.inputAutocomplete, {
      id: _id,
      name: _id,
      "class": 'search autocomplete rc-input__element',
      autocomplete: autocomplete === false ? 'off' : undefined,
      readOnly: readonly,
      placeholder: placeholder,
      disabled: disabled,
      settings: {
        limit: 10,
        // inputDelay: 300
        rules: [{
          // @TODO maybe change this 'collection' and/or template
          collection: 'CachedChannelList',
          endpoint: 'rooms.autocomplete.channelAndPrivate',
          field: 'name',
          template: Template.roomSearch,
          noMatchTemplate: Template.roomSearchEmpty,
          matchAll: true,
          selector: function (match) {
            return {
              name: match
            };
          },
          sort: 'name'
        }]
      }
    }, wrapperRef.current);
    $('.autocomplete', wrapperRef.current).on('autocompleteselect', function (event, doc) {
      var value = valueRef.current;
      onChangeValue([].concat(_toConsumableArray(value.filter(function (_ref3) {
        var _id = _ref3._id;
        return _id !== doc._id;
      })), [doc]));
      event.currentTarget.value = '';
      event.currentTarget.focus();
    });
    return function () {
      Blaze.remove(view);
    };
  }, [_id, autocomplete, disabled, onChangeValue, placeholder, readonly, valueRef]);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Flex.Container, null, /*#__PURE__*/React.createElement(Box, null, /*#__PURE__*/React.createElement(Field.Label, {
    htmlFor: _id,
    title: _id
  }, label), hasResetButton && /*#__PURE__*/React.createElement(ResetSettingButton, {
    "data-qa-reset-setting-id": _id,
    onClick: onResetButtonClick
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative'
    },
    ref: wrapperRef
  }), /*#__PURE__*/React.createElement("ul", {
    className: "selected-rooms"
  }, value.map(function (_ref4) {
    var _id = _ref4._id,
        name = _ref4.name;
    return /*#__PURE__*/React.createElement("li", {
      key: _id,
      className: "remove-room",
      onClick: handleRemoveRoomButtonClick(_id)
    }, name, " ", /*#__PURE__*/React.createElement(Icon, {
      name: "cross"
    }));
  })));
}

module.exportDefault(RoomPickSettingInput);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/settings/inputs/71d01478eaef27e6ef6e446e6e466c35adaa0669.map
