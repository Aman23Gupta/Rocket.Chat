function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// ee/client/omnichannel/additionalForms/PrioritiesSelect.js                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
module.export({
  PrioritiesSelect: function () {
    return PrioritiesSelect;
  }
});
var Field, Select;
module.link("@rocket.chat/fuselage", {
  Field: function (v) {
    Field = v;
  },
  Select: function (v) {
    Select = v;
  }
}, 0);
var React, useMemo;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  useMemo: function (v) {
    useMemo = v;
  }
}, 1);

var PrioritiesSelect = function (_ref) {
  var options = _ref.options,
      value = _ref.value,
      handler = _ref.handler,
      label = _ref.label;
  var optionsSelect = useMemo(function () {
    return options && options.length > 0 && options.map(function (option) {
      return [option._id, option.name];
    });
  }, [options]);
  return /*#__PURE__*/React.createElement(Field, null, /*#__PURE__*/React.createElement(Field.Label, null, label), /*#__PURE__*/React.createElement(Field.Row, null, /*#__PURE__*/React.createElement(Select, {
    value: value,
    onChange: handler,
    options: optionsSelect
  })));
};

module.exportDefault(PrioritiesSelect);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/ee/client/omnichannel/additionalForms/dcfdb6dd5debdc2780ac5ecae0a5c657c807a9cf.map
