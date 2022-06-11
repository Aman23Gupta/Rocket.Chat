function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/AppSettingsAssembler.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let Box;
module.link("@rocket.chat/fuselage", {
  Box(v) {
    Box = v;
  }

}, 0);
let capitalize;
module.link("@rocket.chat/string-helpers", {
  capitalize(v) {
    capitalize = v;
  }

}, 1);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 2);
let AppSetting;
module.link("./AppSetting", {
  default(v) {
    AppSetting = v;
  }

}, 3);

const AppSettingsAssembler = _ref => {
  let {
    settings,
    values,
    handlers
  } = _ref;
  return /*#__PURE__*/React.createElement(Box, null, Object.values(settings).map(current => {
    const {
      id
    } = current;
    return /*#__PURE__*/React.createElement(AppSetting, {
      key: id,
      appSetting: current,
      value: values[id],
      onChange: handlers["handle".concat(capitalize(id))]
    });
  }));
};

module.exportDefault(AppSettingsAssembler);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/c3212b430291c5a2a11d3abbd506c75d8874b4bf.map
