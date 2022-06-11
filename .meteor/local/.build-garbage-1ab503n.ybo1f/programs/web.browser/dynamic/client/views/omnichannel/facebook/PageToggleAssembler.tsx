function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/omnichannel/facebook/PageToggleAssembler.tsx                                                           //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);
let FieldGroup;
module.link("@rocket.chat/fuselage", {
  FieldGroup(v) {
    FieldGroup = v;
  }

}, 0);
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 1);
let PageToggle;
module.link("./PageToggle", {
  default(v) {
    PageToggle = v;
  }

}, 2);

const PageToggleAssembler = _ref => {
  let {
    pages,
    onToggle,
    className
  } = _ref;
  return /*#__PURE__*/React.createElement(FieldGroup, null, pages.map(page => /*#__PURE__*/React.createElement(PageToggle, _extends({
    key: page.id
  }, page, {
    onToggle: onToggle,
    className: className
  }))));
};

module.exportDefault(PageToggleAssembler);
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/omnichannel/facebook/cd472426765d5067423546b1ee5cb8a5994915cb.map
