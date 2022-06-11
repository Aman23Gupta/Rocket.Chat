function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/apps/AppSettingsAssembler.js                                                                     //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var Box;
module.link("@rocket.chat/fuselage", {
  Box: function (v) {
    Box = v;
  }
}, 0);
var capitalize;
module.link("@rocket.chat/string-helpers", {
  capitalize: function (v) {
    capitalize = v;
  }
}, 1);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 2);
var AppSetting;
module.link("./AppSetting", {
  "default": function (v) {
    AppSetting = v;
  }
}, 3);

var AppSettingsAssembler = function (_ref) {
  var settings = _ref.settings,
      values = _ref.values,
      handlers = _ref.handlers;
  return /*#__PURE__*/React.createElement(Box, null, Object.values(settings).map(function (current) {
    var id = current.id;
    return /*#__PURE__*/React.createElement(AppSetting, {
      key: id,
      appSetting: current,
      value: values[id],
      onChange: handlers["handle" + capitalize(id)]
    });
  }));
};

module.exportDefault(AppSettingsAssembler);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/apps/9df832a2082c692db929f9825bb9a00ed9e328fe.map
