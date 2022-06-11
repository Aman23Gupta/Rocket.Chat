function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/settings/inputs/RoomPickSettingInput.js                                                          //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box, Field, Flex, Icon;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  },

  Field(v) {
    Field = v;
  },

  Flex(v) {
    Flex = v;
  },

  Icon(v) {
    Icon = v;
  }

}, 0);
let Blaze;
module.link("meteor/blaze", {
  Blaze(v) {
    Blaze = v;
  }

}, 1);
let Template;
module.link("meteor/templating", {
  Template(v) {
    Template = v;
  }

}, 2);
let React, useRef, useEffect, useLayoutEffect;
module.link("react", {
  default(v) {
    React = v;
  },

  useRef(v) {
    useRef = v;
  },

  useEffect(v) {
    useEffect = v;
  },

  useLayoutEffect(v) {
    useLayoutEffect = v;
  }

}, 3);
let ResetSettingButton;
module.link("../ResetSettingButton", {
  default(v) {
    ResetSettingButton = v;
  }

}, 4);

function RoomPickSettingInput(_ref) {
  let {
    _id,
    label,
    value,
    placeholder,
    readonly,
    autocomplete,
    disabled,
    hasResetButton,
    onChangeValue,
    onResetButtonClick
  } = _ref;
  value = value || [];
  const wrapperRef = useRef();
  const valueRef = useRef(value);

  const handleRemoveRoomButtonClick = rid => () => {
    onChangeValue(value.filter(_ref2 => {
      let {
        _id
      } = _ref2;
      return _id !== rid;
    }));
  };

  useLayoutEffect(() => {
    valueRef.current = value;
  });
  useEffect(() => {
    const view = Blaze.renderWithData(Template.inputAutocomplete, {
      id: _id,
      name: _id,
      class: 'search autocomplete rc-input__element',
      autocomplete: autocomplete === false ? 'off' : undefined,
      readOnly: readonly,
      placeholder,
      disabled,
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
          selector: match => ({
            name: match
          }),
          sort: 'name'
        }]
      }
    }, wrapperRef.current);
    $('.autocomplete', wrapperRef.current).on('autocompleteselect', (event, doc) => {
      const {
        current: value
      } = valueRef;
      onChangeValue([...value.filter(_ref3 => {
        let {
          _id
        } = _ref3;
        return _id !== doc._id;
      }), doc]);
      event.currentTarget.value = '';
      event.currentTarget.focus();
    });
    return () => {
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
  }, value.map(_ref4 => {
    let {
      _id,
      name
    } = _ref4;
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
//# sourceMappingURL=/dynamic/client/views/admin/settings/inputs/996d96d90c9855452ad70285ba9538446198d977.map
