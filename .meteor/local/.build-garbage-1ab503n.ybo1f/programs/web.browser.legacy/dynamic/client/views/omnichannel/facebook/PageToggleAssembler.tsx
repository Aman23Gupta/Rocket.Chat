function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/facebook/PageToggleAssembler.tsx                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _extends;

module.link("@babel/runtime/helpers/extends", {
  default: function (v) {
    _extends = v;
  }
}, 0);
var FieldGroup;
module.link("@rocket.chat/fuselage", {
  FieldGroup: function (v) {
    FieldGroup = v;
  }
}, 0);
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 1);
var PageToggle;
module.link("./PageToggle", {
  "default": function (v) {
    PageToggle = v;
  }
}, 2);

var PageToggleAssembler = function (_ref) {
  var pages = _ref.pages,
      onToggle = _ref.onToggle,
      className = _ref.className;
  return /*#__PURE__*/React.createElement(FieldGroup, null, pages.map(function (page) {
    return /*#__PURE__*/React.createElement(PageToggle, _extends({
      key: page.id
    }, page, {
      onToggle: onToggle,
      className: className
    }));
  }));
};

module.exportDefault(PageToggleAssembler);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/facebook/feeb7decc52e2d36c199d53db0091720ef7a6be0.map
