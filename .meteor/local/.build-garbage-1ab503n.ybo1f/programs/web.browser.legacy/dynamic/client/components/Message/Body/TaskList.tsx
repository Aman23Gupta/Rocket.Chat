function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Body/TaskList.tsx                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var CheckBox;
module.link("@rocket.chat/fuselage", {
  CheckBox: function (v) {
    CheckBox = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var Inline;
module.link("./Inline", {
  "default": function (v) {
    Inline = v;
  }
}, 2);

var TaksList = function (_ref) {
  var value = _ref.value;
  return /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      marginLeft: 0,
      paddingLeft: 0
    }
  }, value.map(function (item) {
    return /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(CheckBox, {
      checked: item.status
    }), " ", /*#__PURE__*/React.createElement(Inline, {
      value: item.value
    }));
  }));
};

module.exportDefault(TaksList);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Body/22bf2a877453d11fedbc58469b828b1ca00d14d1.map
