function module(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                                     //
// client/views/admin/permissions/RoleHeader.js                                                                        //
//                                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                                       //
var _templateObject;

const _excluded = ["router", "_id", "name", "description"];

let _extends;

module.link("@babel/runtime/helpers/extends", {
  default(v) {
    _extends = v;
  }

}, 0);

let _taggedTemplateLiteral;

module.link("@babel/runtime/helpers/taggedTemplateLiteral", {
  default(v) {
    _taggedTemplateLiteral = v;
  }

}, 1);

let _objectWithoutProperties;

module.link("@babel/runtime/helpers/objectWithoutProperties", {
  default(v) {
    _objectWithoutProperties = v;
  }

}, 2);
let css;
module.link("@rocket.chat/css-in-js", {
  css(v) {
    css = v;
  }

}, 0);
let Margins, Box, Icon;
module.link("@rocket.chat/fuselage", {
  Margins(v) {
    Margins = v;
  },

  Box(v) {
    Box = v;
  },

  Icon(v) {
    Icon = v;
  }

}, 1);
let useMutableCallback;
module.link("@rocket.chat/fuselage-hooks", {
  useMutableCallback(v) {
    useMutableCallback = v;
  }

}, 2);
let React, memo;
module.link("react", {
  default(v) {
    React = v;
  },

  memo(v) {
    memo = v;
  }

}, 3);
let GenericTable;
module.link("../../../components/GenericTable", {
  default(v) {
    GenericTable = v;
  }

}, 4);

const RoleHeader = _ref => {
  let {
    router,
    _id,
    name,
    description
  } = _ref,
      props = _objectWithoutProperties(_ref, _excluded);

  const onClick = useMutableCallback(() => {
    router.push({
      context: 'edit',
      _id
    });
  });
  return /*#__PURE__*/React.createElement(GenericTable.HeaderCell, _extends({
    clickable: true,
    pi: "x4",
    p: "x8"
  }, props), /*#__PURE__*/React.createElement(Box, {
    className: css(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n\t\t\t\t\twhite-space: nowrap;\n\t\t\t\t"]))),
    pb: "x8",
    pi: "x12",
    mi: "neg-x2",
    borderStyle: "solid",
    borderWidth: "x2",
    borderRadius: "x2",
    borderColor: "neutral-300",
    onClick: onClick
  }, /*#__PURE__*/React.createElement(Margins, {
    inline: "x2"
  }, /*#__PURE__*/React.createElement("span", null, description || name), /*#__PURE__*/React.createElement(Icon, {
    name: "edit",
    size: "x16"
  }))));
};

module.exportDefault( /*#__PURE__*/memo(RoleHeader));
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

}
//# sourceMappingURL=/dynamic/client/views/admin/permissions/8690dcc28c7e2e8c7955324398aefc00d834b182.map
