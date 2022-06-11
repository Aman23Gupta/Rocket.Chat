function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/components/Message/Body/TaskList.tsx                                                                         //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let CheckBox;
module.link("@rocket.chat/fuselage", {
  CheckBox(v) {
    CheckBox = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let Inline;
module.link("./Inline", {
  default(v) {
    Inline = v;
  }

}, 2);

const TaksList = _ref => {
  let {
    value
  } = _ref;
  return /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: 'none',
      marginLeft: 0,
      paddingLeft: 0
    }
  }, value.map(item => /*#__PURE__*/React.createElement("li", null, /*#__PURE__*/React.createElement(CheckBox, {
    checked: item.status
  }), " ", /*#__PURE__*/React.createElement(Inline, {
    value: item.value
  }))));
};

module.exportDefault(TaksList);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/components/Message/Body/754520869ee787225e12b3f0eaeb1baad05b149e.map
