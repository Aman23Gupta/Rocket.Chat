function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/additionalForms/PrioritiesSelect.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  PrioritiesSelect: () => PrioritiesSelect
});
let Field, Select;
module.link("@rocket.chat/fuselage", {
  Field(v) {
    Field = v;
  },

  Select(v) {
    Select = v;
  }

}, 0);
let React, useMemo;
module.link("react", {
  default(v) {
    React = v;
  },

  useMemo(v) {
    useMemo = v;
  }

}, 1);

const PrioritiesSelect = _ref => {
  let {
    options,
    value,
    handler,
    label
  } = _ref;
  const optionsSelect = useMemo(() => options && options.length > 0 && options.map(option => [option._id, option.name]), [options]);
  return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, label), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Select, {
    value: value,
    onChange: handler,
    options: optionsSelect
  })));
};

module.exportDefault(PrioritiesSelect);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/additionalForms/b1bc6232bc386cf4808fdc463bb53e55058813d9.map
